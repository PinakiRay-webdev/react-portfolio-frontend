import React from 'react'

const Notice = () => {
  return (
    // Added overflow-hidden to contain the scrolling text
    <div className='py-1 px-2 bg-black text-white w-full fixed top-0 z-10 overflow-hidden flex items-center' >
      {/* The scrolling wrapper */}
      <div className="whitespace-nowrap animate-marquee">
        <span className="mx-4">
          ⚠️ <strong>Notice:</strong> This portfolio has not been updated with my projects from the last 2 years. 
          The backend server is currently being shut down for migration to a new service (like Render), 
          so contact forms might not submit successfully.
        </span>
      </div>
    </div>
  )
}

export default Notice