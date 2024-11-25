import Icon from "@/components/ui/Icon";

export default function SliderNavigation() {
  return (
    <div className="flex gap-4">
      <button className="swiper-button-prev w-11 h-11 bg-white rounded-full disabled:opacity-40 flex items-center justify-center">
        <Icon name="arrow-left" className="w-6 h-6 text-black" />
      </button>
      <button className="swiper-button-next w-11 h-11 bg-white rounded-full disabled:opacity-40 flex items-center justify-center">
        <Icon name="arrow-right" className="w-6 h-6 text-black" />
      </button>
    </div>
  );
}
