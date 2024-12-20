import React from 'react';
import './../BlogDetails/BlogDetails.css';
import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';
import { Link } from 'react-router-dom';

import blogImg from '../../assets/images/dev-1.jpg';
import ourWorkImg from '../../assets/images/our-work/ourwork-thumb-img1.webp'

const Services = () => {
  return (
    <>
      {/* Header section start */}
      <Header />
      {/* Header section end */}
      
      <div className="mainSection">
        {/* Top title section start */}
        <section className="position-relative section-block inner-title-section blog-details-inner-title-section">
          <div className="section-shape1"></div>
          <div className="container z-1 position-relative">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="title-block mb-0">
                  <h2 className="main-title max-width-none text-white text-capitalize">Top 10 Excel Add-ins Plugins to Enhance Your Legal Consulting Practice</h2>
                  <div className="blog-details-top-info text-white">
                    <strong>Mashal Noor</strong>
                    <div className="blog-details-date-time">
                      <span>27 Jun, 2024</span> | <span>13 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Top title section end */}

        {/* Blog details section start */}
        <section className="position-relative section-block bg-white-pattern inner-blog-details-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="blog-details-content-block">
                  <div className="blog-details-img-block">
                    <img src={blogImg} alt="" />
                  </div>
                  <div className="blog-details-info-block">
                    <div className="row">
                      <div className="col-12 col-md-8 col-lg-8">
                        <div className="blog-details-info">
                          <h4>The tech landscape is evolving, and choosing the right software development company could make all the difference for businesses in 2024.</h4>
                          
                          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione quas aliquid, quasi maiores ea ipsum voluptate, nulla nobis quidem veritatis dolorum consectetur rerum explicabo distinctio quisquam libero qui facilis est optio quibusdam enim velit laboriosam. Odit hic molestiae sint ipsum eveniet aliquid eius harum at nobis. Mollitia ab tempora minus?</p>
                          
                          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ut corporis alias, praesentium ducimus quis eius. Dolore accusamus itaque molestias?</p>
                          
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aut quam incidunt vitae est blanditiis, quo ipsa suscipit itaque. Quaerat reiciendis, dicta unde atque eum quasi asperiores maiores, vero commodi facere magni ipsa illo impedit, eligendi nihil voluptatum nisi deserunt?</p>
                          
                          <ul className="blog-details-info-lists">
                            <li>
                              <i class="ri-checkbox-circle-fill"></i>
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium veniam ad ipsum adipisci, rem architecto. Magnam, maiores! Rem, magni distinctio!</p>
                            </li>
                            <li>
                              <i class="ri-checkbox-circle-fill"></i>
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium veniam ad ipsum adipisci, rem architecto. Magnam, maiores! Rem, magni distinctio!</p>
                            </li>
                            <li>
                              <i class="ri-checkbox-circle-fill"></i>
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium veniam ad ipsum adipisci, rem architecto. Magnam, maiores! Rem, magni distinctio!</p>
                            </li>
                            <li>
                              <i class="ri-checkbox-circle-fill"></i>
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium veniam ad ipsum adipisci, rem architecto. Magnam, maiores! Rem, magni distinctio!</p>
                            </li>
                            <li>
                              <i class="ri-checkbox-circle-fill"></i>
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium veniam ad ipsum adipisci, rem architecto. Magnam, maiores! Rem, magni distinctio!</p>
                            </li>
                          </ul>
                          
                          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi dignissimos aut reprehenderit nobis eligendi accusantium, voluptas dolorem earum! Exercitationem ipsa aliquam ratione voluptatum quos ut maiores cupiditate quae rem, fugiat dolores, fugit atque non iure repellat facilis neque eius consequatur? Maiores amet nesciunt quas laudantium repudiandae ipsam? Sequi architecto recusandae quo eius atque tempore voluptatem explicabo enim earum nihil quis est repellat ipsum ab velit, inventore modi quam. Illo commodi quam quisquam aut consequatur, sit, in nemo eos minus non at beatae a. Dolore veniam, laboriosam nostrum, illum quia distinctio debitis numquam nisi itaque, facere sequi delectus quas. Quaerat, fugiat.</p>
                          
                          <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, sapiente!</h5>
                          
                          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam doloremque quod consectetur reprehenderit officia praesentium corrupti placeat a, aperiam sit non, error aut. Cupiditate harum iste eaque. Consectetur expedita doloremque quidem, ad minus hic corporis? Libero dignissimos, possimus est ad quas doloremque perspiciatis quisquam sint eaque blanditiis in architecto veniam nesciunt eos corporis. Nihil vitae laborum blanditiis odio explicabo doloremque.</p>
                          
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, accusantium expedita optio aspernatur molestias, sapiente libero cumque quos vitae veritatis provident id laudantium obcaecati nihil ut sequi quisquam dolorem? Fugit perspiciatis illum obcaecati ducimus molestias totam error, exercitationem, quod amet earum eius eligendi ipsa dolorem.</p>
                          
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae facere eligendi illum pariatur nihil non doloremque doloribus ad aperiam laudantium.</p>

                          <h5>Lorem ipsum dolor sit amet.</h5>
                          <ul className="blog-details-info-lists">
                            <li>
                              <i class="ri-checkbox-circle-fill"></i>
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium veniam ad ipsum adipisci, rem architecto. Magnam, maiores! Rem, magni distinctio!</p>
                            </li>
                            <li>
                              <i class="ri-checkbox-circle-fill"></i>
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium veniam ad ipsum adipisci, rem architecto. Magnam, maiores! Rem, magni distinctio!</p>
                            </li>
                            <li>
                              <i class="ri-checkbox-circle-fill"></i>
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium veniam ad ipsum adipisci, rem architecto. Magnam, maiores! Rem, magni distinctio!</p>
                            </li>
                            <li>
                              <i class="ri-checkbox-circle-fill"></i>
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium veniam ad ipsum adipisci, rem architecto. Magnam, maiores! Rem, magni distinctio!</p>
                            </li>
                            <li>
                              <i class="ri-checkbox-circle-fill"></i>
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium veniam ad ipsum adipisci, rem architecto. Magnam, maiores! Rem, magni distinctio!</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-12 col-md-4 col-lg-4">
                        <div className="blog-recent-posts">
                          <h3>Recent Posts</h3>
                          <ul className="blog-recent-post-list">
                            <li>
                              <Link>Top 10 Excel Add-ins Plugins to Enhance Your Legal Consulting Practice</Link>
                            </li>
                            <li>
                              <Link>How to Choose the Best Development Platform among Bubble vs PowerApps?</Link>
                            </li>
                            <li>
                              <Link>How Power BI Developers Optimize Business Performance</Link>
                            </li>
                            <li>
                              <Link>Why Choose ASP.NET for Web Development Projects?</Link>
                            </li>
                            <li>
                              <Link>Why Choose ReactJS and React Native for Your App Development Needs?</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Blog details section end */}

        {/*Related Articles section start*/}
        <section className="position-relative section-block bg-ghost-white">
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="title-block1 position-relative text-center">
                  <h2 className="main-title text-capitalize max-width-none">Related Article</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="blog-card w-100">
                  <Link to="/blog-details">
                    <div className="blog-img-block">
                      <img src={ourWorkImg} alt="" />
                    </div>
                    <div className="blog-date"><i class="ri-stop-large-fill"></i> <span>05 July 2024</span></div>
                    <h3>How Much Does it Cost to Build an App Like Airbnb in 2024?</h3>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="blog-card w-100">
                  <Link to="/blog-details">
                    <div className="blog-img-block">
                      <img src={ourWorkImg} alt="" />
                    </div>
                    <div className="blog-date"><i class="ri-stop-large-fill"></i> <span>05 July 2024</span></div>
                    <h3>How Much Does it Cost to Build an App Like Airbnb in 2024?</h3>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Related Articles section end*/}

      </div>

      {/* Footer section start */}
      <Footer/>
      {/* Footer section end */}
    </>
  )
}

export default Services
