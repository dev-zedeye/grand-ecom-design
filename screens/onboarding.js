window.OnboardingScreen = {
  slides: [
    {
      bg: '#FFB300',
      title: 'Fresh Groceries\nDelivered Fast',
      subtitle: 'Farm-fresh produce and 20,000+ products at your door in as little as 15 minutes.',
      items: [
        { emoji: '🍓', size: 112, x: '52%', y: '54%', anim: 'floatA', dur: 3.6, delay: '0s'   },
        { emoji: '🍅', size: 64,  x: '23%', y: '28%', anim: 'floatB', dur: 4.2, delay: '0.4s' },
        { emoji: '🥦', size: 58,  x: '82%', y: '63%', anim: 'floatC', dur: 3.9, delay: '0.8s' },
        { emoji: '🥕', size: 52,  x: '20%', y: '76%', anim: 'floatA', dur: 4.6, delay: '1.2s' },
      ],
    },
    {
      bg: '#FF6B35',
      title: 'Exclusive Deals\nEvery Day',
      subtitle: 'Save up to 40% on fresh produce, dairy, and pantry essentials with daily flash deals.',
      items: [
        { emoji: '🍊', size: 112, x: '50%', y: '52%', anim: 'floatB', dur: 3.7, delay: '0s'   },
        { emoji: '🍋', size: 64,  x: '78%', y: '27%', anim: 'floatA', dur: 4.0, delay: '0.5s' },
        { emoji: '🥭', size: 58,  x: '22%', y: '61%', anim: 'floatC', dur: 4.0, delay: '0.9s' },
        { emoji: '🍑', size: 52,  x: '76%', y: '77%', anim: 'floatB', dur: 4.4, delay: '1.3s' },
      ],
    },
    {
      bg: '#00897B',
      title: 'Track Orders\nin Real Time',
      subtitle: 'Live delivery tracking, instant status updates, and a 30-minute delivery guarantee.',
      items: [
        { emoji: '🥑', size: 112, x: '50%', y: '53%', anim: 'floatC', dur: 3.8, delay: '0s'   },
        { emoji: '🥝', size: 64,  x: '24%', y: '30%', anim: 'floatA', dur: 4.1, delay: '0.6s' },
        { emoji: '🫐', size: 58,  x: '80%', y: '58%', anim: 'floatB', dur: 3.9, delay: '1.0s' },
        { emoji: '🍇', size: 52,  x: '79%', y: '25%', anim: 'floatC', dur: 4.5, delay: '0.3s' },
      ],
    },
  ],

  touchStartX: 0,
  mouseStartX: 0,
  isDragging: false,

  advance(dir, state, setState) {
    if (state.fading) return;
    const next = state.currentSlide + dir;
    if (next >= this.slides.length) {
      setState({ fading: true });
      setTimeout(() => setState({ onboardingDone: true, fading: false }), 300);
      return;
    }
    if (next < 0) return;
    setState({ fading: true });
    setTimeout(() => setState({ currentSlide: next, fading: false }), 280);
  },

  renderVals(state, setState) {
    const { currentSlide, fading, onboardingDone } = state;
    const slide = this.slides[currentSlide];
    const isLast = currentSlide === this.slides.length - 1;

    return {
      isOnboardingScreen: state.currentScreen === 'onboarding',

      onboardingDone,
      onboardingNotDone: !onboardingDone,

      bgGlowStyle: {
        position: 'absolute',
        width: '640px',
        height: '640px',
        borderRadius: '50%',
        background: slide.bg,
        opacity: 0.13,
        filter: 'blur(130px)',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        transition: 'background 0.65s ease',
        pointerEvents: 'none',
        zIndex: 0,
      },

      screenStyle: {
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        background: onboardingDone ? '#FAFAF8' : slide.bg,
        transition: 'background 0.5s ease',
        fontFamily: "'Plus Jakarta Sans',sans-serif",
        animation: 'fadeInUp 0.3s ease both',
      },

      contentLayerStyle: {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        opacity: fading ? 0 : 1,
        transition: 'opacity 0.28s ease',
        pointerEvents: fading ? 'none' : 'auto',
      },

      circleStyle: {
        position: 'absolute',
        width: '256px',
        height: '256px',
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.15)',
        left: '50%',
        top: '248px',
        transform: 'translate(-50%,-50%)',
        pointerEvents: 'none',
        animation: 'pulseCircle 4.2s ease-in-out infinite',
      },

      onboardingItems: slide.items.map((item) => ({
        emoji: item.emoji,
        style: {
          position: 'absolute',
          left: item.x,
          top: item.y,
          fontSize: item.size + 'px',
          animation: item.anim + ' ' + item.dur + 's ease-in-out infinite ' + item.delay,
          filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.22))',
          userSelect: 'none',
          transform: 'translate(-50%,-50%)',
          lineHeight: '1',
          display: 'block',
          pointerEvents: 'none',
        },
      })),

      dots: this.slides.map((_, i) => ({
        style: {
          width: i === currentSlide ? '30px' : '8px',
          height: '8px',
          borderRadius: '4px',
          background: i === currentSlide ? '#E53935' : '#D2D2D2',
          transition: 'all 0.35s cubic-bezier(0.34,1.56,0.64,1)',
          flexShrink: '0',
        },
      })),

      slideTitle: slide.title,
      slideSubtitle: slide.subtitle,
      btnLabel: isLast ? 'Get Started' : 'Continue',

      goNext: () => this.advance(1, state, setState),

      skip: () => {
        if (state.fading) return;
        setState({ fading: true });
        setTimeout(() => setState({ onboardingDone: true, fading: false }), 300);
      },

      startShopping: () => setState({ currentScreen: 'login' }),

      onTouchStart: (e) => {
        if (state.currentScreen !== 'onboarding') return;
        this.touchStartX = e.touches[0].clientX;
      },
      onTouchEnd: (e) => {
        if (state.currentScreen !== 'onboarding') return;
        const dx = e.changedTouches[0].clientX - this.touchStartX;
        if (Math.abs(dx) > 50) this.advance(dx < 0 ? 1 : -1, state, setState);
      },
      onMouseDown: (e) => {
        this.isDragging = false;
        if (state.currentScreen !== 'onboarding') return;
        this.mouseStartX = e.clientX;
        this.isDragging = true;
      },
      onMouseUp: (e) => {
        const wasDragging = this.isDragging;
        this.isDragging = false;
        if (state.currentScreen !== 'onboarding' || !wasDragging) return;
        const dx = e.clientX - this.mouseStartX;
        if (Math.abs(dx) > 50) this.advance(dx < 0 ? 1 : -1, state, setState);
      },
    };
  },
};
