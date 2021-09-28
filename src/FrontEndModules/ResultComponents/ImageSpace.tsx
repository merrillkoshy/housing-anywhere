import React from "react";
import { v4 as uuidv4 } from "uuid";

const ImageSpace = ({ images }: { images: string }) => {
	const sanitize = images
		.replace("(", "")
		.replace(")", "")
		.replace('"', "")
		.replace("{", "")
		.replace("}", "")
		.split(",");
	return (
		<>
			{sanitize &&
				sanitize.map((url) => {
					return (
						<img
							key={uuidv4()}
							className="asset-image"
							width="300"
							height="300"
							src={url}
							alt={"stuff"}
						/>
					);
				})}
		</>
	);
};

export default ImageSpace;
