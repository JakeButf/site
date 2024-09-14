---
title: Analyze Two Data-Sets
description: Module 3. Assignment
---

For this assignment, we were tasked to compute statistics on two different data-sets. The two data-sets are as follows:

```
Set#1:  10, 2, 3, 2, 4, 2, 5
Set#2:  20, 12, 13, 12, 14, 12, 15
```

## Central Tendency (mean, median, and mode)

The first computation on the data-sets was to find the mean, median, and mode. 

### R Code Results

The results (and full R script) is as follows:

```
> #central tendency (mean, medium, and mode)
> #mean
> mean_set1 <- mean(set1)
> mean_set2 <- mean(set2)
> 
> mean_set1
[1] 4
> mean_set2
[1] 14
> 
> #median
> median_set1 <- median(set1)
> median_set2 <- median(set2)
> 
> median_set1
[1] 3
> median_set2
[1] 13
> 
> #mode
> #R has no built in mode function. We have to use our own here.
> #This specific mode function can return multiple modes if a dataset contains
> #more than one. This is not the case with the two data sets we have.
> find_modes <- function(x) {
+ ux <- unique(x)
+   tab <- tabulate(match(x, ux))
+   ux[tab == max(tab)]
+ }
> 
> mode_set1 <- find_modes(set1)
> mode_set2 <- find_modes(set2)
> 
> mode_set1
[1] 2
> mode_set2
[1] 12
```

### Results

The results for each data-set is as follow:

#### Set 1:

**Mean:** 4

**Median:** 3

**Mode:** 2

#### Set 2:

**Mean:** 14

**Median:** 13

**Mode:** 12

## Variance (range, interquartile range, variance, and standard deviation)

The second compuation on the data-sets was to find the range, interquartile range, variance, and standard deviation.

### R Code Results

```
> #variation (range, interquartile range, variance, standard deviation)
> #range
> range_set1 <- range(set1)
> range_set2 <- range(set2)
> 
> range_set1
[1]  2 10
> range_set2
[1] 12 20
> 
> #iqr
> iqr_set1 <- IQR(set1)
> iqr_set2 <- IQR(set2)
> 
> iqr_set1
[1] 2.5
> iqr_set2
[1] 2.5
> 
> #variance
> variance_set1 <- var(set1)
> variance_set2 <- var(set2)
> 
> variance_set1
[1] 8.333333
> variance_set2
[1] 8.333333
> 
> #standard deviation
> sd_set1 <- sd(set1)
> sd_set2 <- sd(set2)
> 
> sd_set1
[1] 2.886751
> sd_set2
[1] 2.886751

```

### Results

The results for each data-set is as follow:

#### Set 1:

**Range:** 2, 10

**Interquartile Range:** 2.5

**Variance:** 8.333333

**Standard Deviation:** .886751

#### Set 2:

**Range:** 12, 20

**Interquartile Range:** 2.5

**Variance:** 8.333333

**Standard Deviation:** .886751

## Conclusion

**Conclusion:**

Despite the difference in the two data-sets central tendencies, both data-sets have identical measures of variation. This means that while the values in Set #2 are higher than those in Set #1, the spread in both sets is identical.



