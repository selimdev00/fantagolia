export default defineNuxtPlugin((nuxtApp) => {
  const { setLoading } = useLoading();

  nuxtApp.hook("page:finish", () => {
    setLoading(false);
  });
});
