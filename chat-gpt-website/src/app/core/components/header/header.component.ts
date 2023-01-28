import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  /* First version */
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}

//   menuOpen = false;

//   @ViewChild('menu', {static: false}) menu!: ElementRef;

//   toggleMenu() {
//     this.menuOpen = !this.menuOpen;
//     if (this.menuOpen) {
//       this.menu.nativeElement.classList.remove("hidden");
//     } else {
//       this.menu.nativeElement.classList.add("hidden");
//     }
//   }
// }
