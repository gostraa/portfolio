import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useGSAP } from "@gsap/react";

export const useGSAPAnimations = (hint) => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      ".snake-line",
      { opacity: 0 },
      {
        strokeDasharray: "2600",
        strokeDashoffset: "2600",
        opacity: 1,
        duration: 10,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: hint.current,
          start: "top 75%",
          scrub: true,
        },
      }
    );
  });

  gsap.fromTo(
    hint.current,
    {
      opacity: 1,
    },
    {
      opacity: 0,
      duration: 5,
      scrollTrigger: {
        trigger: hint.current,
        start: "top 60%",
        end: "top 15%",
        scrub: true,
      },
    }
  );
};
