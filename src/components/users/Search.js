import React, { useState, useContext } from 'react';
import GithubContext from '../../contex/github/githubContex';
import AlertContext from '../../contex/alert/alertContext';

const Search = () => {
	const githubContex = useContext(GithubContext);
	const alertContex = useContext(AlertContext);

	const [text, setText] = useState('');

	const onChange = (e) => setText(e.target.value);

	const onSubmit = (e) => {
		e.preventDefault();
		if (text === '') {
			alertContex.setAlert('Please enter something to search', 'light');
		} else {
			githubContex.searchUsers(text);
			setText('');
		}
	};

	return (
		<div>
			<form onSubmit={onSubmit} className="form">
				<input
					type="text"
					name="text"
					placeholder="Search Users..."
					value={text}
					onChange={onChange}
				/>
				<input
					type="submit"
					value="Search"
					className="btn btn-dark btn-block"
				/>
			</form>
			{githubContex.users.length > 0 && (
				<button
					className="btn btn-light btn-block"
					onClick={githubContex.clearUsers}
				>
					Clear
				</button>
			)}
		</div>
	);
};

export default Search;
