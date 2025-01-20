# Vite node issue reproduction

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
