import React, { lazy, Suspense } from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme, mediaQueries } from "./Themes";
import astronaut from "../assets/Images/spaceman.png";
import { motion } from "framer-motion";
import Loading from "../subComponents/Loading";

const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const PowerButton = lazy(() => import("../subComponents/PowerButton"));
const LogoComponent = lazy(() => import("../subComponents/LogoComponent"));
const ParticleComponent = lazy(() =>
  import("../subComponents/ParticleComponent")
);
const BigTitle = lazy(() => import("../subComponents/BigTitle"));

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`;

const Spaceman = styled(motion.div)`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;

const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 13rem;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;

  ${mediaQueries(40)`
    width: 60vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `}

  ${mediaQueries(30)`
    width: 50vw;
    height: auto
    backdrop-filter: none;
    margin-top: 2rem;
  `}

  ${mediaQueries(20)`
    padding: 1rem;
    font-size: calc(0.5rem + 1vw);
  `}
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Suspense fallback={<Loading />}>
        <Box
          key="skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <LogoComponent theme="dark" />
          <SocialIcons theme="dark" />
          <PowerButton />
          <ParticleComponent theme="dark" />

          <Spaceman
            initial={{ right: "-20%", top: "100%" }}
            animate={{
              right: "5%",
              top: "10%",
              transition: { duration: 2, delay: 0.5 },
            }}
          >
            <img src={astronaut} alt="spaceman" />
          </Spaceman>

          <Main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
          >
I’m a final-year Integrated B.Tech (IT) student at IIIT Gwalior with a strong foundation in backend development and a growing passion for system design and DevOps. I’m fascinated by how systems work—from architecture and cloud infrastructure to deployment—and I enjoy building scalable, maintainable solutions that solve real-world problems.

<br /><br />

Through hands-on internships and projects, I’ve developed robust backend services, integrated cloud platforms and payment systems, and explored cloud-native tooling like Docker, AWS, CI/CD, and Kubernetes. I love working on projects that challenge me to think critically, design systems efficiently, and write clean, reliable code.

          </Main>

          <BigTitle text="ABOUT" $top="70%" $left="10%" />
        </Box>
      </Suspense>
    </ThemeProvider>
  );
};

export default AboutPage;
