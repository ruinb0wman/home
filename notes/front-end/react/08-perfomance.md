# 优化



## 重新渲染逻辑

在协调阶段,组件复用的前提是必须同时满足三个条件:

1. 同一层级下(同一个父节点)
2. 同一类型
3. 同一个key值

所以我们要尽量保证这三者的稳定性。

![image.png](https://s2.loli.net/2025/09/06/t4Br87k3cYyPnCF.png)


## 避免组件不必要的rerender

组件重新渲染时会进入**协调**阶段(其中vdom的diff是协调的核心步骤), 如果组件没有进入**协调**阶段, 我们就称之为进入了**bailout**阶段, 进入该阶段的组件不会进行更新, 通过`memo`可以让组件进入**bailout**阶段

memo的第二个参数是一个回调函数, 如果不设置则默认会比较props参数, 当props变化时重新渲染

使用memo包裹组件, 下面是一个例子:

> 当s1变化时就不会重新渲染child.tsx, 当s2变化时还是能更新子组件

```child.tsx
import {memo} from "react"

export default memo((props: { s2: number }) => {
  console.log('child render')
  return (
    <div>
      child, s2: {props.s2}
    </div>
  )
})
```

```parent.tsx
import Child from "./components/child.tsx"
import { useState } from 'react'

export default function () {
  console.log('parent render');

  const [s1, sets1] = useState(0);
  const [s2, sets2] = useState(0);

  return (
    <>
      <Child s2={s2} />
      <div>s1: {s1}</div>
      <button onClick={() => sets1(s1 + 1)}>change s1</button>
      <div>s2: {s2}</div>
      <button onClick={() => sets2(s2 + 1)}>change s2</button>
    </>
  )
}
```

## 缓存计算

`useMemo`

下面是一个例子

```tsx
import { useMemo, useState } from 'react';

function Fibonacci({ n }) {
  const [count, setCount] = useState(0);

  // 使用 useMemo 缓存昂贵的计算
  const fib = useMemo(() => {
    console.log('计算斐波那契数列...');
    const calculate = (num) => (num <= 1 ? num : calculate(num - 1) + calculate(num - 2));
    return calculate(n);
  }, [n]); // 仅当 n 改变时重新计算

  return (
    <div>
      <p>斐波那契({n}) = {fib}</p>
      <p>点击次数: {count}</p>
      <button onClick={() => setCount(count + 1)}>增加</button>
    </div>
  );
}
```

## 缓存函数

`useCallback(函数, [监听]?)`
作用是缓存函数, 实际是useMemo的一个语法糖
通常用在父组件给子组件传递函数的情况, 避免子组件因为父组件传递的props变化时重新渲染

## 对比memo和useMemo

|特性|useMemo|memo|
|-|-|-|
|类型|Hook函数|高阶组件|
|作用对象|变量或计算结果|函数组件本身|
|目的|避免昂贵计算重复执行|避免组件重新渲染|
|依赖变化时|重新计算值|重新渲染组件|
|使用位置|函数组建内部|包裹整个函数组件|


