async function obterLocalizacaoIP() {
    const apiKey = "479C1D358C41A34D933C63543D1305C6";
    const apiUrl = `https://api.ip2location.io/?key=479C1D358C41A34D933C63543D1305C6&ip=2804:11d4:fffc:a701:5318:3a2a:c93e:7c7f`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Erro na API: ${response.status}`);
        }
        const data = await response.json();
        console.log("Informações da localização:", data);

        // Exiba as informações
        alert(`
            País: ${data.country_name}
            Região: ${data.region_name}
            Cidade: ${data.city}
            Latitude: ${data.latitude}
            Longitude: ${data.longitude}
        `);
    } catch (error) {
        console.error("Erro ao obter a localização:", error);
        alert("Não foi possível obter a localização.");
    }
}