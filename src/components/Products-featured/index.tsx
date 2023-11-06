import React from 'react'
import ProductsFeaturedCarousel from './carousel'
import products from '../../utils/data/products';

const ProductsFeatured = () => {
  return (
    <section className="section section-products-featured">
    <div className="container">
      <header className="section-products-featured__header">
        <h3>Selected just for you</h3>
        <a href="/products" className="btn btn--rounded btn--border">Show All</a>
      </header>

      <ProductsFeaturedCarousel products={products as any} />
    </div>
  </section>
  )
}

export default ProductsFeatured