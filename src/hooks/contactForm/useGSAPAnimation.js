import { gsap } from "gsap";

export const animateCheckmark = (messageElem, buttonElem) => {
  const tl = gsap.timeline();
  tl.fromTo(
    buttonElem.current,
    { x: 0, opacity: 1 },
    { x: "100%", opacity: 0, display: "none", duration: 0.2, ease: "circ.out" }
  ).fromTo(
    messageElem.current,
    { x: "-100%", opacity: 0 },
    {
      x: "100%",
      opacity: 1,
      display: "inline-block",
      duration: 0.2,
      ease: "circ.out",
    }
  );
};
