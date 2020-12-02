import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
    var settings = {
      dots: true,
      infinite: true,
      centerMode: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplaySpeed: 2000
    };
    return (
      <Slider {...settings}>
        <img src="./A19_8127.jpg" alt="UCP Building"></img>
        <img src="./A19_7794.jpg" alt="UCP Building"></img>
        <img src="./Grad1.jpg" alt="Graduation"></img>
        <img src="./Grad3.jpg" alt="Graduation"></img>
        <img src="./A19_8725.jpg" alt=""></img>
        <img src="./LectureTheatre.jpg" alt=""></img>
      </Slider>
    );
  }