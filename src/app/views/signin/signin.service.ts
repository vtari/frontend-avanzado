import { Injectable } from '@angular/core';
import { FakeBackendService } from '../../shared/inmemory-db/inmemory-db.service';
import { User } from '../../shared/models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
   
    constructor(private fakeBackend: FakeBackendService, 
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private toastService: ToastrService) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }
    private getUsers() {
        return this.fakeBackend.createDb().users;
    }
    async login(email, password) {
        console.log(email);
        const users = this.getUsers();
        const user = users.find((user: any) => user.email === email && user.password === password);
        if (user != null) {
            localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        
        return user;     
       

       
   }
}

