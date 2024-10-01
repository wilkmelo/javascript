function tabuada() {
    let entrada = document.getElementById('entrada')
    let n = Number(document.getElementById('fnum').value)
    let c = 1
    while (c <= 10) {
        entrada.innerHTML += `${n} x ${c} = <strong>${n * c}</strong><br>`
        c ++
    }
}

