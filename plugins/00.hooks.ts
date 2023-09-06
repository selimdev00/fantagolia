export default defineNuxtPlugin((nuxtApp) => {
  const { setLoading } = useLoading();

  nuxtApp.hook("page:finish", () => {
    console.log("some");
    setLoading(false);
  });
});