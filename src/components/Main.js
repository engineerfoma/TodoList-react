import './Main.css';
import React from 'react';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';


function Main(el, handleAddTodos) {

    return (
        <section className='list'>
            <ToDoForm handleAddTodos={handleAddTodos} />
            {el.map((e) => {
                return (
                    <ToDo
                        key={e.id}
                    />
                )
            })}
        </section>
    )
}

export default Main;
