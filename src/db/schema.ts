import { pgTable, unique, serial, text, integer, date, smallint, numeric, varchar } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const tableKind = pgTable("table_kind", {
	id: serial().primaryKey().notNull(),
	tableName: text("table_name").notNull(),
}, (table) => [
	unique("table_kind_table_name_key").on(table.tableName),
]);

export const youkou = pgTable("youkou", {
	id: serial().primaryKey().notNull(),
	shubetu: integer().notNull(),
	begindate: date().notNull(),
	enddate: date(),
}, (table) => [
	unique("youkou_shubetu_begindate_key").on(table.shubetu, table.begindate),
]);

export const kenpoMoney = pgTable("kenpo_money", {
	tableVersion: smallint("table_version").notNull(),
	grade: smallint().notNull(),
	base: numeric({ precision: 14, scale:  2 }).notNull(),
	lowervalue: numeric({ precision: 14, scale:  2 }),
	highvalue: numeric({ precision: 14, scale:  2 }),
}, (table) => [
	unique("kenpo_money_table_version_grade_base_key").on(table.tableVersion, table.grade, table.base),
]);

export const kouseiMoney = pgTable("kousei_money", {
	tableVersion: smallint("table_version").notNull(),
	grade: smallint().notNull(),
	base: numeric({ precision: 14, scale:  2 }).notNull(),
	lowervalue: numeric({ precision: 14, scale:  2 }),
	highvalue: numeric({ precision: 14, scale:  2 }),
}, (table) => [
	unique("kousei_money_table_version_grade_base_key").on(table.tableVersion, table.grade, table.base),
]);

export const jisX0401 = pgTable("jis_x0401", {
	prefectureId: smallint("prefecture_id").primaryKey().notNull(),
	name: varchar({ length: 10 }).notNull(),
});
