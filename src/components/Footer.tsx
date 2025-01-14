import React from 'react';

const Footer:React.FC = () => {
  return (
    <footer className='w-full h-[150px] bg-[linear-gradient(94.76deg,#1E1E1E_0%,#000000_100%)] text-secondary'>
      <div className='flex flex-col gap-4 justify-center h-full md:px-20 md:flex-row md:justify-between items-center'>
          <div >
              <p>Copyright © {new Date().getFullYear()} PKT</p>
          </div>
          <div className='flex gap-10 underline underline-offset-4'>
              <p>
                Privacy Policy
              </p>
              <p>
                Terms and Conditions
              </p>
          </div>
      </div>
    </footer>
  )
}

export default Footer;