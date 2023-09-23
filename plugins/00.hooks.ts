import AOS from "aos";

import "aos/dist/aos.css";

export default defineNuxtPlugin((nuxtApp) => {
  const { setLoading } = useLoading();

  nuxtApp.hook("page:finish", () => {
    AOS.init({
      duration: 600,
      delay: 50,
      once: false,
    });

    window.addEventListener("load", () => AOS.refresh());

    setLoading(false);
  });
});
