import {
	faLocationDot,
	faPaperPlane,
	faPhoneFlip,
	faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";
import NewFooter from "../../layout/components/NewFooter";
import styles from "./Footer.module.scss";
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
const cx = classnames.bind(styles);

function Footer() {
	return (
		<div className="grid">
			<div className={cx("wrapper")}>
				
				<div className={cx("row", "contact")}>
					<div className="col l-3 m-6 c-12">
						<div className={cx("column")}>
							<h2>Link</h2>
							<p>
								<Link to="/pages/about">About</Link>
							</p>
							<p>
								<Link to="/pages/return-policy">
									Return Policy
								</Link>
							</p>
							<p>
								<Link to="/pages/private-policy">
									Private Policy
								</Link>
							</p>
							<p>
								<Link to="/pages/service">
									Terms of Service
								</Link>
							</p>
							<p>
								<Link to="/pages/contact">Contact</Link>
							</p>
						</div>
					</div>
					<div className="col l-3 m-6 c-12">
						<div className={cx("column")}>
							<h2>Contact Info</h2>
							<p>
								<FontAwesomeIcon icon={faLocationDot} />
								<span>
									Trương Định, Hai Bà Trưng, Hà Nội
								</span>
							</p>
							<p>
								<FontAwesomeIcon icon={faPhoneSquare} />
								<span>0869&nbsp;981&nbsp;585&nbsp;</span>
							</p>
							<p>
								<FontAwesomeIcon icon={faPaperPlane} />
								<span>toancell6789@gmail.com</span>
							</p>
						</div>
					</div>
					<div className="col l-3 m-6 c-12">
						<div className={cx("column")}>
							<h2>Follow us on social media</h2>
							<p style={{display: "flex", gap: "20px"}}>
								<FontAwesomeIcon icon={faFacebook} style={{fontSize: "30px"}} />
								<FontAwesomeIcon icon={faInstagram} style={{fontSize: "30px"}} />
							</p>
							
						</div>
					</div>
				</div>
				<NewFooter />
			</div>
		</div>
	);
}

export default Footer;
