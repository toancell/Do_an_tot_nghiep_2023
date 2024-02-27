import classnames from "classnames/bind";
import PropTypes from "prop-types";
import styles from "./PageLoginRegister.module.scss";

const cx = classnames.bind(styles);

function PageLoginRegister({ title, children }) {
	return (
		<div className={cx("wrapper")}>
			
				<div>
					{children}
				</div>
				
				
			
		</div>
	);
}

PageLoginRegister.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node,
};

export default PageLoginRegister;
