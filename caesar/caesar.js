function goUp()
{
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Get the Year
var date = new Date();
var year = date.getFullYear();
document.getElementById("year").innerHTML = year;
console.log(year);

window.onload = function()
{
    var userOption = document.getElementById("user-option");

    userOption.addEventListener("keyup", function (event) {
        var option = document.getElementById("user-option").value;

        if (event.keyCode === 13 && option != "" && option == 1) /*Enter Key is Pressed and Input is 1 - Encrypt*/
        {
            document.getElementById("user-actions1").style.display = "block";
            document.getElementById("entered-text").focus(); /*Focus on next text field*/
        }
        else if (event.keyCode === 13 && option != "" && option == 2) /*Enter Key is Pressed and Input is 2 - Decrypt*/
        {
            document.getElementById("form-label1").innerText = "> Input message to decrypt: ";
            document.getElementById("user-actions1").style.display = "block";
            document.getElementById("entered-text").focus(); /*Focus on next text field*/
        }
    });

    var input1 = document.getElementById("entered-text");

    input1.addEventListener("keyup", function (event)
    {
        var enteredText = document.getElementById("entered-text").value;

        if (event.keyCode === 13 && enteredText != "") /*Enter Key is Pressed and Input has Chars*/ {
            document.getElementById("user-actions2").style.display = "block";
            document.getElementById("entered-shift").focus(); /*Focus on next text field*/
        }
    });

    var input2 = document.getElementById("entered-shift");

    input2.addEventListener("keyup", function (event)
    {
        var enteredShift = document.getElementById("entered-shift").value;
        var option = document.getElementById("user-option").value;

        if (event.keyCode === 13 && enteredShift != "" && option == 1) /*Enter Key is Pressed, Input is not empty - Encode();*/
        {
            encode();
            document.getElementById("user-actions3").style.display = "block";
            document.getElementById("user-actions4").style.display = "block";
            document.getElementById("clear-text").focus(); /*Focus on next text field*/
        }
        else if (event.keyCode === 13 && enteredShift != "" && option == 2) /*Enter Key is Pressed, Input is not empty - Decode();*/
        {
            decode();
            document.getElementById("form-label3").innerText = "> Decrypted message: ";
            document.getElementById("user-actions3").style.display = "block";
            document.getElementById("user-actions4").style.display = "block";
            document.getElementById("clear-text").focus(); /*Focus on next text field*/
        }
    });

    var input3 = document.getElementById("clear-text");

    input3.addEventListener("keyup", function (event)
    {
        var clearText = document.getElementById("clear-text").value;
        console.log(clearText);

        if (event.keyCode === 13 && clearText != "" && clearText == "c" || clearText == "C") /*Enter Key is Pressed and Input has "c"*/
        {
            /*Hide all elements except the user option*/
            document.getElementById("user-actions1").style.display = "none";
            document.getElementById("user-actions2").style.display = "none";
            document.getElementById("user-actions3").style.display = "none";
            document.getElementById("user-actions4").style.display = "none";

            /*Clear all fields*/
            document.getElementById("user-option").value = "";
            document.getElementById("entered-text").value = "";
            document.getElementById("entered-shift").value = "";
            document.getElementById("encoded-text").value = "";
            document.getElementById("clear-text").value = "";
            document.getElementById("user-option").focus(); /*Focus on first text field*/
        }
    });
}

function encode()
{
    /*Convert everything to lowercase and remove spaces*/
    var enteredText = document.getElementById("entered-text").value.toLowerCase().replace(/\s+/g, '');
    /*Remove numbers*/
    enteredText = enteredText.replace(/[0-9]/g, '');
    /*Get lenght of entered text*/
    var textSize = enteredText.length;
    /*Replace all accenctuated characters with their non accenctuated partners*/
    for (i = 0; i < textSize; i++)
    {
        if (enteredText[i] == 'á' || enteredText[i] == 'à' || enteredText[i] == 'ã' || enteredText[i] == 'â' || enteredText[i] == 'ä')
        {
            var charA = enteredText[i];
            enteredText = enteredText.replace(charA, 'a');
        }
        if (enteredText[i] == 'é' || enteredText[i] == 'è' || enteredText[i] == 'ẽ' || enteredText[i] == 'ê')
        {
            var charE = enteredText[i];
            enteredText = enteredText.replace(charE, 'e');
        }
        if (enteredText[i] == 'í' || enteredText[i] == 'ì' || enteredText[i] == 'î' || enteredText[i] == 'ï')
        {
            var charI = enteredText[i];
            enteredText = enteredText.replace(charI, 'i');
        }
        if (enteredText[i] == 'ó' || enteredText[i] == 'ò' || enteredText[i] == 'õ' || enteredText[i] == 'ô' || enteredText == 'ö')
        {
            var charO = enteredText[i];
            enteredText = enteredText.replace(charO, 'o');
        }
        if (enteredText[i] == 'ú' || enteredText[i] == 'ù' || enteredText[i] == 'û' || enteredText[i] == 'ü')
        {
            var charU = enteredText[i];
            enteredText = enteredText.replace(charU, 'u');
        }
        if (enteredText[i] == 'ç' || enteredText[i] == 'Ç')
        {
            var charC = enteredText[i];
            enteredText = enteredText.replace(charC, 'c');
        }
    }
    /*Remove everything that is not a char*/
    enteredText = enteredText.replace(/\W+/g, '');
    /*Remove '_'*/
    enteredText = enteredText.replace(/_/g, '');

    console.log(enteredText);
    
    /*Get shift as int*/
    var key = parseInt(document.getElementById("entered-shift").value);
    var encodedText = [];
    var values = [];
    var final = "";
    var i = 0;

    for (i = 0; i < textSize; i++)
    {
        /*Convert chars to ascii code*/
        values = enteredText.charCodeAt(i);

        encodedText = values + key;

        if (encodedText + key >= 97 && encodedText + key >= 122)
        {
            encodedText = (((values - 97 + key) % 26) + 97);
        }
        /*Make sure no weird chars escape*/
        final += String.fromCharCode(encodedText).replace(/\W+/g, '');
    }
    console.log(final);
    document.getElementById("encoded-text").value = final;
}

function decode()
{
    /*Convert everything to lowercase and remove spaces*/
    var enteredText = document.getElementById("entered-text").value.toLowerCase().replace(/\s+/g, '');
    /*Remove numbers*/
    enteredText = enteredText.replace(/[0-9]/g, '');
    /*Get lenght of entered text*/
    var textSize = enteredText.length;
    /*Replace all accenctuated characters with their non accenctuated partners*/
    for (i = 0; i < textSize; i++)
    {
        if (enteredText[i] == 'á' || enteredText[i] == 'à' || enteredText[i] == 'ã' || enteredText[i] == 'â' || enteredText[i] == 'ä')
        {
            var charA = enteredText[i];
            enteredText = enteredText.replace(charA, 'a');
        }
        if (enteredText[i] == 'é' || enteredText[i] == 'è' || enteredText[i] == 'ẽ' || enteredText[i] == 'ê')
        {
            var charE = enteredText[i];
            enteredText = enteredText.replace(charE, 'e');
        }
        if (enteredText[i] == 'í' || enteredText[i] == 'ì' || enteredText[i] == 'î' || enteredText[i] == 'ï')
        {
            var charI = enteredText[i];
            enteredText = enteredText.replace(charI, 'i');
        }
        if (enteredText[i] == 'ó' || enteredText[i] == 'ò' || enteredText[i] == 'õ' || enteredText[i] == 'ô' || enteredText == 'ö')
        {
            var charO = enteredText[i];
            enteredText = enteredText.replace(charO, 'o');
        }
        if (enteredText[i] == 'ú' || enteredText[i] == 'ù' || enteredText[i] == 'û' || enteredText[i] == 'ü')
        {
            var charU = enteredText[i];
            enteredText = enteredText.replace(charU, 'u');
        }
        if (enteredText[i] == 'ç' || enteredText[i] == 'Ç')
        {
            var charC = enteredText[i];
            enteredText = enteredText.replace(charC, 'c');
        }
    }
    /*Remove everything that is not a char*/
    enteredText = enteredText.replace(/\W+/g, '');
    /*Remove '_'*/
    enteredText = enteredText.replace(/_/g, '');

    console.log(enteredText);
    
    /*Get shift as int*/
    var key = parseInt(document.getElementById("entered-shift").value);
    var encodedText = [];
    var values = [];
    var final = "";
    var i = 0;

    for (i = 0; i < textSize; i++)
    {
        /*Convert chars to ascii code*/
        values = enteredText.charCodeAt(i);

        encodedText = values - key;

        if (values >= 97 && values <= 122)
        {
            encodedText = ((values - 97 - key + 26) %26 + 97)
        }
        /*Make sure no weird chars escape*/
        final += String.fromCharCode(encodedText).replace(/\W+/g, '');
    }
    console.log(final);
    document.getElementById("encoded-text").value = final;
}