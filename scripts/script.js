//get the width of the window
var windowWidth = window.innerWidth;
//I have defined variables for each article

var article1Content = "Every picture is mainly composed of 3 elements: ISO, aperture and shutter speed (exposure). Tweaking those 3 you can adapt the photographic plate on which the picture is projected to any situation: night photography, direct sun daylight, macro photography, landscapes and so on. Each of them has their advantages and disadvantages." +
    "The ISO: lowering the ISO gives you the best quality of a picture (TIP: always try to adapt the other settings to the minimum ISO possible). The higher the ISO, the more noise (little granules) the picture will have." +
    "The Aperture: this one is giving you the depth of field: the lower the aperture, the more light will enter the camera. A low aperture means a very blurry background (TIP: this is used for the macro photography), while a very high aperture is giving you a sharp, detail background (TIP: this is used for landscapes)." +
    "The shutter speed (exposure) is basically how fast the lens project the image and how much light enters the camera. The faster the shutter speed (a small fraction) means that very small amount of light will be projected to the photographic plate (TIP: strong light situations) while a very slow speed will allow far much light to enter (TIP: dark situations).";

var article2Content = "Each photography is a composition and there are several techniques to create a meaningful composition. There are a few rules that every photographer should apply to make sure the photographs reach a sustainable standard, such as the third rule, being aware of not cropping core parts of the image, the colour tones, the agglomeration of the picture etc." +
    "The third rule is based on the thirds of the image. The photographed object should be place between 2 thirds of those, and not necessarily in center. When placing the object (especially when it comes to portrait photography) the photographer must be aware of not cropping details or body parts of the object (the main danger is cropping the palms, the feet or a small amount of hair when it comes to portraits).";

var article3Content = "Long exposure is known by many as a tricky set-up because it usually requires a tripod for best results (he camera must stay very still while the picture is processed), but it has many benefits that makes a picture unique. When using long exposure (very slow shutter speed) the camera captures every detail it sees during the process. The result is a combination of all those details in one image, which makes the moving objects a blurry trace of the object. Even if this seems like something to avoid, in some situation it can create really nice effects, for example a flowing waterfall/ spring will transform in a shiny trace, a city full of moving cars at night will transform into a composition with colorful lines (the cars’ stops). The long exposure is also the main technique to take pictures of starry skies; by setting the camera to the maximum/ longest exposure and minimum ISO you can even photograph galaxies!"
var article4Content = "Everyone loves editing, but it’s not usually necessary if the picture was already taken with good settings. In any case, the best place to go if you want to retouch your work is Adobe Lightroom CC. This software allows you to manipulate all the settings of a camera (ISO, aperture, exposure) and many more features (colour, sharpness, noise, levels etc.). From far, the best manipulation setting is the histogram (or the levels diagram) with which you can adjust the brightness (darks/ whites) or the contrast of your picture (TIP: when editing a photo, at the same time you destroy its quality. If you plan to retouch your artwork, take the shots in .RAW format because it gives you a more open field of colours and the quality will remain mainly untouched. Also, you will need to use Photoshop CC to edit the .RAW files, since Lightroom doesn’t support them.)"
var article5Content = "It always happens to find a good subject when you already left your camera at home. What to do now? Snap a photo with your phone! Phone camera settings nowadays almost equals a cheap DSLR settings, sometimes can be even more flexible. If you go to the camera and check for some advanced settings (for Samsung users there should be a “PRO mode”) you will bump into ISO, aperture, exposure and sometimes even white balance (TIP: leave the white balance on AUTO for start, but if you want to give your picture some unique colors try playing with it). Some phones can take very good pictures on the automatic camera (the standard camera), but some can take some incredibly better pictures on manual/ pro mode. This way you will never miss a good photographic opportunity ever again. The best cameras out now on phones are Iphone XS camera, Huawei P30 Pro, Huawei P20 Pro, Samsung Galaxy S9, S10, but even older phones can have some interesting tweaks hidden in their cameras."

var article1Heading = "Camera basics";
var article2Heading = "Composition";
var article3heading = "Long Exposure Benefits";
var article4Heading = "Adobe Lightroom CC";
var article5Heading = "Phone Photography";

