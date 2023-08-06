let arr = [1,3,5,7,9];


function binarySearch(arr,item){
    let low = 0,high= arr.length - 1;
    while (low <= high) {
        let mid =Math.round((low + high)/2), guess = arr[mid];
        if (guess === item) {
            return mid;
        }else if (guess < item){
            low = mid + 1;
        }else {
            high = mid - 1;
        }
    }
    return false;
};

console.log(binarySearch(arr,9));

//////////////////////////////////

function quickSort(arr){       
    if(arr.length <2){
        return arr;
    }
    let pivot =arr[0];
    let leftArr =[];
    let rightArr =[];
     
    for(let i =1;i<arr.length;i++){
        if(arr[i] < pivot ){
            leftArr.push(arr[i]);
        }else {
            rightArr.push(arr[i]);
        }        
    }
    return [...quickSort(leftArr), pivot ,...quickSort(rightArr)];
}

console.log(quickSort([15,10,20,5]));

//////////////////////////////////
// Hashtable in js

const mapp = new Map();

mapp.set("map1",10);
mapp.set("map2",20);

console.log(mapp.get("map1"));
console.log(mapp.get("map2"));


//////////////////////////////// implement hashtable

class HashTable{
    constructor(){
        this.table = new Array(127);
        this.size =0;
    }

    // method
    _hash(key){
        let hash=0;
        for(let i=0;i<key.length;i++){
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }

    set(key,value){
        let index = this._hash(key);
        this.table[index] = [key,value];
        this.size++;
    }

    get(key){
        const index = this._hash(key);
        return this.table[index];
    }
}


const hashh =new HashTable();

hashh.set("Ahmed",10);

console.log(hashh.get("Ahmed"));
