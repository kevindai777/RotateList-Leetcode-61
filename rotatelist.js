//Objective is to rotate a linked list, similar to 'Search in a Rotated Sorted Array'

class Node {
    constructor(data, next = null) { //if next is not given, assume it is empty
      this.data = data
      this.next = next
    }
}
  
class LinkedList {
    constructor() {
      this.head = null
    }

    addNodeToBack(data) {
        let current = this.head //initialize to beginning
    
        if (!this.head) { //if the list is empty...
            this.head = new Node(data)
        } else {
            while (current.next) {
                current = current.next //move along the list
            }
            current.next = new Node(data)
        }
    }
}

let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)

k = 2

//O(n) solution that connects the old tail to the old head and creates
//a new tail and head

if (!head) {
    return null
}

if (!head.next) {
    return head
}

let n 
let oldHead = head
for (n = 1; oldHead.next !== null; n++) {
    oldHead = oldHead.next
}
oldHead.next = head

let newTail = head 
for (let i = 0; i < n - (k % n) - 1; i++) {
    newTail = newTail.next
}
let newHead = newTail.next 
newTail.next = null 

return newHead