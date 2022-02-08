import React from 'react';
const Testimonial = (props) => {
  return <section >

          <article className='testimonials'> 
              <h3 className='testimonialTitle'>{props.data.title}</h3>
              <div className='cardContainer'>
              {props.image }
              <p>{props.data.copy}</p>
              </div>
              <footer className='cardFooter'>
                   -<cite>{props.data.name}</cite> 
              </footer>
          </article>
      
      

  </section>;
};

export default Testimonial;
