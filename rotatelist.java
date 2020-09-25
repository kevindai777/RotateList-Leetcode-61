//Java Solution

class Solution {
    public ListNode rotateRight(ListNode head, int k) {
        if (head == null) {
            return null;
        }
        
        int count = 1;
        ListNode curr = head;
        
        while (curr.next != null) {
            curr = curr.next;
            count++;
        }
        curr.next = head;
        
        ListNode newTail = head;
        for (int i = 0; i < count - (k % count) - 1; i++) {
            newTail = newTail.next;
        }
        ListNode newHead = newTail.next;
        newTail.next = null;
        
        return newHead;
    }
}