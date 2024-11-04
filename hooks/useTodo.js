import React, { useEffect, useReducer } from 'react'
import { todoReducer } from '../04-useReducer/todoReducer';



const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};


export const useTodo = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos) || []);
  }, [todos])
  

    const onNewTodo = (todo) =>{
      const action = {
        type: 'Add Todo',
        payload: todo
      }
      dispatch(action)
    };

    const handleDeleteTodo = (id) =>{
      const action = {
        type: 'Delete Todo',
        payload: id
      }
      dispatch(action)
    };

    const onToggleTodo = (id) =>{
      const action = {
        type: 'Toggle Todo',
        payload: id
      }
      dispatch(action)
    };

  return {
    todos,
    onNewTodo,
    handleDeleteTodo,
    onToggleTodo
  }
}
