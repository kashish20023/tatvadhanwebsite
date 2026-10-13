"use client";

import { DynamicFrameLayout } from "@/components/ui/dynamic-frame-layout";
import { demoFrames } from "@/components/ui/demo";

export function MotionAtelierSection() {
  return (
    <section className="relative w-full py-0 bg-transparent overflow-hidden">
      <div className="w-full">
        {/* Full-width rectangular Dynamic Frame Grid with increased height for optimal media visibility */}
        <div className="w-full h-[720px] sm:h-[900px] md:h-[1100px] lg:h-[1240px] xl:h-[1340px] overflow-hidden border-y border-[#ECE7DE]/50 bg-[#1a1714]">
          <DynamicFrameLayout
            frames={demoFrames}
            className="w-full h-full"
            hoverSize={6}
            gapSize={5}
          />
        </div>
      </div>
    </section>
  );
}

export default MotionAtelierSection;
