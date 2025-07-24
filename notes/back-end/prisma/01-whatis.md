# whatis

Prisma is a powerful Object-Relational Mapping (ORM) tool for JavaScript and TypeScript

A ORM(Object-Relational-Modal) is a tool that helps you work with a database using regular code instead of writing SQL manually.

## migrate

migrate 用于迁移数据库中的字段, 每次修改schema后都需要进行迁移, 否则数据库中的字段和客户端对不上

命令: `npx prisma migrate dev --name init`

## client 

client 是js访问prisma的客户端, 每次修改schema后都需要生成新的客户端, 这样才有类型检查和提示

生成客户端命令: `npx prisma generate`
