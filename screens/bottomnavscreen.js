window.BottomNavScreen = {

  // Best Sellers — star icon, indigo/pink/purple/emerald
  _bestSellersData: [
    { id:101, name:'Almarai Full Fat Milk',          qty:'1 Litre',    pct:24, pr:7.25,  sp:5.50,  express:true,  bg:'linear-gradient(148deg,#EEF4FF 0%,#D2E6FF 100%)', emoji:'🥛', bannerLabel:'BEST SELLER #1', bannerColor:'#4338CA', bannerKind:'star' },
    { id:102, name:"Driscoll's Fresh Strawberries",  qty:'500g Pack',  pct:36, pr:14.99, sp:9.75,  express:true,  bg:'linear-gradient(148deg,#FFF0F2 0%,#FFD5DA 100%)', emoji:'🍓', bannerLabel:'BEST SELLER #2', bannerColor:'#DB2777', bannerKind:'star' },
    { id:103, name:'Premium Blueberries',            qty:'250g Pack',  pct:28, pr:12.50, sp:8.99,  express:false, bg:'linear-gradient(148deg,#F3EEFF 0%,#E2D0FF 100%)', emoji:'🫐', bannerLabel:'BEST SELLER #3', bannerColor:'#7C3AED', bannerKind:'star' },
    { id:104, name:'Hass Avocados',                  qty:'Pack of 3',  pct:20, pr:17.99, sp:14.50, express:true,  bg:'linear-gradient(148deg,#EDFAEE 0%,#C9EDD0 100%)', emoji:'🥑', bannerLabel:'BEST SELLER #4', bannerColor:'#059669', bannerKind:'star' },
  ],

  // Featured Products — ribbon icon, amber/warm tones
  _featuredData: [
    { id:201, name:'Premium Basmati Rice',           qty:'5kg Bag',    pct:18, pr:28.00, sp:22.99, express:false, bg:'linear-gradient(148deg,#FFFBEB 0%,#FDE68A 100%)', emoji:'🍚', bannerLabel:'FEATURED #1', bannerColor:'#B45309', bannerKind:'ribbon' },
    { id:202, name:'Extra Virgin Olive Oil',         qty:'750ml Bottle',pct:22, pr:39.50, sp:30.75, express:true,  bg:'linear-gradient(148deg,#FFF7ED 0%,#FED7AA 100%)', emoji:'🫙', bannerLabel:'FEATURED #2', bannerColor:'#C2410C', bannerKind:'ribbon' },
    { id:203, name:'Pure Organic Honey',             qty:'500g Jar',   pct:15, pr:22.00, sp:18.75, express:false, bg:'linear-gradient(148deg,#FFFBEB 0%,#FEF08A 100%)', emoji:'🍯', bannerLabel:'FEATURED #3', bannerColor:'#92400E', bannerKind:'ribbon' },
    { id:204, name:'Dark Chocolate 70%',             qty:'200g Pack',  pct:30, pr:14.50, sp:10.25, express:true,  bg:'linear-gradient(148deg,#FDF4FF 0%,#E9D5FF 100%)', emoji:'🍫', bannerLabel:'FEATURED #4', bannerColor:'#78350F', bannerKind:'ribbon' },
  ],

  // New Arrivals — sparkle icon, teal/blue tones
  _newArrivalData: [
    { id:301, name:'Cherry Tomatoes',                qty:'500g Punnet', pct:12, pr:8.50,  sp:7.50,  express:true,  bg:'linear-gradient(148deg,#FFF1F2 0%,#FFD6D8 100%)', emoji:'🍅', bannerLabel:'NEW ARRIVAL #1', bannerColor:'#0F766E', bannerKind:'sparkle' },
    { id:302, name:'Alphonso Mangoes',               qty:'6 Pack',      pct:20, pr:24.99, sp:19.99, express:true,  bg:'linear-gradient(148deg,#FFFBEB 0%,#FDE68A 100%)', emoji:'🥭', bannerLabel:'NEW ARRIVAL #2', bannerColor:'#0E7490', bannerKind:'sparkle' },
    { id:303, name:'Sparkling Mineral Water',        qty:'12 × 330ml',  pct:10, pr:18.00, sp:16.20, express:false, bg:'linear-gradient(148deg,#EFF6FF 0%,#BFDBFE 100%)', emoji:'💧', bannerLabel:'NEW ARRIVAL #3', bannerColor:'#0369A1', bannerKind:'sparkle' },
    { id:304, name:'Pink Lady Apples',               qty:'6 Pack',      pct:16, pr:15.00, sp:12.60, express:true,  bg:'linear-gradient(148deg,#FFF0F2 0%,#FFD5DA 100%)', emoji:'🍎', bannerLabel:'NEW ARRIVAL #4', bannerColor:'#1D4ED8', bannerKind:'sparkle' },
  ],

  // Special Offer Products — tag icon, red/orange tones
  _specialOfferData: [
    { id:401, name:'Free Range Eggs',                qty:'Dozen',       pct:25, pr:16.00, sp:12.00, express:true,  bg:'linear-gradient(148deg,#FFFBEB 0%,#FEF3C7 100%)', emoji:'🥚', bannerLabel:'SPECIAL OFFER #1', bannerColor:'#DC2626', bannerKind:'tag' },
    { id:402, name:'Mature Cheddar Cheese',          qty:'400g Block',  pct:33, pr:22.50, sp:14.99, express:true,  bg:'linear-gradient(148deg,#FFFBEB 0%,#FDE68A 100%)', emoji:'🧀', bannerLabel:'SPECIAL OFFER #2', bannerColor:'#B91C1C', bannerKind:'tag' },
    { id:403, name:'Fresh Orange Juice',             qty:'1.5 Litre',   pct:28, pr:13.75, sp:9.99,  express:false, bg:'linear-gradient(148deg,#FFF7ED 0%,#FED7AA 100%)', emoji:'🍊', bannerLabel:'SPECIAL OFFER #3', bannerColor:'#C2410C', bannerKind:'tag' },
    { id:404, name:'Whole Grain Bread Loaf',         qty:'800g Loaf',   pct:20, pr:8.25,  sp:6.60,  express:true,  bg:'linear-gradient(148deg,#FEFCE8 0%,#FEF08A 100%)', emoji:'🍞', bannerLabel:'SPECIAL OFFER #4', bannerColor:'#9F1239', bannerKind:'tag' },
  ],

  // Recently Viewed — eye icon, slate/neutral tones
  _recentlyViewedData: [
    { id:501, name:'Baby Spinach Leaves',            qty:'200g Bag',    pct:14, pr:7.00,  sp:5.99,  express:true,  bg:'linear-gradient(148deg,#F0FDF4 0%,#BBF7D0 100%)', emoji:'🥬', bannerLabel:'SEEN BY YOU #1', bannerColor:'#475569', bannerKind:'eye' },
    { id:502, name:'Greek Style Yogurt',             qty:'500g Tub',    pct:18, pr:11.50, sp:9.50,  express:false, bg:'linear-gradient(148deg,#EFF6FF 0%,#DBEAFE 100%)', emoji:'🥛', bannerLabel:'SEEN BY YOU #2', bannerColor:'#374151', bannerKind:'eye' },
    { id:503, name:'Mixed Grain Granola',            qty:'400g Bag',    pct:22, pr:16.00, sp:12.50, express:true,  bg:'linear-gradient(148deg,#FFFBEB 0%,#FEF3C7 100%)', emoji:'🌾', bannerLabel:'SEEN BY YOU #3', bannerColor:'#4B5563', bannerKind:'eye' },
    { id:504, name:'Fresh Lemon',                   qty:'4 Pack',      pct:10, pr:5.50,  sp:4.95,  express:true,  bg:'linear-gradient(148deg,#FEFCE8 0%,#FEF08A 100%)', emoji:'🍋', bannerLabel:'SEEN BY YOU #4', bannerColor:'#52525B', bannerKind:'eye' },
  ],

  // ── Banner data ──────────────────────────────────────────────────────────
  _bestSellerBanners: [
    { bg:'linear-gradient(135deg,#E53935 0%,#C62828 100%)', title:'Shop Our Top Picks', subtitle:'Save up to 40% today', cta:'Shop Now' },
    { bg:'linear-gradient(135deg,#7C3AED 0%,#5B21B6 100%)', title:'GrandMe Members Save More', subtitle:'Exclusive member prices inside', cta:'Join Now' },
    { bg:'linear-gradient(135deg,#EA580C 0%,#C2410C 100%)', title:'Weekend Flash Sale', subtitle:'Limited time, unlimited savings', cta:'Grab Deals' },
  ],
  _featuredBanners: [
    { bg:'linear-gradient(135deg,#B45309 0%,#92400E 100%)', title:"Chef's Selection", subtitle:'Premium handpicked ingredients', cta:'Explore' },
    { bg:'linear-gradient(135deg,#15803D 0%,#166534 100%)', title:'Farm to Table Fresh', subtitle:'Straight from local suppliers', cta:'Order Now' },
    { bg:'linear-gradient(135deg,#0369A1 0%,#075985 100%)', title:'Premium Brands', subtitle:"World's finest grocery brands", cta:'Discover' },
  ],
  _newArrivalBanners: [
    { bg:'linear-gradient(135deg,#0F766E 0%,#115E59 100%)', title:'Just Landed', subtitle:'Be the first to explore', cta:'Shop New' },
    { bg:'linear-gradient(135deg,#0284C7 0%,#0369A1 100%)', title:'Seasonal Specials', subtitle:'Fresh picks this season', cta:"See What's New" },
    { bg:'linear-gradient(135deg,#6D28D9 0%,#5B21B6 100%)', title:'Try Something New', subtitle:'Expand your grocery horizons', cta:'Try Now' },
  ],
  _specialOfferBanners: [
    { bg:'linear-gradient(135deg,#DC2626 0%,#B91C1C 100%)', title:"Today's Best Deals", subtitle:'Up to 50% off selected items', cta:'Shop Now' },
    { bg:'linear-gradient(135deg,#BE123C 0%,#9F1239 100%)', title:'Buy 2 Get 1 Free', subtitle:'On hundreds of products', cta:'See Offers' },
    { bg:'linear-gradient(135deg,#C2410C 0%,#9A3412 100%)', title:'Flash Sale Ending Soon', subtitle:"Don't miss out", cta:'Hurry Now' },
  ],
  _recentlyViewedBanners: [
    { bg:'linear-gradient(135deg,#475569 0%,#334155 100%)', title:'Complete Your Cart', subtitle:'Items still waiting for you', cta:'Continue' },
    { bg:'linear-gradient(135deg,#1D4ED8 0%,#1e40af 100%)', title:'You Might Also Like', subtitle:'Based on your browsing', cta:'Explore' },
    { bg:'linear-gradient(135deg,#15803D 0%,#166534 100%)', title:'Back in Stock', subtitle:'Your favourites are back', cta:'Buy Now' },
  ],

  // Trending Now — same products as Best Sellers, trending-up icon, rose/orange/cyan/violet
  _trendingData: [
    { id:601, name:'Almarai Full Fat Milk',         qty:'1 Litre',    pct:24, pr:7.25,  sp:5.50,  express:true,  bg:'linear-gradient(148deg,#FFF0F2 0%,#FFD5DA 100%)', emoji:'🥛', bannerLabel:'TRENDING #1', bannerColor:'#E11D48', bannerKind:'trending' },
    { id:602, name:"Driscoll's Fresh Strawberries", qty:'500g Pack',  pct:36, pr:14.99, sp:9.75,  express:true,  bg:'linear-gradient(148deg,#FFF7ED 0%,#FED7AA 100%)', emoji:'🍓', bannerLabel:'TRENDING #2', bannerColor:'#EA580C', bannerKind:'trending' },
    { id:603, name:'Premium Blueberries',           qty:'250g Pack',  pct:28, pr:12.50, sp:8.99,  express:false, bg:'linear-gradient(148deg,#ECFEFF 0%,#A5F3FC 100%)', emoji:'🫐', bannerLabel:'TRENDING #3', bannerColor:'#0891B2', bannerKind:'trending' },
    { id:604, name:'Hass Avocados',                 qty:'Pack of 3',  pct:20, pr:17.99, sp:14.50, express:true,  bg:'linear-gradient(148deg,#F5F3FF 0%,#DDD6FE 100%)', emoji:'🥑', bannerLabel:'TRENDING #4', bannerColor:'#7C3AED', bannerKind:'trending' },
  ],

  _trendingBanners: [
    { bg:'linear-gradient(135deg,#E11D48 0%,#9F1239 100%)', title:'Trending This Week',   subtitle:'Most added to cart right now', cta:'Shop Now'   },
    { bg:'linear-gradient(135deg,#EA580C 0%,#C2410C 100%)', title:'Flying Off Shelves',   subtitle:'Don\'t miss out before it\'s gone', cta:'Grab It'    },
    { bg:'linear-gradient(135deg,#7C3AED 0%,#4C1D95 100%)', title:'Everyone\'s Favourite', subtitle:'Rated 4.8★ by our customers',   cta:'See Why'    },
  ],

  _brandSlides: [
    {
      bg: 'linear-gradient(160deg,#064E3B 0%,#065F46 40%,#047857 100%)',
      accent: '#34D399', tag: 'GRAND FRESH',
      headline: 'Farm-Fresh\nDelivered',
      sub: 'Handpicked daily from local farms straight to your door',
      cta: 'Shop Fresh',
      deco1: 'rgba(52,211,153,0.18)', deco2: 'rgba(0,0,0,0.22)',
      badge: '🌿', badgeBg: 'rgba(52,211,153,0.2)',
    },
    {
      bg: 'linear-gradient(160deg,#7F1D1D 0%,#991B1B 40%,#DC2626 100%)',
      accent: '#FCA5A5', tag: 'GRAND DEALS',
      headline: 'Up to 60%\nOff Today',
      sub: 'Flash savings on hundreds of everyday essentials',
      cta: 'Grab Deals',
      deco1: 'rgba(252,165,165,0.18)', deco2: 'rgba(0,0,0,0.25)',
      badge: '🔥', badgeBg: 'rgba(252,165,165,0.2)',
    },
    {
      bg: 'linear-gradient(160deg,#312E81 0%,#3730A3 40%,#4F46E5 100%)',
      accent: '#A5B4FC', tag: 'GRAND PREMIUM',
      headline: 'Curated\nFor You',
      sub: 'Premium international brands at competitive prices',
      cta: 'Explore',
      deco1: 'rgba(165,180,252,0.18)', deco2: 'rgba(0,0,0,0.25)',
      badge: '⭐', badgeBg: 'rgba(165,180,252,0.2)',
    },
    {
      bg: 'linear-gradient(160deg,#78350F 0%,#92400E 40%,#B45309 100%)',
      accent: '#FCD34D', tag: 'GRAND ORGANICS',
      headline: '100% Certified\nOrganic',
      sub: 'Chemical-free, natural goodness for your family',
      cta: 'Shop Organic',
      deco1: 'rgba(252,211,77,0.18)', deco2: 'rgba(0,0,0,0.25)',
      badge: '🌱', badgeBg: 'rgba(252,211,77,0.2)',
    },
  ],

  _portraitBanners: [
    { bg:'linear-gradient(160deg,#B91C1C 0%,#EF4444 100%)', tag:'Flash Sale',    emoji:'⚡', title:'Up to 50% Off',   subtitle:'Today only — grab it fast',     cta:'Shop Now'   },
    { bg:'linear-gradient(160deg,#1D4ED8 0%,#60A5FA 100%)', tag:'Free Delivery', emoji:'🚚', title:'Zero Fees Today',  subtitle:'On orders above 30 AED',        cta:'Order Now'  },
    { bg:'linear-gradient(160deg,#6D28D9 0%,#A78BFA 100%)', tag:'Bonus Points',  emoji:'⭐', title:'Triple Points',    subtitle:'Earn 3× on selected items',     cta:'Earn Now'   },
    { bg:'linear-gradient(160deg,#065F46 0%,#10B981 100%)', tag:'Fresh Drop',    emoji:'🌿', title:'New Arrivals',     subtitle:'Freshly stocked — first picks', cta:'Explore'    },
    { bg:'linear-gradient(160deg,#78350F 0%,#F59E0B 100%)', tag:'Weekend Deal',  emoji:'🎯', title:'Weekend Picks',    subtitle:'Handpicked savings for you',    cta:'View Deals' },
  ],
  // ─────────────────────────────────────────────────────────────────────────

  _mkBannerIcon(kind) {
    const w = 'rgba(255,255,255,0.95)';
    const ce = React.createElement.bind(React);
    // star — Best Sellers
    if (kind === 'star') return ce('svg', { width:11, height:11, viewBox:'0 0 24 24', fill:w },
      ce('path', { d:'M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2Z' })
    );
    // ribbon — Featured
    if (kind === 'ribbon') return ce('svg', { width:10, height:12, viewBox:'0 0 20 24', fill:w },
      ce('path', { d:'M10 0L20 0L20 20L10 14L0 20L0 0Z' })
    );
    // sparkle — New Arrivals
    if (kind === 'sparkle') return ce('svg', { width:12, height:12, viewBox:'0 0 24 24', fill:w },
      ce('path', { d:'M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5Z' })
    );
    // tag — Special Offer
    if (kind === 'tag') return ce('svg', { width:12, height:11, viewBox:'0 0 24 22', fill:w },
      ce('path', { d:'M1 1h10l12 10L11 21 1 11V1Z' }),
      ce('circle', { cx:7, cy:7, r:2, fill:'rgba(0,0,0,0.25)' })
    );
    // eye — Recently Viewed
    if (kind === 'eye') return ce('svg', { width:13, height:9, viewBox:'0 0 26 18', fill:'none', stroke:w, strokeWidth:2, strokeLinecap:'round' },
      ce('path', { d:'M1 9C1 9 6 1 13 1s12 8 12 8-5 8-12 8S1 9 1 9Z', fill:w, stroke:'none' }),
      ce('circle', { cx:13, cy:9, r:3.5, fill:'rgba(0,0,0,0.25)' })
    );
    // trending — Trending Now
    if (kind === 'trending') return ce('svg', { width:13, height:11, viewBox:'0 0 24 20', fill:'none', stroke:w, strokeWidth:2.5, strokeLinecap:'round', strokeLinejoin:'round' },
      ce('polyline', { points:'23 3 13 13 9 9 1 17' }),
      ce('polyline', { points:'17 3 23 3 23 9' })
    );
    return ce('svg', { width:11, height:11, viewBox:'0 0 24 24', fill:w }, ce('path', { d:'M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2Z' }));
  },

  _mapProducts(data, wl, cart, setState, wlKey, cartKey) {
    const ce = React.createElement.bind(React);
    return data.map(p => {
      const inWL   = !!wl[p.id];
      const inCart = !!cart[p.id];
      const mkCartIcon = inCart
        ? ce('svg', { width:13, height:13, viewBox:'0 0 24 24', fill:'none', stroke:'#16A34A', strokeWidth:2.8, strokeLinecap:'round', strokeLinejoin:'round' }, ce('polyline', { points:'20 6 9 17 4 12' }))
        : ce('svg', { width:13, height:13, viewBox:'0 0 24 24', fill:'none', stroke:'#fff', strokeWidth:2, strokeLinecap:'round', strokeLinejoin:'round' },
            ce('path', { d:'M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z' }),
            ce('line', { x1:'3', y1:'6', x2:'21', y2:'6' }),
            ce('path', { d:'M16 10a4 4 0 01-8 0' })
          );
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
        cartIconEl:   mkCartIcon,
        cartStyle:    { width:'100%', height:'36px', background: inCart ? '#F0FFF4' : '#E53935', border: inCart ? '1.5px solid #22C55E' : '1.5px solid transparent', borderRadius:'10px', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', gap:'5px', animation: inCart ? 'cartBounce 0.3s ease' : 'none' },
        cartLblStyle: { fontSize:'10.5px', fontWeight:'700', color: inCart ? '#16A34A' : '#fff' },
        cartLbl:      inCart ? 'Added to Cart' : 'Add to Cart',
        onWishlist:   (e) => { e && e.stopPropagation(); setState(s => { const n={...s[wlKey]}; n[p.id]=!n[p.id]; return { [wlKey]:n }; }); },
        onCart:       (e) => { e && e.stopPropagation(); setState(s => { const n={...s[cartKey]}; n[p.id]=!n[p.id]; return { [cartKey]:n }; }); },
        onTap:        () => setState({ currentScreen: 'productdetail' }),
      };
    });
  },

  renderVals(state, setState) {
    const { bnTab = 'home', bnBannerIdx = 0, bnBrandIdx = 0, bnWl = {}, bnCart = {}, bnFeatWl = {}, bnFeatCart = {}, bnNewWl = {}, bnNewCart = {}, bnSoWl = {}, bnSoCart = {}, bnRvWl = {}, bnRvCart = {}, bnTrendWl = {}, bnTrendCart = {} } = state;

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

      bnBestSellerBanners:      this._bestSellerBanners,
      bnFeaturedBanners:        this._featuredBanners,
      bnNewArrivalBanners:      this._newArrivalBanners,
      bnSpecialOfferBanners:    this._specialOfferBanners,
      bnRecentlyViewedBanners:  this._recentlyViewedBanners,
      bnPortraitBanners:        this._portraitBanners,

      bnBrandTrackStyle: {
        display: 'flex',
        transition: 'transform 0.55s cubic-bezier(0.25,0.1,0.25,1)',
        transform: `translateX(-${bnBrandIdx * 100}%)`,
      },
      ...(() => {
        const db = { height:'6px', borderRadius:'3px', transition:'all 0.3s ease', flexShrink:0, cursor:'pointer', border:'none', padding:0, background:'rgba(255,255,255,0.4)' };
        const active = { ...db, width:'20px', background:'#fff' };
        const inactive = { ...db, width:'6px' };
        return {
          bnBrandDot0Style: bnBrandIdx===0 ? active : inactive, bnBrandDot0Click: () => setState({ bnBrandIdx:0 }),
          bnBrandDot1Style: bnBrandIdx===1 ? active : inactive, bnBrandDot1Click: () => setState({ bnBrandIdx:1 }),
          bnBrandDot2Style: bnBrandIdx===2 ? active : inactive, bnBrandDot2Click: () => setState({ bnBrandIdx:2 }),
          bnBrandDot3Style: bnBrandIdx===3 ? active : inactive, bnBrandDot3Click: () => setState({ bnBrandIdx:3 }),
        };
      })(),
      bnTrendingBanners:        this._trendingBanners,
      bnTrendingProducts:       this._mapProducts(this._trendingData, bnTrendWl, bnTrendCart, setState, 'bnTrendWl', 'bnTrendCart'),

      bnProducts:             this._mapProducts(this._bestSellersData,   bnWl,      bnCart,     setState, 'bnWl',     'bnCart'),
      bnFeaturedProducts:     this._mapProducts(this._featuredData,       bnFeatWl,  bnFeatCart, setState, 'bnFeatWl', 'bnFeatCart'),
      bnNewArrivalProducts:   this._mapProducts(this._newArrivalData,     bnNewWl,   bnNewCart,  setState, 'bnNewWl',  'bnNewCart'),
      bnSpecialOfferProducts: this._mapProducts(this._specialOfferData,   bnSoWl,    bnSoCart,   setState, 'bnSoWl',   'bnSoCart'),
      bnRecentlyViewedProducts: this._mapProducts(this._recentlyViewedData, bnRvWl,  bnRvCart,   setState, 'bnRvWl',   'bnRvCart'),

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
