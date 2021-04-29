import React from 'react';

interface ITodo {
    id: number,
    title: string
}

interface ITodoData {
    todoData: {
        todos: Array<ITodo>
    }
}

const Todos = ({todoData}: ITodoData) => {
    return (
        <div>
            <h2>Todos list</h2>
            <div>
                {
                    todoData && todoData.todos && todoData.todos.map((todo: ITodo) => {
                        return <p key={todo.id}>{todo.title}</p>;
                    })
                }
            </div>
        </div>
    );
};

export default Todos;
