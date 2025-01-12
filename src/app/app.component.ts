import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { HeroComponent } from "./components/hero/hero.component";
import { MemorialWallComponent } from "./components/memorial-wall/memorial-wall.component";
import { AboutusComponent } from "./components/aboutus/aboutus.component";
import { TestimonialsComponent } from "./components/testimonials/testimonials.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HeroComponent, RouterModule, AboutusComponent, TestimonialsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'memorial';
}
