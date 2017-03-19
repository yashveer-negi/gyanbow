import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './login.html'
})
export class LoginComponent {
  
  onSubmit(submitted:any) {  
          console.log(submitted);
    }

 
}
