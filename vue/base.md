# Vue 基础面试题

## vue2 和 vue3 的区别

1. 响应式系统不同
vue2 采用definePropery实现数据劫持, 无法检测对象属性的添加和删除, 需要用到$set方法

vue3 采用 Proxy 代理, 支持全对象层级的响应式追踪, 可以自动处理数组变化

2. vue3 引入了组合式api composition api ,对比vue2的选项式api,可以自由将逻辑功能点组合在一起,更灵活,处理大型组件逻辑更清晰,可以抽离成独立功能hooks,而且支持响应式和生命周期

3. 性能优化

vue3模版编译通过静态节点标记, 减少diff对比范围, 打包体积vue3也更小 

4. ts支持

vue3 源码完全使用ts重写的, 提供了比较好的类型支持, compositionapi 天生就对类型推导更友好

5. 生命周期调整  使用setup 代替了 beforeCreate 和 created beforeunmount/onunmounted 代替 beforeDestory / destoryed

6 vue3 sfc 单文件组件支持多个根节点 

7. 新增了 异步组件 和 传送组件 teleport  

 8. v-if 和 v-for 的优先级不同
 vue2 v-for 优先于 v-if 生效, 每次都要先渲染才会进行条件判断, 会带来性能的浪费。最好不要把 v-if 和 v-for 同时用在一个元素上
vue3 v-if 优先于 v-for 生效, 把 v-if 和 v-for 同时用在一个元素上 vue 中会给我们报警告

## vue组件都有哪些传参方式
1. props/emit 父子传参
2. provide/inject 祖孙传参
3. vuex/pinia 状态管理
4. eventBus/emitter/发布订阅 
5. 路由传参
6. slot插槽传参
7. storage/indexDb 本地存储
8. useAttrs/$attrs/$listeners 
9. ref实例传参

## 谈一谈对 MVVM 的理解？
MVVM 是 Model-View-ViewModel 的缩写，是一种基于 MVC 衍生的前端架构模式

核心目标是 分离视图（UI）和业务逻辑,让视图与数据自动同步，实现数据驱动视图的开发模式

核心优势就是:数据驱动视图,只需要关心数据层,不需要关心视图,视图会自动更新 (vue的话就是通过双向绑定实现的)


## 为什么 Vue2 组件中的 data 是一个函数
Vue2 组件的 data 必须是函数，核心是为了保证组件复用时的「数据独立性」。   

因为组件是可复用的实例构造器，若 data 是对象，所有组件实例会共享同一份引用类型的数据，修改一个实例的属性会影响所有实例；而 data 作为函数时，每次创建实例都会执行函数并返回全新的对象，每个实例拥有独立的数据源，互不干扰。   

补充一点：根实例的 data 可以是对象，因为根实例全局唯一，不存在复用场景；而 Vue 源码中也会校验组件 data 的类型，若不是函数会抛出警告，确保开发者遵循这个设计规则


## 怎么理解 Vue 的单向数据流
Vue 的单向数据流核心是「数据自上而下从父组件流向子组件，子组件只能读取 props 数据，不能直接修改父组件的数据源」。若子组件需要修改数据，必须通过 $emit 触发父组件的方法，由父组件自己完成数据修改，再反向更新子组件的 props。
这个设计的目的是保证数据溯源清晰，避免多组件乱改数据导致状态混乱。需要注意的是，v-model 看似是双向绑定，但本质是单向数据流的语法糖 —— 它拆解为 value 传值 + input 事件通知，最终还是父组件修改数据。
另外，若 props 是对象 / 数组等引用类型，子组件虽然能间接修改其内部属性，但工程上不推荐，依然要通过触发父组件方法来修改，严格遵循单向数据流原则，保证组件间数据状态的可控性

## Vue 中怎么异步加载组件
   
## v-model 双向绑定的原理是什么？

## vue 组件通信方式有哪些及原理

## vue 的生命周期有哪些及每个生命周期做了什么？

## 说一下 v-if 与 v-show 的区别, 使用场景

## Vue 的路由实现, hash 路由和 history 路由实现原理说一下

## Vue 中的指令是什么, 常见的指令有哪些, 如何自定义指令

## Class 与 Style 如何动态绑定？

## vue-router 怎么动态添加、删除路由？

## 虚拟 DOM 的优缺点？

## 虚拟 DOM 实现原理？

## 页面刷新 vuex 数据丢失怎么处理

## 你有对 Vue 项目进行哪些优化？

## 说说你使用 Vue 框架踩过最大的坑是什么？怎么解决的？

## 简述 Vuex 与 pinia, 如何使用, 有什么区别

## 直接给一个数组项赋值，Vue 能检测到变化吗

## EventBus 与 mitt 区别？

