---
layout: post
title: Javascript Note
tags: javascript
---

**距离完成 Nodejs 训练营课程 已经有2个月了，一直没有写过笔记，惭愧，现在感觉也忘的差不多了，从头回顾下。**

### [new](http://coolshell.cn/articles/6668.html)
  var obj = new Base();

  其实做了：

  ```js
  var obj = {};
  obj.prototype = Base.prototype;
  Base.call(obj); // 使 this 指针指向 obj
  ```


[Prototypes and Inheritance in JavaScript](http://msdn.microsoft.com/en-us/magazine/ff852808.aspx)

