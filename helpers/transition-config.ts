import gsap from "gsap";

import { usePageTransition } from "@/composables/usePageTransition";

const { toggleTransitionComplete } = usePageTransition();

const pageTransition = {
  name: "page-transiton",
  mode: "out-in",
  onEnter: (el: HTMLElement, done: Function) => {
    gsap.set(el, { autoAlpha: 0, duration: 0.4 });
    gsap
      .timeline({
        paused: true,
        onComplete() {
          toggleTransitionComplete(true);
          done();
        },
      })
      .to(el, { autoAlpha: 1, xPercent: 0, duration: 0.25 })
      .to(el, { scale: 1, duration: 0.25 })
      .play();
  },
  onLeave: (el: HTMLElement, done: Function) => {
    toggleTransitionComplete(false);
    gsap
      .timeline({ paused: true, onComplete: done })
      .to(el, { autoAlpha: 0, duration: 0.4 })
      .play();
  },
};

export default pageTransition;
