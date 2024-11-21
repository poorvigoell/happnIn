import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

const Hackathon = () => {
    return (
        <div className="w-full min-h-screen flex-col flex mx-auto items-center overflow-y-auto bg-gradient-to-r from-gray-900 to-black">
            <Navbar />

            <section className="m-20">
            <div className='flex justify-center'>
                    <h2 className="text-7xl text-teal-400 font-semibold justify-between m-10">HACKA<span className="text-white">THONS</span></h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card
                        Title="AI & Machine Learning Hackathon"
                        Date="April 5-6, 2024"
                        Mode="Online"
                        Society="AI Innovators"
                        Brief="Join the AI & ML Hackathon where you'll tackle real-world problems using AI technologies. Collaborate with like-minded developers, data scientists, and innovators to create groundbreaking solutions that harness the power of machine learning."
                    />
                    <Card
                        Title="Blockchain for Social Good"
                        Date="April 12-13, 2024"
                        Mode="Offline"
                        Society="Blockchain Enthusiasts"
                        Brief="Explore how blockchain technology can be used for social impact. From creating transparent supply chains to building decentralized applications, this hackathon focuses on using blockchain for good causes. Join us to bring innovative ideas to life!"
                    />
                    <Card
                        Title="Cybersecurity Challenge"
                        Date="April 19-20, 2024"
                        Mode="Hybrid"
                        Society="Cyber Defenders"
                        Brief="Are you passionate about protecting systems from cyber threats? The Cybersecurity Challenge will test your skills in vulnerability assessments, ethical hacking, and building secure systems. Work with teams to defend against simulated cyber-attacks and win amazing rewards."
                    />
                    <Card
                        Title="Smart Cities Hackathon"
                        Date="April 25-26, 2024"
                        Mode="Offline"
                        Society="Tech for Good"
                        Brief="Join the Smart Cities Hackathon to create innovative tech solutions for urban challenges. Whether it's improving transportation, enhancing sustainability, or optimizing energy use, this event focuses on leveraging technology to make cities smarter and more efficient."
                    />
                </div>

            </section>
            <div className='w-full'>
                <Footer />
            </div>
        </div>
    );
};

export default Hackathon;