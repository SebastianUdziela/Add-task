const todo = document.querySelector('.todo table');
const taskTemplate = document.querySelector('#task_template');
const result = document.querySelector('.todo p');
const sortName = document.querySelector('#task_name');
const priceSortPln = document.querySelector('#price_pln');
const priceSortEuro = document.querySelector('#price_euro');
const listEmployees  = document.querySelectorAll('.employee_list ul li')
let flagSortPricePln = true;
let flagSortPriceEuro = true;
let flagSortName = true;

let tasks = [{
  id:0,  
  companyName: 'abc',
  employee:  'Jurand Spychowski',
  task: 'zadanie 1',
  amountPln: 2000,
  amountEuro: 236.82,
  phone: 111222333,
  email: 'email@email.com',
  website: 'webstie.com'
}]

const showResult = () => {
    let amountOfMoneyPln = 0;
    let amountOfMoneyEuro = 0;

    tasks.forEach(element => {
        amountOfMoneyPln += element.amountPln * 1;
        amountOfMoneyEuro += element.amountEuro * 1;
    })
    result.textContent =`Suma: ${amountOfMoneyPln} PLN (${amountOfMoneyEuro.toFixed(2)} Euro)`;
}

const removeTask = (e) => {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.index;
    for (let i=0; i < tasks.length; i++) {
        if (tasks[i].id == index){
            tasks.splice([i], 1);
        }
    }
    showTask();
}

const showDetailsTask = (e) => {
    const indexRow = e.target.parentNode.dataset.index;
    let checkBorder = e.target.parentNode.style.border;
    const $allDetailsRow = $('td');

    if (checkBorder === 'none') {
        e.target.parentNode.style.border = '1px solid #b0cce8';
    } else {
        e.target.parentNode.style.border = 'none'
    }

    $.each($allDetailsRow, function() {
        let $this = $(this)
           if (indexRow == $this.data('index')) {
            $this.toggle(500,)
    }})
}

const showTask = () => {
    const resetTask = document.querySelectorAll('.single_task');

    resetTask.forEach(element => {
        element.remove()
        })

    tasks.forEach( element => {
        const clone = taskTemplate.content.cloneNode(true);
        const task = clone.querySelector('#task');
        const amountPln = clone.querySelector('#amount_pln');
        const amountEuro = clone.querySelector('#amount_euro');
        const handleDelete  = clone.querySelector('#delete');
        const column = clone.querySelector('tr');
        const name = clone.querySelector('#name');
        const phone = clone.querySelector('#phone');
        const website = clone.querySelector('#website');
        const email = clone.querySelector('#email')
        const detailsRow = clone.querySelector('td');
        const handleDetails = clone.querySelector('#details');

        column.dataset.index = element.id;
        detailsRow.dataset.index = element.id;
        task.textContent = element.task;
        amountPln.textContent = `${element.amountPln} PLN`;
        amountEuro.textContent = `${element.amountEuro.toFixed(2)} EUR`;
        name.textContent = `Imię i nazwisko: ${element.employee}`;
        phone.textContent = `Numer Telefonu: ${element.phone}`;
        website.textContent =  `Strona internetowa: ${element.website}`;
        email.textContent = `Email: ${element.email}`
        todo.appendChild(clone);

        handleDelete.addEventListener('click', removeTask);
        handleDetails.addEventListener('click', showDetailsTask)
    })
    showResult()
}

// sort 

const handleSortName = () => {
    if (flagSortName) {
        tasks.sort((a, b) => {
            if(a.task> b.task) {
                return 1
            } else  {
                return -1
                }   
            }) 
            flagSortName = false;
    } else {
        tasks.sort((a, b) => {
            if(a.task < b.task) {
                return 1
            } else  {
                return -1
            } 
        })
        flagSortName = true;
    }
    showTask();
}

const handleSortpricePln = () => {
    if (flagSortPricePln) {
        tasks.sort((a, b) => {
            if(a.amountPln > b.amountPln) {
                return 1
            } else  {
                return -1
                }   
            }) 
            flagSortPricePln = false;
    } else {
        tasks.sort((a, b) => {
            if(a.amountPln < b.amountPln) {
                return 1
            } else  {
                return -1
            } 
        })
        flagSortPricePln = true;
    }
    showTask()
}

const handleSortpriceEuro = () => {
    if (flagSortPriceEuro) {
        tasks.sort((a, b) => {
            if(a.amountEuro > b.amountEuro) {
                return 1
            } else  {
                return -1
                }   
            }) 
            flagSortPriceEuro = false;
    } else {
        tasks.sort((a, b) => {
            if(a.amountEuro < b.amountEuro) {
                return 1
            } else  {
                return -1
            } 
        })
        flagSortPriceEuro = true;
    }
    showTask();
}

sortName.addEventListener('click', handleSortName);
priceSortEuro.addEventListener('click', handleSortpriceEuro);
priceSortPln.addEventListener('click', handleSortpricePln);
showTask();