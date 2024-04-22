/**
 * 为图层勾送框加入事件，实现勾选显示
 * @param {Object} element
 * @param {Object} layer
 */
function addChangeEvent(element, layer) {
  element.addEventListener("click", function () {
    if (element.checked) {
      // 设置图层可见
      layer.setVisible(true);
    } else {
      // 设置图层不可见
      layer.setVisible(false);
    }
  });
}

/**
 * 在元素中写文字
 * @param {Object} element 元素
 * @param {Object} text 写入的文字
 */
function setInnerText(element, text) {
  if (typeof element.textContent == "string") {
    element.textContent = text;
  } else {
    element.innerText = text;
  }
}

/**
 * 构造并加载图层控制元素控件
 * @param {Object} map 地图对象
 * @param {Object} id 图层控制div的id
 */
function loadLayerControl(map, id) {
  // 获取图层列表元素、map中的图层
  var treeContent = document.getElementById(id);
  var layers = map.getLayers();
  // 遍历图层，实现组件的图层行添加
  for (var i = 0; i < layers.getLength(); i++) {
    // layers的item方法获取循环中的图层，赋值给变量layer
    var layer = layers.item(i);
    // 获取图层的名称，赋值给变量layerName
    var layerName = layer.get("title");
    // 获取图层的可见性，赋值给变量layerVisibility
    var layerVisibility = layer.getVisible();
    // Js动态新建一个li标签，将它加入到图层列表元素下：
    var EleLi = document.createElement("li");
    treeContent.appendChild(EleLi);
    // / Js动态新建一个input标签，将它加入到EleLi元素下：，类型为checkbox
    var Eleinput = document.createElement("input");
    Eleinput.type = "checkbox";
    EleLi.appendChild(Eleinput);
    // 设置标签
    var EleLabel = document.createElement("label");
    EleLabel.className = "layerItem";
    // 写入图层名，并且添加到li中
    setInnerText(EleLabel, layerName);
    EleLi.appendChild(EleLabel);
    // 判断图层是否显示，如果显示则checkbox勾选
    if (layerVisibility) {
      Eleinput.checked = true;
    }
    // 添加点击事件
    addChangeEvent(Eleinput, layer);
  }
}
