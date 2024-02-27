
import classnames from "classnames/bind";
import React from 'react';
import styles from "./NewFooter.module.scss";

const cx = classnames.bind(styles);

function NewFooter() {
	return (
		<div className={cx("running-text-container")}>
      		<div className={cx("running-text")}>
				<span>Chính những sự yêu mến và niềm tin của Quý khách hàng là niềm tự hào và thành công lớn nhất của chúng tôi, đồng thời cũng là động lực để chúng tôi tiếp tục phát triển trong tương lai.</span>
				
			</div>
    	</div>
	  );
}

export default NewFooter;
