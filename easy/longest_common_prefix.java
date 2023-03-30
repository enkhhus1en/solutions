class Solution {
    public String longestCommonPrefix(String[] strs) {
        //strs = ["flower","flow","flight"]
        if(strs.length == 0) return "";
        String prefix = strs[0]; //first string of array - flower
        for(int i = 1; i < strs.length; i++){
            while(strs[i].indexOf(prefix) != 0){
                prefix = prefix.substring(0, prefix.length() - 1);
                //1. "flow".indexOf("flower") = -1; condition true; prefix = "flowe" 
                //1.1. "flow".indexOf("flowe") = -1; condition true; prefix = "flow"
                //1.2. "flow".indexOf("flow") = 0; condition false; end of first while loop

                //2. "flight".indexOf("flow") = -1; condition true; prefix = "flo"
                //2.1 "flight".indexOf("flo") = -1; condition true; prefix = "fl"
                //2.2 "flight".indexOf("fl") = 0; condition false; prefix = "fl"; end of the second while loop
                if(prefix.isEmpty()) return ""; 
            }
            //end of for loop; prefix = "fl"
        }
        return prefix; //fl
    }
}