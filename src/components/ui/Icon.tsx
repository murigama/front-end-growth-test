import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YouTubeIcon,
  TikTokIcon,
  LinkedInIcon,
} from "@/assets/icons";
interface IconProps {
  name:
    | "facebook"
    | "instagram"
    | "twitter"
    | "youTube"
    | "tikTok"
    | "linkedIn";
  className?: string;
}
export default function Icon({ name, className, ...svgProps }: IconProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icons: Record<IconProps["name"], any> = {
    facebook: <FacebookIcon className={className} {...svgProps} />,
    instagram: <InstagramIcon className={className} {...svgProps} />,
    twitter: <TwitterIcon className={className} {...svgProps} />,
    youTube: <YouTubeIcon className={className} {...svgProps} />,
    tikTok: <TikTokIcon className={className} {...svgProps} />,
    linkedIn: <LinkedInIcon className={className} {...svgProps} />,
  };

  return Icons[name];
}
