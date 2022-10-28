---
title: 接口隔离原则
index: false
icon: alias
category:
- 设计模式
tag:
- 设计模式
---

## 基本介绍

接口隔离原则（Interface Segregation Principle），简称ISP。

客户端不应该依赖它不需要的接口，即一个类对另一个类的依赖应该建立在`最小的接口`上。

例如：接口`InterfaceA`定义了`方法1、2、3、4、5`，并拥有两个实现类`ImplA`和`ImplB`。另外有两个类`ClassA`与
`ClassB`通过接口`IntefaceA`分别调用`ImplA`中的`方法1、2、3`与`ImplB`中的`方法3、4、5`。此时`ImplA`
并不需要`方法4、5`且`ImplB`不需要`方法1、2`。

因此该接口可以再次进行拆分。可以将`InterfaceA`拆分为含有方法1、2的Interface1、含有方法3的Interface2
与含有方法4、5的Interface3。

此时实现类ImplA可以仅实现Interface1与Interface2，ImplB仅实现Interface2与Interface3。从而Class
A可以使用ImplA中的3个方法，ClassB使用ImplB中的3个方法。去除调用彼此不需要的方法的可能性。
