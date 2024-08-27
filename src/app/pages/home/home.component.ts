import { Component } from "@angular/core";
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CardsComponent } from "../../components/cards/cards.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CardsComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  listMenuExample = [
    { label: "Home", route: "/" },
    { label: "Contact", route: "/contact" }
  ];
}
