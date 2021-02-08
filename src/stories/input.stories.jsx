import React from "react";

import Input from "../components/input/input.component";

export default {
	title: "React Inputs/Input",
	component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
	label: "Label",
	placeholder: "Placeholder",
};

export const Invalid = Template.bind({});
Invalid.args = {
	label: "Label",
	placeholder: "Placeholder",
	error: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
	label: "Label",
	placeholder: "Placeholder",
	disabled: true,
};

export const HelperText = Template.bind({});
HelperText.args = {
	label: "Label",
	placeholder: "Placeholder",
	helperText: "Something interesting text",
};

export const HelperTextWithError = Template.bind({});
HelperTextWithError.args = {
	label: "Label",
	placeholder: "Placeholder",
	helperText: "Something interesting text",
	error: true,
};

export const StartIcon = Template.bind({});
StartIcon.args = {
	label: "Label",
	placeholder: "Placeholder",
	startIcon: "phone",
};

export const EndIcon = Template.bind({});
EndIcon.args = {
	label: "Label",
	placeholder: "Placeholder",
	endIcon: "lock",
};

export const Value = Template.bind({});
Value.args = {
	label: "Label",
	value: "Text",
};

export const Small = Template.bind({});
Small.args = {
	label: "Label",
	placeholder: "Placeholder",
	size: "sm",
};

export const Medium = Template.bind({});
Medium.args = {
	label: "Label",
	placeholder: "Placeholder",
	size: "md",
};

export const FullWidth = Template.bind({});
FullWidth.args = {
	label: "Label",
	placeholder: "Placeholder",
	fullWidth: true,
};

export const Multliline = Template.bind({});
Multliline.args = {
	label: "Label",
	placeholder: "Placeholder",
	multiline: true,
	rows: 4,
};
