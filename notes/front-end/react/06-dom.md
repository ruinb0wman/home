# dom

`useRef`

```tsx
import {  useRef } from "react"

export default function(){
  const targetRef = useRef();

  return (<div>
    <div ref={targetRef}>target</div>
  </div>)
}
```
