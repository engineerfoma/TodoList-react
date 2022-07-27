import './Todo.css';

function ToDo(value) {

    return (<div className='list__el'>
        <h3 className='list__el_title'>{value}</h3>
        <button className='list__el_button-copy'>copy</button>
        <button className='list__el_button-edit'>edit</button>
        <button className='list__el_button-delete'>X</button>
    </div>)
}

export default ToDo;