# CURD

## read

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

