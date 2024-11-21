import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

const Workshop = () => {
    return (
        <div className="w-full min-h-screen flex-col flex mx-auto items-center overflow-y-auto bg-gradient-to-r from-gray-900 to-black">
            <Navbar />

            <section className="m-20">
                <div className='flex justify-center'>
                    <h2 className="text-7xl text-teal-400 font-semibold justify-between m-10">WORK<span className="text-white">SHOPS</span></h2>
                </div>
                <div className="workshops-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card
                        Title="Frontend Development Bootcamp"
                        Date="March 15, 2024"
                        Mode="Online"
                        Society="GDSC"
                        Brief="Learn the fundamentals of frontend development..."
                    />
                    <Card
                        Title="UX/UI Design Workshop"
                        Date="March 20, 2024"
                        Mode="Offline"
                        Society="Nirvana"
                        Brief="Hands-on design session with industry experts..."
                    />
                    <Card
                        Title="Backend Development Masterclass"
                        Date="March 25, 2024"
                        Mode="Offline"
                        Society="LeanIn"
                        Brief="Master backend technologies with this intensive workshop..."
                    />
                    <Card
                        Title="AI in Everyday Life"
                        Date="March 30, 2024"
                        Mode="Online"
                        Society="AI Club"
                        Brief="Discover the practical applications of AI in daily life..."
                    />
                </div>

            </section>
            <div className='w-full'>
                <Footer />
            </div>
        </div>
    );
};

export default Workshop;