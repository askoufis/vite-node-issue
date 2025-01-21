# Vite node issue reproduction

Reproduction for [vite#19245](https://github.com/vitejs/vite/issues/19245).

## Steps to reproduce

```sh
git clone git@github.com:askoufis/vite-node-issue.git
cd vite-node-issue
pnpm install
pnpm test
```

Test should fail with the error:

```
TypeError: The "path" argument must be of type string. Received an instance of RegExp
```

Downgrading `vite` to a `5.x` version (e.g. `5.4.13`) makes the test pass.

Additionally, providing a `build.dynamicImportVarsOptions.exclude` value when calling `createServer` fixes the issue (see `init-vite-node.mjs`.
