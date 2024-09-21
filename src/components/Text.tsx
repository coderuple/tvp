// "use client";
// import { JSDOM } from "jsdom";
import type {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { textVariants } from "@/lib/variants";
// import DOMPurify from "isomorphic-dompurify";
const textVariant = cva("", { variants: textVariants });
type PolymorphicAsProp<E extends ElementType> = {
  as?: E | string;
};

type PolymorphicProps<E extends ElementType> = PropsWithChildren<
  ComponentPropsWithoutRef<E> & PolymorphicAsProp<E>
>;

const defaultElement = "p";

export type TextProps<E extends ElementType = typeof defaultElement> =
  PolymorphicProps<E> &
    VariantProps<typeof textVariant> & {
      childern?: React.ReactNode;
      value?: string;
    };

// export interface TextProps<E extends ElementType = typeof defaultElement >   {

//     color?: "primary" | "secondary";

// }

export default function Text<E extends ElementType = typeof defaultElement>({
  as,
  children,
  align,
  useThemeSize,
  variant,
  value,
  className,
  ...restProps
}: TextProps<E>) {
  const Component = as ?? defaultElement;
  let cleanedValue;

  // return (
  //   <Component
  //     {...restProps}
  //     className={cn(textVariant({ variant, resetSize, align, className }))}
  //   >
  //     {children}
  //   </Component>
  // );
  if (value) {
    // const window = new JSDOM("").window;
    //const purify = DOMPurify(window);
    // const clean = DOMPurify.sanitize(value.toString());
    cleanedValue = {
      __html: value,
    };

    return (
      <Component
        {...restProps}
        className={`${cn(
          textVariant({ variant, useThemeSize, align })
        )} ${className}`}
        dangerouslySetInnerHTML={cleanedValue}
      />
    );
  } else {
    return (
      <Component
        {...restProps}
        className={`${cn(
          textVariant({ variant, useThemeSize, align })
        )} ${className}`}
      >
        {children}
      </Component>
    );
  }
}
