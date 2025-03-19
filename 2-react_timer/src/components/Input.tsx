import { ComponentPropsWithoutRef, forwardRef } from "react";

type InputProps = {
  id: string;
  label: string;
} & ComponentPropsWithoutRef<"input">;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, ...props }: InputProps, ref) => {
    return (
      <>
        <label htmlFor={id}>{label}</label>
        <input id={id} name={id} {...props} ref={ref} />
      </>
    );
  }
);
