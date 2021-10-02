import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { styles } from "./image-dropzone-styles";

const Images = ({
	files,
	setFiles,
}: {
	files: any;
	setFiles: React.Dispatch<React.SetStateAction<any>>;
}) => {
	const onDrop = useCallback((acceptedFiles) => {
		setFiles(
			acceptedFiles.map((file: any) =>
				Object.assign(file, {
					preview: URL.createObjectURL(file),
				})
			)
		);
	}, []);
	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
	const thumbs = files?.map((file: any) => (
		<div style={styles.thumb} key={file.name}>
			<div style={styles.thumbInner}>
				<img src={file.preview} style={styles.img} alt={"img-preview"} />
			</div>
		</div>
	));
	return (
		<>
			<div {...getRootProps()}>
				<input id="image-dropzone" {...getInputProps()} />
				{isDragActive ? (
					<p>Drop the files here ...</p>
				) : (
					<p>Drag 'n' drop some files here, or click to select files</p>
				)}
				<aside style={styles.thumbsContainer}>{thumbs}</aside>
			</div>
		</>
	);
};
export default Images;
