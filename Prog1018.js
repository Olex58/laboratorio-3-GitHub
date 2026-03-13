import java.util.Scanner;
//problema    relacional
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Leer la cantidad de casos de prueba (t)
        if (sc.hasNextInt()) {
            int t = sc.nextInt();

            // Procesar cada uno de los t pares
            for (int i = 0; i < t; i++) {
                long a = sc.nextLong();
                long b = sc.nextLong();

                // Determinar la relación
                if (a > b) {
                    System.out.println(">");
                } else if (a < b) {
                    System.out.println("<");
                } else {
                    System.out.println("=");
                }
            }
        }
        sc.close();
    }
}