import React, {useState} from "react";
import styles from './SearchBar.module.css'
import Search from "../../icons/Search/Search.tsx";

type SearchBarProps = {
    setValue: (value: string) => void,
    placeholder: string,
}

const SearchBar = ({setValue, placeholder}: SearchBarProps) => {
    const [input, setInput] = useState<string>('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setValue(input.trim())
        setInput('')
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor={'search'}>
                <Search customClass={styles.icon}/>
            </label>
            <input
                className={styles.search}
                type="text"
                id={'search'}
                autoComplete={'off'}
                placeholder={placeholder}
                value={input}
                onChange={handleInputChange}
            />
        </form>
    );
};

export default SearchBar;