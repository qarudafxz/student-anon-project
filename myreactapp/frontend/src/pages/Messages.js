import React, { useState, useEffect } from "react";
import "../design/messages.css";
import NewUser from "../components/NewUser";

import io from "socket.io-client";

const socket = io("http://localhost:4000");

const Messages = () => {
	const [newUser, setNewUser] = useState("");
	const [user, setUser] = useState({});
	const [users, setUsers] = useState([]);
	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		socket.on("users", (users) => {
			const messagesArr = [];
			for (const { userId, username } of users) {
				const newMessage = { type: "userStatus", userId, username };
				messagesArr.push(newMessage);
			}
			setMessages([...messages, ...messagesArr]);
			setUsers(users);
			console.log(users);
		});
		socket.on("session", ({ userId, username }) => {
			setUser({ userId, username });
		});

		socket.on("user connected", ({ userId, username }) => {
			const newMessage = { type: "userStatus", userId, username };
			setMessages([...messages, newMessage]);
		});

		socket.on("new message", ({ userId, username, message }) => {
			const newMessage = {
				type: "message",
				userId: user.userId,
				username: user.username,
				message,
			};
			setMessages([...messages, newMessage]);
		});
	}, [socket, messages]);

	const handleChange = ({ currentTarget: input }) => {
		setNewUser(input.value);
	};

	const logNewUser = () => {
		socket.auth = { username: newUser };
		socket.connect();
	};

	const sendMessage = () => {
		socket.emit("new message", message);

		const newMessage = {
			type: "message",
			userId: user.userId,
			username: user.username,
			message,
		};
		setMessages([...messages, newMessage]);
		//set message to null to clean input
		setMessage("");
	};

	return (
		<main>
			<div
				style={{
					margin: "0 auto",
					display: "flex",
					flexDirection: "column",
					textAlign: "center",
				}}>
				{user.userId && (
					<div style={{ margin: "0 auto" }}>
						<h1>
							Logged in as{" "}
							<span
								className='userName'
								style={{
									backgroundColor: "#2f0370",
									color: "#fff",
									padding: "5px 15px",
									borderRadius: "5px",
								}}>
								{user.username}
							</span>
						</h1>
						<div>
							{/* //display message */}
							{/* //chat container */}
							<div
								style={{
									width: "90vw",
									maxHeight: "70vh",
									overflowY: "scroll",
								}}>
								<div
									className='chat-window'
									style={{
										display: "flex",
										flexDirection: "column",
										columns: "12",
									}}>
									{messages.map((message, index) => {
										return message.type === "userStatus" ? (
											<div
												style={{
													margin: "20px",
													fontWeight: "bold",
												}}
												key={index}>
												<span
													style={{
														backgroundColor: "#804197",
														color: "#fff",
														padding: "5px 10px",
														borderRadius: "7px",
													}}>
													{message.userId === user.userId
														? ""
														: `A new Anonymous User has Joined Student Anon Chat!`}
												</span>
											</div>
										) : (
											<div
												style={{
													display: "flex",
													flexDirection: "row",
													gap: "20px",
													margin: "5px",
												}}
												key={index}
												className={
													message.userId === user.userId
														? "chat-message-right"
														: "chat-message-left"
												}>
												<div
													style={{
														fontSize: "20px",
														fontWeight: "bold",
													}}>
													Student Anon
												</div>
												<div
													style={{
														paddingTop: "4px",
													}}>
													{message.message}
												</div>
											</div>
										);
									})}
								</div>
							</div>

							{/* //input */}
							<div
								style={{
									position: "absolute",
									top: "90vh",
									display: "flex",
									flexDirection: "row",
								}}>
								<input
									style={{
										width: "80vw",
										margin: "0 0 0 5px",
										padding: "20px 15px",
										fontSize: "15px",
										backgroundColor: "#E1E1E1",
										border: "1px solid black",
									}}
									onChange={({ currentTarget: input }) =>
										setMessage(input.value)
									}
									onKeyPress={(e) =>
										e.code === "Enter" ? sendMessage() : null
									}
									name='message'
									value={message}
									placeholder='Vent out your hinanakits here...'></input>
								<button
									style={{
										padding: "0 40px",
										backgroundColor: "#804197",
										cursor: "pointer",
										color: "#fff",
										border: "none",
										fontSize: "20px",
									}}>
									Send
								</button>
							</div>
						</div>
					</div>
				)}
				{!user.userId && (
					<NewUser
						newUser={newUser}
						handleChange={handleChange}
						logNewUser={logNewUser}
					/>
				)}
			</div>
		</main>
	);
};

export default Messages;
