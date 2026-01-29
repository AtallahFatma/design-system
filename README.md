# React Design System

A design system built with React, TypeScript, Tailwind CSS, and Storybook.

## 🔗 Live Design System

The design system is publicly accessible via Storybook:

👉 [https://my-design-system.chromatic.com](https://697b5aa76a6137e008baafce-cvxkphbqrf.chromatic.com/?path=/docs/components-select--docs)

No local setup required.

### Storybook setup
This project uses Storybook v10 core APIs without addon-essentials to avoid
ecosystem version conflicts. The setup is intentionally minimal and
compatible with future addon upgrades.

## ✨ Features
- Token-based design (CSS variables)
- Light & dark mode
- Accessible components 
- Storybook documentation

## 🧩 Components
- Button (variants, sizes, loading)
- Input (validation, error states)
- Select (validation, error, states)
- Textarea (validation, error, states)


## 🛠 Tech Stack
- React + TypeScript
- Vite
- Tailwind CSS v3
- Storybook


## 🚀 Getting Started

```bash
npm install
npm run dev
npm run storybook
```

## 📝 Forms

This design system provides accessible, composable form primitives.

### Philosophy

- Inputs are **dumb**
- FormField is **smart**
- Labels and accessibility are handled by FormField
- Components stay reusable and predictable

### Available controls

- Input
- Textarea
- Select

### Basic pattern

```tsx
<FormField
  label="Email"
  helperText="We’ll never share your email."
  error="Invalid email"
>
  <Input placeholder="email@example.com" />
</FormField>
```