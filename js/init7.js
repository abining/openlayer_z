function mapinit(id, x, y, zoom) {
  var map = new ol.Map({
    target: id,
    view: new ol.View({
      center: ol.proj.fromLonLat([x, y]),
      maxzoom: 15,
      minzoom: 7,
      zoom: zoom,
    }),
  });
  var veclayer = new ol.layer.Tile({
    title: "天地图矢量图层底图",
    source: new ol.source.XYZ({
      url: "http://t0.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=2a16e0c0544e2cbee46965bee22b1f0c",
      wrapX: false,
    }),
  });
  var vcalayer = new ol.layer.Tile({
    title: "天地图矢量图层底图",
    source: new ol.source.XYZ({
      url: "http://t0.tianditu.gov.cn/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=2a16e0c0544e2cbee46965bee22b1f0c",
      wrapX: false,
    }),
  });
  // 天地图矢量图层底图和天地图矢量图层底图添加进入地图
  map.addLayer(veclayer);
  map.addLayer(vcalayer);

  return map;
}
