# CSS 高频面试题

::: tip

一般问 css 的公司比较少,列举一些高频的问题

css 某种意义上比 js 要难百倍,门道学问非常多,奇淫技巧也非常多,非顶级大神不敢称其精通 css 😄
:::

## 内联加载样式和外联加载样式有啥区别

## 常见的 CSS 布局方式有哪些？

> 不会的不要说,会被追问,这题如果问 css 经常作为开头被问到,然后进行追问 常见的 CSS 布局方式包括：流式布局、弹性布局、网格布局、浮动布局、定位布局等。

## 介绍下 BFC 及其应用

> 常见的考原理题 BFC: 块级格式上下文， 它有一个自己的渲染区域，同时有一套自己的渲染规则 所谓 BFC，指的是一个独立的布局环境，BFC 内部的元素布局与外部互不影响。

1. 同一个 BFC 内的两个相邻的盒子会发生 margin 重叠
2. BFC 区域不会和 float 的元素重叠
3. BFC 计算高度，浮动子元素也参与
4. BFC 就是页面上的一个隔离的独立容器，容器里面的元素不会影响外面的元素

### 触发 BFC 的方式有很多，常见的有

- 浮动元素：float 值为 left、right
- overflow 值不为 visible，为 auto、scroll、hidden
- display 的值为 inline-block、inltable-cell、flex、inline-flex、grid、inline-grid ...
- position 的值为 absolute 或 fixed

### 常见的 BFC 应用有

- 解决浮动元素令父元素高度坍塌的问题
- 解决非浮动元素被浮动元素覆盖问题
- 解决外边距垂直方向重合的问题

## CSS3 新增了哪些新特性?

> 挑会的说,一般是引子问题

- 盒子模型属性：border-radius、box-shadow、border-image
- 背景：background-size、background-origin、background-clip
- 文本效果：text-shadow、word-wrap
- 渐变：线性渐变、径向渐变
- 字体：@font-face
- 2D/3D 转换：transform、transform-origin
- 过渡与动画：transition、@keyframes、animation
- 颜色：新增 RGBA，HSLA 模式
- 多列布局
- 媒体查询

## 回流重绘是什么？

> 概念题,可能会追问,有什么作用和相关性能问题 回流也可以理解为重排

### 是什么

回流： 浏览器重新计算页面布局的操作。

重绘： 浏览器重新绘制页面容器的非几何属性。

### 什么时候触发

回流：首次刷新、添加删除 DOM、DOM 元素位置发生变化、元素尺寸发生变化、浏览器窗口变化

> 回流是指浏览器重新计算元素的几何属性，包括位置和大小。当页面的布局发生变化时，浏览器需要重新计算这些属性

重绘：颜色变化、阴影变化等非几何属性变化。

> 重绘是指浏览器重新绘制元素的外观，但不改变其几何属性。即使元素的位置和大小不变，只要样式（如颜色、背景等）发生变化，浏览器就会执行重绘。

### 性能问题

频繁的回流和重绘会影响性能，因此在开发中应尽量减少这类操作。

1. 减少 DOM 操作：尽量减少对 DOM 的频繁操作，合并多次操作为一
2. 使用 CSS 动画：尽量使用 CSS 动画而非 JavaScript 来实现动画效果，因为 CSS 动画通常会更高效。
3. 使用 requestAnimationFrame：在进行动画时，使用 requestAnimationFrame 来优化性能。

> 小技巧 通过访问 offsetWidth 属性来强制浏览器进行回流，从而获取最新的布局信息。

## 水平垂直居中的方法

flex 布局
position + transform
子容器定宽高：position + margin
table 布局
grid 网格布局
父子容器定宽高：margin

### 使用 Flexbox

Flexbox 是一种现代的布局模型，能够方便地实现居中

```html
<div class="container">
  <div class="centered">居中内容</div>
</div>

<style>
  .container {
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    height: 100vh; /* 设置容器高度 */
  }
  .centered {
    /* 内容样式 */
  }
</style>
```

### 使用 Grid

CSS Grid 也可以轻松实现居中。

```html
<div class="grid-container">
  <div class="centered">居中内容</div>
</div>

<style>
  .grid-container {
    display: grid;
    place-items: center; /* 水平和垂直居中 */
    height: 100vh; /* 设置容器高度 */
  }
  .centered {
    /* 内容样式 */
  }
</style>
```

### 使用绝对定位和 transform

通过绝对定位和变换来实现居中。

```html
<div class="container">
  <div class="centered">居中内容</div>
</div>

<style>
  .container {
    position: relative;
    height: 100vh; /* 设置容器高度 */
  }
  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* 移动元素到中心 */
  }
</style>
```

### 使用传统的块级元素和文本对齐

对于文本内容，可以使用 text-align 和 line-height。

```html
<div class="container">
  <div class="centered">居中内容</div>
</div>

<style>
  .container {
    text-align: center; /* 水平居中 */
    height: 100vh; /* 设置容器高度 */
    line-height: 100vh; /* 设置行高等于容器高度以实现垂直居中 */
  }
  .centered {
    display: inline-block; /* 使内容为块级元素 */
  }
</style>
```

### 使用 Margin auto

对于固定宽度的块级元素，可以使用 margin 来实现居中

```html
<div class="container">
  <div class="centered">居中内容</div>
</div>

<style>
  .container {
    height: 100vh; /* 设置容器高度 */
  }
  .centered {
    width: 200px; /* 固定宽度 */
    height: 100px; /* 固定高度 */
    margin: auto; /* 水平居中 */
    position: relative;
    top: 50%; /* 垂直居中 */
    transform: translateY(-50%); /* 调整位置 */
  }
</style>
```

## 自适应和响应式的区别

> 自适应就是布局不变的情况下可以适应不同尺寸吧，响应式是根据尺寸变化改变布局

- 响应式: 同一个页面用不同设备（电脑、平板、手机）去访问此页面，最后看到的布局和内容都有很大不同。
- 自适应: 同一个页面用不同设备（电脑、平板、手机）去访问此页面，最后看到的页面内容和布局基本上还是一样的，就是尺寸略有不同。

## 响应式布局

> 我理解的响应式布局就是根据不同的尺寸去改变页面布局,来适配不同的设备,最常用的就是用 css 媒体查询,配合一些相对单位,比如 rem vw vh 百分比之类的, 根据不同尺寸设置不同的 css 布局样式,或者用 弹性布局 flex 和网格布局 grid 也可以实现,而且更方便功能更强大,自定义能力强,就是兼容性差点,现在一般都是使用组件库提供的栅格组件,大部分都是基于 flex 的

1. 媒体查询
2. 弹性布局
3. 网格布局
4. 相对单位

## 自适应布局

1. 使用百分比
2.

## 大屏布局

## 移动端布局
