# E-Commerce App - React Native

Una aplicación de comercio electrónico desarrollada con React Native que ofrece una experiencia de compra completa y fácil de usar.

## Funcionalidades Principales

### Pantalla de Cuenta

- **Acceso seguro:** Solo los usuarios autenticados pueden acceder a la pantalla de perfil y realizar compras.
- **Información del usuario:** Muestra detalles del usuario, como nombre y dirección.

<img src="./Screenshots/inicioSesion.jfif" width="300" >
<img src="./Screenshots/registro.jfif" width="300" >

### Autenticación con Firebase

- Utiliza el sistema de autenticación de Firebase para gestionar el acceso de usuarios.
- Permite a los usuarios iniciar sesión y registrarse de manera segura.

### Pantalla de Categorías

- Muestra una selección de categorías en tarjetas.
- Al hacer clic en una categoría, se navega a la pantalla de productos correspondiente.

### Pantalla de Productos

- Lista todos los productos en tarjetas con nombre y foto.
- Incluye un buscador para filtrar productos por nombre.
- Al hacer clic en un producto, se navega a la pantalla de detalles del producto.

### Pantalla de Detalles del Producto

- Proporciona una descripción detallada del producto.
- Muestra el precio y el stock disponible.
- Permite agregar el producto al carrito.

<img src="./Screenshots/detalleDeProducto.jfif" width="300" >
<img src="./Screenshots/carrito.jfif" width="300" >


### Navegación Inferior

```javascript
     const TabNavigator = () => {
    return (
        <Tab.Navigator
                initialRouteName="ShopStack"
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarHideOnKeyboard: true,
                    tabBarStyle: styles.tabBar,
                    
                }}
            >
                <Tab.Screen
                    name="ShopStack"
                    component={ShopStack}
                    options={{
                        tabBarIcon: ({ focused }) => <TabBarIcon title="Categorias" nameIcon="menu" focused={focused} />
                    }}
                />
                <Tab.Screen
                    name="OrderStack"
                    component={OrderStack}
                    options={{
                        tabBarIcon: ({ focused }) => <TabBarIcon title="Ordenes" nameIcon="text-document-inverted" focused={focused} />
                    }}
                />
                    <Tab.Screen
                        name="CartStack"
                        component={CartStack}
                        options={{
                            tabBarIcon: ({ focused }) => <TabBarIcon title="Carrito" nameIcon="shopping-cart" focused={focused} />
                        }}
                    />
                    <Tab.Screen
                        name="ProfileStack"
                        component={ProfileStack}
                        options={{
                            tabBarIcon: ({ focused }) => <TabBarIcon title="Perfil" nameIcon="user" focused={focused} />
                        }}
                    />
            </Tab.Navigator>
    )
}


```

- **Pestaña 1 - Productos:** Categorías y productos (stack principal).
- **Pestaña 2 - Carrito:** Detalles del carrito de compras con resumen y botón para finalizar la orden.
- **Pestaña 3 - Órdenes:** Historial de órdenes realizadas.
- **Pestaña 4 - Perfil:** Información del usuario, ubicación y carga de imagen de perfil.

<img src="./Screenshots/Categorias.jfif" width="300" >
<img src="./Screenshots/carrito.jfif" width="300" >
<img src="./Screenshots/ordenes.jfif" width="300" >
<img src="./Screenshots/perfil.jfif" width="300" >

## Tecnologías Utilizadas

- **Firebase Authentication:** Implementa el sistema de autenticación de Firebase para gestionar la seguridad de la aplicación.
- **React Native Navigation Stack:** Gestiona la navegación entre pantallas.
- **React Native Navigation Buttom tap:** Gestiona la navegación entre pestañas.
- **Expo-Location:** Permite acceder y gestionar la ubicación del usuario.
- **Expo-Picker-Image:** Facilita la carga de imágenes de perfil.
- **Redux:** Centraliza y gestiona el estado de la aplicación.
- **RTK Query y Firebase:** Realiza operaciones de lectura/escritura en la base de datos.

## Instalación

1. Clona el repositorio: `mi github https://github.com/dmbruno`
2. Instala las dependencias: `npm install`
3. Configura las claves de API para servicios externos (Expo-Location, Firebase, etc.).
4. Configura las credenciales de Firebase en tu proyecto.
5. Ejecuta la aplicación: `npm start`
6. Si la queres probar en android, te dejo el link para descargar el APK https://expo.dev/accounts/hongobr/projects/MenuGrizly/builds/b9718493-8301-4f9c-aebb-f114de0a1394