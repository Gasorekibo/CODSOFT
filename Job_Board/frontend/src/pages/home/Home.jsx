import "./Home.css";
import React from "react";
import Navbar from "../../components/navigation/Navbar";
import { FaSearch, FaMapMarkerAlt, FaBusinessTime } from "react-icons/fa";

function Home() {
  return (
    <>
      <Navbar />
      <div className="containter">
        <div className="hero-section">
          <div className="hero-container">
            <h2>
              Jobs for Unemployed Youth <br />
              No Experience? No Problem
            </h2>
            <p>Empowering Youth through No Experience Job Opportunities</p>
            <button>Find a job</button>
            <div className="search">
              <form action="#" method="post">
                <div className="search-for-jobs">
                  <input
                    type="text"
                    name="search"
                    placeholder="Search for Job..."
                  />
                  <FaSearch className="icon" color="#000" size={15} />
                </div>
                <div className="search-for-industry">
                  <select
                    name="industry"
                    id="industry"
                    placeholder="Select Industry"
                  >
                    <option value="">Category</option>
                    <option value="web">Web Development</option>
                    <option value="design">
                      Design & Artificial Intelligence
                    </option>
                    <option value="finance">
                      Financial Analysis & Management
                    </option>
                  </select>
                </div>
                <div className="search-for-location">
                  <select
                    name="location"
                    id="location"
                    placeholder="Select Industry"
                  >
                    <option value="">location</option>
                    <option value="web">Kigali</option>
                    <option value="design">Africa</option>
                    <option value="finance">Abroad</option>
                  </select>
                </div>
                <button type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
        <div className="container job">
          <h2>All Job Posted</h2>
          <div className="job-section">
            <div className="job-card">
              <div className="job-card-info">
                <span>
                  <FaBusinessTime size={30} />
                  <p>ABC company</p>
                </span>
                <p>
                  <span>
                    <FaMapMarkerAlt size={20} color="white" />
                  </span>
                  Kigali, Rwanda
                </p>
              </div>
              <div className="job-card-detail">
                <h3>Senior Full stack developer</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolor tempore voluptate aliquid molestiae vero sapiente
                  ducimus Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Dolor tempore voluptate aliquid molestiae vero sapiente
                  ducimus
                </p>
                <button>Apply Now</button>
              </div>
            </div>
            <div className="job-card">
              <div className="job-card-info">
                <span>
                  <FaBusinessTime size={30} />
                  <p>ABC company</p>
                </span>
                <p>
                  <span>
                    <FaMapMarkerAlt size={20} color="white" />
                  </span>
                  Kigali, Rwanda
                </p>
              </div>
              <div className="job-card-detail">
                <h3>Senior Full stack developer</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolor tempore voluptate aliquid molestiae vero sapiente
                  ducimus,...
                </p>
                <button>Apply Now</button>
              </div>
            </div>
            <div className="job-card">
              <div className="job-card-info">
                <span>
                  <FaBusinessTime size={30} />
                  <p>ABC company</p>
                </span>
                <p>
                  <span>
                    <FaMapMarkerAlt size={20} color="white" />
                  </span>
                  Kigali, Rwanda
                </p>
              </div>
              <div className="job-card-detail">
                <h3>Senior Full stack developer</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolor tempore voluptate aliquid molestiae vero sapiente
                  ducimus,...
                </p>
                <button>Apply Now</button>
              </div>
            </div>
            <div className="job-card">
              <div className="job-card-info">
                <span>
                  <FaBusinessTime size={30} />
                  <p>ABC company</p>
                </span>
                <p>
                  <span>
                    <FaMapMarkerAlt size={20} color="white" />
                  </span>
                  Kigali, Rwanda
                </p>
              </div>
              <div className="job-card-detail">
                <h3>Senior Full stack developer</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolor tempore voluptate aliquid molestiae vero sapiente
                  ducimus,...
                </p>
                <button>Apply Now</button>
              </div>
            </div>
            <div className="job-card">
              <div className="job-card-info">
                <span>
                  <FaBusinessTime size={30} />
                  <p>ABC company</p>
                </span>
                <p>
                  <span>
                    <FaMapMarkerAlt size={20} color="white" />
                  </span>
                  Kigali, Rwanda
                </p>
              </div>
              <div className="job-card-detail">
                <h3>Senior Full stack developer</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolor tempore voluptate aliquid molestiae vero sapiente
                  ducimus,...
                </p>
                <button>Apply Now</button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="container subscribe">
          <div className="subscribe-info">
            <h4>JobBoard</h4>
            <p>
            Join our newsletter and receive a weekly update of the top job openings directly in your inbox.
            </p>
          </div>
          <div className="subscribe-form">
            <input type="text" placeholder="Your email address..." />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
