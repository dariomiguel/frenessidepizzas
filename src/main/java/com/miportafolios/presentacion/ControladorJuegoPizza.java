package com.miportafolios.presentacion;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class ControladorJuegoPizza {

    @GetMapping("/")
    public String mostrarPaginaDelJuego() {
        return "pizza-frenzy";
    }
}