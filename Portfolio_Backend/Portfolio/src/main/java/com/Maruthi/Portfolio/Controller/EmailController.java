package com.Maruthi.Portfolio.Controller;

import com.Maruthi.Portfolio.EmailSenderModel.EmailRequest;
import com.Maruthi.Portfolio.EmailSenderService.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class EmailController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/send-email")
    public String sendEmail(@RequestBody EmailRequest request) {
        emailService.sendEmail(request);
        return "Email sent successfully";
    }
}
