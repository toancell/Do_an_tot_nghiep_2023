import classnames from "classnames/bind";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createFeedback } from "~/api/feedbackApi";
import Button from "~/components/button";
import Captcha from "~/components/captcha";
import styles from "./Contact.module.scss";

const cx = classnames.bind(styles);

function Contact() {
	const dispatch = useDispatch();
	const [mess, setMess] = useState(false);
	const [values, setValues] = useState({
		username: "",
		email: "",
		phoneNumber: "",
		content: "",
		status: false,
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			values.username.length !== 0 ||
			values.email.length !== 0 ||
			values.phoneNumber.length !== 0 ||
			values.content.length !== 0
		) {
			createFeedback(dispatch, values);
			setMess(true);
		}
	};

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, []);
	return (
		<div className={cx("contact row")}>
			<div className={cx("col l-6 m-10 c-12")}>
				<div className={cx("map")}>
					<iframe
						src="https://maps.google.com/maps?q=Dai%20hoc%20bach%20khoa%20Ha%20Noi&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
						allowFullScreen=""
						loading="lazy"
						title="Map"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
			<div className={cx("col l-6 m-12 c-12")}>
				<div className={cx("info")}>
					<h1 className={cx("header")}>Contact</h1>
					<div className={cx("box-contact")}>
						<ul className={cx("address")}>
							<li>
								<p>Our Address</p>
								<p>
									<strong>
										Truong Dinh, Hai Ba Trung, Ha Noi
									</strong>
								</p>
							</li>
							<li>
								<p>Our Email</p>
								<p>
									<strong>
										toancell6789@gmail.com
									</strong>
								</p>
							</li>
							<li>
								<p>Phone</p>
								<p>
									<strong>0869981585</strong>
								</p>
							</li>
							<li>
								<p>Working time</p>
								<p>
									<strong>09:00 - 21:00</strong>
								</p>
							</li>
						</ul>
					</div>
					<h2 className={cx("title")}>Send us your question</h2>
					<div className={cx("contact-form")}>
						<div className={cx("row")}>
							<form>
								<div className={cx("col l-12 m-12 c-12")}>
									<div className={cx("input-group")}>
										<input
											type="text"
											required
											name="name"
											placeholder="Your name"
											value={values.username}
											onChange={(e) =>
												setValues({
													...values,
													username: e.target.value,
												})
											}
										/>
									</div>
								</div>
								<div className={cx("col l-12 m-12 c-12")}>
									<div className={cx("input-group")}>
										<input
											type="text"
											required
											name="email"
											placeholder="Email"
											value={values.email}
											onChange={(e) =>
												setValues({
													...values,
													email: e.target.value,
												})
											}
										/>
									</div>
								</div>
								<div className={cx("col l-12 m-12 c-12")}>
									<div className={cx("input-group")}>
										<input
											type="text"
											required
											name="phone"
											placeholder="Phone number"
											value={values.phoneNumber}
											onChange={(e) =>
												setValues({
													...values,
													phoneNumber: e.target.value,
												})
											}
										/>
									</div>
								</div>
								<div className={cx("col l-12 m-12 c-12")}>
									<div className={cx("input-group")}>
										<textarea
											type="text"
											required
											name="content"
											placeholder="Question..."
											value={values.content}
											onChange={(e) =>
												setValues({
													...values,
													content: e.target.value,
												})
											}
										/>
										<Captcha />
									</div>
								</div>

								{mess ? (
									<div
										style={{
											padding: "10px 12px",
											color: "blue",
										}}
									>
										You have sent us feedback! We will pay
										you back as soon as possible ^^
									</div>
								) : (
									<></>
								)}

								<div className={cx("col l-12 c-12")}>
									<Button onClick={(e) => handleSubmit(e)}>
										Send us
									</Button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
