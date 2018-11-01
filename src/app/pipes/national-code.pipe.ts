import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : "nationalcode"
})
export class NationalCodePIpe implements PipeTransform{
    transform(value : number, countryCode : string = 'IND') : string{
        if(countryCode == "US"){
            return "+01 " + value; 
        }
        return "+91 " + value;       
    }
}