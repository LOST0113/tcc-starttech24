import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    
  }
  
  toggleCollapse() {
    const colapse = this.el.nativeElement.querySelector("colapse");
    
    this.renderer.setStyle(colapse, "display", "none");
  }
}
