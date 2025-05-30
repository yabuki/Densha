-- DB作成
DROP DATABASE IF EXISTS sample_db;
CREATE DATABASE sample_db;
--CREATE DATABASE test
--   LOCALE_PROVIDER icu
--   ICU_LOCALE "en-US"
--   LOCALE "en_US.utf8"
--   TEMPLATE template0;
-- 作成したDBに接続
\c sample_db;
-- テーブル作成
-- DROP TABLE IF EXISTS sample;
-- CREATE TABLE sample (
--	id integer NOT NULL PRIMARY KEY,
--	name char(100) NOT NULL,
--	created_date_time timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
--);

-- ID用シーケンス作成
--CREATE SEQUENCE sample_id_seq START 1;
-- サンブルデータの登録
--INSERT INTO sample (id, name) VALUES(nextval('sample_id_seq'), 'sample name');

-- テーブル種別
DROP TABLE IF EXISTS table_kind;
CREATE TABLE table_kind (
  id serial NOT NULL PRIMARY KEY, -- 1から2,147,483,647の値を取り扱う
  table_name text NOT NULL,
  unique (table_name)
);

insert into table_kind(table_name) values('健康保険標準報酬テーブル');
insert into table_kind(table_name) values('厚生年金標準報酬テーブル');

-- 適用開始
DROP TABLE IF EXISTS yukou;
CREATE TABLE youkou (
  id serial NOT NULL PRIMARY KEY, -- 1から2,147,483,647の値を取り扱う
  shubetu int NOT NULL, --  -2,147,483,648から2,147,483,647の整数を取り扱う
  beginDate date NOT NULL, -- この日付(月)から適用、次月が最初の引き落とし
  endDate date, -- この日付は含まない。半開区間になる。
  unique (shubetu, beginDate)
);

-- 健康保険テーブル
-- 地方やどこの健保組合かで異なるので、テーブルを分ける。テーブル名は暫定
DROP TABLE IF EXISTS kenpo_money;
CREATE TABLE kenpo_money (
  table_version smallint NOT NULL, -- テーブルのバージョン
  grade smallint NOT NULL, -- 等級
  base money NOT NULL, -- 標準報酬月額
  lowerValue money, -- 報酬月額(以上)
  highValue money, -- 報酬月額(以下)
  unique (table_version, grade, base) -- テーブルのバージョン、等級および標準月額報酬はユニーク
);

-- 厚生年金テーブル
DROP TABLE IF EXISTS kousei_money;
CREATE TABLE kousei_money (
  table_version smallint NOT NULL, -- テーブルのバージョン
  grade smallint NOT NULL, -- 等級
  base money NOT NULL, -- 標準報酬月額
  lowerValue money, -- 報酬月額(以上)
  highValue money, -- 報酬月額(以下)
  unique (table_version, grade, base) -- テーブルのバージョン、等級および標準月額報酬はユニーク
);

-- 都道府県JISコード(JIS X0401)
DROP TABLE IF EXISTS jis_x0401;
CREATE TABLE jis_x0401 (
  prefecture_id smallint NOT NULL PRIMARY KEY,
  name varchar(10) NOT NULL
);

insert into jis_x0401(prefecture_id, name) values(1,'北海道');
insert into jis_x0401(prefecture_id, name) values(2,'青森県');
insert into jis_x0401(prefecture_id, name) values(3,'岩手県');
insert into jis_x0401(prefecture_id, name) values(4,'宮城県');
insert into jis_x0401(prefecture_id, name) values(5,'秋田県');
insert into jis_x0401(prefecture_id, name) values(6,'山形県');
insert into jis_x0401(prefecture_id, name) values(7,'福島県');
insert into jis_x0401(prefecture_id, name) values(8,'茨城県');
insert into jis_x0401(prefecture_id, name) values(9,'栃木県');
insert into jis_x0401(prefecture_id, name) values(10,'群馬県');
insert into jis_x0401(prefecture_id, name) values(11,'埼玉県');
insert into jis_x0401(prefecture_id, name) values(12,'千葉県');
insert into jis_x0401(prefecture_id, name) values(13,'東京都');
insert into jis_x0401(prefecture_id, name) values(14,'神奈川県');
insert into jis_x0401(prefecture_id, name) values(15,'新潟県');
insert into jis_x0401(prefecture_id, name) values(16,'富山県');
insert into jis_x0401(prefecture_id, name) values(17,'石川県');
insert into jis_x0401(prefecture_id, name) values(18,'福井県');
insert into jis_x0401(prefecture_id, name) values(19,'山梨県');
insert into jis_x0401(prefecture_id, name) values(20,'長野県');
insert into jis_x0401(prefecture_id, name) values(21,'岐阜県');
insert into jis_x0401(prefecture_id, name) values(22,'静岡県');
insert into jis_x0401(prefecture_id, name) values(23,'愛知県');
insert into jis_x0401(prefecture_id, name) values(24,'三重県');
insert into jis_x0401(prefecture_id, name) values(25,'滋賀県');
insert into jis_x0401(prefecture_id, name) values(26,'京都府');
insert into jis_x0401(prefecture_id, name) values(27,'大阪府');
insert into jis_x0401(prefecture_id, name) values(28,'兵庫県');
insert into jis_x0401(prefecture_id, name) values(29,'奈良県');
insert into jis_x0401(prefecture_id, name) values(30,'和歌山県');
insert into jis_x0401(prefecture_id, name) values(31,'鳥取県');
insert into jis_x0401(prefecture_id, name) values(32,'島根県');
insert into jis_x0401(prefecture_id, name) values(33,'岡山県');
insert into jis_x0401(prefecture_id, name) values(34,'広島県');
insert into jis_x0401(prefecture_id, name) values(35,'山口県');
insert into jis_x0401(prefecture_id, name) values(36,'徳島県');
insert into jis_x0401(prefecture_id, name) values(37,'香川県');
insert into jis_x0401(prefecture_id, name) values(38,'愛媛県');
insert into jis_x0401(prefecture_id, name) values(39,'高知県');
insert into jis_x0401(prefecture_id, name) values(40,'福岡県');
insert into jis_x0401(prefecture_id, name) values(41,'佐賀県');
insert into jis_x0401(prefecture_id, name) values(42,'長崎県');
insert into jis_x0401(prefecture_id, name) values(43,'熊本県');
insert into jis_x0401(prefecture_id, name) values(44,'大分県');
insert into jis_x0401(prefecture_id, name) values(45,'宮崎県');
insert into jis_x0401(prefecture_id, name) values(46,'鹿児島県');
insert into jis_x0401(prefecture_id, name) values(47,'沖縄県');
