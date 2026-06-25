//package 01_logica_basica;

public class Aula04_CondicaoElse {
    public static void main(String[] args) {
        double nota = 5.5;

        // Condicional composta
        if (nota >= 7.0) {
            System.out.println("Aprovado direto!");
        } else if (nota >= 5.0) {
            System.out.println("Recuperação. Ainda há uma chance.");
        } else {
            System.out.println("Reprovado.");
        }
    }
}