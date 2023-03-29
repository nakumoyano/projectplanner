import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @ViewChild('navbar') navbarTop: ElementRef;

  changeColor: boolean = true;

  isScrolled: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  changeBgColor() {
    // this.changeColor = !this.changeColor;

    const asNavbar = this.navbarTop.nativeElement;
  }

  @HostListener('window:scroll')
  onScroll() {
    if (window.pageYOffset > 0) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
}
