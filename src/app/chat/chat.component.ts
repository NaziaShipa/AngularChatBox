import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  chatMessages: { sender: string, text: string }[] = [];
  newMessage: string = '';

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      // Add the new message to the chatMessages array
      this.chatMessages.push({
        sender: 'You', // Assuming the sender is the user for simplicity
        text: this.newMessage
      });

      // Clear the input field after sending the message
      this.newMessage = '';
    }
  }
}
