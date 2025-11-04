# router

## 普通路由

`app/index.tsx` 对应`/`

`app/movie.tsx` 对应 `/movie`

## 动态路由

```
|app/
|- movie/[id].tsx
```

```tsx
// movie/[id].tsx

import { useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'

const movieDetail = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>movieDetail {id}</Text>
    </View>
  )
}

export default movieDetail
```

## 路由组件

### Link

`<Link>` 组件通常和 `<TouchableOpacity>` 组合使用, 并且在`<Link>`组件中有一个asChild的props, asChild的作用是让其第一个子元素拥有导航的行为

```tsx
<Link href='/about' asChild>
  <TouchableOpacity>
    <Text>
      go to about
    </Text>
  </TouchableOpacity>
</Link>
```

### Stack 

# question

`<Stack>` 和 `<Tabs>` 分别干什么用, 怎么用?

为什么要用`<FlatList/>`, 为什么不直接渲染列表
