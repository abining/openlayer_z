function mapinit(id) {
  var map = new ol.Map({
    target: id,
    // layers: [
    // 	new ol.layer.Tile({
    // 		title: '天地图矢量图层底图',
    // 		source: new ol.source.XYZ({

    // 			url: "http://t0.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=2a16e0c0544e2cbee46965bee22b1f0c",
    // 			// url: "http://t0.tianditu.gov.cn/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=2a16e0c0544e2cbee46965bee22b1f0c",

    // 			wrapX: false
    // 		})
    // 	}),
    // 	new ol.layer.Tile({
    // 		title: '天地图矢量图层注记',
    // 		source: new ol.source.XYZ({

    // 			url: "http://t0.tianditu.gov.cn/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=2a16e0c0544e2cbee46965bee22b1f0c",

    // 			wrapX: false
    // 		})
    // 	})
    // ],
    view: new ol.View({
      center: ol.proj.fromLonLat([120, 30]), // 重庆
      zoom: 5,
    }),
  });
  var veclayer = new ol.layer.Tile({
    title: "天地图矢量图层底图",
    source: new ol.source.XYZ({
      url: "http://t0.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=2a16e0c0544e2cbee46965bee22b1f0c",
      // url: "http://t0.tianditu.gov.cn/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=2a16e0c0544e2cbee46965bee22b1f0c",

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
  console.log("hallo");
  return map;
}
