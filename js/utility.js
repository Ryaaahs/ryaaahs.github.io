let imgSizes = [];

// On page load
//Phones
if(window.innerWidth <= 415){
    document.addEventListener("DOMContentLoaded", function(e) {
        let i;
        let img = new Image()
        const artworkImages = document.querySelectorAll("div.artwork-item > img");
        for(i = 0; i < artworkImages.length; i++){
            let childElement = artworkImages[i]; 
            // While getting img sizes, append on click event to them to allow scale
            if(typeof childElement.onclick !== "function") {
                childElement.onclick = function() {
                    const artworkContainer = document.querySelectorAll(".artwork-container");
                    if(!((this.width * 2) >= artworkContainer[0].clientWidth)){
                        this.width = this.width * 2;
                        this.scrollHeight = this.scrollHeight * 2;
                    }
                }
            }
            img.src = childElement.src; 
            if(img.width > 350){
                childElement.width = img.width / 2;
                childElement.scrollHeight = img.height / 2;
            }
            img.src = childElement.src; 
            imgSizes.push([img.width, img.height]); 
        }
        setImgSizes(imgSizes);
    });
//Tablets
}else if (window.innerWidth < 768){
    document.addEventListener("DOMContentLoaded", function(e) {
        let i;
        let img = new Image()
        const artworkImages = document.querySelectorAll("div.artwork-item > img");
        for(i = 0; i < artworkImages.length; i++){
            let childElement = artworkImages[i]; 
            if(typeof childElement.onclick !== "function") {
                childElement.onclick = function() {
                    const artworkContainer = document.querySelectorAll(".artwork-container");
                    if(!((this.width * 2) >= artworkContainer[0].clientWidth)){
                        this.width = this.width * 2;
                        this.scrollHeight = this.scrollHeight * 2;
                    }
                }
            }
            img.src = childElement.src; 
            if(window.innerWidth <= 700){
                if(img.width > 400){
                    childElement.width = img.width / 2;
                    childElement.scrollHeight = img.height / 2;
                }
            }
            img.src = childElement.src; 
            imgSizes.push([img.width, img.height]); 
        }
        setImgSizes(imgSizes);
    });
// Desktops
}else if(window.innerWidth >= 768){
    // Grabs all the current images sizes (Width and Height) for all the artwork images,
    // then assigns it to a variable using a utility function for later use.
    document.addEventListener("DOMContentLoaded", function(e) {
    const imgSizes = [];
    const artworkImages = document.querySelectorAll("div.artwork-item > img");
    
    let img = new Image()
    for(let i = 0; i < artworkImages.length; i++){
        let childElement = artworkImages[i]; 
        console.log(typeof childElement.onclick !== "function");
        if(typeof childElement.onclick !== "function") {
            childElement.onclick = function() {
                const artworkContainer = document.querySelectorAll(".artwork-container");
                if(!((this.width * 2) >= artworkContainer[0].clientWidth)){
                    this.width = this.width * 2;
                    this.scrollHeight = this.scrollHeight * 2;
                }
            }
            console.log(typeof childElement.onclick !== "function");
        }
        img.src = childElement.src; 
        imgSizes.push([img.width, img.height]); 
    }
    setImgSizes(imgSizes);
    });
}

// On screen change
window.addEventListener('resize', () => {
    console.log(window.innerWidth);
    if(window.innerWidth <= 850){
        let i;
        let img = new Image()
        const artworkImages = document.querySelectorAll("div.artwork-item > img");
        for(i = 0; i < artworkImages.length; i++){
            let childElement = artworkImages[i]; 
            img.src = childElement.src; 
            if(window.screen.width <= 415){
                if(img.width > 350){
                    childElement.width = img.width / 2;
                    childElement.scrollHeight = img.height / 2;
                }
            }else {
                if(img.width > 400){
                    childElement.width = img.width / 2;
                    childElement.scrollHeight = img.height / 2;
                }
            }
        }
    }else if(window.innerWidth > 850){
        // Grabs all the current images sizes (Width and Height) for all the artwork images,
        // then assigns it to a variable using a utility function for later use.
        const artworkImages = document.querySelectorAll("div.artwork-item > img");
        let i;
        for(i = 0; i < artworkImages.length; i++){
            let childElement = artworkImages[i]; 
            childElement.width = imgSizes[i][0];
            childElement.scrollHeight = imgSizes[i][1];

        }
    }
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
