var img = document.querySelector("#graphic feTurbulence");
var frames = 0;
var rad = Math.PI / 60;

function AnimateBaseFrequency() {
  var baseFrequency = "0.7 0.8";
  var bfx = 0.005;
  var bfy = 0.005;
  frames += .15
  bfx += 0.006 * Math.cos(frames * rad);
  bfy += 0.006 * Math.sin(frames * rad);

  var bf = bfx.toString() + ' ' + bfy.toString();
  img.setAttributeNS(null, 'baseFrequency', bf);

  window.requestAnimationFrame(AnimateBaseFrequency);
}

window.requestAnimationFrame(AnimateBaseFrequency);