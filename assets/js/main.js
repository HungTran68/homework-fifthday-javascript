console.log('hihi');
// Bai 1:  Viết 1 function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không. Nếu có trả về true, nếu không trả về false

// Đầu vào có 2 tham số : Tham số 1 là chuỗi ban đầu, tham số 2 là chuỗi cần kiểm tra

const checkStringExist = (a,b) => {
   console.log(a.includes(b));
}

checkStringExist('hung tran tien','huy');

// Bai 2: 

const shortenString = (string) => {
    let newstring = '';
    for (let i = 0; i < string.length; i++){
        if (i <=  8){
            console.log(newstring += string[i])
        }
        else{

        }
    }
}

shortenString('tran tien hung');

// Bai 5: Viết function truyền vào 1 chuỗi bất kỳ gồm nhiều từ. Hãy chuyển chuỗi đó thành dạng snake_case và viết thường

const changeText = (string) => {
    console.log(string.toLowerCase());
}

changeText("HHHHHH");




// Phan 2 Array --------------------------
console.log('--------------------Array BTVN 13----------------------');

const findNumber = (arr) => {
    let maxNumber = arr[0];
    for (let i =0 ; i < arr.length; i++){
        if (maxNumber < arr[i]){
            maxNumber = arr[i]
            
        }
    }
    console.log('so lon nhat la',maxNumber);
}


let arrayNum = [2,3,4,15,6,17,8,11];

findNumber(arrayNum);


// Bai 2 Tim so nho nhat

const findNumberSmallest = (arr) => {
    let maxNumber = arr[0];
    for (let i =0 ; i < arr.length; i++){
        if (maxNumber > arr[i]){
            maxNumber = arr[i]
            
        }
    }
    console.log('so be nhat la',maxNumber);
}


let arrayNumer = [2,3,4,15,6,17,8,11];

findNumberSmallest(arrayNumer);
// Bai 3 : Tim mang moi cac phan tu chia cho 2

let newArr = [4,8,6,8,2,2,14];

const findNewArrayNumber = (arr) => {
    let newArray = [];
    for ( let i = 0; i < arr.length; i ++){
        let newNumber = arr[i]/2;
        newArray.push(newNumber);

    }
    console.log(newArray);
}

findNewArrayNumber(newArr);

//  Bai 4 : Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lầ

const fourthWork = (string) => {
    console.log(string.repeat(10));
}

fourthWork('hung');

const fifthWork = (string) => {
    let newString = string + '-';
    console.log(newString.repeat(10))
}

fifthWork('a');