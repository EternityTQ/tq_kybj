---
title: 公式合集
icon: screwdriver-wrench
---
## 第零讲 基础公式
### 0.0 非常诡异的结论

$$\frac{1}{1-q}=\sum_{i=0}^\infty q^i \space(|q|<1)$$

### 0.1 常用不等式

$$\sqrt{\frac{a^2+b^2}{2}}\geq \frac{a+b}{2} \geq \sqrt{ab} \geq \frac{2}{\frac 1a+\frac 1b}$$

$$|a\pm b| \leq |a| \pm |b|$$

$$e^x>x+1$$

$$x-1>\ln x$$

## 第一讲 函数极限与连续
### 1.3 常见等价无穷小量
注意：均为$x\to 0$

基础：

$$\sin x \backsim x $$

$$\tan x \backsim x $$

$$\arcsin x \backsim x $$

$$\arctan x \backsim x $$

$$\ln (1+x) \backsim x$$

$$e^x-1\backsim x$$

$$a^x-1\backsim x\ln a$$

$$1-\cos x\backsim \frac{1}{2}x^2$$

$$(1+x)^a-1 \backsim ax$$

由泰勒展开式得到的：

$$x-\ln(1+x)\backsim \frac{1}{2}x^2$$

$$x-\sin x \backsim \frac{x^3}{6}$$

$$\arcsin x - x \backsim \frac{x^3}{6}$$

$$\tan x - x \backsim \frac{x^3}{3}$$

$$x-\arctan x \backsim \frac{x^3}{3}$$

由其他公式得到的：

$$\ln(x+\sqrt{x^2+1})\backsim x$$

$$(1+x)^{\frac{1}{x}}-e\backsim -\frac{e}{2}x$$

$$e^x-1-x\backsim \frac{1}{2}x^2$$

$$1-(\cos x)^a\backsim \frac{1}{2}ax^2$$

### 1.4 泰勒展开式 (用于计算无穷小)
$$\sin x=x-\frac{x^3}{3!}+o(x^3)$$

$$\cos x=1-\frac{x^2}{2!}+\frac{x^4}{4!}+o(x^4)$$

$$\arcsin x = x+\frac{x^3}{3!}+o(x^3)$$

$$\tan x = x+\frac{x^3}{3}+o(x^3)$$

$$\arctan x = x-\frac{x^3}{3} + o(x^3)$$

$$\ln (1+x) = x-\frac{x^2}{2} + \frac{x^3}{3} + o(x^3)$$

$$e^x = 1+x+\frac{x^2}{2!} + \frac{x^3}{3!}+o(x^3)$$

$$(1+x)^a=1+ax+\frac{a(a-1)}{2!}x^2+o(x^2)$$

## 第二讲 数列极限

### 1. 常见不等式放缩
$$\sin x<x<\tan x(0<x<\frac π2)$$

$$\sin x<x(x>0)$$

$$\tan x<\frac 4πx$$

$$\sin x>\frac 2πx$$

$$\arctan x \leq x \leq \arcsin x (0\leq x \leq 1)$$

$$e^x\geq x+1$$

$$x-1\geq \ln x(x>0)$$

$$\frac{1}{1+x}<\ln (1+\frac 1x)< \frac 1x(x>0)$$

$$\frac{x}{1+x}<\ln (1+x)<x(x>0)$$

## 第三讲 一元函数微分学的概念
### 3.1 导数的常用定义形式


$$
\begin{align*}
f'(x_0)&=\lim_{\Delta x\to 0}\frac{\Delta y}{\Delta x}\\\\
& = \lim_{\Delta x\to 0}\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}\\\\
& = \lim_{x\to x_0}\frac{f(x)-f(x_0)}{x-x_0}
\end{align*}
$$

### 3.1 可微的常用公式
$$dx = \Delta x$$

$$dy = f'(x)dx = A\Delta x$$

$$\Delta f(x)=f(x+\Delta x)-f(x)$$

