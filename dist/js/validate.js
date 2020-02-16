const button = document.querySelector('button');
const companyName = document.querySelector('#company');
const employee = document.querySelector('#employee');
const task = document.querySelector('#task');
const amount = document.querySelector('#amount');
const euro = document.querySelector('#euro').textContent;
let counter = 1;

const addTask = () => {
    // take more details from allEmployees objects 
    let phone = '';
    let email = '';
    let website = '';

    allEmployees.forEach(user => {
        if (user.name === employee.value ) {
            phone = user.phone
            email = user.email
            website = user.website
        }
    })
        const request = {
            id:counter,
            companyName: companyName.value,
            employee: employee.value,
            task: task.value,
            amountPln: amount.value,
            amountEuro: amount.value / euro,
            phone: phone,
            email: email,
            website: website
        }

    tasks.push(request);

    // reset input value
    counter++
    companyName.value = '';
    employee.value = '';
    task.value = '';
    amount.value = '';
    showTask();
}

const handleCompanyName = () => {
    const deleteParagraph = companyName.parentNode.querySelector('p');
    if (companyName.value.length < 1) {
        if (deleteParagraph) {  
            deleteParagraph.remove();
        }

        const paragraph = document.createElement('p');
        companyName.classList.add('error');
        paragraph.textContent= 'Nazwa firmy musi zawierać co najmniej dwa znaki!';
        companyName.parentNode.appendChild(paragraph);
        return false;

    } else {
        companyName.classList.remove('error');
        if (deleteParagraph) {
            deleteParagraph.remove();
        }
        return true;
    }
}

    const handleEmployee = () => {
        
        const deleteParagraph = employee.parentNode.querySelector('p');
        if (employee.value.length == 0) {
           
            if (deleteParagraph) {
                deleteParagraph.remove();
            }
            const paragraph = document.createElement('p');
            employee.classList.add('error');
            paragraph.textContent= 'Wybierz pracownika!';
            employee.parentNode.appendChild(paragraph);
            return false;

        } else {
            if (deleteParagraph) {
                deleteParagraph.remove();
            }
            employee.classList.remove('error');
            return true;
        }
    }

    const handleTask = () => {
        const deleteParagraph = task.parentNode.querySelector('p');
        if (task.value.length < 5) {   
            if (deleteParagraph) {
                deleteParagraph.remove();
            }
            const paragraph = document.createElement('p');
            task.classList.add('error');
            paragraph.textContent= 'Nazwa zadania musi posiadać przynajmniej 5 znaków!';
            task.parentNode.appendChild(paragraph);
            return false;

        } else {
            if (deleteParagraph) {
                deleteParagraph.remove();
        }
        task.classList.remove('error');
            return true;
    }
}

const handleAmount = () => { 
    const deleteParagraph = amount.parentNode.querySelector('p');
    if (amount.value.length == 0) {
        if (deleteParagraph) {
            deleteParagraph.remove();
        }
        const paragraph = document.createElement('p');
        amount.classList.add('error');
        paragraph.textContent= 'Podaj kwotę!';
        amount.parentNode.appendChild(paragraph);
        return false
    } else {
        if (deleteParagraph) {
            deleteParagraph.remove();
        }
        amount.classList.remove('error');
        return true
    }
}

const validation = (e) => {
    e.preventDefault();
    handleCompanyName();
    handleEmployee();
    handleTask();
    handleAmount();

    if (handleAmount() && handleCompanyName() && handleTask() && handleEmployee()) {
        addTask()
    }
}

button.addEventListener('click', validation);