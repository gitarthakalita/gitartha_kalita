
import { Button } from '@material-ui/core';
import { useEffect } from 'react';
import FeaturedContent from '../src/components/FeaturedContent/FeaturedContent';
import Layout from '../src/components/Layout/Layout';
import Slider from '../src/components/Slider/Slider';

const images = [
  '/assets/loopd.webp',
  '/assets/prep2.png',
  '/assets/prep1.png',
  '/assets/homepage.webp',
  '/assets/hatch.jpg',
  
  // '/assets/3.jpg',
  // '/assets/4.jpg',
]



const Home = () => {

  return(
    <Layout>
      <div className="homepage">
        <div className="homepage__header">
          <div className="header--item header--content">
            <div className="header--content__wrapper">
              <h1>Hello! I'm Gitartha Kalita</h1>
              <div className="content--identity">
                <h2>/Entrepreneur</h2>
                <h2>/Fullstack Developer</h2>
                <h2>/Product Designer</h2>
                <h2>/Artificial Intelligence Researcher</h2>
              </div>
              <div className="content--description">
                <div>I</div>
                <ul>
                  <li>Design Strategies</li>
                  <li>Solve Problems</li>
                  <li>Develop Systems and</li>
                  <li>Create Value</li>
                  </ul>
              </div>

              <div className="btn-wrapper">
                <Button className="know-more">Know More</Button> <Button className="hire">Hire Me</Button>
              </div>
            </div>
          </div>
          <div className="header--item header--image">
            <Slider slides={images} autoPlay={3} className=".noSelect" />
          </div>
        </div>

        <div className="homepage__content">
          <div className="content--item homepage__content--wrapper">
            <div className="first">
              <FeaturedContent />
              <FeaturedContent />
              <FeaturedContent />
            </div>

          </div>
        </div>


      </div>
    </Layout>
  )
}

export default Home