function loadArticle(number) {
    var articleHeading = document.getElementById("article-heading");
    var articleContent = document.getElementById("article-content");
    var articleImage = document.getElementById("article-image");
    //load the appropriate article 
    switch (number) {
        case 1:
            {
                articleHeading.textContent = article1Heading;
                articleContent.textContent = article1Content;
                loadArticleImage(1);
                break;
            }

        case 2:
            {
                articleHeading.textContent = article2Heading;
                articleContent.textContent = article2Content;
                loadArticleImage(2);
                break;
            }
        case 3:
            {
                articleHeading.textContent = article3heading;
                articleContent.textContent = article3Content;
                loadArticleImage(3);
                break;
            }
        case 4:
            {
                articleHeading.textContent = article4Heading;
                articleContent.textContent = article4Content;
                loadArticleImage(4);
                break;
            }
        case 5:
            {
                articleHeading.textContent = article5Heading;
                articleContent.textContent = article5Content;
                loadArticleImage(5);
                break;
            }


    }
}

//this function is used to load the appropriate image size 
//for the article 
function loadArticleImage(number) {
    var articleImage = document.getElementById("article-image");
    //load a description for the image 
    switch (number) {
        case 1:
            articleImage.alt = "Beginner with a camera"
            break;

        case 2:
            articleImage.alt = "Coffee"
            break;

        case 3:
            articleImage.alt = "Person in a forest"
            break;

        case 4:
            articleImage.alt = "Waterfall"
            break;

        case 5:
            articleImage.alt = "Media city UK"
            break;
    }


    if (windowWidth < 768) {
        // load small image
        articleImage.src = "../images/articles/article" + number + "-small.jpg";

    } else {
        if (windowWidth >= 768 && windowWidth < 992) {
            //load medium image   
            articleImage.src = "../images/articles/article" + number + "-medium.jpg";

        } else {
            //load large image
            articleImage.src = "../images/articles/article" + number + "-large.jpg";
        }
    }
}


// Open the Modal
function openModal(categoryIndex) {
    document.getElementById("my-modal").style.display = "block";
    //call the function getImages() to load the images for each category
    getImages(categoryIndex);
}

/**
 * This functions is called when the Library page is loaded
 * It loads all the images from al categories  
 */
function getImages(categoryIndex) {
    //get a pointer to the modal and retrieve all img elemets
    var images = document.getElementById("my-modal").getElementsByTagName('img');


    //loop through the images array and load the images
    //the breaking points values are taken from Bootstrap media queries table
    for (var index = 0; index < images.length; index++) {
        //check the screen size and display the according image  
        if (windowWidth < 768) {
            // load small image
            images[index].src = "../images/category" + categoryIndex + "/" + "image" + (index + 1) + "-small.jpg";
        } else {
            if (windowWidth >= 768 && windowWidth < 992) {
                //load medium image
                images[index].src = "../images/category" + categoryIndex + "/" + "image" + (index + 1) + "-medium.jpg";

            } else {
                //load large image
                images[index].src = "../images/category" + categoryIndex + "/" + "image" + (index + 1) + "-large.jpg";
            }
        }
    }

    loadImageDescriptions(categoryIndex);

}

function loadImageDescriptions(categoryIndex) {
    //get a pointer to the modal and retrieve all img elemets
    var images = document.getElementById("my-modal").getElementsByTagName('img');
    switch (categoryIndex) {
        case 1:
            //I have 5 images for each category
            images[0].alt = "Milky way"
            images[1].alt = "Dark sky"
            images[2].alt = "Long exposure car"
            images[3].alt = "Lightning"
            images[4].alt = "Fountain"
            break;

        case 2:
            images[0].alt = "Lotus"
            images[1].alt = "Mini Christmas House"
            images[2].alt = "Caterpillar"
            images[3].alt = "Bird"
            images[4].alt = "Leaves"
            break;

        case 3:
            images[0].alt = "Church interior"
            images[1].alt = "Iasi Palace"
            images[2].alt = "carousel"
            images[3].alt = "Palace of the parliament"
            images[4].alt = "Wish"
            break;

        case 4:
            images[0].alt = "Sea shore"
            images[1].alt = "Vegetation"
            images[2].alt = "Seagulls"
            images[3].alt = "Hobbit hotel"
            images[4].alt = "Transfagarasani"
            break;

        case 5:
            images[0].alt = "Manchester centre"
            images[1].alt = "Traffic lights"
            images[2].alt = "Pascani"
            images[3].alt = "Alba iulia"
            images[4].alt = "Manchester during night"
            break;
    }
}

