import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true,
      exports: "named",
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  external: [
    "react",
    "react-dom",
    "@radix-ui/react-slot",
    "class-variance-authority",
    "clsx",
    "tailwind-merge",
    "lucide-react",
  ],
  plugins: [
    resolve({
      browser: true,
    }),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: false,
      exclude: ["**/*.test.*", "**/*.spec.*"],
    }),
  ],
};
