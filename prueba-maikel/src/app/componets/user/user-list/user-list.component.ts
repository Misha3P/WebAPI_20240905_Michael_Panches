import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/models';
import { CommonService } from 'src/app/services/common.service';
import { UserFormComponent } from '../user-form/user-form.component';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: CommonService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  openUserFormModal(userId?: number) {
    const modalRef = this.modalService.open(UserFormComponent);
    if (userId) {
      this.userService.getUser(userId).subscribe(user => {
        modalRef.componentInstance.user = user;
        modalRef.componentInstance.isEditMode = true;
      });
    } else {
      modalRef.componentInstance.isEditMode = false;
    }
  }

  openUserDetailsModal(userId: number) {
    const modalRef = this.modalService.open(UserDetailsComponent);
    this.userService.getUser(userId).subscribe(user => modalRef.componentInstance.user = user);

    modalRef.componentInstance.userUpdated.subscribe(() => {
      this.loadUsers(); // Recargar la lista de usuarios después de la actualización
    });
  }
}
