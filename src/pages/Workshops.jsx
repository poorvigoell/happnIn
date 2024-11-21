import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

const Workshop = () => {
    return (
        <div className="w-full min-h-screen flex-col flex mx-auto items-center overflow-y-auto bg-gradient-to-r from-gray-900 to-black">
            <Navbar />

            <section className="m-20">
                <h2 className="text-7xl text-white relative m-10">WORKSHOPS</h2>
                <div className="workshops-list">
                    <Card
                        Title="Frontend Development Bootcamp"
                        Date="March 15, 2024"
                        Category="Web Development"
                        Brief="Learn the fundamentals of frontend development..."
                    />
                    <Card
                        Title="UX/UI Design Workshop"
                        Date="March 20, 2024"
                        Category="Design"
                        Brief="Hands-on design session with industry experts..."
                    />
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Workshop;