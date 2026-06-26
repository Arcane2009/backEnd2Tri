import java.util.Scanner;

public class Aula09B_ClasseScanner{

    public static void main(String[] args){
        Scanner teclado = new Scanner(System.in);
        Carro09 meuCarro = new Carro09();

        System.out.println("== Cadastro de Veículo ==");
        System.out.println("Digite o modelo do carro");
        meuCarro.modelo = teclado.nextLine();

        System.out.println("Digite a cor do carro");
        meuCarro.cor = teclado.nextLine();

        System.out.println("Digite o ano do carro");
        meuCarro.ano = teclado.nextInt();

        System.out.println("\n--- Carro cadastrado com sucesso ---")
        System.out.println(" Modelo " + meuCarro.modelo);
        System.out.println(" Cor " + meuCarro.cor);
        System.out.println(" Ano " + meuCarro.ano);

        teclado.close();
    }
}