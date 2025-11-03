# context

## 为什么需要context

当你需要在组件树中深层传递参数以及需要在组件间复用相同的参数时,传递props就会变得很麻烦。最近的根节点父组件可能离需要数据的组件很远,状态提升到太高的层级会导致“逐层传递props”的情况。


## 使用context

1. 使用createContext创建context
2. 创建provider组件分发context
3. 后代组件使用useContext消费context

下面是一个例子

```jsx
// ThemeContext.jsx
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext({
  theme: 'light', 
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

// 创建 Provider 组件
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // 状态管理

  // 切换主题的函数
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // 提供 value 给所有子组件
  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
```

```jsx
// Header.jsx
import {useTheme} from "./ThemeContext.jsx"

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header 
      style={{ 
        backgroundColor: theme === 'light' ? '#f0f0f0' : '#333', 
        color: theme === 'light' ? '#000' : '#fff',
        padding: '1rem',
        textAlign: 'center'
      }}
    >
      <h1>我的应用 - 当前主题: {theme}</h1>
      <button onClick={toggleTheme}>
        切换到 {theme === 'light' ? '暗色' : '亮色'} 模式
      </button>
    </header>
  );
};

export default Header;
```

需要注意的是, context仅仅是一个管道, 其并不管理状态和行为, 这意味着使用 `createContext()` 传的参数仅仅表示默认值, 你也可以不设置默认值, 该默认值只有获取不到provider提供的value时才会生效.
而`.Provider`组件提供的`value`才是真正的状态及行为
