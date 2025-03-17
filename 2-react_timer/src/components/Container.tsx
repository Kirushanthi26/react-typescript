import { ComponentPropsWithoutRef, ReactNode, type ElementType } from "react";

//we can pass any element
type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export const Container = <C extends ElementType>({
  as,
  children,
  props,
}: ContainerProps<C>) => {
  const Component = as || "div";
  return <Component {...props}>{children}</Component>;
};
