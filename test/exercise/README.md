
requisitos: URL swapi: https://swapi.dev/

NOTA: en el package.json teneis el script para ejecutar los test del ejercicio

## Ejercicio 1

    - En el fichero exercise.js crear un nuevo caso de prueba: Se va a testear la ruta /film/:episode (ejemplo -> films/2/)

        > El episode que vamos a testear es el número 1 ( la amenaza fantasma )

        > Crear la sintaxis básica para poder testear dicha ruta, datos necesarios, estructura, mocks...

        > Comprobar que el status es correcto.

        > Comprobar que el valor de la respuesta tiene una variable "title": "A New Hope". En este momento deberías ver que algo no
        funciona, la variable title no tiene ese valor, ¿qué esta pasando? - """Comentemoslo en alto en la llamada""".

        > Una vez sepamos cual era el problema, hay que corregir los mocks y el valor del episodio que queremos comprobar

        > Comprobar que el status es correcto, comprobar que la respuesta que nos da el servidor es la que esperábamos

        > Comprobar que la respuesta del servicio es un JSON, tiene sentido que sea un JSON?

        > Comprobar que el valor de la respuesta tiene una variable "title": "A New Hope". Posteriormente comprobar que el valor recibo es un string y que el valor tiene un .lenght de 10.

        > Comprobar errores y solucionar en caso de que sea necesario


## Ejercicio 2

    - En el fichero exercise.js crear un nuevo caso de prueba: Se va a testear la ruta /people/:id (ejemplo -> people/1/)
    
        > La persona que vamos a testear es la número 4

        > Crear la sintaxis básica para poder testear dicha ruta, datos necesarios, estructura, mocks...

        > Comprobar que el status es correcto.

        > BUM! Problema de nuevo, que esta pasando? -- De nuevo, intentad ver cual es el problema y lo comentamos en alto.

        > Una vez sepamos cual era el problema, hay que corregir los mocks y el valor del episodio que queremos comprobar

        > Comprobar que el status es correcto, comprobar que la respuesta que nos da el servidor es la que esperábamos

        > Comprobar que el status es correcto. Aplicar assert, expect & should para comprobar el status

        > En la respuesta del servidor de la petición, el json devuelto debería tener una propiedad llamada films:

            > Crear una con los resultados del atributo film

            > Mediante un assert, expect & should comprobar que la longitud de la variable es = 4. 
        
        > Por último comprobar que la petición que obtenemos tiene un header con el siguiente nombre y valor

            name: vary & value=origin 



