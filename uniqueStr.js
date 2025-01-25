let str = "abcdabcdefgggh";
 // function to get string with all unique elements.
function uniqueStr (str){
let ans = "";
for(let i=0; i<str.length; i++){
    let curChar = str[i];
    if(ans.indexOf(curChar) == -1 ){
         //if current charecter is not added the add it in ans.
         //otherwise it is a duplicate.
        ans+= curChar;
    }
}
return ans;
}
uniqueStr(str);
