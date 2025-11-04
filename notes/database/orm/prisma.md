# whatis

Prisma is a powerful Object-Relational Mapping (ORM) tool for JavaScript and TypeScript

A ORM(Object-Relational-Modal) is a tool that helps you work with a database using regular code instead of writing SQL manually.

## cli

migrate

migrate 用于迁移数据库中的字段, 每次修改schema后都需要进行迁移, 否则数据库中的字段和客户端对不上

命令: `npx prisma migrate dev --name init`

generate 

client 是js访问prisma的客户端, 每次修改schema后都需要生成新的客户端, 这样才有类型检查和提示

生成客户端命令: `npx prisma generate`

## schema

schema 是数据库的模型, 它定义了数据库中的字段和关系

## 修饰符

### id

`@id` 是主键, 关系型数据库是 Int 类型, mongodb 是 String

```prisma
// 关系型
model User {
  id Int @id
}
// mongodb
model User {
  id String @id
}
```

### default

`@default` 用于设置默认值
`autoincrement()` 用于自增id, 这种id是数字类型的
`cuid()` 用于生成CUID, 这种id是字符串类型的

```prisma
model User{
  id Int @id @default(autoincrement());
}
```

```prisma
model User{
  id String @id @default(cuid());
}
```

## map

`@map` 字段映射

下面的例子中由于mongodb使用`_id`作为默认的id切不可替换, 所以我们可以将`_id`和schema中`id`进行映射
`auto()` mongodb的_id不是自增而是计算出来的, 所以使用`auto()`方法

```prisma
model User{
id String @id @default(auto()) @map("_id") @db.ObjectId
}
```

### unique

`@unique` 用于唯一约束

例如要让用户使用邮箱登录, 那么在表中就需要加上`@unique`来保证邮箱唯一

```prisma
model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  create_at DateTime
  age       Int      
}
```

`@@unique` 组合唯一

下面的是一个工作申请表的例子, 一个人申请的某一个工作的表只能创建一个

```prisma
model Application {
  id String @id @default(cuid())
  jobId String
  userId String
  
  user User @relation(fields: [userId], references: [id])
  job Job @relation(fields: [jobId], references: [id])

  @@unique([jobId, userId])
}
```

### relation

`@relation(fields: [author_id], references: [id])` 
使用某个字段和目标的某个字段进行关联, 注意目标表也需要进行反向声明

```prisma
model User {
  id        Int      @id @default(autoincrement())
  name      String   @default("")
  email     String   @unique
  create_at DateTime @default(now())
  age       Int      @default(0)
  books     Book[]
}

model Book {
  id        Int      @id @default(autoincrement())
  title     String
  create_at DateTime @default(now())
  author    User     @relation(fields: [author_id], references: [id])
  author_id Int
}
```

### db.

`@db.具体类型` 显式类型声明

要将类型显示的映射为数据库的特定类型

下面是**mongodb**的例子, 将id映射为`objectId`类型, 因为mongodb的id是`objectId`类型的

```prisma
model User{
  id String @id @default(auto()) @map("_id") @db.ObjectId
}
```

下面是**postgresql**的例子, 将content映射为`Text`类型, 这样可以保存长字符串

```prisma
model Book{
  title String
  content String @db.Text
}
```

## type

| 类型      | 描述                             |
|-----------|----------------------------------|
| `String`  | 表示文本字符串                   |
| `Int`     | 表示整数                         |
| `Float`   | 表示浮点数（小数）               |
| `Boolean` | 表示布尔值（true 或 false）       |
| `DateTime`| 表示日期和时间                   |
| `Json`    | 表示 JSON 对象或数组             |
| `Bytes`   | 表示字节序列，通常用于存储二进制数据 |
| `Decimal` | 精确表示十进制数字（注意：仅在某些数据库如 PostgreSQL 中完全支持） |

## CURD

### read

**equals (=)**：用于查找与给定值完全相等的记录。
   - 用例：`const user = await prisma.user.findFirst({ where: { email: 'example@example.com' } });`

**not**：用于排除特定值，可以是单个值或更复杂的条件。
   - 用例：`const users = await prisma.user.findMany({ where: { NOT: { email: 'example@example.com' } } });`

**in** 和 **notIn**：用于检查值是否在给定数组中或不在给定数组中。
   - 用例：`const users = await prisma.user.findMany({ where: { id: { in: [1, 2, 3] } } });`

**lt (less than), lte (less than or equal), gt (greater than), gte (greater than or equal)**：用于比较数值大小。
   - 用例：`const products = await prisma.product.findMany({ where: { price: { gt: 50 } } });`

**contains**、**startsWith**、**endsWith**：这些条件主要用于字符串搜索。
   - 用例：`const users = await prisma.user.findMany({ where: { name: { contains: 'John' } } });`
   - 用例（startsWith）：`const users = await prisma.user.findMany({ where: { email: { startsWith: 'user' } } });`
   - 用例（endsWith）：`const users = await prisma.user.findMany({ where: { email: { endsWith: '.com' } } });`

**AND**, **OR**：用于组合多个查询条件。
   - 用例（AND）：`const users = await prisma.user.findMany({ where: { AND: [{ age: { gt: 18 } }, { city: 'New York' }] } });`
   - 用例（OR）：`const users = await prisma.user.findMany({ where: { OR: [{ age: { gt: 18 } }, { city: 'New York' }] } });`

`include` 包含关联数据

`select` 选择指定字段

## advance

`prisma.$transaction([])` 提供原子性操作

```ts
await prisma.$transaction([
  prisma.user.update({ where: { id: '1' }, data: { balance: { decrement: 100 } } }),
  prisma.user.update({ where: { id: '2' }, data: { balance: { increment: 100 } } }),
]);
```
