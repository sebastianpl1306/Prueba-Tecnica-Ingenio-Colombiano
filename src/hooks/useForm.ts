import { useState, ChangeEvent } from 'react';
import { StateInputs } from '../interfaces';

//Permite controlar los campos de un formulario para poder cambiar su valor, hacer un reset del formulario.
export const useForm = <T extends StateInputs>( initialForm: T ) => {
    const [ formState, setFormState ] = useState<T>( initialForm );

    //Función que cambia el valor del campo cuando se escribe en el
    const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    //Deja el formulario en su estado inicial
    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}