import Button from './Button';
import {useEffect, useRef, useState} from "react";

const _todoItems = [
    {id: 1, text: "text1", complieted: false},
    {id: 2, text: "text2", complieted: true},
    {id: 3, text: "text3", complieted: false},
    {id: 4, text: "text4", complieted: true}
]

export default function TodoApp() {
    const [inputValue, setInputValue] = useState("");
    const [todoItems, setTodoItems] = useState(_todoItems);
    const input = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        alert('submit');

        let todoItem ={
             id: Date.now(), 
             text: inputValue, 
             complieted: false 
        };
        setInputValue('');
        setTodoItems([...todoItems, todoItem])
     }

     useEffect (() => {
        input.current.focus();
     }, [todoItems])

     function chacking(id) {
        const changeItems = todoItems.map(items => {
            if (items.id === id) {
                items.complieted = !items.complieted
            }
            return items

        });
        setTodoItems(changeItems)
     }

     function handleDeleteClick(id) {
        const removeItem = todoItems.filter((items) => {
          return items.id !== id;
        });
        setTodoItems(removeItem);
      }

    return(
        <div >
            <h3>Todo App</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    ref={input}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <Button text="Add Item" type="submit"/>
             </form>
            <ul>
                {
                    todoItems.map((items, index) => {
                        return(
                            <li key={index}>
                                <input 
                                    type="checkbox" 
                                    checked={items.complieted}
                                    onChange={() => chacking(items.id)} 
                                />
                                <span> {items.text} </span>
                                <Button text="delete" type="reset"  onClick={() => handleDeleteClick(items.id)}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>

    )

}