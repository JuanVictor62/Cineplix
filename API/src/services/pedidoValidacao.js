
export async function validarPedido(info) {
    if (info.qtdInt == 0 && info.qtdMeia == 0) {
        throw new Error('Ingressos inválidos');
    }
}
