# drizzle

## schema

### 基础schema

uuid
varchar
integer

### postgres schema

pgEnum

## CURD

### query

使用query需要导入schema, 简单示例:

```ts
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './db/schema'; // 引入

const db = drizzle(process.env.DATABASE_URL!, { schema }); // 使用
const users = await db.query.usersTable.findMany();

console.log('all users', users);
```

#### findMany

```ts
query.findMany(QueryParams)

interface QueryParams {
  columns?: {[key:string]: boolean} /*过滤要显示或者要隐藏的字段*/
  limit?: number /*查询条数*/
  offset?: number /*查询偏移量*/
  with?: {[key:string]:boolean} /*查询关联数据, 对应relations中定义的字段*/
  orderBy?: SQL | (table, funcs) => SQL /*排序*/
  /*
  SQL可以通过drizzle提供的工具函数生成,例如 import{asc, desc} from 'drizzle-orm'
  函数形式也可以通过funcs函数的属性来生成SQL, 例如funcs.asc(table.age)
  */
  where?: SQL | (table, funcs) => SQL /*查询条件, 使用方式和orderBy的函数形式相似*/
}
```


### select


##  electron + sqlite + drizzle
