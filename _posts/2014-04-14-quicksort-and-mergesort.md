---
layout: post
categories: algorithms
---
#quicksort
{% highlight c++  %}
#include <stdio.h>

int less(int x, int y) {
    return x < y? 1: 0;
}

void exch(int* a, int i, int j) {
    int temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

int partition(int* a, int lo, int hi) {
    int i = lo;
    int j = hi + 1;
    int v = a[lo];

    while (1) {
        while (less(a[++i], v))
            if (i == hi) break;
        while (less(v, a[--j]))
            if (j == lo) break;
        if (i >= j) break;
        exch(a, i, j);
    }

    exch(a, lo, j);
    return j;
}

void sort(int* a, int lo, int hi){
    if (lo >= hi)
        return;
    int p = partition(a, lo, hi);
    sort(a, lo, p-1);
    sort(a, p+1, hi);
}

void p(int* a, int len) {
    int i=0;
    for (i=0; i<len-1; i++) {
        printf("%d, ", a[i]);
    }
    printf("%d\n", a[len-1]);
}

int main() {
    int a[5] = {3, 2, 4, 1, 5};
    p(a, 5);
    sort(a, 0, 4);
    p(a, 5);

}

{% endhighlight %}
