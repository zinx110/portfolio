import Head from "next/head";
import Education from "../components/Education/Education";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import About from "../components/About/About";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>zinx | Tasdid</title>
      </Head>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <About />
      <Skills />
      <Education />
      <Projects />
    </Layout>
  );
};

export default Home;
