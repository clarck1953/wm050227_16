ol.proj.proj4.register(proj4);
//ol.proj.get("IGNF:WGS84GEO").setExtent([39.785811, -25.644937, 55.168093, -11.951512]);
var wms_layers = [];


        var lyr_WorldImagery_0 = new ol.layer.Tile({
            'title': 'World Imagery',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_stations_list_CLIMAT_data_Madacopie_1 = new ol.format.GeoJSON();
var features_stations_list_CLIMAT_data_Madacopie_1 = format_stations_list_CLIMAT_data_Madacopie_1.readFeatures(json_stations_list_CLIMAT_data_Madacopie_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:WGS84GEO'});
var jsonSource_stations_list_CLIMAT_data_Madacopie_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stations_list_CLIMAT_data_Madacopie_1.addFeatures(features_stations_list_CLIMAT_data_Madacopie_1);
var lyr_stations_list_CLIMAT_data_Madacopie_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_stations_list_CLIMAT_data_Madacopie_1, 
                style: style_stations_list_CLIMAT_data_Madacopie_1,
                popuplayertitle: 'stations_list_CLIMAT_data_Mada copie',
                interactive: true,
    title: 'stations_list_CLIMAT_data_Mada copie<br />\
    <img src="styles/legend/stations_list_CLIMAT_data_Madacopie_1_0.png" /> Existing synop station<br />\
    <img src="styles/legend/stations_list_CLIMAT_data_Madacopie_1_1.png" /> Existing UA station<br />\
    <img src="styles/legend/stations_list_CLIMAT_data_Madacopie_1_2.png" /> GBON Compliant-ASECNA<br />\
    <img src="styles/legend/stations_list_CLIMAT_data_Madacopie_1_3.png" /> Planned Synop station<br />\
    <img src="styles/legend/stations_list_CLIMAT_data_Madacopie_1_4.png" /> Planned UA station<br />\
    <img src="styles/legend/stations_list_CLIMAT_data_Madacopie_1_5.png" /> Planned Regional Maintenance Center<br />\
    <img src="styles/legend/stations_list_CLIMAT_data_Madacopie_1_6.png" /> Headquarters Maintenance Center<br />' });
var format_StationPNUDSourceRapport_2 = new ol.format.GeoJSON();
var features_StationPNUDSourceRapport_2 = format_StationPNUDSourceRapport_2.readFeatures(json_StationPNUDSourceRapport_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:WGS84GEO'});
var jsonSource_StationPNUDSourceRapport_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StationPNUDSourceRapport_2.addFeatures(features_StationPNUDSourceRapport_2);
var lyr_StationPNUDSourceRapport_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StationPNUDSourceRapport_2, 
                style: style_StationPNUDSourceRapport_2,
                popuplayertitle: 'Station-PNUD(SourceRapport)',
                interactive: true,
                title: '<img src="styles/legend/StationPNUDSourceRapport_2.png" /> Station-PNUD(SourceRapport)'
            });

lyr_WorldImagery_0.setVisible(true);lyr_stations_list_CLIMAT_data_Madacopie_1.setVisible(true);lyr_StationPNUDSourceRapport_2.setVisible(true);
var layersList = [lyr_WorldImagery_0,lyr_stations_list_CLIMAT_data_Madacopie_1,lyr_StationPNUDSourceRapport_2];
lyr_stations_list_CLIMAT_data_Madacopie_1.set('fieldAliases', {'WMO-Statio': 'WMO-Statio', 'StationNam': 'StationNam', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Height': 'Height', 'Country': 'Country', 'StType': 'StType', });
lyr_StationPNUDSourceRapport_2.set('fieldAliases', {'Stations-': 'Stations-', 'Stations--': 'Stations--', 'Long': 'Long', 'Lat': 'Lat', 'Elevation': 'Elevation', 'WMO number': 'WMO number', 'Start': 'Start', 'End': 'End', 'Percentage': 'Percentage', 'Percenta_1': 'Percenta_1', 'Percenta_2': 'Percenta_2', 'Obs': 'Obs', 'AlimBatt': 'AlimBatt', 'AlimRegul': 'AlimRegul', 'AlimPanSol': 'AlimPanSol', 'Capteur': 'Capteur', 'Datalogger': 'Datalogger', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_stations_list_CLIMAT_data_Madacopie_1.set('fieldImages', {'WMO-Statio': 'TextEdit', 'StationNam': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Height': 'TextEdit', 'Country': 'TextEdit', 'StType': 'TextEdit', });
lyr_StationPNUDSourceRapport_2.set('fieldImages', {'Stations-': 'TextEdit', 'Stations--': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Elevation': 'TextEdit', 'WMO number': 'TextEdit', 'Start': 'TextEdit', 'End': 'TextEdit', 'Percentage': 'TextEdit', 'Percenta_1': 'TextEdit', 'Percenta_2': 'TextEdit', 'Obs': 'TextEdit', 'AlimBatt': 'TextEdit', 'AlimRegul': 'TextEdit', 'AlimPanSol': 'TextEdit', 'Capteur': 'TextEdit', 'Datalogger': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_stations_list_CLIMAT_data_Madacopie_1.set('fieldLabels', {'WMO-Statio': 'no label', 'StationNam': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Height': 'no label', 'Country': 'no label', 'StType': 'no label', });
lyr_StationPNUDSourceRapport_2.set('fieldLabels', {'Stations-': 'no label', 'Stations--': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Elevation': 'no label', 'WMO number': 'no label', 'Start': 'no label', 'End': 'no label', 'Percentage': 'no label', 'Percenta_1': 'no label', 'Percenta_2': 'no label', 'Obs': 'no label', 'AlimBatt': 'no label', 'AlimRegul': 'no label', 'AlimPanSol': 'no label', 'Capteur': 'no label', 'Datalogger': 'no label', });
lyr_StationPNUDSourceRapport_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});