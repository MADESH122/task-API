
var container=document.createElement("div")
container.className="container";

var row=document.createElement("div")
row.className="row"
container.appendChild(row)
document.body.append(container)
 
var res=fetch("https://restcountries.com/v2/all")
.then((data1)=>data1.json()).then((data2)=>{
    console.log(data2)
    for(i=0;i<data2.length;i++){
        console.log(data2[i])
        row.innerHTML+=`
        <div class = "col-md-4 text-center">
        <div class="card border-dark mb-3" style="max-width: 18rem;">
       <div class="card-header text-white bg-dark">${data2[i].name}</div>
       <div class="card-body text-dark">
       <img src=${data2[i].flags.png} class="card-img-top" alt="...">
       <p class="card-text">Capital:${data2[i].capital}</p>
       <p class="card-text">Region:${data2[i].region}</p>
       <p class="card-text">LatLong:${data2[i].latlng}</p>
       </div>
       </div>`
    }
  
})

