// Wednesday : Search and Replace

// Perform a search and replace the sentence using the arguments provided and return the new sentence.

// The first argument is the sentence to perform the search and replace on.
// The second argument is the word that you will be replacing (before).
// The third argument is what you will be replacing the second argument with (after).
// NOTE: Preserve the case of the original word when you are replacing it.

// specify a string
// define a function that takes 3 strings parameters
//transform a string to an array using string methods
//for loop to iterate through the array
//if condition to check, if the giving word has a match in the array
//in case of true, check if the first capital letter
//replace the the required word with the new word starting with cap letter, if it's true
//otherwise - replace without case change
//join the array to the string
//return the string

let st  = 'quick Brown Fox jumped over  the lazy dog';
//st.toLowerCase;
function SearchAndReplace (string, before, after) {
    let arr=string.trim().split(' ');
    for (let i=0; i<arr.length; i++){
        if(arr[i].toLowerCase()==before.toLowerCase()){
            if (arr[i][0]==arr[i][0].toUpperCase()){
                arr[i]=after[0].toUpperCase()+after.slice(1)
            }else{
                arr[i]=after
            }
        }
    }
    return arr.join(' ');
}
console.log(SearchAndReplace(st, 'Brown', 'yellow'))

