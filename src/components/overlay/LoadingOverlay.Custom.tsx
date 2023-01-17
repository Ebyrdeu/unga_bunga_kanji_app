import {Box, LoadingOverlay} from "@mantine/core";
import {ReactNode} from "react";

const LoadingOverlayCustom = ({visible, children}: { visible: any, children: ReactNode }) => {
	return (
			<Box style={{width: "100%", height: "100%", position: "relative"}}>
				<LoadingOverlay visible={!visible} overlayBlur={5}/>
				{children}
			</Box>
	);
};

export default LoadingOverlayCustom;