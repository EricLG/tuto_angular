import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {


  public userForm: FormGroup;
  public usernameCtrl: FormControl;
  public passwordCtrl: FormControl;
  
  constructor(private fb: FormBuilder) {

   }

  ngOnInit() {
      this.usernameCtrl = this.fb.control('', [Validators.required, Validators.minLength(3)]);
      this.passwordCtrl = this.fb.control('', Validators.required);

      this.userForm = this.fb.group({
        username: this.usernameCtrl,
        password: this.passwordCtrl
      })
  }

  public register() {
    console.log(this.userForm)
    console.log(this.userForm.value)
  }

}
