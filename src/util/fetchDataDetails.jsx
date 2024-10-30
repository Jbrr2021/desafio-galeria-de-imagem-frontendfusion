import axios from 'axios';

const fetchDataDetails = async (setPhotos) => {
    try {
        const response = await axios.get('https://picsum.photos/v2/list');
        setPhotos(response.data); // Atualiza o estado com a lista de fotos
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export default fetchDataDetails;
