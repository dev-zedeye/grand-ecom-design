window.BottomNavScreen = {
  renderVals(state, setState) {
    const { bnTab = 'home', bnBannerIdx = 0 } = state;

    const tabs = {
      home:       { label: 'Home',       desc: 'Your personalized home feed will appear here' },
      categories: { label: 'Categories', desc: 'Browse all product categories from here' },
      loyalty:    { label: 'Loyalty',    desc: 'Your points, rewards and loyalty perks live here' },
      offers:     { label: 'Offers',     desc: 'Exclusive deals and flash offers will show here' },
      flyer:      { label: 'Flyer',      desc: 'Weekly digital flyers and promotions appear here' },
    };

    const placeholderColors = {
      home:       '#E53935',
      categories: '#5C6BC0',
      loyalty:    '#FFB300',
      offers:     '#00897B',
      flyer:      '#F06292',
    };

    const accent = placeholderColors[bnTab];

    const navStyle = (tab) => {
      const isActive = bnTab === tab;
      return {
        iconBg: {
          width:           '44px',
          height:          '44px',
          borderRadius:    '14px',
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'center',
          background:      isActive ? 'rgba(229,57,53,0.10)' : 'transparent',
          transition:      'background 0.2s ease',
        },
        color: isActive ? '#E53935' : '#A0A0B8',
        fill:  isActive ? 'rgba(229,57,53,0.12)' : 'none',
        label: {
          fontSize:     '11px',
          fontWeight:   isActive ? '700' : '500',
          color:        isActive ? '#E53935' : '#A0A0B8',
          fontFamily:   'var(--font-body)',
          letterSpacing: '-0.1px',
          transition:   'color 0.2s ease',
        },
        dot: {
          width:      isActive ? '5px' : '0px',
          height:     '5px',
          borderRadius: '3px',
          background: '#E53935',
          position:   'absolute',
          bottom:     '0px',
          left:       '50%',
          transform:  'translateX(-50%)',
          transition: 'width 0.25s cubic-bezier(0.34,1.56,0.64,1)',
        },
      };
    };

    const ns = (t) => navStyle(t);
    const tab = tabs[bnTab];

    const dotBase = { height: '6px', borderRadius: '3px', transition: 'all 0.3s ease', cursor: 'pointer' };
    const dots = [0,1,2,3].map(i =>
      i === bnBannerIdx
        ? { ...dotBase, width: '18px', background: '#E53935' }
        : { ...dotBase, width: '6px', background: 'rgba(0,0,0,0.15)' }
    );

    return {
      isHomeScreen: state.currentScreen === 'home',

      bnActiveLabel:      tab.label,
      bnPlaceholderDesc:  tab.desc,
      bnAccentColor:      accent,

      bnPlaceholderIconBgStyle: {
        width:          '88px',
        height:         '88px',
        borderRadius:   '28px',
        background:     `linear-gradient(135deg,${accent}22,${accent}11)`,
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        border:         `1.5px solid ${accent}22`,
        boxShadow:      `0 16px 48px ${accent}22`,
      },

      bnIsHome:       bnTab === 'home',
      bnIsCategories: bnTab === 'categories',
      bnIsLoyalty:    bnTab === 'loyalty',
      bnIsOffers:     bnTab === 'offers',
      bnIsFlyer:      bnTab === 'flyer',
      notBnHome:      bnTab !== 'home',

      bnCarouselTrackStyle: {
        display: 'flex',
        transition: 'transform 0.45s cubic-bezier(0.25,0.1,0.25,1)',
        transform: `translateX(-${bnBannerIdx * 100}%)`,
      },
      bnDot0Style: dots[0], bnDot0Click: () => setState({ bnBannerIdx: 0 }),
      bnDot1Style: dots[1], bnDot1Click: () => setState({ bnBannerIdx: 1 }),
      bnDot2Style: dots[2], bnDot2Click: () => setState({ bnBannerIdx: 2 }),
      bnDot3Style: dots[3], bnDot3Click: () => setState({ bnBannerIdx: 3 }),

      bnSetHome:       () => setState({ bnTab: 'home' }),
      bnSetCategories: () => setState({ bnTab: 'categories' }),
      bnSetLoyalty:    () => setState({ bnTab: 'loyalty' }),
      bnSetOffers:     () => setState({ bnTab: 'offers' }),
      bnSetFlyer:      () => setState({ bnTab: 'flyer' }),

      // HOME
      bnHomeIconBg:       ns('home').iconBg,
      bnHomeColor:        ns('home').color,
      bnHomeFill:         ns('home').fill,
      bnHomeLabelStyle:   ns('home').label,
      bnHomeActiveDot:    ns('home').dot,

      // CATEGORIES
      bnCategoriesIconBg:     ns('categories').iconBg,
      bnCategoriesColor:      ns('categories').color,
      bnCategoriesFill:       ns('categories').fill,
      bnCategoriesLabelStyle: ns('categories').label,
      bnCategoriesActiveDot:  ns('categories').dot,

      // LOYALTY
      bnLoyaltyIconBg:     ns('loyalty').iconBg,
      bnLoyaltyColor:      ns('loyalty').color,
      bnLoyaltyFill:       ns('loyalty').fill,
      bnLoyaltyLabelStyle: ns('loyalty').label,
      bnLoyaltyActiveDot:  ns('loyalty').dot,

      // OFFERS
      bnOffersIconBg:     ns('offers').iconBg,
      bnOffersColor:      ns('offers').color,
      bnOffersFill:       ns('offers').fill,
      bnOffersLabelStyle: ns('offers').label,
      bnOffersActiveDot:  ns('offers').dot,

      // FLYER
      bnFlyerIconBg:     ns('flyer').iconBg,
      bnFlyerColor:      ns('flyer').color,
      bnFlyerFill:       ns('flyer').fill,
      bnFlyerLabelStyle: ns('flyer').label,
      bnFlyerActiveDot:  ns('flyer').dot,
    };
  },
};
