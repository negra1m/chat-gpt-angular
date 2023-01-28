import { Component } from '@angular/core';

@Component({
  selector: 'app-popup',
  template: `
    <div class="popup-container" *ngIf="showPopup">
      <div class="popup-content">
        <button (click)="togglePopup()" id="close-popup-button">X</button>
        <div class="popup-header">
          <h3>Hello!</h3>
        </div>
        <div class="popup-body">
          <p>ChatGPT is a powerful language model created by OpenAI that can generate human-like text, answer questions, and complete a wide range of natural language tasks.</p>
          <p>This website is being built entirely with it!!</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    #close-popup-button {
      background: none;
      border: none;
      font-size: 18px;
      color: gray;
      cursor: pointer;
      position: relative;
      float: right;
    }
    .popup-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 10;
    }
    .popup-content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;
      border-radius: 10px;
      padding: 20px;
    }
    .popup-header {
      text-align: center;
    }
    .popup-body {
      text-align: center;
    }
  `]
})
export class PopupComponent {
  showPopup = false;

  togglePopup() {
    this.showPopup = !this.showPopup;
  }
}
