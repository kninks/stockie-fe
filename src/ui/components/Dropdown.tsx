import { Select } from '@base-ui-components/react/select';
import styles from '../styles/components/Dropdown.module.css';
import * as React from 'react';
import ArrowSvg from '../../assets/icons/ArrowSvg.tsx';
import ChevronUpDownIcon from '../../assets/icons/ChevronUpDownIcon.tsx';
import CheckIcon from '../../assets/icons/CheckIcon.tsx';

export interface DropdownOption {
    value: string;
    label: string;
}

interface DropdownProps {
    options: { value: string; label: string }[];
    placeholder: string;
    selectedOption: string;
    onChange: (option: string) => void;
    icon?: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({
    options,
    placeholder,
    selectedOption,
    onChange,
    icon,
}) => {
    return (
        <div className={styles.SelectWrapper}>
            <Select.Root value={selectedOption} onValueChange={onChange}>
                <Select.Trigger className={styles.Select}>
                    {icon && <Select.Icon className={styles.SelectIcon}>{icon}</Select.Icon>}
                    <Select.Value placeholder={placeholder} />
                    <Select.Icon className={styles.SelectIcon}>
                        <ChevronUpDownIcon />
                    </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                    <Select.Positioner className={styles.Positioner} sideOffset={4}>
                        <Select.Popup className={styles.Popup}>
                            <Select.Arrow className={styles.Arrow}>
                                <ArrowSvg />
                            </Select.Arrow>
                            {options.map((option, index) => (
                                <Select.Item
                                    className={styles.Item}
                                    key={index}
                                    value={option.value}
                                >
                                    <Select.ItemIndicator className={styles.ItemIndicator}>
                                        <CheckIcon className={styles.ItemIndicatorIcon} />
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
        </div>
    );
};

export default Dropdown;

// <div className={styles.container}>
//     <Select.Root value={selectedOption} onValueChange={onChange}>
//         <Select.Trigger className={styles.select}>
//             <div className={styles.triggerContent}>
//                 <Select.Value placeholder={placeholder}/>
//             </div>
//             <Select.Icon className={styles.selectIcon}>
//                 <ChevronUpDownIcon/>
//             </Select.Icon>
//         </Select.Trigger>
//         <Select.Portal>
//             <Select.Positioner className={styles.positioner} sideOffset={8}>
//                 <Select.Popup className={styles.popup}>
//                     <Select.Arrow className={styles.arrow}>
//                         <ArrowSvg/>
//                     </Select.Arrow>
//                     {options.map((option, index) => (
//                         <Select.Item
//                             className={styles.item}
//                             key={index}
//                             value={option.value}
//                         >
//                             <Select.ItemText className={styles.itemText}>
//                                 {option.label}
//                             </Select.ItemText>
//                         </Select.Item>
//                     ))}
//                 </Select.Popup>
//             </Select.Positioner>
//         </Select.Portal>
//     </Select.Root>
// </div>
