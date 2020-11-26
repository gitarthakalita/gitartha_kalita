
import { Button } from '@material-ui/core';
import FeaturedContent from '../src/components/FeaturedContent/FeaturedContent';
import Layout from '../src/components/Layout/Layout';
import Slider from '../src/components/Slider/Slider';

import { SLIDE_DATA } from '../src/data/SLIDE_DATA';
import Link from 'next/link';


const Home = ({ allPosts }) => {

  // const featuredPosts = allPosts[0]
  // const morePosts = allPosts.slice(1)

  return (
    <Layout>
      <div className="homepage">
        <div className="homepage__header">
          <div className="header--item header--content">
            <div className="header--content__wrapper">
              <div>
                <h2>Hello! I am</h2>
                <h1> Gitartha Kalita</h1>
              </div>
              <div className="content--identity">
                {/* <h2>Entrepreneur</h2> */}
                <h2>Fullstack Developer</h2>
                <h2>Product Designer</h2>
                <h2>Artificial Intelligence Enthusiast</h2>
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
                <Link href="/about">
                  <Button className="know-more">Know More</Button>
                </Link>
                <Button className="hire">Get In Touch</Button>
              </div>
            </div>
          </div>
          <div className="header--item header--image">
            <Slider slides={SLIDE_DATA} autoPlay={3} className=".noSelect" />
          </div>
        </div>



        <div className="homepage__content">
          <div className="content--item homepage__content--wrapper">
            <div className="first">
              <FeaturedContent
                title
              />
              <FeaturedContent />
              <FeaturedContent />
            </div>

          </div>
        </div>


      </div>
    </Layout>
  )
}

export default Home;


// export async function getStaticProps() {
//   const allPosts = getAllPosts([
//     'title',
//     'date',
//     'slug',
//     'author',
//     'coverImage',
//     'excerpt'
//   ])

//   return {
//     props: { allPosts },
//   }
// }
