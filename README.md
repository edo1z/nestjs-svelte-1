# nestjs-svelte-1

NestJS, SvelteKit, Prisma, PostgreSQL で何かをつくってみる

- CSS Framework は [Skeketon](https://www.skeleton.dev/) を使ってみる

## Settings Memo

とりあえずバックエンドとフロントを入れる。

```shell
nest new backend
npm create skeleton-app@latest frontend
```

バックエンドを設定しましょう。

```shell
cd backend
npm i -D prisma
npx prisma init
```

DB 設計して Schema.prisma を作りましょう。
