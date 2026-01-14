import "../src/index.css";
import type { Preview } from "@storybook/react-vite";
import { useEffect } from "react";

// I didn’t use @storybook/addon-themes because the design system is token-driven and uses CSS variables.
// Storybook just reflects the same theming mechanism as the real application by toggling data-theme, which keeps components pure and avoids Storybook-specific abstractions.

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: [
        { value: "light", title: "Light" },
        { value: "dark", title: "Dark" },
      ],
      showName: true,
    },
  },
  parameters: {
  backgrounds: {
    disable: true,
  },
},
};

const preview: Preview = {
  decorators: [
    (StoryFn, context) => {
      const theme = context.globals.theme;

      useEffect(() => {
        document.documentElement.setAttribute(
          "data-theme",
          theme === "dark" ? "dark" : ""
        );
      }, [theme]);

      return <div className="min-h-screen bg-background text-foreground p-6">
        <StoryFn />
      </div>
    },
  ],
};

export default preview;
