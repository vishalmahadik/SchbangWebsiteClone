import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import circleImage from "./assets/spin.png";
import Navbar from "./components/Navbar";
import { splitTextIntoWords } from "./utils/utils";
import img1 from "./assets/img1.png";
import img11 from "./assets/1.png";
import img22 from "./assets/2.png";
import img33 from "./assets/3.webp";

const colors = ["#FFE5D9", "#FFF5D9", "#F0F7E6", "#FFD9E6", "#F2E6FF"]; // Array of colors for background

function App() {
  const [activeImage, setActiveImage] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const observeTextReveal = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const revealWords = entry.target.querySelectorAll(".reveal-word");
        revealWords.forEach((word, index) => {
          word.style.animationDelay = `${index * 0.05}s`;
          word.classList.add("animate");
        });
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observeTextReveal, {
      threshold: 0.5,
    });
    const revealContainers = document.querySelectorAll(".reveal-container");
    revealContainers.forEach((container) => {
      observer.observe(container);
    });

    return () => {
      revealContainers.forEach((container) => {
        observer.unobserve(container);
      });
    };
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1000); // Adjust this breakpoint as needed
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Function to generate a random color from the colors array
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  // Function to handle hover over a grid item
  const handleHover = (event) => {
    const gridItem = event.currentTarget; // Use currentTarget to ensure it's the div element
    gridItem.style.background = getRandomColor();
    gridItem.querySelector("p").style.display = "block"; // Show paragraph
  };

  const handleMouseEnter = (image) => {
    if (!isMobile) {
      setActiveImage(image);
    }
  };
  // Function to handle mouse leave (reset background to navajowhite and hide paragraph)
  const handleMouseLeave = (event) => {
    if (!isMobile) {
      setActiveImage(null);
    }
    const gridItem = event.currentTarget; // Use currentTarget to ensure it's the div element
    gridItem.style.background = "white";
    gridItem.querySelector("p").style.display = "none"; // Hide paragraph
  };

  const textRef1 = useRef(null); // Ref for first h2 element
  const textRef2 = useRef(null); // Ref for second h2 element

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    const observer2 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (textRef1.current) {
      observer1.observe(textRef1.current);
    }

    if (textRef2.current) {
      observer2.observe(textRef2.current);
    }

    return () => {
      if (textRef1.current) {
        observer1.unobserve(textRef1.current);
      }
      if (textRef2.current) {
        observer2.unobserve(textRef2.current);
      }
    };
  }, []);

  return (
    <>
      <Navbar />

      <div className="App">
        <main>
          <h1 className="h-1">
            <b>
              Your Creative, Media & Technology{" "}
              <span>Transformation Partner</span>
            </b>
          </h1>
          <p className="near-nav">
            We're a team of 1000+ Specialists delivering award-winning work for
            300+ brands worldwide, 8 years and counting!
          </p>
        </main>

        <div className="App">
          <div className="marquee">
            <div className="marquee-content">
              <img src={circleImage} alt="circle" className="circle" />
              <p className="custom-text">IT'S TIME TO CREATE A SCHBANG</p>
              <img src={circleImage} alt="circle" className="circle" />
              <p className="custom-text">IT'S TIME TO CREATE A SCHBANG</p>
              <img src={circleImage} alt="circle" className="circle" />
              <p className="custom-text">IT'S TIME TO CREATE A SCHBANG</p>
              <img src={circleImage} alt="circle" className="circle" />
              <p className="custom-text">IT'S TIME TO CREATE A SCHBANG</p>
            </div>
            <div className="marquee-content">
              <img src={circleImage} alt="circle" className="circle" />
              <p className="custom-text">IT'S TIME TO CREATE A SCHBANG</p>
              <img src={circleImage} alt="circle" className="circle" />
              <p className="custom-text">IT'S TIME TO CREATE A SCHBANG</p>
              <img src={circleImage} alt="circle" className="circle" />
              <p className="custom-text">IT'S TIME TO CREATE A SCHBANG</p>
              <img src={circleImage} alt="circle" className="circle" />
              <p className="custom-text">IT'S TIME TO CREATE A SCHBANG</p>
            </div>
          </div>
        </div>
        <div className="container-fluid c1">
          <div className="row">
            <div className="col-md-4 col-12 left-column">
              <div className="part1">
                <h1 className="heading-4">What defines us</h1>
              </div>
            </div>
            <div className="col-md-8 col-12 right-column">
              <div className="main-hero-layout">
                <h2 className="main-hero_heading-1 reveal-container">
                  {splitTextIntoWords(
                    "We’re brand builders at heart, creators by design, tech enthusiasts in practice, and integrated at our core."
                  )}
                </h2>
              </div>
              <div className="main-hero_layout-2">
                <h2 className="main-hero_heading-2 opacity-50 lh-base reveal-container">
                  {splitTextIntoWords(
                    "We're on a mission to take the very best of Indian creative talent to the world. Driven by a ferocious hunger to create tangible impact for your business, we work with in-house specialists, industry partners and technology leaders to push the boundaries of creativity and put your brand on the global stage."
                  )}
                </h2>
              </div>
              <div className="main-hero_button">
                <button
                  className="btn main-hero-btn btn-outline-dark"
                  type="submit"
                >
                  Dive Into Our Culture <span className="biggi">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="div-img-1 mt-5">
        <img src={img1} alt="img-1" className="cropped-image" />
      </div>
      <div className="row" id="grid">
        <div
          className="left"
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          Brand Solutions
          <p style={{ display: "none" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div
          className="center"
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          Technology Solutions
          <p style={{ display: "none" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div
          className="right"
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          Media Solutions
          <p style={{ display: "none" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div
          className="fourth"
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          Research Solutions
          <p style={{ display: "none" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div
          className="fifth"
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          Film & Photography
          <p style={{ display: "none" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
      </div>

      {/*Here is that code */}
      <div className="trnd-container">
        <div className="row">
          <div className="col col-lg-8">
            <h2 className="trnd-head">
              <b>Trending Now</b>
            </h2>
            <div
              onMouseEnter={() => handleMouseEnter(img11)}
              onMouseLeave={handleMouseLeave}
            >
              <a className="btn trend-btn btn-outline-dark" href="/">
                Press Release
              </a>
              <div className="hov col mb-4 d-flex ">
                <b>
                  Schbang appoints Jitto George as Executive Vice President -
                  <br />
                  Media Solutions
                </b>
                <div className=" txt col text-end px-1">5.5 Minutes</div>
              </div>
            </div>
            <hr />
            <div
              onMouseEnter={() => handleMouseEnter(img22)}
              onMouseLeave={handleMouseLeave}
            >
              <a className="btn trend-btn btn-outline-dark" href="/">
                Press Release
              </a>
              <div className="hov col  mb-4  d-flex">
                <b>
                  Britannia forays into the Metaverse with the launch of
                  <br />
                  'Britannia Coffeeverse'
                </b>
                <div className="txt col text-end px-1">3 Minutes</div>
              </div>
            </div>
            <hr />
            <div
              onMouseEnter={() => handleMouseEnter(img33)}
              onMouseLeave={handleMouseLeave}
            >
              <a className="btn trend-btn btn-outline-dark" href="/">
                Press Release
              </a>
              <div className="hov col d-flex">
                <b>Kotak811 shares a reminder about ROI on self-care</b>
                <div className=" txt col text-end px-1">2 Minutes</div>
              </div>
            </div>
            <hr />
          </div>
          <div className="col-lg">
            <div className="image-container">
              {[img11, img22, img33].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`News ${index + 1}`}
                  className={`news-image ${
                    activeImage === img ? "active" : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <footer className="footer bg-black text-white py-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 mb-4">
              <h1 className="footer-logo">Schbang</h1>
            </div>
          </div>
          <hr className="" />
          <div className="row align-items-center">
            <div className="col-md-3">
              <div className="social-icons">
                <a href="#" className="text-white me-3" aria-label="LinkedIn">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#" className="text-white me-3" aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="text-white me-3" aria-label="YouTube">
                  <i className="bi bi-youtube"></i>
                </a>
                <a href="#" className="text-white" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <nav className="footer-nav text-md-center">
                <a href="#" className="text-white me-3">
                  About
                </a>
                <a href="#" className="text-white me-3">
                  Contact
                </a>
                <a href="#" className="text-white me-3">
                  Case Studies
                </a>
                <a href="#" className="text-white me-3">
                  Blog
                </a>
                <a href="#" className="text-white">
                  Privacy
                </a>
              </nav>
            </div>
            <div className="col-md-3 text-md-end">
              <p className="mb-0 footer-info">Proudly created in India.</p>
              <p className="mb-0 footer-info">
                All Right Reserved, All Wrong Reversed.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
