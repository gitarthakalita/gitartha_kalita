
import { Button } from '@material-ui/core';
import Layout from '../src/components/Layout/Layout';




const Home = () => (
  <Layout>
    <div className="homepage">
      <div className="homepage__header">
        <div className="header--item header--content">
          <div className="header--content__wrapper">
            <h1>I'm Gitartha Kalita</h1>
            <div className="content--identity">
            <h2>Entrepreneur</h2>
              <h2>Fullstack Developer</h2>
              <h2>Product Designer</h2>
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
            
            <Button>Know More</Button>
          </div>
        </div>
        <div className="header--item header--image"></div>
      </div>



    </div>
  </Layout>
)

export default Home
