import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
  });
  await client.connect();
  try {
    const result = await client.query(queryObject);
    return result;
  } finally {
    await client.end();
  }
}

async function getMaxConnections() {
  const result = await query("SHOW max_connections;");
  return result.rows[0].max_connections;
}

async function getCurrentConnections() {
  const databaseName = process.env.POSTGRES_DB;
  const result = await query({
    text: "SELECT COUNT(*) FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });
  return result.rows[0].count;
}

async function getPostgresVersion() {
  const result = await query("SHOW server_version;");
  return result.rows[0].server_version;
}

export default {
  query,
  getMaxConnections,
  getCurrentConnections,
  getPostgresVersion,
};
