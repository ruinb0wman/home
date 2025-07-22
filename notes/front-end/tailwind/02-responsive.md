# responsive design

*tailwind* 响应式用的也是媒体查询, 下面是对应的props

| Breakpoint prefix | Minimum width | CSS |
|-------------------|---------------|-----|
| sm                | 40rem (640px) | `@media (width >= 40rem) { ... }` |
| md                | 48rem (768px) | `@media (width >= 48rem) { ... }` |
| lg                | 64rem (1024px)| `@media (width >= 64rem) { ... }` |
| xl                | 80rem (1280px)| `@media (width >= 80rem) { ... }` |
| 2xl               | 96rem (1536px)| `@media (width >= 96rem) { ... }` |

| Variant   | Media query                                  |
|-----------|----------------------------------------------|
| max-sm    | `@media (width < 40rem) { ... }`             |
| max-md    | `@media (width < 48rem) { ... }`             |
| max-lg    | `@media (width < 64rem) { ... }`             |
| max-xl    | `@media (width < 80rem) { ... }`             |
| max-2xl   | `@media (width < 96rem) { ... }`             |
