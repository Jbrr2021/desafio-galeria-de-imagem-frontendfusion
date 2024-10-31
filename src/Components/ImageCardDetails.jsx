import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchDataDetails from '../util/fetchDataDetails';

function ImageCardDetails() {
    const { id } = useParams();
    const [photo, setPhoto] = useState(null);

    useEffect(() => {
        fetchDataDetails(setPhoto, id);
    }, [id]);

    if (!photo) return <p>Loading...</p>;

    return (
        <div className="flex flex-col items-center">
            <img src={photo.download_url} alt={`Photo by ${photo.author}`} className="rounded-xl max-w-md" />
            <p className="mt-4 text-lg font-semibold">Photo by {photo.author}</p>
        </div>
    );
}

export default ImageCardDetails;
