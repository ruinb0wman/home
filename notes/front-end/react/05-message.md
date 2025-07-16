# message

```tsx
// child.tsx
import type React from "react";

interface Props {
  count: number;
  add: () => void;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export default function ({ count, add, setCount }: Props) {
  function addTwo() {
    setCount(count + 2);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={add}>add 1</button>
      <button onClick={addTwo}>add 2</button>
    </div>
  )
}
```

```tsx
// parent.tsx
import { useState } from "react"
import Child from "./child.tsx"

export default function () {
  const [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
  }

  return (
    <div>
      <div>
        parent: {count}
      </div>
      <div >
        child: <Child add={add} count={count} setCount={setCount} />
      </div>
    </div>
  )
}
```

## children

children类似vue的插槽

```tsx
// component.tsx

export default function(props){
  return ({props.children})
}
```

```tsx
// main.tsx

import Com from "./component.tsx"

export default function(){
  return (
    <div>
      <Com>
        <input placeholder="hello">
      </Com>
    </div>
  )
}
```
