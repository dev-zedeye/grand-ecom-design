window.BottomNavScreen = {

  _productData: [
    { id: 1, name: 'Almarai Full Fat Milk',         qty: '1 Litre',   pct: 24, pr: 7.25,  sp: 5.50,  express: true,  bg: 'linear-gradient(148deg,#EEF4FF 0%,#D2E6FF 100%)', emoji: '🥛', bannerLabel: 'NO.1 BEST SELLER', bannerColor: '#4338CA', bannerKind: 'medal'   },
    { id: 2, name: "Driscoll's Fresh Strawberries", qty: '500g Pack', pct: 36, pr: 14.99, sp: 9.75,  express: true,  bg: 'linear-gradient(148deg,#FFF0F2 0%,#FFD5DA 100%)', emoji: '🍓', bannerLabel: 'MOST LOVED',       bannerColor: '#DB2777', bannerKind: 'heart'   },
    { id: 3, name: 'Premium Blueberries',           qty: '250g Pack', pct: 28, pr: 12.50, sp: 8.99,  express: false, bg: 'linear-gradient(148deg,#F3EEFF 0%,#E2D0FF 100%)', emoji: '🫐', bannerLabel: "EDITOR'S PICK",    bannerColor: '#B45309', bannerKind: 'sparkle' },
    { id: 4, name: 'Hass Avocados',                 qty: 'Pack of 3', pct: 20, pr: 17.99, sp: 14.50, express: true,  bg: 'linear-gradient(148deg,#EDFAEE 0%,#C9EDD0 100%)', emoji: '🥑', bannerLabel: 'TRENDING NOW',      bannerColor: '#059669', bannerKind: 'fire'    },
  ],

  _mkBannerIcon(kind) {
    const w = 'rgba(255,255,255,0.95)';
    const ce = React.createElement.bind(React);
    // medal
    if (kind === 'medal') return ce('svg', { width:11, height:12, viewBox:'0 0 22 24', fill:w },
      ce('circle', { cx:11, cy:15, r:7, fill:'none', stroke:w, strokeWidth:2 }),
      ce('path', { d:'M8 2h6l-2 6H10L8 2Z', fill:w }),
      ce('text', { x:11, y:19.5, textAnchor:'middle', fontSize:8, fontWeight:'bold', fill:'rgba(255,255,255,0.95)' }, '1')
    );
    // heart
    if (kind === 'heart') return ce('svg', { width:11, height:10, viewBox:'0 0 24 22', fill:w },
      ce('path', { d:'M12 20S2 13 2 7a5 5 0 0110 0 5 5 0 0110 0c0 6-10 13-10 13Z' })
    );
    // sparkle / star wand
    if (kind === 'sparkle') return ce('svg', { width:11, height:11, viewBox:'0 0 24 24', fill:w },
      ce('path', { d:'M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2Z' })
    );
    // fire
    if (kind === 'fire') return ce('svg', { width:9, height:12, viewBox:'0 0 18 24', fill:w },
      ce('path', { d:'M9 0C9 0 4 5 4 10a5 5 0 008 4C13.5 12.5 14 9 12 6c0 0-1 3-3 3C7 9 6 7.5 6 6 6 3 9 0 9 0Z' }),
      ce('path', { d:'M9 24c-3.3 0-6-2.7-6-6 0-2.5 1.5-4.5 3-5.5 0 2 1.5 3.5 3 3.5s3-1.5 3-3.5c1.5 1 3 3 3 5.5 0 3.3-2.7 6-6 6Z' })
    );
    return ce('svg', { width:10, height:10, viewBox:'0 0 20 20', fill:w }, ce('polygon', { points:'10,1 12.9,7 19.5,7.6 14.5,12 16.2,18.5 10,15 3.8,18.5 5.5,12 0.5,7.6 7.1,7' }));
  },

  _mkCartIcon(inCart) {
    const ce = React.createElement.bind(React);
    if (inCart) return ce('svg', { width:13, height:13, viewBox:'0 0 24 24', fill:'none', stroke:'#16A34A', strokeWidth:2.8, strokeLinecap:'round', strokeLinejoin:'round' }, ce('polyline', { points:'20 6 9 17 4 12' }));
    return ce('svg', { width:13, height:13, viewBox:'0 0 24 24', fill:'none', stroke:'#fff', strokeWidth:2, strokeLinecap:'round', strokeLinejoin:'round' },
      ce('path', { d:'M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z' }),
      ce('line', { x1:'3', y1:'6', x2:'21', y2:'6' }),
      ce('path', { d:'M16 10a4 4 0 01-8 0' })
    );
  },

  renderVals(state, setState) {
    const { bnTab = 'home', bnBannerIdx = 0, bnWl = {}, bnCart = {} } = state;

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

      bnProducts: this._productData.map(p => {
        const inWL   = !!bnWl[p.id];
        const inCart = !!bnCart[p.id];
        return {
          ...p,
          discLabel:    `-${p.pct}%`,
          spStr:        p.sp.toFixed(2),
          prStr:        p.pr.toFixed(2),
          bannerIconEl: this._mkBannerIcon(p.bannerKind),
          bannerStyle:  { display:'flex', alignItems:'center', justifyContent:'center', gap:'5px', height:'26px', background:p.bannerColor, flexShrink:0 },
          imgStyle:     { height:'98px', background:p.bg, position:'relative', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden', flexShrink:0 },
          nameStyle:    { fontSize:'11.5px', fontWeight:'700', color:'#141414', lineHeight:'1.38', letterSpacing:'-0.2px', display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden', minHeight:'32px' },
          wlStyle:      { position:'absolute', top:'7px', right:'7px', width:'28px', height:'28px', background: inWL ? '#FFF0F0' : 'rgba(255,255,255,0.92)', border:'none', borderRadius:'50%', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 1px 6px rgba(0,0,0,0.14)', animation: inWL ? 'heartPop 0.32s ease' : 'none' },
          heartFill:    inWL ? '#E53935' : 'none',
          heartStroke:  inWL ? '#E53935' : '#C0BFCA',
          cartIconEl:   this._mkCartIcon(inCart),
          cartStyle:    { width:'100%', height:'36px', background: inCart ? '#F0FFF4' : '#E53935', border: inCart ? '1.5px solid #22C55E' : '1.5px solid transparent', borderRadius:'10px', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', gap:'5px', animation: inCart ? 'cartBounce 0.3s ease' : 'none' },
          cartLblStyle: { fontSize:'10.5px', fontWeight:'700', color: inCart ? '#16A34A' : '#fff' },
          cartLbl:      inCart ? 'Added to Cart' : 'Add to Cart',
          onWishlist:   () => setState(s => { const n={...s.bnWl}; n[p.id]=!n[p.id]; return { bnWl:n }; }),
          onCart:       () => setState(s => { const n={...s.bnCart}; n[p.id]=!n[p.id]; return { bnCart:n }; }),
        };
      }),

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
