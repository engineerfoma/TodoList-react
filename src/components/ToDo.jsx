import '../styles/ToDo.scss';

function ToDo({ todo, handleRemoveTodo, handleToggleTodo}) {

    return (
        <div className='list__el'>
            <label htmlFor={`checkbox${todo.id}`} className='label'>
                <input type='checkbox' className='label__input' id={`checkbox${todo.id}`} />
                <span className='checkbox' onClick={() => handleToggleTodo(todo.id)}></span>
            </label>
            <h3 className={`list__el_title ${todo.complete ? 'complete' : ''}`}>{todo.task}</h3>
            <button className='list__el_button-edit hover'></button>
            <button className='list__el_button-delete hover' onClick={() => handleRemoveTodo(todo.id)}></button>
        </div>
    )
}

export default ToDo;