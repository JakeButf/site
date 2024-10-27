---
title: Zelazo
description: Module 8. Assignment
---

## Question 1

A researcher is interested in the effects of drug against stress reaction. She gives a reaction time test to three different groups of subjects: one group that is under a great deal of stress, one group under a moderate amount of stress, and a third group that is under almost no stress. The subjects of the study were instructed to take the drug test during their next stress episode and to report their stress on a scale of 1 to 10 (10 being most pain).

|High Stress|Moderate Stress|Low Stress|
|-----------|---------------|----------|
|10|8|4|
|9|10|6|
|8|6|6|
|9|7|4|
|10|8|2|
|8|8|2|

Report on drug and stress level by using R. Provide a full summary report on the result of ANOVA testing and what does it mean. More specifically, report the following: Df, Sum, Sq Mean, Sq, F value, Pr(>F) 

```
> stress_reaction <-c(10, 9, 8, 9, 10, 8, 8, 10, 6, 7, 8, 8, 4, 6, 6, 4, 2, 2)
> stress_level <- factor(rep(c("High", "Moderate", "Low"), each = 6))
> data <- data.frame(StressReaction = stress_reaction, StressLevel = stress_level)
> anova_result <-aov(StressReaction ~ StressLevel, data = data)
> summary(anova_result)
            Df Sum Sq Mean Sq F value   Pr(>F)    
StressLevel  2  82.11   41.06   21.36 4.08e-05 ***
Residuals   15  28.83    1.92                     
---
Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1
```

Due to the p-value (0.0000408) being less than .05 there is no definitive conclusion that sress levels affect the reactions.

## Question 2

From our Textbook:Introductory Statistics with R. Chapter # 6 Exercises 6.1 pp. 127 plus.
The zelazo data (taken from textbook's R package called ISwR) are in the form of a list of vectors, one for each of the four groups.

```
> data("zelazo")
> zelazo
$active
[1]  9.00  9.50  9.75 10.00 13.00
[6]  9.50

$passive
[1] 11.00 10.00 10.00 11.75 10.50
[6] 15.00

$none
[1] 11.50 12.00  9.00 11.50 13.25
[6] 13.00

$ctr.8w
[1] 13.25 11.50 12.00 13.50 11.50
```

### 2.1. Convert the data to a form suitable for the user of lm, and calculate the relevant test. Consider t tests comparing selected subgroups or obtained by combing groups.    

```

> Score <- c(zelazo$active, zelazo$passive, zelazo$none, zelazo$ctr.8w)
> Group <- c(rep("active", length(zelazo$active)), rep("passive", length(zelazo$passive)), rep("none", length(zelazo$none)), rep("ctr.8w", length(zelazo$ctr.8w)))
> zelazo_df <- data.frame(Score, Group)
> zelazo_df
   Score   Group
1   9.00  active
2   9.50  active
3   9.75  active
4  10.00  active
5  13.00  active
6   9.50  active
7  11.00 passive
8  10.00 passive
9  10.00 passive
10 11.75 passive
11 10.50 passive
12 15.00 passive
13 11.50    none
14 12.00    none
15  9.00    none
16 11.50    none
17 13.25    none
18 13.00    none
19 13.25  ctr.8w
20 11.50  ctr.8w
21 12.00  ctr.8w
22 13.50  ctr.8w
23 11.50  ctr.8w
> t_test_result <- t.test(Score[Group == "active"], Score[Group == "passive"])
> t_test_result

	Welch Two Sample t-test

data:  Score[Group == "active"] and Score[Group == "passive"]
t = -1.2839, df = 9.3497, p-value = 0.2301
alternative hypothesis: true difference in means is not equal to 0
95 percent confidence interval:
 -3.4399668  0.9399668
sample estimates:
mean of x mean of y 
   10.125    11.375 
```

The p-value here is .2301. There is no difference between the active group and passive group and the average between the two are similar.

### 2.2. Consider ANOVA test (one way or two-way) to this dataset (zelazo)

```
> aov.out = aov(Score ~ Group, data = zelazo_df)
> summary(aov.out)
            Df Sum Sq Mean Sq F value Pr(>F)
Group        3  14.78   4.926   2.142  0.129
Residuals   19  43.69   2.299  
```

The p-value in this test is 0.129 so there is no difference between the groups. 





