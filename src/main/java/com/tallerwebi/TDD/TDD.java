package com.tallerwebi.TDD;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class TDD {

    public static String validarFortaleza(String contrasenia) {

        if(contrasenia == null || contrasenia.isEmpty()){
            return "INVALIDA";
        } else{
            int cantidadDeLetras = contadorDeCaracteresBuscados("[a-zA-Z]{1}", contrasenia);
            int cantidadDeCaracteresEspeciales = contadorDeCaracteresBuscados("[-_%$?!@]{1}", contrasenia);
            int cantidadDeNumeros = contadorDeCaracteresBuscados("[0-9]{1}", contrasenia);

            if ( contrasenia.length() <= 8 && cantidadDeLetras == contrasenia.length() ) {
                return "DEBIL";
            } else if ( cantidadDeCaracteresEspeciales == 1 && cantidadDeNumeros == 1) {
                return "MEDIANA";
            } else {
                return "FUERTE";
            }
        }
    }

    public static int contadorDeCaracteresBuscados(String tipoDeCaracterBuscado, String palabraDondeBuscar) {
        Matcher buscadorDeCaracteres = Pattern.compile(tipoDeCaracterBuscado).matcher(palabraDondeBuscar);

        int cantidadDeCaracteres = 0;
        while (buscadorDeCaracteres.find()) {
            cantidadDeCaracteres++;
        }

        return cantidadDeCaracteres;
    }
}
