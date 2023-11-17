import Cards from './Cards'

export const Offering = () => {
  return (
    <>
      <div
        style={{ backgroundColor: '#464343' }}
        className={'projects-section text-white'}
      >
        <div className='container-row'>
          <div className='conatiner col-sm-12 col-lg-6 col-md-12'>
            <h1>Our offerings</h1>
          </div>
          <div className='row'>
            <div className=' col-sm-12 pt-4 pb-4 col-md-6 col-lg-4 mt-4'>
              <Cards />
            </div>
            <div className='col-sm-12 pt-4 pb-4  col-md-6 col-lg-4 mt-4'>
              <Cards />
            </div>
            <div className='col-sm-12 pt-4 pb-4 col-md-6 col-lg-4 mt-4'>
              <Cards />
            </div>
            <div className='col-sm-12 pt-4 pb-4 col-md-6 col-lg-4 mt-4'>
              <Cards />
            </div>
            <div className='col-sm-12 pt-4 pb-4 col-md-6 col-lg-4 mt-4'>
              <Cards />
            </div>
            <div className='col-sm-12  pt-4 pb-4 col-md-6 col-lg-4 mt-4'>
              <Cards />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Offering
