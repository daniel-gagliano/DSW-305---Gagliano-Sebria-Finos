# Propuesta TP DSW

## Grupo
### Integrantes
* 42895 - Gagliano Gustavo Daniel
* 46413 - Tomas Sebriá
* 45283 - Finos Fabrizio

### Repositorios
* [frontend app](https://github.com/daniel-gagliano/DSW-305-FrontEnd--Gagliano-Sebri-FinosDSW-305---Gagliano-Sebria-Finos)
* [backend app](https://github.com/daniel-gagliano/DSW-305-BackEnd--Gagliano-Sebri-FinosDSW-305---Gagliano-Sebria-Finos)


## Tema
### Descripción
Este sistema de ecommerce es una plataforma web diseñada para facilitar la compra y venta de productos en línea. Permite a los usuarios explorar un catálogo digital, buscar artículos por categoría o palabra clave, agregar productos al carrito y realizar pagos de forma segura.

El sistema incluye funcionalidades tanto para clientes como para administradores:

Clientes pueden:

* Registrarse e iniciar sesión.

* Navegar por productos.

* Agregar artículos al carrito y gestionar su compra.

* Realizar pagos a través de métodos integrados.

* Consultar el historial de pedidos.

Administradores pueden:

* Administrar productos, inventario y categorías.

* Administrar usuarios y sus pedidos.

* Generar reportes de ventas.

### Modelo
* [DER del Sistema](https://drive.google.com/file/d/1BZQoahF2bSY6CTUdq1yX23VDhRBcwiT6/view?usp=drive_link)

## Alcance Funcional 

### Alcance Mínimo

Regularidad:
|Req|Detalle|
|:-|:-|
|CRUD simple|1. CRUD Categoria<br>2. CRUD Metodo_Pago<br>3. CRUD Usuario|
|CRUD dependiente|1. CRUD Articulo {depende de} CRUD Categoria<br>2. CRUD Cliente {depende de} CRUD Usuario|
|Listado<br>+<br>detalle| 1.Listado de productos filtrado por categoría o nombre: Muestra nombre del producto, imagen, precio y disponibilidad.<br>2. Listado de pedidos filtrado por rango de fechas o estado del pedido: Muestra número de pedido, fecha, estado y total.|
|CUU/Epic|1. Comprar un producto en línea: El cliente puede buscar productos, agregarlos al carrito, y completar el proceso de compra con pasarela de pago integrada.<br>2. Gestionar el catálogo de productos: El administrador puede crear, editar, eliminar y visualizar productos con sus respectivos precios, imágenes y stock disponible.|


Adicionales para Aprobación
|Req|Detalle|
|:-|:-|
|CRUD |1. CRUD Categoria<br>2. CRUD Articulo<br>3. CRUD Pedido<br>4. CRUD Metodo_Pago<br>5. CRUD Cliente<br>6. CRUD Usuario<br>7. CRUD Admin<br>8. CRUD Localidad<br>9. CRUD Provincia<br>|
|CUU/Epic|1. Comprar un producto en línea: El cliente puede buscar productos, agregarlos al carrito, y completar el proceso de compra con pasarela de pago integrada.<br>2. Gestionar el catálogo de productos:El administrador puede crear, editar, eliminar y visualizar productos con sus respectivos precios, imágenes y stock disponible.<br>3. Consultar el historial de compras:Los usuarios registrados pueden ver sus compras pasadas, con detalles de cada pedido.|


### Alcance Adicional Voluntario


