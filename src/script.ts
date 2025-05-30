import * as schema from './db/schema.ts';
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: Deno.env.get("DATABASE_URL"),
});

const db = drizzle(pool, { schema });
// Instantiate Drizzle client with pg driver and schema.
// import pg from "pg";
// const { Pool } = pg;
// export const db = drizzle({
//   client: new Pool({
//     connectionString: Deno.env.get("DATABASE_URL"),
//   }),
//   // schema: { dinosaurSchema, taskSchema, dinosaursRelations, tasksRelations },
// });
const result = await db.query.jisX0401.findMany();

console.log(result);
// Create a new dinosaur.
// await insertDinosaur({
//   name: "Denosaur",
//   description: "Dinosaurs should be simple.",
// });

// // Find that dinosaur by name.
// const res = await findDinosaurByName("Denosaur");

// // Create a task with that dinosaur by its id.
// await insertTask({
//   dinosaurId: res.id,
//   description: "Remove unnecessary config.",
//   isComplete: false,
// });

// // Update a dinosaur with a new description.
// const newDeno = {
//   id: res.id,
//   name: "Denosaur",
//   description: "The simplest dinosaur.",
// };
// await updateDinosaur(newDeno);

// // Delete the dinosaur (and any tasks it has).
// await deleteDinosaurById(res.id);

