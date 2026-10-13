"use client";

import { DynamicFrameLayout, type Frame } from "@/components/ui/dynamic-frame-layout";

// 5 Autoplay Videos in Cross (X) pattern + 4 Images in Diamond pattern
export const demoFrames: Frame[] = [
  // Row 0
  {
    id: 1, // Cross: Top-Left (Video - previously from 2nd row mid)
    image: "/images/Animate5.jpg",
    video: "/video/AnimateV3.MP4",
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 2, // Diamond: Top-Center (Image)
    image: "/images/Animate2.jpg",
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 3, // Cross: Top-Right (Video)
    image: "/images/Animate3.jpg",
    video: "/video/AnimateV2.MP4",
    defaultPos: { x: 8, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },

  // Row 1
  {
    id: 4, // Diamond: Middle-Left (Image)
    image: "/images/Animate4.jpg",
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 5, // Cross: Center (Video - 1st video moved to center)
    image: "/images/Animate1.jpg",
    video: "/video/AnimateV1.MP4",
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 6, // Diamond: Middle-Right (Image)
    image: "/images/Animate6.jpg",
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },

  // Row 2
  {
    id: 7, // Cross: Bottom-Left (Video)
    image: "/images/Animate7.jpg",
    video: "/video/AnimateV4.MP4",
    defaultPos: { x: 0, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 8, // Diamond: Bottom-Center (Image)
    image: "/images/Animate8.jpg",
    defaultPos: { x: 4, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 9, // Cross: Bottom-Right (Video)
    image: "/images/Animate2.jpg",
    video: "/video/AnimateV5.MP4",
    defaultPos: { x: 8, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
];

export function DemoPage() {
  return (
    <div className="h-screen w-screen bg-zinc-900">
      <DynamicFrameLayout 
        frames={demoFrames} 
        className="w-full h-full" 
        hoverSize={6}
        gapSize={4}
      />
    </div>
  );
}

export default DemoPage;
