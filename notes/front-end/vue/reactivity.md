# reactivity

vue2使用Object.defineProperty实现响应式, vue3使用Proxy实现,Object.defineProperty和Proxy区别

1. Object.defineProperty无法监控到数组方法,导致通过数组添加元素,不能实时响应;
2. Object.defineProperty只能劫持对象的属性,从而需要对每个对象,每个属性进行遍历,
如果,属性值是对象,还需要深度遍历。Proxy可以劫持整个对象,并返回一个新的对象。
3. Proxy不仅可以代理对象,还可以代理数组。还可以代理动态增加的属性。

响应式原理
publish-subscribe-pattern
observer-dep-watcher
![vue-response-model](https://s2.loli.net/2025/07/29/WLTPs6pYvXNwOzk.png)

### vue2代码示例

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
  </head>
  <body>
    <!-- <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14"></script> -->
    <script src="./index.js" ></script>
    <div id="app">
      <h1>
        标题: {{myTitle}} -- {{myTitle}}
      </h1>
      <p>
        内容: {{myContent}}
      </p>
    </div>
    <script>
    const vm = new Vue({
      el: "#app",
      data: {
        myTitle: "hello",
        myContent: "world"
      }
    })
    </script>
  </body>
</html>
```

```js
function Vue(options) {
  console.log('vue', options);
  this.$options = options;
  this.$data = options.data;
  this.$el = typeof options.el === 'string' ? document.querySelector(options.el) : options.el;

  // 1. 将数据注入到vue实例中
  proxy(this, this.$data);
  // 2. 创建Observer监听data变化
  new Observer(this.$data);
  // 3. 视图解析
  this.$cimpiler = new Compile(this);
  this.$cimpiler.compile(this.$el);
}

function Observer(data) {
  this.data = data;
  this.dep = new Dep();

  Object.keys(data).forEach(key => {
    defineProperty(data, key, data[key], this.dep);
  })
}

function Dep() {
  this.subs = [];
  this.addSub = (sub) => {
    this.subs.push(sub);
  }
  this.notify = () => {
    this.subs.forEach(sub => sub.update())
  }
}

function Compile(vm) {
  this.vm = vm;
  this.el = vm.$el;

  this.compile = (el) => {
    const childNodes = el.childNodes;
    Array.from(childNodes).forEach(childNode => {
      console.log('childNodes', childNode);
      if (childNode.nodeType === 3) this.compileText(childNode);
      if (childNode.childNodes?.length) this.compile(childNode);
    })
  }

  this.compileText = (textNode) => {
    console.log('compileText')
    const reg = /\{\{(.+?)\}\}/g
    const text = textNode.textContent.replace(/\s/g, '');

    const tokens = [];
    let result, index, lastIndex = 0;
    while (result = reg.exec(text)) {
      // 找到key对应文本的开始位置
      index = result.index;

      // 如果index不是0说明找到了就将固定内容切出来存进tokens
      if (index > lastIndex) {
        tokens.push(text.slice(lastIndex, index));
      }

      // 替换差值表达式为真实值
      const key = result[1].trim();
      tokens.push(this.vm[key])

      lastIndex = index + result[0].length;

      // 更新文本
      const pos = tokens.length - 1;
      new Watcher(this.vm, key, newVal => {
        console.log('pos', pos, newVal)
        tokens[pos] = newVal;
        textNode.textContent = tokens.join('');
      })
    }

    // 如果差值后面有文本, 则直接将文本push到tokens中
    if (lastIndex < text.length) {
      tokens.push(text.slice(lastIndex));
    }

    if (tokens.length > 0) {
      textNode.textContent = tokens.join('');
    }
  }
}

function Watcher(vm, key, callback) {
  this.vm = vm;
  this.key = key;
  this.callback = callback;

  Dep.target = this;
  this.oldValue = vm[key];
  Dep.target = null;

  this.update = () => {
    const newVal = this.vm[this.key];
    console.log('update', newVal, this.oldValue)
    if (newVal === this.oldValue) return;
    this.callback(newVal);
    this.oldValue = newVal;
  }
}


// 核心方法
function defineProperty(data, key, value, dep) {
  if (typeof value === 'object' && value !== null) {
    return new Observer(value);
  }

  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get() {
      Dep.target && dep.addSub(Dep.target);
      return value;
    },
    set(newVal) {
      if (value === newVal) return;
      value = newVal;
      if (typeof value === 'object' && value !== null) {
        return new Observer(value);
      }
      dep.notify();
    }
  })
}

function proxy(target, data) {
  Object.keys(data).forEach(key => {
    Object.defineProperty(target, key, {
      enumerable: true,
      configurable: true,
      get() {
        return data[key];
      },
      set(newVal) {
        data[key] = newVal;
      }
    })
  })
}
```
