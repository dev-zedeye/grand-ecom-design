window.LoyaltyScreen = {
  renderVals(state, setState) {
    const { loyaltyTcOpen = false } = state;
    return {
      loyaltyTcOpen,
      loyaltyToggleTC: () => setState(s => ({ loyaltyTcOpen: !s.loyaltyTcOpen })),
      loyaltyTcChevronStyle: {
        width: '28px', height: '28px', borderRadius: '8px',
        background: '#F5F4F0', display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        transition: 'transform 0.25s ease',
        transform: loyaltyTcOpen ? 'rotate(180deg)' : 'rotate(0deg)',
        flexShrink: 0,
      },
    };
  },
};
