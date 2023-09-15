sap.ui.define([
    "ztransp_order_cte/controller/BaseController",
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
],

    function (BaseController,Controller, JSONModel,MessageToast) {
        "use strict";
        
        return BaseController.extend("ztransp_order_cte.controller.Upload", {
            onInit: function () {

               

            },

            onAfterRendering: function() {
                var that = this;
                var uploader = this.getView().byId("idFileUploader");
                uploader.attachChange(function(oEvent) {

                    var xml = oEvent.getParameters().files[0];
                    var oModelXML = new JSONModel({ xml });

                    oEvent.getParameters().files[0].text().then(
                        
                        function(sContent) {
                            var files = sContent;
                            console.log(sContent);

                            var oModelXML = new JSONModel({
                                sContent
                            });

                            sap.ui.getCore().setModel(oModelXML, "xml");
                        });
                }); 
           // });
        },

           handleUploadPress: function(evt){
            //Obligation file import
            var oFileUploader = this.byId("idFileUploader");
			if (!oFileUploader.getValue()) {
                var msg = "Obrigatório a importação de um arquivo XML";
                MessageToast.show(msg, {duration:2500,width:"50rem"}); 
				return;
			}

            var file = sap.ui.getCore().getModel("xml");
            file = file.oData.sContent;

            const xmlSample = file;
                var xmlReturn = parseXmlToJson(xmlSample);

                function parseXmlToJson(xml) {
                    const json = {};
                    for (const res of xml.matchAll(/(?:<(\w*)(?:\s[^>]*)*>)((?:(?!<\1).)*)(?:<\/\1>)|<(\w*)(?:\s*)*\/>/gm)) {
                        const key = res[1] || res[3];
                        const value = res[2] && parseXmlToJson(res[2]);
                        json[key] = ((value && Object.keys(value).length) ? value : res[2]) || null;

                    }
                    return json;
                }

	            /*var oView = this.getView();
		  	    var oModelCodBarras = new sap.ui.model.json.JSONModel();
		  		 //ajax GET Only to return TOKEN value
				 $.ajax({
	                url: "https://integration-suite-dev-qa-rh8a2037.it-cpi008-rt.cfapps.br10.hana.ondemand.com/http/Convert_xml_to_json",
	                method: "GET",
	                dataType: 'xml',
	                async: false,
	                xhrFields: { withCredentials: true },
	                headers: {
	            		"X-Requested-With": "XMLHttpRequest",
	                	"Content-Type": "application/xml"
	            		},
	            	data: { file },
	             success: function (data, status, response) {
	             	var token = response.getResponseHeader("x-csrf-token");
	             	   //if(data.d.results.length > 0){
		            	//oModelCodBarras.setData(data.d.results);
		            	//oView.setModel(oModelCodBarras, "codBarras");
	             	   //}
	             },
	             error: function (data, status, response) {
	             	//oModelCodBarrasEmpty.setData(data.d.results);
	                //oView.setModel(oModelCodBarrasEmpty, "codBarras");
	            }; */   

             //this.getRouter().navTo("RouteOrdersList");
        },
 
    });

});
