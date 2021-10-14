# Diario del proyecto (A partir del 12 de Octubre de 2021)

## (12/10/21)
<hr>

<p>Lo primero para poder comenzar es un entorno <i>'sandbox'</i> para poder hacer pruebas a voluntad debemos ordenar apropiadamente la estructura del
objeto dode se guardarán los datos del inventario. Los datos y orden que se ha seleccionado con base en las necesidades del negocio son: </p>

![image text](journal_images/001.png)

<p>El evidente siguiente paso es hacer una función faker de estos datos para generar registros falsos a voluntad (esto con la finalidad de alimentar masivamente nuestro entorno sandbox sin demasiado esfuerzo), la función recibiría como parametro la cantidad de objetos falsos que se quieran generar y retorna un array con los objetos correspondientes.</p>

<p>los procesos de la función faker deben ser los siguientes:</p>

<ul>
    <li>id: será un cotador del parametro 'quantity'.</li>
    <li>name: será una concatenación de strings aleatorios referentes a nombres de camisas.</li>
    <li>model: será una concatenación de la primera letra de los parametros 'name' mas el parametro 'id'.</li>
    <li>image: será el parametro 'id' concatenado con el string '.png'.</li>
    <li>price: será un numero aleatorio entre 100 y 500.</li>
    <li>sizes: será un array de una cantidad x de tallas aleatorias.</li>
    <li>description: será [LOREM IPSUM] .</li>
    <li>color: será un valor aleatorio entre 0-5.</li>
    <li>stock: será valor aleatorio entre 1 y 20.</li>
    <li>type: será un valor al azar de un array.</li>
    <li>sales: será 0 (De momento).</li>

</ul>

<p>El parametro 'sales' puede ser usado para escribir una función que muestre al usuario los 'mas populares' o quiza 'mas populares entre SUS mas populares' ¿A que se refiere esto? a que están comprando las personas que tienen patrones similares de compras a el que el no está comprando. (Solo para usuarios registrados)</p>

<p>Despues de un rato esribí la función 'models_faker()' que recibe como parametro la cantidad de registros falsos a generar (N) y retorna un arreglo con N objetos de registros falsos</p>

![image text](journal_images/002.png)

<br>

![image text](journal_images/003.png)

<p>El ejemplo anterior se muestra con solo 3 objetos pero las posibilidades no son para nada restrictivas, a continuacíon se muestra un ejemplo con 100,000 modelos falsos generados en 0.39 segundos:</p>

![image text](journal_images/004.png)

<p>El paso siguiente es comenzar a escribir un faker de datos de compra (2:20 (Pasó la madrugada))</p>

<br>
<br>

## (13/10/21)
<hr>