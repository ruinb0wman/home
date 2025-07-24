# schema

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
