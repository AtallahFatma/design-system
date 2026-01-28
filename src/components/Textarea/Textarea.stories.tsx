import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";
import { FormField } from "../FormField/FormField";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  args: {
    placeholder: "Type here...",
    size: "md",
  },
  argTypes: {
    size: { control: "radio", options: ["sm", "md", "lg"] },
    error: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Playground: Story = {
  args: {
    placeholder: "Write your message…",
  },
};

export const WithFormField: Story = {
  render: () => (
    <FormField label="Message" helperText="Max 500 characters">
      <Textarea />
    </FormField>
  ),
};