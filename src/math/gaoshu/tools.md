---
title: 公式合集
icon: screwdriver-wrench
---

## 第零讲 基础公式
### 非常诡异的结论

$$\frac{1}{1-q}=\sum_{i=0}^\infty q^i \space(|q|<1)$$

### 常用不等式

$$\sqrt{\frac{a^2+b^2}{2}}\geq \frac{a+b}{2} \geq \sqrt{ab} \geq \frac{2}{\frac 1a+\frac 1b}$$

$$|a\pm b| \leq |a| \pm |b|$$

$$e^x>x+1$$

$$x-1>\ln x$$

$$ab\leq\frac 12(a^2+b^2)$$

### 和差公式

$$\begin{aligned}
    &\sin(\alpha\pm\beta)=\sin\alpha\sin\beta\pm\cos\alpha\cos\beta\\\\
    &\cos(\alpha\pm\beta)=\cos\alpha\cos\beta\mp\sin\alpha\sin\beta\\\\
    &\tan(\alpha\pm\beta)=\frac{\tan\alpha\pm\tan\beta}{1\mp\tan\alpha\tan\beta}\\\\
    &\cot(\alpha\pm\beta)=\frac{\cot\alpha\cot\beta\mp1}{\cot\alpha\pm\cot\beta}
\end{aligned}$$


### 二倍角

$$\begin{aligned}
    & \sin 2\alpha=2\sin\alpha\cos\alpha\\\\
    & \cos 2\alpha=\cos^2\alpha-\sin^2\alpha=1-2\sin^2\alpha=2\cos^2\alpha-1\\\\
    & \tan 2\alpha=\frac{2\tan\alpha}{1-\tan^2\alpha}\\\\
    & \cot 2\alpha=\frac{\cot^2\alpha-1}{2\cot\alpha}
\end{aligned}$$

### 半角公式
$$\begin{aligned}
    & \sin^2\frac{\alpha}{2}=\frac 12(1-\cos \alpha)\\\\
    & \cos^2\frac{\alpha}{2}=\frac 12(1+\cos\alpha)\\\\
    & \tan\frac{\alpha}{2}=\frac{1-\cos\alpha}{\sin\alpha}=\frac{\sin\alpha}{1+\cos\alpha}=\pm\sqrt{\frac{1-\cos\alpha}{1+\cos\alpha}}\\\\
    & \cot\frac{\alpha}{2}=\frac{\sin\alpha}{1-\cos\alpha}=\frac{1+\cos\alpha}{\sin\alpha}=\pm\sqrt{\frac{1+\cos\alpha}{1-\cos\alpha}}
\end{aligned}$$


### 因式分解

$$\begin{aligned}
    & (a\pm b)^3=a^3\pm 3a^2b + 3ab^2 \pm b^3\\\\
    & a^3 \pm b^3 = (a\pm b)(a^2\mp ab+b^2)
\end{aligned}$$

### 万能公式

若$t=\tan\frac x2$，则

$$\sin x=\frac{2t}{1+t^2},\cos x=\frac{1-t^2}{1+t^2}$$


## 第一讲 函数极限与连续
### 重要极限

$$\lim_{x\to 0}\frac{\sin x}{x}=1$$

$$\lim_{x\to \infty}(1+\frac{1}{x})^x=e$$

上式可以将x等价看成狗，只要化成这种形式就好了

例子：

$$
\begin{aligned}
    &\lim_{x\to\infty}(\frac{x+2}{x-1})^x\\\\
    =&\lim_{x\to\infty}(1+\frac{3}{x-1})^{\frac{x-1}{3}·\frac{3x}{x-1}}\\\\
    =&e^{\lim\limits_{x\to\infty}\frac{3x}{x-1}}\\\\
    =&e^3
\end{aligned}$$



### 常见等价无穷小量
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

### 泰勒展开式 (用于计算无穷小)
$$\sin x=x-\frac{x^3}{3!}+o(x^3)$$

$$\cos x=1-\frac{x^2}{2!}+\frac{x^4}{4!}+o(x^4)$$

