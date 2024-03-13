# Quasar Project (quasar-project-ts)

This is a Quasar project with TypeScript.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/phatneglo/quasar-project-ts.git
```

2. Install the dependencies:

```bash
npm install
```

3. Adjust the `quasar.config.js` file to match your environment. Specifically, update the `env` section to point to your backend API:

```js
env: {
  PUBLIC_PATH: ctx.dev
    ? 'http://localhost:9000/' // your dev server
    : 'https://your-production-server.com/',
  API: ctx.dev
    ? 'http://localhost:8000' // your dev API
    : 'https://your-production-api.com/api',
  COOKIES_TOKEN_NAME: 'app_token',
},
```

## Project Structure

- `.quasar`: This directory is generated automatically by Quasar CLI. It contains build artifacts and should not be edited manually.
- `.vscode`: This directory contains settings for Visual Studio Code.
- `node_modules`: This directory contains all the npm packages required for the project.
- `public`: This directory contains static assets that are copied to the root of the dist folder on build.
- `src`: This directory contains the source code of the application.
  - `assets`: This directory contains static assets that are imported into your source code.
  - `boot`: This directory contains boot files, which run before your app and can add additional functionality.
  - `components`: This directory contains Vue components.
  - `css`: This directory contains global CSS/SCSS files.
  - `layouts`: This directory contains layout components, which are used by the router to render pages.
  - `models`: This directory contains TypeScript interfaces or classes that define the shape of your data.
  - `pages`: This directory contains page components, which are loaded by the router when navigating to different routes.
  - `router`: This directory contains the Vue Router configuration.
  - `services`: This directory contains services, which are used to handle business logic and API calls.
  - `stores`: This directory contains Pinia stores, which are used to manage global state.
  - `App.vue`: This is the root Vue component.
  - `env.d.ts`: This file is used to declare types for environment variables.
  - `quasar.d.ts`: This file is used to declare types for Quasar.
  - `shims-vue.d.ts`: This file is used to declare types for Vue files.
- `.editorconfig`: This file defines coding style rules.
- `.eslintignore`: This file specifies files and directories that ESLint should ignore.
- `.eslintrc.cjs`: This file contains ESLint configuration.
- `.gitignore`: This file specifies files and directories that Git should ignore.
- `.npmrc`: This file contains npm configuration.
- `.prettierrc`: This file contains Prettier configuration.
- `index.html`: This is the main HTML file for your app.
- `package.json`: This file contains project metadata and dependencies.
- `postcss.config.cjs`: This file contains PostCSS configuration.
- `quasar.config.js`: This file contains Quasar configuration.
- `README.md`: This file contains information about the project and instructions for developers.
- `tsconfig.json`: This file contains TypeScript configuration.

## Running the Project

To start the app in development mode (with hot-code reloading, error reporting, etc.), run:

```bash
quasar dev
```

To build the app for production, run:

```bash
quasar build
```

## TODO Backend

For the backend you can view he repo on See [Fast API Todo Backend Boilerplate](https://github.com/phatneglo/fastapi-rbac-boilerplate).

```bash
git clone https://github.com/phatneglo/fastapi-rbac-boilerplate
```
