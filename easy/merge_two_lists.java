/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {

    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        //[1,2,4]
        //[1,3,4]

        //temp head
        ListNode temp = new ListNode(0);
        ListNode current = temp;

        //if one is null then return other one.
        if(list1 == null){
            return list2;
        };

        if(list2 == null){
            return list1;
        };

        while(list1 != null && list2 != null){
            //1. 1 < 1
            //current.next = 1
            //list2 = list2.next //3;

            //2. 1 < 3
            //current.next = 1;
            //list1 = list1.next //2;

            //3. 2 < 3
            //current.next = 2;
            //list1 = list1.next //4;

            //4. 4 < 3
            //current.next = 3
            //list2 = list2.next //4

            //5. 4 < 4
            //current.next = 4;
            //list2.next = null;

            if(list1.val < list2.val){ 
                current.next = list1;
                list1 = list1.next;
            } else {
                current.next = list2;
                list2 = list2.next;
            }
    
            current = current.next;

        }

        //if one's length is greater than other's'

        //6. while loop ended, but list1 still has val
        //current.next = 4
        //list1.next = null
        if(list1 != null){
            current.next = list1;
            list1 = list1.next;
        }

        if(list2 != null){
            current.next = list2;
            list2 = list2.next;
        }

        //temp = [0,1,1,2,3,4,4]
        //temp.next = [1,1,2,3,4,4] - result
        return temp.next;

    }
}