// Close the Modal
function closeModal() {
    document.getElementById("my-modal").style.display = "none";

}


var slideIndex = 1;

// Next/previous controls
function plusSlides(n, categoryIndex) {
    showSlides(slideIndex += n, categoryIndex);
}

/**
 * Thumbnail image controls
  Function called for a specific image index and a category 
  Example: When the user clicks the first category, this function is called 
  with n=1 and category index=1
 */

function currentSlide(n, categoryIndex) {
    showSlides(slideIndex = n, categoryIndex);
}

/**
 *  
 */
function showSlides(n, categoryIndex) {
    var i;
    var modal = document.getElementById("my-modal")
    var slides = modal.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";

}


/*
This function is used to show/hide the specs table 
given a specific button index. The first button corresponding 
to the first image has an index of 0 
*/
function showSpecsTable(index) {
    //get a pointer to the button

    var table = document.getElementsByTagName("table")[index];

    if (table.style.opacity == 0) {
        table.style.opacity = 1;
        //Remove the current icon and show a close icon instead.
        //This is used to suggest the user how to close the table 
        var icon = document.getElementsByTagName("i")[index];
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-close");
    } else {
        table.style.opacity = 0;
        var icon = document.getElementsByTagName("i")[index];
        icon.classList.remove("fa-close");
        icon.classList.add("fa-bars");

    }

}

function openArticlesMenu() {
    var menu = document.getElementById("article-menu");
    var menuWidth = menu.offsetWidth;
    //target large devices
    if (windowWidth > 992) {
        menu.style.width = windowWidth * 0.25 + "px"; //30% of the window with
        menu.style.padding = "20px";
    } else
        //target medium devices

        if (windowWidth < 992 && windowWidth > 768) {
            menu.style.width = windowWidth * 0.4 + "px";
            menu.style.padding = "15px";
        } else {
            //target small devices
            menu.style.width = windowWidth * 0.5 + "px";
            menu.style.padding = "15px";
        }
    collapseArticleArea();


}

function closeArticlesMenu() {
    var menu = document.getElementById("article-menu");
    menu.style.width = "0px";
    menu.style.padding = "0px"
    expandArticleArea();
}

/*
  This function is used when the article menu
  on the right is closed to expand the area
  of the article
 */
function expandArticleArea() {
    var articleHeading = document.getElementById("article-heading");
    var article = document.getElementsByTagName('article')[0];
    var articleContent = document.getElementById("article-content");
    var articleImage = document.getElementById("article-image");
    //center the wrapper image and 
    //allow it to expand to 60% of the viewport width

    article.style.margin = "auto";
    //align the heading to center
    articleHeading.style.textAlign = "center";

    articleImage.style.marginLeft = "auto";
    articleImage.style.marginRight = "auto";
    articleImage.style.display = "block";

    if (windowWidth < 768) {
        articleContent.style.textAlign = "left";
        article.style.maxWidth = "90%";
    } else {
        //align the article content to center
        articleContent.style.textAlign = "center";
        article.style.maxWidth = "50%";
    }

}

/**
 * This function is used when we want
 * to collapse the article area again to its original 
 * value
 */
function collapseArticleArea() {
    var articleHeading = document.getElementById("article-heading");
    var article = document.getElementsByTagName('article')[0];
    var articleContent = document.getElementById("article-content");
    var articleImage = document.getElementById("article-image");

    articleImage.style.marginLeft = "0px";
    article.style.margin = "0px";
    articleHeading.style.textAlign = "left";
    articleContent.style.textAlign = "left";

    //for large devices the maxWidth shouWld return 
    //to 50% 
    article.style.maxWidth = "50%";
}