// Defina seu nome de usuário do GitHub
const username = 'DanielFilhoo';
const apiUrl = `https://api.github.com/users/${username}/repos`;

// Container onde os projetos serão inseridos
const projectsContainer = document.getElementById('projects-container');

// Função para buscar os repositórios do GitHub
async function fetchProjects() {
    try {
        const response = await fetch(apiUrl);
        const repos = await response.json();

        // Filtra repositórios que deseja exibir (pode adicionar mais critérios)
        const filteredRepos = repos.filter(repo => !repo.fork); // Exclui forks

        filteredRepos.forEach(repo => {
            // Cria um novo elemento de projeto
            const projectElement = document.createElement('div');
            projectElement.classList.add('project');

            projectElement.innerHTML = `
                <img src="./assets/github2.webp" alt="Imagem do projeto ${repo.name}" class="project-image">
                <div class="project-info">
                    <h3>${repo.name}</h3>
                    
                    <a href="${repo.html_url}" class="project-link" target="_blank">Ver projeto no GitHub</a>
                </div>
            `;

            // Adiciona o projeto ao container
            projectsContainer.appendChild(projectElement);
        });
    } catch (error) {
        console.error('Erro ao buscar os projetos:', error);
    }
}

// Chama a função para buscar e exibir os projetos
fetchProjects();
