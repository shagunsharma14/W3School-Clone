// const arr = [
//     {
//       name: "Professional Advice",
//       content:
//         "We at Invictus help students reach their study abroad goals. our professional advisers advise on academic programmes, job opportunities, and other factors.",
//       city: "Bangalore",
//     },
//     {
//       name: "Affordable Price",
//       content:
//         "Affordable Pricewe strive to offer competitive and transparent pricing for our services, ensuring that students can achieve their study abroad dreams without breaking the bank.",
//       city: "Mumbai",
//     },
//     {
//       name: "Expert Advisor",
//       content: "yuqhfbqwe qeefugefbj fqhefbibfb2f bfuih2uif2nf1f1 fb2f 1kj2nfn2",
//       city: "Bangalore",
//     },
//   ];
  
//   const container = document.getElementById("container");
//   const button = document.getElementById("create");
  
//   function creatediv(obj) {
//     const div = document.createElement("div");
//     div.classList.add("card");
  
//     const h1 = document.createElement("h1");
//     h1.textContent = obj.name;
//     div.appendChild(h1);
  
//     const p = document.createElement("p");
//     p.textContent = obj.content;
//     div.appendChild(p);
  
//     const h2 = document.createElement("h1");
//     h2.textContent = obj.city;
//     div.appendChild(h2);
  
//     console.log(div);
//     container.appendChild(div);
//   }
  
//   function iterate() {
//     for (let i = 0; i < arr.length; i++) {
//       creatediv(arr[i]);
//     }
//   }
  
//   button.addEventListener("click", iterate);
// const arr = [
//     {
//         name: "Internship",
//         content: "At Invictus Consulting Services, we understand the importance of having relevant work experience to gain admission to a top university abroad. That is why we offer comprehensive internship placement services to help students secure internships in their relevant field."    
//     },
//     {
//         name: "Test preparation",
//         content: "At Invictus Consulting Services, we understand that competitive exams play a crucial role in the study abroad application process. That’s why we offer comprehensive exam preparation services to help students achieve their best possible scores. We offer in-person and online classes, study materials."
//     },
//     {
//         name: "University Applications",
//         content: "At Invictus Consulting Services, we understand that the university application process can be daunting and overwhelming for students. ​We also provide guidance on scholarship and financial aid opportunities ."
//     },
//     {
//         name: "Visa process",
//         content: "When applying to study abroad, the visa process can often be one of the most complicated and intimidating steps for students. At Invictus Consulting Services, we recognize the importance of having a smooth visa application experience and offer comprehensive visa assistance services to guide students through the process."
//     }
// ];

// let container = document.getElementById("container");

// function showContent(){
//     for(let i=0; i<arr.length; i++){
//         let div = document.createElement("div");
//         div.classList.add("card");
//         console.log("div created");
    
//         let h1 = document.createElement("h1");
//         h1.textContent = arr[i].name;
//         div.appendChild(h1);
//         console.log("h1 created");
    
//         let content = document.createElement("p");
//         content.textContent = arr[i].content;
//         div.appendChild(content);
//         console.log("p created");
    
//         container.appendChild(div);
//         console.log("div added to container");
//     }
// }



// let button = document.getElementById("create");
// button.addEventListener("click",()=>{
//     showContent();                                                       
// });

// container.classList.add("class-1");
let colorArray = ["#FFC0C7","#FFF4A3","#F3ECEA","#D9EEE1","#96D4D4","#E7E9EB"];
let arr = [
    {
        name: "PHP",
        content: "A web server programming language",
        btnText: "Learn PHP"
    },
    {
        name: "jQuery",
        content: "A JS library for developing web pages",
        btnText: "Learn jQuery"
    },
    {
        name: "Java",
        content: "A programming language",
        btnText: "Learn Java"

    },
    {
        name: "C++",
        content: "A programming language",
        btnText: "Learn C++"
    },
    {
        name: "W3.CSS",
        content: "A CSS framework for faster and better responsive web pages",
        btnText: "Learn CSS"
    },
    {
        name: "Bootstrap",
        content: "A CSS framework for designing better web pages",
        btnText: "Learn Bootstrap"
    }                                          
];  

let container = document.querySelector(" .container");

let createCard=()=>{
    for(let i=0; i<arr.length; i++){
    let div = document.createElement("div");
    div.id = `card-${i+1}`;
    div.classList.add("card");
    div.style.backgroundColor = colorArray[i];

    let h3 = document.createElement("h3");
    h3.textContent = arr[i].name;
    h3.classList.add("heading");
    div.appendChild(h3);

    let p = document.createElement("p");
    p.textContent = arr[i].content;
    p.classList.add("content");
    div.appendChild(p);

    let button = document.createElement("button");
    button.textContent = arr[i].btnText;
    button.classList.add("btn");
    div.appendChild(button);
    
    container.appendChild(div);
    }
}
createCard();