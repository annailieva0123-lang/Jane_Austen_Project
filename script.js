let books = document.querySelectorAll(".book-cover");


let currentBook = 0;

function showBooks() {

    for (let i = 0; i < books.length; i++) {

        books[i].classList.remove("left", "center", "right");

        if (i == currentBook) {
            books[i].classList.add("center");
        }

        else if (i == (currentBook + 1) % books.length) {
            books[i].classList.add("right");
        }

        else {
            books[i].classList.add("left");
        }
    }

}

function nextBook() {

    currentBook++;

    if (currentBook >= books.length) {
        currentBook = 0;
    }

    showBooks();
}

showBooks();

setInterval(nextBook, 4000);

       
