import axios from "axios";
import { useState,useEffect } from "react";

 
import { MdDateRange } from "react-icons/md";
import { FaSearch } from "react-icons/fa";


const ActDetail=({id})=>{
    const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://www.ehp-hasnaoui.com/api/act/'+id)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
	   
  }, []);
    return(
        <>
<div> 
{data.map((item, index) => (
       



            
 		<section class="news-single section"key={index}>
			<div class="container">
				<div class="row">
					<div class="col-lg-8 col-12">
						<div class="row">
							<div class="col-12">
								<div class="single-main">
 									<div class="news-head">
										<img src={`https://www.ehp-hasnaoui.com/uploads/images_act/${item.image}`}  alt="#"/>
									</div>
 									<h2 class="news-title"> {item.titre}  </h2>
 									<div class="meta">
										<div class="meta-left">
 											<span class="date"><MdDateRange color='#65ddd5' size={25} className="mx-2"/>
                                             {item.date}</span>
										</div>
										{/*<div class="meta-right">
											<span class="comments"><a href="#"><i class="fa fa-comments"></i>05 Comments</a></span>
											<span class="views"><i class="fa fa-eye"></i>33K Views</span>
										</div>*/}
									</div>
 									<div class="news-text">
										 
                                     <p 
             
              dangerouslySetInnerHTML={{ 
                __html: item.description 
              }}
            /> 									</div>
									{/*<div class="blog-bottom">
 										<ul class="social-share">
											<li class="facebook"><a href="#"><i class="fa fa-facebook"></i><span>Facebook</span></a></li>
											<li class="twitter"><a href="#"><i class="fa fa-twitter"></i><span>Twitter</span></a></li>
											<li class="google-plus"><a href="#"><i class="fa fa-google-plus"></i></a></li>
											<li class="linkedin"><a href="#"><i class="fa fa-linkedin"></i></a></li>
											<li class="pinterest"><a href="#"><i class="fa fa-pinterest"></i></a></li>
										</ul>
 										<ul class="prev-next">
											<li class="prev"><a href="#"><i class="fa fa-angle-double-left"></i></a></li>
											<li class="next"><a href="#"><i class="fa fa-angle-double-right"></i></a></li>
										</ul>
 									</div>*/}
								</div>
							</div>
							{/*<div class="col-12">
								<div class="blog-comments">
									<h2>All Comments</h2>
									<div class="comments-body">
 										<div class="single-comments">
											<div class="main">
												<div class="head">
													<img src="img/author1.jpg" alt="#"/>
												</div>
												<div class="body">
													<h4>Afsana Mimi</h4>
													<div class="comment-meta"><span class="meta"><i class="fa fa-calendar"></i>March 05, 2019</span><span class="meta"><i class="fa fa-clock-o"></i>03:38 AM</span></div>
													<p>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas</p>
													<a href="#"><i class="fa fa-reply"></i>replay</a>
												</div>
											</div>
										</div>		
									 
										<div class="single-comments left">
											<div class="main">
												<div class="head">
													<img src="img/author2.jpg" alt="#"/>
												</div>
												<div class="body">
													<h4>Naimur Rahman</h4>
													<div class="comment-meta"><span class="meta"><i class="fa fa-calendar"></i>March 05, 2019</span><span class="meta"><i class="fa fa-clock-o"></i>03:38 AM</span></div>
													<p>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas</p>
													<a href="#"><i class="fa fa-reply"></i>replay</a>
												</div>
											</div>
										</div>		
									 
										<div class="single-comments">
											<div class="main">
												<div class="head">
													<img src="img/author3.jpg" alt="#"/>
												</div>
												<div class="body">
													<h4>Suriya Molharta</h4>
													<div class="comment-meta"><span class="meta"><i class="fa fa-calendar"></i>March 05, 2019</span><span class="meta"><i class="fa fa-clock-o"></i>03:38 AM</span></div>
													<p>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas</p>
													<a href="#"><i class="fa fa-reply"></i>replay</a>
												</div>
											</div>
										</div>		
 									</div>
								</div>
							</div>
							<div class="col-12">
								<div class="comments-form">
									<h2>Leave Comments</h2>
 									<form class="form" method="post" action="mail/mail.php">
										<div class="row">
											<div class="col-lg-4 col-md-4 col-12">
												<div class="form-group">
													<i class="fa fa-user"></i>
													<input type="text" name="first-name" placeholder="First name" required="required"/>
												</div>
											</div>
											<div class="col-lg-4 col-md-4 col-12">
												<div class="form-group">
													<i class="fa fa-envelope"></i>
													<input type="text" name="last-name" placeholder="Last name" required="required"/>
												</div>
											</div>
											<div class="col-lg-4 col-md-4 col-12">
												<div class="form-group">
													<i class="fa fa-envelope"></i>
													<input type="email" name="email" placeholder="Your Email" required="required"/>
												</div>
											</div>
											<div class="col-12">
												<div class="form-group message">
													<i class="fa fa-pencil"></i>
													<textarea name="message" rows="7" placeholder="Type Your Message Here" ></textarea>
												</div>
											</div>
											<div class="col-12">
												<div class="form-group button">	
													<button type="submit" class="btn primary"><i class="fa fa-send"></i>Submit Comment</button>
												</div>
											</div>
										</div>
									</form>
 								</div>
							</div>*/}
						</div>
					</div>
					<div class="col-lg-4 col-12">
						<div class="main-sidebar">
 							<div class="single-widget search">
								<div class="form">
									<input type="text" placeholder="Rechercher..."/>
									<a class="button" href="#"><FaSearch color="white"/>
                                    </a>
								</div>
							</div>
							 
							<div class="single-widget category">
								<h3 class="title">Nos Services :</h3>
								<ul class="categor-list">
									<li><a href="#">Men's Apparel</a></li>
									<li><a href="#">Women's Apparel</a></li>
									<li><a href="#">Bags Collection</a></li>
									<li><a href="#">Accessories</a></li>
									<li><a href="#">Sun Glasses</a></li>
								</ul>
							</div>
						   
 						</div>
					</div>
				</div>
			</div>
		</section>
 
))}
</div>
        </>
    )
}

export default ActDetail;