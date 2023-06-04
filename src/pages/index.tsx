import Lottie from 'lottie-react';
import loaderAnimation from 'public/assets/lottieFiles/loader.json';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main meta={<Meta title="Groot Tech Lab" description="Groot Tech Lab" />}>
      <header className="flex flex-col items-center">
        <Lottie
          animationData={loaderAnimation}
          loop
          autoplay
          className="loader"
        />
        <h2 className="clipped-text py-8 text-center text-6xl font-black tracking-wide md:text-8xl">
          Coming Soon
        </h2>
        <p className="mx-4 mt-4 max-w-2xl text-center font-light text-gray-500 dark:text-gray-300 md:mx-auto">
          Prepare to be amazed! Our brand new website is coming soon, packed
          with stunning visuals, seamless navigation, and captivating content.
          Stay tuned for an immersive online experience that will leave you
          inspired and eager to explore.
        </p>
      </header>
    </Main>
  );
};

export default Index;
