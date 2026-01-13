import type { Meta } from '@storybook/react-vite';
import { Button } from "./Button";
import type { StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
    isLoading: false,
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["primary", "secondary", "danger"],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    isLoading: {
      control: "boolean",
    },
  },
};

export default meta;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Loading: Story = {
  args: {
    children: "Loading",
    isLoading: true,
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
  },
};

