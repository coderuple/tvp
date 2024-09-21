import { cva } from "class-variance-authority";

const textAlign: Record<AlignMentType, string> = {
  center: "text-center flex justify-center",
  left: "text-left",
  right: "text-right",
  between: "text-justify",
  start: "text-start",
};

const alignVariant: Record<AlignMentType, string> = {
  left: "justify-start",
  right: "justify-end",
  center: "justify-center",
  between: "justify-between",
  start: "normal",
};

const vAlignVariant: Record<VerticalAlignType, string> = {
  start: "items-start",
  end: "items-end",
  center: "items-center",
  stretch: "items-stretch",
};
const layoutSpanVariant: Record<LayoutSpanType, string> = {
  0: "",
  1: "col-span-1 lg:col-span-1",
  2: "col-span-1 lg:col-span-2",
  3: "col-span-1 lg:col-span-3",
  4: "col-span-1 lg:col-span-3",
};

const alignmentVariants = cva("", {
  variants: {
    align: alignVariant,
  },
  defaultVariants: {
    align: "center",
  },
});

const verticalAlignmentVariants = cva("", {
  variants: {
    vAlign: vAlignVariant,
  },
  defaultVariants: {
    vAlign: "start",
  },
});
const textVariants = {
  variant: {
    default: "text-foreground",
    primary: "text-primary",
    secondary: "text-secondary",
    white: "text-white",
    background: "text-background",
  },

  align: textAlign,

  useThemeSize: {
    true: "",
  },
  defaultVariants: {
    variant: "default",
    align: "normal",
  },
};

const colorVariant: Record<ColorVariantType, string> = {
  default: "bg-background text-foreground",
  primary: "bg-primary text-primary-foreground",
  primaryLight: "bg-primary/60 text-primary-foreground",
  primaryLighter: "bg-primary/30 text-primary ",
  primaryLightest: "bg-primary/10 text-primary ",
  tertiary: "bg-tertiary text-tertiary-foreground",
  background: "bg-background text-background-foreground",

  secondary:
    "bg-secondary text-secondary-foreground hover:bg-secondary-background/90",
  ghost: "bg-none text-white",
  ghostDefault: "bg-none text-foreground",
  white: "bg-white text-foreground hover:bg-bg-white/90",
};

const shadowVariant: Record<ShadowType, string> = {
  none: "shadow-none",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-xl",
  default: "shadow",
};
const cardVariants = cva("", {
  variants: {
    variant: colorVariant,

    autoHeight: {
      true: "",
    },

    size: {
      none: "",
      sm: "min-h-[35vh] min-h-[35svh] ",
      default: " min-h-[50vh] min-h-[50svh] ",
      md: "min-h-[65vh] min-h-[65svh]   ",

      lg: "min-h-[75vh] min-h-[75svh]  ",
      xl: " min-h-[100vh] min-h-[100svh]  ",
    },

    noSpacing: {
      true: "space-0 space-y-0 space-x-0",
    },
    height: {
      none: "min-h-px",
      sm: "min-h-[50vh] min-h-[50svh]",
      md: "min-h-[50vh] min-h-[50svh]",
      lg: "min-h-screen min-h-svh",
      default: "min-h-[50vh] min-h-[50svh]",
    },
    borderRadius: {
      none: "rounded-none",
      noneOnMobile: "rounded-none md:rounded-[var(--card-radius)]",
      sm: "rounded-[calc(var(--card-radius) - 2px)]",
      md: "rounded-[calc(var(--card-radius) + 2px)]",
      lg: "rounded-[calc(var(--card-radius) + 4px)]",
      default: "rounded-[var(--card-radius)]",
    },
    width: {
      none: "min-w-0",
      sm: "w-full md:w-[75vw] lg:w-[50vw]",
      md: "w-full md:w-[100vw] lg:w-[75vw]",
      lg: "w-full  lg:w-[100vw]",
      default: "",
    },
    shadow: shadowVariant,
    // noPadding: {
    //   true: "p-0 lg:p-0",
    //   false: "p-4",
    // },
    layoutSpan: layoutSpanVariant,
    matchParent: {
      true: "h-full",
      false: "h-auto",
    },
  },
  defaultVariants: {
    variant: "default",
    width: "default",
    borderRadius: "default",

    // noPadding: true,
    shadow: "none",
    matchParent: false,
    layoutSpan: 1,
  },
  compoundVariants: [
    // Applied via:
    //   `button({ intent: "primary", size: "medium" })`
  ],
});

export {
  textVariants,
  colorVariant,
  cardVariants,
  alignVariant,
  alignmentVariants,
  shadowVariant,
  vAlignVariant,
  verticalAlignmentVariants,
};
