# style

## 内联样式

```tsx
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello world</Text>
    </View>
  );
}
```

## StyleSheet

```tsx
import { Text, View, StyleSheet, } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})
```


## tailwind
使用tailwindcss可以使用[nativewind](https://www.nativewind.dev/docs/getting-started/installation)

如果配置完nativewind后Metro报错, 可以尝试[清除metro缓存](https://metrobundler.dev/docs/troubleshooting/)

