const shareBtn = document.getElementById("icon");
const linkBtn = document.getElementById("share");

shareBtn.addEventListener("click", shareFunc);
function shareFunc(link, profile) {
  link = document.getElementById("shareLink");
  profile = document.getElementById("footer");
  
  
  profile.style.opacity = "0";
  link.style.opacity = "1";
};

linkBtn.addEventListener("click", profilefunc);

function profilefunc(link, profile) {
  link = document.getElementById("shareLink");
  profile = document.getElementById("footer");
  

  link.style.opacity = "0";
  profile.style.opacity = "1";
}