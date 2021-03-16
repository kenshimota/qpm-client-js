# Documentation the errors into QPM API

## methods with error

### updatePropertiesForBoxID
Cuando envias un id no encontrado solo returna 0 y no reporta 
que hubo un error de un BoxId no encontrado.

### addBoxForCalc
Cuando realizas una solicitud dice que no existe el key box_class en la solicitud, 
pero no esta documentado. con referencia a ello.
<b>response: </b>
```json
{ "error": "The key [BOX_CLASS] does not exist, but there is a similar key with name [box_allowheight] available. Here is a complete list of all available keys: [box_allowheight,box_allowlength,box_allowwidth,box_amount,box_code,box_color,box_desc,box_extheight,box_extlength,box_extwidth,box_unit,box_weight,shipment_id]." }
```

### dumpNuPastedBoxes
Al ejecutar una solicitud, el metodo por alguna razón responde de una forma extraña. me da el error respondido abajo no logro entender sucedido

```javascript
    // method and params send
    Client.method("dumpNuPastedBoxes", {
        'items': {						
            'site': 'San Jose CR',
			'box_code': '400',
			'box_desc': '100',
			'box_class1': '1',
			'box_class2': '2',
			'box_color': 'Blue',
			'box_comp': '10',
			'box_extlength': '10',
			'box_extwidth': '10',
			'box_extheight': '10',
		    'box_weight': '10',
			'box_unit': '10',
		}
    });
    
    // request data
    let response = await Client.fetch().then((record) => record);
    console.log(response); 
```

<b>response: </b> Can't cast String [{"site":"San Jose CR","box_code":"400","box_desc":"100","box_class1":"1","box_class2":"2","box_color...] to a value of type [Array]

### dumpShortBox
<p>En la documentación no esta en la lista de parametros el siguiente Key.</p>
<b>response: </b>

```json
{ "error": "The key [BOARD_TYPE] does not exist, only the following keys are available: [box_class,box_class1,box_class2,box_code,box_color,box_comp,box_desc,box_extheight,box_extlength,box_extwidth,box_unit,box_weight,site_name]." }
```
### getEmptyBoxInfo
En la documentación aparece 3 parametros pero con solo enviar el ID ya te devuelve la información del Box, no comprendo si es que los otros parametros son opcionales. Pero cuando envio los otros 2 parametros, solo envia un error notificando que <b style = "color: red;">Box not Found</b>.

### listBoxesPerClass
<p>En la documentación no esta en la lista de parametros el siguiente Key.</p>
<b>response: </b>

```json
{ "error": "The key [ASSET_CLASS] does not exist, only the following keys are available: [class_name,site_name]." }
```

### listBoxesPerSiteClassUnit
<p>En la documentación no esta en la lista de parametros el siguiente Key. aparece es boxids</p>
<b>response: </b>

```json
{ "error": "The parameter [data] to function [listBoxesPerSiteClassUnit] is required but was not passed in." }
```
### listSKUsFromSite
<p>Debemos evaluar el siguiente metodo, debido a que pude notar que cada solicitud da una respuesta que tarda 12500ms, es un poco lento me parece para un consulta.</p>


### updateBoxConstraints
<p>El metodo no tiene el mismo parametro que se establece en la documentación</p>
<b>response</b>

```json
{ "error": "The parameter [constraints] to function [updateBoxConstraints] is required but was not passed in." }
```

### deleteShipmentWithID
<p>El metodo no tiene el mismo parametro que se establece en la documentación</p>
<b>response</b>

```json
{ "error": "The parameter [shipid] to function [deleteShipmentWithID] is required but was not passed in." }
```

### dumpConsignmentPart
En este metodo ocurre un error desconocido que hace explotar esta llamada al servidor.

```json 
{ "error": "Can't cast String [11] to a value of type [Array]" }
```

### addEditPackage

<p>En la documentación el key dice que es site en los parametros pero el key es site_name</p>

```javascript
// method to use and params
Client.method("addEditPackage", {
	'pinfo': {
	'	site': 'San Jose CR',
		'pp_code': '1000',
		'pp_allowlength': '100',
		'pp_allowdiam': '100',
		'pp_allowwidth': '100',
		'pp_allowheight': '100',
		'pp_body': '72',
		'pp_cap': '100',
		'pp_capdiam': '100',
		'pp_length': '10',
		'pp_diameter': '100',
		'pp_width': '100',
		'pp_height': '100',
		'pp_weight': '100',
		'pp_c1': '100',
		'pp_c2': '100',
		'pp_c3': '100',
		'pp_c4': '100',
		'pp_description': 'descriocion',
		'pp_type': '1',
		'pp_unit': '120',
		'updated': '2020-12-01',
	}
});

// request data
let response = await Client.fetch().then((record) => record);
console.log(response); 
```
<b>response</b>

```json
{ "error": "The key [SITE_NAME] does not exist, only the following keys are available: [pp_allowdiam,pp_allowheight,pp_allowlength,pp_allowwidth,pp_body,pp_c1,pp_c2,pp_c3,pp_c4,pp_cap,pp_capdiam,pp_code,pp_description,pp_diameter,pp_height,pp_length,pp_type,pp_unit,pp_weight,pp_width,site,updated]." }
```

### deleteCalcsWithShipmentID

<p>La documentación no esta correcta debido a que la variable no lleva el nombre userinfo sino shipmentinfo</p>
<b>response: </b>

```json 
{ "error": "The parameter [shipmentinfo] to function [deleteCalcsWithShipmentID] is required but was not passed in." }
```

### queryTruckFillShipments

<p>La documentación no contiene el siguiente key en la documentación determinada</p>
<b>response: </b>

```json
{ "error": "The key [DBNAME] does not exist, only the following keys are available: [date1,date2]." }
```


### calcTruckBay
<p>La documentación no contiene el siguiente key, y en la cual me notifica que hay un error</p>
<b>response: </b>

```json 
{ "error": "The parameter [baydata] to function [calcTruckBay] is required but was not passed in." }
```


### dumpEmptyRoute
<p>La documentación no contiene el siguiente key, y en la cual me notifica que hay un error</p>
<b>response: </b>

```json
{ "error": "component [QPMCalcServer.cfc.QPMRouteBatchService] has no remote function with name [dumpEmptyRoute]" }
```

### addShipItemToRoute
<p>La documentación no contiene el siguiente key, y en la cual me notifica que hay un error</p>
<b>response: </b>

```json
{ "error": "component [QPMCalcServer.cfc.QPMRouteBatchService] has no remote function with name [dumpEmptyRoute]" }
```
### createBatchWithRoutes
<p>Error desconocido, al parecer es por el tipo de dato recibido pero no he podico identificarlo</p>
<b>response: </b>

```json 
{ "error": "Can't cast String [1] to a value of type [Array]" }
```

### dumpFullRoutes
<p>La documentación no contiene el siguiente key, y en la cual me notifica que hay un error</p>
<b>response: </b>

```json
{ "error": "component [QPMCalcServer.cfc.QPMRouteBatchService] has no remote function with name [dumpEmptyRoute]" }
```

### searchRoutesWithString
<p>La documentación no contiene el siguiente key, y en la cual me notifica que hay un error</p>
<b>response: </b>

```json
{ "error": "component [QPMCalcServer.cfc.QPMRouteBatchService] has no remote function with name [dumpEmptyRoute]" }
```

### getTransportStatus
<p>La documentación no contiene el siguiente key, y en la cual me notifica que hay un error</p>
<b>response: </b>

```json
{ "error": "component [QPMCalcServer.cfc.QPMRouteBatchService] has no remote function with name [dumpEmptyRoute]" }
```



