import { pgTable, integer, char, timestamp, smallint, varchar, pgSequence, serial, text, boolean, foreignKey } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"


export const sampleIdSeq = pgSequence("sample_id_seq", {  startWith: "1", increment: "1", minValue: "1", maxValue: "9223372036854775807", cache: "1", cycle: false })

export const sample = pgTable("sample", {
	id: integer().primaryKey().notNull(),
	name: char({ length: 100 }).notNull(),
	createdDateTime: timestamp("created_date_time", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
});

export const jisX0401 = pgTable("jis_x0401", {
	prefectureId: smallint("prefecture_id").primaryKey().notNull(),
	name: varchar({ length: 10 }).notNull(),
});

// export const dinosaurs = pgTable("dinosaurs", {
//   id: serial().primaryKey().notNull(),
//   name: text(),
//   description: text(),
// });

// export const tasks = pgTable("tasks", {
//   id: serial().primaryKey().notNull(),
//   dinosaurId: integer("dinosaur_id"),
//   description: text(),
//   dateCreated: timestamp("date_created", { mode: "string" }).defaultNow(),
//   isComplete: boolean("is_complete"),
// }, (table) => {
//   return {
//     tasksDinosaurIdFkey: foreignKey({
//       columns: [table.dinosaurId],
//       foreignColumns: [dinosaurs.id],
//       name: "tasks_dinosaur_id_fkey",
//     }),
//   };
// });
