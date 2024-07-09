import React from 'react';
import { useParams } from 'react-router-dom';

const ServicePage = () =>{
    const { serviceName } = useParams();

    return (
        <div>
            <h1>{serviceName}</h1>
            <p>content for {serviceName}</p>
        </div>
    );
};

export default ServicePage;

