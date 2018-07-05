import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'capitalCase'
})
export class CapitalCasePipe implements PipeTransform {
    transform(value: string, ...args: string[]): string {
        if (!value) return value;
        return value.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    }
}