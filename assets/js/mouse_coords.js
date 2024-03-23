// graph of a gaussian that follows the mouse
const canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.append(canvas);

//scroll down
window.scrollTo(0, document.body.scrollHeight);


const ctx = canvas.getContext("2d");
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

const gaussian = (x, y, mx, my, s) => {
  const dx = x - mx;
  const dy = y - my;
  const d = Math.sqrt(dx * dx + dy * dy);
  return Math.exp(-d * d / s);
}

document.addEventListener("mousemove", e => {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  const mx = e.clientX;
  const my = e.clientY;
  const s = 10000;
  
  for (let x = 0; x < canvas.width; x += 10) {
    for (let y = 0; y < canvas.height; y += 10) {
      const g = gaussian(x, y, mx, my, s);
      ctx.fillStyle = `rgba(0, 0, 0, ${g})`;
      ctx.fillRect(x, y, 10, 10);
    }
  }
}
);





