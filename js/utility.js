let imgSizes = [];

// Grabs all the current images sizes (Width and Height) for all the artwork images,
// then assigns it to a variable using a utility function for later use.
document.addEventListener("DOMContentLoaded", function(e) {
    const imgSizes = [];
    const artworkImages = document.querySelectorAll(".artwork-item img");
    
    let img = new Image()
    for(let i = 0; i < artworkImages.length; i++){
        let childElement = artworkImages[i]; 
        // While getting img sizes, append on click event to them to allow scale
        childElement.onclick = function() {
            if(!(this.width >= 600)){
                this.width = this.width * 2;
                this.scrollHeight = this.scrollHeight * 2;
            }
        }
        img.src = childElement.src; 
        imgSizes.push([img.width, img.height]); 
    }
    setImgSizes(imgSizes);
});

// Scrolls to a specific element defined by the argument
function scrollToSection(element) {
    const ele = document.getElementById(element);
    ele.scrollIntoView({
        behaviour: "smooth",
        block: "start", 
        inline: "start"
    }); 
}

function setImgSizes(array) {
   imgSizes = array;
}

function resetArtworkSizes() {
    const artworkImages = document.querySelectorAll(".artwork-item img");
    for(let i = 0; i < artworkImages.length; i++){
        let childElement = artworkImages[i]; 
        childElement.width = imgSizes[i][0];
        childElement.scrollHeight = imgSizes[i][1];
    }
}
