import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:5000"
})

export async function inserirFilme( nome, sinopse, duracao, idGenero, idClassificacao, idIdioma) {
    const r = await api.post('/insert/filme', 
    {
        nome: nome,
        sinopse: sinopse,
        duracao: duracao,
        idGenero: idGenero,
        idClassificacao: idClassificacao,
        idIdioma: idIdioma
    }
    );
    return r.data;
}

export async function salvarImagem(id, imagem, imagem2){

    let form = new FormData();
    form.append('imagens', imagem);
    form.append('imagens', imagem2);

    const r = await api.put(`/insert/filme/${id}/imagem`, form, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });

    return r.data;
}

export function buscarImagem(imagem) {
    return `${api.getUri()}/${imagem}`
}

export async function listarGenero(){
    const r = await api.get('/get/genero');
    return r.data
}

export async function listarClassificacao(){
    const r = await api.get('/get/classificacao');
    return r.data;
}

export async function listarIdioma(){
    const r = await api.get('/get/idioma');
    return r.data;
}

export async function listarFilmes(){
    const r = await api.get('/admin/listar');
    return r.data;
}

export async function filmePorId(id){
    const r = await api.get(`/admin/filme/${id}`);
    return r.data;
}