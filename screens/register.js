window.RegisterScreen = {
  renderVals(state, setState) {
    const { regShowPw, regShowConfirmPw, regPhoneVerified, regShowOtpHint } = state;

    return {
      isRegisterScreen: state.currentScreen === 'register',

      regShowPw,
      regHidePw: !regShowPw,
      regPwType: regShowPw ? 'text' : 'password',
      regTogglePw: () => setState({ regShowPw: !state.regShowPw }),

      regShowConfirmPw,
      regHideConfirmPw: !regShowConfirmPw,
      regConfirmPwType: regShowConfirmPw ? 'text' : 'password',
      regToggleConfirmPw: () => setState({ regShowConfirmPw: !state.regShowConfirmPw }),

      regPhoneVerified,
      regShowOtpHint,
      regVerifyLabel: regPhoneVerified ? 'Verified ✓' : 'Verify',
      regVerifyBtnStyle: {
        flexShrink: 0,
        height: '38px',
        padding: '0 14px',
        borderRadius: '12px',
        border: 'none',
        background: regPhoneVerified ? '#22C55E' : '#E53935',
        color: '#fff',
        fontSize: '13px',
        fontWeight: '700',
        fontFamily: 'var(--font-body)',
        cursor: regPhoneVerified ? 'default' : 'pointer',
        transition: 'all 0.2s ease',
        letterSpacing: '0.1px',
        whiteSpace: 'nowrap',
      },
      regVerifyPhone: () => {
        if (state.regPhoneVerified) return;
        setState({ regShowOtpHint: true });
        setTimeout(() => {
          setState({ regPhoneVerified: true, regShowOtpHint: false });
        }, 2000);
      },

      goToRegister: () => setState({ currentScreen: 'register' }),
    };
  },
};
