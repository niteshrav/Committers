import request from "supertest";
import { createApp } from "./app";

const mocks = vi.hoisted(() => ({
  createMock: vi.fn(),
}));

vi.mock("./prismaClient", () => ({
  prisma: {
    lead: {
      create: mocks.createMock,
    },
  },
}));

describe("API", () => {
  const originalCorsOrigin = process.env.CORS_ORIGIN;

  beforeEach(() => {
    process.env.CORS_ORIGIN = originalCorsOrigin;
    mocks.createMock.mockReset();
    mocks.createMock.mockResolvedValue({ id: "lead_123" });
  });

  afterAll(() => {
    process.env.CORS_ORIGIN = originalCorsOrigin;
  });

  it("returns health payload", async () => {
    const app = createApp();
    const res = await request(app).get("/api/health");

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ ok: true });
  });

  it("allows CORS preflight from local loopback frontend origin", async () => {
    delete process.env.CORS_ORIGIN;
    const app = createApp();
    const res = await request(app)
      .options("/api/leads")
      .set("Origin", "http://127.0.0.1:5173")
      .set("Access-Control-Request-Method", "POST");

    expect(res.status).toBe(204);
    expect(res.headers["access-control-allow-origin"]).toBe("http://127.0.0.1:5173");
  });

  it("allows loopback alias even when CORS_ORIGIN is set to localhost only", async () => {
    process.env.CORS_ORIGIN = "http://localhost:5173";
    const app = createApp();
    const res = await request(app)
      .options("/api/leads")
      .set("Origin", "http://127.0.0.1:5173")
      .set("Access-Control-Request-Method", "POST");

    expect(res.status).toBe(204);
    expect(res.headers["access-control-allow-origin"]).toBe("http://127.0.0.1:5173");
  });

  it("rejects non-json payload for lead submission", async () => {
    const app = createApp();
    const res = await request(app).post("/api/leads").send("name=test");

    expect(res.status).toBe(415);
    expect(res.body.error).toMatch(/Content-Type must be application\/json/i);
  });

  it("creates lead for valid payload", async () => {
    const app = createApp();
    const payload = {
      name: "Nitesh",
      email: "hello@example.com",
      serviceNeeded: "Website Development",
      budgetRange: "50,000",
      timeline: "2-4 weeks",
      referenceLinks: "https://example.com",
      message: "Need a modern business website.",
    };

    const res = await request(app).post("/api/leads").set("Content-Type", "application/json").send(payload);

    expect(res.status).toBe(201);
    expect(res.body).toEqual({ ok: true, id: "lead_123" });
    expect(mocks.createMock).toHaveBeenCalledTimes(1);
  });

  it("returns 503 when lead persistence is unavailable", async () => {
    const app = createApp();
    mocks.createMock.mockRejectedValue(new Error("DATABASE_URL resolved to an empty string"));
    const payload = {
      name: "Nitesh",
      email: "hello@example.com",
      serviceNeeded: "Website Development",
      budgetRange: "50,000",
      timeline: "2-4 weeks",
      referenceLinks: "https://example.com",
      message: "Need a modern business website.",
    };

    const res = await request(app).post("/api/leads").set("Content-Type", "application/json").send(payload);

    expect(res.status).toBe(503);
    expect(res.body).toEqual({
      error: "Lead service is temporarily unavailable. Please try again shortly.",
    });
  });

  it("rejects lead when name contains non-letters", async () => {
    const app = createApp();
    const payload = {
      name: "John123",
      email: "hello@example.com",
      serviceNeeded: "Website Development",
      budgetRange: "50,000",
      timeline: "2-4 weeks",
      message: "Hello.",
    };

    const res = await request(app).post("/api/leads").set("Content-Type", "application/json").send(payload);

    expect(res.status).toBe(400);
    expect(mocks.createMock).not.toHaveBeenCalled();
  });

  it("rejects lead when budget contains letters", async () => {
    const app = createApp();
    const payload = {
      name: "Nitesh",
      email: "hello@example.com",
      serviceNeeded: "Website Development",
      budgetRange: "50k",
      timeline: "2-4 weeks",
      message: "Hello.",
    };

    const res = await request(app).post("/api/leads").set("Content-Type", "application/json").send(payload);

    expect(res.status).toBe(400);
    expect(mocks.createMock).not.toHaveBeenCalled();
  });
});

