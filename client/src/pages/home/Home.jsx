import Cover from "~/layout/components/Cover";
import SideBar from "~/layout/components/SideBar";
import Footer from "~/pages/footer";

function Home() {
	return (
		<div className="home">
			<SideBar />
			<Cover />
			<Footer />
		</div>
	);
}

export default Home;
