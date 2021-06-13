import { useContext } from 'react';
import Task from './Task';
import '../css/TaskList.css';
import { TodoContext } from '../context';

const TaskList = () => {
	const { tasks } = useContext(TodoContext);

	function generateTaskList() {
		return tasks.map((task, index) => {
			return tasks.length === 0 ? (
				<></>
			) : (
				<Task key={index} Text={task.content} marked={task.marked} id={task.id} />
			);
		});
	}
	return <div id='list'>{generateTaskList()}</div>;
};
export default TaskList;
