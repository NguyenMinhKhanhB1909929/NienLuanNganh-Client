import react from "react";
import { Carousel } from "react-bootstrap";

function CarouselView() {
  return (
    <>
      <Carousel className="mt-2 card-box">
        <Carousel.Item interval={2000}>
          <img
            height="300"
            className="w-100"
            src="https://viettamduc.com/wp-content/uploads/2019/01/banner-hv-thiet-ke-lop-hoc-do-hoa-ltt3.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            height="300"
            className="w-100"
            src="https://viettamduc.com/wp-content/uploads/2019/01/banner-lop-hoc-do-hoa-vtd7.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            height="300"
            className="w-100"
            src="https://toplist.vn/images/800px/cong-ty-tnhh-tm-amp-dv-cong-nghe-tlt-564226.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselView;
