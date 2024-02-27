import classnames from "classnames/bind";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getCart } from "~/api/cartApi";
import { guest } from "~/createInstance";
import { LISTSIDEBAR } from "~/data";
import { Logout } from "~/pages/auth";
import { createUserSuccess } from "~/slice/UserSlice";
import styles from "./SideBar.module.scss";
import User from "~/components/user";
const cx = classnames.bind(styles);

function SideBar() {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const [confirmLogout, setConfirmLogout] = useState(false);
	const currentUser = useSelector((state) => state.users.currentUser);

	const login = async (newUser) => {
		const user = await guest.post("/auth/login", newUser);
		localStorage.setItem("accessToken", user.data.accessToken);
		dispatch(createUserSuccess(user.data));
		getCart(dispatch, currentUser._id);
	};

	useEffect(() => {
		guest
			.get("/auth/get-info")
			.then((res) => {
				if (res.data !== "Not_login") {
					login(res.data);
				}
			})
			.catch((err) => {});
	}, []);

	return (
		<div className={cx("wrapper")}>			
			<ul className={cx("sideBar-list")}>
				{LISTSIDEBAR.map((item, index) => {
					return (
						<li key={index}>
							<NavLink
								to={item.to}
								title={t(item.title)}
								className={({ isActive }) =>
									isActive ? cx("active") : " "
								}
							>
								{t(item.title)}
							</NavLink>
						</li>
					);
				})}
				<li>
					<User />
				</li>
				<li>
					{currentUser._id ? (
						<div >
							<div className={cx("login")}>
								<NavLink
								to={`/account/${currentUser?._id}`}
								className={({ isActive }) =>
									isActive ? cx("active") : " "
									}
								>
								{t("hi,")} {currentUser?.name}
								</NavLink>
								<div
									onClick={() => setConfirmLogout(true)}
									title={t("log out")}
									className={cx("login-item")}
								>
									{t("log out")}
								</div>
							{confirmLogout ?
								<div className={cx("logout")}>
									<Logout  setConfirmLogout={setConfirmLogout} />

								</div>	
							 : (
								<></>
							)}
							</div>
							
						</div>
					) : (
						<NavLink
							to="/login"
							title={t("login")}
							className={({ isActive }) =>
								isActive ? cx("active") : " "
							}
						>
							{t("login")}
						</NavLink>
					)}
				</li>
			</ul>
		</div>
	);
}

export default SideBar;
