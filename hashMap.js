class HashMap {
    constructor() {
        this.buckets = new Array(16);
        this.PRIMENUMBER = 47;
        this.LOADFACTOR = 0.75;
        this.size = 0;
    }

    hash(key) {
        let hashCode = 0;
        key = key.toString();
        for (let i = 0; i < key.length; i++) {
            hashCode = (key.charCodeAt(i) * i * this.PRIMENUMBER + hashCode) % this.buckets.length;
        }
        return hashCode;
    }

    set(key, value) {
         
        if (this.findMatchingIndex(key) === -1){
            this.size++
        } 
        let index = this.findEmptyOrMatchingIndex(key);
        this.buckets[index] = { key, value };
    }

    get(key) {

    // takes one argument as a key and returns the value that
    // is assigned to this key. 
    // If a key is not found, return null.

        let index = this.findMatchingIndex(key);
        return this.buckets[index] ? this.buckets[index].value : null;
    }

    has(key) {

        // takes a key as an argument and returns true 
        // or false based on whether or not the key is in the hash map.

        return this.findMatchingIndex(key) !== -1;
    }

    remove(key) {

        // takes a key as an argument. If the given key is in the hash map, 
        // it should remove the entry with that key and return true. 
        // If the key isn’t in the hash map, it should return false.

        let index = this.findMatchingIndex(key);
        if (index !== -1) {
            this.buckets[index] = undefined;
            this.size--;
            return true;
        }
        return false;
    }

    findEmptyOrMatchingIndex(key) {
        let startIndex = this.hash(key);
        let index = startIndex;
        do {
            if (this.buckets[index] === undefined || this.buckets[index].key === key) {
                return index;
            }
            index = (index + 1) % this.buckets.length;
        } while (index !== startIndex);
    }

    findMatchingIndex(key) {
        const startIndex = this.hash(key);
        let index = startIndex;
        do {
            if (this.buckets[index] && this.buckets[index].key === key) {
                return index;
            }
            index = (index + 1) % this.buckets.length;
        } while (index !== startIndex);
        return -1;
    }

    length(){
        // returns the number of stored keys in the hash map. 
        
        return this.size;
    }

    clear(){

        //removes all entries in the hash map.

        for(let i = 0; i < this.buckets.length; i++){
            this.buckets[i] = undefined;
        }
    }

    keys(){
        // returns an array containing all the keys inside the hash map.
        let keysArray = []
        for(let i = 0; i < this.buckets.length; i++){
            if (this.buckets[i] !== undefined){
                keysArray.push(this.buckets[i].key)
            }
        }
        return keysArray;
    }

    values(){
        // returns an array containing all the keys inside the hash map.
        let valuesArray = []
        for(let i = 0; i < this.buckets.length; i++){
            if (this.buckets[i] !== undefined){
                valuesArray.push(this.buckets[i].value)
            }
        }
        return valuesArray;
    }

    entries(){
        let entriesArray = []
        for(let i = 0; i < this.buckets.length; i++){
            if (this.buckets[i] !== undefined){
                entriesArray.push(this.buckets[i])
            }
        }
        return entriesArray;
    }

    get getBuckets() {
        return this.buckets;
    }
}

let firstHash = new HashMap;

/*console.log(firstHash.hash(23));

console.log(firstHash.hash(13));
console.log(firstHash.hash(33));
console.log(firstHash.hash(14));
*/



console.log(firstHash.set(23, 23));
console.log(firstHash.getBuckets);
console.log(firstHash.buckets[13]);
console.log(firstHash.set(23, 56));
console.log(firstHash.getBuckets);
console.log(firstHash.buckets[13]);

console.log(firstHash.set(13, 96));
console.log(firstHash.set(13, 46));
console.log(firstHash.set(33, 498));


console.log(firstHash.getBuckets);
console.log(firstHash.get(33));
console.log(firstHash.has(34));
console.log(firstHash.has(33));

console.log(firstHash.length());
console.log(firstHash.keys());
console.log(firstHash.remove(33));
console.log(firstHash.getBuckets);
console.log(firstHash.get(33));
console.log(firstHash.length());
console.log(firstHash.keys());
console.log(firstHash.values());
console.log(firstHash.entries());