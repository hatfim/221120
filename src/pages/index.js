import React from "react"
import { Link } from "react-scroll"

import Layout from "../components/layout"
import SVG from "../components/svg"
import SEO from "../components/seo"
import logo from "!!raw-loader!../assets/images/logo.svg"
import separator from "../assets/images/hero3.jpg"
import image01 from "../assets/images/01.jpg"
import image02 from "../assets/images/02.jpg"
import image03 from "../assets/images/03.jpg"
import mapHotel from "../assets/images/map-hotel.png"
import mapGereja from "../assets/images/map-gereja.png"
import insta from "../assets/images/instgram.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main className="site-main wrapper">
      <div className="border">
        <div className="border__inner">
          <section id="01" className="hero__wrapper">
            <a href="#" className="site-logo">
              <SVG svg={logo} />
            </a>
            <div className="hero__content">
              <h2>SAVE <span>THE</span> DATE</h2>
              <h1>22.11.20</h1>
            </div>
          </section>
          <section id="02"  className="box-wrapper overlap-bottom-120">
            <div className="container">
              <div className="row">
                <div className="col col--image">
                  <img src={image01} />
                </div>
                <div className="col">
                  <div className="content">
                    <p className="label">The Date</p>
                    <h2 className="heading--large">SUNDAY, NOVEMBER 22 2020</h2>
                    <p>As many of you may already know, we will be tying the knot soon. And we’d like you to join us to celebrate our love together</p>
                    <p>If you could make it to our big day, please fill in your details below so we can reserve a great seat for you.n with us. So more than anything we`re simply grateful for your presence </p>
                    <p><a className="btn" href='/rsvp'>RSVP</a></p>
                  </div>
                </div>
                <Link
                  className="scroll-down"
                  to="03"
                  spy={true}
                  smooth={true}
                  duration={1500}>
                  <span className="arrow-down"></span>
                </Link>
                <div className="bg-black -left"></div>
              </div>
            </div>
          </section>
          <section id="03" className="bg-wrapper">
            <div className="bg-wrapper__image" style={{ backgroundImage: `url(${separator})` }}>
            </div>
          </section>
          <section id="04" className="box-wrapper">
            <div className="container">
              <div className="row">
                <div className="col col--image">
                  <img src={image02} />
                </div>
                <div className="col">
                  <div className="content">
                    <p className="label">The Ceremony</p>
                    <h2 className="heading--large">Gereja Katolik<br />
                        Santa Monica</h2>
                    <p>Jl. Alamanda Sektor 1.2, <br />
                      Jl. Komp. Bsd No.1, Rw. Buntu, <br />
                      Kec. Serpong, Kota Tangerang Selatan, <br />
                      Banten 15318</p>
                    <img src={mapGereja} />
                    <p><a className="btn" href="https://www.google.com/maps/place/Catholic+Church+of+Saint+Monica/@-6.3012349,106.6802113,17z/data=!3m1!4b1!4m5!3m4!1s0x2e69f96b7bfde095:0x1b06779dd2e7f0f2!8m2!3d-6.3012402!4d106.6824">SHOW DIRECTION</a></p>
                  </div>
                </div>
                <Link
                  className="scroll-down"
                  to="05"
                  spy={true}
                  smooth={true}
                  duration={1500}>
                  <span className="arrow-down"></span>
                </Link>
                <div className="bg-black -left"></div>
              </div>
            </div>
          </section>
          <div id="05" className="box-wrapper box--rsvp">
            <p>WE'RE SO EXCITED TO CELEBRATE WITH YOU</p>
            <p><a className="btn" href='/rsvp'>RSVP</a></p>
          </div>
          <section id="06" className="box-wrapper">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="content -left">
                    <p className="label">The Reception</p>
                    <h2 className="heading--large">Hotel Santika Premiere ICE BSD City</h2>
                    <p>Indonesia Convention Exhibition,<br />
                      Jalan BSD Grand Boulevard, Pagedangan, <br />
                      Tangerang, Banten 15339</p>
                    <img src={mapHotel} />
                    <p><a className="btn" href="https://www.google.com/maps/place/Hotel+Santika+Premiere+ICE+BSD+City/@-6.2989222,106.6340902,17z/data=!3m1!4b1!4m8!3m7!1s0x2e69fb538fd1864b:0x4f93866d21038550!5m2!4m1!1i2!8m2!3d-6.2989275!4d106.6362789">SHOW DIRECTION</a></p>
                  </div>
                </div>
                <div className="col col--image">
                  <img src={image03} />
                </div>
                <Link
                  className="scroll-down"
                  to="07"
                  spy={true}
                  smooth={true}
                  duration={1500}>
                  <span className="arrow-down"></span>
                </Link>
                <div className="bg-black -right"></div>
              </div>
            </div>
          </section>
          <section id="07" className="box-wrapper box--footer">
            <img src={insta} />
            <p>Don't forget to use <span>#221120</span> tag when posting anything related to our wedding on Instagram.</p>
          </section>
        </div>
      </div>
    </main>
  </Layout>
)

export default IndexPage
