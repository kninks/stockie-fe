import styles from './styles/SelectDropdown.module.css';
import * as React from 'react';
import ChevronUpDownIcon from '../assets/icons/ChevronUpDownIcon.tsx';

export interface SelectDropdownOptionInterface<T extends string | number = string> {
    value: T;
    label: string;
}

interface SelectDropdownProps<T extends string | number = string> {
    options: SelectDropdownOptionInterface<T>[];
    placeholder?: string;
    selectedOption: T;
    onChange: (option: T) => void;
    icon?: React.ReactNode;
    label?: string;
}

const SelectDropdown = <T extends string | number = string>({
    options,
    placeholder,
    selectedOption,
    onChange,
    icon,
    label,
}: SelectDropdownProps<T>) => {
    const selectRef = React.useRef<HTMLSelectElement>(null);

    return (
        <div className={styles.SelectContainer}>
            {label && <label className={styles.SelectLabel}>{label}</label>}
            <div className={styles.SelectWrapper} onClick={() => selectRef.current?.showPicker()}>
                <div className={styles.SelectIconAndOptionsWrapper}>
                    {icon && <span className={styles.SelectIcon}>{icon}</span>}
                    <select
                        ref={selectRef}
                        className={styles.Select}
                        value={selectedOption}
                        onChange={(e) => {
                            const rawValue = e.target.value;
                            const castedValue = (
                                isNaN(Number(rawValue)) ? rawValue : Number(rawValue)
                            ) as T;
                            onChange(castedValue);
                        }}
                    >
                        <option value="" disabled>
                            {placeholder}
                        </option>
                        {options.map((option, index) => (
                            <option key={index} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
                <ChevronUpDownIcon />
            </div>
        </div>
    );
};

export default SelectDropdown;
