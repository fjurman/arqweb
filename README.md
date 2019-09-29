# Arquitectura Web | 2019

Trabajo práctico de Arquitectura Web

## Administración de alumnos

## Uso de la API
### Lista de todos los alumnos:
**METHOD GET**
```localhost:3000/v1/api/alumnos```

Leer 1 alumno:
	METHOD GET
	localhost:3000/v1/api/alumnos/"id"

Crear alumno:
	METHOD POST
	localhost:3000/v1/api/alumnos
		Contenido body ejemplo:
			{
			    "id": "4122",
			    "nombre": "blah",
			    "edad": "722",
		    	"materias":[{"id":"1","nombre":"Arq. Web"},{"id":"31","nombre":"Analisis Matemático"}]
			}

Eliminar alumno:
	METHOD DELETE
	localhost:3000/v1/api/alumnos/"id"

```
Descripción de la App.

```
