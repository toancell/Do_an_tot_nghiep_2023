import classnames from "classnames/bind";
import styles from "./Cover.module.scss";
import {Image} from "antd"
import Slider from "react-slick"
const cx = classnames.bind(styles);
function Cover() {
	const arrImages =[
		"https://theme.hstatic.net/1000306633/1000891824/14/slideshow_3.jpg?v=663" ,
		"https://file.hstatic.net/1000351433/file/z4987369379241_797c4978f66ffdb57ba3ccca3aeef059_f26a6e28b1f042c9ac062d670371a63c.jpg",
		"https://media2.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/January2024/BANNER_WINTER_CLT_(ccmaNdbnn)s.png"
	]
	const settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000
	}
	return (
	<div className={cx("cover")} >
		<Slider {...settings} >
			{arrImages.map((image,index) => 
				(
				<div key={index}>
					<Image src={image} preview={false} height="100vh" width="100vw" object-fit="cover"/> 

				</div>
			
				
				))
				}
		</Slider>
	</div>
	)
}

export default Cover;
