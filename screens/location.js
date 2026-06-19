window.LocationScreen = {
  renderVals(state, setState) {
    const { locationSelected = 'home', lang } = state;
    const homeSelected   = locationSelected === 'home';
    const officeSelected = locationSelected === 'office';

    const t = (en, ar) => lang === 'ar' ? ar : en;

    const makeCard = (isSel, accent) => ({
      display:      'flex',
      alignItems:   'center',
      gap:          '13px',
      padding:      '14px',
      background:   '#fff',
      border:       `2px solid ${isSel ? accent : '#ECEAE4'}`,
      borderRadius: '16px',
      cursor:       'pointer',
      transition:   'all 0.22s ease',
      boxShadow:    isSel ? `0 4px 20px ${accent}28` : '0 1px 6px rgba(0,0,0,0.05)',
      animation:    isSel ? 'cardPop 0.28s ease forwards' : 'none',
    });

    const makeTick = (isSel, accent) => ({
      width:          '26px',
      height:         '26px',
      borderRadius:   '50%',
      border:         isSel ? 'none' : '1.5px solid #D4D4DC',
      background:     isSel ? accent : '#F4F4F6',
      display:        'flex',
      alignItems:     'center',
      justifyContent: 'center',
      flexShrink:     '0',
      transition:     'all 0.22s ease',
      boxShadow:      isSel ? `0 3px 10px ${accent}66` : 'none',
    });

    return {
      isLocationScreen: state.currentScreen === 'location',

      homeSelected,
      officeSelected,

      selectHome:   () => setState({ locationSelected: 'home' }),
      selectOffice: () => setState({ locationSelected: 'office' }),
      backToLogin:  () => setState({ currentScreen: 'login' }),

      homeCardStyle:   makeCard(homeSelected,   '#E53935'),
      officeCardStyle: makeCard(officeSelected, '#1565C0'),
      homeTickStyle:   makeTick(homeSelected,   '#E53935'),
      officeTickStyle: makeTick(officeSelected, '#1565C0'),

      deliverLabel: homeSelected
        ? t('Deliver to Home',    'التوصيل إلى المنزل')
        : t('Deliver to Office',  'التوصيل إلى المكتب'),

      locHeaderTitle:    t('Select Location',             'اختر الموقع'),
      locHeaderSubtitle: t('Choose your delivery address', 'اختر عنوان التوصيل'),
      locSavedTitle:     t('Saved Addresses',             'العناوين المحفوظة'),
      locAddNew:         t('Add New',                     'إضافة جديد'),
      locUseMyLocation:  t('Use My Location',             'استخدم موقعي'),
    };
  },
};
