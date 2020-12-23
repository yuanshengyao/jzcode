function ajax(url, data, done, obj) {
  var xmlhttp = null;
  var args = null;
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject('Microsoft.XMLHttp');
  }
  if (obj && obj.args) args = obj.args;
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      if (done) {
        if (obj && obj.resType) {
          if (obj.resType == "blob" || obj.resType == "arraybuffer") {
            done(xmlhttp.response, args)
          }
        } else {
          done(xmlhttp.responseText, args)
        }
      }
    }
    if (xmlhttp.readyState == 4 && xmlhttp.status != 200) {
      console.log("提交失败");
      if (obj && obj.error) obj.error(xmlhttp.responseXML);
    }
  }
  xmlhttp.open("POST", url, "true");
  xmlhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  if (obj && obj.resType) xmlhttp.responseType = obj.resType;
  xmlhttp.send(data);
}
