import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'app/model/Role.model';
import { Chaja3niService } from 'app/services/chaja3ni.service';

@Component({
  selector: 'app-ajouter-role',
  templateUrl: './ajouter-role.component.html',
  styleUrls: ['./ajouter-role.component.scss']
})
export class AjouterRoleComponent implements OnInit {
  public role:Role=new Role;

  constructor(    private service :Chaja3niService ,
    private router : Router,) { }
  onSubmit() {
    this.service.addNewRole(this.role).subscribe(
      role => {
      this.router.navigate(['liste_role']).then(()=>{
        window.location.reload()
      })
    })
  }
  ngOnInit(): void {
  }

}
