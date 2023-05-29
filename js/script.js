for (let i = 0; i <= 9; i++) {
    const celulas = document.querySelectorAll('.coluna')[i];

    let vezJogador = 0;

    const jogador = () => {
        if (vezJogador = 1) {
            celulas.innerHTML = 'X'
        } else {
            celulas.innerHTML = 'O'
        }
    }

    const marcarOpcoes = () => {
        console.log(`clicou`);
        vezJogador ++;
        console.log(vezJogador);
        jogador ();
        
    };

    celulas.addEventListener('click', marcarOpcoes);
}