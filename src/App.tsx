import React, {useState} from 'react';
import Controls from "./components/Controls/Controls";
import List, {Todo} from './components/List/List';

const App = () => {
    /**
     * Uses the useState hook to hold the list of Todo items
     */
    const [list, setList] = useState<Array<Todo>>([]);
    /**
     * Keeps a counter to identify new items to add to the list
     */
    const [counter, setCounter] = useState(0);

    /**
     * Removes a Todo from the list by it's ID
     * @param id Unique identifier for the todo item
     */
    const handleRemove = (id: number) => {
        setList(prev => prev.filter(x => x.id !== id));
    }

    /**
     * Insert to the list a Todo item
     * @param content The content to add to the Todo list
     */
    const handleInsert = (content: string) => {
        // Use the setList function provided by the useState hook
        // And Take the previous content and add a new todo item
        setList(prev => [...prev, {
            id: counter,
            content: content
        }]);
        // Increase the counter by one so the next item won't have the same ID
        setCounter(counter + 1);
    }

    return (
        <div className="main">
            <div>
                <h1 className="title">Todo manager</h1>
            </div>
            <List todo={list} onDelete={handleRemove} />
            <Controls onChange={handleInsert} />
        </div>
    );
};

export default App;
