---
title: Correlation Analysis
description: Module 5. Assignment
---

## Question 1

A cookie company is evaluating a new machine that should produce cookies with a mean breaking strength of 70 pounds and a standard deviation of 3.5 pounds. A sample of 49 cookies reveals a sample mean breaking strength of 69.1 pounds. The questions we need to address are:

- A. State the null and alternative hypotheses.
- B. Is there evidence the machine is not meeting the manufacturer's specifications at a 0.05 significance level?
- C. Compute the p-value and interpret its meaning.
- D. What if the standard deviation were 1.75 pounds?
- E. What if the sample mean were 69 pounds?

### A. State the null and alternative hypothesis _______

The null and alternative hypotheses are:

Null Hypothesis (H₀): The mean breaking strength of cookies is 70 pounds.
H₀: μ = 70

Alternative Hypothesis (H₁): The mean breaking strength of cookies is not 70 pounds.
H₁: μ != 70

### B. Is there evidence that the machine is not meeting the manufacturer's specifications for average strength? Use a 0.05 level of significance _______

We perform a two-tailed hypothesis test at a 0.05 significance level (α = 0.05). First, we calculate the z-score:

z = (x̄ - μ) / (σ / √n)

Where:
x̄ = 69.1 (sample mean)
μ = 70 (population mean)
σ = 3.5 (standard deviation)
n = 49 (sample size)

Substitute the values:
z = (69.1 - 70) / (3.5 / √49)
z = -0.9 / 0.5
z = -1.8

The critical z-values for a 0.05 significance level are +- 1.96. Since the absolute value of z (|z| = 1.8) is less than 1.96, we do not reject the null hypothesis. This suggests there is insufficient evidence to conclude that the machine is not meeting the manufacturer’s specifications.

### C. Compute the p value and interpret its meaning _______

The p-value is calculated using the R function `pnorm`:

```
p_value <- 2 * pnorm(-abs(-1.8))
p_value
```

The result is approximately 0.0718. Since the p-value is greater than 0.05, we do not reject the null hypothesis.

At the 0.05 significance level, there is no evidence to suggest that the machine is producing cookies with a mean strength different from 70 pounds.

### D. What would be your answer in (B) if the standard deviation were specified as 1.75 pounds?______

We recalculate the z-score with the new standard deviation:

z = (x̄ - μ) / (σ / √n)

Substitute the values:
z = (69.1 - 70) / (1.75 / √49)
z = -0.9 / 0.25
z = -3.6

The p-value is:

```
p_value <- 2 * pnorm(-abs(-3.6))
p_value
```
The p-value is much smaller than 0.05, so we reject the null hypothesis.

With a standard deviation of 1.75 pounds, there is strong evidence that the machine is not meeting the manufacturer’s specifications.

### E. What would be your answer in (B) if the sample mean were 69 pounds and the standard deviation is 3.5 pounds? ______

We adjust the sample mean to 69 pounds and recalculate the z-score:

z = (x̄ - μ) / (σ / √n)

Substitute the values:
z = (69 - 70) / (3.5 / √49)
z = -1 / 0.5
z = -2

The p-value is:

```
p_value <- 2 * pnorm(-abs(-2))
p_value
```

The p-value is approximately 0.0455. Since this is less than 0.05, we reject the null hypothesis.

With a sample mean of 69 pounds, we conclude that the machine is not meeting the manufacturer’s specifications.

## Question 2 If x̅ = 85, σ = standard deviation = 8, and n=64, set up 95% confidence interval estimate of the population mean μ. 

Let’s calculate the 95% confidence interval for the population mean in a separate case where:

    Sample mean (x̄) = 85
    Standard deviation (σ) = 8
    Sample size (n) = 64

For a 95% confidence level, the critical z-value is 1.96. Using the formula:

CI = x̄ ± z* × (σ / √n)

Substitute the values:
CI = 85 ± 1.96 × (8 / √64)
CI = 85 ± 1.96 × 1
CI = 85 ± 1.96

The confidence interval is:
(83.04, 86.96)

We are 95% confident that the true population mean lies between 83.04 and 86.96.

## Question 3, using Correlation Analysis

```
girls_data <- data.frame(
  Goals = c(4, 5, 6),
  Grades = c(49, 50, 69),
  Popular = c(24, 36, 38),
  Time_Spent = c(19, 22, 28),
  Total = c(92, 108, 135)
)

boys_data <- data.frame(
  Goals = c(4, 5, 6),
  Grades = c(46.1, 54.2, 67.7),
  Popular = c(26.9, 31.6, 39.5),
  Time_Spent = c(18.9, 22.2, 27.8),
  Total = c(95.9, 113, 141)
)


print("girl data:")

print(girls_data)

print("boy data:")

print(boys_data)

Result:[1] "girl data:"

  Goals Grades Popular Time_Spent Total
1     4     49      24         19    92
2     5     50      36         22   108
3     6     69      38         28   135
[1] "boy data:"
  Goals Grades Popular Time_Spent Total
1     4   46.1    26.9       18.9  95.9
2     5   54.2    31.6       22.2 113.0
3     6   67.7    39.5       27.8 141.0
```