import "./App.css";
import "antd/dist/antd.css";
import React from "react";
import Modal from "react-modal";
import { Row, Col } from "antd";
import {
	AiOutlinePlus,
	AiOutlineSearch,
	AiOutlineDelete,
} from "react-icons/ai";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		width: "100%",
		maxWidth: 350,
	},
};
function App() {
	const [notesList, setNotesList] = React.useState([
		{
			category: "Diet",
			date: "2022-08-30",
			id: "1a",
			note: "Day 4, spinach salad",
			title: "",
		},
		{
			category: "Diet",
			date: "2022-08-30",
			id: "1b",
			note: "rice and chicken",
			title: "",
		},
		{
			category: "Education",
			date: "2022-08-30",
			id: "1c",
			note: "Finish the project",
			title: "",
		},
		{
			category: "Exercise",
			date: "2022-08-30",
			id: "1d",
			note: "20 min Cardio",
			title: "",
		},
	]);
	const [uniqueId, setUniqueId] = React.useState(0);
	const [category, setCategory] = React.useState("");
	const [noteDate, setDate] = React.useState("");
	const [note, setNote] = React.useState("");
	const [noteTitle, setNoteTitle] = React.useState("");
	const [modalIsOpen, setIsOpen] = React.useState(false);
	const [searchQuery, setSearchQuery] = React.useState("");
	const [approvedSearchQuery, setApprovedSearchQuery] = React.useState("");
	const [categories, setCategories] = React.useState([
		"Education",
		"Diet",
		"Exercise",
	]);
	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {
		
	}

	function closeModal() {
		setIsOpen(false);
	}

	function AddNewNote() {
		let newArr = [...notesList];
		newArr.push({
			id: uniqueId,
			title: noteTitle,
			category: category,
			date: noteDate,
			note: note,
		});
		setUniqueId(uniqueId + 1);
		setNotesList(newArr);
		setIsOpen(false);
		if (!categories.includes(category)) {
			let tempCategories = [...categories];
			tempCategories.push(category);
			setCategories(tempCategories);
		}
		console.log("array", newArr);
	}

	function deleteNote(id) {
		let newArr = notesList.filter((item) => item.id !== id);
		setNotesList(newArr);
	}
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
				padding: 5,
			}}
		>
			<div
				style={{
					display: "flex",
					alignItems: "flex-start",
					justifyContent: "flex-start",
					flexDirection: "column",
					width: "100%",
					padding: 60,
				}}
			>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						width: "100%",
						maxWidth: 350,
						paddingBottom: 20,
					}}
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyItems: "flex-start",
							paddingTop: 5,
							paddingBottom: 5,
							paddingLeft: 10,
							borderRadius: 4,
							border: "1px solid gray",
							width: "100%",
							maxWidth: 250,
						}}
					>
						<AiOutlineSearch />
						<input
							placeholder="Search Notes...."
							style={{ border: 0, outline: "none" }}
							onChange={(e) => {
								if (e.target.value === "") {
									setApprovedSearchQuery("");
								}
								setSearchQuery(e.target.value);
							}}
						/>
					</div>
					<button
						style={{
							color: "#fff",
							backgroundColor: "#0965f0",
							paddingTop: 7,
							paddingBottom: 7,
							paddingLeft: 10,
							paddingRight: 10,
							border: 0,
							fontWeight: "bold",
							letterSpacing: 1,
							fontSize: 15,
						}}
						onClick={() => {
							setApprovedSearchQuery(searchQuery);
						}}
					>
						Search
					</button>
				</div>
				<Modal
					isOpen={modalIsOpen}
					onAfterOpen={afterOpenModal}
					onRequestClose={closeModal}
					style={customStyles}
					contentLabel="Example Modal"
				>
					<div
						style={{
							flexDirection: "row",
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<h2 style={{ fontSize: 16, fontWeight: "bold", letterSpacing: 2 }}>
							New Note
						</h2>
						<button
							onClick={closeModal}
							style={{
								cursor: "pointer",
								backgroundColor: "#9562c1",
								border: "1px solid gray",
								color: "#fff",
								borderRadius: 2,
							}}
						>
							X
						</button>
					</div>
					<br />
					<div
						style={{
							flexDirection: "row",
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							paddingBottom: 45,
						}}
					>
						<input
							placeholder="Enter category.."
							onChange={(e) => {
								setCategory(e.target.value);
							}}
							style={{ outline: "none" }}
						/>{" "}
						•
						<input
							placeholder="Enter Date..."
							type={"date"}
							onChange={(e) => {
								setDate(e.target.value);
								console.log("new date", e.target.value);
							}}
							style={{ outline: "none" }}
						/>
					</div>
					<div>
						<textarea
							rows="5"
							cols="44"
							name="description"
							onChange={(e) => {
								setNote(e.target.value);
							}}
							style={{ outline: "none" }}
							placeholder="Enter details here..."
						></textarea>
					</div>
					<button
						style={{
							backgroundColor: "#0965f0",
							width: "100%",
							color: "#fff",
							paddingTop: 10,
							paddingBottom: 10,
							border: 0,
							fontWeight: "bold",
							fontSize: 14,
						}}
						onClick={() => {
							AddNewNote();
						}}
					>
						Add
					</button>
				</Modal>
				<Row>
					<Col
						lg={6}
						xxl={6}
						xl={6}
						style={{
							flexDirection: "column",
							display: "flex",
							alignItems: "flex-start",
							justifyContent: "center",
						}}
					>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								flexDirection: "row",
								width: "100%",
							}}
						>
							<span
								style={{ color: "#282957", fontWeight: "bold", fontSize: 15 }}
							>
								All Notes
							</span>

							<button
								onClick={openModal}
								style={{
									
									border: 0,
									backgroundColor: "transparent",
									cursor: "pointer",
									color: "#282957",
									fontSize: 20,
								}}
							>
								<AiOutlinePlus />
							</button>
						</div>
						<br /> <br />
						{notesList
							.filter((item) =>
								item.category
									.toLowerCase()
									.includes(approvedSearchQuery.toLowerCase())
							)
							.map((item, index) => {
								return (
									<div
										style={{
											border: "1px solid gray",
											boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
											width: "100%",
											maxWidth: 300,
											minHeight: 100,
											height: "100%",
											maxHeight: 450,
											borderRadius: 6,
											paddingTop: 5,
											paddingBottom: 5,
											paddingLeft: 15,
											paddingRight: 15,
											display: "flex",
											flexDirection: "row",
											alignItems: "center",
											justifyContent: "space-between",
											marginBottom: 10,
											backgroundColor: "#0965f0",
										}}
										key={index}
									>
										<div
											style={{
												display: "flex",
												flexDirection: "column",
												alignItems: "flex-start",
												justifyContent: "left",
											}}
										>
											<div>
												<span
													style={{
														paddingTop: 2.5,
														letterSpacing: 1,
														fontSize: 12.5,
														fontWeight: "bold",
														paddingRight: 10,
														color: "#fff",
														textAlign: "left",
													}}
												>
													{item.category}
												</span>
												•
												<span
													style={{
														paddingTop: 2.5,
														letterSpacing: 1,
														fontSize: 12,
														fontWeight: "light",
														paddingLeft: 10,
														color: "#fff",
														textAlign: "left",
													}}
												>
													{item.date}{" "}
												</span>
											</div>
											<span
												style={{
													paddingTop: 4,
													letterSpacing: 1,
													fontSize: 14,
													color: "#fff",
												}}
											>
												{item.note}
											</span>
										</div>
										<div
											style={{
												backgroundColor: "#0965f0",
												cursor: "pointer",
												width: 25,
												height: 25,
												alignItems: "center",
												justifyContent: "center",
												display: "flex",
												marginLeft: 5,
											}}
											onClick={() => deleteNote(item.id)}
										>
											<AiOutlineDelete
												style={{ color: "#fff", fontWeight: "bold" }}
											/>
										</div>
									</div>
								);
							})}
					</Col>
					<Col
						lg={18}
						xxl={18}
						xl={18}
						
					
					>
						<Row>
							{categories.length > 0 &&
								categories.map((item, index) => {
									return (
										<Col
											xs={24}
											sm={24}
											md={8}
											lg={24}
											xl={24}
											xxl={24}
											key={index}
											style={{
												marginRight: 82,
												width: "100%",
												maxWidth: 450,
												margin: 30,
											}}
										>
											<div
												style={{
													display: "flex",
													alignItems: "flex-start",
													justifyContent: "space-between",
													flexDirection: "column",
													width: "100%",
												}}
											>
												<span style={{ color: "#282957", fontWeight: "bold" }}>
													{item}
												</span>
												<br />
												{notesList.map((innerItem, innerIndex) => {
													return innerItem.category === item ? (
														<div
															style={{
																border: "1px solid gray",
																boxShadow:
																	"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
																width: "100%",
																maxWidth: 300,
																borderRadius: 6,
																paddingTop: 5,
																paddingBottom: 5,
																paddingLeft: 15,
																paddingRight: 15,
																display: "flex",
																flexDirection: "row",
																alignItems: "center",
																justifyContent: "space-between",
																marginBottom: 10,
																backgroundColor: "#9562c1",
															}}
															key={innerIndex}
														>
															<div
																style={{
																	display: "flex",
																	flexDirection: "column",
																	alignItems: "center",
																	justifyContent: "flex-start",
																}}
															>
																<div>
																	<span
																		style={{
																			paddingTop: 6,
																			letterSpacing: 1,
																			fontSize: 12.5,
																			fontWeight: "bold",
																			paddingRight: 10,
																			color: "#fff",
																		}}
																	>
																		{innerItem.category}
																	</span>
																	•
																	<span
																		style={{
																			paddingTop: 2.5,
																			letterSpacing: 1,
																			fontSize: 12,
																			fontWeight: "light",
																			paddingLeft: 10,
																			color: "#fff",
																		}}
																	>
																		{innerItem.date}{" "}
																	</span>
																</div>
																<span
																	style={{
																		paddingTop: 4,
																		letterSpacing: 1,
																		fontSize: 13,
																		color: "#fff",
																	}}
																>
																	{innerItem.note}
																</span>
															</div>
															<div>
																<AiOutlineDelete
																	style={{ color: "#fff", cursor: "pointer" }}
																	onClick={() => deleteNote(innerItem.id)}
																/>
															</div>
														</div>
													) : (
														<></>
													);
												})}
											</div>
										</Col>
									);
								})}
						</Row>
					</Col>
				</Row>
			</div>
		</div>
	);
}

export default App;
