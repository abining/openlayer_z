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
