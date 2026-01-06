package com.Maruthi.Portfolio.Controller;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
public class UserController {

    @GetMapping
    public String Greeting () {
        return "Welcome back maruthi to learn spring boot";
    }

    @GetMapping("/linkedIn")
    public void redirectToLinkedIn(HttpServletResponse response) throws IOException {
        response.sendRedirect("https://www.linkedin.com/in/vemulamaruthi/");
    }

    @GetMapping("/gitHub")
    public void redirectToGithub(HttpServletResponse response) throws IOException{
        response.sendRedirect("https://github.com/VemulaMaruthi");
    }

    @GetMapping("/github/Virtual-Study-Buddy")
    public void redirectToVirtualStudyBuddy(HttpServletResponse response) throws IOException {
        response.sendRedirect("https://github.com/VemulaMaruthi/virtual-study-buddy");
    }

    @GetMapping("/github/Budget-Planner")
    public void redirectToBudgetPlanner(HttpServletResponse response) throws IOException {
        response.sendRedirect("https://github.com/VemulaMaruthi/Budget_Planner");
    }

    @GetMapping("/github/AllRepo")
    public void redirectToAllRepo(HttpServletResponse response) throws IOException {
        response.sendRedirect("https://github.com/repos?");
    }

}
