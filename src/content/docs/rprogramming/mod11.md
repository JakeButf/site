---
title: Models
description: Module 11. Assignment
---

## Question 1. 10.1 
Set up an additive model for the ashina data, as part of ISwR package

This data contain additive effects on subjects, period and treatment. Compare the results with those obtained from t tests. 

Hint
```
ashina$subject <- factor(1:16)
   attach(ashina)
   act <- data.frame(vas=vas.active, subject, treat=1, period=grp)
   plac <-data.frame(vas=vas.plac, subject, treat=0,
```

```
> library(ISwR)
> data(ashina)
> ashina$subject <- factor(1:16)
> attach(ashina)
> act <- data.frame(vas = vas.active, subject, treat = 1, period = grp)
> plac <- data.frame(vas = vas.plac, subject, treat = 0, period = grp)
> combined_data <- rbind(act, plac)
> additive_model <- lm(vas ~ subject + period + treat, data = combined_data)
> summary(additive_model)

Call:
lm(formula = vas ~ subject + period + treat, data = combined_data)

Residuals:
    Min      1Q  Median      3Q     Max 
-48.94  -18.44   0.00   18.44  48.94 

Coefficients: (1 not defined because of singularities)
             Estimate Std. Error t value Pr(>|t|)    
(Intercept) -113.06      27.39  -4.128   0.000895 ***
subject2      51.50      37.58   1.370   0.190721    
subject3     121.50      37.58   3.233   0.005573 ** 
subject4      97.00      37.58   2.581   0.020867 *  
subject5     125.00      37.58   3.326   0.004640 ** 
subject6     119.50      37.58   3.180   0.006215 ** 
subject7     132.00      37.58   3.513   0.003142 ** 
subject8     134.50      37.58   3.580   0.002875 ** 
subject9      80.50      37.58   2.142   0.049003 *  
subject10    124.50      37.58   3.313   0.004755 ** 
subject11     97.00      37.58   2.581   0.020867 *  
subject12    143.00      37.58   3.804   0.001936 ** 
subject13    131.50      37.58   3.499   0.003214 ** 
subject14    112.00      37.58   2.981   0.009358 ** 
subject15    153.50      37.58   4.086   0.001186 ** 
subject16    124.50      37.58   3.313   0.004755 ** 
period        42.87      13.29   3.227   0.005644 ** 
treat        -42.87      13.29  -3.227   0.005644 ** 
---
Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1

Residual standard error: 37.58 on 15 degrees of freedom
Multiple R-squared:  0.7566,    Adjusted R-squared:  0.4969 
F-statistic: 2.914 on 16 and 15 DF,  p-value: 0.02229
```
```
> t_test_results <- t.test(ashina$vas.active, ashina$vas.plac, paired = TRUE)
> t_test_results

    Paired t-test

data:  ashina$vas.active and ashina$vas.plac
t = -3.2269, df = 15, p-value = 0.005644
alternative hypothesis: true mean difference is not equal to 0
95 percent confidence interval:
 -71.1946 -14.5554
sample estimates:
mean difference 
       -42.875 
```

The additive model shows that treatment significantly affects pain scores (p = 0.005644) which is consistent with the paired t-test result. Many individual subject coefficients are also significant, showing variability in pain response among subjects. The period effect is positive and significant, suggesting that the timing of treatment influences pain scores. The model explains about 75.66% of the variance (R^2 = 0.7566).

## Question 2. 10.3.

Consider the following
a <- g1(2, 2, 8) # Creates factor with 2 levels, each repeated 2 times, length 8
b <- g1(2, 4, 8) # Creates factor with 2 levels, each repeated 4 times, length 8
x <- 1:8
y <- c(1:4, 8:5)
z <- rnorm (8)

Note:
The rnorm() is a built-in R function that generates a vector of normally distributed random numbers. The rnorm() method takes a sample size as input and generates that many random numbers.

