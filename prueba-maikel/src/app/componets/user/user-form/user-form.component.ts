import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/models';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent {
  @Input() user!: User;
  @Input() isEditMode: boolean = false; // Ensure isEditMode has a default value

  constructor(public activeModal: NgbActiveModal, private userService: CommonService) {}

  saveUser() {
    if (this.isEditMode && this.user) {
      this.userService.updateUser(this.user.id, this.user).subscribe(() => {
        this.activeModal.close('User updated');
      });
    } else if (this.user) {
      this.userService.createUser(this.user).subscribe(() => {
        this.activeModal.close('User created');
      });
    }
  }
}
