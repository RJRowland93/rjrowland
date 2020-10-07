---
title: Zero to Productive Programming
date: 2020-10-02
excerpt: You do not need to take a computer science course and endure lengthy lectures to be introduced to programming.
---

Contents:

- Here are your tools.
- First thing is first...
- Take control of your REPL
- Lets write a program to quiz your progress
- Where to go from here?

I'm assuming you do not have much experience programming or have found most introductions overwhelming.

You do not need to take a computer science course and endure lengthy lectures to be introduced to programming. My goal by the end of this posts is to have you comfortable enough to take one of those courses and have enough context to be able to learn from them.

## Here are your tools

A tip: open this [code editor](https://repl.it) in a new browser window then adjust this blog post so they are both side by side. This will make it easier to follow along.

## First thing is first

Copy and paste the following snippet into your editor:

```js
console.log("hello world")
```

then hit your control key and the enter key at the same time. A shorthand way of writing that command is `Ctrl + Enter`.

You should see the editor greet the world. You have just written the "hello world" program. This is not the most exciting thing to get a computer to do, but this article could not have been considered an intro to programming without having you do it.

The next snippet you are going to run will throw an error. Copy and paste this in to your editor then hit `Ctrl + Enter`.

```javascript
function() {
    return oh.no;
}
```

Look at the output from the console now.

```javascript
function infiniteLoop() {
  console.log("I keep going...")
  while (true) {
    console.log("and going...")
  }
}
```

Hit `Ctrl + c`. This is an infinite loop. Your computer is going to keep printing until you tell it to stop.

Finally, run this snippet of code:

```javascript
function stackOverflow() {
  return stackOverflow()
}
```

The function caused a "stack overflow", meaning your program to ran out of memory. No big deal. This usually happens when an infinite loop stores memory somewhere.

Take a moment to notice that you and your computer are still fine. You just experienced some of the most common errors you will run into while programming. It was nothing to be afraid of, right? Now you can continue your programming journey without fear.

## Take control of your REPL

Lets go through

```javascript
function greet() {
  return `hello, friend!`
}
```

The `function` keyword lets you define a repeatable action for your computer to execute. You can give it a name, or leave it anonymous. I reccomend you give your functions a name, but here is a time and place for anonymity. We will get to that shortly.

```javascript
greet()
```

```javascript
console.log(greet())
```

```javascript
function greetPerson(name) {
  return `hello, ${name}`
}

greetPerson("Randal")
```

This is not an exhaustive list, but here are a few key data structures to get you started:

- arrays - hold a list of data
- objects - group properties together

```js
Person { name: '', age: '', friends: [Person]}
```

- strings
- numbers
- booleans

all of these can be stored as variables

```javascript
function Person(name, age) {
    return {
        name,
        age,
    }
}

const randal = new Person("Randal", 27),

console.log(randal.name, randal.age);

const chuy = new Person("Chuy", 2)

console.log(chuy.name, chuy.age);

const people = [randal, chuy];

```

or more succinct

```javascript
const people = [new Person("Randal, 27), new Person("Chuy", 2)];

function getAges(persons) {
    return persons.map(function(person) { return person.age; });
}

function average(numbers) {
    let total = 0;
    numbers.forEach(function(n) { return total += n });
    return total / numbers.length;
}
```

or more succinct

```javascript
function average(numbers) {
    return numbers.reduce(function(total, number) { return total += number); }, 0);
}

const averageAge = average(getAges(people));
console.log(averageAges);
```

## Lets write a program to quiz your progress

### Two important skills

#### Modeling your data

```javascript
const state = {
  keys: ["A", "B", "C", "D"],
  questions: [
    {
      question: "",
      choices: [],
      answer: "",
      response: "",
    },
  ],
}
```

#### Writing functions to transform your data

```javascript
function isCorrect(question){
    return question.answer === question.response;
}

function collectResults(quiz) {
    const correct = quiz.filter(isCorrect);
    const incorrect = quiz.filter(!isCorrect);

    return {correct, incorrect}
}

function collectResults(quiz) {
    return quiz.reduce((results, question) {
        if (isCorrect(question)) {
            results.correct = [...results.correct, question];
        } else {
            results.incorrect = [...results.incorrect, question];
        }
        return results;
    }, {correct: [], incorrect: []})
}


function scoreQuiz(results){
    console.log(`you answered ${results.correct} correct out of ${quiz.length}`);

    console.log(`Review these questions:`)
    results.incorrect.forEach(function(question) {
        console.log(question.question);
    }):

    return correct / (incorrect.length + correct.length)
}

function reportQuiz(quiz) {
    const results = collectResults(quiz);

}
```

##### Strive for simplicity

Treat functions as legos. Individual units that can be assembled into something more sophisticated.

#### Add functionality

Store questions in separate file
Retry until submit correct answer

### More important skills

#### Be resourceful - Read documentation

MDN - see available array functions - filter - find - slice - see available string functions - indexOf - slice, notice how this is the same as the array? - see available object functions - keys - values

Node.js

#### Be patient - Read the error message

#### Stay curious - Find out how things work

## Where to go from here

- git & github
- using libraries
  - axios
  - rambda
- calling apis, ajax
  - "https://www.reddit.com/r/learnjavascript.json"
- make a website

### A guide for further learning

- example based: free code camp
- further language exploration: eloquent JS, YDKJS
