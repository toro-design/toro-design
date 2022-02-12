## Development Setup

After cloning the repository, execute the following commands in the root folder:

1. Install dependencies

```bash
yarn

#or

yarn install
```

We use [Yarn](https://yarnpkg.com/) for dependency management and for the project workspaces.

2.

- If you will be working on the components source code, you can use the following command to start the webpack dev server:

```bash
## Start the webpack dev server
yarn build:watch

## optional
yarn dev:sb ## this will start the documentation toro.js server and it will automatically detect the changes in the components.

yarn start:sb ## this will start the storybook server for a faster development and testing.
```

- If you will be working just on the documentation source code / mdx, you can use the following commands to build
  ToroUI components and then start the toro.js dev server:

```bash
## Build ToroUI source components
yarn build:toroui

## Start the toro.js documentation dev server
yarn dev:sb
```

- You also can use Storybook to test the components and faster development:

```bash
yarn sb

#or

yarn start:sb
```

Remember that these commands must be executed in the root folder of the project.

## Tests

All commits that fix bugs or add features need a test.
You can run the nest command for component specific tests.

```
yarn test src/button

```