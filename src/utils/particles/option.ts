import { ISourceOptions } from '@tsparticles/engine';

export const particlesOption: ISourceOptions = {
  background: {
    size: 'cover',
    opacity: 0,
  },
  fullScreen: {
    enable: false,
    zIndex: 0,
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: '',
      },
      onHover: {
        enable: false,
        mode: '',
      },
    },
    modes: {
      push: {
        quantity: 0,
      },
      repulse: {
        distance: 0,
        duration: 0,
      },
    },
  },
  preset: 'links',
  particles: {
    color: {
      value: '#000',
    },
    links: {
      color: '#000',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'out',
      },
      random: false,
      speed: 6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 100,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};

const optionInit = () => {
  const o = particlesOption;
  o.particles = {};
  o.particles.shape = {};
};

// 星空おぷしょん
export const optionsStars = () => {
  const o = particlesOption;
  optionInit();
  // o.preset = 'stars';
  o.particles!.shape!.type = 'square';
  return o;
};
