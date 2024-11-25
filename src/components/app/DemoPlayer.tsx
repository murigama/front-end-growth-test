"use client";
import { useRef } from "react";

import Player from "@/assets/demo.svg";

interface DemoPlayerProps {
  audioUrl: string;
}

export default function DemoPlayer({ audioUrl }: DemoPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };

  return (
    <div className="mb-10">
      <p className="text-[#858585] mb-3 text-sm">try now</p>
      <div onClick={handlePlay}>
        <Player />
        <audio ref={audioRef} src={audioUrl} preload="auto" />
      </div>
    </div>
  );
}
