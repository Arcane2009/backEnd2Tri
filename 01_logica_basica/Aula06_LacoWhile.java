
//package 01_logica_basica;

public class Aula06_LacoWhile {
    public static void main(String[] args) {
        int contador = 1;

        // Repete enquanto a condição for verdadeira
        while (contador <= 5) {
            System.out.println("Contagem Progressiva: " + contador);
            contador++; // Incremento importante para evitar loop infinito
        }
    }
}