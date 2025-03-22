import React from 'react';
import styles from '../styles/components/Typography.module.css';

interface TypographyProps {
    variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption';
    children: React.ReactNode;
    className?: string;
    align?: 'left' | 'center' | 'right' | 'justify';
    weight?: number | string;
    color?: string;
}
const Typography: React.FC<TypographyProps> = ({
    variant = 'body',
    children,
    className = '',
    align = 'left',
    weight = 'normal',
    color = 'inherit',
}) => {
    const Component = variant;

    return (
        <Component
            className={`${styles.typography} ${styles[variant]} ${className}`}
            style={{
                textAlign: align,
                fontWeight: weight,
                color,
            }}
        >
            {children}
        </Component>
    );
};

export default Typography;
