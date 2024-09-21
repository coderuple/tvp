type HideableType = "header" | "footer" | "navigation" | "give";

type ThemeType = import("react").CSSProperties & {
  "--primary": string;
  "--primary-foreground": string;
  "--secondary": string;
  "--secondary-foreground": string;

  "--radius": string;
  "--background": string;
  "--foreground": string;

  "--tertiary": string;
  "--tertiary-foreground": string;
  "--footer": string;
  "--footer-foreground": string;
  "--card-radius": string;
};
interface SiteType {
  hide?: HideableType[];
  styles?: string;
  banner?: Array<{
    message: string;
  }>;
  icons?: {
    icon: [
      {
        url: string;
      }
    ];
  };

  metaData?: import("next").Metadata;
  title: string;
  description?: string;
  banner: [
    {
      message: "Join us <a href='https://www.youtube.com/@majestycourtrccg/streams'>live online</a> every Sunday at 10 am!";
    }
  ];
  logo?: string;
  navigation?: NavigationType;
  cta: Array<LinkType & { image?: ImageType }>;

  sections: SectionType[];
  footer: {
    logo?: string;
    text?: string;

    navigation: NavigationType[];
  };

  theme: {
    light: ThemeType;
    dark?: ThemeType;
  };
}
interface NavigationType {
  title: string;
  links: NavigationLinkType[];
}

type ImageRatioType = { ratio?: "16By9" | "9By16" | "1By1" };
type NavigationLinkType = LinkType & { sub?: Omit<NavigationType, "sub">[] };

type ColorVariantType =
  | "default"
  | "secondary"
  | "primary"
  | "tertiary"
  | "ghost"
  | "ghostDefault"
  | "white"
  | "primaryLight"
  | "primaryLighter"
  | "primaryLightest"
  | "background";
interface LinkType {
  name?: string;
  href: string;
  value?: string;
  viewAs?: "link" | "button";
  align?: AlignMentType;
  hideOnMobile?: boolean;

  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "background"
    | "ghost"
    | "link"
    | "white"
    | "linkSecondary"
    | "outlineWhite";
}

interface ImageType {
  src: string;
  width?: number;
  height?: number;
  isIcon?: boolean;
  isSVG?: boolean;
  alt?: string;
}
interface CTAProps extends VariantProps<typeof alignmentVariants> {
  align?: AlignMentType;
  wrap?: boolean;

  action: CardType["action"];
}
interface IframeType {
  src: string;
  attributes?: Record<string, string | number>;
  style?: Record<string, string | number>;
}

type sizeType = "none" | "default" | "sm" | "default" | "md" | "lg" | "xl";
interface CardType {
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "ghostDefault"
    | "ghost"
    | "white"
    | "tertiary";
  link?: Pick<LinkType, "href">;

  // variants?:  import("../lib/animation/variants.ts");
  size: sizeType;

  title?: TitleType;
  subTitle?: SubtitleType;
  content?: ContentType;
  align?: AlignMentType;
  vAlign?: VerticalAlignType;
  layoutSpan?: LayoutSpanType;
  buttonAlign?: AlignMentType;

  width?: "none" | "sm" | "md" | "default" | "lg";
  height?: "none" | "sm" | "default" | "lg";
  spacing?: "none" | "sm" | "default" | "lg";
  padding?: "sm" | "default" | "md" | "none";
  shadow?: ShadowType;
  borderRadius?: "noneOnMobile" | "none" | "sm" | "md" | "default" | "lg";

  wrap?: boolean;

  group?: { value: string; title?: string }[];
  iframe?: IframeType;
  video?: { src: string };
  image?: {
    viewAs?: "image" | "background";
  } & ImageType &
    ImageRatioType;

  action?: Array<LinkType & { image?: ImageType; template?: "copy" }>;
}

type GridType = 0 | 1 | 2 | 3 | 4;
type LayoutSpanType = 0 | 1 | 2 | 3 | 4;
type TextVariantType =
  | "default"
  | "primary"
  | "secondary"
  | "white"
  | "background";
type AlignMentType = "center" | "between" | "left" | "right" | "start";
type VerticalAlignType = "start" | "end" | "center" | "stretch";

type ShadowType = "none" | "sm" | "default" | "md" | "lg";
interface TitleType {
  value: string;
  viewAs?: string;
  variant?: TextVariantType;
  align?: AlignMentType;
  useThemSize?: boolean;
}

interface SubtitleType {
  value: string;
  viewAs?: string;
  variant?: TextVariantType;
  align?: AlignMentType;
}

interface ContentType {
  value: string;
  viewAs?: string;
  variant?: TextVariantType;
  align?: AlignMentType;
}
interface SectionType {
  id?: string;
  style?: object;
  title?: TitleType;
  subtitle?: SubtitleType;
  action?: LinkType;
  autoPlay?: boolean;
  image?: ImageType;
  viewCardAs?: "grid" | "flex" | "carousel" | "tab" | "default" | "stack";
  layout?: GridType;

  gap?: sizeType;
  actionPosition?: "top" | "bottom";
  align?: AlignMentType;
  variant?: ColorVariantType;
  cards?: CardType[];
  noPadding?: "onMobile" | boolean;
  fullWidth?: boolean | "onMobile";
}

interface PageType {
  slug: string;
  title?: TitleType;
  variant?: CardType["variant"];
  hidePageHeader?: boolean;
  align?: AlignMentType;
  vAlign?: CardType["vAlign"];
  buttonAlign?: AlignMentType;

  description?: CardType["subTitle"] & { hide?: boolean };
  image?: CardType["image"] & { hide?: boolean };

  action?: Array<LinkType & { image?: ImageType }>;
  content?: ContentType & {
    align?: AlignMentType;
  } & { vAlign?: CardType["vAlign"] };
  sections?: SectionType[];
  globalSections?: boolean;
}

type EventTime = {
  time: number | string;
  meridiem: "am" | "pm";
};
interface EventType {
  slug: string;
  title: string;
  description?: string;
  date: string | number;
  eventType?: "regular" | "fixed";
  image?: CardType["image"];
  startTime: EventTime;
  endTime?: EventTime;
  onlineLink?: LinkType[];
  address?: Array<
    | {
        street: string;

        number: number;
        code?: string;
        city?: string;
        country: string;
        geo?: {
          lat: number;
          lng: number;
        };
      }
    | string
    | LinkType
  >;
  action?: CardType["action"];
}
