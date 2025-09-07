package com.tallerwebi.TDD;

import org.junit.jupiter.api.Test;
import static com.tallerwebi.TDD.TDD.validarFortaleza;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;


public class TDDTest {

    //Preparación
    //Ejecución
    //Verificación


    //Es una cadena vacía o nula.
    @Test
    public void respuestaInvalidaSiEsUnaCadenaNula() {
        String contraseniaNula = null;
        String fortalezaDePassword =  validarFortaleza(contraseniaNula);

        assertThat(fortalezaDePassword,equalToIgnoringCase("INVALIDA"));
    }

    @Test
    public void respuestaInvalidaSiEsUnaCadenaVaciaoNula() {

        String contraseniaVacia = "";
        String fortalezaDePassword =  validarFortaleza(contraseniaVacia);

        assertThat(fortalezaDePassword,equalToIgnoringCase("INVALIDA"));

    }

    // Entre 1 y 8 caracteres.
    @Test
    public void respuestaDebilSiEsDeUnoAOchoCaracteres() {
        String contraseniaDebil = "abcdefgh";
        String fortalezaDePassword =  validarFortaleza(contraseniaDebil);

        assertThat(fortalezaDePassword,equalToIgnoringCase("DEBIL"));
    }

    //8 o más caracteres. Contiene 1 número y 1 carácter especial (-, _, %, $, ?, !, @)
    @Test
    public void respuestaMedianaSiMasDeOchoCaracteresUnNumeroUnCaracterEspecial() {
        String contraseniaMediana = "@1bcddef";
        String fortalezaDePassword =  validarFortaleza(contraseniaMediana);

        assertThat(fortalezaDePassword,equalToIgnoringCase("MEDIANA"));
    }

    //8 o más caracteres. Contiene al menos 4 letras, 2 o más números y 2 o
    //más caracteres especiales (-, _, %, $, ?, !, @).

    @Test
    public void respuestaFuerteSiHayMasOchoCaracteresUnNumeroUnCaracterEspecial() {
        String contraseniaFuerte = "12abcdef@$";
        String fortalezaDePassword =  validarFortaleza(contraseniaFuerte);

        assertThat(fortalezaDePassword,equalToIgnoringCase("FUERTE"));
    }

}
