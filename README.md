# React Design System

A production-grade design system built with React, TypeScript, Tailwind CSS, and Storybook.

## ✨ Features
- Token-based design (CSS variables)
- Light & dark mode
- Accessible components (WCAG basics)
- Typed APIs with TypeScript
- Storybook documentation
- Scalable architecture

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

## 📘 Documentation
- Live Storybook: [link]
- Design tokens aligned with Figma

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
