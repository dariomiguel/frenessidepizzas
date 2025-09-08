package com.tallerwebi.presentacion;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping; 

@Controller
public class ControladorJuegoPizzaFrenzy {

    @GetMapping("/juego-pizza-frenzy")
    public String mostrarJuegoPizzaFrenzy(Model model) {
        return "juego-pizza-frenzy";
    }
}
