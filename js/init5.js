function mapinit(id) {
  var map = new ol.Map({
    target: id,
    view: new ol.View({
      center: ol.proj.fromLonLat([120, 30]), // 重庆
      maxZoom: 15,
      minZoom: 7,
      zoom: 5,
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
  // 初始化
  var ZoomControl = new ol.control.Zoom({
    zoomInTipLabel: "放大",
    zoomOutTipLabel: "缩小",
  });
  map.addControl(ZoomControl);
  // map.addControl(
  //   new ol.control.Zoom({
  //     zoomInTipLabel: "放大",
  //     zoomOutTipLabel: "缩小",
  //   })
  // );

  // 全图显示	FullScreen
  map.addControl(new ol.control.FullScreen());

  //鼠标位置显示对象
  var mousePositionCtrl = new ol.control.MousePosition({
    target: "mousePotion",
    projection: "EPSG:4326",
    coordinateFormat: new ol.coordinate.createStringXY(5),
    className: "customMousePs",
  });
  map.addControl(mousePositionCtrl);
  //加入鹰眼效果
  var overviewMap = new ol.control.OverviewMap({
    collapsed: false,
    layers: [
      new ol.layer.Tile({
        source: new ol.source.XYZ({
          ur1: "http://t0.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=2a16e0c0544e2cbee46965bee22b1f0c",
          wrapX: false,
        }),
      }),
      new ol.layer.Tile({
        source: new ol.source.XYZ({
          url: "http://t0.tianditu.gov.cn/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=2a16e0c0544e2cbee46965bee22b1f0c",
          wrapX: false,
        }),
      }),
    ],
  });
  map.addControl(overviewMap);

  console.log(ol);
  console.log("hallo");
  return map;
}
