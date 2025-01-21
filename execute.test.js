import { initViteNode } from "./init-vite-node.js";

describe("thing", () => {
  let runner, server;

  beforeAll(async () => {
    const viteNodeInit = await initViteNode();
    runner = viteNodeInit.runner;
    server = viteNodeInit.server;
  });

  afterAll(async () => {
    await server.close();
  });

  it("should execute example.ts", async () => {
    await runner.executeFile("./example.ts");
  });
});
