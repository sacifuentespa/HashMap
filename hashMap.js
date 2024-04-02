class HashMap {
    constructor() {
        this.buckets = new Array(16);
        this.PRIMENUMBER = 47;
        this.LOADFACTOR = 0.75;
    }

    checkLimit(index){
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bound");
          }
    }

    hash(key) {
        let hashCode = 0;
        key = key.toString();
        for (let i = 0; i < key.length; i++) {
            hashCode = (key.charCodeAt(i) * i * this.PRIMENUMBER + hashCode) % this.buckets.length;
        }
        return hashCode;
    }

    set(key, value){
        let hashKey = this.hash(key);
        if(this.buckets[hashKey]  === undefined){
            this.buckets[hashKey] = {key,value}
        } else if(this.buckets[hashKey].key === key){
            this.buckets[hashKey].value = value;
        }
    }

    get getBuckets() {
        console.log(this.buckets)
    }
}

let firstHash = new HashMap;

/*console.log(firstHash.hash("rafa"));
console.log(firstHash.hash("fara"));
console.log(firstHash.hash("rafa"));
console.log(firstHash.hash("fara"));
*/


console.log(firstHash.set(23));
console.log(firstHash.getBuckets);
console.log(firstHash.buckets[13]);
console.log(firstHash.set(23,56));
console.log(firstHash.getBuckets);
console.log(firstHash.buckets[13]);