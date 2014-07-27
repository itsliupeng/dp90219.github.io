---
layout: post
title: Shell Cmd Note
---

### sed 

  ```sh
  sed '2,5d': delete
  sed '2a hi': append
  sed '2,5c No 2-5 Lines': change
  sed -n '2,5p': print
  sed 's/old_string/new_string/g': substitude
  sed 's/#.*$//g' || sed '/^$/d': 删除＃注释
  ```

### awk

  ```sh
  history | awk '{print $2}' | sort |  uniq -c | sort -nr | head -n10
  ```
  查看常用的 10 个 shell 命令



