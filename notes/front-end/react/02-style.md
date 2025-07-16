# style

style 属性方式
- 优点: 方便
- 缺点: 污染代码

```tsx
<div style={{backgroundColor: 'yellow'}}></div>

```


class 方式
- 优点: 方便
- 缺点: 污染全局样式

```css
// style.css
.container {
  background-color: yellow;
}
```

```tsx
import from "./style.css"

export default function () {
  return (
  <div className="container"></div>
  )
}
```

css module
- 优点: 不会污染全局样式
- 缺点: 样式文件名要加module, 例如 `style.module.css`

```css
// style.module.css

.container {
  background-color: yellow;
}
```

```tsx
import style from "./style.module.css"

export default function () {
  return (
  <div className={style['container']}></div>
  )
}
```
