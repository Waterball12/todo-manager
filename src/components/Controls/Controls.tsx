import React, {useState} from 'react';
import "./Controls.css";

export interface IProps {
    /**
     * Fires once the user has clicked on the add button or pressed enter
     * @param content The content to display inside the Todo item
     */
    onChange: (content: string) => void;
}

const Controls = (props: IProps) => {
    const {
        onChange
    } = props;

    /**
     * Use the useState hook to hold the value of the input
     * So it can be later on used to fire the onChange event
     * @default empty string
     */
    const [value, setValue] = useState('');

    /**
     * Handle the input change
     * @param event ChangeEvent that holds the value of the input
     */
    const handleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    /**
     * Handle the button click and call the handleInsert function
     */
    const handleButtonClick = () => handleInsert();

    /**
     * Handle the keyboard down event from the keyboard
     * So the user doesn't have to click on the Add button
     * But can simply press enter
     * @param event Keyboard event
     */
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        /**
         * If the pressed key is enter then call handleInsert function
         */
        if (event.key === 'Enter') {
            handleInsert();
        }
    }

    /**
     * Fires the onChange function and reset the value of the input element
     */
    const handleInsert = () => {
        // Removes whitespaces from the input element and checks if it has at least 1 character
        if (value.trim().length >= 1) {
            // Check if onChange is set and if so fires the onChange function
            onChange && onChange(value);
            // Reset the value of the input element
            setValue('');
        }
    }

    return (
        <div className="control-container">
            <input
                className="text-input"
                value={value}
                onChange={handleValue}
                onKeyDown={handleKeyDown}
                type="text"
                placeholder="Add new"
            />
            <button
                className="add-button"
                onClick={handleButtonClick}
            >
                +
            </button>
        </div>
    );
};

export default Controls;
