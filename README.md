# Next.js + NextAuth.js のサンプル

## 使用バージョン

使用しているバージョンは以下の通りです。

- node: v20.11.1
- yarn: 1.22.19
- next: 14.1.0
- next-auth: 5.0.0-beta.11
- react: 18.2.0
- react-dom: 18.2.0
- tailwindcss: 3.4.1
- typescript: 5.3.3

## 説明

App Router + next-auth を使用した GitHub の認証のサンプルです。

.env.sample を.env.local にコピーし、以下の値を設定してください。

- AUTH_GITHUB_ID
- AUTH_GITHUB_SECRET
- AUTH_SECRET

yarn dev で動作を確認できます。

- Home(/)は、ログイン状態にかかわらず画面が表示され、ログイン中の場合はユーザー情報が表示されます。
- dashboard(/dashboard)は、未ログインの場合は、サインイン画面が表示されます。
