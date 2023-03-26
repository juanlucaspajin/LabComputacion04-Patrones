package com.labcomp04;

import com.labcomp04.model.CuentaBancaria;

public class App {

	public static void main(String[] args) {

		CuentaBancaria cuentaAhorro = new CuentaBancaria();
		cuentaAhorro.setMonto(200);
		
		CuentaBancaria cuentaAhorro2 = new CuentaBancaria();
		
		CuentaBancaria cuentaClonada = (CuentaBancaria) cuentaAhorro.clonar();

		System.out.println(cuentaAhorro);
		System.out.println(cuentaAhorro2);
		System.out.println(cuentaClonada);
		
		if (cuentaClonada != null) {
			System.out.println(cuentaClonada);
		}
		System.out.println(cuentaClonada == cuentaAhorro);

	}

}