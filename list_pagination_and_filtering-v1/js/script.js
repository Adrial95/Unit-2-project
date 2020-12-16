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



function showPage (list, page) {
   var startIndex = (page * 9) - 9;
   var endIndex = (page *9 );
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
   let numOfPages = Math.ceil(list.lenght/9);
   const linkList = document.querySelector(".link-list");
   linkList.innerHTML = "";

   for(var i = 1; i <= numOfPages; i =+ 1) {
   let button =
   `<li>
   <button type="button">${[i]}</button>
   </li>`;
   linkList.insertAdjacentHTML("beforeend",  button);
   const firstButton = document.querySelector("button");
   firstButton.classname("active"); 
   }
   linkList.addEventListener("click", (e) => {
   if (e.target.tagName === "BUTTON") {
    const activeButton = document.querySelector(".active");
    activeButton.className = "";
    const inactiveButton = e.target;
    inactiveButton.className  = "active";
    showPage(data, e.target.texContent);

   }
  });
};

showPage(data, 1);
addPagination(data);




// Remember to delete the comments that came with this file, and replace them with your own code comments.