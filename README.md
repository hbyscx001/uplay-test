# 🚀 Welcome to Ubisoft Uplay frontend test!

[TOC]

## Summary

This frontend test project is based on React, Typescript, Material-UI and Webpack.

Source tree:
frontend
├─.eslintrc.js
├─.gitignore
├─.prettierrc.js
├─.yo-rc.json
├─README.md
├─package.json
├─tsconfig.json
├─webpack.config.js
├─yarn.lock
├─src
|  ├─app.tsx
|  ├─global.d.ts
|  ├─index.html
|  ├─index.ts
|  ├─utils
|  ├─styles
|  ├─store
|  ├─pages
|  ├─images
|  ├─hooks
|  ├─data
|  ├─compnents
├─dist

## Requirement

Node version: v12.18.3
Yarn version: v1.22.4
Npm version: v6.14.6

## Build/Run

Run this command at project_root folder to pull all dependency modules:

```shell
yarn
```

Run this command to build and generate bundle file to **<project_root>/dist**:

```shell
yarn build
```

Run this command to lunach a webpack development server:

```shell
yarn start
```

## Design

This is a tiny project and do not have a complicate state control or interactive.
For now our design based on that the backend data cached at a global variable. In React, we should follow the design philosophical of One-way data flow down. So we need to give a proper UI design, and follow the UI design to proposal our data flow.

### UI

This project follow the UX style at Material-UI. the main page have two part

1. the top application bar
   User could check current login information at top app bar.
   User could login, logout and change their email address at their user panel.
2. the detail zone. 
   Show the game information for current user.

### Dataflow

Follow the UI component. we can give the minimum data to each component to improve our pages performance

1. Top app bar
   State: login status ,current user information
   Callback: login function, logout function, email change function
2. Detail zone
   State: login status ,current user information

All state/callback should be wrappered by Customize React Hooks to provide a good encapsulation.

All backend data now store in a global variable in runtime memory.

**TODO/Refactor Proposal**

1. Support backend API
2. Store backend data at global state
3. Refactor dataflow
   Proposal Detail zone data flow:
     State: Game lists

## Problem we meet

1. Breaking React hooks rules, such as not call react hook in top of react pure component, dependency array is not set correctly. 
   **[FIX]** Using eslint detect problems
2. Webpack different plugins's configuration and debug. different loader configuration and optimize.
   **[FIX]** Google, Stackoverflow based on error log