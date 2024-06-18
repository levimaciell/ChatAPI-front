import { Component } from '@angular/core';
import { MessageComponent } from '../../components/message/message.component';

@Component({
  selector: 'app-message-page',
  standalone: true,
  imports: [MessageComponent],
  templateUrl: './message-page.component.html',
  styleUrl: './message-page.component.css'
})
export class MessagePageComponent {

}
