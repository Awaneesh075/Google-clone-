import { useState } from 'react';
import './todo.css';

function TodoApp() {
    const [items, setItems] = useState([
        'Wake up early',
        'Pay bills',
        'Go to walk',
        'Take energy drink',
        'Bath in cold water',
        'Take breakfast',
        'Dress to office'
    ]);
    const [input, setInput] = useState('');
    const [checkedItems, setCheckedItems] = useState(new Set());

    const addItem = () => {
        if (input.trim() === '') {
            alert('Need to add an Event');
            return;
        }
        setItems([...items, input]);
        setInput('');
    };

    const toggleChecked = (index) => {
        const newChecked = new Set(checkedItems);
        if (newChecked.has(index)) {
            newChecked.delete(index);
        } else {
            newChecked.add(index);
        }
        setCheckedItems(newChecked);
    };

    const removeItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
        const newChecked = new Set(checkedItems);
        newChecked.delete(index);
        setCheckedItems(newChecked);
    };

    return (
        <div>
            <div className="toheader" id="myDIV">
                <h2 style={{ margin: '5px' }}>TO Do Something</h2>
                <input
                    type="text"
                    id="myInput"
                    placeholder="Title..."
                    value={input}
                    // onChange={(e) => setInput(e.target.value)}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') addItem();
                    }
                }

                />
                <span className="addBtn" onClick={addItem}>Add</span>
            </div>

            <ul id="myUL">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className={checkedItems.has(index) ? 'checked' : ''}
                        onClick={() => toggleChecked(index)}
                    >
                        {item}
                        <span className="close" onClick={() => removeItem(index)}>&times;</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;