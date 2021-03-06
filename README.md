react-webpack2-boilerplate
============

[![node](https://img.shields.io/badge/node-=>7-brightgreen.svg)](https://nodejs.org/en/)
[![webpack](https://img.shields.io/badge/webpack-2.2.1-brightgreen.svg)](https://webpack.github.io)
[![react](https://img.shields.io/badge/react-=>15-brightgreen.svg)](https://facebook.github.io/react/)
[![yarn](https://img.shields.io/badge/yarn-master-brightgreen.svg)](https://yarnpkg.com/en/)
[![jest](https://img.shields.io/badge/jest-=>19-brightgreen.svg)](https://facebook.github.io/jest/)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)
 
QuickStart
-----------------------

Just couple instructions to run boilerplate quickly :)

1. Make sure your Node match those in the package.json `engines` field (use [nvm](https://github.com/creationix/nvm) to manage versions)
1. Clone the repo and run `yarn` in the project root
1. Start the server with `yarn run start` and browse to `http://localhost:3000` to view the site.
1. Webpack will replace all changes done to app code so you won't need to refresh it manually


Scripts
-----------
Command | Notes
------- | -----
`start` | Starts the server in development mode on port `3000`
`prod` | (`yarn run build` first) Starts the server in production mode on port `9000`
`build` | Builds a production version into `build/` folder
`test` | Run tests
`test-coverage` | Run tests and generate coverage files

Tests
------------

Remember when writing tests:

- Name your unit test file `foo.test.js`, where `foo` is the name of the component
- Only unit test app logic, not React.
- Keep components as separate as possible to help others with testing
