
document.addEventListener('DOMContentLoaded', () => {
    const dataContainer = document.getElementById('data-container');

    //função para tratar os erros das solicitacoes

    const handleErrors = (Response) => {

        if (!response.ok){
            throw Error(response.statusText);
        }
        return response;
    };

    //funcao para buscar os dados da API
    const fetchData = async () => {
        try {
            // fazendo a requisição GET
            const response = await fetch('http://localhost:3000/alunos');

            //tratando o erro na resposta
            handleErrors(response);

            //converter os dados para json
            const data = await response.json();

            //exibindo os dados na pagina
            data.forEach(aluno => {
                const alunoElement = document.createElement('div');
                alunoElement.innerHTML = `<strong>${aluno.name}</strong><p>${aluno.curso}</p>`
                dataContainer.appendChild(alunoElement);
            });

        } catch (error) {
            console.log('erro ao buscar os dados', error);
            
        }

    };

    //chamando a funcao para carregar os dados na tela
    fetchData();
});