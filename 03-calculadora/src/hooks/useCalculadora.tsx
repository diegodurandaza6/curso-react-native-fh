import React, { useRef, useState } from 'react'
import { Operadores } from '../Enumerators';

export const useCalculadora = () => {
	
	const [numeroAnterior, setNumeroAnterior] = useState('0');
	const [numero, setNumero] = useState('0');

	const ultimaOperacion = useRef<Operadores>()

	const limpiar = () => {
		setNumero('0');
		setNumeroAnterior('0');
	}

	const armarNumero = (numeroTexto: string) => {

		//No aceptar doble punto
		if(numero.includes('.') && numeroTexto === '.') return;

		if(numero.startsWith('0') || numero.startsWith('-0')){
			//Punto decimal
			if(numeroTexto === '.'){
				setNumero(numero + numeroTexto)
			}
			//Evaluar si es otro cero, y hay un punto
			else if(numeroTexto === '0' && numero.includes('.')){
				setNumero(numero + numeroTexto)
			}
			//Evaluar si es diferente de cero y no tiene un punto
			else if(numeroTexto !== '0' && !numero.includes('.')){
				setNumero(numeroTexto)
			}
			//Evitar el 0000.0
			else if(numeroTexto === '0' && !numero.includes('.')){
				setNumero(numero)
			}
			else{
				setNumero(numero + numeroTexto)
			}
		}else{
			setNumero(numero + numeroTexto)
		}
	}

	const positivoNegativo = () => {
		if(numero.includes('-')){
			setNumero(numero.replace('-',''));
		}else if (numero !== '0'){
			setNumero(`-${numero}`)
		}
	}

	const btnDelete = () => {
		if(numero.length === 1 || numero.length === 2 && numero.includes('-')){
			setNumero('0');
		}else{
			setNumero(numero.substring(0, numero.length-1));
		}
	}

	const cambiarNumPorAnterior = () => {
		if(numero === '0') return;
		if(numero.endsWith('.')){
			setNumeroAnterior(numero.slice(0, -1));
		}else{
			setNumeroAnterior(numero);
		}
		setNumero('0');
	}

	const btnDividir = () => {
		cambiarNumPorAnterior();
		ultimaOperacion.current = Operadores.dividir;
		calcular();
	}

	const btnMultiplicar = () => {
		cambiarNumPorAnterior();
		ultimaOperacion.current = Operadores.multiplicar;
		calcular();
	}

	const btnRestar = () => {
		cambiarNumPorAnterior();
		ultimaOperacion.current = Operadores.restar;
		calcular();
	}

	const btnSumar = () => {
		cambiarNumPorAnterior();
		ultimaOperacion.current = Operadores.sumar;
		calcular();
	}

	const calcular = () => {
		const num1 = Number(numero);
		const num2 = Number(numeroAnterior);

		if(num1 === 0 || num2 === 0) return
		console.log(num2, num1)

		switch (ultimaOperacion.current) {
			case Operadores.sumar:
				setNumeroAnterior(`${num1 + num2}`)
				break;
			case Operadores.restar:
				setNumeroAnterior(`${num2 - num1}`)
				break;
			case Operadores.multiplicar:
				setNumeroAnterior(`${num1 * num2}`)
				break;
			case Operadores.dividir:
				setNumeroAnterior(`${num2 / num1}`)
				break;
		}

		//setNumeroAnterior('0');
	}
	
	return (
		{
			numero,
			numeroAnterior,
			limpiar,
			armarNumero,
			positivoNegativo,
			btnDelete,
			cambiarNumPorAnterior,
			btnDividir,
			btnMultiplicar,
			btnRestar,
			btnSumar,
			calcular,
		}
	)
}
