import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Official = () => {
    return (
        <div className="w-full min-h-screen flex-col flex mx-auto items-center overflow-y-auto bg-gradient-to-r from-gray-900 to-black">
            <Navbar />

            <section className="m-20">
                <div className='flex justify-center'>
                    <h2 className="text-7xl text-teal-400 font-semibold justify-between m-10">OFFICIAL <span className="text-white">EVENTS</span></h2>
                </div>
                <div className='flex justify-center'>
                <h4 className="text-xl text-white justify-between m-20">Coming Soon...</h4>
                </div>
                

            </section>
            <div className='w-full'>
                <Footer />
            </div>
        </div>
    );
};

export default Official;