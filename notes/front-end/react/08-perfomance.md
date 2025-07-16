# 优化

### 避免子组件无关的状态变化导致的子组件重新渲染

使用React.memo包裹子组件, 这样s1变化时就不会重新渲染child.tsx, 当s2变化时还是能更新子组件

```child.tsx
import React from "react"

export default React.memo((props: { s2: number }) => {
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
