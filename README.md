# instana-pino-transport
A self contained reproduction of incorrect process identification with pino transports

## Problem

When the @instana/collector is loaded into a Node.js application, but that application also pino v7+ [transports](https://getpino.io/#/docs/transports), then the Node.js process is sometimes identified as `thread-stream` instead of using the actual application name.

## Reproduction

### Running directly on the host

```bash
MODE=transport node index.js
```

### Running as a docker container

```bash
docker build -t test-instana .
docker run --network=host --pid=host --name "test-instana" --rm  -e MODE=transport -ti test-instana:latest node server.js
```

### What do you expected?

I expected the correct process name and version to be used. In this reproduction: `instana-pino-transport 1.0.0`

### What happended?

A different process name and version was automatically identified: `thread-stream 0.13.1`
