theme: {
  extend: {
    colors: {
      'pratiyog-black': '#020104',
      'pratiyog-deep': '#0F051E',
      'pratiyog-purple': '#5E0FD6',
      'pratiyog-mpurple': '#8A3CFF',
      'pratiyog-lpurple': '#B388FF',
      'pratiyog-gold': '#FFCA28',
      'pratiyog-lgold': '#FFE082',
      'pratiyog-dgold': '#FFB300',
      'pratiyog-cream': '#FFF8E1',
    },
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'hero-glow': 'radial-gradient(ellipse at center, rgba(94,15,214,0.7) 0%, transparent 70%)',
    },
    animation: {
      'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      'shimmer': 'shimmer 4s linear infinite',
    },
    keyframes: {
      glowPulse: {
        '0%, 100%': { boxShadow: '0 0 20px rgba(255,202,40,0.3)' },
        '50%': { boxShadow: '0 0 60px rgba(179,136,255,0.7), 0 0 100px rgba(255,202,40,0.4)' },
      },
      shimmer: {
        '0%': { backgroundPosition: '0% 50%' },
        '100%': { backgroundPosition: '200% 50%' },
      },
    },
  },
},
