import Icon from "@/components/ui/Icon";

interface SocialProps {
  items: { [key: string]: string };
}

export default function Social({ items }: SocialProps) {
  return (
    <ul className="flex gap-6 mt-8">
      {Object.entries(items).map(([name, url]) => (
        // eslint-disable-next-line react/jsx-key
        <li key={name}>
          <a href={url} className="text-white opacity-40 hover:opacity-100">
            <Icon name={name} className="w-6 h-6" />
          </a>
        </li>
      ))}
    </ul>
  );
}
