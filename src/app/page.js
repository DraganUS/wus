"use client";

import { useEffect, useState } from 'react';

import ImageTextButtonHero from "@/components/ImageTextButtonHero";
import fetchRandomJoke from "../../services/jokeService";

export default function Home() {
    const [joke, setJoke] = useState('');

    // Fetch a new joke from the API
    const handleFetchNewJoke = async () => {
        const newJoke = await fetchRandomJoke();
        setJoke(newJoke);
    };

    useEffect(() => {
        handleFetchNewJoke();
    }, []);

    return (
        <div className="fluid-container">
            <ImageTextButtonHero
                imageUrl="/images/cigar.jpg"
                imageAlt="hero image"
                text={joke || 'Loading joke...'}
                onRequestNewText={handleFetchNewJoke}
                buttonText='new quote'
            />
        </div>
    );
}
