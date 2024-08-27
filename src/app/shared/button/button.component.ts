import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-button",
  standalone: true,
  imports: [],
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.scss",
})
export class ButtonComponent {
  @Input() label: string = "";
  @Input() className: any = {};
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
  clickBtn() {
    this.onClick.emit();
  }
}
