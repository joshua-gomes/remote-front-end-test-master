import React, { Suspense, useEffect, useState } from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';

const PropertyListing = () => {
    const [properties, setProperties] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`http://localhost:3000/api/properties`);
                const properties = await res.json();

                setProperties(properties);
            } catch (error) {
                setError('Something went wrong. Please try again.');
            }
        })();
    }, []);

    if (error) return <p>{error}</p>;

    return (
        <ul className="PropertyListing">
            {properties.map((property, index) => (
                <li key={index}>
                    <PropertyCard {...property} />
                </li>
            ))}
        </ul>
    );
};

export default PropertyListing;
