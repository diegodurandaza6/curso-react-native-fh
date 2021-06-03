import React, { useState } from 'react'
import { View, Text } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/appTheme';

export const CalculadoraScreen = () => {

	const [numeroAnterior, setNumeroAnterior] = useState('0');
	const [numero, setNumero] = useState('0');

	const limpiar = () => {
		setNumero('0');
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
		}else{
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

	return (
		<View style={ styles.calculadoraContainer }>
			<Text style={ styles.resultadoPequeno }>{ numeroAnterior }</Text>
			<Text 
				style={ styles.resultado }
				numberOfLines={ 1 }
				adjustsFontSizeToFit
			>
				{ numero }
			</Text>

			{/* Fila de botones */}
			<View style={ styles.fila }>
				<BotonCalc texto="C" color="#9B9B9B" accion={ limpiar }/>
				<BotonCalc texto="+/-" color="#9B9B9B" accion={ positivoNegativo } />
				<BotonCalc texto="del" color="#9B9B9B" accion={ btnDelete } />
				<BotonCalc texto="/" color="#FF9427" accion={ limpiar } />
			</View>

			{/* Fila de botones */}
			<View style={ styles.fila }>
				<BotonCalc texto="7" accion={ armarNumero } />
				<BotonCalc texto="8" accion={ armarNumero } />
				<BotonCalc texto="9" accion={ armarNumero } />
				<BotonCalc texto="x" color="#FF9427" accion={ limpiar } />
			</View>

			{/* Fila de botones */}
			<View style={ styles.fila }>
				<BotonCalc texto="4" accion={ armarNumero } />
				<BotonCalc texto="5" accion={ armarNumero } />
				<BotonCalc texto="6" accion={ armarNumero } />
				<BotonCalc texto="-" color="#FF9427" accion={ limpiar } />
			</View>

			{/* Fila de botones */}
			<View style={ styles.fila }>
				<BotonCalc texto="1" accion={ armarNumero } />
				<BotonCalc texto="2" accion={ armarNumero } />
				<BotonCalc texto="3" accion={ armarNumero } />
				<BotonCalc texto="+" color="#FF9427" accion={ limpiar } />
			</View>

			{/* Fila de botones */}
			<View style={ styles.fila }>
				<BotonCalc texto="0" accion={ armarNumero } ancho/>
				<BotonCalc texto="." accion={ armarNumero } />
				<BotonCalc texto="=" color="#FF9427" accion={ limpiar } />
			</View>

		</View>
	)
}
