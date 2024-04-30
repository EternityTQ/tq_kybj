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

### 万能公式

若$t=\tan\frac x2$，则

$$\sin x=\frac{2t}{1+t^2},\cos x=\frac{1-t^2}{1+t^2}$$


## 第一讲 函数极限与连续
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

$$e^x = 1+x+\frac{x^2}{2!} + \frac{x^3}{3!}+o(x^3)$$

$$(1+x)^a=1+ax+\frac{a(a-1)}{2!}x^2+o(x^2)$$

## 第二讲 数列极限

### 常见不等式放缩
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
### 导数的常用定义形式


$$
\begin{align*}
f'(x_0)&=\lim_{\Delta x\to 0}\frac{\Delta y}{\Delta x}\\\\
& = \lim_{\Delta x\to 0}\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}\\\\
& = \lim_{x\to x_0}\frac{f(x)-f(x_0)}{x-x_0}
\end{align*}
$$

### 可微的常用公式
$$dx = \Delta x$$

$$dy = f'(x)dx = A\Delta x$$

$$\Delta f(x)=f(x+\Delta x)-f(x)$$

$$\Delta y=dy+o(\Delta x)$$
## 第四讲 一元函数微分学的计算
### 基本求导公式

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
& (\sin x\cos x)'=\cos 2x
\end{aligned}$$

### 常用高阶导数

$$\begin{aligned}
    & (e^{ax+b})^{(n)}=a^ne^{ax+b}\\\\
    & [sin(ax+b)]^{(n)}=a^nsin(ax+b+\frac{nπ}{2})\\\\
    & [cos(ax+b)]^{(n)}=a^ncos(ax+b+\frac{nπ}{2})\\\\
    & [\ln(ax+b)]^{(n)}=(-1)^{n-1}a^n\frac{(n-1)!}{(ax+b)^n}\\\\
    & (\frac{1}{ax+b})^n=(-1)^{n}a^n\frac{n!}{(ax+b)^{n+1}}
\end{aligned}$$

###  泰勒展开式 (用于计算高阶导数)

$$\begin{aligned}
    & e^x=\sum_{n=0}^\infty\color{red}\frac{x^n}{n!}\color{black}=1+x+\frac{x^2}{2!}+\cdots+\color{red}{}\frac{x^n}{n!}\color{black}+\cdots \\\\
    & \frac{1}{1+x}=\sum_{n=0}^\infty\color{red}(-1)^nx^n\color{black}=1-x+x^2-x^3+\cdots+\color{red}(-1)^nx^n\color{black}+\cdots \\\\
    & \frac{1}{1-x}=\sum_{n=0}^\infty\color{red} x^n\color{black}=1+x+x^2+x^3+\cdots+\color{red}x^n\color{black}+\cdots  \\\\
    & \ln(1+x)=\sum_{n=0}^\infty\color{red}(-1)^{n-1}\frac{x^n}{n}\color{black}=x-\frac{x^2}{2}+\frac{x^3}{3}-\frac{x^4}{4}+\cdots+\color{red}(-1)^{n-1}\frac{x^n}{n}\color{black}+\cdots \\\\
    & \sin x=\sum_{n=0}^\infty\color{red}(-1)^n\frac{x^{2n+1}}{(2n+1)!}\color{black}=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\frac{x^7}{7!}+\cdots+\color{red}(-1)^n\frac{x^{2n+1}}{(2n+1)!}\color{black}+\cdots \\\\
    & \cos x=\sum_{n=0}^\infty\color{red}(-1)^n\frac{x^{2n}}{(2n)!}\color{black}=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\frac{x^6}{6!}+\cdots+\color{red}(-1)^n\frac{x^{2n}}{(2n)!}\color{black}+\cdots \\\\
    & (1+x)^a=1+ax+\frac{a(a-1)}{2!}x^2+\cdots+\color{red}\frac{a(a-1)\cdots(a-n+1)}{n!}x^n\color{black}+\cdots
\end{aligned}$$
## 第五讲 一元微分学的几何应用

### 极值点与拐点

| 特性 | 极值点 | 拐点 |
| --- | ------ | ---- |
| 导数 | 一阶导为0 | 二阶导为0 |
| 第一充分条件 | 判断一阶导的变号情况<br>左高右低是极大<br>左低右高是极小 | 判断二阶导是否变号 |
| 第二充分条件 | 判断一阶导是否为0<br>且二阶导是否**不**为0 | 判断二阶导是否为0<br>且三阶导是否**不**为0 |
| 第三充分条件 | 判断偶数阶导是否**不**为0 | 判断奇数阶导是否**不**为0|

### 曲率


设函数在该点二阶导存在，则该点的曲率公式为：

