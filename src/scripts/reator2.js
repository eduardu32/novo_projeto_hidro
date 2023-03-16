

async function entrada() {
    const url = 'http://localhost:3000/reator2/atualizar';

    const data = {
        data: document.getElementById('data').value,
        hora: document.getElementById('hora').value,
        hidrogenio: parseInt(document.getElementById('hidrogenio').value),
        numeroCarreta: parseInt(document.getElementById('numeroCarreta').value),
        inicioAquecimento: document.getElementById('inicioAquecimento').value,
        finalAquecimento: document.getElementById('finalAquecimento').value,
        operador: document.getElementById('operador').value,
        iodo: parseInt(document.getElementById('iodo').value),
        proximaAmostra: document.getElementById('proximaAmostra').value,
        inicioResfriamento: document.getElementById('inicioResfriamento').value,
        finalResfriamento: document.getElementById('finalResfriamento').value,
        temperatura: parseInt(document.getElementById('temperatura').value),
        Catalisador: parseInt(document.getElementById('Catalisador').value),
        batelada: document.getElementById('batelada').value,
        produto: document.getElementById('produto').value,
        finalizado: document.getElementById('finalizado').checked
    };

    try {
        const response = await axios.post(url, data);
        console.log(response.data);
        alert("FICHA ATUALIZADA COM SUCESSO")
    } catch (error) {
        console.error(error.response.data);
    }
}

async function gerarTabela(URL, tabela) {
    try {
        const response = await axios.get(URL);
        const dados = response.data;

        const corpoTabela = document.getElementById(tabela);

        for (let i = 0; i < dados.length; i++) {
            const linha = document.createElement('tr');
            const colunaBatelada = document.createElement('td');
            colunaBatelada.textContent = dados[i].batelada;
            const colunaData = document.createElement('td');
            colunaData.textContent = dados[i].data;
            const colunaHora = document.createElement('td');
            colunaHora.textContent = dados[i].hora;
            const hidrogenio = document.createElement('td');
            hidrogenio.textContent = dados[i].hidrogenio;
            const colunaInicioAquecimento = document.createElement('td');
            colunaInicioAquecimento.textContent = dados[i].inicioAquecimento;
            const colunaFinalAquecimento = document.createElement('td');
            colunaFinalAquecimento.textContent = dados[i].finalAquecimento;
            const colunaTemperatura = document.createElement('td');
            colunaTemperatura.textContent = dados[i].temperatura;
            const colunaProximaAmostra = document.createElement('td');
            colunaProximaAmostra.textContent = dados[i].proximaAmostra;
            const colunaIodo = document.createElement('td');
            colunaIodo.textContent = dados[i].iodo;
            const colunaCatalisador = document.createElement('td');
            colunaCatalisador.textContent = dados[i].Catalisador;
            const colunaInicioResfriamento = document.createElement('td');
            colunaInicioResfriamento.textContent = dados[i].inicioResfriamento;
            const colunaOperador = document.createElement('td');
            colunaOperador.textContent = dados[i].operador;
            const colunaproduto = document.createElement('td');
            colunaproduto.textContent = dados[i].produto;
            const colunaFinalizado = document.createElement('td');
            colunaFinalizado.textContent = dados[i].finalizado;

            linha.appendChild(colunaBatelada);
            linha.appendChild(colunaData);
            linha.appendChild(colunaHora);
            linha.appendChild(hidrogenio);
            linha.appendChild(colunaInicioAquecimento);
            linha.appendChild(colunaFinalAquecimento);
            linha.appendChild(colunaTemperatura);
            linha.appendChild(colunaProximaAmostra);
            linha.appendChild(colunaIodo);
            linha.appendChild(colunaCatalisador);
            linha.appendChild(colunaInicioResfriamento);
            linha.appendChild(colunaOperador);
            linha.appendChild(colunaproduto);
            linha.appendChild(colunaFinalizado);

            corpoTabela.appendChild(linha);
        }
    } catch (error) {
        console.error(error);
    }
}

async function gerarUltimaBatelada() {
    const response = await axios.get('http://localhost:3000/reator2/ultimaBatelada')
    const dados = response.data
    rota = `http://localhost:3000/reator2/batelada/${dados.batelada}`;
    gerarTabela(rota, 'corpo-tabela')
}
gerarUltimaBatelada()

async function preencherInputs() {
    const response = await axios.get('http://localhost:3000/reator2/ultimaBatelada')
    const dados = response.data

    document.getElementById("data").value = dados.data;
    document.getElementById("hora").value = dados.hora;
    document.getElementById("hidrogenio").value = dados.hidrogenio;
    document.getElementById("numeroCarreta").value = dados.numeroCarreta;
    document.getElementById("inicioAquecimento").value = dados.inicioAquecimento;
    document.getElementById("finalAquecimento").value = dados.finalAquecimento;
    document.getElementById("operador").value = dados.operador;
    document.getElementById("iodo").value = dados.iodo;
    document.getElementById("proximaAmostra").value = dados.proximaAmostra;
    document.getElementById("inicioResfriamento").value = dados.inicioResfriamento;
    document.getElementById("finalResfriamento").value = dados.finalResfriamento;
    document.getElementById("temperatura").value = dados.temperatura;
    document.getElementById("Catalisador").value = dados.Catalisador;
    document.getElementById("batelada").value = dados.batelada;
    document.getElementById("produto").value = dados.produto;
    document.getElementById("finalizado").value = dados.finalizado;


}
preencherInputs()


function recarregarAPagina(){
    window.location.reload();
} 

function baixartabela() {
    const rows = document.querySelectorAll('#corpo-tabela tr');
    let csvContent = "data:text/csv;charset=utf-8,";
    const columnNames = [];

    // Adicionar o nome das colunas
    document.querySelectorAll('#corpo-tabela th').forEach(th => columnNames.push(th.innerText));
    csvContent += columnNames.join(",") + "\n";

    // Adicionar os dados da tabela
    rows.forEach(row => {
        const data = [];
        row.querySelectorAll('td').forEach(td => data.push(td.innerText));
        csvContent += data.join(",") + "\n";
    });

    // Criar o link de download
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "tabela.csv");
    document.body.appendChild(link);

    // Clicar no link para iniciar o download
    link.click();
}