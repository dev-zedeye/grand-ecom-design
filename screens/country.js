window.CountryScreen = {
  countries: [
    {
      id: 'uae',
      flag: '🇦🇪',
      nameEn: 'United Arab Emirates',
      nameAr: 'الإمارات العربية المتحدة',
      shortEn: 'UAE',
      shortAr: 'الإمارات',
      flagBg: 'rgba(0,114,47,0.12)',
      flagBgSel: 'rgba(0,114,47,0.18)',
    },
    {
      id: 'kw',
      flag: '🇰🇼',
      nameEn: 'Kuwait',
      nameAr: 'الكويت',
      shortEn: 'Kuwait',
      shortAr: 'الكويت',
      flagBg: 'rgba(0,96,48,0.12)',
      flagBgSel: 'rgba(0,96,48,0.18)',
    },
    {
      id: 'qa',
      flag: '🇶🇦',
      nameEn: 'Qatar',
      nameAr: 'قطر',
      shortEn: 'Qatar',
      shortAr: 'قطر',
      flagBg: 'rgba(141,27,61,0.1)',
      flagBgSel: 'rgba(141,27,61,0.16)',
    },
    {
      id: 'sa',
      flag: '🇸🇦',
      nameEn: 'Saudi Arabia',
      nameAr: 'المملكة العربية السعودية',
      shortEn: 'KSA',
      shortAr: 'السعودية',
      flagBg: 'rgba(0,108,53,0.12)',
      flagBgSel: 'rgba(0,108,53,0.18)',
    },
  ],

  renderVals(state, setState) {
    const { selectedCountry, lang } = state;
    const isAr = lang === 'ar';
    const selected = this.countries.find(c => c.id === selectedCountry);

    const strings = {
      tagline:      isAr ? 'بقالة طازجة وأكثر' : 'Fresh Groceries & More',
      headline:     isAr ? 'أين تريد التسوق؟' : 'Where would you\nlike to shop?',
      subtitle:     isAr ? 'اختر دولتك للحصول على تجربة تسوق مخصصة' : 'Select your country to personalise your experience',
      sectionLabel: isAr ? 'الدول المتاحة' : 'Available Countries',
      btnActive:    selected
        ? (isAr ? `ابدأ في ${selected.shortAr}` : `Onboard in ${selected.shortEn}`)
        : (isAr ? 'اختر دولة أولاً' : 'Select a Country'),
    };

    const ff = isAr
      ? "'Cairo','Plus Jakarta Sans',sans-serif"
      : "'Plus Jakarta Sans',sans-serif";

    return {
      isCountryScreen: state.currentScreen === 'country',

      dir: isAr ? 'rtl' : 'ltr',
      tagline: strings.tagline,
      headline: strings.headline,
      subtitle: strings.subtitle,
      sectionLabel: strings.sectionLabel,
      btnText: strings.btnActive,
      btnEnabled: !!selected,

      headlineStyle: {
        fontSize: '26px',
        fontWeight: '800',
        color: '#fff',
        whiteSpace: 'pre-line',
        lineHeight: '1.2',
        letterSpacing: isAr ? '-0.2px' : '-0.7px',
        fontFamily: ff,
      },
      subtitleStyle: {
        fontSize: '13px',
        color: 'rgba(255,255,255,0.68)',
        fontWeight: '400',
        marginTop: '6px',
        lineHeight: '1.5',
        fontFamily: ff,
      },
      sectionLabelStyle: {
        fontSize: '11px',
        fontWeight: '700',
        color: '#9a9a9a',
        letterSpacing: isAr ? '0' : '1px',
        textTransform: isAr ? 'none' : 'uppercase',
        fontFamily: ff,
      },
      bodyStyle: {
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        padding: '22px 20px 0',
        overflow: 'hidden',
        fontFamily: ff,
      },
      btnStyle: {
        width: '100%',
        height: '58px',
        background: selected ? '#E53935' : '#DCDCDC',
        border: 'none',
        borderRadius: '29px',
        color: selected ? '#fff' : '#aaa',
        fontSize: '16px',
        fontWeight: '700',
        cursor: selected ? 'pointer' : 'default',
        fontFamily: ff,
        letterSpacing: isAr ? '0' : '0.2px',
        transition: 'background 0.3s ease, color 0.3s ease, transform 0.12s ease',
        boxShadow: selected ? '0 8px 28px rgba(229,57,53,0.35)' : 'none',
      },
      btnActiveStyle: selected ? 'transform:scale(0.97)' : '',

      toggleEnStyle: {
        padding: '7px 14px',
        borderRadius: '18px',
        background: !isAr ? '#fff' : 'transparent',
        color: !isAr ? '#E53935' : 'rgba(255,255,255,0.75)',
        border: 'none',
        fontWeight: !isAr ? '700' : '500',
        fontSize: '13px',
        cursor: 'pointer',
        transition: 'all 0.22s ease',
        fontFamily: "'Plus Jakarta Sans',sans-serif",
        letterSpacing: '0.3px',
      },
      toggleArStyle: {
        padding: '7px 14px',
        borderRadius: '18px',
        background: isAr ? '#fff' : 'transparent',
        color: isAr ? '#E53935' : 'rgba(255,255,255,0.75)',
        border: 'none',
        fontWeight: isAr ? '700' : '400',
        fontSize: '13px',
        cursor: 'pointer',
        transition: 'all 0.22s ease',
        fontFamily: "'Cairo',sans-serif",
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
          selected: isSel,
          onSelect: () => setState({ selectedCountry: c.id }),

          cardStyle: {
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            padding: '14px 16px',
            background: '#fff',
            border: isSel ? '2px solid #E53935' : '2px solid #E8E8E5',
            borderRadius: '18px',
            cursor: 'pointer',
            transition: 'all 0.22s ease',
            boxShadow: isSel
              ? '0 6px 24px rgba(229,57,53,0.15)'
              : '0 2px 8px rgba(0,0,0,0.04)',
            animation: isSel ? 'cardPop 0.28s ease forwards' : 'none',
          },
          cardHoverStyle: 'border-color:#E53935;box-shadow:0 4px 16px rgba(229,57,53,0.1)',
          cardActiveStyle: 'transform:scale(0.985)',

          flagBubbleStyle: {
            width: '52px',
            height: '52px',
            borderRadius: '14px',
            background: isSel ? c.flagBgSel : c.flagBg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: '0',
            transition: 'background 0.22s ease',
          },

          nameStyle: {
            fontSize: '15px',
            fontWeight: '700',
            color: '#141414',
            letterSpacing: isAr ? '0' : '-0.2px',
            lineHeight: '1.2',
            fontFamily: ff,
          },
          subNameStyle: {
            fontSize: '12px',
            color: '#a0a0a0',
            fontWeight: '400',
            marginTop: '3px',
            fontFamily: isAr
              ? "'Plus Jakarta Sans',sans-serif"
              : "'Cairo',sans-serif",
          },

          ringStyle: {
            width: '26px',
            height: '26px',
            borderRadius: '50%',
            border: isSel ? 'none' : '2px solid #D8D8D8',
            background: isSel ? '#E53935' : '#F8F8F8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: '0',
            transition: 'all 0.22s ease',
            boxShadow: isSel ? '0 3px 10px rgba(229,57,53,0.3)' : 'none',
          },
          checkStyle: {
            opacity: isSel ? 1 : 0,
            transform: isSel ? 'scale(1)' : 'scale(0.4)',
            transition: 'all 0.22s ease',
          },
        };
      }),
    };
  },
};
