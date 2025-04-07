import styles from './styles/Footer.module.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton, Link, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import Box from '@mui/material/Box';

const Footer = () => {
    return (
        <footer className={styles.container}>
            <Typography>© 2025 Stockie. All rights reserved.</Typography>
            <Box sx={{ display: 'flex', gap: '0.2rem' }}>
                <IconButton
                    component={Link}
                    href="https://github.com/kninks"
                    target="_blank"
                    rel="noopener"
                    sx={{
                        'color': 'var(--soft-white)',
                        '&:hover': {
                            backgroundColor: 'var(--grey-light-100)',
                            color: 'var(--black)',
                        },
                    }}
                >
                    <GitHubIcon />
                </IconButton>

                <IconButton
                    component={Link}
                    href="https://www.linkedin.com/in/kankanit-suppataratarn/"
                    target="_blank"
                    rel="noopener"
                    sx={{
                        'color': 'var(--soft-white)',
                        '&:hover': {
                            backgroundColor: 'var(--grey-light-100)',
                            color: '#0077B5',
                        },
                    }}
                >
                    <LinkedInIcon />
                </IconButton>
            </Box>
        </footer>
    );
};

export default Footer;
