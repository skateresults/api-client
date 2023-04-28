# Skate Results API Client

## Installation

This package is published to the GitHub npm registry.

1. Specify the npm registry for `@skateresults` in your `.npmrc` file:

```text
@skateresults:registry=https://npm.pkg.github.com/
```

2. Install the package using your favorite package manager:

```bash
npm install @skateresults/api-client
// or
yarn add @skateresults/api-client
// or
pnpm add @skateresults/api-client
```

## Usage

```typescript
const client = createClient();

const event = await client.event.get("$eventId");
const athletes = await client.athletes.getAll("$eventId");
```

This package is an ESM-only package.
