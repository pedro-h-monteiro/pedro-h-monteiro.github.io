window.onload = function ()
{
    var i = 0;
    var j = 0;

    for (j = 1; j <= 10; j++)
    {
        priceQuant(j);
    }

    for (i,j = 1; i,j <= 5; i++, j++)
    {
        var clothe = document.getElementById("clotheSizes" + i);
        var sizes = clothe.options[clothe.selectedIndex].value;
        var priceOrig = document.getElementById('clotheSizes' + i).options[document.getElementById('clotheSizes' + i).selectedIndex].id;
        if (sizes == "none")
        {
            document.getElementById("price" + i).innerText = "$ " + parseFloat(priceOrig);
        }
    }
}

function dropShop()
{
    document.getElementById("shopDropdown").classList.toggle("show");
}

var openDropdown;
var dropdowns;
var i = 0;

window.onclick = function (event)
{
    if (!event.target.matches('.dropbtn'))
    {
        dropdowns = document.getElementsByClassName("dropdownContent");
        
        for (i = 0; i < dropdowns.length; i++)
        {
            openDropdown = dropdowns[i];
            
            if (openDropdown.classList.contains('show'))
            {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function clothesPriceFunc(arg)
{
    var price = document.getElementById("price" + arg).innerText;
    var priceId = document.getElementById("price" + arg).id;
    var clothe = document.getElementById("clotheSizes" + arg);
    var sizes = clothe.options[clothe.selectedIndex].value;
    var priceOrig = document.getElementById('clotheSizes' + arg).options[document.getElementById('clotheSizes' + arg).selectedIndex].id;

    console.log("Original price: " + priceOrig);
    console.log("PriceId: " + priceId);
    console.log("Sizes: " + sizes);
    console.log("ClotheSizes: " + clothe.value);
    console.log("Sizes: " + sizes);

    if (sizes == "none")
    {
        document.getElementById(priceId).innerText = "$ " + priceOrig;
        document.getElementById("cartTotal").innerHTML = "$ " + priceOrig;
    }
    if (sizes == "sXS")
    {
        document.getElementById(priceId).innerText = "$ " + priceOrig;
        document.getElementById("cartTotal").innerHTML = "$ " + priceOrig;
    }
    else if (sizes == "sS")
    {
        document.getElementById(priceId).innerText = "$ " + (parseFloat(priceOrig) + 1);
        document.getElementById("cartTotal").innerHTML = "$ " + (parseFloat(priceOrig) + 1);
    }
    else if (sizes == "sM")
    {
        document.getElementById(priceId).innerText = "$ " + (parseFloat(priceOrig) + 2);
        document.getElementById("cartTotal").innerHTML = "$ " + (parseFloat(priceOrig) + 2);
    }
    else if (sizes == "sL")
    {
        document.getElementById(priceId).innerText = "$ " + (parseFloat(priceOrig) + 3);
        document.getElementById("cartTotal").innerHTML = "$ " + (parseFloat(priceOrig) + 3);
    }
    else if (sizes == "sXL")
    {
        document.getElementById(priceId).innerText = "$ " + (parseFloat(priceOrig) + 4);
        document.getElementById("cartTotal").innerHTML = "$ " + (parseFloat(priceOrig) + 4);
    }

    document.getElementById("cartQ").innerHTML = "1";

    document.getElementById("cartName").innerHTML = document.getElementById("itemName" + arg).innerText;
    document.getElementById("cartSize").innerHTML = sizes.substr(1);
    document.getElementById("cartQuant").innerHTML = "1";
    document.getElementById("itemPrice").innerHTML = "$" + priceOrig;
}

function priceQuant(arg)
{
    var i = 0;
    var price = document.getElementById("itemSelect" + arg).innerText;
    var priceId = document.getElementById("price" + arg).id;
    var items = document.getElementById("itemSelect" + arg);
    var itemsQuant = items.options[items.selectedIndex].innerText;
    var itemName = document.getElementById("itemName" + arg).innerHTML;
    var priceOrig = document.getElementById('itemSelect' + arg).options[document.getElementById('itemSelect' + arg).selectedIndex].id;

    for(i = 0; i <= itemsQuant; i++)
    {
        if (itemsQuant == i)
        {
            var total = parseFloat(priceOrig) * i
            document.getElementById(priceId).innerText = "$ " + total;
        }
    }

    document.getElementById("cartQ").innerHTML = itemsQuant;

    document.getElementById("cartName").innerHTML = itemName;
    document.getElementById("cartQuant").innerHTML = itemsQuant;
    document.getElementById("cartTotal").innerHTML = "$ " + total;
    document.getElementById("itemPrice").innerHTML = "$" + priceOrig;
}

function openAdr()
{
    var popUp = document.getElementsByClassName("popUp")[0];
    var btn = document.getElementsByClassName("buyBtn")[0];
    var span = document.getElementsByClassName("close")[0];

    document.getElementsByClassName("popUp-body")[0].style.display = "block";
    document.getElementById("complete").style.display = "none";
    document.getElementById("btns").style.display = 'block';

    popUp.style.display = "block";

    console.log("open");
}

function closeAdr()
{
    var popUp = document.getElementsByClassName("popUp")[0];
    var btn = document.getElementsByClassName("buyBtn")[0];
    var span = document.getElementsByClassName("close")[0];
    
    popUp.style.display = "none";

    window.onclick = function(event)
    {
        if (event.target == popUp)
        {
            popUp.style.display = "none";
        }
    }
}

function checkout()
{   
    // Billing Address Vars
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var address2 = document.getElementById("address2").value;
    var country = document.getElementById("country").value;
    var state = document.getElementById("state").value;
    var zipcode = document.getElementById("zipcode").value;

    // Payment Vars
    var payment1 = document.getElementById("pay1").checked;
    var payment2 = document.getElementById("pay2").checked;
    var payment3 = document.getElementById("pay3").checked;
    
    var cardName = document.getElementById("card-name").value;
    var cardNumber = document.getElementById("card-number").value;
    var expiration = document.getElementById("card-exp").value;
    var cvv = document.getElementById("card-cvv").value;

    //Billing Address Validation

    if (fname.length < 3)
    {
        document.getElementById("after-fname").style.display = 'block';
        document.getElementById("after-fname").style.color = '#FF0000';
        document.getElementById("after-fname").innerHTML = "Please input your name! &#9932";
        document.getElementById("fname").style.boxShadow = '0 0 4px #FF0000';
        return false;
    }
    else if (fname.length >= 3)
    {
        document.getElementById("after-fname").style.display = 'none';
        //document.getElementById("after-fname").style.color = '#006600';
        //document.getElementById("after-fname").innerHTML = "&#10004";
        document.getElementById("fname").style.boxShadow = '0 0 4px #006600';
    }

    if (lname.length < 3)
    {
        document.getElementById("after-lname").style.display = 'block';
        document.getElementById("after-lname").style.color = '#FF0000';
        document.getElementById("after-lname").innerHTML = "Please input a valid last name! &#9932";
        document.getElementById("lname").style.boxShadow = '0 0 4px #FF0000';
        return false;
    }
    else if (lname.length >= 3)
    {
        document.getElementById("after-lname").style.display = 'none';
        //document.getElementById("after-lname").style.color = '#006600';
        //document.getElementById("after-lname").innerHTML = "&#10004";
        document.getElementById("lname").style.boxShadow = '0 0 4px #006600';
    }

    if (username.length < 3)
    {
        document.getElementById("after-username").style.display = 'block';
        document.getElementById("after-username").style.color = '#FF0000';
        document.getElementById("after-username").innerHTML = "Please input a valid username! &#9932";
        document.getElementById("username").style.boxShadow = '0 0 4px #FF0000';
        return false;
    }
    else if (username.length >= 3)
    {
        document.getElementById("after-username").style.display = 'none';
        //document.getElementById("after-username").style.color = '#006600';
        //document.getElementById("after-username").innerHTML = "&#10004";
        document.getElementById("username").style.boxShadow = '0 0 4px #006600';
    }

    if (email.length < 3 || !email.includes("@"))
    {
        document.getElementById("after-email").style.display = 'block';
        document.getElementById("after-email").style.color = '#FF0000';
        document.getElementById("after-email").innerHTML = "Please input a valid email! &#9932";
        document.getElementById("email").style.boxShadow = '0 0 4px #FF0000';
        return false;
    }
    else if (email.includes("@"))
    {
        document.getElementById("after-email").style.display = 'none';
        //document.getElementById("after-email").style.color = '#006600';
        //document.getElementById("after-email").innerHTML = "&#10004";
        document.getElementById("email").style.boxShadow = '0 0 4px #006600';
    }

    if (address.length < 3)
    {
        document.getElementById("after-address").style.display = 'block';
        document.getElementById("after-address").style.color = '#FF0000';
        document.getElementById("after-address").innerHTML = "Please input a valid address! &#9932";
        document.getElementById("address").style.boxShadow = '0 0 4px #FF0000';
        return false;
    }
    else if (address.length >= 3)
    {
        document.getElementById("after-address").style.display = 'none';
        //document.getElementById("after-address").style.color = '#006600';
        //document.getElementById("after-address").innerHTML = "&#10004";
        document.getElementById("address").style.boxShadow = '0 0 4px #006600';
    }

    if (country.length < 3)
    {
        document.getElementById("after-country").style.display = 'block';
        document.getElementById("after-country").style.color = '#FF0000';
        document.getElementById("after-country").innerHTML = "Please input a valid country! &#9932";
        document.getElementById("country").style.boxShadow = '0 0 4px #FF0000';
        return false;
    }
    else if (country.length >= 3)
    {
        document.getElementById("after-country").style.display = 'none';
        //document.getElementById("after-country").style.color = '#006600';
        //document.getElementById("after-country").innerHTML = "&#10004";
        document.getElementById("country").style.boxShadow = '0 0 4px #006600';
    }

    if (state.length < 3)
    {
        document.getElementById("after-state").style.display = 'block';
        document.getElementById("after-state").style.color = '#FF0000';
        document.getElementById("after-state").innerHTML = "Please input a valid state! &#9932";
        document.getElementById("state").style.boxShadow = '0 0 4px #FF0000';
        return false;
    }
    else if (state.length >= 3)
    {
        document.getElementById("after-state").style.display = 'none';
        //document.getElementById("after-state").style.color = '#006600';
        //document.getElementById("after-state").innerHTML = "&#10004";
        document.getElementById("state").style.boxShadow = '0 0 4px #006600';
    }

    if (zipcode.length != 8)
    {
        document.getElementById("after-zipcode").style.display = 'block';
        document.getElementById("after-zipcode").style.color = '#FF0000';
        document.getElementById("after-zipcode").innerHTML = "Please input a valid zipcode! &#9932";
        document.getElementById("zipcode").style.boxShadow = '0 0 4px #FF0000';
        return false;
    }
    else if (zipcode.length == 8)
    {
        document.getElementById("after-zipcode").style.display = 'none';
        //document.getElementById("after-zipcode").style.color = '#006600';
        //document.getElementById("after-zipcode").innerHTML = "&#10004";
        document.getElementById("zipcode").style.boxShadow = '0 0 4px #006600';
    }

    //Payment Validation

    if (payment1 == false && payment2 == false  && payment3 == false)
    {
        document.getElementById("after-payment").style.display = "block";
        document.getElementById("after-payment").style.color = '#FF0000';
        document.getElementById("after-payment").innerHTML = "You must select a payment method! &#9932";
        //document.getElementById("payment").style.boxShadow = '0 0 4px #FF0000';
        return false;
    }
    else if (payment1 == true || payment2 == true  || payment3 == true)
    {
        document.getElementById("after-payment").style.display = "none";
    }

    if (cardName.length < 3)
    {
        document.getElementById("after-card-name").style.display = 'block';
        document.getElementById("after-card-name").style.color = '#FF0000';
        document.getElementById("after-card-name").innerHTML = "Please input your card name! &#9932";
        document.getElementById("card-name").style.boxShadow = '0 0 4px #FF0000';
        return false;
    }
    else if (cardName.length >= 3)
    {
        document.getElementById("after-card-name").style.display = 'none';
        //document.getElementById("after-cardName").style.color = '#006600';
        //document.getElementById("after-cardName").innerHTML = "&#10004";
        document.getElementById("card-name").style.boxShadow = '0 0 4px #006600';
    }

    if (cardNumber.length < 3 || cardNumber.length > 12)
    {
        document.getElementById("after-card-number").style.display = 'block';
        document.getElementById("after-card-number").style.color = '#FF0000';
        document.getElementById("after-card-number").innerHTML = "Please input a valid card number! &#9932";
        document.getElementById("card-number").style.boxShadow = '0 0 4px #FF0000';
        return false;
    }
    else if (cardNumber.length >= 3 && cardNumber.length <= 12)
    {
        document.getElementById("after-card-number").style.display = 'none';
        //document.getElementById("after-cardnumber").style.color = '#006600';
        //document.getElementById("after-cardnumber").innerHTML = "&#10004";
        document.getElementById("card-number").style.boxShadow = '0 0 4px #006600';
    }

    if (expiration.length < 5)
    {
        document.getElementById("after-expiration").style.display = 'block';
        document.getElementById("after-expiration").style.color = '#FF0000';
        document.getElementById("after-expiration").innerHTML = "Please input a valid expiration date! &#9932";
        document.getElementById("card-exp").style.boxShadow = '0 0 4px #FF0000';
        return false;
    }
    else if (expiration.length >= 5 || expiration.length <= 8)
    {
        document.getElementById("after-expiration").style.display = 'none';
        //document.getElementById("after-expiration").style.color = '#006600';
        //document.getElementById("after-expiration").innerHTML = "&#10004";
        document.getElementById("card-exp").style.boxShadow = '0 0 4px #006600';
    }

    if (cvv.length != 3)
    {
        document.getElementById("after-card-cvv").style.display = 'block';
        document.getElementById("after-card-cvv").style.color = '#FF0000';
        document.getElementById("after-card-cvv").innerHTML = "Please input a valid CVV! &#9932";
        document.getElementById("card-cvv").style.boxShadow = '0 0 4px #FF0000';
        return false;
    }
    else if (cvv.length == 3)
    {
        document.getElementById("after-card-cvv").style.display = 'none';
        //document.getElementById("after-card-cvv").style.color = '#006600';
        //document.getElementById("after-card-cvv").innerHTML = "&#10004";
        document.getElementById("card-cvv").style.boxShadow = '0 0 4px #006600';
    }

    document.getElementsByClassName("popUp-body")[0].style.display = "none";
    document.getElementById("complete").style.display = "block";
    document.getElementById("btns").style.display = 'none';

}