// src/components/CatList.js

import React, { useState, useEffect } from 'react';

const CatList = () => {
    const [catData, setCatData] = useState(null); // State to store cat data
    const [loading, setLoading] = useState(true); // State to handle loading state
    const [error, setError] = useState(null); // State to handle errors

    useEffect(() => {
        const fetchCatData = async () => {
            console.log('Fetching cat data...'); // Log to check if this runs
            try {
                setLoading(true); // Set loading to true
                const response = await fetch('https://cats-cats-cats-demo.deno.dev/cats/abyssinian');

                // Check if response is ok (status code 200)
                if (!response.ok) {
                    throw new Error('Network response was not ok'); // Throw error for non-200 responses
                }

                const data = await response.json(); // Parse JSON data
                console.log('Data:', data); // Log the data received
                setCatData(data); // Update state with cat data
            } catch (err) {
                console.error('Error:', err); // Log any errors
                setError(err.message); // Update state with error message
            } finally {
                setLoading(false); // Set loading to false regardless of success or failure
            }
        };

        fetchCatData(); // Call the function to fetch cat data
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div>
            {loading && <p>Loading...</p>} {/* Show loading text while fetching */}
            {error && <p>Error: {error}</p>} {/* Show error if there is one */}
            {catData && (
                <div>
                    <h2>{catData.breed}</h2> {/* Display cat breed */}
                    <p>{catData.description}</p> {/* Display cat description */}
                    <img src={catData.image} alt={catData.breed} style={{ maxWidth: '300px' }} /> {/* Display cat image */}
                </div>
            )}
        </div>
    );
};

export default CatList; // Export the component
