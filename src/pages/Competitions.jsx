import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

const Competition = () => {
    return (
        <div className="w-full min-h-screen flex-col flex mx-auto items-center overflow-y-auto bg-gradient-to-r from-gray-900 to-black">
            <Navbar />

            <section className="m-20">
                <div className='flex justify-center'>
                    <h2 className="text-7xl text-teal-400 font-semibold justify-between m-10">COMPETI<span className="text-white">TIONS</span></h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Debate Competition Card */}
                    <Card
                        Title="Debate Competition"
                        Date="May 5, 2024"
                        Mode="Offline"
                        Society="Debate Club"
                        Brief="Engage in thought-provoking debates on current issues with your peers. Showcase your public speaking and argumentation skills!"
                    />

                    {/* Finance Quiz Card */}
                    <Card
                        Title="Case Study"
                        Date="May 15, 2024"
                        Mode="Online"
                        Society="Finivesta"
                        Brief="Test your knowledge on financial markets, investment strategies, and global economics in this exciting finance quiz competition!"
                    />

                    {/* Poetry Slam Card */}
                    <Card
                        Title="Poetry Slam"
                        Date="May 20, 2024"
                        Mode="Offline"
                        Society="Soch"
                        Brief="Express yourself through poetry. Participate in this creative competition and perform your original works in front of an audience!"
                    />

                    {/* Photography Contest Card */}
                    <Card
                        Title="Photography Contest"
                        Date="May 25, 2024"
                        Mode="Offline"
                        Society="Prekshaya"
                        Brief="Capture stunning moments and showcase your photography skills. Submit your best shots for a chance to win!"
                    />
                </div>

            </section>
            <div className='w-full'>
                <Footer />
            </div>
        </div>
    );
};

export default Competition;