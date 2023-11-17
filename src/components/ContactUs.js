import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export default function ContactUs() {
  return (
    <section id='contact' className='relative'>
      <Container className='mt-5'>
        <h1>Contact Us</h1>
        <Form
          netlify
          name='contact'
          className='lg:w-2/3 md:w-1/2 flex flex-col md:ml-auto md:mr-auto w-full md:py-8 mt-8 md:mt-0'
        >
          <Row>
            {/* Left Column */}
            <Col md={6}>
              <Form.Group className='mb-4'>
                <Form.Label htmlFor='name'></Form.Label>
                <Form.Control
                  type='text'
                  id='name'
                  name='name'
                  placeholder='Full Name'
                />
              </Form.Group>
              <Form.Group className='mb-4'>
                <Form.Label htmlFor='address'></Form.Label>
                <Form.Control
                  type='text'
                  id='address'
                  name='address'
                  placeholder='Address'
                />
              </Form.Group>
            </Col>
            {/* Right Column */}
            <Col md={6}>
              <Form.Group className='mb-4'>
                <Form.Label htmlFor='phone'></Form.Label>
                <Form.Control
                  type='text'
                  id='phone'
                  name='phone'
                  placeholder='Phone'
                />
              </Form.Group>
              <Form.Group className='mb-4'>
                <Form.Label htmlFor='email'></Form.Label>
                <Form.Control
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Email'
                />
              </Form.Group>
            </Col>
          </Row>
          {/* Description Field */}
          <Form.Group className='mb-4'>
            <Form.Label htmlFor='message'></Form.Label>
            <Form.Control
              as='textarea'
              id='message'
              name='message'
              placeholder='Description'
              rows={4}
            />
          </Form.Group>
          {/* Submit Button */}
          <Button
            style={{ backgroundColor: 'green' }}
            type='submit'
            className='text-white ms-auto'
          >
            Submit
          </Button>
        </Form>
      </Container>
    </section>
  )
}
