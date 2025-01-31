var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_SANSAROVARTODHAROISITECATCHMENT_UPDATED_1 = new ol.format.GeoJSON();
var features_SANSAROVARTODHAROISITECATCHMENT_UPDATED_1 = format_SANSAROVARTODHAROISITECATCHMENT_UPDATED_1.readFeatures(json_SANSAROVARTODHAROISITECATCHMENT_UPDATED_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SANSAROVARTODHAROISITECATCHMENT_UPDATED_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SANSAROVARTODHAROISITECATCHMENT_UPDATED_1.addFeatures(features_SANSAROVARTODHAROISITECATCHMENT_UPDATED_1);
var lyr_SANSAROVARTODHAROISITECATCHMENT_UPDATED_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SANSAROVARTODHAROISITECATCHMENT_UPDATED_1, 
                style: style_SANSAROVARTODHAROISITECATCHMENT_UPDATED_1,
                popuplayertitle: 'SAN SAROVAR TO DHAROI SITE CATCHMENT_UPDATED',
                interactive: true,
                title: '<img src="styles/legend/SANSAROVARTODHAROISITECATCHMENT_UPDATED_1.png" /> SAN SAROVAR TO DHAROI SITE CATCHMENT_UPDATED'
            });
var format_SAN_SAROVAR_SELECTED_DRAINAGELINE_1KM2_2 = new ol.format.GeoJSON();
var features_SAN_SAROVAR_SELECTED_DRAINAGELINE_1KM2_2 = format_SAN_SAROVAR_SELECTED_DRAINAGELINE_1KM2_2.readFeatures(json_SAN_SAROVAR_SELECTED_DRAINAGELINE_1KM2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAN_SAROVAR_SELECTED_DRAINAGELINE_1KM2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAN_SAROVAR_SELECTED_DRAINAGELINE_1KM2_2.addFeatures(features_SAN_SAROVAR_SELECTED_DRAINAGELINE_1KM2_2);
var lyr_SAN_SAROVAR_SELECTED_DRAINAGELINE_1KM2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SAN_SAROVAR_SELECTED_DRAINAGELINE_1KM2_2, 
                style: style_SAN_SAROVAR_SELECTED_DRAINAGELINE_1KM2_2,
                popuplayertitle: 'SAN_SAROVAR_SELECTED_DRAINAGELINE_1KM2',
                interactive: true,
                title: '<img src="styles/legend/SAN_SAROVAR_SELECTED_DRAINAGELINE_1KM2_2.png" /> SAN_SAROVAR_SELECTED_DRAINAGELINE_1KM2'
            });
var format_santsarovarsite_3 = new ol.format.GeoJSON();
var features_santsarovarsite_3 = format_santsarovarsite_3.readFeatures(json_santsarovarsite_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_santsarovarsite_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_santsarovarsite_3.addFeatures(features_santsarovarsite_3);
cluster_santsarovarsite_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_santsarovarsite_3
});
var lyr_santsarovarsite_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_santsarovarsite_3, 
                style: style_santsarovarsite_3,
                popuplayertitle: 'sant sarovar site',
                interactive: true,
    title: 'sant sarovar site<br />\
    <img src="styles/legend/santsarovarsite_3_0.png" /> Dharoi Dam<br />\
    <img src="styles/legend/santsarovarsite_3_1.png" /> Sant Sarovar Barrage<br />\
    <img src="styles/legend/santsarovarsite_3_2.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_SANSAROVARTODHAROISITECATCHMENT_UPDATED_1.setVisible(true);lyr_SAN_SAROVAR_SELECTED_DRAINAGELINE_1KM2_2.setVisible(true);lyr_santsarovarsite_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_SANSAROVARTODHAROISITECATCHMENT_UPDATED_1,lyr_SAN_SAROVAR_SELECTED_DRAINAGELINE_1KM2_2,lyr_santsarovarsite_3];
