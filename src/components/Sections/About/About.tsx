import { Container, Box, Grid } from '@mui/material';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import ReadMore from '../ReadMore/ReadMore';
import { ColorModeContext } from '../../../../pages/_app';
import { useContext } from 'react';

const About = () => {
    const colorMode = useContext(ColorModeContext);
    return (
        <>
            <Container
                id="about"
                maxWidth="lg"
                sx={{
                    margin: '0 auto',
                    py: '6em',
                }}
            >
                <Grid
                    container
                    sx={{
                        justifyContent: {
                            sm: 'center',
                            md: 'space-between',
                        },
                    }}
                >
                    <Grid item xs={12} sm={12} md={4} lg={5}>
                        <Box
                            sx={{
                                maxWidth: '400px',
                                width: '100%',
                                height: '450px',
                                margin: '0 auto',
                                boxShadow: {
                                    xs: '-.5em 1.5em 0px #0092ff',
                                    sm: '-1.5em 1.5em 0px #0092ff',
                                },
                                position: 'relative',
                            }}
                        >
                            <Box
                                sx={{
                                    width: '100px',
                                    height: '100px',
                                    zIndex: '0',
                                    position: 'absolute',
                                    right: {
                                        xs: '-4%',
                                        sm: '90%',
                                    },
                                    bottom: {
                                        xs: '-5%',
                                        sm: '-10%',
                                    },
                                    background: 'transparent',
                                    backgroundImage:
                                        colorMode.mode === 'dark'
                                            ? 'radial-gradient(white 2px, transparent 0)'
                                            : 'radial-gradient(black 2px, transparent 0)',
                                    backgroundSize: '15px 13px',
                                }}
                            ></Box>
                            <Image
                                alt="Personal Image"
                                className="img1"
                                layout="fill"
                                src="https://res.cloudinary.com/dqvlxyfhh/image/upload/v1732016660/ppszwhdjznxkbwrxt08m.jpg"
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={7.5} lg={7}>
                        <Box sx={{ pb: '.5em' }}>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: {
                                        xs: '2.2em',
                                        sm: '2.5em',
                                        md: '3em',
                                    },
                                    py: '.5em',
                                    pt: {
                                        xs: '1.8em',
                                        md: 0,
                                    },
                                }}
                                fontWeight="600"
                            >
                                About Me, I'm a Student from Esprit
                            </Typography>
                            <Typography
                                variant="h2"
                                sx={{
                                    maxWidth: '570px',
                                    fontSize: {
                                        xs: '.8em',
                                        sm: '1em',
                                    },
                                }}
                            >
                                I'm a 22-year-old student at Esprit in Tunis, Tunisia. I started learning software development by working with various technologies like HTML, CSS, JavaScript, and Flutter, and I've been developing web and mobile applications for the past few years.
                            </Typography>
                        </Box>
                        <Typography
                            variant="h2"
                            sx={{
                                maxWidth: '570px',
                                fontSize: {
                                    xs: '.8em',
                                    sm: '1em',
                                },
                                pb: '.5em',
                            }}
                        >
                            I'm currently studying Management Information Systems, and I have a passion for both technology and business. I also enjoy solving complex problems and continuously improving my skills.
                        </Typography>
                        <ReadMore>
                            Aside from my studies, I enjoy petting cats, hitting the gym, and other activities. If you'd like to connect or learn more about me, feel free to reach out!
                        </ReadMore>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default About;