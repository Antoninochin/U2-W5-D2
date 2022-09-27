

/*function budget(){
    let budget = 100
    alert(`Il tuo budget è di ${budget}€`)
    document.getElementById('seeBudget').innerHTML = `${budget}€`
}
let budget2 = prompt('Chiedimi fin dove sei arrivato con il budget')*/

function view(){
    let budget = document.getElementById('budget-select').value
    let screen = document.getElementById('screen')

    switch (budget){
        case 'budgetAttuale':
        screen.innerHTML = 'Il tuo budget è di 100€'
        break;

        case 'budgetSuccessivo':
        screen.innerHTML = 'Metà del budget è esaurito'
        break;

        case 'budgetFinale':
        screen.innerHTML = 'Sei quasi alla fine del budget'
        break;
    }
}

function budget(){
     let budget = 100
     while(budget > 50){
        
        numero++
     }
}






