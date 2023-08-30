import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/28.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Banner = () => {
  const [text] = useTypewriter({
    words: ['Web Developer', 'Data Analyst', 'Designer'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80
  })

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  {/* <span className="tagline">Welcome to my Portfolio</span> */}
                  <h1>Hi! I'm An</h1>
                  <h2>I'm a <span className="wrap"> {text}<Cursor /></span></h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                  <div className="social-icon">
                    <a href="https://www.linkedin.com/in/nguyễn-an-474484150"><img src={navIcon1} alt="" /></a>
                    <a href="https://www.facebook.com/profile.php?id=100042787393680"><img src={navIcon2} alt="" /></a>
                    <a href="https://www.instagram.com/zoanday"><img src={navIcon3} alt="" /></a>
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img className="floater" src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section >
  )
}