$$\arcsin x = x+\frac{x^3}{3!}+o(x^3)$$

$$\tan x = x+\frac{x^3}{3}+o(x^3)$$

$$\arctan x = x-\frac{x^3}{3} + o(x^3)$$

$$\ln (1+x) = x-\frac{x^2}{2} + \frac{x^3}{3} + o(x^3)$$

$$\ln(1-x)=-x-\frac{x^2}{2} - \frac{x^3}{3} + o(x^3)$$

$$e^x = 1+x+\frac{x^2}{2!} + \frac{x^3}{3!}+o(x^3)$$

$$(1+x)^a=1+ax+\frac{a(a-1)}{2!}x^2+o(x^2)$$

## 第二讲 数列极限

### 2.1 常见不等式放缩
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

### 3.2 可微的常用公式
$$dx = \Delta x$$

$$dy = f'(x)dx = A\Delta x$$

$$\Delta f(x)=f(x+\Delta x)-f(x)$$

$$\Delta y=dy+o(\Delta x)$$
## 第四讲 一元函数微分学的计算
### 4.1 基本求导公式

$$\begin{aligned}
& (\ln|x|)'=\frac{1}{x} \\\\
& (\sin x)'=\cos x \\
& (\cos x)'=-\sin x \\\\
& (\arcsin x)'=\frac{1}{\sqrt{1-x^2}} \\
& (\arccos x)'=-\frac{1}{\sqrt{1-x^2}} \\\\
& (\tan x)'=\sec^2 x \\
& (\cot x)'=-\csc^2 x \\\\
& (\arctan x)'=\frac{1}{1+x^2} \\
& (\text{arccot }x)'=-\frac{1}{1+x^2} \\\\
& (\sec x)'=\sec x\tan x \\
& (\csc x)'=-\csc x\cot x \\\\
& [\ln(x+\sqrt{x^2+1})]'=\frac{1}{\sqrt{x^2+1}} \\
& [\ln(x+\sqrt{x^2+a^2})]'=\frac{1}{\sqrt{x^2+a^2}} \\
& [\ln(x+\sqrt{x^2-1})]'=\frac{1}{\sqrt{x^2-1}}\\\\
& (\sin x\cos x)'=\cos 2x\\\\
$(\arctan\frac{1+x}{1-x})'=\frac{1}{1+x^2}
\end{aligned}$$

### 4.2 常用高阶导数

$$\begin{aligned}
    & (e^{ax+b})^{(n)}=a^ne^{ax+b}\\\\
    & [sin(ax+b)]^{(n)}=a^nsin(ax+b+\frac{nπ}{2})\\\\
    & [cos(ax+b)]^{(n)}=a^ncos(ax+b+\frac{nπ}{2})\\\\
    & [\ln(ax+b)]^{(n)}=(-1)^{n-1}a^n\frac{(n-1)!}{(ax+b)^n}\\\\
    & (\frac{1}{ax+b})^n=(-1)^{n}a^n\frac{n!}{(ax+b)^{n+1}}
\end{aligned}$$

### 4.3 泰勒展开式 (用于计算高阶导数)

