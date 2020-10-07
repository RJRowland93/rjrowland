---
title: Reduce
date: 2020-10-05
description: The Savvy Programmer's Higher Order Function
tags: ["javascript", "functional"]
---

## Frequencies

```javascript
;["hello world"].reduce((letters, letter) => {}, {})
```

## Bucket Sort

```javascript
;[1, 2, 3, 4].reduce((results, number) => {}, { even: [], odd: [] })
```

## Map + Setting a boolean

```javascript
;[].reduce((accumulator, current) => {}, { mapped: [], isTrue: false })
```
