import { useState, useEffect, useMemo, useRef } from 'preact/hooks';
import Papa from 'papaparse';
import { VariableSizeList as List } from 'react-window';
import { useDebounce } from './Debounce';

export default function SearchCSV({ csvUrl }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [sortBy, setSortBy] = useState('Ghidra Name');
  const [sortDirection, setSortDirection] = useState('asc');
  const listRef = useRef(null);

  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    setLoading(true);
    fetch(csvUrl)
      .then((res) => res.text())
      .then((csvText) => {
        const result = Papa.parse(csvText, { header: true });
        setData(result.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching CSV:', error);
        setLoading(false);
      });
  }, [csvUrl]);

  useEffect(() => {
    setExpandedIndex(null);
  }, [debouncedQuery, sortBy, sortDirection]);

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortDirection('asc');
    }
  };

  const filteredAndSortedData = useMemo(() => {
    const searchTerm = debouncedQuery.toLowerCase().trim();
    
    // Filter by search term
    const filtered = data.filter((row) => {
      if (!row) return false;
      const ghidraName = (row['Ghidra Name'] || '').toLowerCase().trim();
      const location = (row['Location'] || '').toLowerCase().trim();
      const nickName = (row['Nick Name'] || '').toLowerCase().trim();
      
      return ghidraName.includes(searchTerm) || 
             location.includes(searchTerm) || 
             nickName.includes(searchTerm);
    });
    
    // Sort the filtered data
    return [...filtered].sort((a, b) => {
      const aValue = (a[sortBy] || '').toLowerCase();
      const bValue = (b[sortBy] || '').toLowerCase();
      
      if (sortDirection === 'asc') {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    });
  }, [data, debouncedQuery, sortBy, sortDirection]);

  const getItemSize = (index) => {
    return expandedIndex === index ? 500 : 180; 
  };

  useEffect(() => {
    if (listRef.current) {
      listRef.current.resetAfterIndex(0, true);
    }
  }, [expandedIndex]);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.resetAfterIndex(0, true);
    }
  }, [filteredAndSortedData]);

  const Row = ({ index, style }) => {
    const row = filteredAndSortedData[index];
    if (!row) return null;

    const isExpanded = expandedIndex === index;
    
    const handleClick = () => {
      setExpandedIndex(isExpanded ? null : index);
    };

    return (
      <div style={{
        ...style,
        paddingLeft: '12px',
        paddingRight: '12px',
        width: '100%',
        paddingBottom: isExpanded ? '30px' : '10px',
      }}>
        <div 
          onClick={handleClick}
          className={`rounded-lg my-3 p-5 mx-auto max-w-2xl cursor-pointer transition-all duration-200 ${
            isExpanded 
              ? 'border border-gray-700' 
              : 'border border-gray-700 hover:border-gray-600'
          }`}
          style={{
            boxShadow: isExpanded 
              ? '0 4px 8px rgba(0, 0, 0, 0.25)' 
              : '0 2px 6px rgba(0, 0, 0, 0.15)',
            backgroundColor: isExpanded ? '#181818' : '#272727',
            color: '#E2E8F0'
          }}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-gray-100">
              {row['Nick Name'] && row['Nick Name'].trim() !== ''
                ? row['Nick Name']
                : row['Ghidra Name']}
            </h3>
          </div>
          <p className="text-sm text-gray-300 mt-2">
            <strong className="text-gray-200">Location:</strong> {row['Location']}
          </p>
          
          {isExpanded && (
            <div className="mt-4 text-sm space-y-2 pt-4 border-t border-gray-700">
              <div className="max-h-[300px] overflow-y-auto pr-2">
                {Object.keys(row)
                  .filter(
                    (key) =>
                      key !== 'Ghidra Name' &&
                      key !== 'Location' &&
                      key !== 'Nick Name' &&
                      row[key] &&
                      row[key].trim() !== ''
                  )
                  .map((key) => (
                    <p key={key} className="py-1 border-b border-gray-800 last:border-b-0">
                      <strong className="text-gray-200">{key}:</strong> {row[key]}
                    </p>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-3xl mx-auto p-4" style={{ color: '#E2E8F0', backgroundColor: '#181818' }}>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Name or Location..."
          value={query}
          onInput={(e) => setQuery(e.target.value)}
          className="w-full p-3 rounded border border-gray-800 mb-3 text-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-500"
        />
        
        <div className="flex flex-wrap gap-2 mt-2">
          <div className="text-sm mr-2 mt-1 text-gray-400">Sort by:</div>
          {['Name', 'Location'].map(column => (
            <button
              key={column}
              onClick={() => handleSort(column === 'Name' ? 'Ghidra Name' : column)}
              className={`px-3 py-1 text-sm rounded transition-colors duration-150 ${
                (sortBy === 'Ghidra Name' && column === 'Name') || sortBy === column
                  ? 'text-gray-100 border border-gray-800' 
                  : 'text-gray-400 border border-gray-800 hover:text-gray-300'
              }`}
              style={{
                backgroundColor: (sortBy === 'Ghidra Name' && column === 'Name') || sortBy === column 
                  ? '#404040' 
                  : '#272727'
              }}
            >
              {column} {((sortBy === 'Ghidra Name' && column === 'Name') || sortBy === column) && 
                (sortDirection === 'asc' ? '↑' : '↓')}
            </button>
          ))}
        </div>
      </div>
      
      {loading ? (
        <div className="text-center py-8 text-gray-300">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-2 border-gray-700 border-t-transparent"></div>
          <p className="mt-2">Loading data... (This may take a while)</p>
        </div>
      ) : filteredAndSortedData.length === 0 ? (
        <p className="text-center py-4 text-gray-300">No results found.</p>
      ) : (
        <div className="border border-gray-700 rounded-lg overflow-hidden shadow-lg" style={{ backgroundColor: '#181818' }}>
          <p className="px-4 py-2 text-sm font-medium text-gray-200" style={{ backgroundColor: '#272727', borderBottom: '1px solid #404040' }}>
            Found {filteredAndSortedData.length} results
          </p>
          <div className="relative" style={{ backgroundColor: '#181818' }}> 
            <List
              height={600}
              width="100%"
              itemCount={filteredAndSortedData.length}
              itemSize={getItemSize}
              ref={listRef}
              overscanCount={5}
              className="list-container"
              itemKey={(index) => {
                const row = filteredAndSortedData[index];
                return row ? (row['Ghidra Name'] || index) : index;
              }}
            >
              {Row}
            </List>
          </div>
        </div>
      )}
    </div>
  );
}
