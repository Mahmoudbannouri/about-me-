import { Box, Typography } from '@mui/material';
import CustomLink from '../Mui/CustomLink';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import gsap from 'gsap';

const Logo = ({ toggleDrawer, colorMode, color }: any) => {
    const router = useRouter();
    const [text, setText] = useState('Welcome'); // State to manage text

    // Handle scroll and update text
    useEffect(() => {
        const handleScroll = () => {
            // If the page is scrolled down, change text to 'Go back up'
            if (window.scrollY > 100) {
                setText('Go back up');
            } else {
                setText('Welcome');
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Handle logo click, scroll to hero section, and navigate to home
    const handleLogoClick = () => {
        toggleDrawer(false);
        
        // Scroll to the hero section smoothly
        gsap.to(window, {
            duration: 1,
            scrollTo: `#hero`,
        });

        // If not on the home page, navigate to it
        if (router.pathname !== '/') {
            router.push('/');
        }
    };

    return (
        <Box
            onClick={handleLogoClick}
            sx={{
                flex: 1,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            {/* Use Typography for the text, dynamically change based on scroll */}
            <Typography
                variant="h4"
                sx={{
                    fontWeight: '600',
                    color: colorMode.mode === 'dark' ? '#fff' : '#000',
                    transition: 'all 0.3s ease', // Smooth transition for text change
                }}
                className="logo-text"
            >
                {text}
            </Typography>
            {/* CustomLink for navigation */}
        </Box>
    );
};

export default Logo;