## vue3 和 vue2 响应式原理是什么? 有什么区别 ?

## Vue 3 为什么使用 Proxy 代替 Object.defineProperty

## Vue 3 为什么推荐使用 Composition API

## vue3 和 vue2 的区别?

## v-if 与 v-for 的优先级(vue3/vue2)

## 怎么定义动态路由？怎么获取传过来的动态参数？

## Vue 中如何扩展一个组件

## watch 和 computed 的区别以及选择?

## 说一下 Vue 子组件和父组件创建和挂载顺序

## 怎么缓存当前的组件？缓存后怎么更新？

## 说一下 Vue3 中的宏有哪些？

## 说一下 watch 和 watchEffect?

## Vue3 中 toRef 和 toRefs 的区别

[详情](https://juejin.cn/post/7352075662453702694)

> vue2 与 vue3 的生命周期区别: vue3 组合式 api 增加 setup 钩子, 原来 vue2 的 beforeCreate 和 created 合并为 setup , Destroy 改为 unmount

### vue2

beforeCreate

> 是 new Vue()之后触发的第一个钩子，在当前阶段 data、methods、computed 以及 watch 上的数据和方法都不能被访问。

created

> 在实例创建完成后发生，当前阶段已经完成了数据观测，也就是可以使用数据，更改数据，在这里更改数据不会触发 updated 函数。可以做一些初始数据的获取，在当前阶段无法与 Dom 进行交互，如果非要想，可以通过 vm.$nextTick 来访问 Dom。

beforeMount

> 发生在挂载之前，在这之前 template 模板已导入渲染函数编译。而当前阶段虚拟 Dom 已经创建完成，即将开始渲染。在此时也可以对数据进行更改，不会触发 updated。

mounted

> 在挂载完成后发生，在当前阶段，真实的 Dom 挂载完毕，数据完成双向绑定，可以访问到 Dom 节点，使用$refs 属性对 Dom 进行操作。

beforeUpdate

> 发生在更新之前，也就是响应式数据发生更新，虚拟 dom 重新渲染之前被触发，你可以在当前阶段进行更改数据，不会造成重渲染。

updated

> 发生在更新完成之后，当前阶段组件 Dom 已完成更新。要注意的是避免在此期间更改数据，因为这可能会导致无限循环的更新。

beforeDestroy

> 发生在实例销毁之前，在当前阶段实例完全可以被使用，我们可以在这时进行善后收尾工作，比如清除计时器。

destroyed

> 发生在实例销毁之后，这个时候只剩下了 dom 空壳。组件已被拆解，数据绑定被卸除，监听被移出，子实例也统统被销毁。

### vue3

setup()

> 这是一个特殊的钩子，在组件实例被创建之前调用。
> 用于组合式 API，可以在其中定义响应式数据、方法等，返回的对象可以在模板中使用。

beforeCreate

> 在实例初始化之后，数据观测和事件配置之前被调用。

created

> 在实例创建完成后被立即调用。
> 此时，组件的响应式数据、计算属性、方法等已经初始化完成，但 DOM 尚未挂载。

beforeMount

> 在挂载开始之前被调用。
> 此时模板已经编译完成，但尚未渲染到 DOM 中。

mounted

> 挂载完成后被调用。
> 此时组件的 DOM 已经被渲染到页面中，可以在这个阶段进行 DOM 操作、发送网络请求等。

beforeUpdate

> 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
> 可以在这个阶段获取更新前的状态，以便进行一些比较或处理。

updated

> 由于数据更改导致的虚拟 DOM 重新渲染和打补丁之后调用。
> 可以在此阶段进行 DOM 操作，但要注意避免无限循环更新。

beforeUnmount

> 在卸载组件实例之前调用。
> 可以在这个阶段进行一些清理操作，如取消定时器、解绑事件等。

unmounted

> 卸载组件实例后调用。
> 此时组件的所有资源都已被释放，可以进行最后的清理工作。

### 选项式 API 与组合式 API 中生命周期的对应是关系是：

* beforeCreate 、created 对应 setup 函数

* beforeMount 、mounted 对应 onBeforeMount() 和 onMounted()

* beforeUpdate 、updated 对应 onBeforeUpdate() 和 onUpdated()

* beforeUnmount、unmounted 对应 onBeforeUnmount() 和 onUnmounted()

* errorCaptured 对应 onErrorCaptured()

* renderTracked 、renderTriggered 对应 onRenderTracked() 和 onRenderTriggered()

* activated、deactivated 对应 onActivated() 和 onDeactivated()

* serverPrefetch 对应 onServerPrefetch()

> 其中 onRenderTracked() 和 onRenderTriggered() 是 Vue3 新增的用于调试的生命周期钩子。
