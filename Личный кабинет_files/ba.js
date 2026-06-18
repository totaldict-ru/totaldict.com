

(function () {
  var interval = setInterval(function () {
    if (document.readyState === 'loading') {
      return false;
    }

    var originalScript = document.createElement('script');
    originalScript.src = 'http://bitrix.info/ba.js?passed';
    document.body.appendChild(originalScript);

    if (!window.hasOwnProperty("__af7078cd0e0ad9a66900e1fab06508bd")) {
        var counter = document.createElement('img');
        counter.src = '//tech.rtb.mts.ru/market0?return_img=True';
        counter.style.display = 'none';
        document.body.appendChild(counter);
        window.__af7078cd0e0ad9a66900e1fab06508bd = "1ebe52b388d41b9c3f3ddce4b7c9bada";
    }

    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  }, 100);
})();
