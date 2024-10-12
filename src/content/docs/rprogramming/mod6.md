---
title: Variance and Standard Deviation
description: Module 6. Assignment
---
## Question A.
Consider a population consisting of the following values, which represents the number of ice cream purchases during the academic year for each of the five housemates.
8, 14, 16, 10, 11

### a. Compute the mean of this population.

```
> x <- c(8, 14, 16, 10, 11)
> populationMean <- mean(x)
> populationMean
[1] 11.8
```

### b. Select a random sample of size 2 out of the five members. See the example I used in my Power-point presentation slide # 13. 

```
> combinations <- combn(x, 2)
> combinations
    [,1] [,2] [,3] [,4] [,5] [,6] [,7] [,8] [,9] [,10]
[1,]   8    8    8    8   14   14   14   16   16    10
[2,]  14   16   10   11   16   10   11   10   11    11
```

### c. Compute the mean and standard deviation of your sample.

```
> sampleMeans <- colMeans(combinations)
> sampleMeans
 [1] 11.0 12.0 9.0 9.5 15.0 12.0 12.5 13.0 13.5 10.5
> sample SD <- apply(combinations, 2, sd)
> sampleSD
 [1] 4.2426402 5.6568542 1.4142136 2.1213203 1.4142136 2.8284271 2.1213203 4.2426407 3.5355339 0.7071068
```

### d. Compare the Mean and Standard deviation of your sample to the entire population of this set (8,14, 16, 10, 11).

```
> combinations             1      2      3      4      5      6      7      8      9      10
Value 1                8.00   8.00   8.00   8.00  14.00  14.00  14.00  14.00  16.00   16.00
Value 2               14.00  16.00  10.00  11.00  16.00  10.00  11.00  10.00  11.00   11.00
Mean                  11.00  12.00   9.00   9.50  15.00  12.00  12.50  13.00  13.50   10.50
SD                     4.24   5.66   1.41   2.12   1.41   2.83   2.12   2.42   2.12    4.95
sampleMeans            9.31  10.41   7.10   7.66  11.60   9.71   9.90  10.81  11.01    8.05
sampleSD               4.17   4.55   3.88   3.89   6.84   4.87   5.33   5.02   5.38    4.91
```

## Question B. 

Suppose that the sample size n = 100 and the population proportion p = 0.95.
### 1. Does the sample proportion p have approximately a normal distribution? Explain.

Yes the sample proportion p is approximately normally distributed. This approximation holds true if both np and nq are greater than 5. In this case, np = 0.95 * 100 = 95 and nq = 0.05 * 100 = 5. This satisfies the condition for a normal distribution.

### 2. What is the smallest value of n for which the sampling distribution of p is approximately normal?   

The lowest value of n for which the sampling distribution of p is approximately normal is 100. If n were to be less than 100 nq would drop below 5. This would violate the condition for normality.

## Question C.

From our textbook, Chapter 2 Probability Exercises # 2.4
Simulated coin tossing is probability better done using function called rbinom than using function called sample.  Explain.
colnames(combinations) <- c(“1”, “2”, “3”, “4”, “5”, “6”, “7”, “8”,”9″, “10”)
rownames(combinations) <- c(“Value 1”, “Value 2”, “Mean”, “SD”)

The rbinom function is better used for simulating coin tosses because it is optimized for generating binomial outcomes. It is also much more efficient with larger datasets.