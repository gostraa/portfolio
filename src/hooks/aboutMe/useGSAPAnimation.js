import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getScrollTriggerSettings } from "helpers/getScrollTrigerSettings";
import { useGSAP } from "@gsap/react";

export const useGSAPAnimations = (container, arrow, svgContainer) => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const { start, end } = getScrollTriggerSettings();

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start,
        end,
        scrub: false,
        once: true,
      },
      onComplete: () => {
        svgContainer.current.style.opacity = 1;
        const svgs = svgContainer.current.querySelectorAll(".svg");

        gsap.fromTo(
          svgs,
          { y: "100%", opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, ease: "bounce.out" }
        );
      },
    });

    tl.fromTo(
      container.current,
      { x: "-100%", opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "circ.out" }
    ).fromTo(
      arrow.current,
      { y: "100%", x: "-100%", opacity: 0 },
      { y: 0, x: 0, opacity: 1, duration: 1, ease: "bounce.out" }
    );
  });
};
