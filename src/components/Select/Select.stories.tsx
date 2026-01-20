import type { Meta, StoryObj } from "@storybook/react";
import  { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  args: {
    options: [
      { label: "France", value: "fr" },
      { label: "Morocco", value: "ma" },
      { label: "USA", value: "us" },
    ],
  },
  argTypes: {
    size: { control: "radio", options: ["sm", "md", "lg"] },
    error: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Playground: Story = {};
