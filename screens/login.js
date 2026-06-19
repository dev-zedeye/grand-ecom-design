window.LoginScreen = {
  renderVals(state, setState) {
    const { activeTab, showPw } = state;
    const isEmail = activeTab === 'email';
    const isPhone = activeTab === 'phone';

    const activeTabStyle = {
      flex: 1,
      height: '48px',
      borderRadius: '16px',
      background: 'var(--color-secondary)',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '7px',
      fontWeight: '700',
      color: '#fff',
      fontSize: '14px',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      boxShadow: '0 2px 12px rgba(var(--color-secondary-rgb),0.25)',
      transition: 'all 0.22s ease',
      letterSpacing: '0.1px',
    };

    const inactiveTabStyle = {
      flex: 1,
      height: '48px',
      borderRadius: '16px',
      background: 'transparent',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '7px',
      fontWeight: '500',
      color: 'var(--color-text-faint)',
      fontSize: '14px',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      transition: 'all 0.22s ease',
      letterSpacing: '0.1px',
    };

    return {
      isLoginScreen: state.currentScreen === 'login',

      isEmail,
      isPhone,

      emailTabStyle:     isEmail ? activeTabStyle : inactiveTabStyle,
      phoneTabStyle:     isPhone ? activeTabStyle : inactiveTabStyle,
      emailTabIconColor: isEmail ? '#fff' : 'var(--color-text-faint)',
      phoneTabIconColor: isPhone ? '#fff' : 'var(--color-text-faint)',

      showPw,
      hidePw: !showPw,
      pwType: showPw ? 'text' : 'password',

      togglePw:           () => setState({ showPw: !state.showPw }),
      switchToEmail:      () => setState({ activeTab: 'email' }),
      switchToPhone:      () => setState({ activeTab: 'phone' }),
      backToCountry:      () => setState({ currentScreen: 'country' }),
      goToLocation:       () => setState({ currentScreen: 'location' }),
      goToForgotPassword: () => setState({ currentScreen: 'forgotPassword', fpState: 'default' }),

      showSocialLogin: false,
      showGuestLogin: true,
    };
  },
};
