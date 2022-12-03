export async function validarFilme(filme) {
    if (filme.nome == undefined || filme.nome == '') {
        throw new Error('Nome do filme é obrigatório!');
    }

    else if (filme.sinopse == undefined || filme.sinopse == '') {
        throw new Error('Sinopse do filme é obrigatório!');
    }

    else if (filme.duracao == undefined || filme.duracao == '') {
        throw new Error('Duração do filme é obrigatório!');
    }

    else if (isNaN(filme.idGenero) || filme.idGenero <= 0 || filme.idGenero == undefined) {
        throw new Error('Genero do filme é obrigatório!');
    }

    else if (isNaN(filme.idClassificacao) || filme.idClassificacao <= 0 || filme.idClassificacao == undefined) {
        throw new Error('Classificação do filme é obrigatório!');
    }

    else if (isNaN(filme.idIdioma) || filme.idIdioma <= 0 || filme.idIdioma == undefined) {
        throw new Error('Idioma do filme é obrigatório!');
    }
    
}