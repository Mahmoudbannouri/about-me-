import Box from '@mui/material/Box';
import { IToolCard } from '../../../Types/Types';
import { centeredStyles } from '../Perks/Perks';
import { useEffect } from 'react';
import gsap from 'gsap';

const ToolCard = ({ svg, filter, className }: IToolCard) => {
    useEffect(() => {
        gsap.to(`.${className}`, {
            opacity: 1,
            stagger: 0.10,
            scrollTrigger: {
                trigger: `.${className}`,
                start: 'top 70%',
            },
        });
    }, []);

    return (
        <Box
            className={className}
            sx={{
                my: '1em',
                opacity: 0,
                maxWidth: '250px',
                transition: '.2s ease',
                width: { xs: '50%', sm: '33%' },
            }}
        >
            <Box
                sx={{
                    ...centeredStyles,
                    width: { xs: '35px', sm: '60px' },
                    height: { xs: '40px', sm: '60px' },
                }}
            >
                {/* Render logo directly as img */}
                <img
                    src={svg} // Direct URL for logo
                    alt="Logo"
                    className={`${filter ? 'filter ' : ''} icon`}
                    width="100%"
                    height="100%"
                />
            </Box>
        </Box>
    );
};

export default ToolCard;
