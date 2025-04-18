import styles from './styles/Footer.module.css';
import { Typography } from '@mui/material';
// import GitHubIcon from '@mui/icons-material/GitHub';
import Box from '@mui/material/Box';
import { LinkedInModal } from '../components/LinkedInModal.tsx';

const Footer = () => {
    return (
        <footer className={styles.container}>
            <Typography>© 2025 Stockie. All rights reserved.</Typography>
            <Box sx={{ display: 'flex', gap: '0.2rem' }}>
                {/*<IconButton*/}
                {/*    component={Link}*/}
                {/*    href="https://github.com/kninks"*/}
                {/*    target="_blank"*/}
                {/*    rel="noopener"*/}
                {/*    sx={{*/}
                {/*        'color': 'var(--soft-white)',*/}
                {/*        '&:hover': {*/}
                {/*            backgroundColor: 'var(--grey-light-100)',*/}
                {/*            color: 'var(--black)',*/}
                {/*        },*/}
                {/*    }}*/}
                {/*>*/}
                {/*    <GitHubIcon />*/}
                {/*</IconButton>*/}
                <LinkedInModal />
            </Box>
        </footer>
    );
};

export default Footer;
