const loading = ref<boolean>(true);

export const useLoading = () => {
  const setLoading = (status: boolean) => {
    loading.value = status;
  };

  return { setLoading, loading };
};
