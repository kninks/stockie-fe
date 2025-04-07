import React from 'react';
import { Divider, Typography } from '@mui/material';

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
        <Divider
            textAlign={align}
            sx={{
                paddingBottom: '0.5rem',
                marginBottom: '1rem',
            }}
        >
            <Typography
                sx={{
                    fontSize: 'var(--header-2)',
                    fontWeight: 600,
                    letterSpacing: '0.08rem',
                    color: color,
                }}
            >
                {children}
            </Typography>
        </Divider>
    );
};

export default SectionHeader;
