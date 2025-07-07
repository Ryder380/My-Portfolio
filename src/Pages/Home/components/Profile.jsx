
import { Typewriter } from "react-simple-typewriter";

function Profile() {
  
  return (
    <>
      <div className="container-fluid profile_container">
        <div className="container-fluid inner_profile_container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="h-100 d-flex align-items-center justify-content-center">
                <div>
                  <div className="profile_name-wrapper">
                    <p className="profile_name mb-0 text-white">
                      Hi, I'm Kalindu Gayanjith 
                    </p>
                  </div>
                  <div className="occupation-wrapper">
                    <p className="occupation mb-0">
                      <Typewriter words={["Frontend Developer"]} loop cursor />
                    </p>
                  </div>
                  <div className="details">
                    <p className="mb-0 mt-3 text-white">
                      Front-end web developer with a passion for creating
                      responsive, user-friendly websites and applications.
                      Experienced in HTML, CSS, JavaScript, JavaScript libraries and frameworks like
                      Vue.js and React, I focus on delivering seamless,
                      interactive user experiences.
                    </p>
                  </div>
                  <div className="btn-group mt-5">
                    <button
                      type="button"
                      className="btn btn-outline-info mx-2 rounded bg-info text-black hire_me_btn px-3"
                    >
                      Hire me
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-info mx-2 rounded project_btn px-3"
                    >
                      See Projects
                    </button>
                  </div>
                </div>
              </div>
              <div className="social-media-icons d-flex">
                <a className="icon mx-2 border border-2" href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a className="icon mx-2 border border-2" href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a className="icon mx-2 border border-2" href="#">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src="Images/person1.png"
                className="w-100 h-100 profile_image"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
