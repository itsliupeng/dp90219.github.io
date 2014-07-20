---
layout: post
---


## 内省 inspect
  - `my_object.class`
  - `my_object.class.instance_methods(false)` 非继承实例方法
  - `my_object.instance_variables` 实例变量,即@name, @...

*`Object.methods.grep /^re/`*

---
## Chapter 1

### class 更像作用域，而非类型声明,  它把你带到类的上下文 context
>   类只不过是增强的Module, 增加了3个方法--new, allocate, superclass,[allocate 是 new 的支撑方法], 其他基本一样, 

### Open Class 打开类技术
  - 避免 Monkeypatch

### 任何以大写字母开头的引用（包括类名和模块名）都是常量

### MySubclass.ancestors

---
## Chapter 2

### dynamic dispatch && dynamic method, 主动策略
- send()
- use inspect 

### ghost method && dynamic proxy, 被动策略 
- override method_missing
- DelegateClassClass() 拟态方法

---
## Chapter 3

### Closures && Scope

- 作用域门: class, module, def
- 穿越作用域门:Class.new, Module.new, Module#define_method , 形成 flat scope
- Context Probe: obj.instance_eval


---
## Chapter 4

### 当前类 
  - MyClass.class_eval, 打开这个类
  - Class Instance Variables 类实例变量  vs.  Class Variable 类变量 vs. 类对象实例变量

