import { build } from "esbuild";

const external = [
  "react",
  "react-dom",
  "@radix-ui/react-slot",
  "@radix-ui/react-accordion",
  "@radix-ui/react-alert-dialog",
  "@radix-ui/react-avatar",
  "@radix-ui/react-checkbox",
  "@radix-ui/react-collapsible",
  "@radix-ui/react-dialog",
  "@radix-ui/react-dropdown-menu",
  "@radix-ui/react-label",
  "@radix-ui/react-popover",
  "@radix-ui/react-progress",
  "@radix-ui/react-radio-group",
  "@radix-ui/react-scroll-area",
  "@radix-ui/react-select",
  "@radix-ui/react-separator",
  "@radix-ui/react-slider",
  "@radix-ui/react-switch",
  "@radix-ui/react-tabs",
  "@radix-ui/react-toggle",
  "@radix-ui/react-tooltip",
  "class-variance-authority",
  "clsx",
  "tailwind-merge",
  "phosphor-react",
  "react-remove-scroll",
  "aria-hidden",
];

await build({
  entryPoints: ["src/index.ts"],
  bundle: true,
  outfile: "dist/index.js",
  format: "cjs",
  platform: "neutral",
  external,
  sourcemap: true,
});

await build({
  entryPoints: ["src/index.ts"],
  bundle: true,
  outfile: "dist/index.esm.js",
  format: "esm",
  platform: "neutral",
  external,
  sourcemap: true,
});

console.log("Build complete!");
