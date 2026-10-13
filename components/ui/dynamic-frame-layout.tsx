"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export interface Frame {
  id: number;
  video?: string;
  image?: string;
  title?: string;
  defaultPos: { x: number; y: number; w: number; h: number };
  corner?: string;
  edgeHorizontal?: string;
  edgeVertical?: string;
  mediaSize?: number;
  borderThickness?: number;
  borderSize?: number;
  isHovered?: boolean;
}

export interface FrameComponentProps {
  video?: string;
  image?: string;
  title?: string;
  width: number | string;
  height: number | string;
  className?: string;
  corner?: string;
  edgeHorizontal?: string;
  edgeVertical?: string;
  mediaSize?: number;
  borderThickness?: number;
  borderSize?: number;
  showFrame?: boolean;
  isHovered?: boolean;
}

export function FrameComponent({
  video,
  image,
  title,
  width,
  height,
  className = "",
  corner = "",
  edgeHorizontal = "",
  edgeVertical = "",
  mediaSize = 1,
  borderThickness = 0,
  borderSize = 100,
  showFrame = false,
  isHovered = false,
}: FrameComponentProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (video && videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay policy handled silently
        });
      }
    }
  }, [video]);

  return (
    <div
      className={`relative ${className}`}
      style={{
        width,
        height,
        transition: "width 0.3s ease-in-out, height 0.3s ease-in-out",
      }}
    >
      <div className="relative w-full h-full overflow-hidden bg-[#161311]">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            zIndex: 1,
            transition: "all 0.3s ease-in-out",
            padding: showFrame ? `${borderThickness}px` : "0",
            width: showFrame ? `${borderSize}%` : "100%",
            height: showFrame ? `${borderSize}%` : "100%",
            left: showFrame ? `${(100 - borderSize) / 2}%` : "0",
            top: showFrame ? `${(100 - borderSize) / 2}%` : "0",
          }}
        >
          <div
            className="w-full h-full overflow-hidden relative flex items-center justify-center"
            style={{
              transform: `scale(${mediaSize})`,
              transformOrigin: "center",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            {/* High-res Image (rendered if no video or as fallback) */}
            {image && !video && (
              <img
                src={image}
                alt={title || ""}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500"
              />
            )}

            {/* Video Autoplays Continuously */}
            {video && (
              <video
                className="w-full h-full object-cover absolute inset-0 transition-transform duration-500"
                src={video}
                poster={image}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                ref={videoRef}
              />
            )}

            {/* Optional Title Badge */}
            {title && (
              <div className="absolute inset-0 flex items-center justify-center p-4 bg-black/40 backdrop-blur-[1px] text-center">
                <span className="font-serif italic text-white text-xl sm:text-2xl md:text-3xl tracking-wide drop-shadow-sm">
                  {title}
                </span>
              </div>
            )}
          </div>
        </div>

        {showFrame && corner && (
          <div className="absolute inset-0" style={{ zIndex: 2 }}>
            <div
              className="absolute top-0 left-0 w-16 h-16 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${corner})` }}
            />
            <div
              className="absolute top-0 right-0 w-16 h-16 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${corner})`, transform: "scaleX(-1)" }}
            />
            <div
              className="absolute bottom-0 left-0 w-16 h-16 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${corner})`, transform: "scaleY(-1)" }}
            />
            <div
              className="absolute bottom-0 right-0 w-16 h-16 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${corner})`, transform: "scale(-1, -1)" }}
            />

            <div
              className="absolute top-0 left-16 right-16 h-16"
              style={{
                backgroundImage: `url(${edgeHorizontal})`,
                backgroundSize: "auto 64px",
                backgroundRepeat: "repeat-x",
              }}
            />
            <div
              className="absolute bottom-0 left-16 right-16 h-16"
              style={{
                backgroundImage: `url(${edgeHorizontal})`,
                backgroundSize: "auto 64px",
                backgroundRepeat: "repeat-x",
                transform: "rotate(180deg)",
              }}
            />
            <div
              className="absolute left-0 top-16 bottom-16 w-16"
              style={{
                backgroundImage: `url(${edgeVertical})`,
                backgroundSize: "64px auto",
                backgroundRepeat: "repeat-y",
              }}
            />
            <div
              className="absolute right-0 top-16 bottom-16 w-16"
              style={{
                backgroundImage: `url(${edgeVertical})`,
                backgroundSize: "64px auto",
                backgroundRepeat: "repeat-y",
                transform: "scaleX(-1)",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export interface DynamicFrameLayoutProps {
  frames: Frame[];
  className?: string;
  showFrames?: boolean;
  hoverSize?: number;
  gapSize?: number;
}

export function DynamicFrameLayout({ 
  frames, 
  className = "",
  showFrames = false,
  hoverSize = 6,
  gapSize = 4
}: DynamicFrameLayoutProps) {
  const [hovered, setHovered] = useState<{ row: number; col: number } | null>(null);

  const getRowSizes = () => {
    if (hovered === null) return "4fr 4fr 4fr";
    const { row } = hovered;
    const nonHoveredSize = (12 - hoverSize) / 2;
    return [0, 1, 2].map((r) => (r === row ? `${hoverSize}fr` : `${nonHoveredSize}fr`)).join(" ");
  };

  const getColSizes = () => {
    if (hovered === null) return "4fr 4fr 4fr";
    const { col } = hovered;
    const nonHoveredSize = (12 - hoverSize) / 2;
    return [0, 1, 2].map((c) => (c === col ? `${hoverSize}fr` : `${nonHoveredSize}fr`)).join(" ");
  };

  const getTransformOrigin = (x: number, y: number) => {
    const vertical = y === 0 ? "top" : y === 4 ? "center" : "bottom";
    const horizontal = x === 0 ? "left" : x === 4 ? "center" : "right";
    return `${vertical} ${horizontal}`;
  };

  return (
    <div
      className={`relative w-full h-full ${className}`}
      style={{
        display: "grid",
        gridTemplateRows: getRowSizes(),
        gridTemplateColumns: getColSizes(),
        gap: `${gapSize}px`,
        transition: "grid-template-rows 0.4s ease, grid-template-columns 0.4s ease",
      }}
    >
      {frames.map((frame) => {
        const row = Math.floor(frame.defaultPos.y / 4);
        const col = Math.floor(frame.defaultPos.x / 4);
        const transformOrigin = getTransformOrigin(frame.defaultPos.x, frame.defaultPos.y);

        return (
          <motion.div
            key={frame.id}
            className="relative cursor-pointer"
            style={{
              transformOrigin,
              transition: "transform 0.4s ease",
            }}
            onMouseEnter={() => setHovered({ row, col })}
            onMouseLeave={() => setHovered(null)}
            onClick={() =>
              setHovered((prev) =>
                prev?.row === row && prev?.col === col ? null : { row, col }
              )
            }
          >
            <FrameComponent
              video={frame.video}
              image={frame.image}
              title={frame.title}
              width="100%"
              height="100%"
              className="absolute inset-0"
              corner={frame.corner}
              edgeHorizontal={frame.edgeHorizontal}
              edgeVertical={frame.edgeVertical}
              mediaSize={frame.mediaSize}
              borderThickness={frame.borderThickness}
              borderSize={frame.borderSize}
              showFrame={showFrames}
              isHovered={hovered?.row === row && hovered?.col === col}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
