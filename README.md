# test-repositorius

## Current branch: master-calc ~> husky-try ~> calc-begin ~> rpi_features_area ~> refactoring ~> calc-begin ~> edit_select_calc_result

## Features for USER:

[+] click on calc's screen for get result \
[+] keyboard is enable for inputting numbers \
[-] 1000000 ~> 1000_000 ~> 1000000

## Features for DEV:

-   modern js SPA without frameworks, but React-like
-   Reef.js + RTK (Redux Toolkit) for reactivity and state management
-   Components architecture, rely on predictable RTK style
-   All RTK features: Redux Dev Tools, slices, immer, etc.
-   Use as 'Starter Pack': correct modern vanilla JS + ecosystem based on Webpack
-   Webpack for: bundling, minification, dev-server, clean-webpack-plugin, html-webpack-plugin
-   TDD, Only jest and @testing-library/dom for tests
-   Only ESM (EcmaScript modules): both source code and tests
-   @babel for: es6 to es5 and correct work with jest & ESM
-   JSDoc as documentation
-   husky: for pre-commit hooks
-   CSS is Auto-Purge, while build creating

## You can:

-   Install this repo on your machine: git clone _[this_repo_url]_ && cd _[repo_name]_ && npm i
-   npm run test (for tests)
-   npm run start (for run dev server)
-   npm run build (for creating public build, index.html autogenerate)
-   npm run doc (for create docs for app by jsdoc)
-   npm run serve (for run app local server and www)
-   use VSC + Extensions: "Comment tagged templates", "lit-html", for best expierence with js template literals
