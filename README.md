# Densha
Densha は、Denoを使って社会保険(shakai hoken)の計算を行うプログラムです

## 開発環境

- Debian GNU/Linux stable
- Deno
- podmanとpodman-compose または Dockerとdocker compose
    - こちらはpodmanで動かしていますが、Dockerでも動くはずです。

## 動かし方

1. cloneします。
2. `deno install` します。
3. .envをつくります。DATABASE_URL=postgresql:ユーザー名:パスワード@ホスト名/データベース名の形式を書き込みます。例えば、`DATABASE_URL=postgresql://postgres:postgres@localhost/sample_db`
4. deno taskを実行してtaskの内容を確認します。
5. deno taskで podman-compose up -d します。
6. deno task で copy-db-schema を実行します
7. deno task で run を選んで、実行します。

## psqlにはいるには

- ``podman exec -it コンテナ名 bash`
- 例
    - `podman exec -it sample-db bash`

コンテナ内部に入ったら、

`psql -U postgres -d sample_db` で\dをいれてテーブル一覧を出してみましょう。

