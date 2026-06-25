//package 01_logica_basica;

public class Aula02_Operadores {
    public static void main(String[] args) {
        double nota1 = 8.5;
        double nota2 = 7.0;
        
        // Operadores aritméticos
        double media = (nota1 + nota2) / 2;
        System.out.println("Média das notas: " + media);

        // Operadores relacionais e lógicos
        boolean passou = media >= 7.0;
        boolean presencaMinima = true;
        
        boolean aprovadoFinal = passou && presencaMinima;
        System.out.println("O aluno foi aprovado? " + aprovadoFinal);
    }
}