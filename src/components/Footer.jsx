"use client";
import { useEffect, useState } from 'react';

const Footer = () => {
    const [visitorCount, setVisitorCount] = useState(null);


    // Fetch the visitor count from the API
    useEffect(() => {
        const getVisitorCount = async () => {
            try {
                const response = await fetch('/api/visit', { method: 'POST' });
                if (!response.ok) throw new Error('Failed to fetch visitor count');
                const data = await response.json();
                setVisitorCount(data.visitorCount);
            } catch (error) {
                console.error('Error fetching visitor count:', error);
            }
        };

        getVisitorCount();
    }, []);

    return (
        <footer className="">
            <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 mt-16 border-t border-amber-300 ">
                <h2 className="text-3xl font-bold text-center ">
                    Visitor Count: {visitorCount ?? 'Loading...'}
                </h2>
                <p className="text-center text-lg/relaxed text-amber-100">
                    Created with &#x2764;
                </p>
            </div>
        </footer>
    );
};

export default Footer;
