const shareIcon = document.querySelector("#icon");


shareIcon.addEventListener("click", (shareLink) => {
  shareLink = document.querySelector(".share_link");
  if (shareLink.style.opacity === "0") { 
    shareLink.style.opacity = "1"
    shareLink.style. pointerEvents =  "auto";
    
    // shareLink.style.display = "block";  //it is cuasing CLS shift not good for performance
      //when want to use display's other property use them in js to make them work
  } else {
    
    shareLink.style.opacity = "0"
    shareLink.style. pointerEvents =  "none";

    // shareLink.style.display = "none";
  }

});
