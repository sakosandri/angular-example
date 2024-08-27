import { Component } from "@angular/core";
import { ButtonComponent } from "../../shared/button/button.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-cards",
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: "./cards.component.html",
  styleUrl: "./cards.component.scss",
})
export class CardsComponent {
  getBtnValue(btnId: number) {
    alert("You clicked Btn: " + btnId);
  }
}
