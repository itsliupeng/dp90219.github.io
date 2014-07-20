---
layout: post
---

## monkey patch

>  A monkey patch is a way to extend or modify the run-time code of dynamic languages without altering the original source code. This process has also been termed duck punching and shaking the bag.


> It's simply the dynamic replacement of attributes at runtime.
  For instance, consider a class that has a method get_data. This method does an external lookup (on a database or web API, for example), and various other methods in the class call it. However, in a unit test, you don't want to depend on the external data source - so you dynamically replace the get_data method with a stub that returns some fixed data.
  Because Python classes are mutable, and methods are just attributes of the class, you can do this as much as you like - and, in fact, you can even replace classes and functions in a module in exactly the same way.


[__Monkeypatching For Humans__](http://blog.codinghorror.com/monkeypatching-for-humans/)
