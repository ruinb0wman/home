# router

`react-router-dom` 本地用
`react-router` 服务端渲染用

## 基本使用示例

```tsx
// App.tsx

import { HashRouter, Routes, Route } from "react-router-dom";
import routes from "./routes"
import './App.css'
import Menu from './components/Menu'

function App() {

  return (
    <>
      <HashRouter>
        <Menu />
        <Routes>
          {
            routes.map(item => {
              return (<Route path={item.link} key={item.link} element={<item.component />} />)
            })
          }
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
```

```tsx
//Menu.tsx

import routes from "../routes"
import { NavLink } from "react-router-dom"

export default function () {
  return (
    <div className="menu">
      {routes.map(item => {
        return (<NavLink style={(state) => {
          if (state.isActive) {
            return {
              color: 'red'
            }
          }
        }} to={item.link} key={item.link}>{item.name}</NavLink>)
      })}
    </div>
  )
}
```

```tsx
// routes.ts

import About from "./pages/About.tsx";
import Home from "./pages/Home.tsx"

export default [
  { link: '/', name: '首页', component: Home },
  { link: '/about', name: '关于', component: About }
];
```

## hooks

### useParams

获取url中params参数, 需要配合`<Route />`组件, 例如:

```tsx
export default function(){

  return (
    <>
      <Link to="/productDetail/1"></Link>
      <HashRouter>
        <Routes>
          <Route path="/productDetail/:id" element=<ProductDetail>/>
        </Routes>
      </HashRouter>
    </>
  )
}
```

```tsx
export default function(){
  const params = useParams();

  return (
    <div>
      {params.id}
    <div/>
  )
}
```
### useLocation
### useSearchLocation
### useNavigate
