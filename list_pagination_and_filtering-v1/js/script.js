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
   var startIndex = (page*9) - 9;
   var endIndex = (page*9);
   const studentList = documetn.querySelector(".student-list");
   studentList.innerHTML = "";

   for(let i = 0; i < list.Lenght; i=+1) {
    if (i >= startIndex && i <= endIndex ) {
     let studentItem =   
     ` </div>
     <ul class="student-list">
       <li class="student-item cf">
           <div class="student-details">
               <img class="avatar" src="https://randomuser.me/api/portraits/thumb/women/67.jpg">
               <h3>iboya vat</h3>
               <span class="email">iboya.vat@example.com</span>
           </div>
           <div class="joined-details">
                  <span class="date">Joined 07/15/15</span>
          </div>
       </li>`;
     studentList.insertAdjecentHTML("beforeend", studentItem);
    }
   }
   return list;
}

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
function appendPageLinks() {
   
}




// Remember to delete the comments that came with this file, and replace them with your own code comments.