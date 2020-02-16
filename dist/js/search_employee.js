const $inputEmployee = $('#employee');
const $searchEmployee = $('.employee_list');
let $listEmployees = $('.employee_list li');;
const $search = $('.employee_list div input');
const $userUrl = "https://jsonplaceholder.typicode.com/users";
const allEmployees = [];
let flag = true;


// download users

const addEmployees = () => {
    $.each(allEmployees, function(index, user) {
        $('.employee_list ul').append(`<li data-user=${user.id}>${user.name}</li>`)
    })
    $listEmployees = $('.employee_list li'); // update users list 
    $listEmployees.click(chooseEmployee)
}   

$.getJSON($userUrl)
    .done(function(res){
        $.each(res, function(index, value) {
            allEmployees.push(value)
        })
        addEmployees()
    })

// show Employyes

const showEmployee = () => {
    if (flag) {
        $searchEmployee.slideDown();
        flag = false;
    } else {
        $searchEmployee.slideUp(); 
        flag=true;
    }
}

 function chooseEmployee () {
     const name = $(this).text();
     $inputEmployee.val(name)
     $inputEmployee.next().addClass("animation_label")
     showEmployee()
}

$search.on('keydown', function () {
    let $value = $(this).val()
    $listEmployees.each(function(){
        if ($(this).text().search(new RegExp($value, "i")) < 0) {       
        $(this).fadeOut(200);
        } else {
            $(this).show();     
        }
    })
  })

$inputEmployee.click(showEmployee)
