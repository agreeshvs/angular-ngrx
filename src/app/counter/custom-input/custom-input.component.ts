import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement, toggleCustInput } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent implements OnInit{
  customValue: number = 10;
  showCustomInput: boolean = false;
  constructor(private store: Store<CounterState>) { }
  onCustomValueBtnClicked(){
    this.store.dispatch(
      customIncrement({value: +this.customValue})
    );
  }

  onToggleCustInput(){
    this.store.dispatch(toggleCustInput());
  }

  ngOnInit(): void {
    this.store.select('counter').subscribe( (data: any) =>{
      console.log("Custom-input observable");
      
      console.log(data);
      this.showCustomInput = data.toggle;
    })
    
  }
}
