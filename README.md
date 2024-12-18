# Module 13 Challenge - Candidate Search

It is candidate search application that calls the GitHub API and renders data in the browser.
<img width="737" alt="image" src="https://github.com/user-attachments/assets/ab939a45-8174-4016-aaef-4c0a09a09767" />

<img width="952" alt="image" src="https://github.com/user-attachments/assets/2cc57082-7f80-4e0e-9bc1-be2674e5b494" />

<img width="865" alt="image" src="https://github.com/user-attachments/assets/c1a1eec2-1412-4904-a38b-b113cfde7644" />

<img width="905" alt="image" src="https://github.com/user-attachments/assets/9adbdb0d-035d-47e5-95a0-84cacaee9421" />

# URL of the GitHub repository

https://github.com/roberto4tisantos/UofT_13TypeScriptAPI/

# URL of the functional, deployed application

https://roberto4tisantos.github.io/UofT_13TypeScriptAPI/

https://uoft13typescriptapi.netlify.app/

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

* [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md), which uses [Babel](https://babeljs.io/) for Fast Refresh
* [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc), which uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you're developing a production application, we recommend updating the configuration to enable type-aware lint rules:

* Configure the top-level `parserOptions` property as follows:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

* Replace `plugin:@typescript-eslint/recommended` with `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`.
* Optionally, add `plugin:@typescript-eslint/stylistic-type-checked`.
* Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` and `plugin:react/jsx-runtime` to the `extends` list.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
