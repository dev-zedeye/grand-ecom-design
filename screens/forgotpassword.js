window.ForgotPasswordScreen = {
  renderVals(state, setState) {
    const fpState = state.fpState || 'default';

    return {
      isForgotPasswordScreen: state.currentScreen === 'forgotPassword',

      fpIsDefault: fpState === 'default',
      fpIsLoading: fpState === 'loading',
      fpIsSuccess: fpState === 'success',

      fpSendReset: () => {
        setState({ fpState: 'loading' });
        setTimeout(() => setState({ fpState: 'success' }), 1400);
      },

      fpResend: () => {
        setState({ fpState: 'loading' });
        setTimeout(() => setState({ fpState: 'success' }), 1400);
      },

      fpGoBack: () => setState({ currentScreen: 'login', fpState: 'default' }),
    };
  },
};
