# JS 中级面试题

::: tip
TIP

JavaScript 中级开发者需要具备深入的 JavaScript 基础知识和编程能力，同时还需要了解面向对象编程、函数式编程、模块化、Promise 和异步编程、事件驱动和异步 I/O、函数节流和函数防抖等中级技术，能够编写高质量、高性能、可扩展性强的 Web 应用程序。

还需要了解浏览器提供的各种 Web API，如 DOM API、Canvas API、WebSocket API、Web Worker API 等，能够使用这些 API 实现各种功能，并且需要具备安全性和性能优化方面的知识，能够编写安全、高效的 JavaScript 程序。
:::

## 对 this 对象的理解

> this 是一个关键字，它指向函数执行时的上下文对象,this 的值取决于函数的调用方式

### 全局上下文

在全局作用域中，this 指向全局对象。在浏览器中，这个全局对象是 window。

```js
console.log(this); // 在浏览器中输出 window 对象
```

### 对象方法

当 this 在对象的方法中使用时，它指向调用该方法的对象。

```js
const person = {
  name: "Alice",
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet(); // 输出：Hello, my name is Alice
```

### 构造函数

在构造函数中，this 指向新创建的实例对象

```js
function Person(name) {
  this.name = name;
}

const person1 = new Person("Bob");
console.log(person1.name); // 输出：Bob
```

### 事件处理

在事件处理函数中，this 通常指向触发事件的 DOM 元素。谁调用,this 就指向谁

```js
const button = document.querySelector("button");
button.addEventListener("click", function () {
  console.log(this); // 指向 button 元素
});
```

### 箭头函数

箭头函数没有自己的 this 上下文，它会继承外层函数的 this 值。

```js
const person = {
  name: "Alice",
  greet: () => {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet(); // 输出：undefined
```

### 手动绑定

我们可以使用 call、apply 和 bind 方法手动设置 this 的值

```js
function greet() {
  console.log(`Hello, my name is ${this.name}`);
}

const person = { name: "Charlie" };
greet.call(person); // 输出：Hello, my name is Charlie
```

### 总结

this 的值取决于函数的调用方式。理解 this 的上下文对于编写正确的行为和避免常见的错误非常重要。

## call()、apply() 和 bind() 的区别

`call()、apply() 和 bind()` 都是 `JavaScript` 中用来改变函数内部 `this` 指向的方法，但它们之间有一些关键的区别：

1. call 立即调用函数，并且可以传入多个参数。
2. apply 立即调用函数，但参数以数组的形式传入。
3. bind 返回一个新的函数，可以传入多个参数,this 被绑定到指定的对象，但不会立即执行。可以在后续调用时使用。

## 手写 call

1. call 可以调用函数
2. 可以改变 this 指向
3. 可以接受多个参数
4. 可以返回参数执行的结果

> call 的核心思路其实就是在要使用的 this 对象上添加一个方法，然后执行对象的这个方法，这个时候方法的 this 指向就变成了这个对象,执行完毕后删除这个方法。

```js
Function.prototype.myCall = function (context, ...args) {
  // 如果 context 为 null 或 undefined，指向全局对象
  context = context || globalThis;
  // 将当前函数（this）赋值给 context 对象的一个属性
  context.fn = this;
  // 调用该函数并传入参数
  const result = context.fn(...args);
  // 删除该属性以避免污染
  delete context.fn;
  // 返回函数的执行结果
  return result;
};
```

## 讲讲 Promise

> 用于处理异步操作的一种对象。它代表一个可能在未来某个时间点完成或失败的操作，并且可以通过 .then()、.catch() 和 .finally() 方法来处理结果。

Promise 是异步编程的一种解决方案，它是一个对象，可以获取异步操作的消息，他的出现大大改善了异步编程的困境，避免了地狱回调，它比传统的解决方案回调函数和事件更合理和更强大。

所谓 Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。

### Promise 的状态

Promise 有三种状态：

> 当把一件事情交给 promise 时，它的状态就是 Pending，任务完成了状态就变成了 Resolved、没有完成失败了就变成了 Rejected。

- Pending（待定）：初始状态，既不是成功也不是失败。
- Fulfilled（已兑现）：操作成功完成。
- Rejected（已拒绝）：操作失败。

状态一旦改变，就不会再改变。

Promise 的实例有两个过程：

pending -> fulfilled : Resolved（已完成）
pending -> rejected：Rejected（已拒绝）

注意：一旦从进行状态变成为其他状态就永远不能更改状态了。

### Promise 的特点：

1. 对象的状态不受外界影响。promise 对象代表一个异步操作，有三种状态，pending（进行中）、fulfilled（已成功）、rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态，这也是 promise 这个名字的由来——“承诺”；

2. 一旦状态改变就不会再变，任何时候都可以得到这个结果。promise 对象的状态改变，只有两种可能：从 pending 变为 fulfilled，从 pending 变为 rejected。这时就称为 resolved（已定型）。如果改变已经发生了，你再对 promise 对象添加回调函数，也会立即得到这个结果。这与事件（event）完全不同，事件的特点是：如果你错过了它，再去监听是得不到结果的。

### Promise 的缺点：

1. 无法取消 Promise，一旦新建它就会立即执行，无法中途取消。
2. 如果不设置回调函数，Promise 内部抛出的错误，不会反应到外部。
3. 当处于 pending 状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。

### 总结：

Promise 对象是异步编程的一种解决方案，最早由社区提出。Promise 是一个构造函数，接收一个函数作为参数，返回一个 Promise 实例。一个 Promise 实例有三种状态，分别是 pending、resolved 和 rejected，分别代表了进行中、已成功和已失败。实例的状态只能由 pending 转变 resolved 或者 rejected 状态，并且状态一经改变，就凝固了，无法再被改变了。

状态的改变是通过 resolve() 和 reject() 函数来实现的，可以在异步操作结束后调用这两个函数改变 Promise 实例的状态，它的原型上定义了一个 then 方法，使用这个 then 方法可以为两个状态的改变注册回调函数。这个回调函数属于微任务，会在本轮事件循环的末尾执行。

注意： 在构造 Promise 的时候，构造函数内部的代码是立即执行的
