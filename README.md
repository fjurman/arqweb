# Arquitectura Web | 2019

Trabajo práctico de Arquitectura Web

## Administración de alumnos

## Uso de la API
### Lista de todos los alumnos: 
<br />
*__Metodo__: GET*
>http://localhost:3000/v1/api/alumnos
<br />
### Leer 1 alumno:
*__Metodo__: GET*
>http://localhost:3000/v1/api/alumnos/{id}
<br />
### Crear alumno:
*__Metodo__: POST*
<br />
>http://localhost:3000/v1/api/alumnos

*Contenido body ejemplo*:

```
	{
    	"id": "4122",
    	"nombre": "blah",
    	"edad": "722",
	"materias":[{"id":"1","nombre":"Arq. Web"},{"id":"31","nombre":"Analisis Matemático"}]
	}
```
### Eliminar alumno:
*__Metodo__: DELETE*
>http://localhost:3000/v1/api/alumnos/"id"