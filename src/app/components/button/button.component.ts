import { Component, Input } from '@angular/core';
import {NgClass} from '@angular/common';
import * as feather from 'feather-icons';

@Component({
  selector: 'gs-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})

export class ButtonComponent {
    @Input() isGradient: Boolean = false;
    @Input() iconButton!: String;
    @Input() textButton!: String;
    feather!: any;
    ngAfterViewInit() {
        feather.replace();
    }
}

