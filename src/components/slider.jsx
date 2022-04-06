import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Home.css";

export const Slides = ()=>{

  const responsive = {
    superLargeDesktop: {
     
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 0,
      slidesToSlide: 0,
    },
  };

  return (
    <>
     <div className="slides">
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        keyBoardControl={true}
        infinite={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        customTransition="all .5"
        transitionDuration={500}
      >     
        <div className="card_wrapper">
          <div className="carousel_img">
          <p>The BitterSweet Review 1</p>
            <img 
              src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAVUSj8.img?h=152&w=270&m=6&q=60&o=f&l=f&x=250&y=103"
              alt="carouser-img"
            />
            <p>
              A Literary Magazine for Queers & Their Friends
            </p>
          </div>
          <div className="hr"></div>
          
         
        </div>
        <div className="card_wrapper">
          <div className="carousel_img">
          <p>The BitterSweet Review</p>
            <img 
              src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAVV9mq.img?h=533&w=799&m=6&q=60&o=f&l=f"
              alt="carouser-img"
            />
            <p>
              A Literary Magazine for Queers & Their Friends
            </p>
          </div>
          <div className="hr"></div>
          
         
        </div>
        <div className="card_wrapper">
          <div className="carousel_img">
          <p>The BitterSweet</p>
            <img 
              src="https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVUHsq.img&ehk=WTMsiR6SGfJzFesub6BawP6wGPGkJqwmi4Fb3hfxAYg%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0"
              alt="carouser-img"
            />
            <p>
              A Literary Magazine for Queers
            </p>
          </div>
          <div className="hr"></div>
          
        </div>
        <div className="card_wrapper">
          <div className="carousel_img">
          <p>The BitterSweet</p>
            <img 
              src="https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVUHsq.img&ehk=WTMsiR6SGfJzFesub6BawP6wGPGkJqwmi4Fb3hfxAYg%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0"
              alt="carouser-img"
            />
            <p>
              A Literary Magazine for Queers
            </p>
          </div>
          <div className="hr"></div>
          
         
        </div>
        <div className="card_wrapper">
          <div className="carousel_img">
          <p>The BitterSweet</p>
            <img 
              src="https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVUHsq.img&ehk=WTMsiR6SGfJzFesub6BawP6wGPGkJqwmi4Fb3hfxAYg%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0"
              alt="carouser-img"
            />
            <p>
              A Literary Magazine for Queers
            </p>
          </div>
          <div className="hr"></div>
          </div> 
          <div className="card_wrapper">
          <div className="carousel_img">
          <p>The BitterSweet</p>
            <img 
              src="https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVUHsq.img&ehk=WTMsiR6SGfJzFesub6BawP6wGPGkJqwmi4Fb3hfxAYg%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0"
              alt="carouser-img"
            />
            <p>
              A Literary Magazine for Queers
            </p>
          </div>
          <div className="hr"></div>
        </div>
        <div className="card_wrapper">
          <div className="carousel_img">
          <p>The BitterSweet</p>
            <img 
              src="https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVUHsq.img&ehk=WTMsiR6SGfJzFesub6BawP6wGPGkJqwmi4Fb3hfxAYg%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0"
              alt="carouser-img"
            />
            <p>
              A Literary Magazine for Queers
            </p>
          </div>
          <div className="hr"></div>
        </div>
        <div className="card_wrapper">
          <div className="carousel_img">
          <p>The BitterSweet</p>
            <img 
              src="https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVUHsq.img&ehk=WTMsiR6SGfJzFesub6BawP6wGPGkJqwmi4Fb3hfxAYg%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0"
              alt="carouser-img"
            />
            <p>
              A Literary Magazine for Queers
            </p>
          </div>
          <div className="hr"></div>
        </div>
        
      </Carousel>
      </div>
    </>
  );
}