//  let heading = document.getElementsByTagName("h1")
//  console.log(heading [1] innerHTML);


// let heading = document.getElementsByClassName("heading")
// console.log(heading);
// let heading = document.getElementById("heading")
//  console.log(heading.innerHTML);

// 

// let reviewContainer = document.getElementById('reviewContainer');
// let inputReview = document.getElementById('inputReview');
// let addReview = document.getElementById('addReview');

// addReview.addEventListener('click',()=>{
//     let inputValue = inputReview.value
//     let paragraph = document.createElement("p")

//     paragraph.innerText =inputValue.reviewContainer.appendChild(paragraph)
//     inputReview.value = " "
//  })

let reviewContainer = document.getElementById('reviewContainer');
let inputReview = document.getElementById('inputReview');
let addReview = document.getElementById('addReview');

addReview.addEventListener('click', () => {
    let inputValue = inputReview.value.trim(); // Remove extra spaces
    if (inputValue) { // Ensure it's not empty
        let paragraph = document.createElement("p");
        paragraph.innerText = inputValue; // Set the text
        reviewContainer.appendChild(paragraph); // Add to container
        inputReview.value = ""; // Clear input
    }
});