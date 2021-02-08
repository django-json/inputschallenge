import React from "react";
import classNames from "classnames";

import "./input.styles.css";

const Input = ({
	value,
	placeholder,
	label,
	disabled,
	error,
	helperText,
	startIcon,
	endIcon,
	size,
	fullWidth,
	multiline,
	rows,
	...props
}) => {
	const inputClasses = classNames("input", {
		"input--error": error,
		"input--disabled": disabled,
		"input--fullwidth": fullWidth,
		"input--left-padding": startIcon,
		"input--right-padding": endIcon,
		[`input--${size}`]: size,
	});

	return (
		<div className="input-container">
			<div className="input-wrapper">
				{!multiline && (
					<input
						className={inputClasses}
						value={value}
						type="text"
						name={label}
						id={label.toLowerCase()}
						placeholder={placeholder}
						disabled={disabled}
						{...props}
					/>
				)}
				{multiline && (
					<textarea
						className="input"
						name={label}
						id={label.toLowerCase()}
						placeholder={placeholder}
						rows={rows}
					></textarea>
				)}
				{startIcon && !multiline && (
					<i className="input-start-icon material-icons">
						{startIcon}
					</i>
				)}
				<label className="input-label" htmlFor={label.toLowerCase()}>
					{label}
				</label>
				{endIcon && !multiline && (
					<i className="input-end-icon material-icons">{endIcon}</i>
				)}
				{helperText && (
					<p className="input-helper-text">{helperText}</p>
				)}
			</div>
		</div>
	);
};

export default Input;
