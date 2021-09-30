import nullChecker from "../components/nullChecker";
import { v4 as uuidv4 } from "uuid";

const SendingCommand = ({
	sending,
}: {
	sending: { [key: string]: string | boolean | number | object | object[] };
}) => {
	if (nullChecker(sending) >= 2)
		return (
			<>
				<span>You are gonna send this 👇</span>
				<p>
					{"{"}
					<br></br>
					{Object.keys(sending).map((key, i) => {
						if (typeof Object.values(sending)[i] !== "object") {
							if (Object.values(sending)[i] === "")
								return (
									<>
										<span key={uuidv4()}>
											{key}:{"null,"}
										</span>
										<br></br>
									</>
								);
							return (
								<>
									<span key={uuidv4()}>
										{key}:{Object.values(sending)[i]}
										{","}
									</span>
									<br></br>
								</>
							);
						} else {
							return (
								<>
									{key} :
									<details>
										<summary>Object</summary>
										<p>
											{"{"}
											<br></br>
											{Object.keys(sending[key]).map((innerKey, j) => {
												if (Object.values(sending[key])[j] === "") {
													return (
														<>
															<span key={uuidv4()}>
																{innerKey}:{"null"}
																{","}
															</span>
															<br></br>
														</>
													);
												} else if (
													typeof Object.values(sending[key])[j] === "boolean"
												) {
													return (
														<>
															<span key={uuidv4()}>
																{innerKey}:
																{Object.values(sending[key])[j]
																	? "true"
																	: "false"}
																{","}
															</span>
															<br></br>
														</>
													);
												} else if (
													typeof Object.values(sending[key])[j] === "object"
												) {
													const innerObject = Object.values(sending[key])[j];
													return (
														<>
															{Object.keys(sending[key])[j]}:{"{"}
															<br></br>
															{Object.keys(innerObject).map((el, i) => {
																return (
																	<>
																		<span key={uuidv4()}>
																			{el}:{Object.values(innerObject)[i]}
																			{","}
																		</span>
																		<br></br>
																	</>
																);
															})}
															<br></br>
															{"}"}
														</>
													);
												} else {
													return (
														<>
															<span key={uuidv4()}>
																{innerKey}:{Object.values(sending[key])[j]}
																{","}
															</span>
															<br></br>
														</>
													);
												}
											})}
											<br></br>
											{"}"}
										</p>
									</details>
								</>
							);
						}
					})}
					{"}"}
				</p>
			</>
		);
	return <p>Hmmm... What will your input be? 🤔</p>;
};
export default SendingCommand;
