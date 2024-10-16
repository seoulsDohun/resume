import Head from 'next/head';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import OtherExperiences from './components/OtherExperiences';
import Skills from './components/Skills';

export default function Home() {
  return (
    <>
      <Head>
        <title>김도훈의 기술이력서</title>
        <meta name="description" content="프론트엔드 개발자 김도훈의 기술이력서 입니다." />
        <meta name="keywords" content="프론트엔드, 개발자, 김도훈, 기술이력서" />
        <meta property="og:title" content="김도훈의 기술이력서" />
        <meta
          property="og:description"
          content="프론트엔드 개발자 김도훈의 기술이력서 입니다."
        />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <About />
        <Experience />
        <OtherExperiences />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
