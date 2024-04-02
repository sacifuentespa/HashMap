class HashMap {
    constructor() {
        this.buckets = new Array(16);
        this.PRIMENUMBER = 47;
        this.LOADFACTOR = 0.75;
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
        let hashKey = this.hash(key);
        let index = this.findEmptyOrMatchingIndex(hashKey, key);
        this.buckets[index] = { key, value };
    }

    findEmptyOrMatchingIndex(startIndex, key) {
        let index = startIndex;
        do {
            if (this.buckets[index] === undefined || this.buckets[index].key === key) {
                return index;
            }
            index = (index + 1) % this.buckets.length;
        } while (index !== startIndex);
        throw new Error('HashMap is full');
    }


    get getBuckets() {
        console.log(this.buckets)
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