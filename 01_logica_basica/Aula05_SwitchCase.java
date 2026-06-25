//package 01_logica_basica;

public class Aula05_SwitchCase {
    public static void main(String[] args) {
        int opcaoMenu = 2;

        // Estrutura de escolha (ótima para menus)
        switch (opcaoMenu) {
            case 1:
                System.out.println("Iniciando Novo Jogo...");
                break;
            case 2:
                System.out.println("Carregando Jogo Salvo...");
                break;
            case 3:
                System.out.println("Saindo do programa.");
                break;
            default:
                System.out.println("Opção inválida!");
                break;
        }
    }
}