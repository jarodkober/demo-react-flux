import React from 'react';
import TextInput from './common/TextInput';
import PropTypes from 'prop-types';

function CourseForm(props) {
	return (
		<form onSubmit={props.onSubmit}>
			<TextInput
				id="title"
				error={props.errors.title}
				label="Title"
				name="title"
				onChange={props.onChange}
				value={props.course.title}
			/>

			<div className="form-group">
				<label htmlFor="author">Author</label>
				<div className="field">
					<select
						error={props.errors.authorId}
						id="author"
						name="authorId"
						onChange={props.onChange}
						value={props.course.authorId || ''}
						className="form-control"
					>
						<option value="" />
						<option value="1">Cory House</option>
						<option value="2">Scott Allen</option>
					</select>
				</div>
				{props.errors.authorId && <div className="alert alert-danger">{props.errors.authorId}</div>}
			</div>

			<TextInput
				error={props.errors.category}
				id="category"
				label="Category"
				name="category"
				onChange={props.onChange}
				value={props.course.category}
			/>

			<input type="submit" value="Save" className="btn btn-primary" />
		</form>
	);
}

CourseForm.propTypes = {
	course: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired
};

export default CourseForm;
