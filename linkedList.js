class LinkedList {
    constructor() {
        this.head = null;
    }

    // prepend(value) adds a new node containing value to the start of the list;
    prepend(value) {
        if (this.head === null) {
            this.head = value;
            return;
        }
        let tempHead = this.head;
        this.head = value;
        this.head.next = tempHead;
        return;
    }

    // append(value) adds a new node containing 
    // value to the end of the list
    append(value) {
        if (this.head === null) {
            this.head = value;
            return;
        }

        let current = this.head;

        while (current.next !== null) {
            current = current.next
        }
        current.next = value;

        return;
    }

    // size returns the total number of nodes in the list
    get size() {
        let size = 0
        if (this.head === null) {
            return size
        }
        let current = this.head;
        size++;
        while (current.next !== null) {
            current = current.next;
            size++;
        }
        return size;
    }

    // headList returns the first node in the list
    get headList() {
        return this.head;
    }

    // tail returns the last node in the list
    get tail() {
        if (this.head === null) {
            return this.head
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        return current;
    }

    // at(index) returns the node at the given index
    at(index) {
        if (this.size <= index) {
            return "error index is bigger than last index"
        }
        else if (this.head === null) {
            return this.head
        }

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    // pop removes the last element from the list
    /* firstImplementation pop
    
    pop(){
        if(this.head === null){
            return "this is an empty list";
        }
        let current = this.head;
        while(current.next.next !== null){
            current = current.next;
            if (current.next.next === null){
                current.next = null;
                return;
            }            
        }
    }*/

    pop() {
        let itemToPopChange = this.at(this.size - 2);
        itemToPopChange.next = null;
        return;
    }

    // contains(value) returns true if the passed in value is 
    // in the list and otherwise returns false.
    contains(value) {
        let current = this.head;
        if (current === null) {
            return false;
        }
        while (current !== null) {
            if (current.data === value) {
                return true;
            }
            current = current.next;
        }

        return false;
    }

    // find(value) returns the index of the node 
    // containing value, or null if not found.

    find(value) {
        let current = this.head;
        let index = 0;
        const listSize = this.size
        if (listSize === 0) {
            return null;
        }

        while (index < listSize) {
            if (current.data === value) {
                return index;
            }
            current = current.next;
            index++;
        }
        return null
    }

    get toString() {
        let nodes = [];
        let current = this.head;

        while (current !== null) {
            nodes.push(current.data);
            current = current.next;
        }
        nodes.push("null");

        return nodes.join(' -> ');
    }

    // insertAt(value, index) that inserts a new node 
    // with the provided value at the given index.

    insertAt(value, index) {
        const listSize = this.size;
        if (listSize === 0 || index === 0) {
            if (listSize === 0) {
                console.log("The list was empty, added in index 0")
            }
            this.prepend(value);
            return;
        }
        if (index >= listSize) {
            console.log("added at the end of the list")
            this.append(value);
            return;
        }

        let previousNode = this.at(index-1); 
        let actualNode = this.at(index);
        
        value.next = actualNode;
        previousNode.next = value;

        return;
    }

    removeAt(index){
        const listSize = this.size;
        if(index >= listSize){
            console.log("the index is bigger than list size");
            return;
        }
        
        if(index === listSize -1){
            this.pop();
            return;
        }

        if(index === 0){
            this.head = this.at(index+1);
            return;
        }
        
        let previousNode = this.at(index-1); 
        previousNode.next = previousNode.next.next;
        return
    }

}


export default LinkedList;