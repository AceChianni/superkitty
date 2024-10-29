// // src/components/CatList.js
// import React, { useEffect, useState } from 'react';

// const CatList = () => {
//     const [cat, setCat] = useState({}); // State to store cat data
//     const [loading, setLoading] = useState(true); // State to handle loading state
//     const [error, setError] = useState(null); // State to handle errors

//     // Fetch cat data from API
//     async function fetchCat() {
//         try {
//             const result = await fetch("https://cats-cats-cats-demo.deno.dev/cats/burmese"); // Change endpoint as needed
//             if (!result.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const data = await result.json(); // Parse JSON data
//             console.log(data); // Log the data received for debugging
//             setCat(data); // Update state with fetched cat data
//         } catch (err) {
//             console.error('Error fetching cat data:', err); // Log any errors
//             setError(err.message); // Set error message in state
//         } finally {
//             setLoading(false); // Set loading to false regardless of success or failure
//         }
//     }

//     // Run the fetch function once when the component mounts
//     useEffect(() => {
//         fetchCat();
//     }, []);

//     return (
//         <div>
//             {loading && <p>Loading...</p>} {/* Show loading text while fetching */}
//             {error && <p>Error: {error}</p>} {/* Show error if there is one */}
//             {cat && (
//                 <div>
//                     <h1 className="text-4xl">{cat.name}</h1> {/* Display cat name */}
//                     <div>
//                         <img src={cat.image_link} alt={cat.name} style={{ maxWidth: '300px' }} /> {/* Display cat image */}
//                     </div>
//                     <div>
//                         {`The ${cat.name} is ${cat.length} and comes from ${cat.origin}`} {/* Display cat description */}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CatList; // Export the component

// src/components/CatList.js

import React, { useState, useEffect } from 'react';

const CatList = () => {
    const [catData, setCatData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCatData = async () => {
            console.log('Fetching cat data...');
            try {
                setLoading(true);
                const response = await fetch('https://cats-cats-cats-demo.deno.dev/cats/abyssinian');

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log('Data:', data);
                setCatData(data);
            } catch (err) {
                console.error('Error:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCatData();
    }, []);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {catData && (
                <div>
                    <h2>{catData.name}</h2> {/* Display cat name */}
                    <img src={catData.image_link} alt={catData.name} style={{ maxWidth: '300px' }} />
                    <p>{`Length: ${catData.length}`}</p>
                    <p>{`Origin: ${catData.origin}`}</p>
                    <p>{`Family Friendly: ${catData.family_friendly}`}</p>
                    <p>{`Playfulness: ${catData.playfulness}`}</p>
                    <p>{`Grooming: ${catData.grooming}`}</p>
                    <p>{`Intelligence: ${catData.intelligence}`}</p>
                    <p>{`Weight: ${catData.min_weight} - ${catData.max_weight} lbs`}</p>
                    <p>{`Life Expectancy: ${catData.min_life_expectancy} - ${catData.max_life_expectancy} years`}</p>
                </div>
            )}
        </div>
    );
};

export default CatList;
