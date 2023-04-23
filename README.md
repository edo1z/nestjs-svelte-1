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

users の Controller, Service, Entity などをざっくり作ります。

- 上記の際に、UsersService で PrismaService を使いますが、それを簡単に扱える`nestjs-prisma`を追加しておきます。

```shell
npm i nestjs-prisma
```

- また、`UsersModule`の`imports`に`PrismaModule`を追加しておく必要があります。

```ts
// src/users/users.module.ts

...
import { PrismaModule } from "nestjs-prisma";

@Module({
  imports: [PrismaModule],
  providers: [UsersResolver, UsersService],
})
...
```

起動して GraphQL プレイグラウンドを見てみましょう。

```shell
npm run start:dev
```

エラーがなければ、起動すると勝手に、`src/schema.gql`が作成されます。
`http://localhost:3045/graphql`にアクセスすると、GraphQL プレイグラウンドが確認できます。（port はデフォルトは 3000 です。）

下記でユーザを作成できます。

```gql
mutation CreateUser($createUserInput: CreateUserInput!) {
  createUser(createUserInput: $createUserInput) {
    id
    username
    email
    createdat
  }
}
```

```gql
// Query Variables
{
  "createUserInput": {
    "username": "hoge taro",
    "email": "hoge.taro@example.com"
  }
}
```

下記で全ユーザ取得できます。

```gql
query GetAllUsers {
  users {
    id
    username
    email
  }
}
```
