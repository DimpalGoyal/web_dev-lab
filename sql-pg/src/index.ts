import { Client } from "pg";
import { PG_URL } from "./config";

const client = new Client({
  connectionString: PG_URL,
});

async function createUsersTable() {
  try {
    await client.connect();
    const result = await client.query(`
    SELECT * FROM users;
    `);
    console.log(result.rows);
  } catch (err) {
    console.log(err);
  }
}

createUsersTable();
