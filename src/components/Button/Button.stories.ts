import type { Meta, StoryObj } from "@storybook/react";
import { fn } from 'storybook/test';
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    isLoading: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Playground: Story = {
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
    isLoading: false,
    onClick: fn(),
  },
};
