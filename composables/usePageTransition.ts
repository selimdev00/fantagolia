const transitionState = reactive({
  transitionComplete: false,
});

export const usePageTransition = () => {
  const toggleTransitionComplete = (value: boolean) => {
    transitionState.transitionComplete = value;
  };

  return {
    transitionState,
    toggleTransitionComplete,
  };
};
