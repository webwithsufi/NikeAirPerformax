let tl = gsap.timeline();
gsap.set(".a", { opacity: 0, y: 10 });
gsap.set("#right img", { opacity: 0, y: 10, scale: 1.8 });

tl.from("#left", {
  opacity: 0,
  width: 0,
  duration: 1,
  ease: Expo.easeInOut,
})
  .from("#right", {
    opacity: 0,
    width: 0,
    duration: 1,
    ease: Expo.easeInOut,
  })
  .to(".a", {
    stagger: 0.3,
    opacity: 1,
    y: 0,
    duration: 1,
    delay: -1.5,
    ease: Expo.easeInOut,
  })
  .to("#right img", {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 1,
    delay: -1.4,
  });

// Responsive right img

let responsive = gsap.matchMedia();

responsive.add("(max-width: 600px)", () => {
  gsap.to("#right img", {
    scale: 0,
    duration: 1,
    ease: Expo.easeInOut,
  });
});
