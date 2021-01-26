//************************************************************************************************//
//************************************************************************************************//
//Created: October 25, 2019
//Description: this class will accept a string that should contain an LSD address on each keyup
//event on the field that the string is being entered into. Each keyup, we are going to check
//length of the string to determine the formatting of that lsd, as there are 3 acceptable formats.
//Once the format is done, we will run a regex check on the string to ensure that the format is
//correct.
//************************************************************************************************//
//************************************************************************************************//

var lsdRegex = '([0-9]{3})[\/]([0-9]{2})[\-]([0-9]{2})[\-]([0-9]{2})[\-]([0-9]{2}[w|W][0-9])|' +
                            '([0-9]{2}|[a-zA-Z]{2})[\-]([0-9]{2})[\-]([0-9]{2})[\-]([0-9]{2}[w|W][0-9])|' +
                            '([a-zA-Z][\/][a-zA-Z])';

function checkLSDFormat(lsd, allowNull) {
    if (lsd == '' && allowNull == undefined) {
        return false
    } else {
        if (!lsd.match(lsdRegex) && lsd != '') {
            return false;
        }else {
            return true;
        }
    }
}

function formatLSD(lsd) {
    var returnlsd;
    if (lsd.length >= 14 || (lsd.length >= 4 && lsd.length < 14 && lsd.charAt(3) == '/')) {
        //this is the formating like 102/10-10-10-10w5
        //char 4 needs to be a /
        //char 7, 10, 13 need to be -
        //char 16 needs to be a W
        //If the character count is 14, then we have just entered past the previous format. Remove all formatting, and format to the new style.
        if (lsd.length == 14 && lsd.charAt(3) != '/') {
            lsd = lsd.replace(/-/g, ''); //the /-/g is a regex to remove all instances of - in the string, instead of only the first one.
            lsd = lsd.replace('W', '');
            //insert the new formatting here.
            var lsd = lsd.substring(0, 3) + '/' + lsd.substring(3, 5) + '-' + lsd.substring(5, 7) + '-' + lsd.substring(7); //changed this .substring(7, 9) to .substring(7) This was getting rid of the number before the W in the 999/99-99-99-99W9 format
        } else if (lsd.charAt(3) == '/' && lsd.length <= 13) {
                lsd = lsd.replace(/-/g, '');
                lsd = lsd.replace('W', '');
                lsd = lsd.replace('/', '');
    
            if (lsd.length < 6 && lsd.length >= 3) {
                returnlsd = lsd.substring(0, 2) + '-' + lsd.substring(2);
            }
            if (lsd.length == 6) {
                returnlsd = lsd.substring(0, 2) + '-' + lsd.substring(2, 4) + '-' + lsd.substring(4, 6);
            }
            if (lsd.length > 6 && lsd.length <= 8) {
                returnlsd = lsd.substring(0, 2) + '-' + lsd.substring(2, 4) + '-' + lsd.substring(4, 6) + '-' + lsd.substring(6, 8);
            }
            if (lsd.length >= 9) {
                returnlsd = lsd.substring(0, 2) + '-' + lsd.substring(2, 4) + '-' + lsd.substring(4, 6) + '-' + lsd.substring(6, 8) + 'W' + lsd.substring(8, 9);
            }
            if (returnlsd == undefined) {
                return lsd;
            } else {
                return returnlsd;
            }
        }
        if (lsd.charAt(3) != '/' && lsd.length >= 4) {
            returnlsd = lsd.substring(0, 3) + '/' + lsd.substring(3);
        }
        if (lsd.charAt(6) != '-' && lsd.length >= 7) {
            returnlsd = lsd.substring(0, 6) + '-' + lsd.substring(6);
        }
        if (lsd.charAt(9) != '-' && lsd.length >= 10) {
            returnlsd = lsd.substring(0, 9) + '-' + lsd.substring(9);
        }
        if (lsd.charAt(12) != '-' && lsd.length >= 13) {
            returnlsd = lsd.substring(0, 12) + '-' + lsd.substring(12);
        }
        if (lsd.charAt(15) != 'W' && lsd.length >= 16 && lsd.charAt(15) != '-') {
            returnlsd = lsd.substring(0, 15) + 'W' + lsd.substring(15);
        }
        if (returnlsd == undefined) {
            return lsd;
        } else {
            return returnlsd;
        }
    }else if (lsd.length > 3 && lsd.length < 14) {
        //This is the formatting like 10-10-10-10w5
        //Chars 3, 6, and 9 need to be - 
        //char 12 needs to be a W
        //check to see if third character is a /. If it is, then we will reformat the string.
        if (lsd.charAt(3) == '/' && lsd.length == 10) {
            lsd = lsd.replace(/-/g, '');
            lsd = lsd.replace('W', '');
            lsd = lsd.replace('/', '');
            var lsd = lsd.substring(0, 2) + '-' + lsd.substring(2, 4) + '-' + lsd.substring(4, 6) + '-' + lsd.substring(7, 7);
        }

        if (lsd.charAt(2) != '-' && lsd.length >= 3) {
            returnlsd = lsd.substring(0, 2) + '-' + lsd.substring(2);
        }
        if (lsd.charAt(5) != '-' && lsd.length >= 6) {
            returnlsd = lsd.substring(0, 5) + '-' + lsd.substring(5);
        }
        if (lsd.charAt(8) != '-' && lsd.length >= 8) {
            returnlsd = lsd.substring(0, 8) + '-' + lsd.substring(8);
        }
        if (lsd.charAt(11) != 'W' && lsd.length >= 11) {
            returnlsd = lsd.substring(0, 11) + 'W' + lsd.substring(11);
        }
        if (returnlsd == undefined) {
            return lsd;
        } else {
            return returnlsd;
        }
    }else {
        return lsd;
    }
}

