import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import * as feather from 'feather-icons';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'gs-navbar',
  standalone: true,
  imports: [ButtonComponent, NgClass, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    isMobile: boolean = false;
    isGone: boolean = false;

    ngAfterViewInit() {
        feather.replace();
    }

    navToggle(){
        if(this.isMobile == true) {
            this.isGone = false
            setTimeout(() => {
                this.isMobile = false
            }, 500);
        }
        else {
            this.isGone = true
            this.isMobile = true
        }
    }
}
