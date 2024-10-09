# Interactive-Two-Stacks-Web

# Data Structures: Two Stacks Implementation

This project demonstrates how to implement **two stacks using a single array** in Java. It explains the stack data structure and its common operations, providing multiple methods of implementation, examples, and Java code.

## Table of Contents
- [Introduction](#introduction)
- [What is a Stack?](#what-is-a-stack)
- [Implementation Methods](#implementation-methods)
  - [Method 1: Equal Division of Array](#method-1-equal-division-of-array)
  - [Method 2: Space Efficient Method](#method-2-space-efficient-method)
- [Java Code Implementation](#java-code-implementation)
- [Example Operations](#example-operations)
- [References](#references)

## Introduction
Stacks are a fundamental data structure that follows the **Last In First Out (LIFO)** or **First In Last Out (FILO)** principle. In this project, we implement two stacks inside a single array and explore two different methods to manage the stack efficiently.

## What is a Stack?
A stack is a linear data structure, often compared to real-life examples like a deck of cards or a pile of books. Stacks allow operations like push (adding an element) and pop (removing the most recently added element).

## Implementation Methods

### Method 1: Equal Division of Array
In this method, the array is divided into two equal halves. Each half is used as an independent stack.

#### Pros:
- Simple to implement.

#### Cons:
- It is not space-efficient. If one stack has unused space and the other is full, overflow can occur.

### Method 2: Space Efficient Method
In this approach, one stack starts from the beginning of the array, and the other stack starts from the end. This method allows both stacks to use all available space without wasting it.

#### Pros:
- More space-efficient.
- Prevents overflow as long as there is available space in the array.

## Java Code Implementation
Here is the basic structure of the Java implementation for two stacks inside a single array:

```java
class TwoStacks {
    private int arr[];
    private int size;
    private int top1, top2;

    // Constructor
    TwoStacks(int n) {
        size = n;
        arr = new int[n];
        top1 = -1;
        top2 = size;
    }

    // Push operation for the first stack
    void push1(int x) {
        if (top1 < top2 - 1) {
            top1++;
            arr[top1] = x;
        } else {
            System.out.println("Stack Overflow");
        }
    }

    // Push operation for the second stack
    void push2(int x) {
        if (top1 < top2 - 1) {
            top2--;
            arr[top2] = x;
        } else {
            System.out.println("Stack Overflow");
        }
    }

    // Pop operation for the first stack
    int pop1() {
        if (top1 >= 0) {
            int x = arr[top1];
            top1--;
            return x;
        } else {
            System.out.println("Stack Underflow");
            return -1;
        }
    }

    // Pop operation for the second stack
    int pop2() {
        if (top2 < size) {
            int x = arr[top2];
            top2++;
            return x;
        } else {
            System.out.println("Stack Underflow");
            return -1;
        }
    }
}
