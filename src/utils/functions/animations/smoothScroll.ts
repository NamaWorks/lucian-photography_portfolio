export const smoothScroll = () => {
  let scrollTimeout: number | null = null;
  let scrollAmount = 0;

  const handleWheel = (event: WheelEvent) => {
    event.preventDefault();

    scrollAmount += event.deltaY;
    if (!scrollTimeout) {
      scrollTimeout = window.requestAnimationFrame(smoothStep);
    }
  };

  const smoothStep = () => {
    window.scrollBy(0, scrollAmount * 0.1);
    scrollAmount *= 0.9;
    if (Math.abs(scrollAmount) > 0.5) {
      scrollTimeout = window.requestAnimationFrame(smoothStep);
    } else {
      scrollTimeout = null;
      scrollAmount = 0;
    }
  };

  window.addEventListener('wheel', handleWheel, { passive: false });
};

// This file contains the implementation of the smoothScroll function, which enables smooth scrolling when the user uses the mouse wheel.

// Variables:

// scrollTimeout: A variable to store the ID of the requestAnimationFrame call.
// scrollAmount: A variable to accumulate the scroll amount.

// handleWheel Function:

// This function is called whenever a wheel event is detected.
// It prevents the default scrolling behavior using event.preventDefault().
// It adds the deltaY value (the amount the wheel has been scrolled) to scrollAmount.
// If scrollTimeout is not set, it calls requestAnimationFrame with the smoothStep function.

// smoothStep Function:

// This function is called repeatedly using requestAnimationFrame to create a smooth scrolling effect.
// It scrolls the window by a fraction of scrollAmount.
// It reduces scrollAmount gradually to create a deceleration effect.
// If scrollAmount is still significant, it calls requestAnimationFrame again. Otherwise, it resets scrollTimeout and scrollAmount.

// Event Listener:

// The handleWheel function is added as an event listener for the wheel event on the window object with { passive: false } to allow preventDefault().
// page.tsx
// This file contains the main Home component of your application.

// In summary, the smoothScroll function is set up to handle smooth scrolling when the user uses the mouse wheel, and it is initialized in the Home component using the useEffect hook. This ensures that the smooth scrolling functionality is applied globally when the home page is rendered.