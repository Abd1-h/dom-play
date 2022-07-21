//alert("Its working");
//let actors = document.querySelectorAll(".hamlet");



function myAlert(){
    alert("I'm clicked!");
}
let spans = actors = document.querySelectorAll("#play span");

console.log(spans)


for(const mySpan of spans){
    mySpan.addEventListener("click", function (ev){
        highlightActor(mySpan.dataset.actor);
    });
    //alert(mySpan.dataset.actor);

}

function highlightActor(actor){

    for(const mySpan of spans){
        if(actor== mySpan.dataset.actor){//current actor, highlight
            mySpan.style.backgroundColor = 'yellow';
        
        }else{// not current actor, remove highlight
            mySpan.style.backgroundColor = 'white';
        }
        }
    }

   // alert("The current actor is: " + actor);



function highlight(el){
   if( el.this.style.backgroundcolor =='blue') {
        el.style.backgroundcolor = `white`;
   }else{
        el.style.backgroundcolor = `yellow`;
   }

}