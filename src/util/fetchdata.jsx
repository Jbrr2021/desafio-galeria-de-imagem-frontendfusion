import axios from 'axios';

async function fetchData(setData, page = 1) {
    try {
        const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=32`);
        setData(response.data); // Atualiza o estado com a lista de fotos
    } catch (error) {
        console.error('Erro ao buscar os dados:', error);
    }
}

export default fetchData;
