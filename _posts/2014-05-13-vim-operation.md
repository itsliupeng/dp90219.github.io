---
layout: post
---


### [search](http://vim.wikia.com/wiki/Search_patterns)

> `:/\<keyword\>`

> `:/red\|green\|blue`, seach red, or green, or blue

### replace  substitude

> `:%s/foo/bar/gc[i]`,     g: global, c: confirm, i: case sensitive

---

## ack-grep

###cmdline
- `ack -a hello` 在cwd下所有文件中查找（默认只在源码文件中 `ack --help-types|less`）
- `ack --js hello`  在cwd下查找hello内容，并限制在js文件中
- `ack --nojs hello`

### 与vim结合

- `Ack` 开头， 命令如上
- `Ack -Q "*hello"`, 可以搜索特殊字符如`*`
 
---

## window
`Ctrl-w`
[This link details window operation well.](http://vimcasts.org/episodes/working-with-windows/)

---

## visual block mode
`Ctrl-v`

- I
- A
- c
- d

[link](http://vimcasts.org/episodes/selecting-columns-with-visual-block-mode/)


## fold
- zi
- za

nnoremap <Space> za

[link](http://vimcasts.org/episodes/how-to-fold/)

