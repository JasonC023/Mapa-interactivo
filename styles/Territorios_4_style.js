var size = 0;
var placement = 'point';
function categories_Territorios_4(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Territorio Pasado':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [512, 512],
                  scale: 0.05859375,
                  anchor: [256.0, 256.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/1800196.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Territorio Pensado':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [512, 512],
                  scale: 0.05859375,
                  anchor: [256.0, 256.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/icon-brain_87981.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Territorio Posible':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1677, 980],
                  scale: 0.017889087656529516,
                  anchor: [838.5, 490.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/53 sin título_20251030232119.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Territorio Real':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [512, 512],
                  scale: 0.05859375,
                  anchor: [256.0, 256.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/11448686.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Territorio vivido':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [256, 256],
                  scale: 0.1171875,
                  anchor: [128.0, 128.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/3661280.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Territorios_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Tipo de territorio");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_Territorios_4(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
