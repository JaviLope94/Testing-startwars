
requisitos: URL swapi: https://swapi.dev/

## Ejercicio 1

    1º En el fichero exercise.js crear un nuevo caso de prueba: Se va a testear la ruta /film/:episode (ejemplo -> films/2/)

        > El episode que vamos a testear es el número 1 ( la amenaza fantasma )

        > Crear la sintaxis básica para poder testear dicha ruta, datos necesarios, estructura, mocks...

        > Comprobar que el status es correcto.

        > Comprobar que el valor de la respuesta tiene una variable "title": "A New Hope". En este momento deberías ver que algo no
        funciona, la variable title no tiene ese valor, ¿qué esta pasando? - """Comentemoslo en alto en la llamada""".

        > Una vez sepamos cual era el problema, hay que corregir los mocks y el valor del episodio que queremos comprobar

        > Comprobar que el status es correcto, comprobar que la respuesta que nos da el servidor es la que esperábamos

        > Comprobar que la respuesta del servicio es un JSON, tiene sentido que sea un JSON?

        > Comprobar que el valor de la respuesta tiene una variable "title": "A New Hope". Posteriormente comprobar que el valor recibo es un string y que el valor tiene un .lenght de 10.

        > Por último en el package.json crear un nuevo scripy para ejecutar el test y comprobar errores y solucionar


## Ejercicio 2

    