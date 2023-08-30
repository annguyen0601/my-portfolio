import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import photoshop from "../assets/img/photoshop.png"
import illustrator from "../assets/img/illustrator.png"
import aftereffects from "../assets/img/after-effects.png"
import premiere from "../assets/img/premier.png"
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
              <Carousel responsive={responsive} infinite={false} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <div className="outer">
                    <img src={photoshop} alt="Photoshop" />
                  </div>
                  <h5>Photoshop</h5>
                </div>
                <div className="item">
                  <div className="outer">
                    <img src={illustrator} alt="Illustrator" />
                  </div>
                  <h5>Illustrator</h5>
                </div>
                <div className="item">
                  <div className="outer">
                    <img src={aftereffects} alt="After Effects" />
                  </div>
                  <h5>After Effects</h5>
                </div>
                <div className="item">
                  <div className="outer">
                    <img src={premiere} alt="Premiere Pro" />
                  </div>
                  <h5>Premiere Pro</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
