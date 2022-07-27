function ToDoForm(handleAddTodos) {
    const [value, setValue] = React.useState('');

    const handleChangeTitle = (e) => setValue(e.target);

    return (
        <form>
            <input type='text'
                id='todoInput'
                name='requestInput'
                placeholder='Начните создавать список дел'
                className='list__input hover'
                value={value}
                onChange={handleChangeTitle}
                required
                minLength='2'
                maxLength='150'
            />
            <button className='list__button hover' onClick={handleAddTodos}>Создать</button>
        </form>
    )
}

export default ToDoForm;