import type { Meta, StoryObj } from "@storybook/react";
import { Flex as FlexDiv } from "./Flex";

const meta: Meta<typeof FlexDiv> = {
  title: "Components/Flex",
  component: FlexDiv,
  argTypes: {
    direction: {
      control: "radio",
      options: ["row", "column"],
    },
    align: {
      control: "radio",
      options: ["start", "center", "end", "stretch", "baseline"],
    },
    justify: {
      control: "radio",
      options: ["start", "center", "end", "between", "around"],
    },
    gap: {
      control: "text",
    },
    wrap: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof FlexDiv>;

export const Playground: Story = {
  args: {
    direction: "row",
    align: "start",
    justify: "between",
    gap: "1rem",
    wrap: false,
  }, 
  render: (args) => (
    <FlexDiv {...args}>
      <div style={{ background: "#eee", padding: "1rem" }}>Item 1</div>
      <div style={{ background: "#ddd", padding: "1rem" }}>Item 2</div>
      <div style={{ background: "#ccc", padding: "1rem" }}>Item 3</div>
    </FlexDiv>
  ),
};

export const Column: Story = {
  args: {
    direction: "column",
    align: "stretch",
    justify: "start",
    gap: "0.75rem",
  },
  render: (args) => (
    <FlexDiv {...args}>
      <div style={{ background: "#eee", padding: "1rem" }}>Item A</div>
      <div style={{ background: "#ddd", padding: "1rem" }}>Item B</div>
      <div style={{ background: "#ccc", padding: "1rem" }}>Item C</div>
    </FlexDiv>
  ),
};

export const Wrap: Story = {
  args: {
    gap: "0.5rem",
    wrap: true,
  },
  render: (args) => (
    <FlexDiv {...args} style={{ maxWidth: 260, border: "1px dashed #ddd", padding: "0.5rem" }}>
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} style={{ background: "#f5f5f5", padding: "0.5rem 0.75rem" }}>
          Chip {index + 1}
        </div>
      ))}
    </FlexDiv>
  ),
};