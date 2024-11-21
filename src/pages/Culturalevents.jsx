import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

const Cultural = () => {
    return (
        <div className="w-full min-h-screen flex-col flex mx-auto items-center overflow-y-auto bg-gradient-to-r from-gray-900 to-black">
            <Navbar />

            <section className="m-20">
                <div className='flex justify-center'>
                    <h2 className="text-7xl text-teal-400 font-semibold justify-between m-10">CULTURAL <span className="text-white">EVENTS</span></h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Bollywood Day Card */}
                    <Card
                        Title="Bollywood Day"
                        Date="April 5, 2024"
                        Society="Hypnotics"
                        Brief="Join us for a fun-filled day celebrating Bollywood movies, music, dance performances, and movie screenings!"
                    />

                    {/* Prom Card */}
                    <Card
                        Title="Prom Night"
                        Date="April 10, 2024"
                        Society="Taarangana"
                        Brief="Experience a glamorous night of dancing, music, and socializing at our annual Prom Night event!"
                    />

                    {/* Flashmob Card */}
                    <Card
                        Title="Flashmob"
                        Date="April 15, 2024"
                        Society="Zena"
                        Brief="Be part of an impromptu flashmob performance that will surprise everyone in the crowd!"
                    />

                    {/* Jamming Session Card */}
                    <Card
                        Title="Jamming Session"
                        Date="April 20, 2024"
                        Society="Tarannum"
                        Brief="Join fellow music lovers for a laid-back session of jamming, where anyone can bring their instruments and join in!"
                    />
                </div>

            </section>
            <div className='w-full'>
                <Footer />
            </div>
        </div>
    );
};

export default Cultural;