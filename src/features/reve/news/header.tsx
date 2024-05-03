import { ParticleBackground } from '@/utils/particles';
import { particlesOption } from '@/utils/particles/option/fullScreen';

export const Header = () => {
  const option = particlesOption;
  return (
    <ParticleBackground option={option}>
      <div id="top" className="my-4 py-6 sm:py-14 lg:py-20">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <p className="mb-2 font-semibold text-indigo-500 md:mb-3 md:text-lg">
            Introducing
          </p>

          <h1 className="text-4xl font-bold tracking-wider text-reve-sub md:text-5xl lg:text-6xl">
            News
          </h1>
          <p className="text-sm md:text-lg lg:text-xl">お知らせ</p>
        </div>
      </div>
    </ParticleBackground>
  );
};
