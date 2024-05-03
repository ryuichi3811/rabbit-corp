import { ISourceOptions } from '@tsparticles/engine';

export const particlesOption: ISourceOptions = {
  // background: {
  //   color: '#000',
  // },
  fullScreen: {
    enable: true,
    zIndex: 0,
  },
  particles: {
    color: {
      value: [
        '#3998D0',
        '#2EB6AF',
        '#A9BD33',
        '#FEC73B',
        '#F89930',
        '#F45623',
        '#D62E32',
        '#EB586E',
        '#9952CF',
      ],
    },
    number: {
      value: 200,
    },
    // interactivity: {
    //   events: {
    // onClick: {
    //   enable: true,
    //   mode: 'push',
    // },
    //   onHover: {
    //     enable: true,
    //     mode: 'repulse',
    //   },
    // },
    // modes: {
    //   bubble: {
    //     distance: 400,
    //     opacity: 1,
    //     size: 40,
    //   },
    //   push: {
    //     quantity: 4,
    //   },
    // },
    // },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'out',
      },
      random: true,
      speed: 0.5,
      straight: false,
    },
    opacity: {
      animation: {
        enable: true,
        speed: 1,
        sync: false,
      },
      value: { min: 0, max: 1 },
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
};

const optionInit = () => {
  const o = particlesOption;
  o.preset = '';
  o.particles = {};
  o.particles.shape = {};
};

// 星空おぷしょん
export const optionsStars = () => {
  const o = particlesOption;
  optionInit();
  o.preset = 'stars';
  o.particles!.shape!.type = 'square';

  return o;
};
