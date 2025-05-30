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
3. `podman-compose up -d`

## psqlにはいるには

- ``podman exec -it コンテナ名 bash`
- 例
    - `podman exec -it sample-db bash`

コンテナ内部に入ったら、

`psql -U postgres -d sample_db` で\dをいれてテーブル一覧を出してみましょう。

