const accessKey = 'XY3RS2Mb0-zPs2SbaRu8QqVmdylY1YXQs45hnA6Ez_o';
    const query = 'dogs'; // Tema de busca
    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}&per_page=4`;
    
    async function fetchImages() {
        try {
            const response = await fetch(url);
    
            if (!response.ok) {
                throw new Error('Erro ao buscar imagens');
            }
    
            const data = await response.json();
    
            // Monta o HTML para exibir as imagens
            const imagesHTML = data.results.map(image => `
                <figure>
                    <img class="imaa" src="${image.urls.small}" alt="${image.alt_description}" />
                </figure>
            `).join('');
    
            document.getElementById('imagesContainer').innerHTML = imagesHTML;
        } catch (error) {
            document.getElementById('imagesContainer').innerHTML = "Não foi possível carregar as imagens.";
            console.error("Erro ao obter imagens:", error);
        }
    }
    
    fetchImages();