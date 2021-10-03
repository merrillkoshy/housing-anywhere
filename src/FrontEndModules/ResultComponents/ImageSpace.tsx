import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Images } from "../../components/dataInterfaces";

const ImageSpace = ({ images }: { images: Images[] }) => {
	return (
		<div className="d-flex card-image-container">
			{images &&
				images?.map((image) => {
					return (
						<img
							loading={"lazy"}
							key={uuidv4()}
							className="asset-image"
							src={image.url}
							alt={"the-huis"}
							id="listing-image"
						/>
					);
				})}
		</div>
	);
};

export default ImageSpace;
