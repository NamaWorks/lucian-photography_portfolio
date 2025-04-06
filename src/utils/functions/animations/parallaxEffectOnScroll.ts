export const parallaxEffectOnScroll = (
  element: HTMLElement,
  maxMovement: number = 120
) => {
  let scrollTimeout: number | null = null;
  let scrollAmount = 0;

  const handleWheelParallax = (event: WheelEvent) => {
    event.preventDefault();
    scrollAmount += event.deltaY;
    if (!scrollTimeout) {
      scrollTimeout = window.requestAnimationFrame(smoothMove);
    }
  };

  const smoothMove = () => {
    const elementCurrentPos = Number(element.style.top.replace("px", ""));
    if (
      (scrollAmount > 0 && elementCurrentPos > -maxMovement) ||
      (scrollAmount < 0 && elementCurrentPos < maxMovement)
    ) {
      element.style.top = `${
        elementCurrentPos - scrollAmount * 0.2
      }px`;
      scrollAmount *= 0.4;
      if (Math.abs(scrollAmount) > 0.5) {
        scrollTimeout = window.requestAnimationFrame(smoothMove);
      } else {
        scrollTimeout = null;
        scrollAmount = 0;
      }
    } else {
      scrollTimeout = null;
      scrollAmount = 0;
    }
  };

  window.addEventListener("wheel", handleWheelParallax, { passive: false });
};

// -------------------- FOR SCROLL EVENT INSTEAD OF WHEEL EVENT

// export const parallaxEffectOnScroll = (
//   element: HTMLElement,
//   maxMovement: number = 120
// ) => {
//   let scrollTimeout: number | null = null;
//   let lastScrollTop = window.scrollY;

//   const handleScrollParallax = () => {
//     const currentScrollTop = window.scrollY;
//     const scrollDelta = currentScrollTop - lastScrollTop;
//     lastScrollTop = currentScrollTop;

//     if (!scrollTimeout) {
//       scrollTimeout = window.requestAnimationFrame(() => smoothMove(scrollDelta));
//     }
//   };

//   const smoothMove = (scrollDelta: number) => {
//     const elementCurrentPos = Number(element.style.top.replace("px", ""));

//     console.log(
//       elementCurrentPos,
//       scrollDelta,
//       elementCurrentPos + scrollDelta
//     );

//     // Updated condition to allow scrolling in the opposite direction
//     if (
//       (scrollDelta > 0 && elementCurrentPos > -maxMovement) ||
//       (scrollDelta < 0 && elementCurrentPos < maxMovement)
//     ) {
//       element.style.top = `${
//         elementCurrentPos - scrollDelta * 0.5
//       }px`;
//       if (Math.abs(scrollDelta) > 0.5) {
//         scrollTimeout = window.requestAnimationFrame(() => smoothMove(scrollDelta * 0.4));
//       } else {
//         scrollTimeout = null;
//       }
//     } else {
//       scrollTimeout = null;
//     }
//   };

//   window.addEventListener("scroll", handleScrollParallax, { passive: true });
// };
