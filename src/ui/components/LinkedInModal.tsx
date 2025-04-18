import { Modal, Typography, IconButton, Link, Avatar } from '@mui/material';
import { useState } from 'react';
import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const LinkedInModal = () => {
    const teamMembers = [
        {
            name: 'Kankanit Suppataratarn',
            image: '/bubble-jojo.jpeg',
            linkedin: 'https://www.linkedin.com/in/kankanit-suppataratarn/',
        },
        {
            name: 'Nalanlak Wonggulya',
            image: '/',
            linkedin: 'https://www.linkedin.com/in/nalanlak-wonggulya/',
        },
        {
            name: 'Sasinapa Anugulsawad',
            image: '/',
            linkedin: 'https://www.linkedin.com/in/sasinapa-fah-anugulsawad-a6a92924b/',
        },
    ];

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <IconButton
                onClick={handleOpen}
                sx={{
                    'color': 'var(--soft-white)',
                    '&:hover': {
                        backgroundColor: 'var(--grey-light-100)',
                        color: '#0077B5',
                    },
                    '&:focus': { outline: 'none' },
                }}
            >
                <LinkedInIcon />
            </IconButton>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        borderRadius: 2,
                        padding: '2rem 3rem',
                        mazWidth: 250,
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2rem',
                    }}
                >
                    {teamMembers.map((m) => (
                        <Box
                            key={m.name}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column',
                                gap: '0.3rem',
                            }}
                        >
                            <Link
                                href={m.linkedin}
                                target="_blank"
                                rel="noopener"
                                underline="none"
                                sx={{ display: 'inline-block' }}
                            >
                                <Avatar
                                    alt={m.name}
                                    src={m.image}
                                    sx={{ width: '80px', height: '80px' }}
                                />
                            </Link>
                            <Typography
                                noWrap
                                sx={{
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    fontWeight: 600,
                                    textAlign: 'center',
                                    color: 'var(--black-text)',
                                }}
                            >
                                {m.name}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Modal>
        </>
    );
};
