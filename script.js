
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
<div class="col-md-4">
<div class="card border-dark mb-3" style="max-width: 18rem;">
<div class="card-header"><h2>${data2[i].name}</h2></div>
<div class="card-body text-dark">
<h5 class="card-title">${data2[i].flags.svg}</h5>
<h5 class="card-title">Capital : ${data2[i].capital}</h5>
<h5 class="card-title">Region : ${data2[i].region}</h5>
<h5 class="card-title">CallingCodes : ${data2[i].callingCodes}</h5>
 </div>
</div>
</div>`
    }
    
  
})

