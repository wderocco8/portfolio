/******************** tilt.ts -> source: https://www.youtube.com/watch?v=zyBjfoJhlC4&ab_channel=TuatTranAnh ********************/

const tiltMove = (x: number, y: number) =>
  `perspective(500px) rotateX(${x}deg) rotateY(${y}deg)`; // Reduced scale for subtle effect

export const initializeTilt = async () => {
  const tiltEls = document.querySelectorAll<HTMLElement>(".tilt");

  tiltEls.forEach((tilt) => {
    const height = tilt.clientHeight;
    const width = tilt.clientWidth;
    let currentX = 0;
    let currentY = 0;

    const updateTilt = () => {
      tilt.style.transform = tiltMove(currentX, currentY);
      requestAnimationFrame(updateTilt);
    };

    tilt.addEventListener("mousemove", (e) => {
      const x = e.layerX;
      const y = e.layerY;

      // Set multiplier based on the class
      const multiplier = tilt.classList.contains("tilt-small") ? 5 : 15;

      const xRotate = multiplier * ((y - height / 2) / height); // Swapped x and y for more intuitive control
      const yRotate = -multiplier * ((x - width / 2) / width);

      currentX = xRotate;
      currentY = yRotate;
    });

    tilt.addEventListener("mouseout", () => {
      currentX = 0;
      currentY = 0;
    });

    tilt.style.transition = "transform 0.2s ease-out";
    tilt.style.transformOrigin = "center";
    requestAnimationFrame(updateTilt);
  });
};
