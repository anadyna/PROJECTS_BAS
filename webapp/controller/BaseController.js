sap.ui.define([ "sap/ui/core/mvc/Controller",
				"sap/m/MessageBox",
			    "sap/ui/model/Filter",
			    "sap/ui/model/FilterOperator"
	
], function(Controller, MessageBox, Filter, FilterOperator){
	"use strict";

	return Controller.extend("ztransp_order_cte.controller.BaseController", {
		
		getRouter: function(){
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
		
		
		getModel: function(sName){
			return this.getView().getModel(sName);
		},
		
		
		setModel: function(oModel, sName){
			return this.getView().setModel(oModel, sName);
		},
		
		
		getResourceBundle: function(){
			return this.getOwnerComponent().getModel("i18n").getResourceBundle();
		},
		
		
		onNavBack: function() {
			var oHistory = sap.ui.core.routing.History.getInstance(),
				sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				history.go(-1);
			}
			else{
			    history.go(-1);
				}
		}
			
	});
});