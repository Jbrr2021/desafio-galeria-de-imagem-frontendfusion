import React from 'react';
import { Link } from 'react-router-dom';

function Image({ id, download_url, author }) {
    return (
        <Link to={`/detailPage/${id}`}>
            <div key={id}>
                <img src={download_url} alt={`Photo by ${author}`} className="rounded-3xl" />
                <p className="text-center mt-2 text-sm text-gray-600">Photo by {author}</p>
            </div>
        </Link>
    );
}

export default Image;
