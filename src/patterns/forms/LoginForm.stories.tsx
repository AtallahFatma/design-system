import type { Meta, StoryObj } from "@storybook/react";
import { action } from "storybook/actions";
import { FormField } from "../../components/FormField/FormField";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";

const meta: Meta = {
  title: "Patterns/Forms/Login",
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <form
      className="max-w-sm flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        action("onSubmit")(e);
      }}
    >
      <FormField label="Email">
        <Input type="email" placeholder="email@example.com" />
      </FormField>

      <FormField label="Password">
        <Input type="password" placeholder="••••••••" />
      </FormField>

      <Button type="submit">Login</Button>
    </form>
  ),
};

export const WithError: Story = {
  render: () => (
    <form
      className="max-w-sm flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        action("onSubmit")(e);
      }}
    >
      <FormField label="Email" error="Invalid email">
        <Input type="email" />
      </FormField>

      <FormField label="Password" error="Password is required">
        <Input type="password" />
      </FormField>

      <Button type="submit">Login</Button>
    </form>
  ),
};
