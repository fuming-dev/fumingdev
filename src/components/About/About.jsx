import image from '../../assets/profile.jpg'
import './about.css'

const About = () => {

    return (
      <div>
        <div className="about-container"  >

          <div className="image-container" id="about"> 
          <h1>About</h1>
          <div className="image-pict">
            <img src={image} alt="Test" />
          </div>
          
          <div className="about-main">
          <h2>Who Am I?</h2>

            <div className="about-content" >
              <p>
                Recently graduated from Roosevelt University Class of 2021. I am
                currently looking for an entry-level position as a Software
                Engineer
              </p>
          </div>
          
          </div>




          </div>
          

          <section className="skills">
            <h1>Skills</h1>

            <div className="border-top"></div>

            <ul>
              <li>HTML5/CSS3</li>
              <li>JavaScript/React</li>
              <li>Git/Github</li>
              <li>VSCode/AdobeXD</li>

            </ul>
          </section>
        </div>
      </div>
    );
}

export default About
