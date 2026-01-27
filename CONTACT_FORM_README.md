# Contact Form Documentation

## Overview
The contact form has been successfully integrated into the website with the following features:

### Features
- **Multilingual Support**: Available in French, English, Russian, and Chinese
- **Form Fields**: 
  - First Name (required)
  - Last Name (required) 
  - Email (required)
  - Message (required)
- **Email Integration**: Uses mailto protocol to open user's default email client
- **Form Validation**: Client-side validation for all required fields
- **Loading States**: Shows loading spinner during form submission
- **Success/Error Messages**: User-friendly feedback in all languages

### Technical Implementation
- **Component**: `components/Contact.tsx`
- **Styling**: Tailwind CSS with consistent dark theme
- **Form Handling**: React state management with controlled inputs
- **Email Method**: Uses `mailto:` protocol for cross-platform compatibility

### Usage
1. Navigate to the Contact section (via header navigation or scrolling)
2. Fill in all required fields
3. Click "Send Message" button
4. Your default email client will open with pre-filled recipient and message content
5. Review and send the email

### Email Configuration
The form is configured to send emails to: `maxgaspard@example.com`
To change this, update the email address in the Contact component.

### Language Support
The contact form automatically adapts to the selected language:
- **French**: "Contact", "Prénom", "Nom", "Email", "Message", "Envoyer le Message"
- **English**: "Contact", "First Name", "Last Name", "Email", "Message", "Send Message"
- **Russian**: "Контакты", "Имя", "Фамилия", "Email", "Сообщение", "Отправить Сообщение"
- **Chinese**: "联系我们", "名字", "姓氏", "邮箱", "留言", "发送消息"