---
title: Feedback and Prototypes
date: 2020-10-02
excerpt: You do not need to take a computer science course and endure lengthy lectures to be introduced to programming.
---

Who is my audience?

- Developers who want to improve
  Why do they read this?
- To see how they can improve their workflow
  What do they take away from this?
- Using REPLs and Sandboxes for a tighter feedback loop

## Feedback

adopt a workflow that gives you a tighter feedback loop
sometimes you need to play to figure out what you are building
this is different from TDD

- hard to start with TDD if you do not know what you are building
- starting from a repl/sandbox assumes minimal environment varaibles
  - helps you start off with a modular design
- gives you enough context to then switch over to TDD, if you choose

minimize your surface area of problems

## Prototypes

sometimes it is easier to work on new features in isolation before pulling them into your app. this lets you focus on the code at hand and will keep you from following unrelated rabbit hole when you run into a problem

### use a REPL for functions

- example: save an api response in a repl then write your function to parse the data
  - much faster than using breakpoints, making a change, then hitting refresh to recall the api

### use a sandbox for environments

- example: working with gatsby themes; create a sandbox app that only imports one theme so I can make changes in isolation
- example: working with gatsby themes; create a sandbox app that only imports one theme so I can make changes in isolation

### work in vertical slices

- example: when creating a new app, get your end to end setup done first
  - connect the fontend to the backend to the database and deploy the minimal version before building out any part more; much easier to debug when the
  - focus on completing sections of an app
