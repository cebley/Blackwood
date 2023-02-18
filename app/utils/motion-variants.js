const slideInRight = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

const slideInLeft = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: 100 },
};

const slideInUp = {
  visible: { opacity: 1, y: 0, viewport: { once: true } },
  hidden: { opacity: 0, y: 50 },
};

const slideInDown = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -25 },
};

export { slideInRight, slideInLeft, slideInUp, slideInDown };
