---
layout: post
title: "Javascript: The Good Parts"
tags: book
---

> 编程是很困难的事， 绝不应该在懵懵懂懂的状态下开始你的工作

> javascript 是披着 C 外衣的Lisp

> 所谓编程，就是将一组需求分解成一组函数与数据结构的技巧


## Numbers
  64位浮点数

  - 1e2
  - isNaN(number)

## Strings
  unicode: 16bit

## 假值(false)
  - false
  - null
  - undefined
  - ''
  - 0
  - NaN

*区别于 Ruby（false、nil)*

## 避免从undefined的成员属性取值导致TypeError异常
  flight.equipment && flight.equipment.model
## delete
  删除对象属性 delete person.name

## Functions
对象字面量产生的对象连接到 Object.prototype, 函数对象连接到 Function.prototype （该原型对象本身连接到 Object.prototype）。

每个函数在创建时会附加两个隐藏属性： 函数的上下文(闭包)，调用此函数的“调用”属性

function 接受两个附加的参数： this, arguments

### 4 种调用模式：方法调用， 函数调用， 构造器调用，apply 调用
  - 方法调用：this 绑定到`.`前的对象, `b.a.f()`, f 中的 this 指向 a
  - 函数调用：函数并非一个对象的属性, 则被当作一个函数来调用，如 var sum = add(3, 4), 此时 this 被绑定到全局对象
  - 构造器调用： 如果在一个函数（约定为首字母大写）前面带上 new 来调用，将会创建一个连接到给函数的 prototype 成员的新对象， 同行 this 也会被绑定到这个新对象上
  - apply 调用：`apply( 'this' , [,,])`

###arguments
  调用函数时传递给它的参数列表， 不是真正的数组，有一个 length 属性， 没有任何数组的方法

  [].slice.apply(arguments)

###返回
  - 如果没有指定返回值， 则返回 undefined
  - new 函数时，且返回不是一个对象， 则返回this

###异常
  exception 对象，有 name, message 属性
###作用域
  js不支持代码块级作用域(即在 {} 之中)， 有函数作用域， 定义在函数中的变量和参数在函数外部不可见， 在函数内部任何位置定义的变量在该函数内部任何位置都可见，因此建议在函数体的顶部声明函数中可能用到的所有变量

###闭包
  - 闭包进行信息隐藏， 减少全局污染
  - 外部函数的变量， 只要内部函数需要它， 它就一直保留, 而不管外部函数是否已经返回
  - 内部函数能够访问外部函数的实际变量而无需复制(异步调用时)

###模块
  模块模式的一般形式： 一个函数， 它内部定义了私有变量和函数； 利用闭包创建可以访问私有变量和函数的特权函数； 最后返回这个特权函数， 或者把它们保存到一个可以访问的地方。

  模块模式通常结合单例模式， js的单例模式就是对象字面量表示法创建的对象， 对象的属性值可以是函数或者数值， 并且属性在该对象的生命周期内不会发生变化

###级联 cascade
  返回this的方法,  链式调用

###柯里化(Haskell Curry), 又称套用

###Memoization
```js
  var fabonacci = function() {
    var memo = [0, 1];
    var fib = function() {
      var result = memo[n];
      if (typeof result != 'number') {
        result = fib(n-1) + fib(n-2);
        memo[n] == result;
      }
      return result;
    };
    return fib;
  }();
```

##Inheritance
**在基于类的语言中，对象是类的实例，并且类可以从另一个类继承。 Javascipt 基于原型，意味着对象直接从其他对象继承**
###伪类(pseudoclassical)
**即指通过`new`方法来新建对象


##Array
**JS 没有线性分配内存的数组， 它把数组的下标变成字符串，作为属性， 如 a[0], 可写为 a['0']**

*attention: `a = [], a[10] = 5` 会改变 length, 而`a['abc']` 不会改变 length, 只有属性名为整数或"整数"时才可以*

**notice： Array.prototype Object.prototype 不同**

###length
length 属性的值是这个数组最大整数属性名加1， 不一定等于数组里面的属性的个数
> a = [1]; 
  a[10] = 10; 
  a.length == 11

可以直接设置length的值，设更大不会分配更多空间，设小会删除下标 >= length 的属性的值

## delete
Array 是对象，故可以用delete, 但会留下空洞，因此用splice方法

## Enumeration

for in 无法保证属性的顺序，而要顺序遍历 Array， 用类似 C 的 for 语句

## Confusion
```js
var is_array = function(myArray) {
  Object.prototype.toString().apply(myArray) === '[object Array]';
}
```
>  By default, the toString() method is inherited by every object descended from Object. If this method is not overridden in a custom object, toString() returns "[object type]", where type is the object type. 


**Array.isArray()**

##Regular expression
###structure
 - `/   /[gim]`
 - `new RegExp("  ", '[gim]')`

###RegExp Escape
- `\b`:  word-boundary
- `\1`:  `/^(a).*\1/`, will match begins and ends with 'a'

###RegExp Group
- 捕获型 `(  )`
- 非捕获型 `(?:  )`
- 向前正向匹配 `(?=  )`
- 向前负向匹配 `(?!  )`

###RegExp Class Escape
  `- / [ ] \ ^`

###RegExp Quantifier
- ?: `{0, 1}`
- *: `{0, }`
- +: `{1, }`

## Method

###Array
- concat(item..)
- join(separator)
- pop()

  ```js
    Array.prototype.pop = function() {
      return this.splice(this.length-1, 1)[0];
    }
  ```
- push() 

  ```js
    Array.prototype.push = function() {
      this.splice.apply(this, [this.length, 0].concat(Array.prototype.slice.apply(arguments)));
      return this.length;  
    }
  ```

- reverse()
- shift() 

  ```js
    Array.prototype.shift = function() {
      return this.splice(0 ,1)[0];  
    }
  ```

- slice(start, end)
- sort(comparefn)
  **默认要被排序的元素为字符串， 如`[3, 111, 22].sort() => [111, 22, 3]`**

- splice(start, deleteCount, item...)
- unshift(item...)

###Function
- function.apply(thisArg, argArray)

###Number
  to be continued...
###Object
- hasOwnProperty(name)
###RegExp
- exec(string)
- test(string)

##String
- charAt(pos)
- charCodeAt(pos)
- concat(string..): 用`+`替代
- indexOf(searchString, position)
- lastIndexOf(searchString, position)
- localeCompare(that)
- match(regexp)
- replace(searchValue|regexp, replaceValue|function)
- search(regexp)
- slice(start, end)
- split(separator, limit)
- substring(start, end): 用 slice 替代
- toLowerCase()
- toUppercase()
- fromCharCode(char...)

---
hanoi tower
尾递归优化， 如果一个函数返回自身递归调用的结果， 那么调用过程被替换为一个循环
