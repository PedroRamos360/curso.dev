import migrationRunner from "node-pg-migrate";
import { join } from "node:path";

export default async function migrations(request, response) {
  let migrations;
  switch (request.method) {
    case "GET":
      migrations = await migrationRunner({
        databaseUrl: process.env.DATABASE_URL,
        dryRun: true,
        dir: join("infra", "migrations"),
        direction: "up",
        verbose: true,
        migrationsTable: "pgmigrations",
      });
      response.status(200).json(migrations);
      break;
    case "POST":
      migrations = await migrationRunner({
        databaseUrl: process.env.DATABASE_URL,
        dryRun: false,
        dir: join("infra", "migrations"),
        direction: "up",
        verbose: true,
        migrationsTable: "pgmigrations",
      });
      response.status(200).json(migrations);
      break;
  }
}
