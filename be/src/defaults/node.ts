export const nodeBase = {
  folders: [
    {
      type: "folder",
      path: "/project/src",
      action: "create",
    },
    {
      type: "folder",
      path: "/project/src/controllers",
      action: "create",
    },
    {
      type: "folder",
      path: "/project/src/services",
      action: "create",
    },
    {
      type: "folder",
      path: "/project/src/routes",
      action: "create",
    },
    {
      type: "folder",
      path: "/project/src/middlewares",
      action: "create",
    },
    {
      type: "folder",
      path: "/project/src/models",
      action: "create",
    },
    {
      type: "folder",
      path: "/project/src/config",
      action: "create",
    },
    {
      type: "folder",
      path: "/project/src/utils",
      action: "create",
    },
  ],
  files: [
    {
      type: "file",
      path: "/project/package.json",
      action: "write",
      code: '{\n  "name": "typescript-node-app",\n  "version": "1.0.0",\n  "main": "dist/index.js",\n  "scripts": {\n    "dev": "ts-node-dev --respawn src/index.ts",\n    "build": "tsc",\n    "start": "node dist/index.js"\n  },\n  "dependencies": {\n    "express": "^4.18.2",\n    "dotenv": "^16.3.1"\n  },\n  "devDependencies": {\n    "typescript": "^5.2.2",\n    "ts-node": "^10.9.1",\n    "ts-node-dev": "^2.0.0"\n  }\n}',
    },
    {
      type: "file",
      path: "/project/tsconfig.json",
      action: "write",
      code: '{\n  "compilerOptions": {\n    "target": "ES6",\n    "module": "CommonJS",\n    "outDir": "./dist",\n    "rootDir": "./src",\n    "strict": true\n  }\n}',
    },
    {
      type: "file",
      path: "/project/.gitignore",
      action: "write",
      code: "node_modules/\n.env\n/dist",
    },
    {
      type: "file",
      path: "/project/.env",
      action: "write",
      code: "PORT=3000\n",
    },
    {
      type: "file",
      path: "/project/src/index.ts",
      action: "write",
      code: "import express from 'express';\nimport dotenv from 'dotenv';\n\ndotenv.config();\n\nconst app = express();\nconst PORT = process.env.PORT || 3000;\n\napp.use(express.json());\n\napp.get('/', (req, res) => {\n  res.send('Hello, TypeScript Node.js!');\n});\n\napp.listen(PORT, () => {\n  console.log(`Server Running`);\n});",
    },
    {
      type: "file",
      path: "/project/src/routes/index.ts",
      action: "write",
      code: "import { Router } from 'express';\nimport exampleRoute from './example.route';\n\nconst router = Router();\n\nrouter.use('/example', exampleRoute);\n\nexport default router;",
    },
    {
      type: "file",
      path: "/project/src/routes/example.route.ts",
      action: "write",
      code: "import { Router } from 'express';\nimport { exampleController } from '../controllers/example.controller';\n\nconst router = Router();\n\nrouter.get('/', exampleController);\n\nexport default router;",
    },
    {
      type: "file",
      path: "/project/src/controllers/example.controller.ts",
      action: "write",
      code: "import { Request, Response } from 'express';\n\nexport const exampleController = (req: Request, res: Response) => {\n  res.json({ message: 'Example route working!' });\n};",
    },
    {
      type: "file",
      path: "/project/src/middlewares/logger.ts",
      action: "write",
      code: "import { Request, Response, NextFunction } from 'express';\n\nexport const logger = (req: Request, res: Response, next: NextFunction) => {\n  console.log('Running');\n  next();\n};",
    },
    {
      type: "file",
      path: "/project/src/models/example.model.ts",
      action: "write",
      code: "export interface Example {\n  id: number;\n  name: string;\n}",
    },
    {
      type: "file",
      path: "/project/src/services/example.service.ts",
      action: "write",
      code: "import { Example } from '../models/example.model';\n\nconst exampleData: Example[] = [\n  { id: 1, name: 'Example 1' },\n  { id: 2, name: 'Example 2' }\n];\n\nexport const getExamples = (): Example[] => {\n  return exampleData;\n};",
    },
    {
      type: "file",
      path: "/project/src/config/config.ts",
      action: "write",
      code: "import dotenv from 'dotenv';\n\ndotenv.config();\n\nexport const config = {\n  port: process.env.PORT || 3000\n};",
    },
    {
      type: "file",
      path: "/project/src/utils/helpers.ts",
      action: "write",
      code: "export const formatResponse = (message: string, data?: any) => {\n  return { message, data };\n};",
    },
  ],
};
