import React from 'react';
import '../styles/Main.scss';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';


function Main({ tasks, handleAddTodos, handleRemoveTodo, handleToggleTodo, img }) {

    return (
        <section className='list'>
            <ToDoForm handleAddTodos={handleAddTodos} />
            {tasks.map((task) => {
                return (
                    <ToDo
                        todo={task}
                        key={task.id}
                        handleRemoveTodo={handleRemoveTodo}
                        handleToggleTodo={handleToggleTodo}
                        img={img}
                    />
                )
            })}
        </section>
    )
}

export default Main;