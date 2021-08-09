let spacing=document.getElementById("spacing");
let image= document.getElementById("image");
let color=document.getElementById("color");
let blur=document.getElementById("blur");
spacing.addEventListener("change",function(event){
 event.preventDefault();
//  console.log(spacing.value);
 image.style.padding = spacing.value + "px";
 image.style.backgroundColor=color.value;
});

 color.addEventListener("change",function(event){
    image.style.backgroundColor=color.value;
});

blur.addEventListener("change",function(event){
    // image.style.filter="blur(" +blur.value + "px)"
    image.style.filter= `blur(${blur.value}px)`;
});
