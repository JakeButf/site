---
title: Probability and Binomial Distribution
description: Module 4. Assignment
---

## A. Based on Table 1, What is the Probability of:

Table 1:

|      |  B  | B1 |
|------|-----|----|
|  A   | 10  | 20 |
|  A1  | 20  | 40 |

### A1. Event A

Probability of Event A (P(A)):

Total in row A = 10 (B) + 20 (B1) = 30

P(A) = Total in A / Total observations = 30 / 90 = 1/3 ≈ 0.3333 or 33.33%

### A2. Event B?

Probability of Event B (P(B)):

Total in column B = 10 (A) + 20 (A1) = 30

P(B) = Total in B / Total observations = 30 / 90 = 1/3 ≈ 0.3333 or 33.33%

### A3. Event A or B

Probability of Event A or B (P(A || B)):

Number of observations in both A and B (A && B) = 10
```
P(A && B) = 10 / 90 ≈ 0.1111
P(A || B) = P(A) + P(B) - P(A and B)
P(A || B) = (1/3) + (1/3) - (1/9) = (6/9) - (1/9) = 5/9 ≈ 0.5556 or 55.56%
```

### A4. Is P(A || B) = P(A) + P(B)?

No
The formula P(A || B) = P(A) + P(B) holds true only when A and B occur on their own.
Since P(A && B) cannot equal 0, the correct formula is P(A or B) = P(A) + P(B) - P(A and B).
Therefore, P(A or B) != P(A) + P(B) in this scenario.

## B. Applying Bayes' Theorem
Jane is getting married tomorrow, at an outdoor ceremony in the desert. In recent years, it has rained only 5 days each year. Unfortunately, the weatherman has predicted rain for tomorrow. When it actually rains, the weatherman correctly forecasts rain 90% of the time. When it doesn't rain, he incorrectly forecasts rain 10% of the time.

What is the probability that it will rain on the day of Jane's wedding? 

(The question here refers to a Marie and a Jane, I'm assuming this is a typo so this is based on the fact that this is the same person.)

In terms of probabilities, we know the following:
P( A1 ) = 5/365 =0.0136985 [It rains 5 days out of the year.]
P( A2 ) = 360/365 = 0.9863014 [It does not rain 360 days out of the year.]
P( B | A1 ) = 0.9 [When it rains, the weatherman predicts rain 90% of the time.]
P( B | A2 ) = 0.1 [When it does not rain, the weatherman predicts rain 10% of the time.]
We want to know P( A1 | B ), the probability it will rain on the day of Jane's wedding, given a forecast for rain by the weatherman. The answer can be determined from Bayes' theorem, as shown below.

P( A1 | B ) = P( A1 ) P( B | A1 )
P( A1 ) P( B | A1 ) + P( A2 ) P( B | A2 )
P( A1 | B ) = (0.014)(0.9) / [ (0.014)(0.9) + (0.986)(0.1) ]
P( A1 | B ) = 0.111
Note the somewhat unintuitive result. Even when the weatherman predicts rain, it only rains only about 11% of the time. Despite the weatherman's gloomy prediction, there is a good chance that Jane will not get rained on at her wedding. 

### B1. Is This Answer True or False.

This is True.

### B2. Please explain why?
We are given:
```
P(A1) = Probability it rains on Jane's wedding = 5/365 ≈ 0.0137 (1.37%)

P(A2) = Probability it does not rain = 360/365 ≈ 0.9863 (98.63%)

P(B | A1) = Probability the weatherman predicts rain given it rains = 0.9 (90%)

P(B | A2) = Probability the weatherman predicts rain given it does not rain = 0.1 (10%)
```
We want: P(A1 | B) = Probability it will rain given the weatherman predicts rain.

Applying Bayes' Theorem:
```
P(A1∣B)=P(A1)×P(B∣A1)P(A1)×P(B∣A1)+P(A2)×P(B∣A2)
P(A1∣B)=P(A1)×P(B∣A1)+P(A2)×P(B∣A2)P(A1)×P(B∣A1)​
```
```
P(A1)×P(B∣A1)=0.0137×0.9=0.01233P(A1)×P(B∣A1)=0.0137×0.9=0.01233
-
(0.0137×0.9)+(0.9863×0.1)=0.01233+0.09863=0.11096(0.0137×0.9)+(0.9863×0.1)=0.01233+0.09863=0.11096
```
Result: P(A1∣B)=0.012330.11096≈0.111P(A1∣B)=0.110960.01233​≈0.111

Even when the weatherman predicts rain, there's only about an 11% chance it will actually rain on this day. This is because rain is rare in this desert (raining only 5 days a year). Despite the weatherman's prediction, the overall odds of rain remains low.

## C. Probability of Operating on 10 Patients Successfully with the Traditional Method

For a disease known to have a postoperative complication frequency of 20%, a surgeon suggests a new procedure. She/he tests it on 10 patients and found there are not complications. What is the probability of operating on 10 patients successfully with the tradtional method? 

Given:

Probability of success per operation = 80% = 0.8

Number of patients (size) = 10

Number of successful operations (x) = 10

We can plug this into R using the dbinom function:
```
dbinom(10, size=10, prob=0.8)
```

Result:
```
[1] 0.1073742
```

The probability of operating on 10 patients successfully with the traditional method is 10.73742%.