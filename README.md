# lsdregex
A library to streamline formatting and validating Legal Subdivision addresses within Alberta, BC, and Saskatchewan.

The library comes with a small web app to test the code. Input an LSD into the text field and the textbox will auto format to the LSD. Click the button and the LSD will be
validated and display wether or not the LSD matched the REGEX expression for LSD formats in Albert, BC, and Saskatchewan, Canada.

## Installation
Include the `lsd.js` file within your html:

`<script src="lsd.js" async defer></script>`

## Usage 
There are two functions provided within the library. The formatter and and the validator.

    //To call the formatter, call the formatLSD function. This function accepts a string as its only parameter
    //This function will return the formatted string

    let formattedLSD = formatLSD(lsd);
    
    //To call the validator, call the checkLSDFormat function. This functino accepts an lsd as a string as the 
    first parameter and an optional boolean to allow null lsds as the second parameter.
    //this function will return true or false if the lsd is formatted correctly.
    
    let valid = checkLSDFormat(lsd, false);
