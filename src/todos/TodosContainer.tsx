import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchTodos} from "../store";
import Todos from "./Todos";

function TodosContainer({todoData, fetchTodos}: any) {
    useEffect(() => {
        fetchTodos()
    }, [])

    return (
        <>
            {todoData.loading && <h2>Loading</h2>}
            {todoData.error && <h2>{todoData.error}</h2>}
            {(!todoData.loading && !todoData.error) && <Todos todoData={todoData}/>}
        </>
    );
}

const mapStateToProps = (state: any) => ({
    todoData: state.todo
})

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchTodos: () => dispatch(fetchTodos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
