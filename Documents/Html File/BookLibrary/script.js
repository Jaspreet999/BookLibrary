let books = []

let bookName = document.getElementById("BookName")
let authorName = document.getElementById("AuthorName")
let Status = document.getElementById("Status")
let addBook = document.getElementById("addBook")
let tbody = document.getElementById("booklist")
let tableData = document.getElementById("tableData")

function changeRowData(e){

    const currentTarget = e.target.parentNode.parentNode.childNodes[1]
    
    if(e.target.classList.contains('status-button')){
        updateStatus(findBook(books,currentTarget.innerHTML))
    }
    else if(e.target.classList.contains('delete')){
        deleteBook(findBook(books,currentTarget.innerHTML))
        
    }

    showOnScreen()
}

function updateStatus(book){
    if(books[book].status === 'read'){
        books[book].status = 'not read'
    }else{
        books[book].status = 'read'
    }
}

function deleteBook(book){
    
    books.splice(book,1)

}

function findBook(books,name){

    if(books.length === 0 || books == null){
        return
    }

    for(i of books){
        if(i.bookName == name){
            return books.indexOf(i)
        }
    }
}

tableData.addEventListener('click', changeRowData)

addBook.addEventListener('click',() =>{
    
    if(bookName.value.length === 0 || authorName.value.length === 0 || Status.value.length === 0){
        alert("Please fill all the values")
    }else{
        const newBook = Object.create(new Book(bookName.value,authorName.value,Status.value))
        PushInLibrary(newBook)
        clearForm()
    }
})

class Book {
    constructor(bookName, authorName, status) {

        this.bookName = bookName
        this.authorName = authorName
        this.status = status
    }
}

function clearForm(){
    bookName.value = ""
    authorName.value = ""
    Status.value = "read"
}

function PushInLibrary(newBook){
    books.push(newBook)
    showOnScreen()
}

function showOnScreen(){
    
    tbody.innerHTML = ""

    books.forEach((book)=>{

        const htmlBook = `
      <tr>
        <td>${book.bookName}</td>
        <td>${book.authorName}</td>
        <td><button class="status-button">${book.status}</button></td>
        <td><button class="delete">delete</button></td>
      </tr>
      `; 
     
    tbody.insertAdjacentHTML('afterbegin',htmlBook)
    })
}
