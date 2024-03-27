---
title: 习题本
---
## 3.1 栈
P70 Q3

1. 合法的：A、C、D
   
2. 算法的基本思想：对于给定的序列$S=(a_1,a_2,a_3...a_n)$，对任意$i∈[1,n]$，在$S_0=(a_1,a_2,a_3...a_i)$中，都有$Count(I)\leq count(O)$

因此，只需要依次遍历给定的序列，遇到I时，count值+1，遇到O时，count值-1，若count值被扣至负数，则立刻返回false；否则，若能成功遍历到序列末，则返回true

P71. Q4

算法的基本思想：首先，创建一个用于比对数据的临时栈

设置一对快慢指针，慢指针在移动的过程中，将移动过程中遍历到的数据存入临时栈中

当快指针遍历至链表尾部时，慢指针此时进入比对模式，将数据与临时栈顶数据比对。若不相等，则立刻返回false；若相等，则弹出栈顶数据，并往前移动，继续进行比对，直到移动至链表末尾，此时比对成功，返回true。

## 3.2 队列

P86 Q1

```c++
#define Maxsize 20
class QueueNode{
    public:
    bool tag=false;
    int *QueueList;
    int front=0;
    int rear=0;
    void InitQueue(QueueNode& L){
        QueueList = new int[Maxsize];

    }
    bool PushElem(QueueNode&L, int num){
        if(L.tag&&L.front==L.rear) return false;
        L.tag=true;
        L.QueueList[L.rear++]=num;
        L.rear=L.rear%Maxsize;
        return true;
    }
    bool PopElem(QueueNode&L){
        if(!L.tag&&L.front=L.rear) return false;
        L.tag=false;
        L.front--;
        L.front%=Maxsize;
        return true;
    }
}
```

P86 Q2
```c++
Queue<int> Q;
Stack<int> S;

while(!Q.empty()){
    S.push(Q.front());
    Q.pop();
}
while(!S.empty()){
    Q.push_back(S.top());
    S.pop();
}
```

P86 Q3
>写错了，猪鼻

P86 Q4

1. 链式存储结构，因为队列的存储空间需要随时变动增加

2. 队空条件：front==rear
队满条件：