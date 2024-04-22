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
    title: "天地图矢量图层标记",
    source: new ol.source.XYZ({
      url: "http://t0.tianditu.gov.cn/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=2a16e0c0544e2cbee46965bee22b1f0c",
      wrapX: false,
    }),
  });
  map.addLayer(veclayer);
  map.addLayer(vcalayer);
  // 添加滑动控制缩放的控件
  map.addControl(new ol.control.ZoomSlider());
  // 比例尺	ScaleLine
  map.addControl(new ol.control.ScaleLine());
  // ZoomToExtent  回到初始视图
  // 创建重庆市的范围对象
  var extent = ol.proj.transformExtent(
    [106.2554, 29.4914, 106.7226, 30.1987],
    "EPSG:4326",
    "EPSG:3857"
  ); // 重庆市的范围坐标（左下角和右上角）

  var ZoomToExtent = new ol.control.ZoomToExtent({
    tipLable: "初始区域",
    //使用es6的对象属性简写方法。
    extent,
  });
  // 添加zoomtoextent控件
  map.addControl(ZoomToExtent);
  map.addControl(
    new ol.control.Zoom({
      zoomInTipLabel: "放大",
      zoomOutTipLabel: "缩小",
    })
  );

  // 全图显示	FullScreen
  map.addControl(new ol.control.FullScreen());

  //
  console.log(ol);
  console.log("hallo");

  // 添加图层切换控件
  return map;
}
