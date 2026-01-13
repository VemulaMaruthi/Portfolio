package com.Maruthi.Portfolio.EmailSenderService;

import com.Maruthi.Portfolio.EmailSenderModel.EmailRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@Service
public class EmailService {

    @Value("${BREVO_API_KEY}")
    private String brevoApiKey;

    private final RestTemplate restTemplate = new RestTemplate();

    public void sendEmail(EmailRequest request) {

        String url = "https://api.brevo.com/v3/smtp/email";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("api-key", brevoApiKey);
        headers.setAccept(MediaType.parseMediaTypes("application/json"));

        Map<String, Object> body = Map.of(
                "sender", Map.of(
                        "name", "Portfolio Contact",
                        "email", "maruthivemula95@gmail.com"   // 👈 MUST be a real email
                ),
                "to", new Object[]{
                        Map.of("email", "maruthivemula95@gmail.com")
                },
                "subject", "New Portfolio Contact Message",
                "htmlContent",
                "<p><b>Name:</b> " + request.getName() + "</p>" +
                        "<p><b>Email:</b> " + request.getEmail() + "</p>" +
                        "<p><b>Message:</b> " + request.getMessage() + "</p>"
        );

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(body, headers);

        ResponseEntity<String> response =
                restTemplate.postForEntity(url, entity, String.class);

        if (!response.getStatusCode().is2xxSuccessful()) {
            throw new RuntimeException("Brevo API failed: " + response.getBody());
        }
    }
}
