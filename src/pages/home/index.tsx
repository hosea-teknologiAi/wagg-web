import React from "react";
import Layout from "../../layouts/Main";
import PageIntro from "../../components/PageIntro/PageIntro";
import ProductsFeatured from "../../components/Products-featured";
import { Icon } from "@iconify/react";

const Home = () => {
  return (
    <Layout>
      <PageIntro />

      <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>Why should you choose us?</h4>
          </header>

          <ul className="shop-data-items">
            <li>
              <Icon icon="fa-solid:shipping-fast" className="icon-shipping" />
              <div className="data-item__content">
                <h4>Free Shipping</h4>
                <p>
                  All purchases over $199 are eligible for free shipping via
                  USPS First Class Mail.
                </p>
              </div>
            </li>

            <li>
              <Icon icon="game-icons:take-my-money" className="icon-shipping" />
              <div className="data-item__content">
                <h4>Easy Payments</h4>
                <p>
                  All payments are processed instantly over a secure payment
                  protocol.
                </p>
              </div>
            </li>

            <li>
              <Icon icon="game-icons:receive-money" className="icon-shipping" />
              <div className="data-item__content">
                <h4>Money-Back Guarantee</h4>
                <p>
                  If an item arrived damaged or you've changed your mind, you
                  can send it back for a full refund.
                </p>
              </div>
            </li>

            <li>
              <Icon icon="pajamas:first-contribution" className="icon-shipping" />
              <div className="data-item__content">
                <h4>Finest Quality</h4>
                <p>
                  Designed to last, each of our products has been crafted with
                  the finest materials.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* <ProductsFeatured /> */}
    </Layout>
  );
};

export default Home;
