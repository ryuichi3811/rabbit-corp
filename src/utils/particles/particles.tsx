'use client';
import {
  type Container,
  IOptions,
  type ISourceOptions,
  RecursivePartial,
} from '@tsparticles/engine';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { ReactNode, useEffect, useMemo, useState } from 'react';

export const ParticleBackground = ({
  option,
  children,
}: {
  option: RecursivePartial<IOptions>;
  children: ReactNode;
}) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // const particlesLoaded = async (container?: Container): Promise<void> => {
  //   console.log(container);
  // };

  const options: ISourceOptions = useMemo(() => option, [option]);

  if (init) {
    return (
      <>
        <div className="relative h-full w-full">
          <Particles
            id="tsparticles"
            className="absolute left-0 top-0 z-0 h-full w-full"
            // particlesLoaded={particlesLoaded}
            options={options}
          />
          {children}
        </div>
      </>
    );
  }

  return <></>;
};
export const ParticleBackgroundSub = ({
  option,
  children,
}: {
  option: RecursivePartial<IOptions>;
  children: ReactNode;
}) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(() => option, [option]);

  if (init) {
    return (
      <>
        <div className="relative h-full w-full">
          <Particles
            id="tsparticles"
            className="absolute left-0 top-0 z-0 h-full w-full"
            particlesLoaded={particlesLoaded}
            options={options}
          />
          {children}
        </div>
      </>
    );
  }

  return <></>;
};
