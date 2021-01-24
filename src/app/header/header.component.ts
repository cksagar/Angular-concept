import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  headerTitle = 'Recipe Book';
  imagePath = 'https://angular.io/assets/images/logos/angular/angular.svg';
  isAuthenticated = false;

  // userSub: Subscription; 
  // constructor(private dataStorageService: DataStorageService,
  //   private authService: AuthService) { }

  // ngOnInit(): void {
  //   this.userSub = this.authService.userSubject.subscribe(
  //     user => {
  //       // this.isAuthenticated = !user ? false : true;
  //       this.isAuthenticated = !!user;
  //       console.log(!user);
  //       console.log(!!user);
  //     }
  //   );
  // }


  // onSaveData() {
  //   this.dataStorageService.storeRecipes();
  // }

  // onFetchData() {
  //   this.dataStorageService.fetchRecipes()
  //     .subscribe();
  // }

  // onLogOut() {
  //   this.authService.logOut();
  //   // this.isAuthenticated = false;
  // }

  // ngOnDestroy(): void {
  //   this.userSub.unsubscribe();
  // }
}
