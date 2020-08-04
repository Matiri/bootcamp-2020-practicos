# Ejercicio State, Render condicional y Forms

El objetivo de este ejercicio es poder practicar los conceptos de `State`, `Render condicional` y `Forms` con React. Al finalizarlo seras capaz de manejar estos conceptos, que son el 70% de todo lo que tienes que saber con React.

## Entrega

Crea una aplicación con `CRA` y subela con tu nombre en la carpeta del ejercicio, haz un PR.

### Requerimientos

Se deberá crear una página que contenga un elemento de tipo `<select />` con dos opciones:

1. Mostrar lista
2. Mostrar form

Puedes consultar [la documentación oficial sobre forms](https://es.reactjs.org/docs/forms.html#the-select-tag) y como implementa un `<select />` con estado.

*Al seleccionar la opción "Mostrar lista"* se deberá `renderizar` una lista con los siguientes valores:

```js
["Uno", "Dos", "Tres", "Cuatro"];
```

Para ello debes utilizar un componente reutilizable (no poner los 4 valores fijos en el return del componente), y recorrer la lista con un `.map`, [puedes revisar la documentación oficial de react sobre listas](https://es.reactjs.org/docs/lists-and-keys.html).

*Al seleccionar la opción "Mostrar form"* se deberá `renderizar` un form con un `<input />` de tipo `text`. Deberas registrar lo que el usuario carga en este input en el state, utilizando `useState`, puedes consultar la documentación sobre forms y sobre useState en la documentación de React.

Además, deberás agregar un botón, que al clickearlo deberá mostrar un alert con el valor ingresado en el input, obteniendolo del estado.

TIP: Deberás consultar la documentación de render condicional, para que dependiendo de la opción seleccionada en el select, se cargue la lista o el form. El valor del select, también deberás guardarlo en el state para poder condicionar el render.
