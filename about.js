const  next_button = document.getElementById('next_button')

const previous_button = document.getElementById('previous_button')

next_button.addEventListener('click', () => {

    window.location.href = "comment.html";

});


previous_button.addEventListener('click', () => {

    // Method - 1
    
    window.location.href = "index.html";

    // Method - 2 

    // window.history.back()
  
});