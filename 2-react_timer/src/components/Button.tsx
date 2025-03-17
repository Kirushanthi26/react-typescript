import { type ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  el: "button";
} & ComponentPropsWithoutRef<"button">;

type LinkProps = {
  el: "a";
} & ComponentPropsWithoutRef<"a">;

export const Button = (props: ButtonProps | LinkProps) => {
  if (props.el === "a") {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
};
