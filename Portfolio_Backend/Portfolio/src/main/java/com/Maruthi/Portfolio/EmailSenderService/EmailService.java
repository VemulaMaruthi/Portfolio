package com.Maruthi.Portfolio.EmailSenderService;

import com.Maruthi.Portfolio.EmailSenderModel.EmailRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

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

        String body = """
        {
          "sender": {
            "name": "Portfolio Contact",
            "email": "no-reply@portfolio.com"
          },
          "to": [
            { "email": "maruthivemula95@gmail.com" }
          ],
          "subject": "New Portfolio Contact Message",
          "htmlContent": "<p><b>Name:</b> %s</p><p><b>Email:</b> %s</p><p><b>Message:</b> %s</p>"
        }
        """.formatted(
                request.getName(),
                request.getEmail(),
                request.getMessage()
        );

        HttpEntity<String> entity = new HttpEntity<>(body, headers);
        restTemplate.postForEntity(url, entity, String.class);
    }
}
