function goUp()
{
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Get the Year
var date = new Date();
var year = date.getFullYear();
document.getElementById("year").innerHTML = year;
console.log(year);

// ProgressBar Scroller
window.onscroll = function(){progressBar()};

function progressBar()
{
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

function openModal()
{
    document.getElementById("myModal").style.display = "block";
}

function closeModal()
{
    //document.getElementsByClassName("modal-content")[0].style.animationName = "up"
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n)
{
    showSlides(slideIndex += n);
}

function currentSlide(n)
{
    showSlides(slideIndex = n);
}

function showSlides(n)
{
    var i = 0;
    var slides = document.getElementsByClassName("mySlides");

    if (n > slides.length)
    {
        slideIndex = 1
    }

    if (n < 1)
    {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}