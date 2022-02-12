module.exports = {
  stories: [
    "../../metaui/src/**/*.stories.mdx",
    "../../metaui/src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  babel: async (options) => ({
    ...options,
    plugins: [
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-private-methods",
    ],
  }),
  typescript: {
    reactDocgen: "none",
  },
  framework: "@storybook/react",
  core: {
    builder: "storybook-builder-vite",
  },
}
