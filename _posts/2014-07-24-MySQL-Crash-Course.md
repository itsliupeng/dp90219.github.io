---
layout: post
---

## Concat

## `where group_by order_by`

## 联结表

  - where 
  - 笛卡尔积：没有联结条件的表关系返回的结果
  - inner join     on
  - [SQL中内联接与外联接小结](http://oywz.blog.51cto.com/43726/78670)

## database engine
  - MyISAM (Indexed Sequential Access Method): 支持全文搜索 fulltext, 不支持 transaction
  - InnoDB: 不支持 fulltext, 支持 transaction

  关于数据库的实现，参阅 [数据库的最简单实现](http://www.ruanyifeng.com/blog/2014/07/database_implementation.html),
  原文在 [这儿](http://www.reddit.com/r/Database/comments/27u6dy/how_do_you_build_a_database/ciggal8)


## 组合查询
  - union v.s. union all

## view
  - create view

## procedure
  类似与 rails 中 scope

  - create procedure

## trigger
  可类比于 rails 中 `before_save`, `after_save`, `before_destroy` 等操作, 目前个人认为机制不同

  - create trigger

## transaction
- start transaction
- rollback
- commit
- savepoit delete1, rollback to delete1
- set autocommit = 0
