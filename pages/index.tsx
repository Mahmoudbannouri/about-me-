import { Box } from '@mui/material';
import type { NextPage } from 'next';
import TechTools from '../src/components/Sections/TechTools/TechTools'; // Ensure this path is correct
import Hero from '../src/components/Sections/Hero/Hero';
import Perks from '../src/components/Sections/Perks/Perks';
import Projects from '../src/components/Sections/Projects/Projects';
import CTA from '../src/components/Sections/CallToAction/CTA';
import { useEffect, useRef } from 'react';
import CursorAnimation from '../src/gsap/CursorAnimation';
import About from '../src/components/Sections/About/About';
import Layout from '../Layout/Layout';

interface HomeProps {
  projectsArray: any[];
  iconsArray: any[];
}

const Home: NextPage<HomeProps> = ({ projectsArray, iconsArray }) => {
  const ball = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ball.current) {
      CursorAnimation(ball.current);
    }
  }, []);

  return (
    <Layout
      desc={`Mahmoud Bannouri, a Tunisian software engineering student in Tunis, can develop all kinds of websites and web applications according to your needs`}
      title="Mahmoud Bannouri Fullstack Developer Personal Portfolio Website"
    >
      <Box
        sx={{
          margin: '0 auto',
          color: 'white',
        }}
      >
        <Hero />
        <Perks />
        <TechTools iconsArray={iconsArray} />
        <Projects projectsArray={projectsArray} />
        <About />
        <CTA />
        <Box
          ref={ball}
          sx={{
            display: {
              xs: 'none',
              md: 'block',
            },
          }}
          className="ball"
        ></Box>
      </Box>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  function removeEmpty(obj: any) {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null && v !== false));
  }

  try {
    const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
    const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

    const res = await fetch(`https://graphql.contentful.com/content/v1/spaces/${space}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        query: `
          {
            projectCollection {
              items {
                title
                repoUrl
                siteUrl
                description
                img
              }
            }
            iconsCollection {
              items {
                filter
                svg
                title
                isBackend
              }
            }
          }
        `,
      }),
    });

    const { data } = await res.json();

    if (!data || !data.projectCollection || !data.iconsCollection) {
      throw 'Error fetching data';
    }

    const iconsArray = data.iconsCollection.items.map(removeEmpty);

    return {
      props: {
        projectsArray: data.projectCollection.items,
        iconsArray,
      },
    };
  } catch (err) {
    console.log('err: ', err);
    return {
      props: {
        projectsArray: [],
        iconsArray: [],
      },
    };
  }
}
