import React from 'react'
import footer from '../Component/Footer.css'

function Footer() {
    return (
        <>
            <section id="footer">
            <div class="main-footer">
              <div class="logoinfo" data-aos="fade-up">
                <h2>NIKHIL VARSHNEY</h2>
                <p>NETFLIX</p>
          
                <div class="contact-details">
                  <h1>Contact Us</h1>
                  <li>
                    <div class="fa fa-phone"></div><a href="tel:+919326048690">+91 0987654321</a>
                 </li>
                  <li>
                    <div class="fa fa-envelope"></div><a href="mailto:yourmail@gmail.com">yourmail@gmail.com</a>
                  </li>
              </div>
            </div>
            <div class="com " data-aos="fade-up">
              <h1>About</h1>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div class="info" data-aos="fade-up">
              <h1>Social Media</h1>
              <div class="sociallogos">
                <div class="logobox">
                  <a href="#" class="fab fa-instagram"></a>
                  <a href="#" class="fab fa-linkedin"></a>
                  <a href="#" class="fab fa-facebook"></a>
                  <a href="#" class="fab fa-youtube-play"></a>
                </div>
              </div>
            </div>
            </div>
          <footer>© Copyright 2022 All Rights Reserved</footer>
          </section>
      </>
    );
}
export default Footer;