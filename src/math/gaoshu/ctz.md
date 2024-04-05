---
title: 错题集
icon: book
---
注：仅记录题目，后面必须回来做一遍

## 1. 函数极限与连续

### 课后 1.1 √

设$f(x)=u(x)+v(x), g(x)=u(x)-v(x)$，并设$\lim_{x\to x_0}u(x)$与$\lim_{x\to x_0}v(x)$都不存在，则下列结论正确的是：

A. 若$\lim_{x\to x_0}f(x)$不存在，则$\lim_{x\to x_0}g(x)$必存在

B. 若$\lim_{x\to x_0}f(x)$不存在，则$\lim_{x\to x_0}g(x)$必不存在

C. 若$\lim_{x\to x_0}f(x)$存在，则$\lim_{x\to x_0}g(x)$必不存在

D. 若$\lim_{x\to x_0}f(x)$存在，则$\lim_{x\to x_0}g(x)$必存在

### 课后 1.3 √

设函数$f(x)=\frac{1}{e^{x/(x-1)}-1}$，则x=0是f(x)的第( )类间断点，x=1是f(x)的第( )类间断点

### 课后 1.5 

设函数$f(x)=\lim_{n\to \infty}\frac{1+x}{1+x^{2n}}$，关于该函数的间断点，下列结论正确的是

A. 不存在间断点 

B. 存在间断点x=1 

C. 存在间断点x=0 

D. 存在间断点x=-1

### 课后 1.6 √

设$f(x)=\frac{x}{\sqrt{1+x^2}},f_1(x)=f[f(x)],f_2(x)=f[f_1(x)],f_{n+1}(x)=f[f_n(x)](n=1,2,3,\cdots)$，则$f_n(x)=( )$

### 课后1.8

极限$\lim_{x\to \infty}(\frac{x+2}{x-1})^x=?$

### 课后 1.16

设如下函数存在，[·]为取整函数，求I,a

$$I=\lim_{x\to 0}\left(\frac{\ln (1+e^{2/x})}{\ln (1+e^{1/x})}+a[x]\right)$$

### 1000题 A1.9

已知$\lim_{x\to 0}\frac{f(x)}{x}$存在，且函数

$$f(x)=\ln (1+x)+2x·\lim_{x\to 0}\frac{f(x)}{\sin x}$$

，则$\lim_{x\to 0}\frac{f(x)}{x}$=___

## 2. 数列极限

### 课后 2.3 √

$$\lim_{n\to\infty}\left(\sqrt{n+\sqrt{n}}-\sqrt{n-\sqrt{n}} \right)=$$

### 课后 2.4

设下列极限存在且不为0，则常数k=___

$$\lim_{n\to\infty}\frac{n^{99}}{n^k-(n-1)^k}$$

### 课后 2.7 √

设函数$f(x)$在$[a,b]$上连续，$x_1,x_2,\cdots,x_n$是$[a,b]$上的一个点列，求下列极限

$$\lim_{n\to\infty}\sqrt[n]{\frac 1n \sum^n_{k=1}e^{f(x_k)}}$$


>单调有界准则


### 课后 2.8

设$x_1=2, x_n+(x_n-4)x_{n-1}=3\text{  }(n=2,3,...)$，证明$\lim_{n\to\infty}x_n$存在，并求其值


### 1000题 A2.2

当$n\to\infty$时，$(1+\frac 1n)^n-e$与$\frac an$是等价无穷小量，则a=___

### 1000题 A2.12

设单调递减数列$\{x_n\}$满足$x_{n+1}=2\ln (1+x_n),x_1>a>0$，且a是$x-2\ln(1+x)=0$的唯一非零解，证明$\{x_n\}$收敛

## 3. 一元函数微分学的概念

### 课后 3.5 √

设$f(x)$满足$f(0)=0$，且$f'(x)$存在，求：

$$\lim_{x\to 0}\frac{f(1-\sqrt{\cos x})}{\ln(1-x\sin x)}$$


### 课后 3.7

设$f(x)=\begin{cases}
     x^x\sin\frac πx, &x<0  \\\\
     A, &x=0 \\\\
     ax^2+b, &x>0
\end{cases}$，求常数A,a,b的值，使f(x)在x=0处可导，并求$f'(x)$

### 课后 3.8 √
已知函数$f(x)$在x=1处可导，且$\lim_{x\to 0}\frac{f(e^{x^2})-3f(1+\sin^2x)}{x^2}=2$，求$f'(1)$

### 课后 3.9 √

设$\delta>0$，$f(x)$在$[-\delta,\delta]$上有定义，$f(0)=1$，且满足

$$\lim_{x\to 0}\frac{\ln(1-2x)+2xf(x)}{x^2}=0$$

证明：$f(x)$在x=0处可导，并求$f'(0)$

> 泰勒公式

### 1000题 A3.8
设函数$f(x)$连续，$\lim_{x\to 1}\frac{f(x)-1}{\ln x}=2$，则曲线$y=f(x)$在点$x=1$处的切线方程是




