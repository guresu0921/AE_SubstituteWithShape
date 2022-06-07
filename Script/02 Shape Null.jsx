app.beginUndoGroup("Shape Null");
(function(){
    const shapeName = "Shape Null";
    const activeComp = app.project.activeItem;
    const layers = activeComp.layers;
    const layerArr=[];
    const reg = new RegExp("^" + shapeName + " [0-9]*$","g")
    for(i=1; i <= layers.length;i++){
        if(reg.test(layers[i].name))layerArr.push(i)
    }
    layers.addShape().name = shapeName + " " + Number(layerArr.length+1);
    const activeLayer = activeComp.selectedLayers[0];
    activeLayer.label=1;
    const activeShape = activeLayer.property('ADBE Root Vectors Group');
    activeShape.addProperty('ADBE Vector Shape - Rect').property("ADBE Vector Rect Size");
}());
app.endUndoGroup();
