// Import necessary React and Bootstrap components
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
const WelcomePage = () => {
  return (
    <div
      style={{ backgroundColor: '#464343' }}
      className={'projects-section text-white'}
    >
      <Container
        className='mt-0 
    '
      >
        <Row>
          <Col md={6}>
            {/* Content on the left */}
            <p>
              Indulge in a symphony of flavors at our artisanal bakery. Welcome
              to a world where the aroma of freshly baked wonders captivates
              your senses. Our master bakers craft each creation with passion,
              using only the finest ingredients to ensure every bite is pure
              delight. From flaky croissants to decadent cakes, experience the
              epitome of taste and craftsmanship. Whether it's a special
              occasion or a craving for the extraordinary, our bakery offers a
              haven for your palate. Elevate your moments with the magic of our
              oven-fresh delights. Your journey to exceptional taste begins
              here.{' '}
            </p>
          </Col>
          <Col md={6}>
            {/* Image on the right */}
            <img
              src={require('./side-pic.png')}
              alt='Welcome Image'
              className='img-fluid'
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default WelcomePage
