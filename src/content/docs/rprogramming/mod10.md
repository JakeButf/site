---
title: Variance and Regression
description: Module 10. Assignment
---

## Question 1. 

Conduct ANOVA (analysis of variance) and Regression coefficients to the data from data (" cystfibr ") database. You can choose any variable you like to interpret. In the report, you need to state the result of coefficients and significance to any variables you like both under ANOVA and multivariate analysis. Please provide a specific interpretation of R results. 

Clue:

Import library(ISwR)
The model code example:

    lm(pemax ~ age + weight + bmp + fev1, data = cystfibr)
    anova(lm(pemax ~ age + weight + bmp + fev1, data=cystfibr))

```
> library(ISwR)
> data("cystfibr")
> model <-lm(pemax ~ age + weight + bmp + fev1, data = cystfibr)
> anova_results <- anova(model)
> anova_results
Analysis of Variance Table

Response: pemax
          Df  Sum Sq Mean Sq
age        1 10098.5 10098.5
weight     1   945.2   945.2
bmp        1  2379.7  2379.7
fev1       1  2455.6  2455.6
Residuals 20 10953.7   547.7
          F value    Pr(>F)    
age       18.4385 0.0003538 ***
weight     1.7258 0.2038195    
bmp        4.3450 0.0501483 .  
fev1       4.4836 0.0469468 *  
Residuals                      
---
Signif. codes:  
  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’
  0.05 ‘.’ 0.1 ‘ ’ 1

> summary(model)

Call:
lm(formula = pemax ~ age + weight + bmp + fev1, data = cystfibr)

Residuals:
    Min      1Q  Median      3Q 
-42.521 -10.885   3.003  15.488 
    Max 
 41.767 

Coefficients:
            Estimate Std. Error
(Intercept) 179.2957    61.8855
age          -3.4181     3.3086
weight        2.6882     1.1727
bmp          -2.0657     0.8198
fev1          1.0882     0.5139
            t value Pr(>|t|)   
(Intercept)   2.897  0.00891 **
age          -1.033  0.31389   
weight        2.292  0.03287 * 
bmp          -2.520  0.02036 * 
fev1          2.117  0.04695 * 
---
Signif. codes:  
  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05
  ‘.’ 0.1 ‘ ’ 1

Residual standard error: 23.4 on 20 degrees of freedom
Multiple R-squared:  0.5918,	Adjusted R-squared:  0.5101 
F-statistic: 7.248 on 4 and 20 DF,  p-value: 0.0008891
```
This ANOVA test was performed to test if the coefficients at all contributed to the 
variation of pemax. Weight, bpm, and fev1 are significant because they are 
< 0.05. Age in this case is .31389 and is not significant in this test.

- Weight has a positive impact on pemax. 
- bpm has a negative impact on pemax (bpm increases pemax decreases)
- fev1 and weight have a positive impact (fev1 and weight increase pemax increases)


## Question 2. 

The secher data("secher") are best analyzed after log-transforming birth weight as well as the abdominal and biparietal diameters. Fit a prediction weight as well as abdominal and biparietal diameters. For a prediction equation for birth weight. How much is gained by using both diameters in a prediction equation? The sum of the two regression coefficients is almost identical and equal to 3. Can this be given a nice interpretation to our analysis?
Please provide step by step on your analysis and code you use to find out the result. 

Clue:

    Model with only abdominal diameter: model_ad <- lm(log(bwt) ~ I(log(ad)), data=secher)
    Model with only biparietal diameter: model_bpd <- lm(log(bwt) ~ I(log(bpd)), data=secher)
    Combine both models: model_combined <- lm(log(bwt) ~ I(log(ad)) + I(log(bpd)), data=secher)
    summary(model_combined)

```
> data("secher")
> model_ad <- lm(log(bwt) ~ I(log(ad)), data=secher)
> summary(model_ad)

Call:
lm(formula = log(bwt) ~ I(log(ad)), data = secher)

Residuals:
     Min       1Q   Median       3Q      Max 
-0.58560 -0.06609  0.00184  0.07479  0.48435 

Coefficients:
            Estimate Std. Error t value Pr(>|t|)    
(Intercept)  -2.4446     0.5103  -4.791 5.49e-06 ***
I(log(ad))    2.2365     0.1105  20.238  < 2e-16 ***
---
Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1

Residual standard error: 0.1275 on 105 degrees of freedom
Multiple R-squared:  0.7959,	Adjusted R-squared:  0.794 
F-statistic: 409.6 on 1 and 105 DF,  p-value: < 2.2e-16

> model_bpd <- lm(log(bwt) ~ I(log(bpd)), data=secher)
> summary(model_bpd)

Call:
lm(formula = log(bwt) ~ I(log(bpd)), data = secher)

Residuals:
     Min       1Q   Median       3Q      Max 
-0.36478 -0.09725  0.01251  0.07703  0.51154 

Coefficients:
            Estimate Std. Error t value Pr(>|t|)    
(Intercept)  -7.0862     0.9062  -7.819 4.35e-12 ***
I(log(bpd))   3.3320     0.2017  16.516  < 2e-16 ***
---
Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1

Residual standard error: 0.1488 on 105 degrees of freedom
Multiple R-squared:  0.7221,	Adjusted R-squared:  0.7194 
F-statistic: 272.8 on 1 and 105 DF,  p-value: < 2.2e-16

> model_combined <- lm(log(bwt) ~ I(log(ad)) + I(log(bpd)), data=secher)
> summary(model_combined)

Call:
lm(formula = log(bwt) ~ I(log(ad)) + I(log(bpd)), data = secher)

Residuals:
     Min       1Q   Median       3Q      Max 
-0.35074 -0.06741 -0.00792  0.05750  0.36360 

Coefficients:
            Estimate Std. Error t value Pr(>|t|)    
(Intercept)  -5.8615     0.6617  -8.859 2.36e-14 ***
I(log(ad))    1.4667     0.1467   9.998  < 2e-16 ***
I(log(bpd))   1.5519     0.2294   6.764 8.09e-10 ***
---
Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1

Residual standard error: 0.1068 on 104 degrees of freedom
Multiple R-squared:  0.8583,	Adjusted R-squared:  0.8556 
F-statistic: 314.9 on 2 and 104 DF,  p-value: < 2.2e-16
```

By looking aat model_ad, model_bpd, and model_combined 85% is increased when using both diameters. As r^2 increases, the variability becomes more and more obvious.

model_combined r^2 = 0.85
model_bpd r^2 = 0.72
model_ad r^2 = 0.79

When the abdominal and biparietal model are added together, we get a value close to 3 showing that the prediction is accurate.

Just an additional question (this will not be graded). When should we consider "log-transforming" a dataset? This is a very common practice in data science. 

Using log-transforming can help reduce variance and outliers.