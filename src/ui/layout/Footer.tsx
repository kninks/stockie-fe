import { Typography, useTheme, useMediaQuery } from '@mui/material';
// import GitHubIcon from '@mui/icons-material/GitHub';
import { LinkedInModal } from '../components/LinkedInModal.tsx';

const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <footer
            style={{
                backgroundColor: 'var(--secondary)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: 'var(--soft-white)',
                padding: isMobile ? '1rem 0.5rem 1rem 1rem' : '1rem 1rem 1rem 1.5rem',
            }}
        >
            <Typography>© 2025 Stockie. All rights reserved.</Typography>
            <LinkedInModal />
        </footer>
    );
};

export default Footer;
