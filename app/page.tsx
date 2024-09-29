import Navbar from './components/Navbar';

import HeroTop from './components/HeroTop';
import HeroBottom from './components/HeroBottom';

export default function Home() {
  return (
    <main className="min-h-screen w-full px-4 py-7 lg:mx-auto lg:flex lg:max-w-6xl lg:flex-col lg:items-center lg:justify-center">
      <Navbar />
      <HeroTop />
      <HeroBottom />
    </main>
  );
}
