import Button from './Button';
import {useEffect, useRef, useState} from "react";
import TodoItem from './TodoItem';

const _todoItems = [
    {id: 1, text: "text1", completed: false},
    {id: 2, text: "text2", completed: true},
    {id: 3, text: "text3", completed: false},
    {id: 4, text: "text4", completed: true}
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
             completed: false 
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
                items.completed = !items.completed
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
                            <TodoItem  
                                key={index} 
                                items={items} 
                                onChangePassed={chacking}
                                id={items.id}
                                text={items.text}
                                completed={items.completed}
                                deleteBtn={handleDeleteClick}/>
                        )
                    })
                }
            </ul>
        </div>

    )

}