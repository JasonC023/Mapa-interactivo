var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Puntarenas_2 = new ol.format.GeoJSON();
var features_Puntarenas_2 = format_Puntarenas_2.readFeatures(json_Puntarenas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntarenas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntarenas_2.addFeatures(features_Puntarenas_2);
var lyr_Puntarenas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntarenas_2, 
                style: style_Puntarenas_2,
                popuplayertitle: 'Puntarenas',
                interactive: true,
                title: '<img src="styles/legend/Puntarenas_2.png" /> Puntarenas'
            });
var format_TipodeGestin_3 = new ol.format.GeoJSON();
var features_TipodeGestin_3 = format_TipodeGestin_3.readFeatures(json_TipodeGestin_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TipodeGestin_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TipodeGestin_3.addFeatures(features_TipodeGestin_3);
var lyr_TipodeGestin_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TipodeGestin_3, 
                style: style_TipodeGestin_3,
                popuplayertitle: 'TipodeGestión',
                interactive: true,
                title: '<img src="styles/legend/TipodeGestin_3.png" /> TipodeGestión'
            });
var format_Territorios_4 = new ol.format.GeoJSON();
var features_Territorios_4 = format_Territorios_4.readFeatures(json_Territorios_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Territorios_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Territorios_4.addFeatures(features_Territorios_4);
var lyr_Territorios_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Territorios_4, 
                style: style_Territorios_4,
                popuplayertitle: 'Territorios',
                interactive: true,
    title: 'Territorios<br />\
    <img src="styles/legend/Territorios_4_0.png" /> Territorio Pasado<br />\
    <img src="styles/legend/Territorios_4_1.png" /> Territorio Pensado<br />\
    <img src="styles/legend/Territorios_4_2.png" /> Territorio Posible<br />\
    <img src="styles/legend/Territorios_4_3.png" /> Territorio Real<br />\
    <img src="styles/legend/Territorios_4_4.png" /> Territorio vivido<br />' });

lyr_GoogleTerrain_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Puntarenas_2.setVisible(true);lyr_TipodeGestin_3.setVisible(true);lyr_Territorios_4.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_GoogleSatellite_1,lyr_Puntarenas_2,lyr_TipodeGestin_3,lyr_Territorios_4];
lyr_Puntarenas_2.set('fieldAliases', {'gml_id': 'gml_id', 'OBJECTID': 'OBJECTID', 'CÓDIGO': 'CÓDIGO', 'CÓDIGO_PR': 'CÓDIGO_PR', 'PROVINCIA': 'PROVINCIA', 'ORIGEN_DEL': 'ORIGEN_DEL', 'OFICIALIZA': 'OFICIALIZA', 'AREA': 'AREA', 'VERSIÓN': 'VERSIÓN', 'GLOBALID': 'GLOBALID', 'CREADO_POR': 'CREADO_POR', 'FECHA_CREA': 'FECHA_CREA', 'EDITADO_PO': 'EDITADO_PO', 'FECHA_EDIC': 'FECHA_EDIC', 'SHAPE.AREA': 'SHAPE.AREA', });
lyr_TipodeGestin_3.set('fieldAliases', {'Tipo de Ge': 'Tipo de Ge', 'Cantidad': 'Cantidad', });
lyr_Territorios_4.set('fieldAliases', {'Tipo de territorio': 'Tipo de territorio', 'Relatos de noticias': 'Relatos de noticias', 'x': 'x', 'y': 'y', });
lyr_Puntarenas_2.set('fieldImages', {'gml_id': '', 'OBJECTID': '', 'CÓDIGO': '', 'CÓDIGO_PR': '', 'PROVINCIA': '', 'ORIGEN_DEL': '', 'OFICIALIZA': '', 'AREA': '', 'VERSIÓN': '', 'GLOBALID': '', 'CREADO_POR': '', 'FECHA_CREA': '', 'EDITADO_PO': '', 'FECHA_EDIC': '', 'SHAPE.AREA': '', });
lyr_TipodeGestin_3.set('fieldImages', {'Tipo de Ge': 'TextEdit', 'Cantidad': 'TextEdit', });
lyr_Territorios_4.set('fieldImages', {'Tipo de territorio': 'TextEdit', 'Relatos de noticias': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_Puntarenas_2.set('fieldLabels', {'gml_id': 'hidden field', 'OBJECTID': 'hidden field', 'CÓDIGO': 'hidden field', 'CÓDIGO_PR': 'hidden field', 'PROVINCIA': 'hidden field', 'ORIGEN_DEL': 'hidden field', 'OFICIALIZA': 'hidden field', 'AREA': 'hidden field', 'VERSIÓN': 'hidden field', 'GLOBALID': 'hidden field', 'CREADO_POR': 'hidden field', 'FECHA_CREA': 'hidden field', 'EDITADO_PO': 'hidden field', 'FECHA_EDIC': 'hidden field', 'SHAPE.AREA': 'hidden field', });
lyr_TipodeGestin_3.set('fieldLabels', {'Tipo de Ge': 'inline label - always visible', 'Cantidad': 'inline label - always visible', });
lyr_Territorios_4.set('fieldLabels', {'Tipo de territorio': 'inline label - always visible', 'Relatos de noticias': 'inline label - always visible', 'x': 'hidden field', 'y': 'hidden field', });
lyr_Territorios_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});