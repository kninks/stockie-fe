import { Button, Modal, Typography } from '@mui/material';
import { useState } from 'react';
import Box from '@mui/material/Box';
// import { useLang } from '../../core/context/LanguageContext.tsx';
import SideStockie from '../assets/icons/SideStockie.tsx';
import IconStockie from '../assets/icons/IconStockie.tsx';

export const PlsSupportModalIconStockie = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button
                variant="text"
                onClick={handleOpen}
                sx={{
                    'padding': 0,
                    'minWidth': 0,
                    'height': '100%',
                    '&:hover': { backgroundColor: 'transparent' },
                    '&:focus': { outline: 'none' },
                    '&.Mui-focusVisible': { boxShadow: 'none' },
                }}
            >
                <IconStockie />
            </Button>

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
                        backgroundColor: 'background.paper',
                        boxShadow: 24,
                        borderRadius: 2,
                        p: 4,
                        minWidth: 300,
                        textAlign: 'center',
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: 'var(--header-3)',
                            fontWeight: '600',
                            color: 'var(--black-text)',
                        }}
                    >
                        Enjoying Stockie?
                    </Typography>
                    <Typography sx={{ marginBottom: '1rem', color: 'var(--black-text)' }}>
                        You can support the project here 💖
                    </Typography>
                    <img
                        src="/support-me-pls.jpeg"
                        alt="Please support me"
                        style={{
                            width: 'auto',
                            maxWidth: 250,
                            height: 'auto',
                        }}
                    />
                </Box>
            </Modal>
        </>
    );
};

export const PlsSupportModalSideStockie = () => {
    // const { t } = useLang();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button
                variant="text"
                onClick={handleOpen}
                disableRipple={true}
                sx={{
                    'padding': 0,
                    'minWidth': 0,
                    'height': '100%',
                    '&:hover': { backgroundColor: 'transparent' },
                    '&:focus': { outline: 'none' },
                    '&.Mui-focusVisible': { boxShadow: 'none' },
                    '&:hover .glow-text': {
                        textShadow: '0 0 0 var(--soft-white), 0 0 0.5rem var(--soft-white)',
                    },
                }}
            >
                <SideStockie />
            </Button>

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
                        backgroundColor: 'background.paper',
                        boxShadow: 24,
                        borderRadius: 2,
                        p: 4,
                        textAlign: 'center',
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: 'bold', color: 'var(--black-text)' }}
                    >
                        Enjoying Stockie?
                    </Typography>
                    <Typography sx={{ marginBottom: '1rem', color: 'var(--black-text)' }}>
                        You can support the project here 💖
                    </Typography>
                    <img
                        src="/support-me-pls.jpeg"
                        alt="Please support me"
                        style={{
                            width: 'auto',
                            maxWidth: 280,
                            height: 'auto',
                        }}
                    />
                </Box>
            </Modal>
        </>
    );
};
