// Import necessary React and Bootstrap components
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// Named export for the AboutUs component
export const AboutUs = () => {
  return (
    <>
      <div
        style={{ backgroundColor: '#C1C3C0' }}
        className={'projects-section text-dark'}
      >
        <Container className='mt-5 '>
          <Row>
            <Col md={6}>
              {/* Content on the left */}
              <h1>About Us</h1>
            </Col>
            <Col md={6}>
              {/* Image on the right */}
              <img
                src={require('./About-pic.png')} // Replace with your image URL
                alt='About Us Image'
                className='img-fluid'
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              {/* Additional paragraph below */}
              <p>
                At our bakery, baking isn't just a process; it's an art, a
                passion that's woven into every loaf, pastry, and confection we
                create. Established with a vision to redefine indulgence, we
                take pride in crafting experiences that transcend the ordinary.
                Our story began with a small kitchen and a big dream – to infuse
                the world with the warmth of freshly baked goods. What sets us
                apart is our unwavering commitment to quality. We meticulously
                source the finest ingredients, from velvety chocolate to locally
                grown fruits, ensuring that every bite tells a tale of
                exceptional flavor. But it's not just about ingredients; it's
                about the hands that shape them. Our dedicated team of master
                bakers pours their heart into each recipe, combining
                time-honored techniques with innovative twists. From the moment
                you step into our bakery, you're enveloped in a symphony of
                scents and sights that awaken your senses. Every creation that
                graces our shelves is a result of countless hours of
                experimentation, dedication, and a genuine love for baking. But
                we're more than just bakers; we're a community brought together
                by a shared love for all things delicious. As we knead, roll,
                and bake, we're not just making pastries – we're crafting
                memories. From birthday celebrations marked by our custom cakes
                to lazy Sunday mornings made better with our artisanal bread,
                we're there for life's sweetest moments. Our journey is one of
                passion, flavor, and the joy that comes from spreading
                happiness, one delectable treat at a time.{' '}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
