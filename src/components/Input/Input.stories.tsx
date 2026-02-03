import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { FormField } from "../FormField/FormField";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  args: {
    placeholder: "Type here...",
  },
  argTypes: {
    size: { control: "radio", options: ["sm", "md", "lg"] },
    error: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Playground: Story = {};

export const WithFormField: Story = {
  args: {
    placeholder: "Type here...",
    error: false,
    disabled: false,
  },
  render: (args) => (
    <FormField label="Username" helperText="Enter your username" error={args.error ? "Error message" : undefined}>
      <Input {...args} />
    </FormField>
  ),
};