import db from "infra/database.js";

async function status(request, response) {
  const updated_at = new Date().toISOString();
  const database = {
    max_connections: Number(await db.getMaxConnections()),
    current_connections: Number(await db.getCurrentConnections()),
    postgres_version: await db.getPostgresVersion(),
  };
  response.status(200).json({ updated_at, database });
}

export default status;