$$k=\frac{|y''|}{[1+(y')^2]^{\frac 32}}$$

曲率半径为：

$$R=\frac 1k = \frac{[1+(y')^2]^{\frac 32}}{|y''|}$$

## 第六讲 一元微分学的公式

### 1. 费马定理

若$f(x)$在$x_0$处**可导**且**取极值**，则$f'(x_0)=0$


### 2. 罗尔定理
  
设$f(x)$满足闭区间连续，开区间可导，且$f(a)=f(b)$，则存在$\xi∈(a,b)$，使得$f'(\xi)=0$

### 3. 拉格朗日中值定理

若函数$f(x)$满足在闭区间连续，开区间可导，则存在$\xi∈(a,b)$，使得 $f(b)-f(a)=f'(\xi)(b-a)$

或者写成：

$$f'(\xi)=\frac{f(b)-f(a)}{b-a}$$

### 4. 柯西中值定理

设$f(x),g(x)$均满足闭区间连续，开区间可导，且$g'(x)\not=0$，则存在$\xi∈(a,b)$，使得

$$\frac{f(b)-f(a)}{g(b)-g(a)}=\frac{f'(\xi)}{g'(\xi)}$$

### 5. 泰勒公式

带*拉格朗日余项*的n阶泰勒公式( ==区间上== )

设$f(x)$在$x_0$的某个邻域内n+1阶导数存在，则对该邻域内的任意点x，均有

$$f(x)=f(x_0)+f'(x_0)(x-x_0)\cdots+\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n-\color{red}\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_0)^{n+1}$$

其中，$\xi$介于$x$与$x_0$之间

:::tip
此公式适用于区间，常在证明题中使用，如证不等式，中值等式等
:::

带*佩亚诺余项*的n阶泰勒公式( ==局部端点上== )

设$f(x)$在$x_0$上n阶可导，则对存在$x_0$的一个邻域，对于该邻域内的任意点x，有

$$f(x)=f(x_0)+f'(x_0)(x-x_0)\cdots+\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n-\color{red}o((x-x_0)^n)$$

:::tip
此公式仅使用于点$x=x_0$及其邻域，常用于研究点$x=x_0$处的某些结论，

如求极限，判定无穷小阶数，判定极值等
:::

## 第九讲 一元函数积分学的计算

### 基本积分公式
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
    & \int\frac{dx}{\cos x}=\int\sec xdx=\ln|\sec x+\tan x|+C\\
    & \int\frac{dx}{\sin x}=\int \csc xdx=\ln|\csc x-\cot x|+C\\\\
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
\end{aligned}$$

### 常见凑微分公式

$$\begin{aligned}
    & \int xf(x^2)dx=\frac 12\int f(x^2)d(x^2)=\frac 12\int f(u)du \\\\
    & \int\sqrt{x}f(x^{\frac 32})dx=\frac 23f(x^{\frac 32})d(x^{\frac 32})=\frac 32\int f(u)du\\\\
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

### 分部积分法推广公式
$$\int uv^{(4)}dx=uv^{(3)}-u'v''+u''v'-u^{(3)}v+\int u^{(4)}vdx$$

可以写成如下表格：

|u的各阶导数| $\color{red}u_+$ | $\color{blue}u'_-$ | $\color{red}u''_+$ | $\color{blue}u^{(3)}_-$ | $\color{purple}u^{(4)}_+$ |
|---|---|---|---|---|---|
| **v的各阶原函数** | $v^{(4)}$ | $\color{red}v^{(3)}$ | $\color{blue}v''$ | $\color{red}v'$ | $\color{blue}v$ |

:::tip
计算方法：从左上角开始，斜向同色相乘，红色加，蓝色减，直到最后一项，最后一列相乘，上一个加就是减，上一个减就是加
:::

###  行列式计算e^x^乘三角函数的积分
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

### 点火公式
:::tip
点火成功要加$\frac π2$
:::

$$\begin{aligned}
    &(\frac π2)\int_0^{\frac π2}\sin^nx=\int_0^{\frac π2}\cos^nxdx=\begin{cases}
    \frac{n-1}{n}·\frac{n-3}{n-2}·\cdots·\frac 23·1, &\text{n为大于1的奇数(点火失败)}\\\\
    \frac{n-1}{n}·\frac{n-3}{n-2}·\cdots·\frac 12·\frac π2， &\text{n为正偶数(点火成功)}
\end{cases}\\\\
&(π)\int_0^π\sin^nxdx=\begin{cases}
    2·\frac{n-1}{n}·\frac{n-3}{n-2}·\cdots·\frac 23·1, &\text{n为大于1的奇数(点火失败)}\\\\
    2·\frac{n-1}{n}·\frac{n-3}{n-2}·\cdots·\frac 12·\frac π2， &\text{n为正偶数(点火成功)}
\end{cases}\\\\
&(π)\int_0^π\cos^nxdx=\begin{cases}
    0, &\text{n为正奇数(点火失败)}\\\\
    2·\frac{n-1}{n}·\frac{n-3}{n-2}·\cdots·\frac 12·\frac π2， &\text{n为正偶数(点火成功)}
\end{cases}\\\\

&(2π)\int_0^{2π}\cos^nxdx=\int_0^{2π}\sin^nxdx\begin{cases}
    0, &\text{n为正奇数(点火失败)}\\\\
    4·\frac{n-1}{n}·\frac{n-3}{n-2}·\cdots·\frac 12·\frac π2， &\text{n为正偶数(点火成功)}
\end{cases}
\end{aligned}
$$


