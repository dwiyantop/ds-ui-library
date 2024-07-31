# DS UI Library

## Overview

The DS UI Library is a component library designed to provide reusable UI components for React applications. Currently, it includes a customizable Select Dropdown component. This library is built using modern tools and technologies to ensure a smooth development experience and high-quality output.

## Tech Stack

Vite, React, TailwindCSS, Storybook

## Project Structure

    .
    ├── .storybook              # Contains configuration files for Storybook.
    ├── .vscode
    ├── .dist                   # This directory is generated when you build UI Library for deployment from lib folder.
    ├── lib                     # The source code for the component library.
    ├── node_modules
    ├── public
    ├── src                     # The source code for Stories of Storybook.
    ├── storybook-static        # This directory is generated when you build Storybook for deployment.
    ├── .eslintrc.cjs
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc
    ├── index.html
    ├── package.json
    ├── postcss.config.js
    ├── README.md
    ├── tailwind.config.ts
    ├── tsconfig-build.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts          # This file contains configuration for Vite, the build tool and development server used in the project.

## Installation

1. Clone the repository:

```bash
git clone git@github.com:dwiyantop/ds-ui-library.git
cd my-project
```

2. Navigate to the project directory:

```bash
cd ds-ui-library
```

3. Install dependencies:

```bash
yarn install
```

## Run Locally

#### Development:

This command starts a Vite development server for local development.

```bash
yarn dev
```

#### Build:

This command compiles TypeScript and builds the UI library using Vite. It generates production-ready files inside `/dist` folder.

```bash
yarn build
```

#### Preview:

This command starts a preview server to test the production build.

```bash
yarn preview
```

#### Lint:

This command runs ESLint to check for linting issues in the codebase. It reports unused disable directives and limits warnings.

```bash
yarn lint
```

#### Lint and Fix:

This command runs ESLint and automatically fixes issues where possible.

```bash
yarn lint-fix
```

#### Storybook:

This command starts Storybook to develop and view UI components in isolation. By default, it runs on port 6006.

```bash
yarn storybook
```

#### Build Storybook:

This command builds the Storybook static files for deployment.

```bash
yarn build-storybook
```

## Documentation

[Documentation](https://tbd)
