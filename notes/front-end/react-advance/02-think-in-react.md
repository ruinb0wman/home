# 用react的方式思考

## 状态 state

当你有一个值,
* 这个值变化之后,页面需要随之更新,那么这个变量就可以定义成state,比如useState、useReducer、第三方状态管理库。官网链接:state:组件的记忆 
* 如果你只是需要记忆这个值,但是这个值的改变之后,页面不需要随之更新,那么可以使用useRef定义
* 如果你不需要记忆,那么就是个普通变量。如果你需要缓存这个值,那么可以使用useMemo或者useCallback。

> 注意:使用useState的时候,如果state不发生变化,组件不会更新。但是useReducer反之。


## 单向数据流

单向数据流,即对不可变数据状态使用单向变换。

React的基础模型就是单向数据流,我们在修改state的时候,不会像Vue那样直接修改,而是通过setState函数进行修改。
React的传统状态管理库Redux亦是遵循如此模式,Redux使用reducer作为数据修改规则,而reducer是纯函数,不能直接修改state,只能返回新的state。

如下一个React input的例子:

```jsx
import { useState } from "react";

export default function Input() {
const [input, setInput] = useState("");

return (
  <>
    <input value={input} onChange={(e) => setInput(e.target.value)} />
    <div>{input}</div>
  </>
);
```

如下是一个Vue input的例子:

```vue
<script setup>

import { ref } from 'vue'
// 文本插值
const msg = ref('Hello')

</script>

<template>
  <input v-model="msg" />
  <div>{{msg}}</div>
</template>
```

但是,这个数据不可变性亦是被很多初学者吐槽,觉得学习成本比较高因此现在一些周边库也支持在React中实现直接修改数据,比如Immer。
