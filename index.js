console.log('this is hello');
let apiKey = 'e9ad2f923ccb49c6b4f8a45f9f61249a';
let source = 'the-times-of-india'
let index=1;

let accordion = document.getElementById('newsAccordion');



// using ajax

// const xhr = new XMLHttpRequest();
// xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);
// // xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`, true);
// //https://newsapi.org/v2/top-headlines?sources=the-times-of-india&apiKey=e9ad2f923ccb49c6b4f8a45f9f61249a

// // What to do when response is ready
// xhr.onload = function () {
//     if (this.status === 200) {
//         // console.log(this.responseText);
//         let object = JSON.parse(this.responseText);
//         let articles = object.articles;
//         // console.log(articles);
//         let html = "";
//         articles.forEach((element,index) => {
//             // console.log(element.title);
//             // console.log(element.content);
//             // console.log(element.description);
//             if(element.content ==null)
//             {
//             html += `
//                     <div class="news" >
//                         <h5>${element.title}</h5>
//                         <div class="hide">
//                             <p class = "mx-3 my-3">${element.description}. <a href ="${element.url}" target ="_blank">Read more</a></p>
//                         </div>
                        
//                     </div>`;
//             }
//             else 
//             {
//                 html += `
//                 <div class="news" >
//                     <h5>${element.title}</h5>
//                     <div class="hide">
//                         <p class="description mx-3 my-3">${element.description}</p>
//                         <p class = "mx-3 my-3">${element.content}. <a href ="${element.url}" target ="_blank">Read more</a></p>
//                     </div>
                    
//                 </div>`;
//             }
//             index++;
//         });
//         accordion.innerHTML = html;
//     }
//     else {
//         //show error message
//         console.log("some error occured");
//     }
// }

// xhr.send();

// using fetch 

fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`).then((response)=>{
    return response.json();
}).then((object)=>{
    let articles = object.articles;
        console.log(articles);
        let html = "";
        articles.forEach((element,index) => {
            // console.log(element.title);
            // console.log(element.content);
            // console.log(element.description);
            if(element.content ==null)
            {
            html += `
                    <div class="news" onclick="clicked(this)">
                        <h5>${element.title}</h5>
                        <div class="hide">
                            <p class = "mx-3 my-3">${element.description}. <a href ="${element.url}" target ="_blank">Read more</a></p>
                        </div>
                        
                    </div>`;
            }
            else 
            {
                html += `
                <div class="news" onclick="clicked(this)">
                    <h5>${element.title}</h5>
                    <div class="hide">
                        <p class="description mx-3 my-3">${element.description}</p>
                        <p class = "mx-3 my-3">${element.content}. <a href ="${element.url}" target ="_blank">Read more</a></p>
                    </div>
                    
                </div>`;
            }
            index++;
        });
        accordion.innerHTML = html;
})

//show or hide the news headlines.
let ele ;
function clicked(element)
{
    ele = element.children[1];
    console.log(ele);
    ele.classList.toggle("hide");
}

