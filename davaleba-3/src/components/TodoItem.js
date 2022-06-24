import Button from './Button';

export default function TodoItem({id,  text, completed, onChangePassed, deleteBtn}) {
    return(
        <li >
        <input 
            type="checkbox" 
            checked={completed}
            onChange={() => onChangePassed (id)} 
        />
        <span className={completed ? 'done' : ''}> {text} </span>
        <Button text="delete" type="reset"  onClick={() => deleteBtn(id)}/>
    </li>

    )
}