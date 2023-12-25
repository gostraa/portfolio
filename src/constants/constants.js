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
  visible: (width = 1000) => ({
    clipPath: `circle(${width * 2 + 200}px at calc(100% - 40px) 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  hidden: {
    clipPath: "circle(30px at calc(100% - 40px) 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 140,
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

const linkStyle = {
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
  "React",
  "Redux",
  "Redux-toolkit",
  "Styled Components",
  "Framer Motion",
  "i18n",
  "REST API",
  "GIT",
];
