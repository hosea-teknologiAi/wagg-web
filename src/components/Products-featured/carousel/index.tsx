import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/autoplay'
import { ProductTypeList } from '../../../types';
import ProductItem from '../../Product-item';
import { Autoplay } from 'swiper/modules';

let slidesPerView = 1.3;
let centeredSlides = true;
let spaceBetween = 30;
if (typeof window !== 'undefined') {
  if (window.innerWidth > 768) {
    slidesPerView = 3;
    spaceBetween = 35;
  }
  if(window.innerWidth > 1024) {
    slidesPerView = 4;
    spaceBetween = 65;
    centeredSlides = false;
  }
}
// if (process.browser) {
//   if(window.innerWidth > 768) {
//     slidesPerView = 3;
//     spaceBetween = 35;
//     centeredSlides = false;
//   }
//   if(window.innerWidth > 1024) {
//     slidesPerView = 4;
//     spaceBetween = 65;
//     centeredSlides = false;
//   }
// }

type ProductsCarouselType = {
  products: ProductTypeList[]
}

const ProductsFeaturedCarousel = ({ products }: ProductsCarouselType) => {
  return (
    <div className="products-carousel">
    <Swiper 
    modules={[ Autoplay ]}
    spaceBetween={spaceBetween} 
    loop={true} 
    autoplay= {{
      delay: 2500,
      disableOnInteraction: false,
    }}
    centeredSlides={centeredSlides} 
    watchOverflow={true} 
    slidesPerView={slidesPerView} 
    className="swiper-wrapper">
      {products.map(item => (
        <SwiperSlide key={item.id}>
          <ProductItem 
            id={item.id} 
            name={item.name}
            price={item.price}
            color={item.color}
            discount={item.discount}
            currentPrice={item.currentPrice}
            key={item.id}
            images={item.images} 
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  )
}

export default ProductsFeaturedCarousel