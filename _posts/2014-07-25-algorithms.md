---
layout: post
---


### sort
  - 保持稳定: insertion sort, merge sort
  - 非原地排序：merge sort

## minimum spanning tree
  - Prim
  - Kruskal

### shortest path
  - Dijkstra
  - 无环加权图最短路径

    topological relax
  - Bellman-Ford

    每一轮都放松 E 条边，重复 V 轮

### 字符串排序
  - [radix sort](http://en.wikipedia.org/wiki/Radix_sort)，低位优先

### 最大流
  - Ford-Fulkerson

    网络中的初始流量为 0, 沿着从起点到终点的任意增广路径（不含 饱和的正向边或空的逆向边）增大流量，直到网络中那个不存在这样的路径为止

