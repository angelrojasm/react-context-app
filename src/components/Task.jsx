import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../css/Task.css';
import { TodoContext } from '../context';

const Task = ({ Text, marked, id }) => {
	const { removeTodo, markTodo } = useContext(TodoContext);
	return (
		<div id='list-entry'>
			<p className={marked ? 'entry-text checked' : 'entry-text'}>{Text}</p>
			<div className='icons'>
				<FontAwesomeIcon
					id='check-icon'
					icon={faCheck}
					onClick={e => {
						e.preventDefault();
						markTodo(id);
					}}
				/>
				<FontAwesomeIcon
					id='trash-icon'
					icon={faTrash}
					onClick={e => {
						e.preventDefault();
						removeTodo(id);
					}}
				/>
			</div>
		</div>
	);
};
export default Task;
