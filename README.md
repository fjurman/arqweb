# Arquitectura Web | 2019

Trabajo práctico de Arquitectura Web

## Administración de alumnos

## Uso de la API
### Lista de todos los alumnos: 

*__Metodo__: GET*
>http://localhost:3000/v1/api/alumnos  

<br>

### Leer 1 alumno:
*__Metodo__: GET*
>http://localhost:3000/v1/api/alumnos/{id}  

<br>

### Crear alumno:
*__Metodo__: POST*

>http://localhost:3000/v1/api/alumnos 
*Contenido body ejemplo*:

```
{
	"id": "4122",
	"nombre": "blah",
	"edad": "722",
	"fechaingreso": "22-10-1992"
}
```

### Eliminar alumno:
*__Metodo__: DELETE*
>http://localhost:3000/v1/api/alumnos/{id}
