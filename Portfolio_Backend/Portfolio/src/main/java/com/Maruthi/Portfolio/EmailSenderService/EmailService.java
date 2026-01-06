package com.Maruthi.Portfolio.EmailSenderService;

import com.Maruthi.Portfolio.EmailSenderModel.EmailRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendEmail (EmailRequest request) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("maruthivemula95@gmail.com");
        message.setSubject("New Portfolio Contact Message");
        message.setText(
                "Name :" +request.getName()+
                "Email :" +request.getEmail()+
                "Message :" +request.getMessage()
        );
        mailSender.send(message);
    }
}