lyr_SANSAROVARTODHAROISITECATCHMENT_UPDATED_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'HydroID': 'HydroID', 'GridID': 'GridID', 'SQKM2': 'SQKM2', 'Area': 'Area', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_SAN_SAROVAR_SELECTED_DRAINAGELINE_1KM2_2.set('fieldAliases', {'name': 'name', 'linkno': 'linkno', 'dslinkno': 'dslinkno', 'uslinkno1': 'uslinkno1', 'uslinkno2': 'uslinkno2', 'dsnodeid': 'dsnodeid', 'strmorder': 'strmorder', 'length': 'length', 'magnitude': 'magnitude', 'dscontarea': 'dscontarea', 'strmdrop': 'strmdrop', 'slope': 'slope', 'straightl': 'straightl', 'uscontarea': 'uscontarea', 'wsno': 'wsno', 'doutend': 'doutend', 'doutstart': 'doutstart', 'doutmid': 'doutmid', 'dnstream_x': 'dnstream_x', 'dnstream_y': 'dnstream_y', 'upstream_x': 'upstream_x', 'upstream_y': 'upstream_y', });
lyr_santsarovarsite_3.set('fieldAliases', {'id': 'id', 'POINT': 'POINT', 'site': 'site', });
lyr_SANSAROVARTODHAROISITECATCHMENT_UPDATED_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'HydroID': 'TextEdit', 'GridID': 'TextEdit', 'SQKM2': 'TextEdit', 'Area': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': 'TextEdit', 'auxiliary_storage_labeling_lineanchorclipping': 'TextEdit', 'auxiliary_storage_labeling_lineanchortype': 'TextEdit', 'auxiliary_storage_labeling_lineanchortextpoint': 'TextEdit', });
lyr_SAN_SAROVAR_SELECTED_DRAINAGELINE_1KM2_2.set('fieldImages', {'name': 'TextEdit', 'linkno': 'Range', 'dslinkno': 'Range', 'uslinkno1': 'Range', 'uslinkno2': 'Range', 'dsnodeid': 'Range', 'strmorder': 'Range', 'length': 'TextEdit', 'magnitude': 'Range', 'dscontarea': 'TextEdit', 'strmdrop': 'TextEdit', 'slope': 'TextEdit', 'straightl': 'TextEdit', 'uscontarea': 'TextEdit', 'wsno': 'Range', 'doutend': 'TextEdit', 'doutstart': 'TextEdit', 'doutmid': 'TextEdit', 'dnstream_x': 'TextEdit', 'dnstream_y': 'TextEdit', 'upstream_x': 'TextEdit', 'upstream_y': 'TextEdit', });
lyr_santsarovarsite_3.set('fieldImages', {'id': 'TextEdit', 'POINT': 'TextEdit', 'site': 'ExternalResource', });
lyr_SANSAROVARTODHAROISITECATCHMENT_UPDATED_1.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'HydroID': 'no label', 'GridID': 'no label', 'SQKM2': 'no label', 'Area': 'no label', 'auxiliary_storage_labeling_lineanchorpercent': 'no label', 'auxiliary_storage_labeling_lineanchorclipping': 'no label', 'auxiliary_storage_labeling_lineanchortype': 'no label', 'auxiliary_storage_labeling_lineanchortextpoint': 'no label', });
lyr_SAN_SAROVAR_SELECTED_DRAINAGELINE_1KM2_2.set('fieldLabels', {'name': 'no label', 'linkno': 'inline label - always visible', 'dslinkno': 'no label', 'uslinkno1': 'no label', 'uslinkno2': 'no label', 'dsnodeid': 'no label', 'strmorder': 'no label', 'length': 'no label', 'magnitude': 'no label', 'dscontarea': 'no label', 'strmdrop': 'no label', 'slope': 'no label', 'straightl': 'no label', 'uscontarea': 'no label', 'wsno': 'no label', 'doutend': 'no label', 'doutstart': 'no label', 'doutmid': 'no label', 'dnstream_x': 'no label', 'dnstream_y': 'no label', 'upstream_x': 'no label', 'upstream_y': 'no label', });
lyr_santsarovarsite_3.set('fieldLabels', {'id': 'inline label - always visible', 'POINT': 'inline label - always visible', 'site': 'inline label - always visible', });
lyr_santsarovarsite_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});