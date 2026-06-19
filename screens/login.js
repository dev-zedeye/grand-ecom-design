window.LoginScreen = {
  renderVals(state, setState) {
    const { activeTab, showPw } = state;
    const isEmail = activeTab === 'email';
    const isPhone = activeTab === 'phone';

    const activeTabStyle = {
      flex: 1,
      height: '48px',
      borderRadius: '16px',
      background: '#fff',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '7px',
      fontWeight: '700',
      color: '#E53935',
      fontSize: '14px',
      cursor: 'pointer',
      fontFamily: "var(--font-body)",
      boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
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
      color: '#A0A0B8',
      fontSize: '14px',
      cursor: 'pointer',
      fontFamily: "var(--font-body)",
      transition: 'all 0.22s ease',
      letterSpacing: '0.1px',
    };

    return {
      isLoginScreen: state.currentScreen === 'login',

      isEmail,
      isPhone,

      emailTabStyle:     isEmail ? activeTabStyle : inactiveTabStyle,
      phoneTabStyle:     isPhone ? activeTabStyle : inactiveTabStyle,
      emailTabIconColor: isEmail ? '#E53935' : '#A0A0B8',
      phoneTabIconColor: isPhone ? '#E53935' : '#A0A0B8',

      showPw,
      hidePw: !showPw,
      pwType: showPw ? 'text' : 'password',

      togglePw:      () => setState({ showPw: !state.showPw }),
      switchToEmail: () => setState({ activeTab: 'email' }),
      switchToPhone: () => setState({ activeTab: 'phone' }),
      backToCountry: () => setState({ currentScreen: 'country' }),

      showSocialLogin: false,
      showGuestLogin: true,
    };
  },
};
