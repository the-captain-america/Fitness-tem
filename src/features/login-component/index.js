import React from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
	width: 300px;
`;

const InputGroup = styled.div`
	margin-top: 32px;
	width: 100%;
`;

const InputItem = styled.div`
	padding-bottom: 16px;
	width: 100%;
	border-bottom: 1px solid #a09faa;
`;

const Input = styled.input`
	font-family: Roboto;
	font-size: 18px;
	font-weight: normal;
	line-height: 24px;
	text-align: left;
	color: #211551;
	border: none;
	background: none;
	outline: none;
	&:focus {
		outline: none;
	}
`;

const InputLabel = styled.label`
	font-family: Roboto;
	font-size: 14px;
	line-height: 22px;
	text-align: left;
	color: #adabbd;
`;

const SubmitButton = styled.button`
	border: none;
	border-radius: 7px;
	border-radius: 7px;
	border: solid 1px #6620a5;
	background-image: linear-gradient(to bottom, #9241dd, #6f1bbc);
	&:hover {
		cursor: pointer;
	}
	span {
		height: 23px;
		font-family: Roboto;
		font-size: 18px;
		font-weight: 500;
		line-height: 22px;
		text-align: left;
		color: #ffffff;
	}
`;

const LoginComponent = () => {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [error, setError] = React.useState(false);
	const [success, setSuccess] = React.useState(false);

	const handleEmail = email => setPassword(email.target.value);
	const handlePassword = password => setPassword(password.target.value);

	const handleSubmit = () => {
		if (!password || !email) {
			setError(true);
			return;
		}
		setSuccess(true);
	};

	return (
		<LoginContainer>
			<InputGroup>
				<InputLabel>Email:</InputLabel>
				<InputItem>
					<Input onChange={handleEmail} value={password} type="text" />
				</InputItem>
			</InputGroup>

			<InputGroup>
				<InputLabel>Password:</InputLabel>
				<InputItem>
					<Input onChange={handlePassword} value={password} type="password" />
				</InputItem>
			</InputGroup>

			{!error && <SubmitButton onClick={handleSubmit}>Create</SubmitButton>}
		</LoginContainer>
	);
};

export default LoginComponent;
