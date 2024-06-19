import { Component } from '@angular/core';
import { MessageInputComponent } from '../message-input/message-input.component';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-messages-display',
  standalone: true,
  imports: [MessageInputComponent, MessageComponent],
  templateUrl: './messages-display.component.html',
  styleUrl: './messages-display.component.css'
})
export class MessagesDisplayComponent {

}
