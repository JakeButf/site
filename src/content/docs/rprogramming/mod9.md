---
title: Contingency Table
description: Module 9. Assignment
---

## Question 1

Your data.frame is

```
df <- data.frame(
  country = c("France", "Spain", "Germany", "Spain", "Germany", "France", "Spain", "France", "Germany", "France"),
  age = c(44, 27, 30, 38, 40, 35, 52, 48, 45, 37),
  salary = c(6000, 5000, 7000, 4000, 8000, 6000, 5000, 7000, 4000, 8000),
  purchased = c("No", "Yes", "No", "No", "Yes", "Yes", "No", "Yes", "No", "Yes")
)
```

Generate (1) a one-way table for "purchased" and (2) a two-way table for "country" and "purchased."

```
df <- data.frame(
  country = c("France", "Spain", "Germany", "Spain", "Germany", "France", "Spain", "France", "Germany", "France"),
  age = c(44, 27, 30, 38, 40, 35, 52, 48, 45, 37),
  salary = c(6000, 5000, 7000, 4000, 8000, 6000, 5000, 7000, 4000, 8000),
  purchased = c("No", "Yes", "No", "No", "Yes", "Yes", "No", "Yes", "No", "Yes")
)

oneWay <- table(df$purchased)
oneWay

## 
##  No Yes 
##   5   5

twoWay <- table(df$country, df$purchased)
twoWay

##          
##           No Yes
##   France   1   3
##   Germany  2   1
##   Spain    2   1
```

## Question 2 

Generate contingency table also known as rx C table using mtcars dataset. 
```
data(mtcars)
mtcars_df <- table(mtcars$gear, mtcars$cyl, dnn = c("Gears", "Cylinders"))

mtcars_df
```

```
##      Cylinders
## Gears  4  6  8
##     3  1  2 12
##     4  8  4  0
##     5  2  1  2
```

### Question 2.1

Add the addmargins() function to report on the sum totals of the rows and columns of "mtcars_df" table

```
addmargins(mtcars_df)

##      Cylinders
## Gears  4  6  8 Sum
##   3    1  2 12  15
##   4    8  4  0  12
##   5    2  1  2   5
##   Sum 11  7 14  32
```

### Question 2.2

 Add prop.tables() function, and report on the proportional weight of each value in the "mtcars_df" table

 ```
prop.table(mtcars_df)

##      Cylinders
## Gears       4       6       8
##     3 0.03125 0.06250 0.37500
##     4 0.25000 0.12500 0.00000
##     5 0.06250 0.03125 0.06250
```