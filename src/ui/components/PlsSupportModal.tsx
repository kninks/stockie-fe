import { Button, Modal, Typography } from '@mui/material';
import { useState } from 'react';
import Box from '@mui/material/Box';
// import { useLang } from '../../core/context/LanguageContext.tsx';
import SideStockie from '../assets/icons/SideStockie.tsx';

const PlsSupportModal = () => {
    // const { t } = useLang();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button
                variant="text"
                disableRipple
                disableFocusRipple
                onClick={handleOpen}
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
                {/*<Typography*/}
                {/*    className="glow-text"*/}
                {/*    sx={{*/}
                {/*        color: 'var(--soft-white)',*/}
                {/*        letterSpacing: '0.1rem',*/}
                {/*        fontSize: '1.2rem',*/}
                {/*        marginLeft: '1rem',*/}
                {/*    }}*/}
                {/*>*/}
                {/*    {t.layout.home.title}*/}
                {/*</Typography>*/}
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
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        borderRadius: 2,
                        p: 4,
                        minWidth: 300,
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'var(--black)' }}>
                        Enjoying Stockie?
                    </Typography>
                    <Typography sx={{ marginBottom: '1rem', color: 'var(--black)' }}>
                        You can support the project here 💖
                    </Typography>
                    <img
                        src="/support-me-pls.jpeg"
                        alt="Please support me"
                        style={{
                            width: 'auto',
                            maxWidth: 300,
                            height: 'auto',
                        }}
                    />
                </Box>
            </Modal>
        </>
    );
};

export default PlsSupportModal;
