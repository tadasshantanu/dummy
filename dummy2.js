let a = [1,2,3,4,1,4,5,5,5]
let map1 = new Map();
for(let i in a)
{
    if(map1.has(a[i]))
    {
        map1.set(a[i], map1.get(a[i])+1);
    } else {
    map1.set(a[i],1);
}
}
console.log(map1);



