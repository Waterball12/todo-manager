import React from 'react';
import "./ListItem.css";

export interface IProps {
    /**
     * Unique identifier for the Item
     */
    id: number;
    /**
     * The content to display inside the ListItem
     */
    content: string;
    /**
     * Fires once the user click on the delete button
     * @param id The identifier of the ListItem
     */
    onDelete: (id: number) => void;
}

/**
 * A Todo list item that displays the content and provide a delete button
 * @param props Options to display the ListItem
 */
const ListItem = (props: IProps) => {
    // Destructuring the Props
    const {
        id,
        content,
        onDelete
    } = props;

    /**
     * Handle the event fired by the delete button
     */
    const handleDelete = () => {
        onDelete && onDelete(id);
    }

    return (
        <li className="todo-item">
            {content}
            <button className="delete-button" onClick={handleDelete}>
                {/** Simple SVG that display a simple X **/}
                <svg x="0px" y="0px" viewBox="0 0 512.001 512.001">
                    <path d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717
                        L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859
                        c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287
                        l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285
                        L284.286,256.002z"/>
                </svg>
            </button>
        </li>
    );
};

export default ListItem;
