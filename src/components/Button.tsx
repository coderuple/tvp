import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Text from "./Text";

const buttonVariants = cva(
  "inline-flex no-underline items-center justify-center whitespace-nowrap rounded-[var(--radius)] font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  ",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:opacity-90",
        background: "bg-background text-foreground",
        destructive:
          "bg-destructive text-destructive-foreground hover:opacity-90",
        outline:
          "border border-input bg-none hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:opacity-90",
        white: "bg-white text-foreground text-primary",

        ghost: "bg-none hover:bg-none",
        link: "text-primary underline-offset-4 hover:underline",
        linkSecondary: "text-secondary underline-offset-4 hover:underline",
        outlineWhite:
          "border border-white border-input bg-none text-white hover:bg-accent hover:opacity-80",
      },
      size: {
        default: "h-14  px-10 text-base",
        sm: "h-10 px-6 py-2 text-base",
        lg: "h-16  px-10 text-xl",
        icon: "h-10 w-10",
      },
      isFull: {
        true: "w-full justify-center",
        false: "w-auto",
        onMobile: "w-full justify-center md:w-max",
      },
      noPadding: {
        true: "p-0",
        false: "",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
      isFull: "onMobile",
      noPadding: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;

  href?: string;
  image?: ImageType;
  viewAs?: "button" | "link";
}

const Button = React.forwardRef<HTMLButtonElement | typeof Link, ButtonProps>(
  ({
    className,
    noPadding,
    variant,
    isFull,
    size,
    asChild = false,
    image,
    viewAs = "button",
    href,

    ...props
  }) => {
    const Comp = asChild ? Slot : "button";

    const noChildren = !props.children;

    // IconLeft =
    //   typeof IconLeft === "string" ? (
    //     <Image src={IconLeft} alt={""} />
    //   ) : (
    //     IconLeft
    //   );
    // IconRight =
    //   typeof IconRight === "string" ? (
    //     <Image src={IconRight} alt={""} />
    //   ) : (
    //     IconRight
    //   );

    if (image?.src && noChildren) {
      size = "icon";
      variant = "ghost";
    }

    if (viewAs == "link" || href) {
      return (
        <Link
          className={cn(
            buttonVariants({
              variant,
              isFull,

              size,
              noPadding,
              className,
            })
          )}
          href={href ?? ""}
          target={`${
            href
              ? href.startsWith("/") || href.startsWith("#")
                ? "_self"
                : "_blank"
              : ""
          }`}
        >
          <>
            <Text as="span" value={props.children as string} />
            {image && (
              <Image
                className={noChildren ? "" : "ml-2"}
                src={image.src}
                alt=""
                width={image.width}
                height={image.height}
              />
            )}
          </>
        </Link>
      );
    }
    return (
      <>
        <Comp
          className={buttonVariants({
            variant,
            size,
            isFull,

            className,
          })}
          {...props}
        >
          <Text as="span">{props.children}</Text>
          {image && (
            <Image
              className={noChildren ? "" : "ml-3"}
              src={image.src}
              alt=""
              width={image.width}
              height={image.height}
            />
          )}
        </Comp>
      </>
    );
  }
);
Button.displayName = "ButtonOrLink";

const ButtonOrLink = Button;

export default ButtonOrLink;
export { Button, buttonVariants };
