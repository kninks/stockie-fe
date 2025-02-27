import React from "react";
import styles from "../styles/components/SectionHeader.module.css";

interface SectionHeaderProps {
    children: React.ReactNode;
    align?: "left" | "center" | "right";
    color?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
                                                         children,
                                                         align = "center",
                                                         color = "var(--text)", // Default color from theme
                                                     }) => {
    return (
        <h2 className={styles.sectionHeader} style={{ textAlign: align, color }}>
            {children}
        </h2>
    );
};

export default SectionHeader;