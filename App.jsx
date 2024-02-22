import './App.css';
const App = () => {
  return (
    <>
      <nav className="navbar">
        <h2 className="logo">Portfolio</h2>
        <ul className="nav-links">
          <li><a>Home</a></li>
          <li><a>About Me</a></li>
          <li><a>Tech Stack</a></li>
          <li><a>Projects</a></li>
          <li><a>Contact</a></li>
        </ul>
      </nav>

      <br />
      <br />
      <br />
      <br />

      <section className="home">
        <div className="left">
          <p>I am a Website Developer</p>
          <p>Musfira Murtaza.</p>
          <br />
          <br />
          <p className="me" style={{ fontSize: 'smaller' }}>I am a 12-year-old front-end website developer, <br /> seeking to enhance and extend my skills.</p>
        </div>
        <div className="right">
          <img src="https://source.unsplash.com/j4uuKnN43_M" alt="Musfira Murtaza" />
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />

      <section className="about">
        <div className="main">
          <div className="about-content">
            <h1 style={{ color: 'navy' }}>About Me</h1>
            <br />
            <br />
            <h5 style={{ color: 'blue' }}>Web Developer and Python Developer</h5>
            <br />
            <br />
            <p style={{ color: 'white' }}>
              Hello, I'm Musfira Murtaza, an 12-year-old with a deep enthusiasm for becoming a future software engineer.
              I am dedicated to exploring the constantly evolving world of technology. I thrive on embracing fresh challenges,
              mastering state-of-the-art tools, and crafting innovative solutions. I would love for us to connect and embark on
              this exciting journey together! At the moment, I am gaining valuable experience through a Python and web development
              internship at CodSoft, and I have also completed an internship with Pak Interns.
            </p>
          </div>
        </div>
      </section>
<br />
<br />
<br />
      <section className="fifthSection">
        <h2 id="sikkl">Tech Stack</h2>
        <div className="skills">
          <div className="skill1">
            <div className="skillname">HTML</div>
            <div className="skillbar">
              <div className="skillper" style={{ maxWidth: '90%' }}></div>
            </div>
          </div>
          <div className="skill1">
            <div className="skillname">CSS</div>
            <div className="skillbar">
              <div className="skillper" style={{ maxWidth: '70%' }}></div>
            </div>
          </div>
          <div className="skill1">
            <div className="skillname">JavaScript</div>
            <div className="skillbar">
              <div className="skillper" style={{ maxWidth: '60%' }}></div>
            </div>
          </div>
          <div className="skills">
            <div className="skill1">
              <div className="skillname">Python</div>
              <div className="skillbar">
                <div className="skillper" style={{ maxWidth: '90%' }}></div>
              </div>
            </div>
            <div className="skill1">
              <div className="skillname">DSA</div>
              <div className="skillbar">
                <div className="skillper" style={{ maxWidth: '60%' }}></div>
              </div>
            </div>
            <div className="skill1">
              <div className="skillname">Java</div>
              <div className="skillbar">
                <div className="skillper" style={{ maxWidth: '60%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
<br />
<br />
<br />
      <div>
      <div id="contact">
        <div className="head">
          <h1>Contact</h1>
        </div>
<br />
<br />
<br />
        <div className="contact">
          <input type="text" placeholder="Enter Your Name" id="name" />
          <input type="email" placeholder="Enter Your Email" id="email" />
          <textarea rows="6" cols="35" placeholder="Your Message..." id="msg"></textarea>
          <button id="submit">Submit</button>
        </div>
      </div>

      <div className="footer">
        <div className="icons">
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-facebook"></i>
        </div>
        <div className="text">
          <p>Privacy Policy</p>
          <p>Term & Condition</p>
          <p>Disclaimer</p>
        </div>
      </div>
    </div>
          </>
  );
}

export default App;