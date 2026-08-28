
let count = 0
document.getElementById("subscribeBtn").addEventListener("click",function(){count++;
    if(count==1){

document.getElementById("herotitle").textContent="Thanks for subscibing!!";
document.getElementById("herotext").textContent="Stay tuned,for exiting content!!!";}

    else if (count==2){

document.getElementById("herotitle").textContent="we are here to entertain you!!";
document.getElementById("herotext").textContent="focus looking great";}

    else if (count == 3) {
        document.getElementById("herotitle").textContent = "Follow Us Everywhere!";
        document.getElementById("herotext").textContent = "YouTube • TikTok • Instagram";
    }

    else {
        document.getElementById("herotitle").textContent = "Create. Inspire. Connect.";
        document.getElementById("herotext").textContent = "I create amazing content for YouTube, TikTok, Instagram, linkedin and more.";
        count = 0;
    }

});

    



const images = document.querySelectorAll(".content-image");

images.forEach(function(image) {
    image.addEventListener("click", function() {
        alert("You clicked on " + image.alt + "!");
    });
});






