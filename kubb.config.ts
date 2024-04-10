import { defineConfig } from "@kubb/core";
import { definePlugin as createSwagger } from "@kubb/swagger";
import { definePlugin as createSwaggerTanstackQuery } from "@kubb/swagger-tanstack-query";
import { definePlugin as createSwaggerTS } from "@kubb/swagger-ts";

export default defineConfig({
  input: {
    path: "./swagger.json",
  },
  output: {
    path: "./src/api",
  },
  plugins: [
    createSwagger({ output: false }),
    createSwaggerTS({}),
    createSwaggerTanstackQuery({
      client: {
        importPath: "../../client",
      },
      output: {
        path: "./hooks",
      },
    }),
  ],
});
