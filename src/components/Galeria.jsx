import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';

const Galeria = () => {
    const [images, setImages] = useState([]);
    // Estado 'images' para armazenar a lista de imagens obtidas da API
    useEffect (() => {
        //useEffect é usado para fazer a chamada á API quando o componente for montado
        fetch('https://picsum.photos/v2/list') //Fazer requisição da API
        .the(response => response.json()) // Converte a resposta em JSON
        .the(data => setImages(data));//Atualizar o estado com os dados recebidos
    },[]);//O array vazio [] faz com que o userEffect seja executado apenas uma vez(Quando o componente é montado)

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {images.map(image => (
                <ImageCard key={image.id} image={image} />
            ))}
        </div>
    );
};

export default Galeria;