import React, { useState } from 'react';
let id = 0;

export const TodoContext = React.createContext();
export const Provider = ({ children }) => {
	const [tasks, setTasks] = useState([]);
	const [inputMessage, setInputMessage] = useState('');

	const addTodo = () => {
		setTasks([
			...tasks,
			{
				id: ++id,
				content: inputMessage,
				marked: false,
			},
		]);
		setInputMessage('');
	};

	const removeTodo = id => {
		setTasks(tasks.filter(task => task.id !== id));
	};

	const markTodo = id => {
		setTasks(tasks.map(task => (task.id === id ? { ...task, marked: true } : { ...task })));
	};

	const changeMessage = value => {
		setInputMessage(value);
	};

	return (
		<TodoContext.Provider
			value={{ tasks, inputMessage, addTodo, removeTodo, markTodo, changeMessage }}>
			{children}
		</TodoContext.Provider>
	);
};
