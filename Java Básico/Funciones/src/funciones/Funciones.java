package funciones;
import java.util.Scanner;

public class Funciones {
	
	public static void main(String[] args) {

		Scanner input = new Scanner(System.in);

		// Getting float input
		System.out.print("Ingrese el precio: ");
		float precio = input.nextFloat();
		System.out.println("IVA: 15%");
		System.out.println("Precio total: " + precioIVA(precio));

        // closing the scanner object
        input.close();
	}
	
	public static float precioIVA(float precio) {
		return (float) ((precio * 0.15) + precio);
	}
	
}
