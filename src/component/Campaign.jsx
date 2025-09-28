import React from 'react';
import { Link } from 'react-router-dom';

const Campaign = ({ campaign }) => {
    // Example campaign prop: { image, title, price, buttonText, onButtonClick }
    const {id, title, image, description, status, contactInfo, division} = campaign;
    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <figure className="pt-4">
                <img
                    src={image}
                    alt={title}
                    className="rounded-xl h-40 object-contain"
                />
            </figure>
            <div className="card-body items-start">
                <h2 className="card-title text-lg font-semibold">{title}</h2>
                <p className="text-base text-gray-700 truncate w-full" style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                    {description}
                </p>
                <span className='badge badge-ghost'>{status}</span>
                <p className="text-sm text-gray-500">Contact: {contactInfo}</p>
                <p className="text-sm text-gray-500">Division: {division}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Donate Now</button>
                </div>
            </div>
            <div className="card-actions justify-end p-4">
                <Link to={`/campaindetails/:${id}`} className="btn btn-outline btn-sm">Learn More</Link>
            </div>
        </div>
    );
};

export default Campaign;