import React from "react";
import { Link } from "react-router-dom";
import "./landingStyles.scss";
import { Helmet } from "react-helmet";

import LogoLeft from "../../assets/images/logo_pic.png";
import LogoRight from "../../assets/images/logo.png";
import LogoFacebook from "../../assets/images/icons/facebook.png";
import LogoInstagram from "../../assets/images/icons/instagram.png";
import LogoTikTok from "../../assets/images/icons/tiktok.png";
import LogoYoutube from "../../assets/images/icons/youtube.png";
import LogoWA from "../../assets/images/icons/whatsapp.png";
import LogoTwitter from "../../assets/images/icons/twitter.png";

const Landing = () => {
  return (
    <div>
      <Helmet>
        <title>Wagginton</title>
      </Helmet>
      <div
        className="container-landing"
        style={{
          display: "flex",
          position: "relative",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div className="header-landing">
          <div className="logo-landing">
            <img src={LogoLeft} alt="logo_pic" className="picture-landing" />
            <img src={LogoRight} alt="logo_text" className="text-landing" />
          </div>
          <div className="link-wrapper-landing">
            <Link to="/home" style={{ textDecoration: "none" }} target="_blank">
              <div className="link-to-officialSite">Official Site</div>
            </Link>
          </div>
        </div>
        <div className="title-landing">
          <span>Selamat datang di surganya hewan peliharaan!</span>
        </div>
        <div className="description-landing">
          <div className="sentence-landing">
            <span>
              Hi <b>#teamWagginton!</b> Sekarang, belanja keperluan anabul udah
              gak ribet lagi!
            </span>
          </div>
          <div className="sentence-landing">
            <span>Yuk download aplikasi Wagginton sekarang</span>
            <span>dapatkan penawaran menarik dan juga keuntungan lainnya!</span>
          </div>
        </div>
        <div className="actions-landing">
          <a
            href="https://play.google.com/store/apps/details?id=com.wagginton.wagginton"
            // className="mr-12"
          >
            Download Google Play
          </a>
          <a href="https://apps.apple.com/id/app/wagginton/idX1599293428">
            Download AppStore
          </a>
        </div>
      </div>
      <div className="sociality">
        <a
          className="icon"
          href="https://www.facebook.com/profile.php?id=100075819733095&mibextid=LQQJ4d"
          target="_blank"
          rel="noreferrer"
        >
          <img src={LogoFacebook} alt="facebook" />
        </a>
        <a
          className="icon"
          href="https://www.instagram.com/wagginton/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={LogoInstagram} alt="instagram" />
        </a>
        <a
          className="icon"
          href="https://www.tiktok.com/@wagginton.id"
          target="_blank"
          rel="noreferrer"
        >
          <img src={LogoTikTok} alt="tiktok" />
        </a>
        <a
          className="icon"
          href="https://www.youtube.com/channel/UChB8PerVfH8fBrkEGD-x0DQ"
          target="_blank"
          rel="noreferrer"
        >
          <img src={LogoYoutube} alt="youtube" />
        </a>
        <a
          className="icon"
          href="https://wa.me/+622150980288"
          target="_blank"
          rel="noreferrer"
        >
          <img src={LogoWA} alt="whatsapp" />
        </a>
        <a
          className="icon"
          href="https://twitter.com/wagginton_id"
          target="_blank"
          rel="noreferrer"
        >
          <img src={LogoTwitter} alt="twitter" />
        </a>
      </div>
    </div>
  );
};

export default Landing;
