import DefaultTheme from "vitepress/theme";

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    if (!import.meta.env.SSR) {
      await import('simple-ui-vue/components/style/index')
    }
  },
};
