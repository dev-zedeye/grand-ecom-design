window.ProductDetailScreen = {

  _product: {
    name: "Almarai Full Fat Fresh Milk",
    manufacturerName: "Almarai",
    sku: "ALM-FLK-001",
    emoji: "🍎",
    heroBg: "linear-gradient(148deg,#EEF4FF 0%,#C8DCFF 100%)",
    pr: 7.25,
    sp: 5.50,
    discPct: 24,
    rating: 4,
    reviewCount: 218,
    isHighlighted: true,
    express: true,
    cod: true,
    requireShipping: false,
    description: "Almarai Full Fat Fresh Milk is sourced from the finest dairy farms and processed to bring you the richest, creamiest taste. Packed with essential nutrients including calcium, protein, and vitamins, it's the perfect choice for the whole family.",
    features: [
      "100% fresh, locally sourced milk",
      "Rich in calcium & vitamin D",
      "No preservatives or artificial additives",
      "Refrigerated for maximum freshness",
      "Available in family-size packs",
    ],
    specs: [
      { label: "SKU",        value: "ALM-FLK-001" },
      { label: "UPC",        value: "6281003054581" },
      { label: "Weight",     value: "1.03 kg" },
      { label: "Volume",     value: "1 Litre" },
      { label: "Dimensions", value: "7 × 7 × 22 cm" },
      { label: "Brand",      value: "Almarai" },
      { label: "Category",   value: "Dairy & Eggs" },
      { label: "Shelf Life", value: "14 days" },
      { label: "Storage",    value: "Refrigerate 2–6°C" },
      { label: "Origin",     value: "Saudi Arabia" },
    ],
    reviews: [
      { name: "Shibin K.",   initial: "S", date: "14 Jun 2026", stars: 5, avatarColor: "#E53935", text: "Best milk I've had in Dubai. Stays fresh and the taste is consistently great. My kids love it every morning!" },
      { name: "Mohammed A.", initial: "M", date: "9 Jun 2026",  stars: 4, avatarColor: "#1565C0", text: "Good quality product. Arrives cold and always within the delivery window. Would love a 2L option." },
      { name: "Priya R.",    initial: "P", date: "2 Jun 2026",  stars: 5, avatarColor: "#388E3C", text: "Perfect for my morning coffee and cereal. Creamy texture and no off-taste. Highly recommend." },
    ],
    ratingBars: [
      { stars: "5", count: "142", pct: 0.65 },
      { stars: "4", count: "51",  pct: 0.24 },
      { stars: "3", count: "17",  pct: 0.08 },
      { stars: "2", count: "5",   pct: 0.02 },
      { stars: "1", count: "3",   pct: 0.01 },
    ],
    tags: ["dairy", "fresh", "milk", "everyday", "family-pack"],
    minQuantity: 1,
    maxQuantity: 10,
  },

  _fmt(n) { return n.toFixed(2); },

  _mkStars(rating, size, color) {
    const ce = React.createElement.bind(React);
    return ce('div', { style: { display: 'flex', gap: '2px' } },
      ...[1,2,3,4,5].map(i =>
        ce('svg', { key: i, width: size, height: size, viewBox: '0 0 24 24',
          fill: i <= rating ? color : 'none',
          stroke: i <= rating ? color : '#D1D0CC',
          strokeWidth: '1.8', strokeLinejoin: 'round' },
          ce('polygon', { points: '12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26' })
        )
      )
    );
  },

  _mkReviewStars(rating) {
    const ce = React.createElement.bind(React);
    return ce('div', { style: { display: 'flex', gap: '1px' } },
      ...[1,2,3,4,5].map(i =>
        ce('svg', { key: i, width: 11, height: 11, viewBox: '0 0 24 24',
          fill: i <= rating ? '#FFB300' : 'none',
          stroke: i <= rating ? '#FFB300' : '#D1D0CC',
          strokeWidth: '2', strokeLinejoin: 'round' },
          ce('polygon', { points: '12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26' })
        )
      )
    );
  },

  _mkWishlistIcon(active, size) {
    const ce = React.createElement.bind(React);
    const sz = size || 17;
    return ce('svg', {
      width: sz, height: sz, viewBox: '0 0 24 24',
      fill: active ? '#E53935' : 'none',
      stroke: active ? '#E53935' : 'white',
      strokeWidth: '2.2', strokeLinecap: 'round', strokeLinejoin: 'round',
    }, ce('path', { d: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' }));
  },

  _mkBottomWlIcon(active) {
    const ce = React.createElement.bind(React);
    return ce('svg', {
      width: 20, height: 20, viewBox: '0 0 24 24',
      fill: active ? '#E53935' : 'none',
      stroke: active ? '#E53935' : '#9898A8',
      strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round',
    }, ce('path', { d: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' }));
  },

  _mkCartIcon(inCart) {
    const ce = React.createElement.bind(React);
    if (inCart) {
      return ce('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: '#fff', strokeWidth: '2.5', strokeLinecap: 'round', strokeLinejoin: 'round' },
        ce('polyline', { points: '20 6 9 17 4 12' })
      );
    }
    return ce('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: '#fff', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
      ce('path', { d: 'M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z' }),
      ce('line', { x1: '3', y1: '6', x2: '21', y2: '6' }),
      ce('path', { d: 'M16 10a4 4 0 01-8 0' })
    );
  },

  _tabStyle(tab, name) {
    const active = tab === name;
    return {
      background: 'none', border: 'none', cursor: 'pointer',
      padding: '12px 14px 10px',
      fontSize: '13px', fontWeight: active ? '700' : '500',
      color: active ? '#E53935' : '#9898A8',
      fontFamily: 'var(--font-body)',
      borderBottom: active ? '2.5px solid #E53935' : '2.5px solid transparent',
      transition: 'all 0.2s ease',
      marginBottom: '-1.5px',
      letterSpacing: '-0.1px',
    };
  },

  _thumbBgs: [
    'linear-gradient(148deg,#EEF4FF 0%,#C8DCFF 100%)',
    'linear-gradient(148deg,#E8F0FF 0%,#BDD0FF 100%)',
    'linear-gradient(148deg,#F2EEFF 0%,#D4C4FF 100%)',
    'linear-gradient(148deg,#EFF8FF 0%,#BCDEFF 100%)',
    'linear-gradient(148deg,#E8FFF4 0%,#B8F0D8 100%)',
    'linear-gradient(148deg,#FFF8E8 0%,#FFE8B0 100%)',
  ],

  renderVals(state, setState) {
    const { pdpWl = false, pdpInCart = false, pdpQty = 1, pdpTab = 'desc', pdpImgDot = 0 } = state;
    const p = this._product;
    const canDec = pdpQty > p.minQuantity;
    const canInc = !p.maxQuantity || pdpQty < p.maxQuantity;

    const specs = p.specs.map((s, i) => ({
      ...s,
      rowStyle: {
        display: 'flex', alignItems: 'center', padding: '11px 0',
        borderBottom: i < p.specs.length - 1 ? '1px solid #F5F4F0' : 'none',
      },
    }));

    const reviews = p.reviews.map(r => ({
      ...r,
      starsEl: this._mkReviewStars(r.stars),
      avatarStyle: {
        width: '34px', height: '34px', borderRadius: '11px',
        background: r.avatarColor,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      },
    }));

    const ratingBars = p.ratingBars.map(b => ({
      ...b,
      fillStyle: {
        height: '100%', width: `${Math.round(b.pct * 100)}%`,
        background: '#FFB300', borderRadius: '3px',
        transition: 'width 0.4s ease',
      },
    }));

    return {
      isProductDetailScreen: state.currentScreen === 'productdetail',

      pdpProduct: {
        ...p,
        spStr: this._fmt(p.sp),
        prStr: this._fmt(p.pr),
        saveStr: this._fmt(p.pr - p.sp),
        ratingStr: p.rating.toFixed(1),
        stockLabel: 'In Stock',
        specs,
        reviews,
        ratingBars,
      },
      pdpTags: p.tags,
      pdpHasTags: p.tags && p.tags.length > 0,

      pdpStarsEl:   this._mkStars(p.rating, 14, '#FFB300'),
      pdpStarsSmEl: this._mkStars(p.rating, 13, '#FFB300'),

      pdpQty,

      pdpHeroBg: this._thumbBgs[pdpImgDot] || this._thumbBgs[0],

      pdpThumbnails: this._thumbBgs.map((bg, i) => ({
        bg,
        containerStyle: {
          flexShrink: 0,
          width: '68px', height: '68px', borderRadius: '12px',
          background: bg,
          border: pdpImgDot === i ? '2px solid #E53935' : '2px solid #ECEAE6',
          boxShadow: pdpImgDot === i ? '0 2px 10px rgba(229,57,53,0.2)' : 'none',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', overflow: 'hidden',
          transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
        },
        onTap: () => setState({ pdpImgDot: i }),
      })),

      pdpWishlistBtnStyle: {
        width: '38px', height: '38px',
        background: pdpWl ? 'rgba(229,57,53,0.25)' : 'rgba(0,0,0,0.22)',
        border: pdpWl ? '1.5px solid rgba(229,57,53,0.5)' : '1.5px solid rgba(255,255,255,0.18)',
        borderRadius: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', backdropFilter: 'blur(10px)',
        animation: pdpWl ? 'heartPop 0.32s ease' : 'none',
      },
      pdpWishlistIconEl: this._mkWishlistIcon(pdpWl),
      pdpOnWishlist: () => setState(s => ({ pdpWl: !s.pdpWl })),

      pdpBottomWlStyle: {
        width: '52px', height: '52px',
        border: pdpWl ? '1.5px solid rgba(229,57,53,0.5)' : '1.5px solid #ECEAE6',
        borderRadius: '16px',
        background: pdpWl ? 'rgba(229,57,53,0.08)' : '#FAFAF8',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', flexShrink: '0',
        animation: pdpWl ? 'heartPop 0.32s ease' : 'none',
      },
      pdpBottomWlIconEl: this._mkBottomWlIcon(pdpWl),

      pdpDecStyle: {
        width: '40px', height: '40px', background: canDec ? '#fff' : '#F8F7F5',
        border: '1.5px solid #E8E6E1', borderRadius: '10px 0 0 10px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: canDec ? 'pointer' : 'default',
      },
      pdpIncStyle: {
        width: '40px', height: '40px', background: canInc ? '#E53935' : '#F8F7F5',
        border: canInc ? '1.5px solid #E53935' : '1.5px solid #E8E6E1',
        borderRadius: '0 10px 10px 0',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: canInc ? 'pointer' : 'default',
      },
      pdpDecColor: canDec ? '#141414' : '#D0CFD0',
      pdpIncColor: canInc ? '#fff' : '#D0CFD0',
      pdpQtyNumStyle: {
        fontSize: '15px', fontWeight: '800', color: '#141414',
        fontFamily: 'var(--font-body)',
        animation: 'qtyPop 0.2s ease',
      },
      pdpDecQty: () => { if (canDec) setState(s => ({ pdpQty: s.pdpQty - 1 })); },
      pdpIncQty: () => { if (canInc) setState(s => ({ pdpQty: s.pdpQty + 1 })); },

      pdpCartIconEl:  this._mkCartIcon(pdpInCart),
      pdpCartBtnStyle: {
        height: '40px', padding: '0 18px',
        background: pdpInCart ? '#F0FFF4' : '#141414',
        border: pdpInCart ? '1.5px solid #22C55E' : '1.5px solid transparent',
        borderRadius: '12px', display: 'flex', alignItems: 'center',
        justifyContent: 'center', gap: '6px', cursor: 'pointer',
        transition: 'all 0.2s ease',
      },
      pdpCartLblStyle: {
        fontSize: '12px', fontWeight: '700',
        color: pdpInCart ? '#16A34A' : '#fff',
        fontFamily: 'var(--font-body)',
        whiteSpace: 'nowrap',
      },
      pdpCartLbl:    pdpInCart ? 'Added!' : 'Add to Cart',
      pdpOnCart:     () => setState(s => ({ pdpInCart: !s.pdpInCart })),

      pdpBottomCartLbl: pdpInCart ? '✓ Added to Cart' : 'Add to Cart',
      pdpOnCartBottom:  () => setState(s => ({ pdpInCart: !s.pdpInCart })),

      pdpIsDesc:    pdpTab === 'desc',
      pdpIsSpecs:   pdpTab === 'specs',
      pdpIsReviews: pdpTab === 'reviews',
      pdpIsTags:    pdpTab === 'tags',
      pdpTabDescStyle:    this._tabStyle(pdpTab, 'desc'),
      pdpTabSpecsStyle:   this._tabStyle(pdpTab, 'specs'),
      pdpTabReviewsStyle: this._tabStyle(pdpTab, 'reviews'),
      pdpTabTagsStyle:    this._tabStyle(pdpTab, 'tags'),
      pdpSetTabDesc:    () => setState({ pdpTab: 'desc' }),
      pdpSetTabSpecs:   () => setState({ pdpTab: 'specs' }),
      pdpSetTabReviews: () => setState({ pdpTab: 'reviews' }),
      pdpSetTabTags:    () => setState({ pdpTab: 'tags' }),

      pdpGoBack: () => setState({ currentScreen: 'home' }),
    };
  },
};
