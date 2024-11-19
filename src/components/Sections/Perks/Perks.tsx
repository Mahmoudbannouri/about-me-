import { Box, Container, Typography, Divider } from '@mui/material';
import PerkCard from './PerkCard';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import MainTitleAnimation from '../../../gsap/MainTitleAnimation';
import HandymanIcon from '@mui/icons-material/Handyman';
import HttpIcon from '@mui/icons-material/Http';
import DevicesIcon from '@mui/icons-material/Devices';

// Centralized style object for reuse
export const centeredStyles = {
    alignItems: 'center',
    textAlign: 'center',
    margin: '0 auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
};

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Perk data
const perksArray = [
    {
        title: 'Continuous Support',
        Icon: HandymanIcon,
        text: 'I provide ongoing support for your web-based software to ensure it remains efficient and competitive in the market. With a solid DevOps process, I can roll out urgent updates in a few hours and release new, planned functional modules every other week.',
    },
    {
        title: 'Back-End Development',
        text: 'I specialize in implementing the business logic for your web app on the back end. Using reliable frameworks, I ensure quick and high-quality coding. Additionally, I build well-structured APIs to integrate your app with corporate or third-party systems and services.',
        Icon: HttpIcon,
    },
    {
        title: 'Desktop Application Development',
        Icon: DevicesIcon,
        text: 'With strong experience in desktop application development, I work with technologies like Java and C++ to create powerful, cross-platform solutions. Whether it’s a desktop UI using JavaFX or a C++ application with qt, I ensure high performance and seamless user experiences.',
    },
];


const Perks = () => {
    useEffect(() => {
        MainTitleAnimation('.h1', '.h2');
    }, []);

    return (
        <>
            <Container
                maxWidth="lg"
                sx={{
                    margin: '0 auto',
                    my: '4em',
                }}
            >
                <Box sx={centeredStyles}>
                    <Typography
                        className="h1 t25o0"
                        variant="h1"
                        sx={{
                            fontSize: { xs: '2.2em', sm: '2.5em', md: '3em' },
                        }}
                        fontWeight="600"
                    >
                        You&apos;re Safe and in Good Hands
                    </Typography>
                    <Typography
                        variant="h2"
                        className="secondary h2"
                        sx={{
                            pt: '1.5em',
                            transform: 'translateY(15px)',
                            opacity: 0,
                            maxWidth: '570px',
                            fontSize: { xs: '.8em', sm: '1em' },
                        }}
                    >
                        Customer satisfaction comes first, and in order to do that, I&apos;ve picked up the skills and principles to provide quality service.
                    </Typography>
                    <Box
                        sx={{
                            mt: '3em',
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '5%',
                            justifyContent: { xs: 'center', sm: 'space-between' },
                        }}
                    >
                        {perksArray.map((perk) => (
                            <PerkCard
                                key={perk.title}
                                title={perk.title}
                                text={perk.text}
                                Icon={perk.Icon}
                            />
                        ))}
                    </Box>
                </Box>
            </Container>
            <Divider />
        </>
    );
};

export default Perks;
