import { log } from "console";

export function convertDate(date: string) {
    const options = {month: "long", day: "numeric", year: "numeric"} as any;
    const date1 = new Date(date);
    return new Intl.DateTimeFormat("en-US", options).format(date1);
}
export function generateArr(totalItem:number){
    let result = []
    var x = totalItem %   9;
    let lengthPage = 0
    console.log(x);
    
    if(x>0){
        lengthPage = Math.floor(totalItem/9)+1
    }else{
        lengthPage = totalItem/9
    }
    for(let i =0;i<lengthPage;i++){
        result.push(i);
    }
    return result;
}