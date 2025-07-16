# 生命周期

## 传统class形式

1. render: 渲染之前, 执行渲染函数
2. componentDidMount: 已经完成渲染
3. shouldComponentUpdate: 是否应该重新渲染, 根据返回来决定
4. componentDidUpdate: 已完成更新
5. componentWillUnmount: 即将卸载


## hooks形式

hooks形式使用 `useEffect` 代替生命周期函数

`useEffect(effect: React.EffectCallback, deps?: React.DependencyList)`
- effect 接受一个函数, 并返回一个回调函数(在unmount时会执行该函数)
- deps
  - 如果不传参数则每次状态更新时都执行
  - 也可以接受一个数组, 该数组放置状态变量, 当其中任意一个状态改变时会重新调用effect函数
  - 如果是空数组则只会执行一次

下面的例子中, useEffect包裹的代码只会在mount后执行一次

```tsx
import { useState, useEffect } from "react"
export default function () {
  const [stateA, setA] = useState({
    a: 1,
    arr: [1, 2, 3]
  });

  // 如果直接setA则会导致循环渲染
  // setA({
  //    a: 2,
  //    arr: [...stateA.arr, 4]
  // })

  // 需要使用useEffect包裹, 确保其只执行一次
  useEffect(() => {
    setA({
      a: 2,
      arr: [...stateA.arr, 4]
    })
  }, []);

  return (
    <div>
      <div>{stateA.a}</div>
      {stateA.arr.map((item, index) => {
        return (<div key={index}>{item}</div>)
      })}
    </div>
  )
}
```

## 副作用

在 React 中，副作用指的是组件中除了渲染 UI 以外的操作，比如：
- 数据获取（如 fetch）
- 订阅事件（如 addEventListener）
- 手动修改 DOM
- 设置定时器（如 setTimeout, setInterval）
- React 提供了 `useEffect` Hook 来管理这些副作用，以确保它们能正确地执行和清理。


```tsx
import { useState, useEffect } from "react"
export default function () {
  const [stateA, setA] = useState({
    a: 1,
    arr: [1, 2, 3]
  });

  // useEffect可以避免副作用
  // 例如下面的代码修改了状态后react会重新执行整个函数体(这是为了确保状态的一致性)
  useEffect(() => {
    const timer = setTimeout(() => {
      setA((prevState) => ({
        a: 2,
        arr: [...prevState.arr, 4],
      }));
    }, 1000);

    // 清除副作用
    // 开发环境中, react的严格模式会执行两次函数体
    // 整体流程是mount-unmount-mount
    // 第一次mount时返回清除函数,unmount时执行清除操作, 这样实际上第一次修改状态的操作并没有执行
    // 知道第二次mount时才实际的执行了修改状态的操作
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div>{stateA.a}</div>
      {stateA.arr.map((item) => {
        return (<div>{item}</div>)
      })}
    </div>
  )
}
```

