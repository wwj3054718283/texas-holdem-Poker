# 一、游戏介绍

## 1、规则

模拟**德州扑克**，玩家人数2-10人
裁判取出5张公告牌
玩家每人2张手牌
通过计算牌力的出胜利者

## 2、牌力大小排序（从大到小）

​	在相同牌力时比较最大的牌

### （1）皇家同花顺

​			数值最大的同花顺

​			例如：♦10 ♦J ♦Q ♦K ♦A

### （2）同花顺

​			同时满足顺子和同花的牌

​			例如：♠4 ♠5 ♠6 ♠7 ♠8

### （3）四条

​			四张一样的牌 例如：9 9 9 9 2

### （4）葫芦

​			三张相同的牌+一对 例如：7 7 7 9 9

### （5）同花

​			五张牌为同一花色 例如：♠K ♠Q ♠10 ♠9 ♠8

### （6）顺子

​			五张连续的牌即为顺子 例如：8 9 10 J Q

​			A 可以作为顺子当中的任意牌

​			例如：A(1) 2 3 4 5

### （7）三条

​			三张一样的牌 例如：A A A 8 7

### （8）对子（两对）

​			例如：K K 5 5 A

### （9）对子（一对）

​			例如： 8 8 Q 10 7

### （10）高牌

​			单张 没法成对 例如：K Q 10 9 8

# 二、数学模型选择

## 1、线性模型

* 一般线性模型

`Y=XB+U`
         **Y**是具有一系列多变量测量的矩阵（每列是一个[因变量](https://baike.baidu.com/item/因变量)的测量集合），**X**是独立变量的观察矩阵，其可以是[设计矩阵](https://baike.baidu.com/item/设计矩阵)（每列是关于一个自变量），**B**是包含通常要被估计的参数的矩阵，并且**U**是包含[误差](https://baike.baidu.com/item/误差)（噪声）的矩阵

​		用一般线性模型进行的假设检验可以用两种方法进行：多变量或多个独立的单变量检验。在多元测试中，**Y**的列被一起测试，而在单变量测试中，**Y**的列被独立地测试，即具有相同设计矩阵的多个单变量测试

* 多重线性回归

  ![image-20220321094215352](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20220321094215352.png)

## 2、确定性模型

​		一个由完全肯定的函数关系（因果关系）所决定的模型。这种模型包括由微分方程所描述的数学模型，可用解析解法、数值解法和电模拟方法求解。当水均衡要素不作为随机变量处理时，水均衡方程式所描述的模型也属于确定性的。确定性模型是指不包含任何随机成份的模型。对于确定性模型，只要设定了输入和各个输入之间的关系，其输出也是确定的，而与实验次数无关。确定性模型事实上是一种简化了的随机性模型。

# 三、项目运行

## 1、安装依赖

```js
npm i
```

## 2、项目运行

```js
node ./src/index.js
```

## 3、项目运行版本

node v16.14.2

# 四、项目结构

src                
├─ utils           工具包
│  └─ tools.js     工具类
├─ Card.js         一张牌类
├─ CardList.js     一副牌类
├─ GameControl.js  游戏控制器
├─ GameView.js     游戏界面
├─ index.js        入口
├─ Player.js       玩家类
└─ Rule.js         规则

# 五、依赖包解析

## readline

* readline 模块提供了用于从[可读](http://nodejs.cn/api/stream.html#readable-streams)流（例如 [`process.stdin`](http://nodejs.cn/api/process.html#processstdin)）每次一行地读取数据的接口

* readline.createInterface(option) 该方法用于创建新的readline.Interface实例，其主要作用是监听'line'事件

  ![image-20220319002520462](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20220319002520462.png)

  ![image-20220319002531347](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20220319002531347.png)
# 六、量化牌力

  

  