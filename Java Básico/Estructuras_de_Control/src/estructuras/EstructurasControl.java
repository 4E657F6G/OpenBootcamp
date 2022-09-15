package estructuras;

import java.util.Scanner;

public class EstructurasControl { 
	public static void main(String[] args) {
		String salir = 'N'; 
		String nuevoNombre = null;
		String[] nombres = null;
		Scanner sc = new Scanner(System.in);
		do {
			System.out.println("Ingresa un nuevo nombre: ");
			nuevoNombre += sc.nextLine();
			System.out.println("Los nombre ingresados han sido: " + nuevoNombre);
			System.out.println("¿Desea salir del bucle? S/N");
			salir = sc.nextLine().toString();
			if(salir == 'S' || 's') {
				break;
			}
		}while(salir == 'N');
	}

}
