window.CountryScreen = {
  countries: [
    { id: 'uae', flag: 'https://flagcdn.com/w160/ae.png', nameEn: 'United Arab Emirates', nameAr: 'الإمارات العربية المتحدة', shortEn: 'UAE',    shortAr: 'الإمارات' },
    { id: 'kw',  flag: 'https://flagcdn.com/w160/kw.png', nameEn: 'Kuwait',               nameAr: 'الكويت',                  shortEn: 'Kuwait', shortAr: 'الكويت'   },
    { id: 'qa',  flag: 'https://flagcdn.com/w160/qa.png', nameEn: 'Qatar',                nameAr: 'قطر',                      shortEn: 'Qatar',  shortAr: 'قطر'      },
    { id: 'sa',  flag: 'https://flagcdn.com/w160/sa.png', nameEn: 'Saudi Arabia',         nameAr: 'المملكة العربية السعودية', shortEn: 'KSA',    shortAr: 'السعودية' },
  ],

  renderVals(state, setState) {
    const { selectedCountry, lang } = state;
    const isAr = lang === 'ar';
    const selected = this.countries.find(c => c.id === selectedCountry);

    const ffBody    = isAr ? 'var(--font-arabic)' : 'var(--font-body)';
    const ffHeading = isAr ? 'var(--font-arabic)' : 'var(--font-heading)';

    const strings = {
      tagline:  isAr ? 'بقالة طازجة وأكثر' : 'Fresh Groceries & More',
      headline: isAr ? 'من أين تريد\nالتسوق؟' : 'Where would you\nlike to shop?',
      subtitle: isAr ? 'اختر دولتك للحصول على عروض وتوصيل مخصص.' : 'Choose your country for personalised deals and delivery.',
    };

    return {
      isCountryScreen: state.currentScreen === 'country',

      dir:      isAr ? 'rtl' : 'ltr',
      tagline:  strings.tagline,
      headline: strings.headline,
      subtitle: strings.subtitle,
      btnText:  isAr ? 'متابعة' : 'Continue',
      btnEnabled: !!selected,

      headlineStyle: {
        fontSize: '30px', fontWeight: '700', color: '#fff',
        whiteSpace: 'pre-line', lineHeight: '1.18',
        letterSpacing: isAr ? '0.2px' : 'var(--ls-display)',
        fontFamily: ffHeading,
      },
      subtitleStyle: {
        fontSize: '13px', color: 'rgba(255,255,255,0.68)',
        fontWeight: '400', marginTop: '6px', lineHeight: '1.5',
        fontFamily: ffBody,
      },
      bodyStyle: {
        flex: '1', display: 'flex', flexDirection: 'column',
        overflow: 'hidden', fontFamily: ffBody,
      },

      btnStyle: {
        width: '100%', height: '56px',
        background: selected ? '#E53935' : '#DCDCDC',
        border: 'none', borderRadius: '16px',
        color: selected ? '#fff' : '#aaa',
        fontSize: '16px', fontWeight: '700',
        cursor: selected ? 'pointer' : 'default',
        fontFamily: ffBody,
        letterSpacing: isAr ? '0' : '0.2px',
        transition: 'background 0.3s ease, color 0.3s ease, transform 0.12s ease',
        boxShadow: 'none',
      },
      btnActiveStyle: selected ? 'transform:scale(0.97)' : '',

      toggleEnStyle: {
        padding: '5px 10px', borderRadius: '10px',
        background: !isAr ? '#fff' : 'transparent',
        color: !isAr ? '#E53935' : 'rgba(255,255,255,0.75)',
        border: 'none', fontWeight: !isAr ? '700' : '500',
        fontSize: '11px', cursor: 'pointer',
        transition: 'all 0.22s ease',
        fontFamily: 'var(--font-body)', letterSpacing: '0.3px',
      },
      toggleArStyle: {
        padding: '5px 10px', borderRadius: '10px',
        background: isAr ? '#fff' : 'transparent',
        color: isAr ? '#E53935' : 'rgba(255,255,255,0.75)',
        border: 'none', fontWeight: isAr ? '700' : '400',
        fontSize: '11px', cursor: 'pointer',
        transition: 'all 0.22s ease',
        fontFamily: 'var(--font-arabic)',
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
            display: 'flex', alignItems: 'center', gap: '16px',
            padding: '14px 20px', cursor: 'pointer',
            background: isSel ? 'rgba(229,57,53,0.04)' : 'transparent',
            transition: 'background 0.15s ease',
          },
          rowActiveStyle: 'background:rgba(229,57,53,0.08)',

          flagWrapStyle: {
            width: '52px', height: '52px', borderRadius: '50%',
            overflow: 'hidden', flexShrink: '0', position: 'relative',
            border: '1.5px solid rgba(0,0,0,0.07)',
          },

          nameStyle: {
            fontSize: '16px', fontWeight: '700', color: '#141414',
            letterSpacing: isAr ? '0' : '-0.2px', lineHeight: '1.2',
            fontFamily: isAr ? 'var(--font-arabic)' : 'var(--font-body)',
          },
          subNameStyle: {
            fontSize: '12px', color: '#A0A0A8', fontWeight: '400',
            marginTop: '3px',
            fontFamily: isAr ? 'var(--font-body)' : 'var(--font-arabic)',
          },

          ringStyle: {
            width: '32px', height: '32px', borderRadius: '50%',
            border: isSel ? 'none' : '1.5px solid #CECECE',
            background: isSel ? '#E53935' : 'rgba(0,0,0,0.03)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: '0', transition: 'all 0.22s ease',
            boxShadow: isSel ? '0 4px 12px rgba(229,57,53,0.28)' : 'none',
          },
          checkColor: isSel ? '#fff' : '#C0C0C8',
        };
      }),
    };
  },
};
