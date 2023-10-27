import Feed from '@/components/Feed';

const Home = () => {
  return (
    <section className='flex w-full flex-col items-center justify-center'>
      <h1 className='mt-5 text-center text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl'>
        Discover & Share <br className='max-md:hidden' />
        {/** max-md hidden for smaller devices */}
        <span className='bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-center text-transparent'>
          AI-Powered Prompts
        </span>
      </h1>
      <p className='mt-5 max-w-2xl text-lg text-gray-600 sm:text-xl'>
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