$$\Delta y=dy+o(\Delta x)$$
## 第四讲 一元函数微分学的计算
### 4.1 基本求导公式

$$\begin{aligned}
& (\ln|x|)'=\frac{1}{x} \\\\
& (\sin x)'=\cos x \\\\
& (\cos x)'=-\sin x \\\\
& (\arcsin x)'=\frac{1}{\sqrt{1-x^2}} \\\\
& (\arccos x)'=-\frac{1}{\sqrt{1-x^2}} \\\\
& (\tan x)'=\sec^2 x \\\\
& (\cot x)'=-\csc^2 x \\\\
& (\arctan x)'=\frac{1}{1+x^2} \\\\
& (\text{arccot }x)'=-\frac{1}{1+x^2} \\\\
& (\sec x)'=\sec x\tan x \\\\
& (\csc x)'=-\csc x\cot x \\\\
& [\ln(x+\sqrt{x^2+1})]'=\frac{1}{\sqrt{x^2+1}} \\\\
& [\ln(x+\sqrt{x^2+a^2})]'=\frac{1}{\sqrt{x^2+a^2}} \\\\
& [\ln(x+\sqrt{x^2-1})]'=\frac{1}{\sqrt{x^2-1}}
\end{aligned}$$

### 4.1 常用高阶导数

$$\begin{aligned}
    & (e^{ax+b})^{(n)}=a^ne^{ax+b}\\\\
    & [sin(ax+b)]^{(n)}=a^nsin(ax+b+\frac{nπ}{2})\\\\
    & [cos(ax+b)]^{(n)}=a^ncos(ax+b+\frac{nπ}{2})\\\\
    & [\ln(ax+b)]^{(n)}=(-1)^{n-1}a^n\frac{(n-1)!}{(ax+b)^n}\\\\
    & (\frac{1}{ax+b})^n=(-1)^{n}a^n\frac{n!}{(ax+b)^{n+1}}
\end{aligned}$$

### 4.1 泰勒展开式 (用于计算高阶导数)

$$\begin{aligned}
    & e^x=\sum_{n=0}^\infty\color{red}\frac{x^n}{n!}\color{black}=1+x+\frac{x^2}{2!}+\cdots+\color{red}{}\frac{x^n}{n!}\color{black}+\cdots \\\\
    & \frac{1}{1+x}=\sum_{n=0}^\infty\color{red}(-1)^nx^n\color{black}=1-x+x^2-x^3+\cdots+\color{red}(-1)^nx^n\color{black}+\cdots \\\\
    & \frac{1}{1-x}=\sum_{n=0}^\infty\color{red} x^n\color{black}=1+x+x^2+x^3+\cdots+\color{red}x^n\color{black}+\cdots  \\\\
    & \ln(1+x)=\sum_{n=0}^\infty\color{red}(-1)^{n-1}\frac{x^n}{n}\color{black}=x-\frac{x^2}{2}+\frac{x^3}{3}-\frac{x^4}{4}+\cdots+\color{red}(-1)^{n-1}\frac{x^n}{n}\color{black}+\cdots \\\\
    & \sin x=\sum_{n=0}^\infty\color{red}(-1)^n\frac{x^{2n+1}}{(2n+1)!}\color{black}=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\frac{x^7}{7!}+\cdots+\color{red}(-1)^n\frac{x^{2n+1}}{(2n+1)!}\color{black}+\cdots \\\\
    & \cos x=\sum_{n=0}^\infty\color{red}(-1)^n\frac{x^{2n}}{(2n)!}\color{black}=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\frac{x^6}{6!}+\cdots+\color{red}(-1)^n\frac{x^{2n}}{(2n)!}\color{black}+\cdots \\\\
    & (1+x)^a=1+ax+\frac{a(a-1)}{2!}x^2+\cdots+\color{red}\frac{a(a-1)\cdots(a-n+1)}{n!}x^n\color{black}+\cdots
\end{aligned}$$








