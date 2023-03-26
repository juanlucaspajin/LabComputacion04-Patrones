package com.labcomp04.model;

import com.labcomp04.inter.ICuenta;

public class CuentaBancaria implements ICuenta {
    private String tipo;
    private double monto;

    public CuentaBancaria() {
        tipo = 'CAJA DE AHORRO';
        monto = 0;
    }

    @override
    public ICuenta clonar() {
        CuentaBancaria cuenta = null;

        try {
            cuenta = (CuentaBancaria) clone();
        } catch (CloneNotSupportedException e) {
            e.printStackTrace();
        }

        return cuenta;
    }

    @override
    public String toString() {
        return "Cuenta de tipo: " + tipo + " con un monto: " + monto;
    }

    public void setMonto(double newMonto) {
        this.monto = newMonto;
    }

    public double getMonto() {
        return this.monto;
    }
}