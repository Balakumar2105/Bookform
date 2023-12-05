// book constructor

function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//adding pointer
document.querySelector(".delete").style.cursor = "pointer";


//UI constructor
function UI(){

    UI.prototype.addBookList =function(mybook){
        
        const addList = document.getElementById('book-body');

        //create element
        const row = document.createElement('tr');
        row.innerHTML = `
        <th scope="row">${mybook.title}</th>
                <td>${mybook.author}</td>
                <td>${mybook.isbn}</td>
                <td class="delete"> X  </td>
        `;

        addList.appendChild(row);
    }

    // Clearing fields
    UI.prototype.clearField = function(){
        document.getElementById('name').value = "";
        document.getElementById('author').value = "";
        document.getElementById('isbn').value = "";
    } 


    // Deleting element
    UI.prototype.deleteBook = function(target) {
        if(target.className === "delete"){
            target.parentElement.remove();
        }
        
    }

    //alert
    UI.prototype.showAlert = function(msg, className) {
        
        const div = document.createElement('div');

        div.className = `alert ${className}`;

        div.appendChild(document.createTextNode(msg));

        const insertAlert = document.querySelector('.alert');

        insertAlert.appendChild(div);
        
        setTimeout(() => {
            div.remove();
        }, 3000);


    }
        


    }

//Event listener to create

document.querySelector('#book-form').addEventListener('submit', function(e) {
    e.preventDefault(e);
    
    const title = document.getElementById('name').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    //intializing 
    const mybook = new Book(title, author, isbn);
    const ui = new UI();


    // validation
    if(title === "" || author === "" || isbn === ""){
       ui.showAlert('Please fill all the fields','alert-danger');
    } else {
        ui.addBookList(mybook);
        ui.showAlert('File created successfully','alert-success');
        ui.clearField();
    }


})


//Event listener to delete

document.querySelector('#book-body').addEventListener('click', function(e){
    e.preventDefault(e);


   if(e.target.className === 'delete'){

    //intializing 
   const ui = new UI();

//Getting the deletefunction from ui

   ui.deleteBook(e.target);

   ui.showAlert('File deleted successfully','alert-success');
   }
   

})

