import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: "root",
})

export  class CounterService{
    counterValue: BehaviorSubject<number> = new BehaviorSubject<number>(0);

    increment(count: number){
        this.counterValue.next(count);
    }
    decrement(count: number){
        this.counterValue.next(count);
    }
    reset(){
        this.counterValue.next(0);
    }
}