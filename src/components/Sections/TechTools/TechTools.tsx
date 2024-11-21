import { Container, Grid, Divider, Typography, Box } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { ColorModeContext } from '../../../../pages/_app';
import { centeredStyles } from '../Perks/Perks';
import gsap from 'gsap';

interface TechToolsProps {
    iconsArray: any[];
}

const TechTools: React.FC<TechToolsProps> = ({ iconsArray }) => {
    const [dataLoaded, setDataLoaded] = useState(true); // Assume data is loaded

    const colorMode = useContext(ColorModeContext);

    // Updated technology logos array with correct URLs
    const techLogos = [
        { svg: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png' },
        { svg: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
        { svg: 'https://cdn-icons-png.freepik.com/512/919/919830.png' },
        { svg: 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png' },
        { svg: 'https://upload.wikimedia.org/wikipedia/commons/3/32/C%2B%2B_logo.png' },
        { svg: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png' },
        { svg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/701px-Python-logo-notext.svg.png' },
        { svg: 'https://cdn-icons-png.freepik.com/512/919/919836.png' },
        { svg: 'https://cdn-icons-png.flaticon.com/512/919/919854.png' }, // Updated Java logo
        { svg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Qt_logo_neon_2022.svg/1280px-Qt_logo_neon_2022.svg.png' }, // Updated Qt logo
        { svg: 'https://cdn-icons-png.flaticon.com/512/919/919825.png' }, // Updated Node.js logo
        { svg: 'https://logowik.com/content/uploads/images/express-js1720895488.logowik.com.webp' },
        { svg: 'https://symfony.com/logos/symfony_white_03.svg' },
        { svg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnhoVwuJmtF1Lu4t9WcsZ7fESV9KdIQ7pVHw&s' },
        { svg: 'https://upload.wikimedia.org/wikipedia/commons/3/30/JavaFX_text_logo.png' },
    ];

    // Combine predefined techLogos with iconsArray from props
    const combinedLogos = [...techLogos, ...iconsArray];

    // turn off "filter" mode when the theme is set to dark mode
    const isfilterMode = (item: any) => colorMode?.mode === 'light' ? false : item?.filter;

    useEffect(() => {
        // GSAP animation for the title (just like in Projects)
        gsap.fromTo('.technologies-title', {
            opacity: 0,
            y: -50,
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: '.technologies-title',
                start: 'top 70%',
            },
        });

        // GSAP animation for circular logos
        gsap.fromTo('.toolCardLogo', {
            scale: 0,
            rotation: 360,
        }, {
            scale: 1,
            rotation: 0,
            duration: 1,
            stagger: 0.1,
            ease: "elastic.out(1, 0.5)",
        });
    }, []);

    return (
        <>
            <Container maxWidth='lg' sx={{ margin: '0 auto', py: { xs: '6em' } }}>
                <Grid container>
                    {/* Header Section */}
                    <Grid item sx={centeredStyles}>
                        <Typography
                            className='title1 t25o0'
                            variant='h1'
                            sx={{
                                fontSize: { xs: '2.2em', sm: '2.5em', md: '3em' },
                            }}
                            fontWeight='600'>
                            Tools Of The Present And Future
                        </Typography>
                        <Typography
                            variant='h2'
                            className='secondary title2 t25o0'
                            sx={{
                                pt: '1.5em',
                                maxWidth: '570px',
                                fontSize: { xs: '.8em', sm: '1em' },
                            }}>
                            Frontend technologies I prefer using
                        </Typography>
                    </Grid>

                    {/* New Title for Technologies Section */}
                    <Grid item sx={centeredStyles} mt={4}>
                        <Typography
                            className="technologies-title"
                            variant="h3"
                            sx={{
                                fontSize: { xs: '1.8em', sm: '2em', md: '2.5em' },
                                fontWeight: '600',
                                textAlign: 'center',
                                color: colorMode?.mode === 'dark' ? '#fff' : '#000',
                            }}>
                            Technologies I Use
                        </Typography>
                    </Grid>

                    {/* Frontend Tools Section */}
                    <Grid
                        sx={{
                            ...centeredStyles,
                            flexDirection: 'row',
                            justifyContent: { xs: 'center' },
                            mt: '3em',
                            flexWrap: 'wrap',
                            gap: '2em', // Add space between the logos
                        }}
                        xs={12}
                        item>
                        {combinedLogos.length > 0 ? (
                            combinedLogos.map((item: any, index: number) => (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: '50%',
                                        overflow: 'hidden',
                                        width: '120px', // Increased size for avatars
                                        height: '120px', // Increased size for avatars
                                        backgroundColor: 'transparent', // Transparent background
                                        padding: '10px', // Padding to avoid edge clipping
                                    }}
                                    key={index}>
                                    <img
                                        className='toolCardLogo'
                                        src={item.svg}
                                        alt={`logo-${index}`}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain',
                                            borderRadius: '50%', // Circular shape
                                        }}
                                    />
                                </Box>
                            ))
                        ) : (
                            <Typography sx={{ color: 'red' }}>No Frontend tools available</Typography>
                        )}
                    </Grid>
                </Grid>
            </Container>
            <Divider />
        </>
    );
};

export default TechTools;
