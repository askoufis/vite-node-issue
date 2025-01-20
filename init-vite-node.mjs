import { createServer } from "vite";
import { ViteNodeRunner } from "vite-node/client";
import { ViteNodeServer } from "vite-node/server";
import { installSourcemapsSupport } from "vite-node/source-map";

export const initViteNode = async () => {
  const server = await createServer({
    optimizeDeps: {
      noDiscovery: true,
      include: undefined,
    },
  });
  await server.pluginContainer.buildStart({});

  const node = new ViteNodeServer(server);

  installSourcemapsSupport({
    getSourceMap: (source) => node.getSourceMap(source),
  });

  const runner = new ViteNodeRunner({
    root: server.config.root,
    base: server.config.base,
    fetchModule(id) {
      return node.fetchModule(id);
    },
    resolveId(id, importer) {
      return node.resolveId(id, importer);
    },
  });

  return { runner, server };
};
