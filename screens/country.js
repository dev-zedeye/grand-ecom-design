window.CountryScreen = {
  countries: [
    { id: 'kw', flag: '🇰🇼', nameEn: 'Kuwait',               nameAr: 'الكويت',                    shortEn: 'Kuwait', shortAr: 'الكويت'   },
    { id: 'uae', flag: '🇦🇪', nameEn: 'UAE',                  nameAr: 'الإمارات العربية المتحدة',   shortEn: 'UAE',    shortAr: 'الإمارات' },
    { id: 'qa',  flag: '🇶🇦', nameEn: 'Qatar',                nameAr: 'قطر',                        shortEn: 'Qatar',  shortAr: 'قطر'      },
    { id: 'sa',  flag: '🇸🇦', nameEn: 'Saudi Arabia',         nameAr: 'المملكة العربية السعودية',   shortEn: 'KSA',    shortAr: 'السعودية' },
  ],

  renderVals(state, setState) {
    const { selectedCountry, lang } = state;
    const isAr = lang === 'ar';
    const selected = this.countries.find(c => c.id === selectedCountry);

    return {
      isCountryScreen: state.currentScreen === 'country',

      dir: isAr ? 'rtl' : 'ltr',
      btnText: isAr ? 'متابعة' : 'Continue',

      btnStyle: {
        height: '52px',
        padding: '0 36px',
        background: selected ? '#E53935' : '#D0D0CE',
        border: 'none',
        borderRadius: '26px',
        color: selected ? '#fff' : '#aaa',
        fontSize: '15px',
        fontWeight: '700',
        cursor: selected ? 'pointer' : 'default',
        fontFamily: 'var(--font-body)',
        letterSpacing: '0.2px',
        transition: 'background 0.3s ease, color 0.3s ease, transform 0.12s ease',
        boxShadow: selected ? '0 8px 24px rgba(229,57,53,0.28)' : 'none',
      },
      btnActiveStyle: selected ? 'transform:scale(0.97)' : '',

      toggleEnStyle: {
        padding: '6px 12px',
        borderRadius: '16px',
        background: !isAr ? '#fff' : 'transparent',
        color: !isAr ? '#E53935' : '#888',
        border: 'none',
        fontWeight: !isAr ? '700' : '500',
        fontSize: '12px',
        cursor: 'pointer',
        transition: 'all 0.22s ease',
        fontFamily: 'var(--font-body)',
        letterSpacing: '0.3px',
        boxShadow: !isAr ? '0 1px 4px rgba(0,0,0,0.1)' : 'none',
      },
      toggleArStyle: {
        padding: '6px 12px',
        borderRadius: '16px',
        background: isAr ? '#fff' : 'transparent',
        color: isAr ? '#E53935' : '#888',
        border: 'none',
        fontWeight: isAr ? '700' : '400',
        fontSize: '12px',
        cursor: 'pointer',
        transition: 'all 0.22s ease',
        fontFamily: 'var(--font-arabic)',
        boxShadow: isAr ? '0 1px 4px rgba(0,0,0,0.1)' : 'none',
      },

      switchToEn: () => setState({ lang: 'en' }),
      switchToAr: () => setState({ lang: 'ar' }),

      onContinue: selected
        ? () => setState({ currentScreen: 'onboarding', currentSlide: 0, fading: false, onboardingDone: false })
        : () => {},

      countryCards: this.countries.map(c => {
        const isSel = c.id === selectedCountry;
        const mainName = isAr ? c.nameAr : c.nameEn;
        const subName  = isAr ? c.nameEn : c.nameAr;

        return {
          flag: c.flag,
          name: mainName,
          subName: subName,
          onSelect: () => setState({ selectedCountry: c.id }),

          rowStyle: {
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            padding: '16px 28px',
            cursor: 'pointer',
            background: isSel ? 'rgba(229,57,53,0.04)' : 'transparent',
            borderBottom: '1px solid rgba(0,0,0,0.06)',
            transition: 'background 0.15s ease',
          },
          rowActiveStyle: 'background:rgba(229,57,53,0.08)',

          flagWrapStyle: {
            width: '72px',
            height: '48px',
            borderRadius: '8px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: '0',
            background: 'rgba(0,0,0,0.03)',
          },

          nameStyle: {
            fontSize: '17px',
            fontWeight: '700',
            color: '#141414',
            letterSpacing: isAr ? '0' : '-0.2px',
            lineHeight: '1.2',
            fontFamily: isAr ? 'var(--font-arabic)' : 'var(--font-body)',
          },
          subNameStyle: {
            fontSize: '13px',
            color: '#A0A0A8',
            fontWeight: '400',
            marginTop: '3px',
            fontFamily: isAr ? 'var(--font-body)' : 'var(--font-arabic)',
          },

          ringStyle: {
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            border: isSel ? 'none' : '1.5px solid #CECECE',
            background: isSel ? '#E53935' : 'rgba(0,0,0,0.03)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: '0',
            transition: 'all 0.22s ease',
            boxShadow: isSel ? '0 4px 12px rgba(229,57,53,0.28)' : 'none',
          },
          checkColor: isSel ? '#fff' : '#C0C0C8',
        };
      }),
    };
  },
};
