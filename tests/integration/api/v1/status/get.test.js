test("GET /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
  const body = await response.json();
  expect(body.updated_at).toBeDefined();
  const parsedDate = new Date(body.updated_at).toISOString();
  expect(parsedDate).toBe(body.updated_at);
  expect(body.dependencies.database).toBeDefined();
  expect(body.dependencies.database.max_connections).toBeDefined();
  expect(body.dependencies.database.current_connections).toBeDefined();
  expect(body.dependencies.database.postgres_version).toBeDefined();
  expect(body.dependencies.database.max_connections).toEqual(
    expect.any(Number),
  );
  expect(body.dependencies.database.current_connections).toEqual(
    expect.any(Number),
  );
  expect(body.dependencies.database.max_connections).toEqual(100);
  expect(body.dependencies.database.current_connections).toEqual(1);
  expect(body.dependencies.database.postgres_version).toEqual(
    expect.any(String),
  );
});
