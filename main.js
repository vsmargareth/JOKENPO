
let countPc = 0;
let countUser = 0;
function startTheGame() {
  let userChoise = Number(prompt(`
  Qual sua jogada?
  Pedra = 1
  Papel = 2
  Tesoura = 3
  `));

  let machineChoise = Math.floor(Math.random() * 3) + 1;
  checkWinner(userChoise, machineChoise)

  alert(`sua jogada: ${userChoise}, jogada do computador: ${machineChoise}`)
}

function checkWinner(user, machine) {
  if (user === machine) {
    alert(' Empate')
  } else if (user === 1 && machine === 2) {
    alert(`Você perdeu`)
    countPc++
  } else if (user === 1 && machine === 3) {
    alert(`Você ganhou`)
    countUser++
  } else if (user === 2 && machine === 1) {
    alert(`Você ganhou`)
    countUser++
  } else if (user === 2 && machine === 3) {
    alert(`Você perdeu`)
    countPc++
  } else if (user === 3 && machine === 1) {
    alert(`Você perdeu`)
    countPc++
  } else if (user === 3 && machine === 2) {
    alert(`Você ganhou`)
    countUser++
  } 1
}

startTheGame()
startTheGame()

alert(`sua pontuação foi ${countUser}`) 
