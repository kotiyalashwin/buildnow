export const reactBase = {
  folders: [
    {
      type: "folder",
      path: "/project/src",
      action: "create",
    },
    {
      type: "folder",
      path: "/project/src/assets",
      action: "create",
    },
    {
      type: "folder",
      path: "/project/src/components",
      action: "create",
    },
    {
      type: "folder",
      path: "/project/src/styles",
      action: "create",
    },
    {
      type: "folder",
      path: "/project/public",
      action: "create",
    },
  ],
  files: [
    {
      type: "file",
      path: "/project/package.json",
      action: "write",
      code: '{\n  "name": "vite-react-ts-app",\n  "version": "1.0.0",\n  "private": true,\n  "scripts": {\n    "dev": "vite",\n    "build": "tsc && vite build",\n    "preview": "vite preview"\n  },\n  "dependencies": {\n    "react": "^18.0.0",\n    "react-dom": "^18.0.0"\n  },\n  "devDependencies": {\n    "typescript": "^5.0.0",\n    "vite": "^4.0.0",\n    "@vitejs/plugin-react": "^4.0.0"\n  }\n}',
    },
    {
      type: "file",
      path: "/project/tsconfig.json",
      action: "write",
      code: '{\n  "compilerOptions": {\n    "target": "ESNext",\n    "module": "ESNext",\n    "moduleResolution": "Node",\n    "strict": true,\n    "jsx": "react-jsx",\n    "outDir": "./dist"\n  },\n  "include": ["src"],\n  "exclude": ["node_modules", "dist"]\n}',
    },
    {
      type: "file",
      path: "/project/vite.config.ts",
      action: "write",
      code: "import { defineConfig } from 'vite';\nimport react from '@vitejs/plugin-react';\n\nexport default defineConfig({\n  plugins: [react()],\n  server: { port: 3000 }\n});",
    },
    {
      type: "file",
      path: "/project/.gitignore",
      action: "write",
      code: "node_modules/\ndist/\n.vscode/\n.env",
    },
    {
      type: "file",
      path: "/project/index.html",
      action: "write",
      code: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n  <title>Vite + React + TypeScript</title>\n</head>\n<body>\n  <div id="root"></div>\n  <script type="module" src="/src/main.tsx"></script>\n</body>\n</html>',
    },
    {
      type: "file",
      path: "/project/src/main.tsx",
      action: "write",
      code: "import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App';\nimport './styles/global.css';\n\nReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);",
    },
    {
      type: "file",
      path: "/project/src/App.tsx",
      action: "write",
      code: "import React from 'react';\nimport './styles/global.css';\n\nfunction App() {\n  return (\n    <div className=\"container\">\n      <h1>Welcome to Vite + React + TypeScript</h1>\n      <p>Edit <code>src/App.tsx</code> and save to test HMR updates.</p>\n    </div>\n  );\n}\n\nexport default App;",
    },
    {
      type: "file",
      path: "/project/src/styles/global.css",
      action: "write",
      code: "body {\n  margin: 0;\n  font-family: Arial, sans-serif;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background-color: #f0f0f0;\n}",
    },
    {
      type: "file",
      path: "/project/public/favicon.ico",
      action: "write",
      code: "[binary content placeholder]",
    },
    {
      type: "file",
      path: "/project/README.md",
      action: "write",
      code: "# Vite + React + TypeScript\n\nThis is a simple Vite-powered React + TypeScript project.\n\n## 🚀 Get Started\n\n### Install dependencies\n```\nnpm install\n```\n\n### Start the development server\n```\nnpm run dev\n```\n\n### Build the project\n```\nnpm run build\n```\n\n### Preview the built app\n```\nnpm run preview\n```",
    },
  ],
};
