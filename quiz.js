// Quiz JavaScript //

function calcularResultado() {
    const respostas = {
        "a": 0,
        "b": 0,
        "c": 0
    };

    // Coleta as respostas
    for (let i = 1; i <= 3; i++) {
        const respostaSelecionada = document.querySelector(`input[name="q${i}"]:checked`);
        if (respostaSelecionada) {
            respostas[respostaSelecionada.value]++;
        }
    }

    // Determina o personagem com base nas respostas
    let personagem = '';
    if (respostas.a > respostas.b && respostas.a > respostas.c) {
        personagem = 'Personagem A';
    } else if (respostas.b > respostas.a && respostas.b > respostas.c) {
        personagem = 'Personagem B';
    } else {
        personagem = 'Personagem C';
    }

    // Exibe o resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `Você se identifica mais com: ${personagem}`;
}