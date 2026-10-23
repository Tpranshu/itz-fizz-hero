import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Car from "./Car";
import StatCard from "./StatCard";
import { stats } from "../data/stats";

gsap.registerPlugin(ScrollTrigger);

const HEADLINE = "WELCOME ITZ FIZZ";

// car width as a fraction of the headline row (0.22 = 22%)
const CAR_WIDTH = 0.22;

// each letter is its own span so the intro can stagger them
function Letters({ text }) {
  return text.split(" ").map((word, i) => (
    <span key={i} className="mr-[0.7em] inline-block whitespace-nowrap">
      {word.split("").map((char, j) => (
        <span key={j} className="letter inline-block">
          {char}
        </span>
      ))}
    </span>
  ));
}

const headlineStyle =
  "flex flex-wrap justify-center text-[clamp(1.6rem,5.5vw,5rem)] font-bold tracking-[0.45em]";

export default function Hero() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. intro on page load: letters first, then the stats one by one
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".letter", { y: 40, opacity: 0, duration: 0.9, stagger: 0.04 })
        .from(".stat", { y: 30, opacity: 0, duration: 0.8, stagger: 0.2 }, "-=0.3");

      // 2. scroll animation, scrubbed so it follows the scrollbar
      // (scrub: 1 adds a one second catch-up, that is the smoothing)
      const drive = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      // the car starts fully off the left edge and ends fully off the right edge
      const endX = (1 / CAR_WIDTH) * 100;
      drive.fromTo(".car", { xPercent: -100 }, { xPercent: endX, ease: "none", duration: 1 }, 0);

      // text is revealed up to the middle of the car.
      // the middle crosses the left edge at `revealStart` and the right edge at revealStart + revealLength
      const revealStart = CAR_WIDTH / 2 / (1 + CAR_WIDTH);
      const revealLength = 1 / (1 + CAR_WIDTH);
      drive.fromTo(
        ".reveal",
        { clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", ease: "none", duration: revealLength },
        revealStart
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    // tall wrapper gives us scroll distance, the inner block stays stuck to the screen
    <section ref={root} className="h-[300vh]">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center gap-16 overflow-hidden px-6">
        <div className="relative w-full">
          {/* dim version, always visible */}
          <h1 className={`${headlineStyle} text-white/15`}>
            <Letters text={HEADLINE} />
          </h1>

          {/* bright version, uncovered as the car drives past */}
          <div className={`reveal absolute inset-0 ${headlineStyle} text-white`} aria-hidden="true">
            <Letters text={HEADLINE} />
          </div>

          {/* car track */}
          <div
            className="car absolute inset-y-0 left-0 flex items-center"
            style={{ width: `${CAR_WIDTH * 100}%` }}
          >
            <Car />
          </div>
        </div>

        <div className="grid w-full max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((item, i) => (
            <StatCard key={i} value={item.value} label={item.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
