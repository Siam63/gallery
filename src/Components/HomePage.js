import React from 'react'
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();

    const navigateToGallery = () => {
        navigate('/gallery');
    }

    return (
        <div className="w-full h-screen bg-[#0a192f]">
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <h4 className='text-blue-400'>Hi, my name is Siam Rahman</h4>
                <h3 className='text-blue-300'>I'm a Software Engineer that loves to capture photos for a hobby!</h3>
                <p className='text-gray-200'>Welcome to my portfolio website, where I showcase a few of my favourite pictures I have taken over the past few months.
                    Click the button below to see my recent work!
                </p>
                <div>
                    <button onClick={navigateToGallery} className='hover:bg-slate-600 transition-all text-gray-200 border-2 p-2'>View Gallery</button>
                </div>
                
            </div>
        </div>
    )
}

export default HomePage
