let ordenAsc = (arr) => {
    if (arr.length === 1) {
        return true;
    }
    for(let i = 1; i < arr.length ;i += 1) {
        if (arr[i] < arr[i-1])
            return false;
    }
    return true
}

let main = () => {
    console.log(ordenAsc([1,2,2,3,6,7,19]));
    console.log(ordenAsc([12,2,9,6,7,19]));
    console.log(ordenAsc([4]));
    console.log(ordenAsc([4, 5]));
    console.log(ordenAsc([1,2,3,6,7,19,2]));
}
main();