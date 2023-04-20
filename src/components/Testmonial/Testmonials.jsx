import React from "react";
import Slider from "react-slick";
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

function Testmonials() {
  return (
    <Slider>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          nesciunt deserunt corporis, sint architecto debitis dolores, veritatis
          velit ipsa alias magni unde rerum excepturi vel! Ducimus illo dolor
          nam fugit!

          <div className="d-flex  align-align-items-center gap-4 mt-3   ">
            <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
            <div>Jone Doe</div>
          </div>
        </p>
      </div>
    </Slider>
  );
}

export default Testmonials;
