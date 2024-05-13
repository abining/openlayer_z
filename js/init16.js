function mapinit(id) {
  var projection = new ol.proj.Projection({
    code:'EPSG:4326',
    units:'degrees'
  })
  var map = new ol.Map({
    target: id,
    view: new ol.View({
      // projection:projection,
      center: ol.proj.fromLonLat([120, 30]), // 重庆
      maxZoom: 15,
      minZoom: 7,
      zoom: 5,
    }),
  });
  var veclayer = new ol.layer.Tile({
    title: "天地图卫星图层底图",
    source: new ol.source.XYZ({
      url: "http://t0.tianditu.gov.cn/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=2a16e0c0544e2cbee46965bee22b1f0c",
      wrapX: false,
    }),
  });
  var vcalayer = new ol.layer.Tile({
    title: "天地图矢量图层标记",
    source: new ol.source.XYZ({
      url: "http://t0.tianditu.gov.cn/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=2a16e0c0544e2cbee46965bee22b1f0c",
      wrapX: false,
    }),
  });
  map.addLayer(veclayer);
  map.addLayer(vcalayer);


  		//添加新的图层（本机的自定义的图层）
      var wmsSource = new ol.source.ImageWMS({
        url:'http://localhost:8080/geoserver/webgis/wms',
        params:{
          'FORMAT':'image/png',
          'VERSION':'1.1.1',
          'LAYERS':'webgis:webgis-roads'
        }
      })
  
      var wmsLayer = new ol.layer.Image({
        title:'wms道路',
        source:wmsSource
      })
  
      map.addLayer(wmsLayer)
//添加title道路
      var wmsTiledSource = new ol.source.TileWMS({
				url: 'http://localhost:8080/geoserver/url/wms',
				params: {
					'FORMAT': 'image/png',
					'VERSION': '1.1.1',
					"LAYERS": 'webgis:webgis-roads',
					tiled: true
				}
			})

			var wmsTiledLayer = new ol.layer.Tile({
				title: 'wmsTiled道路',
				source: wmsTiledSource
			})
			map.addLayer(wmsTiledLayer)


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
