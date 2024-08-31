export const getScrollTriggerSettings = () => {
  let start;
  let end;

  if (window.matchMedia("(max-width: 767.9px)").matches) {
    start = "top 60%";
    end = "top 30%";
  } else if (
    window.matchMedia("(min-width: 768px) and (max-width: 1023.9px)").matches
  ) {
    start = "top 80%";
    end = "top 20%";
  } else if (window.matchMedia("(min-width: 1024px) ").matches) {
    start = "top 60%";
    end = "top 20%";
  }

  return { start, end };
};
