import { Component } from '@angular/core';
import { MessageComponent } from '../../components/message/message.component';
import { FooterComponent } from '../../../authentication/components/footer/footer.component';
import { UserSelectionComponent } from '../../components/user-selection/user-selection.component';
import { MessagesDisplayComponent } from '../../components/messages-display/messages-display.component';

@Component({
  selector: 'app-message-page',
  standalone: true,
  imports: [
    MessageComponent, 
    FooterComponent,
    UserSelectionComponent,
    MessagesDisplayComponent
  ],
  templateUrl: './message-page.component.html',
  styleUrl: './message-page.component.css'
})
export class MessagePageComponent {

}
