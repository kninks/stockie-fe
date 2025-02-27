import {Select} from '@base-ui-components/react/select';
import styles from '../styles/components/SelectDropdown.module.css';
import * as React from "react";
import ArrowSvg from "../assets/icons/ArrowSvg.tsx";
import ChevronUpDownIcon from "../assets/icons/ChevronUpDownIcon.tsx";
import CheckIcon from "../assets/icons/CheckIcon.tsx";

export interface SelectDropdownOption {
    value: string;
    label: string;
}

interface SelectDropdownProps {
    options: { value: string; label: string }[];
    placeholder: string;
    selectedOption: string;
    onChange: (option: string) => void;
    icon?: React.ReactNode
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({
                                               options,
                                               placeholder,
                                               selectedOption,
                                               onChange,
                                               icon
                                           }) => {
    return (
        <>
            <Select.Root defaultValue="sans" value={selectedOption} onValueChange={onChange}>
                <Select.Trigger className={styles.Select}>
                    {icon && <Select.Icon className={styles.SelectIcon}>{icon}</Select.Icon>}
                    <Select.Value placeholder={placeholder}/>
                    <Select.Icon className={styles.SelectIcon}>
                        <ChevronUpDownIcon/>
                    </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                    <Select.Positioner sideOffset={8}>
                        <Select.Popup className={styles.Popup}>
                            <Select.Arrow className={styles.Arrow}>
                                <ArrowSvg/>
                            </Select.Arrow>
                            {options.map((option, index) => (
                                <Select.Item
                                    className={styles.Item}
                                    key={index}
                                    value={option.value}
                                >
                                    <Select.ItemIndicator className={styles.ItemIndicator}>
                                        <CheckIcon className={styles.ItemIndicatorIcon}/>
                                    </Select.ItemIndicator>
                                    <Select.ItemText className={styles.ItemText}>
                                        {option.label}
                                    </Select.ItemText>
                                </Select.Item>
                            ))}
                        </Select.Popup>
                    </Select.Positioner>
                </Select.Portal>
            </Select.Root>
        </>
    )
}

export default SelectDropdown;