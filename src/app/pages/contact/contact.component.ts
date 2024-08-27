import { Component } from "@angular/core";
import { InputComponent } from "../../shared/input/input.component";
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ButtonComponent } from "../../shared/button/button.component";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [InputComponent, ButtonComponent, HeaderComponent, FooterComponent, ButtonComponent],
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.scss",
})
export class ContactComponent {
  menuListInContactPage = [
    { label: "Home", route: "/" },
    { label: "Contact", route: "contact" },
    { label: "About", route: "about" },
  ];
}
