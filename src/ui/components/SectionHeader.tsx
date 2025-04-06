import React from 'react';
import { Typography } from '@mui/material';

interface SectionHeaderProps {
    children: React.ReactNode;
    align?: 'left' | 'center' | 'right';
    color?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    children,
    align = 'center',
    color = 'var(--text-header)',
}) => {
    return (
        <Typography
            sx={{
                fontSize: 'var(--header-2)',
                fontWeight: 600,
                letterSpacing: '0.08rem',
                paddingBottom: '0.5rem',
                marginBottom: '1rem',
                textAlign: align,
                color: color,
            }}
        >
            {children}
        </Typography>
    );
};

export default SectionHeader;
