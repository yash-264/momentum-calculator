 document.querySelector("form")
let m=document.querySelector("#inputm")
let v=document.querySelector("#inputv")
let result=document.querySelector(".result")
const submit=document.querySelector("#submit")
  let check=0;
submit.addEventListener("click",(e)=>{
    
     e.preventDefault()
    let ma=m.value
let ve=v.value
let mom= ma*ve
  

  if (check==0) {
    submit.innerText=`submitted`
    result.innerHTML=`<h1>${mom} (kg.m/sec)</h1>`
    check=1;
    
  }
  else{
    submit.innerText=`Resubmit`
    result.innerText=`Please Resubmit`

    check=0;
  }
 
})