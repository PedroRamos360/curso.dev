test("GET /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
  const body = await response.json();
  expect(body.updated_at).toBeDefined();
  const parsedDate = new Date(body.updated_at).toISOString();
  expect(parsedDate).toBe(body.updated_at);
  expect(body.database).toBeDefined();
  expect(body.database.max_connections).toBeDefined();
  expect(body.database.current_connections).toBeDefined();
  expect(body.database.postgres_version).toBeDefined();
  expect(body.database.max_connections).toEqual(expect.any(Number));
  expect(body.database.current_connections).toEqual(expect.any(Number));
  expect(body.database.max_connections).toBeGreaterThan(0);
  expect(body.database.current_connections).toBeGreaterThanOrEqual(0);
  expect(body.database.postgres_version).toEqual(expect.any(String));
});
