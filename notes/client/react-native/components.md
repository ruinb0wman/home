# components

react-native 使用内建的组件代替html标签, 这样可以方便的映射到不同的平台, 以实现原生的效果

`<View></View>`
* 容器组件
* 默认使用flex布局, 并且`flex-direction: column;`

`<Text></Text>` 
* 文本组件

`<TouchableOpacity></TouchableOpacity>`
* 按钮容器, 添加点击效果

`<FlatList></FlatList>`
* 说明
  * 列表容器
  * 用于大量的滚动列表
* 常用属性
  * numColumns: 列数
  * data: 数据
  * renderItem: 渲染列表项
  * keyExtractor: 提取列表项的key
  * columnWrapperStyle: 每列样式
  * ListEmptyComponent: 空列表时
  * ListFooterComponent: 列表底部
  * ListHeaderComponent: 列表头部


`<ScrollView></ScrollView>`
* 包裹滚动内容, 不使用ScrollView包裹的内容是不会滚动的

`<SafeAreaView></SafeAreaView>`
* 避免内容显示到状态栏

`<Image/>`

`<ImageBackground/>`

`<ActivityIndicator />`
* 加载指示器

`react-native-reanimated`

`react-native-safe-area-context`
