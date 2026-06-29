public class contaScanner {
    double saldo = 500.0;
    double verificarSaldo(){
        return saldo;
    }

    void sacar(double valor){
        if(valor <= saldo){
            saldo -= valor;
            System.out.println("Saque de R$ " + valor + " realizado!");
        }
        else{System.out.print("Saldo insuficiente para o saque de R$ " + valor);
            
        }
    }
}
