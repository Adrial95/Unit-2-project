/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
const studentList = document.querySelector('.student-list');
const linkList = document.querySelector('.link-list');


function showPage (list, page) {
   const startIndex = (page * 9) - 9;
   const endIndex = page *9 ;
   const studentList = document.querySelector(".student-list");
   studentList.innerHTML = "";

   for(let i = 0; i < list.Lenght; i += 1) {
    if (i >= startIndex && i <= endIndex ) {
     let studentItem =   
     `<li class="student-item cf">
     <div class="student-details">
        <img class="avatar" src="${list[i].picture.thumbnail}" alt="Profile Picture">
        <h3>${list[i].name.title} ${list[i].name.first} ${list[i].name.last}</h3>
        <span class="email">${list[i].email}</span>
     </div>
     <div class="joined-details">
        <span class="date">Joined ${list[i].registered.date}</span>
      </div>
     </li>`;
     studentList.insertAdjecentHTML("beforeend", studentItem);
    }
   }
   return list;
};

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
function addPagination(list) {
   const numOfPages = Math.ceil(list.length/9);
   let activeButton = document.querySelector('.link-list');
   activeButton.innerHTML = "";

   for(let i = 0; i < numOfPages; i ++) {
      activeButton.insertAdjacentHTML("beforeend",  button); 
      var activeButton =
   `<li>
   <button type="button">${[i]}</button>
   </li>`;
   }
   const firstButton = document.querySelector("button");
   firstButton.classname("active"); 
   
   activeButton.addEventListener('click', e => {
   
      if (e.target.tagName == "BUTTON") {
    activeButton.querySelector(".active");
    e.target.className  = 'active';
    showPage(list, e.target.texContent);

   }
  });
};
 // here i am calling my
showPage(data, 1);
addPagination(data);


// Remember to delete the comments that came with this file, and replace them with your own code comments.