$$\begin{aligned}
    & e^x=\sum_{n=0}^\infty\color{red}{\frac{x^n}{n!}}=1+x+\frac{x^2}{2!}+\cdots+\color{red}{\frac{x^n}{n!}}+\cdots \\\\
    & \frac{1}{1+x}=\sum_{n=0}^\infty\color{red}{(-1)^nx^n}=1-x+x^2-x^3+\cdots+\color{red}{(-1)^nx^n}+\cdots \\\\
    & \frac{1}{1-x}=\sum_{n=0}^\infty\color{red} {x^n}=1+x+x^2+x^3+\cdots+\color{red}{x^n}+\cdots  \\\\
    & \ln(1+x)=\sum_{n=0}^\infty\color{red}{(-1)^{n-1}\frac{x^n}{n}}=x-\frac{x^2}{2}+\frac{x^3}{3}-\frac{x^4}{4}+\cdots+\color{red}{(-1)^{n-1}\frac{x^n}{n}}+\cdots \\\\
    & \sin x=\sum_{n=0}^\infty\color{red}{(-1)^n\frac{x^{2n+1}}{(2n+1)!}}=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\frac{x^7}{7!}+\cdots+\color{red}{(-1)^n\frac{x^{2n+1}}{(2n+1)!}}+\cdots \\\\
    & \cos x=\sum_{n=0}^\infty\color{red}{(-1)^n\frac{x^{2n}}{(2n)!}}=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\frac{x^6}{6!}+\cdots+\color{red}{(-1)^n\frac{x^{2n}}{(2n)!}}+\cdots \\\\
    & (1+x)^a=1+ax+\frac{a(a-1)}{2!}x^2+\cdots+\color{red}{\frac{a(a-1)\cdots(a-n+1)}{n!}x^n}+\cdots
\end{aligned}$$
## 第五讲 一元微分学的几何应用

### 5.1 极值点与拐点

| 特性 | 极值点 | 拐点 |
| --- | ------ | ---- |
| 导数 | 一阶导为0 | 二阶导为0 |
| 第一充分条件 | 判断一阶导的变号情况<br>左高右低是极大<br>左低右高是极小 | 判断二阶导是否变号 |
| 第二充分条件 | 判断一阶导是否为0<br>且二阶导是否**不**为0 | 判断二阶导是否为0<br>且三阶导是否**不**为0 |
| 第三充分条件 | 判断偶数阶导是否**不**为0 | 判断奇数阶导是否**不**为0|

### 5.2 曲率


设函数在该点二阶导存在，则该点的曲率公式为：

