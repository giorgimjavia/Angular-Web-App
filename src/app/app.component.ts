import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { Section1Component } from "./main/section-1/section-1.component";
import { Section2Component } from "./main/section-2/section-2.component";
import { Section3Component } from "./main/section-3/section-3.component";
import { FooterComponent } from "./footer/footer.component";
import { Section4Component } from "./section-4/section-4.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, Section1Component, Section2Component, Section3Component, FooterComponent, Section4Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-project-1';
}
