export const mobileMenu = {
  closed: {
    x: "100vw",
  },
  opened: {
    x: "0",
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

export const mobileMenuItem = {
  closed: {
    x: -10,
    opacity: 0,
  },
  opened: {
    x: 0,
    opacity: 1,
  },
};

export const heroSvg = {
  closed: {
    scale: 0.8,
  },
  opened: {
    scale: 1,
    transition: {
      type: "spring",
    },
  },
};

export const experienceAnimate = {
  closed: {
    x: -100,
  },
  opened: {
    x: 0,
  },
};
