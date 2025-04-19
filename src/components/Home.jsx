import React from 'react'
import vg from '../assets/2.webp'
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
  } from "react-icons/ai";

function Home() {
  return (
    <>
        <div className='home'>
        <main>
            <h1>NextGenCoder</h1>
            <p>Solution to all your problems</p>
        </main>
    </div>

    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
        <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
    </div>

    <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
          We are a passionate team of web developers committed to building modern, responsive, and user-friendly websites that bring ideas to life. With a blend of creativity and technical expertise, we craft digital experiences that not only look great but also perform seamlessly across all devices. Whether it’s a personal blog, business site, or complex web application, we deliver solutions tailored to meet your unique goals. At our core, we believe in clean code, intuitive design, and long-term client success. Our mission is to empower individuals and businesses with the online presence they deserve. Join us on this journey to transform your digital vision into reality.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Home