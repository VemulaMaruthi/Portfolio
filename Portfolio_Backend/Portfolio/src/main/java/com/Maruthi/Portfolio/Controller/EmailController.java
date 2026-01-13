package com.Maruthi.Portfolio.Controller;

import com.Maruthi.Portfolio.EmailSenderModel.EmailRequest;
import com.Maruthi.Portfolio.EmailSenderService.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<?> sendEmail(@RequestBody EmailRequest request) {
        try {
            emailService.sendEmail(request);
            return ResponseEntity.ok("Mail sent");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Mail failed");
        }
    }
}
