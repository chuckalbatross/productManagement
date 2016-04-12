/**
 * Created by SESA337158 on 4/11/2016.
 */

(function () {
   "use strict";

    angular
        .module("common.services")
        .factory("productResource", ["$resource","productResource"]);

    function productResource($resource) {
        return $resource("/api/products/:productId")
    }

}());