$$k=\frac{|y''|}{[1+(y')^2]^{\frac 32}}$$

曲率半径为：

$$R=\frac 1k = \frac{[1+(y')^2]^{\frac 32}}{|y''|}$$

## 第六讲 一元微分学的公式

### 6.1 费马定理

若$f(x)$在$x_0$处**可导**且**取极值**，则$f'(x_0)=0$


### 6.2 罗尔定理
  
设$f(x)$满足闭区间连续，开区间可导，且$f(a)=f(b)$，则存在$\xi∈(a,b)$，使得$f'(\xi)=0$

### 6.3 拉格朗日中值定理

若函数$f(x)$满足在闭区间连续，开区间可导，则存在$\xi∈(a,b)$，使得 $f(b)-f(a)=f'(\xi)(b-a)$

或者写成：

$$f'(\xi)=\frac{f(b)-f(a)}{b-a}$$

### 6.4 柯西中值定理

设$f(x),g(x)$均满足闭区间连续，开区间可导，且$g'(x)\not=0$，则存在$\xi∈(a,b)$，使得

$$\frac{f(b)-f(a)}{g(b)-g(a)}=\frac{f'(\xi)}{g'(\xi)}$$

### 6.5 泰勒公式

带*拉格朗日余项*的n阶泰勒公式( ==区间上== )

设$f(x)$在$x_0$的某个邻域内n+1阶导数存在，则对该邻域内的任意点x，均有

$$f(x)=f(x_0)+f'(x_0)(x-x_0)\cdots+\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n-\color{red}{\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_0)^{n+1}}$$

其中，$\xi$介于$x$与$x_0$之间

:::tip
此公式适用于区间，常在证明题中使用，如证不等式，中值等式等
:::

带*佩亚诺余项*的n阶泰勒公式( ==局部端点上== )

设$f(x)$在$x_0$上n阶可导，则对存在$x_0$的一个邻域，对于该邻域内的任意点x，有

$$f(x)=f(x_0)+f'(x_0)(x-x_0)\cdots+\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n-\color{red}{o((x-x_0)^n)}$$

:::tip
此公式仅使用于点$x=x_0$及其邻域，常用于研究点$x=x_0$处的某些结论，

如求极限，判定无穷小阶数，判定极值等
:::

## 第八讲 一元积分学的概念

### 8.1 定积分的精确定义

当定积分存在时，分为两个"任取"：分点$x_i$任取，区间内一点$\xi_i∈(x_{i-1},x_i)$任取，故可作两个"特取"：

将$[a,b]$n等分，且去每个小区间的右端点为$\xi_i$，即

$$\int_a^bf(x)dx=\lim_{n\to\infty}\sum_{i=1}^nf(a+\frac{b-a}{b}i)\frac{b-a}{n}$$

若取$a=0,b=1$，则得出来的形式更通用更简单：

$$\color{red}{\int_0^1f(x)dx}=\lim_{n\to\infty}\sum_{i=1}^nf(\frac in)\frac 1n$$

### 8.2 P积分
$$\begin{aligned}
    \int_0^1\frac{1}{x^p}dx\begin{cases}
    \text{收敛，}&0<p<1\\\\
    \text{发散，}&p\geq 1
\end{cases}\\\\

\int_1^{+\infty}\frac{1}{x^p}dx\begin{cases}
    \text{收敛，}&p>1\\\\
    \text{发散，}&p\leq 1
\end{cases}
\end{aligned}$$

:::tip
只要是$\frac 1x$，两边均发散
:::

同时可以引出下列结论：(证明参照30讲P154\~P155)

$$\begin{aligned}
    \int_0^1\frac{\ln x}{x^p}dx\begin{cases}
    \text{收敛，}&0<p<1\\\\
    \text{发散，}&p\geq 1
\end{cases}\\\\

\int_1^{+\infty}\frac{\ln x}{x^p}dx\begin{cases}
    \text{收敛，}&p>1\\\\
    \text{发散，}&p\leq 1
\end{cases}
\end{aligned}$$

## 第九讲 一元函数积分学的计算

### 9.1 基本积分公式
:::danger
不定积分要加C
:::

:::tip
注意辨析如下形式：

| $\frac{1}{\text{狗}^2+\text{狗}^2}$ | $\frac{1}{\text{狗}^2-\text{狗}^2}$ |
| --- | --- |
| $\frac{1}{\sqrt{\text{狗}^2+\text{狗}^2}}$ | $\frac{1}{\sqrt{\text{狗}^2-\text{狗}^2}}$ |
:::
$$\begin{aligned}
    & \int x^kdx=\frac{1}{k+1}x^{k+1}+C,k\not=-1\\\\
    & \int\frac{1}{x}dx=\ln|x|+C\\\\
    & \int e^xdx=e^x+C\\
    & \int a^xdx=\frac{a^x}{\ln a}+C,a>0\text{且}a\not=1\\\\
    & \int\sin xdx=-\cos x+C\\
    & \int \cos xdx=\sin x+C\\
    & \int \tan x dx=-\ln|\cos x|+C\\
    & \int\cot xdx=\ln|\sin x|+C\\\\
    & \int\sec xdx=\ln|\sec x+\tan x|+C\\
    & \int\csc xdx=\ln|\csc x-\cot x|+C\\\\
    & \int \sec^2xdx=\tan x+C\\
    & \int \csc^2xdx=-\cot x+C\\\\
    & \int\sec x\tan xdx=\sec x+C\\
    & \int\csc x\cot xdx=-\csc x+C\\\\
    & \int\frac{1}{1+x^2}dx=\arctan x+C\\
    & \int\frac{1}{a^2+x^2}dx=\frac 1a\arctan \frac xa +C(a>0)\\\\
    & \int\frac{1}{\sqrt{1-x^2}}dx=\arcsin x+C\\
    & \int\frac{1}{\sqrt{a^2-x^2}}dx=\arcsin \frac xa+C(a>0)\\\\
    & \int \frac{1}{\sqrt{x^2+a^2}}dx=\ln(x+\sqrt{x^2+a^2})+C(\text{常见}a=1)\\
    & \int \frac{1}{\sqrt{x^2-a^2}}dx=\ln|x+\sqrt{x^2-a^2}|+C(|x|>|a|)\\\\
    & \int \frac{1}{x^2-a^2}dx=\frac{1}{2a}\ln\left|\frac{x-a}{x+a}\right|+C\\
    & \int \frac{1}{a^2-x^2}dx=\frac{1}{2a}\ln\left|\frac{x+a}{x-a}\right|+C\\\\
    & \int\sqrt{a^2-x^2}dx=\frac{a^2}{2}\arcsin\frac xa+\frac x2\sqrt{a^2-x^2}+C(a>|x|\geq 0)\\
    & \text{↑用换元法代的}\\\\
    & \int\sin^2xdx=\frac x2-\frac{\sin 2x}{4}+C\\
    & \int \cos^2xdx=\frac x2+\frac{\sin 2x}{4}+C\\
    & \int\tan^2xdx=\tan x-x+C(\tan^2x=\sec^2x-1)\\
    & \int\cot^2xdx=-\cot x-x+C(\cot^2x=\csc^2x-1)\\\\
    & \int\frac{1}{1+\sin x}dx=\tan x-\sec x+C\\
    & \int\frac{1}{1+\cos x}dx=-\cot x-\csc x+C\\\\
    & \int\frac{x^2}{1+x^2}dx=x-\arctan x+C\\\\
    & \int\frac{x^2}{1+x}dx=x-\frac 12x^2+\ln|1+x|+C\\\\
    & \int\ln xdx=x\ln x-1+C
\end{aligned}$$

### 9.2 常见凑微分公式

$$\begin{aligned}
    & \int xf(x^2)dx=\frac 12\int f(x^2)d(x^2)=\frac 12\int f(u)du \\\\
    & \int\sqrt{x}f(x^{\frac 32})dx=\frac 23f(x^{\frac 32})d(x^{\frac 32})=\frac 23\int f(u)du\\\\
    & \int\frac{f(\sqrt{x})}{\sqrt{x}}dx=2\int f(\sqrt{x})d(\sqrt{x})=2\int f(u)du\\\\
    & \int \frac{f(-\frac 1x)}{x^2}dx=2\int f(-\frac 1x)d(-\frac 1x)=\int f(u)du\\\\
    & \int \frac{f(\ln x)}{x}dx=\int f(\ln x)d(\ln x)=\int f(u)du\\\\
    & \int e^xf(e^x)dx=\int f(e^x)d(e^x)= \int f(u)du\\\\
    & \int a^xf(a^x)dx=\frac{1}{\ln a}\int f(a^x)d(a^x)=\frac{1}{\ln a}\int f(u)du\\\\
    & \int \sin x·f(-\cos x)dx=\int f(-\cos x)d(-\cos x)=\int f(u)du\\\\
    & \int \cos x·f(\sin x)dx=\int f(\sin x)d(\sin x)=\int f(u)du\\\\
    & \int \frac{f(\tan x)}{\cos^2x}dx=\int f(\tan x)d(\tan x)=\int f(u)du\\\\
    & \int \frac{f(-\cot x)}{\sin^2x}dx=\int f(-\cot x)d(-\cot x)=\int f(u)du\\\\
    & \int \frac{f(\arctan x)}{1+x^2}=\int f(\arctan x)d(\arctan x)=\int f(u)du\\\\
    & \int \frac{f(\arcsin x)}{\sqrt{1-x^2}}=\int f(\arcsin x)d(\arcsin x)=\int f(u)du




\end{aligned}$$

### 9.3 分部积分法推广公式
$$\int uv^{(4)}dx=uv^{(3)}-u'v''+u''v'-u^{(3)}v+\int u^{(4)}vdx$$

可以写成如下表格：

|u的各阶导数| $\color{red}{u_+}$ | $\color{blue}{u'_-}$ | $\color{red}{u''_+}$ | $\color{blue}{u^{(3)}_-}$ | $\color{purple}{u^{(4)}_+}$ |
|---|---|---|---|---|---|
| **v的各阶原函数** | $v^{(4)}$ | $\color{red}{v^{(3)}}$ | $\color{blue}{v''}$ | $\color{red}{v'}$ | $\color{blue}{v}$ |

:::tip
计算方法：从左上角开始，斜向同色相乘，红色加，蓝色减，直到最后一项，最后一列相乘，上一个加就是减，上一个减就是加
:::

### 9.4 行列式计算e^x^乘三角函数的积分
<br>

$$\int e^{ax}\sin bxdx=\frac{\begin{vmatrix}
    (e^{ax})' & (\sin bx)' \\\\
    e^{ax} & \sin bx
\end{vmatrix}}{a^2+b^2}+C=\frac{ae^{ax}\sin bx-be^{ax}\cos bx}{a^2+b^2}+C\\\\$$

<br>
<br>

$$\int e^{ax}\cos bxdx=\frac{\begin{vmatrix}
    (e^{ax})' & (\cos bx)' \\\\
    e^{ax} & \cos bx
\end{vmatrix}}{a^2+b^2}+C=\frac{ae^{ax}\cos bx+be^{ax}\sin bx}{a^2+b^2}+C$$

### 9.5 华里士公式——点火公式
:::tip
点火成功要加$\frac π2$
:::

$$\begin{aligned}
    &(\frac π2)\int_0^{\frac π2}\sin^nx=\int_0^{\frac π2}\cos^nxdx=\begin{cases}
    \frac{n-1}{n}·\frac{n-3}{n-2}·\cdots·\frac 23·1, &\text{n为大于1的奇数(点火失败)}\\\\
    \frac{n-1}{n}·\frac{n-3}{n-2}·\cdots·\frac 12·\frac π2, &\text{n为正偶数(点火成功)}
\end{cases}\\\\
&(π)\int_0^π\sin^nxdx=\begin{cases}
    2·\frac{n-1}{n}·\frac{n-3}{n-2}·\cdots·\frac 23·1, &\text{n为大于1的奇数(点火失败)}\\\\
    2·\frac{n-1}{n}·\frac{n-3}{n-2}·\cdots·\frac 12·\frac π2, &\text{n为正偶数(点火成功)}
\end{cases}\\\\
&(π)\int_0^π\cos^nxdx=\begin{cases}
    0, &\text{n为正奇数(点火失败)}\\\\
    2·\frac{n-1}{n}·\frac{n-3}{n-2}·\cdots·\frac 12·\frac π2, &\text{n为正偶数(点火成功)}
\end{cases}\\\\

&(2π)\int_0^{2π}\cos^nxdx=\int_0^{2π}\sin^nxdx\begin{cases}
    0, &\text{n为正奇数(点火失败)}\\\\
    4·\frac{n-1}{n}·\frac{n-3}{n-2}·\cdots·\frac 12·\frac π2, &\text{n为正偶数(点火成功)}
\end{cases}
\end{aligned}
$$

### 9.6 特殊积分

$$\int_0^{+\infty}|\sin x|dx=\sum_{n=0}^{\infty}\left|\int_{nπ}^{(n+1)π}\sin xdx\right |$$

### 9.7 γ函数

当e的次数为$-x$时，

$$\Gamma(\alpha)=\int_0^{+\infty}x^{\alpha-1}e^{-x}dx$$

当e的次数为$-x^2$时

$$\Gamma(\alpha)=\int_0^{+\infty}x^{2\alpha-1}e^{-x^2}dt$$




递推式：$\Gamma(\alpha+1)=\alpha\Gamma(\alpha)$

其中$\Gamma(1)=1,\Gamma(\frac 12)=\sqrt{π}$

$\Gamma(n+1)=n!$

## 第十讲 一元积分学的几何应用

### 10.1 计算平面图形的面积

曲线$y=y_1(x)$与$y=y_2(x)$及$x=a,x=b(a<b)$所围成的平面图形的面积：

$$S=\int_a^b|y_1(x)-y_2(x)|dx$$

曲线$r=r_1(θ)$与$r=r_2(θ)$与两射线$θ=\alpha,\theta=\beta(0<\beta-\alpha\leq2π)$所围成的曲边扇形的面积为：

$$S=\frac 12\int_\alpha^\beta|r_1^2(\theta)-r_2^2(\theta)|d\theta$$

### 10.2 计算旋转体的体积

1. 曲线$y=y(x)$与$x=a,x=b(a<b)$及x轴围成的曲边梯形绕x轴旋转一周所得到的旋转体的体积

$$V_x=\int_a^bπy^2(x)dx$$

2. 曲线$y=y(x)$与$x=a,x=b(0\leq a<b)$及x轴围成的曲边梯形绕y轴旋转一周所得到的旋转体的体积

$$V_y=2π\int_a^bx|y(x)|dx$$

3. 平面曲线绕定直线旋转

设平面曲线$L: y=f(x),a\leq x\leq b$，且$f(x)$可导(这是要转的曲线)

设直线$L_0:Ax+By+C=0$，且过$L_0$的任一条垂线与L至多有一个交点，则L绕$L_0$旋转一周所得旋转体的体积为

$$V=\frac{\pi}{(A^2+B^2)^{3/2}}\int_a^b[Ax+Bf(x)+C]^2|Af'(x)-B|dx$$

若$L_0\Rightarrow y=0$(x轴)，则有

$$V_x=\int_a^bπy^2(x)dx$$

### 10.3 计算函数的平均值

设$x∈[a,b]$，函数$y(x)$在$[a,b]$上的平均值为

$$\bar{y}=\frac{1}{b-a}\int_a^by(x)dx$$


### 10.4 平面上的曲边梯形的形心坐标公式

$$\bar{x}=\frac{\int_a^bxf(x)dx}{\int_a^bf(x)dx}$$

$$\bar{y}=\frac{\frac 12\int_a^bf^2(x)dx}{\int_a^bf(x)dx}$$

### 10.5 平面曲线的弧长

1. 直角坐标系

$$s=\int_a^b\sqrt{1+[y'(x)]^2}dx$$

2. 参数方程

$$s=\int_\alpha^\beta\sqrt{[x'(t)]^2+[y'(t)]^2}dt$$

3. 极坐标系

$$s=\int_\alpha^\beta\sqrt{[r(\theta)]^2+[r'(\theta)]^2}d\theta$$

速记：r方加r导方

### 10.6 旋转曲面的侧面积

1. 曲线L由直角坐标系确定，绕x轴旋转一周所得旋转曲面的面积为

$$S=2\pi\int_a^b|y|ds=2π\int_a^b|y|\sqrt{1+[y'(x)]^2}dx$$

2. 曲线L由参数方程确定，绕x轴旋转一周所得旋转曲面的面积为

$$S=2π\int_\alpha^\beta|y(t)|ds=2π\int_\alpha^\beta|y(t)|\sqrt{[x'(t)]^2+[y'(t)]^2}dt$$

3. 曲线L由极坐标系确定，绕x轴旋转一周所得旋转曲面的面积为

$$S=2π\int_\alpha^\beta|r(\theta)\sin\theta|ds=2π\int_\alpha^\beta|r(\theta)\sin\theta|\sqrt{[r(\theta)]^2+[r'(\theta)]^2}d\theta$$

### 10.7 平行截面面积为已知的立体体积

在区间$[a,b]$上，垂直与x轴的平面截立体$\Omega$所得到的截面面积为x的连续函数$A(x)$，则$\Omega$的体积为

$$V=\int_a^bA(x)dx$$

## 第十二讲 一元积分学的物理应用

### 12.1 变力沿直线做功

设方向沿x轴正向的力函数为$y=F(x)(a\leq x\leq b)$(变力)，则物体沿x轴从点a移动到点b时，变力$F(x)$所做的功为

$$W=\int_a^bF(x)dx$$

功的微元$dW=F(x)dx$

注意：有些会说成阻力，打进去的力就是克服阻力做功

### 12.2 抽水做功

将容器内的水全部抽出所做的功为

$$W=\rho g\int_a^bxA(x)dx$$

$\rho$为水的密度，$g$为重力加速度

功的微元$dW=\rho g xA(x)dx$为位于x处厚度为dx，水平截面面积为$A(x)$的一层水被抽出(<u>路程为x</u>)所做的功

### 12.3 静水压力

<u>垂直</u>浸没在水中的平板ABCD的一侧受到的水压力为

$$P=\rho g\int_a^bx[f(x)-h(x)]dx$$



压力微元$dP=\rho gx[f(x)-h(x)]dx$，即图中矩形条受到的压力，x表示水深，$f(x)-h(x)$是矩形条的宽度，dx是矩形条的高度

## 第十三讲 多元函数微分学

### 13.1 链式求导法则

$$\frac{\partial z}{\partial x}=\frac{\partial z}{\partial u}·\frac{\partial u}{\partial x}+\frac{\partial z}{\partial v}·\frac{\partial v}{\partial x}\\\\\space\\\\\frac{\partial z}{\partial y}=\frac{\partial z}{\partial u}·\frac{\partial u}{\partial y}+\frac{\partial z}{\partial v}·\frac{\partial v}{\partial y}$$

### 13.2 全微分形式不变性

设$z=f(u,v)$，$u=u(x,y)$，$v=v(x,y)$，如果$z=f(u,v)$，$u=u(x,y)$，$v=v(x,y)$分别有连续偏导数，则复合函数$z=f(u,v)$在$(x,y)$处的全微分仍可表示为：

$$dz=\frac{\partial z}{\partial u}du+\frac{\partial z}{\partial v}dv$$

即无论u,v时自变量还是中间变量，上式总成立


### 13.3 二元函数取极值的必要充分条件

必要条件：设$z=f(x,y)$在点$(x_0,y_0)$处存在一阶偏导数，且取极值，则$f_x'(x_0,y_0)=0$，$f_y'(x_0,y_0)=0$

充分条件：

$$\text{记}\begin{cases}
    f_{xx}''(x_0,y_0)=A,\\\\
    f_{xy}''(x_0,y_0)=B,\\\\
    f_{yy}''(x_0,y_0)=C,
\end{cases}\text{则}\Delta=AC-B^2\begin{cases}
    >0\Rightarrow\begin{cases}
        A<0\Rightarrow\text{极大值，}\\\\
        A>0\Rightarrow\text{极小值，}
    \end{cases}\\\\
    <0\Rightarrow\text{非极值,}\\\\
    =0\Rightarrow\text{方法失效，另寻他法}
\end{cases}$$

速记：开不开心少年团

### 13.4 条件最值和拉格朗日乘数法

求目标函数$u=f(x,y,z)$在约束条件$\begin{cases}
    \varphi(x,y,z)=0,\\
    \psi(x,y,z)=0
\end{cases}$下的最值，则

1. 构造辅助函数$F(x,y,z,\lambda,\mu)=f(x,y,z)+\lambda\varphi(x,y,z)+\mu\psi(x,y,z)$;

2. 令：

$$\begin{cases}
    F_x'=f_x'+\lambda\varphi_x'+\mu\psi_x'=0\\\\
    F_y'=f_y'+\lambda\varphi_y'+\mu\psi_y'=0\\\\
    F_z'=f_z'+\lambda\varphi_z'+\mu\psi_z'=0\\\\
    F_\lambda'=\varphi(x,y,z)=0\\\\
    F_\mu'=\psi(x,y,z)=0
\end{cases}$$


式子的个数=约束条件数量+目标函数自变量的数量


1. 解上述方程组，得备选点$P_i,i=1,2,\cdots,n$，并求$f(P_i)$，取其最大值为$u_{max}$，最小值为$u_{min}$

2. 根据实际问题，必存在最值，所得即为所求

:::tip

若从约束条件$\begin{cases}
    \varphi(x,y,z)=0,\\
    \psi(x,y,z)=0
\end{cases}$中易解出$z=z(x,y)$，则将其代入$f(x,y,z)$，得$f[x,y,z(x,y)]$，即转化为无条件最值问题
:::











