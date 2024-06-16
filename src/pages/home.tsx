import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Skeleton } from "../components/loader";
import ProductCard from "../components/product-card";
import { useLatestProductsQuery } from "../redux/api/productAPI";
import { addToCart } from "../redux/reducer/cartReducer";
import { CartItem } from "../types/types";
import "../styles/hero.css";

import { FiFacebook } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import arrow_icon from "../assets/images/arrow.png";
import hero_image from "../assets/images/hero2.png";
import four_dots from "../assets/images/4-dots.png";
import exclusive_image from "../assets/images/exclusive_image.png";

import laptop from "../assets/images/Laptops.png";
import mobile from "../assets/images/Mobiles.png";
import watch from "../assets/images/Watch.png";
import contact from "../assets/images/contact.png";

import footer_logo from "../assets/images/logo.png";
import instagram_icon from "../assets/images/instagram_icon.png";
import watsaap_icon from "../assets/images/whatsapp_icon.png";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Home = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_6zef5qo",
          "template_wfj6vtl",
          form.current,
          "6kj1LmCHNmekXq9C_"
        )
        .then(
          () => {
            console.log("SUCCESS!");
            form.current?.reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  const { data, isLoading, isError } = useLatestProductsQuery("");

  const dispatch = useDispatch();

  const addToCartHandler = (cartItem: CartItem) => {
    if (cartItem.stock < 1) return toast.error("Out of Stock");
    dispatch(addToCart(cartItem));
    toast.success("Added to cart");
  };

  if (isError) toast.error("Cannot Fetch the Products");

  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <h2>NEW ARRIVALS ONLY</h2>
          <p>Find The</p>
          <p>Best Gadgets</p>
          <div className="hero-latest-btn">
            <Link to="/search">Shop Now</Link>
            <img src={arrow_icon} alt="" />
          </div>
        </div>

        <div className="hero-right">
          <img src={hero_image} alt="" />
        </div>
      </div>

      <div className="home">
        {/* <h1>Latest Products</h1> */}
        <div className="section-head">
          <h1>Latest Products</h1>
          <div className="line-art flex">
            <div></div>
            <img src={four_dots} />
            <div></div>
          </div>
        </div>

        <main>
          {isLoading ? (
            <Skeleton width="80vw" />
          ) : (
            data?.products.map((i) => (
              <ProductCard
                key={i._id}
                productId={i._id}
                name={i.name}
                price={i.price}
                stock={i.stock}
                handler={addToCartHandler}
                photo={i.photo}
              />
            ))
          )}
        </main>
      </div>

      <div className="offers">
        <div className="offers-left">
          <h1>Exclusive</h1>
          <h1>Offers For You</h1>
          <p>Apply Code "FIRSTORDER"</p>
          <button>Shop Now</button>
        </div>
        <div className="offers-right">
          <img src={exclusive_image} alt="" />
        </div>
      </div>

      <div className="categories">
        {/* <h1>Top Categories</h1> */}
        <div className="section-head">
          <h1 className="cat-h1">Top Categories</h1>
          <div className="line-art flex">
            <div></div>
            <img src={four_dots} />
            <div></div>
          </div>
        </div>
        <div className="cat-img">
          <img src={laptop} alt="laptop" />
          <img src={mobile} alt="mobile" />
          <img src={watch} alt="watch" />
        </div>
      </div>

      <section className="contact">
        <div className="container-main contact_container">
          <aside className="contact_aside">
            <div className="aside_image">
              <img src={contact} alt="contact image" />
            </div>
            <h2>Contact Us</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium autem facilis neque velit.
            </p>
            <ul className="contact_details">
              <li>
                <i className="uil uil-phone-times"></i>
                <h5>+91 7528542584</h5>
              </li>
              <li>
                <i className="uil uil-envelope"></i>
                <h5>shadow@gmail.com</h5>
              </li>
              <li>
                {/* <i className="uil uil-envelope"></i> */}
                <IoLocationOutline />
                <h5>India</h5>
              </li>
            </ul>
            <ul className="contact_socials">
              <li>
                <a href="#">
                  <i className="uil uil-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="uil uil-linkedin-alt"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="uil uil-facebook-f"></i>
                </a>
              </li>
            </ul>
          </aside>

          <form className="contact_form" ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Full Name" required />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
            <textarea
              name="message"
              rows={7}
              placeholder="Message"
              required
            ></textarea>
            <button type="submit" className="contact-btn contact_btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <div className="footer">
        <div className="footer-logo">
          <img src={footer_logo} alt="" />
          <p>SHADOW</p>
        </div>
        <ul className="footer-links">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Shop</a>
          </li>
          <li>
            <a href="">Cart</a>
          </li>
        </ul>
        <div className="footer-socials-icon">
          <div className="footer-icons-container">
            <img src={instagram_icon} alt="" />
          </div>

          <div className="footer-icons-container">
            <img src={watsaap_icon} alt="" />
          </div>
          <div className="footer-icons-container">
            <FiFacebook />
          </div>
        </div>
        <div className="footer-copyright">
          <hr />
          <p>&copy; 2024 SHADOW. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Home;
