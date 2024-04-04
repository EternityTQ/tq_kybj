---
title: 公式合集
icon: screwdriver-wrench
---
## 1.0 基础公式
### 1.0.1 常用不等式

$$\sqrt{\frac{a^2+b^2}{2}}\geq \frac{a+b}{2} \geq \sqrt{ab} \geq \frac{2}{\frac 1a+\frac 1b}$$

## 1.3 常见等价无穷小量
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

## 1.4 泰勒展开式
$$\sin x=x-\frac{x^3}{3!}+o(x^3)$$

$$\cos x=1-\frac{x^2}{2!}+\frac{x^4}{4!}+o(x^4)$$

$$\arcsin x = x+\frac{x^3}{3!}+o(x^3)$$

$$\tan x = x+\frac{x^3}{3}+o(x^3)$$

$$\arctan x = x-\frac{x^3}{3} + o(x^3)$$

$$\ln (1+x) = x-\frac{x^2}{2} + \frac{x^3}{3} + o(x^3)$$

$$e^x = 1+x+\frac{x^2}{2!} + \frac{x^3}{3!}+o(x^3)$$

$$(1+x)^a=1+ax+\frac{a(a-1)}{2!}x^2+o(x^2)$$

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