Your assignment is to generate the model matrices for models

    z ~ a*b  #Model with interaction (a*b),
    z ~ a:b  #Model with only interaction term (a:b)).

In your assignment, please discuss the implications. Please be reminded about the model fits and notice which models contain singularities.
Hint
We are looking for: model.matrix (~ a:b); lm (z ~ a:b)

```
> a <- gl(2, 2, 8)  # Factor a: 2 levels, each repeated 2 times, length 8
> b <- gl(2, 4, 8)  # Factor b: 2 levels, each repeated 4 times, length 8
> x <- 1:8
> y <- c(1:4, 8:5)
> z <- rnorm(8)

> interaction_model_matrix <- model.matrix(~ a * b)
> interaction_model_matrix
  (Intercept) a2 b2 a2:b2
1           1  0  0     0
2           1  0  0     0
3           1  1  0     0
4           1  1  0     0
5           1  0  1     0
6           1  0  1     0
7           1  1  1     1
8           1  1  1     1

attr(,"assign")
[1] 0 1 2 3
attr(,"contrasts")
attr(,"contrasts")$a
[1] "contr.treatment"

attr(,"contrasts")$b
[1] "contr.treatment"

> interaction_model <- lm(z ~ a * b)
> summary(interaction_model)

Call:
lm(formula = z ~ a * b)

Residuals:
       1        2        3        4        5        6        7        8 
 0.8007 -0.8007  0.2983 -0.2983 -0.6505  0.6505 -1.5470  1.5470 

Coefficients:
            Estimate Std. Error t value Pr(>|t|)  
(Intercept)  -1.2789     0.9416  -1.358   0.246  
a2            2.5272     1.3316   1.898   0.131  
b2            0.1297     1.3316   0.097   0.927  
a2:b2        -1.8292     1.8832  -0.971   0.386  

Residual standard error: 1.332 on 4 degrees of freedom
Multiple R-squared:  0.5333,    Adjusted R-squared:  0.1833 
F-statistic: 1.524 on 3 and 4 DF,  p-value: 0.3379
```

```
> interaction_only_model_matrix <- model.matrix(~ a:b)
> interaction_only_model_matrix
  (Intercept) a1:b1 a2:b1 a1:b2 a2:b2
1           1     1     0     0     0
2           1     1     0     0     0
3           1     0     1     0     0
4           1     0     1     0     0
5           1     0     0     1     0
6           1     0     0     1     0
7           1     0     0     0     1
8           1     0     0     0     1

attr(,"assign")
[1] 0 1 1 1 1
attr(,"contrasts")
attr(,"contrasts")$a
[1] "contr.treatment"

attr(,"contrasts")$b
[1] "contr.treatment"

> interaction_only_model <- lm(z ~ a:b)
> summary(interaction_only_model)

Call:
lm(formula = z ~ a:b)

Residuals:
       1        2        3        4        5        6        7        8 
 0.8007 -0.8007  0.2983 -0.2983 -0.6505  0.6505 -1.5470  1.5470 

Coefficients: (1 not defined because of singularities)
            Estimate Std. Error t value Pr(>|t|)
(Intercept)  -0.4512     0.9416  -0.479   0.657
a1:b1        -0.8276     1.3316  -0.622   0.568
a2:b1         1.6951     1.3316   1.273   0.269
a1:b2        -0.6979     1.3316  -0.524   0.623
a2:b2             NA         NA      NA      NA

Residual standard error: 1.332 on 4 degrees of freedom
Multiple R-squared:  0.5333,    Adjusted R-squared:  0.1833 
F-statistic: 1.524 on 3 and 4 DF,  p-value: 0.3379
```

In the full interaction model (z ~ a * b), all factors and interactions are able to be estimated with no singularities. In the interaction-only model (z ~ a:b), one interaction term (a2:b2) is not estimatable due to singularity which shows redundancy. The model fit statistics are similar between models indicating no significant advantage to omitting main effects.