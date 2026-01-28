import type { Meta, StoryObj } from "@storybook/react";
import { FormField } from "../../components/FormField/FormField";
import { Input } from "../../components/Input/Input";
import { Select } from "../../components/Select/Select";
import { Button } from "../../components/Button/Button";
import { action } from "storybook/actions";

const meta: Meta = {
  title: "Patterns/Forms/Signup",
};

export default meta;
type Story = StoryObj;

const countryOptions = [
  { label: "France", value: "fr" },
  { label: "Morocco", value: "ma" },
  { label: "USA", value: "us" },
];

export const Default: Story = {
  render: () => (
    <form className="max-w-sm flex flex-col gap-4" onSubmit={(e) => {
        e.preventDefault();
        action("onSubmit")(e);
      }}>
      <FormField label="Name">
        <Input placeholder="John Doe" />
      </FormField>

      <FormField label="Email">
        <Input type="email" />
      </FormField>

      <FormField label="Password">
        <Input type="password" />
      </FormField>

      <FormField label="Country">
        <Select options={countryOptions} />
      </FormField>

      <Button type="submit">Create account</Button>
    </form>
  ),
};

export const WithError: Story = {
  render: () => (
    <form className="max-w-sm flex flex-col gap-4" onSubmit={(e) => {
        e.preventDefault();
        action("onSubmit")(e);
      }}>
      <FormField label="Email" error="Already used">
        <Input type="email" />
      </FormField>

      <FormField label="Password" error="Too short">
        <Input type="password" />
      </FormField>

      <Button type="submit">Create account</Button>
    </form>
  ),
};
