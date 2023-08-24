var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRISatellite_2 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_BatasKecamatan_3 = new ol.format.GeoJSON();
var features_BatasKecamatan_3 = format_BatasKecamatan_3.readFeatures(json_BatasKecamatan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKecamatan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatan_3.addFeatures(features_BatasKecamatan_3);
var lyr_BatasKecamatan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasKecamatan_3, 
                style: style_BatasKecamatan_3,
                interactive: true,
                title: '<img src="styles/legend/BatasKecamatan_3.png" /> Batas Kecamatan'
            });
var format_DaerahAliranSungai_4 = new ol.format.GeoJSON();
var features_DaerahAliranSungai_4 = format_DaerahAliranSungai_4.readFeatures(json_DaerahAliranSungai_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DaerahAliranSungai_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DaerahAliranSungai_4.addFeatures(features_DaerahAliranSungai_4);
var lyr_DaerahAliranSungai_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DaerahAliranSungai_4, 
                style: style_DaerahAliranSungai_4,
                interactive: true,
                title: '<img src="styles/legend/DaerahAliranSungai_4.png" /> Daerah Aliran Sungai'
            });
var format_Bangunan_5 = new ol.format.GeoJSON();
var features_Bangunan_5 = format_Bangunan_5.readFeatures(json_Bangunan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_5.addFeatures(features_Bangunan_5);
var lyr_Bangunan_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bangunan_5, 
                style: style_Bangunan_5,
                interactive: true,
                title: '<img src="styles/legend/Bangunan_5.png" /> Bangunan'
            });
var format_Toponimi_6 = new ol.format.GeoJSON();
var features_Toponimi_6 = format_Toponimi_6.readFeatures(json_Toponimi_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Toponimi_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Toponimi_6.addFeatures(features_Toponimi_6);
var lyr_Toponimi_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Toponimi_6, 
                style: style_Toponimi_6,
                interactive: true,
                title: '<img src="styles/legend/Toponimi_6.png" /> Toponimi'
            });
var format_LokasiNonAset_7 = new ol.format.GeoJSON();
var features_LokasiNonAset_7 = format_LokasiNonAset_7.readFeatures(json_LokasiNonAset_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LokasiNonAset_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LokasiNonAset_7.addFeatures(features_LokasiNonAset_7);
var lyr_LokasiNonAset_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LokasiNonAset_7, 
                style: style_LokasiNonAset_7,
                interactive: true,
                title: '<img src="styles/legend/LokasiNonAset_7.png" /> Lokasi Non Aset'
            });
var format_LokasiAset_8 = new ol.format.GeoJSON();
var features_LokasiAset_8 = format_LokasiAset_8.readFeatures(json_LokasiAset_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LokasiAset_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LokasiAset_8.addFeatures(features_LokasiAset_8);
var lyr_LokasiAset_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LokasiAset_8, 
                style: style_LokasiAset_8,
                interactive: true,
                title: '<img src="styles/legend/LokasiAset_8.png" /> Lokasi Aset'
            });
