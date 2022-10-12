/*

We are going to want to get and set the value of our input field in this function, so let’s select it now. Use querySelector to get the input, save it to a variable called inputField.

Let’s make the HTML for our movie list items. Create a new variable called movie, store a new li element in it using document.createElement, this will be the parent element of our movie’s title and the movie’s delete button.

Next create a new span element and save it to a variable called movieTitle. Set the textContent of movieTitle to be the value of inputField. This will write what the user typed out into our new span.

Now we’ll need to append the movieTitle span to our movie element. Use the appendChild method on movie, passing in movieTitle to attach the title to its parent.

Then, use querySelector to find the ul element that already exists in our HTML and use appendChild to attach the movie element we created to the list.

Finally, outside of your function, use querySelector to select the form element and then use addEventListener to listen for a submit event on the form element and run the addMovie function.

Save your files, run the project and give it a try – it doesn’t work the way we expected. Because our button is inside a form element, it has a default action that is also running and interfering with our code. To fix this, at the beginning of the addMovie function, add event.preventDefault()

For a more user-friendly experience, let’s clear the input field when the ‘Add’ button is clicked so it’s ready for another movie. To do this, set the value of 
inputField to an empty string at the bottom of the addMovie function.

Step 3
*/

console.log("hello")
//const inputField = document.getElementsByClassName('input');

const message = document.querySelector("#message")

function addMovie(event){
event.preventDefault();
const inputField = document.querySelector('input');
let movie = document.createElement('li');
let movieTitle = document.createElement('span');

movieTitle.textContent=inputField.value;
movieTitle.addEventListener("click", crossOffMovie)
movie.appendChild(movieTitle);
const target = document.querySelector('ul');
target.appendChild(movie);

const deleteBtn =document.createElement('button');
deleteBtn.textContent="X";
deleteBtn.addEventListener('click', deleteMovie);
movie.appendChild(deleteBtn);
message.textContent=`${inputField.value}  added to list`
message.className="";
inputField.value="";
setTimeout(hideMessage, 1000 )
inputField.value="";
}

function deleteMovie(event){
    event.target.parentNode.remove();
    message.textContent=`${event.target.parentNode.firstChild.textContent} Deleted! Good Choice`
    revealMessage();

}

function crossOffMovie(event){

    event.target.classList.toggle('checked');
    let movieName=event.target.textContent;
    if(event.target.classList.contains("checked")){
        message.textContent=`${movieName} Watched`
    }
    else{
        message.textContent=`${movieName} movie added back to list`
    }
    message.className="";
    setTimeout(hideMessage, 1000 )
}

const movieInput = document.querySelector('form');

movieInput.addEventListener('submit', addMovie)

function revealMessage(){
    message.className="";
    setTimeout(hideMessage, 1000 )
}

function hideMessage(){
    message.className = "hide"
}