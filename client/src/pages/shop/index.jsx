import classnames from "classnames/bind";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Shop.module.scss";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "~/api/categoryApi";
import DefaultLayout from "~/layout/DefaultLayout";

const cx = classnames.bind(styles);

function Shop() {
	const dispatch = useDispatch();
	const categories = useSelector(
		(state) => state.categories.categories.allCategories
	);
	useEffect(() => {
		getAllCategories(dispatch);
	}, []);

	return (
		<DefaultLayout>
			<div className={cx("wrapper")}>
				<div className={cx("banner", "col c-12")}>
					<img
						src="https://theme.hstatic.net/1000306633/1000891824/14/slideshow_1.jpg?v=663"
						alt="Welcome"
					/>
				</div>
				<div className={cx("collection", "row")}>
					<div className={cx("title", "col", "l-10", "m-12", "c-12")}>
						<ul>
							<li>
								<NavLink
									className={({ isActive }) =>
										isActive ? cx("active") : " "
									}
									to="all"
								>
									All
								</NavLink>
							</li>
							{categories?.map((item) => (
								<li key={item._id}>
									<NavLink
										className={({ isActive }) =>
											isActive ? cx("active") : " "
										}
										to={item.name.toLowerCase()}
									>
										{item.name}
									</NavLink>
								</li>
							))}
						</ul>
					</div>
				</div>
				<Outlet />
			</div>
		</DefaultLayout>
	);
}

export default Shop;
