import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Images } from "../../components/dataInterfaces";

const ImageSpace = ({ images }: { images: Images[] }) => {
	return (
		<>
			{images &&
				images?.map((image) => {
					return (
						<img
							key={uuidv4()}
							className="asset-image"
							src={image.url}
							alt={"the-huis"}
						/>
					);
				})}
		</>
	);
};

export default ImageSpace;
