import React from 'react'

function FooterComponent(){
  return (
        <div>
        <footer className='bg-dark text-light py-4 fixed-bottom'>
        <div className='container'>
            <div className='row'>
            <div className='col-md-6'>
                <span>&copy; 2023 Chomiyeon. All rights reserved.</span>
            </div>
            <div className='col-md-6 text-md-right'>
                <a href='#' className='text-light'>Privacy Policy</a> | <a href='#' className='text-light'>Terms of Service</a>
            </div>
            </div>
        </div>
        </footer>
    </div>
    )
}


export default FooterComponent 