document.getElementById('enviarWhatsApp').addEventListener('click', function () {
    // Coletar dados do formulário
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const endereco = document.getElementById('endereco').value;
    const quantidadePisos = document.getElementById('quantidadePisos').value;
    const frequencia = document.getElementById('frequencia').value;
    const observacoes = document.getElementById('observacoes').value;

    // Verificar campos obrigatórios
    if (!nome || !telefone || !endereco || !quantidadePisos || !frequencia) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Coletar serviços selecionados
    const servicos = [];
    if (document.getElementById('limpezaAreasComuns').checked) servicos.push('Limpeza de Áreas Comuns');
    if (document.getElementById('limpezaEscadas').checked) servicos.push('Limpeza de Escadas e Elevadores');
    if (document.getElementById('limpezaVidros').checked) servicos.push('Limpeza de Vidros e Janelas');
    if (document.getElementById('limpezaGaragens').checked) servicos.push('Limpeza de Garagens e Exteriores');
    if (document.getElementById('remocaoLixo').checked) servicos.push('Remoção de Lixo e Detritos');
    if (document.getElementById('limpezasEspeciais').checked) servicos.push('Limpezas Especiais');

    // Criar mensagem para WhatsApp
    let mensagem = `Olá! Gostaria de solicitar um orçamento para serviços de limpeza.\n\n`;
    mensagem += `*Nome:* ${nome}\n`;
    mensagem += `*Telefone:* ${telefone}\n`;
    if (email) mensagem += `*E-mail:* ${email}\n`;
    mensagem += `*Endereço do Condomínio:* ${endereco}\n`;
    mensagem += `*Quantidade de Pisos:* ${document.getElementById('quantidadePisos').options[document.getElementById('quantidadePisos').selectedIndex].text}\n`;
    mensagem += `*Frequência Desejada:* ${document.getElementById('frequencia').options[document.getElementById('frequencia').selectedIndex].text}\n\n`;

    if (servicos.length > 0) {
        mensagem += `*Serviços Solicitados:*\n`;
        servicos.forEach(servico => {
            mensagem += `• ${servico}\n`;
        });
        mensagem += `\n`;
    }

    if (observacoes) {
        mensagem += `*Observações:* ${observacoes}\n`;
    }

    // Codificar a mensagem para URL
    const mensagemCodificada = encodeURIComponent(mensagem);

    // Abrir WhatsApp com a mensagem
    window.open(`https://wa.me/351932013535?text=${mensagemCodificada}`, '_blank');
});