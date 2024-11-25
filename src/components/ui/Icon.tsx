import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YouTubeIcon,
  TikTokIcon,
  LinkedInIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  OffloadDeviceIcon,
  MusicControlIcon,
  PlayOnRepeatIcon,
  LockIcon,
  RocketIcon,
  FlashIcon,
  ArrowUp,
} from "@/assets/icons";
interface IconProps {
  name:
    | "facebook"
    | "instagram"
    | "twitter"
    | "youTube"
    | "tikTok"
    | "linkedIn"
    | "arrow-right"
    | "arrow-left"
    | "offload-device"
    | "music-control"
    | "play-on-repeat"
    | "lock"
    | "rocket"
    | "flash"
    | "arrow-up";
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
    "arrow-left": <ArrowLeftIcon className={className} {...svgProps} />,
    "arrow-right": <ArrowRightIcon className={className} {...svgProps} />,
    "offload-device": <OffloadDeviceIcon className={className} {...svgProps} />,
    "music-control": <MusicControlIcon className={className} {...svgProps} />,
    "play-on-repeat": <PlayOnRepeatIcon className={className} {...svgProps} />,
    lock: <LockIcon className={className} {...svgProps} />,
    rocket: <RocketIcon className={className} {...svgProps} />,
    flash: <FlashIcon className={className} {...svgProps} />,
    "arrow-up": <ArrowUp className={className} {...svgProps} />,
  };

  return Icons[name];
}
