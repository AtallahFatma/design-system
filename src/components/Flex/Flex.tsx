import React from "react";

export type FlexProps = Omit<React.HTMLAttributes<HTMLDivElement>, "children"> & {
  direction?: "row" | "column";
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between" | "around";
  gap?: number | string;
  wrap?: boolean;
  children?: React.ReactNode;
};

const alignMap = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch",
  baseline: "baseline",
};

const justifyMap = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  between: "space-between",
  around: "space-around",
};

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      direction = "row",
      align = "stretch",
      justify = "start",
      gap,
      wrap = false,
      style,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={className}
        style={{
          display: "flex",
          flexDirection: direction,
          alignItems: alignMap[align],
          justifyContent: justifyMap[justify],
          gap,
          flexWrap: wrap ? "wrap" : "nowrap",
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Flex.displayName = "Flex";
