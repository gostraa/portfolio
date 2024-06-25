//footer

const defaultAnimation = {
  initial: {
    x: 50,
    opacity: 0,
  },
  animate: () => ({
    x: 0,
    opacity: 1,
    transition: { delay: 0.5 },
  }),
};
export const animationSettingsFooter = {
  variants: defaultAnimation,
  whileInView: "animate",
  initial: "initial",
  viewport: { once: false },
};

//skils list

const listVariants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      type: "spring",
    },
  }),
};

export const animationSettingsSkills = {
  variants: listVariants,
  whileInView: "animate",
  initial: "initial",
  viewport: { once: true },
};

//project modal

export const ModalVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto" },
};

export const animationSettingsModal = {
  variants: ModalVariants,
  animate: "visible",
  initial: "hidden",
  transition: {
    bounce: 0.9,
    duration: 0.5,
  },
  style: { overflow: "hidden" },
};

// navigation menu

export const NavigateVariants = {
  visible: (width = 1200) => ({
    clipPath: `circle(${width}px at calc(100% - 40px) 40px)`,
    transition: {
      type: "spring",
      stiffness: 30,
      restDelta: 2,
    },
  }),
  hidden: {
    clipPath: "circle(20px at calc(100% - 35px) 40px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 50,
    },
  },
};

export const animationSettingsNavigate = {
  variants: NavigateVariants,
  animate: "visible",
  initial: "hidden",
  transition: {
    bounce: 0.9,
    duration: 0.5,
  },
  style: { overflow: "hidden" },
  exit: "hidden",
};

//settings for project list
export const settings = {
  dots: false,
  infinite: false,
  speed: 400,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
      },
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
      },
    },
  ],
};

// styles for header links

export const linkStyle = {
  cursor: "pointer",
};

export const iconStyles = {
  width: "30px",
  height: "30px",
  cursor: "pointer",
};

export const linkSettings = {
  offset: -150,
  smooth: true,
  duration: 500,
  style: linkStyle,
};

// skills array

export const skillsArr = [
  "HTML5",
  "CSS",
  "CSS-Grid",
  "Responsive/Adaptive Design",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Redux Toolkit",
  "Next.js",
  "Styled Components",
  "Framer Motion",
  "i18n",
  "REST API",
  "NestJS",
];
