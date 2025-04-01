export const linesTextAnimation = (element: HTMLElement) => {
  let moveAmount = 80;
  let opacityAnimated = 1;
  let timeoutA: number | null;

  const move = () => {
    if(element){
      element.style.transform = `translateY(${moveAmount * 0.9}px)`;
      element.style.opacity = (1 - opacityAnimated).toString();
    }

    opacityAnimated *= 0.95;
    moveAmount *= 0.95;

    if (Math.abs(moveAmount) > 0.5) {
      timeoutA = requestAnimationFrame(move);
    } else {
      timeoutA = null;
      cancelAnimationFrame(Number(timeoutA));
    }
  };

  move();
};