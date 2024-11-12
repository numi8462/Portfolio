"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const linesArray = words.split('<br>');

  useEffect(() => {
    animate(
      "div span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(1.25),
      }
    );
  }, [animate, duration, filter]);

  const renderLines = () => {
    return (
      <motion.div ref={scope}>
        {linesArray.map((line, idx) => (
          <motion.div key={idx} style={{ display: 'inline-block' }}>
            <span
              className={`${idx === 0 ? 'text-yellow-400' : idx === 2 ? 'text-purple' : idx === 3 ? 'text-green-400' : idx === 4 ? 'text-purple' : 'dark:text-white text-black'} opacity-0`}
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {line}
            </span>
          </motion.div>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderLines()}
        </div>
      </div>
    </div>
  );
};
