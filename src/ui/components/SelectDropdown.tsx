import styles from '../styles/components/SelectDropdown.module.css';
import * as React from 'react';
import ChevronUpDownIcon from '../../assets/icons/ChevronUpDownIcon.tsx';

interface SelectDropdownOption<T extends string | number> {
    value: T;
    label: string;
}

interface SelectDropdownProps<T extends string | number> {
    options: SelectDropdownOption<T>[];
    placeholder: string;
    selectedOption: T;
    onChange: (option: T) => void;
    icon?: React.ReactNode;
}

const SelectDropdown = <T extends string | number>({
    options,
    placeholder,
    selectedOption,
    onChange,
    icon,
}: SelectDropdownProps<T>) => {
    const selectRef = React.useRef<HTMLSelectElement>(null);

    return (
        <div className={styles.SelectWrapper} onClick={() => selectRef.current?.showPicker()}>
            {icon && <span className={styles.SelectIcon}>{icon}</span>}
            <select
                ref={selectRef}
                className={styles.Select}
                value={selectedOption}
                onChange={(e) => onChange(e.target.value as T)}
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
            <ChevronUpDownIcon />
        </div>
    );
};

export default SelectDropdown;
