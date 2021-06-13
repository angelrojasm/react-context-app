import logo from './logo.svg';
import TaskList from './components/TaskList';
import './css/App.css';
import { useContext } from 'react';
import { TodoContext } from './context';

function App() {
	const { addTodo, inputMessage, changeMessage } = useContext(TodoContext);

	return (
		<div id='app'>
			<div id='header'>
				<div id='header-content'>
					<h2>React TODO</h2>
					<img id='logo' src={logo} alt='logo' />
				</div>
			</div>
			<div id='main'>
				<div className='title'>
					<h2>TODO APP</h2>
				</div>
				<div id='task-input-bar'>
					<div className='task-input'>
						<input
							type='text'
							name='task-input'
							id='task'
							placeholder='What do you plan to do?'
							value={inputMessage}
							onChange={e => {
								changeMessage(e.target.value);
							}}
						/>
						<button onClick={addTodo} id='task-button'>
							ADD
						</button>
					</div>
				</div>
				<TaskList />
			</div>
		</div>
	);
}

export default App;
