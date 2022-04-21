# App

Recordar que lo primero que se debe hacer es reconstruir los módulos de Node:
```
npm install
```

## Algunas consideraciones
** 1.- Home **
Se carga una vista inicial con un pequeño mensaje de bienvenida.

** 2.- Agregar Nuevo Destinatario **
Para agregar un nuevo destinatario, se validan los siguientes campos a través de middlewares y middlewares personalizados:
- rut: campo obligatorio y se valida con una dependencia externa *rutlib* si el formato del rut es válido (formato de rut chileno).
- nombre: campo obligatorio.
- correo: campo opcional y en caso de que sea ingresado, se valida con una expresión regular si el formato del correo es correcto.
- teléfono: campo opcional y en caso de ser ingresado se valida sólo que tenga 9 dígitos.
- banco: campo obligatorio.
- tipo de cuenta: campo obligatorio.
- número de cuenta: campo obligatorio y se valida que sean sólo números. **Se valida que no exista el mismo número de cuenta almacenado anteriormente.**

** 3.- Transferir **
Para realizar una transferencia a una cuenta destino, se validan los siguientes campos:
- monto: campo obligatorio y númerico mayor a 0.
- cuenta de destino: campo obligatorio que corresponde al ID de la cuenta de destino.

** 4.- Historial **
No se requiere de validaciones.
- Se muestran las transferencias, desde la transferencia más nueva a la más antigua.

** 5.- 404 Page **
En caso de ingresar una ruta que no exista se carga una vista con un mensaje de página no encontrada.

** 6.- Navbar **
El navbar consta de 3 botones para navegar dentro de la aplicación y así realizzar las funcionalidades 2, 3 y 4.