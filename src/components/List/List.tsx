import React from 'react';
import "./List.css";
import ListItem from "../ListItem/ListItem";

export interface IProps {
    /**
     * Array of Todo items
     */
    todo: Array<Todo>;
    /**
     * Fires once the user click on the delete button
     * @param id Unique identifier for the Todo item
     */
    onDelete: (id: number) => void;
}

export interface Todo {
    /**
     * Unique identifier for the item
     */
    id: number;
    /**
     * The content of the Todo item
     */
    content: string;
}

/**
 * Component to display the todo items
 * @param props
 * @constructor
 */
const List = (props: IProps) => {
    const {
        todo,
        onDelete
    } = props;

    /**
     * Fire the onDelete to remove the todo item
     * @param id Unique identifier for the todo item
     */
    const removeItem = (id: number) => {
        onDelete && onDelete(id);
    }

    return (
        <ul className="todo-list">
            {/** Use a custom ID instead of array key so it doesn't create weird behaviour on delete previous items **/}
            {todo.map(x => (
                <ListItem key={x.id} content={x.content} id={x.id} onDelete={removeItem} />
            ))}
        </ul>
    );
};

export default List;
