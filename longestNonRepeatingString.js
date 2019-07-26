function findLongestSubstring(str) 
{ 
    let i; 
    let n = str.length; 
  
    // starting point of current substring. 
    let st = 0; 
  
    // length of current substring. 
    let currlen; 
  
    // maximum length substring without repeating  
    // characters. 
    let maxlen = 0; 
  
    // starting index of maximum length substring. 
    let start; 
  
    // Hash Map to store last occurrence of each 
    // already visited character. 
    let pos ={}
  
    // Last occurrence of first character is index 0; 
    pos[str[0]] = 0; 
  
    for (i = 1; i < n; i++) { 
  
        // If this character is not present in hash, 
        // then this is first occurrence of this 
        // character, store this in hash. 
        if (!pos[str[i]] ) {
            pos[str[i]] = i; 
        } 
        else { 
            // If this character is present in hash then 
            // this character has previous occurrence, 
            // check if that occurrence is before or after 
            // starting point of current substring. 
            if (pos[str[i]] >= st) { 
  
                // find length of current substring and 
                // update maxlen and start accordingly. 
                currlen = i - st; 
                if (maxlen < currlen) { 
                    maxlen = currlen; 
                    start = st; 
                } 
  
                // Next substring will start after the last 
                // occurrence of current character to avoid 
                // its repetition. 
                st = pos[str[i]] + 1; 
            } 
  
            // Update last occurrence of 
            // current character. 
            pos[str[i]] = i; 
        } 
    } 
  
    // Compare length of last substring with maxlen and 
    // update maxlen and start accordingly. 
    if (maxlen < i - st) { 
        maxlen = i - st; 
        start = st; 
    } 
  
    // The required longest substring without 
    // repeating characters is from str[start] 
    // to str[start+maxlen-1]. 
    return str.substr(start, maxlen); 
}

let  str = "GEEKSFORGEEKS";
console.log(findLongestSubstring(str));