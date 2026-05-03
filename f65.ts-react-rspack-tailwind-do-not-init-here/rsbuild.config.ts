import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
	plugins: [pluginReact()],
	source: {
		entry: {
			index: "./src/index.tsx",
		},
	},
	resolve: {
		alias: {},
		dedupe: ["react", "react-dom", "react-router-dom"],
	},
	html: {
		template: "./index.html",
	},
	output: {
		distPath: {
			root: "dist",
		},
	},
	server: {
		port: 3618,
	},
});
