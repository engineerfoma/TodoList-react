import React from 'react';
import '../styles/ToDoForm.scss'

function ToDoForm({ handleAddTodos }) {
    const [userInput, setUserInput] = React.useState('');

    const handleChangeTitle = (e) => setUserInput(e.currentTarget.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddTodos(userInput);
        setUserInput('');
    }
    return (
        <form onSubmit={handleSubmit} className='form'>
            <input type='text'
                id='todoInput'
                name='requestInput'
                placeholder='Начните создавать список дел'
                className='list__input'
                value={userInput}
                onChange={handleChangeTitle}
                required
                minLength='2'
                maxLength='150'
            />
            <button type='submit' className='list__button hover'>Создать</button>
        </form>
    )
}

export default ToDoForm;