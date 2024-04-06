const form = document.getElementById('formId');

const taskContainer = document.getElementById('taskContainer');

const input = document.getElementById('nameinput')

const input1 = document.getElementById('descriptioninput')

const add = document.getElementById('button1')

const commentdiv = document.getElementById('items_container')

const comment_number_span = document.getElementById('comment_number_span')

let tasks = [];


let comment_number = 0

comment_number_span.innerHTML = comment_number;

form.addEventListener('submit', (e) => {

    e.preventDefault();

    const data = new FormData(e.target);

    const formValues = {};

    for (let [key, value] of data.entries()) {

        formValues[key] = value;

    }

    formValues.id = Math.trunc(Math.random() * 1000);

    formValues.isComplete = false;

    tasks.push(formValues);

    listcomment();
});


function listcomment() {

    taskContainer.innerHTML = '';

    tasks.forEach((task) => {

        const allElement = document.createElement('div');

        const AlltaskElement = document.createElement('div');

        const deleteButton = document.createElement('button');

        deleteButton.classList.add('deleteButton');

        const text = document.createElement('p');

        const taskElement = document.createElement('div');

        const text1 = document.createElement('p');

        const taskElement1 = document.createElement('div');

        text.textContent = ` ${task.taskName}:${task.taskDescription}`;

        AlltaskElement.appendChild(text);

        AlltaskElement.appendChild(taskElement);

        AlltaskElement.appendChild(text1);

        AlltaskElement.appendChild(taskElement1);

        AlltaskElement.appendChild(deleteButton);

        allElement.appendChild(AlltaskElement);

        taskContainer.appendChild(allElement);

        AlltaskElement.classList.add('Alltaskelement')

        deleteButton.addEventListener('click', () => {
            removeFunc(task.id);

            comment_number--;

            comment_number_span.innerHTML = comment_number;
        });

        deleteButton.innerText = 'Delete';


        taskContainer.classList.add('taskContainer')

        taskElement.classList.add('taskElement')

        taskElement1.classList.add('taskElement1')

        text.classList.add('text')

        text1.classList.add('text1')



    });


}

add.addEventListener('click', () => {

    if (input.value.length > 0 && input1.value.length > 0) {

        comment_number++;

        comment_number_span.innerHTML = comment_number;
    }
});

const removeFunc = (id) => {

    tasks = tasks.filter(task => task.id !== id);

    listcomment();

};

// document.getElementById('button1').addEventListener('click', function () {

//     if (document.getElementById('items_container').style.display == 'none') {

//         document.getElementById('items_container').style.display = 'block';

//     }

//     else {

//         document.getElementById('items_container').style.display = 'block';

//     }
// })





const previous_button = document.getElementById('previous_button')


previous_button.addEventListener('click', () => {

    // Method - 1

    window.location.href = "about.html";

    // Method - 2

    // window.history.back()

});