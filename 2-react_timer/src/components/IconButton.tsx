import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type IconButtonProps = {
  icon: ElementType;
  onClick: () => void;
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

export function IconButton({
  icon: Icon,
  children,
  ...otherProps
}: IconButtonProps) {
  return (
    <button {...otherProps}>
      <span>
        <Icon />
      </span>
      <span>{children}</span>
    </button>
  );
}
