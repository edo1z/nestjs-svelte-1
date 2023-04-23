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

とりあえず User テーブルを作ります。

```sql
CREATE TABLE "User" (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  username VARCHAR(100) NOT NULL UNIQUE,
  bio VARCHAR(200),
  avatar VARCHAR(500),
  active BOOLEAN DEFAULT TRUE,
  createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

上記を元に schema.prisma を更新して、マイグレーションファイルを作成します。

```shell
npx prisma introspect
npx prisma migrate dev --name created_user
```

users リソース作成します。

```shell
nest g resource users
```

GrahpQL を入れます。

```shell
npm i @nestjs/graphql @nestjs/apollo @apollo/server graphql
```

GraphQL 関連の設定をします。

- `nest-cli.json`の`plugins`に`@nestjs/graphql`を追加します。これによって、entity とかに追加するデコレータをシンプルにできます。
- `app.module.ts`に`GraphQLModule`を追加します。その際に、`autoSchemaFile`を追加して、自動で gql ファイルが作成されるようにします。
