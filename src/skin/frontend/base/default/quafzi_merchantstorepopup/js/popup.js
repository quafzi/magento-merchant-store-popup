(function () {
    function isB2B(storecode) {
        return storecode.toLowerCase().contains('b2b');
    }
    var currentStoreCode = "<?php echo Mage::app()->getStore()->getCode(); ?>"
    $$(".store-switcher a").each(
        function (link) {
            link.onclick = function() {
                var targetUrl = link.href;
                var targetStoreCode = targetUrl.parseQuery().___store;
                if (isB2B(currentStoreCode) !== isB2B(targetStoreCode)) {
                    $("quafzi_merchantstorepopup").show();
                    $("quafzi_merchantstorepopup_cancel").onclick = function() {
                        $("quafzi_merchantstorepopup").hide();
                    }
                    $("quafzi_merchantstorepopup_switch").onclick = function() {
                        window.location.href = targetUrl;
                    }
                    return false;
                }
            }
        }
    )
    $("quafzi_merchantstorepopup_cancel").onclick = function() {
        $("quafzi_merchantstorepopup").hide();
    }
}());