var format_JaringanJalan_9 = new ol.format.GeoJSON();
var features_JaringanJalan_9 = format_JaringanJalan_9.readFeatures(json_JaringanJalan_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanJalan_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalan_9.addFeatures(features_JaringanJalan_9);
var lyr_JaringanJalan_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JaringanJalan_9, 
                style: style_JaringanJalan_9,
                interactive: true,
    title: 'Jaringan Jalan<br />\
    <img src="styles/legend/JaringanJalan_9_0.png" /> Jalan Kolektor Primer 1<br />\
    <img src="styles/legend/JaringanJalan_9_1.png" /> Jalan Kolektor Primer 2<br />\
    <img src="styles/legend/JaringanJalan_9_2.png" /> Jalan Kolektor Sekunder<br />\
    <img src="styles/legend/JaringanJalan_9_3.png" /> Jalan Lokal<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_ESRISatellite_2.setVisible(true);lyr_BatasKecamatan_3.setVisible(true);lyr_DaerahAliranSungai_4.setVisible(false);lyr_Bangunan_5.setVisible(false);lyr_Toponimi_6.setVisible(false);lyr_LokasiNonAset_7.setVisible(false);lyr_LokasiAset_8.setVisible(true);lyr_JaringanJalan_9.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatellite_1,lyr_ESRISatellite_2,lyr_BatasKecamatan_3,lyr_DaerahAliranSungai_4,lyr_Bangunan_5,lyr_Toponimi_6,lyr_LokasiNonAset_7,lyr_LokasiAset_8,lyr_JaringanJalan_9];
lyr_BatasKecamatan_3.set('fieldAliases', {'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'HECTARES': 'HECTARES', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'LABEL': 'LABEL', 'LABEL_KEL': 'LABEL_KEL', });
lyr_DaerahAliranSungai_4.set('fieldAliases', {'ID': 'ID', 'PL_13': 'PL_13', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'HECTARES': 'HECTARES', 'PL_EDIT': 'PL_EDIT', 'RECNO': 'RECNO', });
lyr_Bangunan_5.set('fieldAliases', {'KODE_UNSUR': 'KODE_UNSUR', 'NAMA_UNSUR': 'NAMA_UNSUR', 'TOPONIM': 'TOPONIM', 'PELAKSANA': 'PELAKSANA', 'UPDATED': 'UPDATED', 'LABEL': 'LABEL', });
lyr_Toponimi_6.set('fieldAliases', {'NAMA_UNSUR': 'NAMA_UNSUR', 'NAMA_LOKAL': 'NAMA_LOKAL', 'NAMA_GEO1': 'NAMA_GEO1', 'NAMA_LAIN': 'NAMA_LAIN', 'KOORDINAT': 'KOORDINAT', 'DESA': 'DESA', 'KECAMATAN': 'KECAMATAN', });
lyr_LokasiNonAset_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KODE_BG': 'KODE_BG', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'KET_UNSUR': 'Keterangan Unsur', 'KET_NAMA': 'Nama', 'KET_BG': 'Bangunan Milik', 'KET_TH': 'Tipe Hak', 'KET_BAHAN': 'Material Bahan', 'KET_LT': 'Ketinggian Lantai', 'KET_FB': 'Fisik Bangunan', 'KET_LB': 'Luas Bangunan', 'KET_THN': 'Tahun Perolehan', 'KET_TANAH': 'Kepemilikan Tanah', 'KET_DOK': 'Kepemilikan Aset', 'KOORDINAT': 'KOORDINAT', });
lyr_LokasiAset_8.set('fieldAliases', {'KODE_BG': 'KODE_BG', 'FOTO': 'FOTO', 'KETERANGAN': 'KETERANGAN', 'KET_BG': 'Kepemilikan Bangunan', 'KET_TH': 'Tipe Hak', 'KET_NP': 'Nilai Perolehan', 'KET_NAMA': 'Nama', 'KET_NB': 'Unsur Bangunan', 'KET_KODE': 'Kode', 'KET_OPD': 'OPD', 'KET_KB': 'KET_KB', 'KET_BAHAN': 'Material Bahan', 'KET_LT': 'Ketinggian Lantai', 'KET_FB': 'Fisik Bangunan', 'KET_KON': 'Kondisi', 'KET_LB': 'Luas Bangunan', 'KET_THN': 'Tahun Perolehan', 'KET_TANAH': 'Kepemilikan Tanah', 'KET_DOK': 'Kepemilikan Aset', 'KOORDINAT': 'KOORDINAT', });
lyr_JaringanJalan_9.set('fieldAliases', {'NAMA': 'NAMA', 'FUNGSI_REV': 'FUNGSI_REV', 'STATUS_REV': 'STATUS_REV', 'FUNGSI_AWA': 'FUNGSI_AWA', 'STATUS_AWA': 'STATUS_AWA', 'LENGTH': 'LENGTH', });
lyr_BatasKecamatan_3.set('fieldImages', {'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'HECTARES': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'LABEL': 'TextEdit', 'LABEL_KEL': 'TextEdit', });
lyr_DaerahAliranSungai_4.set('fieldImages', {'ID': 'Range', 'PL_13': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'HECTARES': 'TextEdit', 'PL_EDIT': 'TextEdit', 'RECNO': 'TextEdit', });
lyr_Bangunan_5.set('fieldImages', {'KODE_UNSUR': 'TextEdit', 'NAMA_UNSUR': 'TextEdit', 'TOPONIM': 'TextEdit', 'PELAKSANA': 'TextEdit', 'UPDATED': 'TextEdit', 'LABEL': 'TextEdit', });
lyr_Toponimi_6.set('fieldImages', {'NAMA_UNSUR': 'TextEdit', 'NAMA_LOKAL': 'TextEdit', 'NAMA_GEO1': 'TextEdit', 'NAMA_LAIN': 'TextEdit', 'KOORDINAT': 'TextEdit', 'DESA': 'TextEdit', 'KECAMATAN': 'TextEdit', });
lyr_LokasiNonAset_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'KODE_BG': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'KET_UNSUR': 'TextEdit', 'KET_NAMA': 'TextEdit', 'KET_BG': 'TextEdit', 'KET_TH': 'TextEdit', 'KET_BAHAN': 'TextEdit', 'KET_LT': 'TextEdit', 'KET_FB': 'TextEdit', 'KET_LB': 'TextEdit', 'KET_THN': 'TextEdit', 'KET_TANAH': 'TextEdit', 'KET_DOK': 'TextEdit', 'KOORDINAT': 'TextEdit', });
lyr_LokasiAset_8.set('fieldImages', {'KODE_BG': 'TextEdit', 'FOTO': 'ExternalResource', 'KETERANGAN': 'TextEdit', 'KET_BG': 'TextEdit', 'KET_TH': 'TextEdit', 'KET_NP': 'TextEdit', 'KET_NAMA': 'TextEdit', 'KET_NB': 'TextEdit', 'KET_KODE': 'TextEdit', 'KET_OPD': 'TextEdit', 'KET_KB': 'TextEdit', 'KET_BAHAN': 'TextEdit', 'KET_LT': 'TextEdit', 'KET_FB': 'TextEdit', 'KET_KON': 'TextEdit', 'KET_LB': 'TextEdit', 'KET_THN': 'TextEdit', 'KET_TANAH': 'TextEdit', 'KET_DOK': 'TextEdit', 'KOORDINAT': 'TextEdit', });
lyr_JaringanJalan_9.set('fieldImages', {'NAMA': 'TextEdit', 'FUNGSI_REV': 'TextEdit', 'STATUS_REV': 'TextEdit', 'FUNGSI_AWA': 'TextEdit', 'STATUS_AWA': 'TextEdit', 'LENGTH': 'TextEdit', });
lyr_BatasKecamatan_3.set('fieldLabels', {'KECAMATAN': 'inline label', 'KELURAHAN': 'inline label', 'HECTARES': 'inline label', 'AREA': 'inline label', 'PERIMETER': 'inline label', 'LABEL': 'inline label', 'LABEL_KEL': 'inline label', });
lyr_DaerahAliranSungai_4.set('fieldLabels', {'ID': 'inline label', 'PL_13': 'inline label', 'AREA': 'inline label', 'PERIMETER': 'inline label', 'HECTARES': 'inline label', 'PL_EDIT': 'inline label', 'RECNO': 'inline label', });
lyr_Bangunan_5.set('fieldLabels', {'KODE_UNSUR': 'inline label', 'NAMA_UNSUR': 'inline label', 'TOPONIM': 'inline label', 'PELAKSANA': 'inline label', 'UPDATED': 'inline label', 'LABEL': 'inline label', });
lyr_Toponimi_6.set('fieldLabels', {'NAMA_UNSUR': 'inline label', 'NAMA_LOKAL': 'inline label', 'NAMA_GEO1': 'inline label', 'NAMA_LAIN': 'inline label', 'KOORDINAT': 'inline label', 'DESA': 'inline label', 'KECAMATAN': 'inline label', });
lyr_LokasiNonAset_7.set('fieldLabels', {'OBJECTID': 'inline label', 'KODE_BG': 'inline label', 'KECAMATAN': 'inline label', 'KELURAHAN': 'inline label', 'KET_UNSUR': 'inline label', 'KET_NAMA': 'inline label', 'KET_BG': 'inline label', 'KET_TH': 'inline label', 'KET_BAHAN': 'inline label', 'KET_LT': 'inline label', 'KET_FB': 'inline label', 'KET_LB': 'inline label', 'KET_THN': 'inline label', 'KET_TANAH': 'inline label', 'KET_DOK': 'inline label', 'KOORDINAT': 'inline label', });
lyr_LokasiAset_8.set('fieldLabels', {'KODE_BG': 'inline label', 'FOTO': 'inline label', 'KETERANGAN': 'inline label', 'KET_BG': 'inline label', 'KET_TH': 'inline label', 'KET_NP': 'inline label', 'KET_NAMA': 'inline label', 'KET_NB': 'inline label', 'KET_KODE': 'inline label', 'KET_OPD': 'inline label', 'KET_KB': 'inline label', 'KET_BAHAN': 'inline label', 'KET_LT': 'inline label', 'KET_FB': 'inline label', 'KET_KON': 'inline label', 'KET_LB': 'inline label', 'KET_THN': 'inline label', 'KET_TANAH': 'inline label', 'KET_DOK': 'inline label', 'KOORDINAT': 'inline label', });
lyr_JaringanJalan_9.set('fieldLabels', {'NAMA': 'inline label', 'FUNGSI_REV': 'inline label', 'STATUS_REV': 'inline label', 'FUNGSI_AWA': 'inline label', 'STATUS_AWA': 'inline label', 'LENGTH': 'inline label', });
lyr_JaringanJalan_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});