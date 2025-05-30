import { drizzle } from "drizzle-orm/node-postgres";
//import { dinosaurs as dinosaurSchema, tasks as taskSchema } from "./schema.ts";
import { sample, jisX0401 } from "./schema.ts";
//import { dinosaursRelations, tasksRelations } from "./relations.ts";
import pg from "pg";
//import { integer } from "drizzle-orm/sqlite-core";
import { integer } from "drizzle-orm/pg-core";
// import { eq } from "drizzle-orm/expressions";
import { eq } from "drizzle-orm";

// Use pg driver.
const { Pool } = pg;

// Instantiate Drizzle client with pg driver and schema.
export const db = drizzle({
  client: new Pool({
    connectionString: Deno.env.get("DATABASE_URL"),
  }),
  // schema: { dinosaurSchema, taskSchema, dinosaursRelations, tasksRelations },
});
export async function insertSample(sampleObj: typeof sample) {
  return await db.insert(sample).values(
    {
      id: sampleObj.id,
      name: sampleObj.name,
    });
}
export async function insertJisX0401(jisX0401Obj: typeof jisX0401) {
  return await db.insert(jisX0401).values({
    name: jisX0401Obj.name,
    prefectureId: jisX0401Obj.prefectureId,
  });
}

// find jisX0401 by prefectureId
export async function findJisX0401ByPrefectureId(prefectureId: typeof integer) {
  return await db.select().from(jisX0401).where(
    eq(jisX0401.prefectureId, prefectureId),
  );
}
// // Insert dinosaur.
// export async function insertDinosaur(dinosaurObj: typeof dinosaurSchema) {
//   return await db.insert(dinosaurSchema).values(dinosaurObj);
// }

// // Insert task.
// export async function insertTask(taskObj: typeof taskSchema) {
//   return await db.insert(taskSchema).values(taskObj);
// }

// // Find dinosaur by id.
// export async function findDinosaurById(dinosaurId: typeof integer) {
//   return await db.select().from(dinosaurSchema).where(
//     eq(dinosaurSchema.id, dinosaurId),
//   );
// }

// // Find dinosaur by name.
// export async function findDinosaurByName(name: string) {
//   return await db.select().from(dinosaurSchema).where(
//     eq(dinosaurSchema.name, name),
//   );
// }

// // Find tasks based on dinosaur id.
// export async function findDinosaurTasksByDinosaurId(
//   dinosaurId: typeof integer,
// ) {
//   return await db.select().from(taskSchema).where(
//     eq(taskSchema.dinosaurId, dinosaurId),
//   );
// }

// // Update dinosaur.
// export async function updateDinosaur(dinosaurObj: typeof dinosaurSchema) {
//   return await db.update(dinosaurSchema).set(dinosaurObj).where(
//     eq(dinosaurSchema.id, dinosaurObj.id),
//   );
// }

// // Update task.
// export async function updateTask(taskObj: typeof taskSchema) {
//   return await db.update(taskSchema).set(taskObj).where(
//     eq(taskSchema.id, taskObj.id),
//   );
// }

// // Delete dinosaur by id.
// export async function deleteDinosaurById(id: typeof integer) {
//   return await db.delete(dinosaurSchema).where(
//     eq(dinosaurSchema.id, id),
//   );
// }

// // Delete task by id.
// export async function deleteTask(id: typeof integer) {
//   return await db.delete(taskSchema).where(eq(taskSchema.id, id));
// }

