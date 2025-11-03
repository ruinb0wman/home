# auth

使用next-auth作为用户校验库

```sh
pnpm i next-uath
```

简单用例

```typescript
// lib/prisma.ts

import { PrismaClient } from " .. /app/generated/prisma";
import { withAccelerate } from "@prisma/extension-accelerate";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

const prisma = globalForPrisma.prisma | | new PrismaClient().$extends(withAccelerate());

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export { prisma }; 
```

```typescript
// auth.ts
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

export const {auth, handlers, signIn, signOut} = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [GitHub],
  adapter: PrismaAdapter(prisma)
})
```
