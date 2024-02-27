import { LoadingButton } from "@mui/lab";
import React from "react";


const ButtonLoading = ({ handleOnclick, isFetching, action }) => {
	return (
		<div className="update-btn">
			<LoadingButton
				color="secondary"
				onClick={handleOnclick}
				loading={isFetching}
				loadingPosition="start"
				style={{borderRadius: "20px", padding:"5px 20px"}}
				variant="contained"
				type="submit"
			>
				<span>{action}</span>
			</LoadingButton>
		</div>
	);
};

export default ButtonLoading;
