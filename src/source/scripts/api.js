
   var requestList = {};
  var api = {
  	//获取所属港区
  	getHarborList:{url:'/base/shipCompany/getHarborList',type:'get'},
  	//所属船公司
    getShipCompanyList:{url:'/base/shipCompany/getShipCompanyList',type:'get'},
    //所有司机
    getDriverList:{url:'/base/trailer/getDriverList',type:'post'},
    //所有拖车规格
    getTrailerSpceTypeList:{url:'/base/trailer/getTrailerSpceTypeList',type:'post'},
	//所有拖车司机
    getTrailerList:{url:'/schedule/schedule/getTrailerList',type:'get'},
    //所有车队
    getCarTeamList:{url:'/system/user/getCarTeamList',type:'post'},
    //所有码头
    getDockList:{url:'/system/user/getDockList',type:'post'},
    //所有角色
    getRoleList:{url:'/system/user/getRoleList',type:'post'},
	//所有办单申请状态
    getSingleStatusList:{url:'/order/apply/getStatusList',type:'get'},
    //所有办单状态
    getOrderStatusList:{url:'/order/shipCompanyContract/getOrderStatusList',type:'get'},
    //所有行程状态
    getScheduleStatusList:{url:'/schedule/schedule/getScheduleStatusList',type:'get'},
    //所有交易类别
    getTransactionTypeList:{url:'/order/transaction/getTransactionTypeList',type:'get'},
    //所有危险品类别
    getDangerousGoodsTypes:{url:'/warning/dangerousGoods/getDangerousGoodsTypes',type:'get'},
      //行程预警类型下拉列表
       getScheduleWarningSelectList:{url:'/schedule/schedule/getScheduleWarningSelectList',type:'get'},
      getType:{url:'../../data/type.json',type:'get'}

  }

  for(var key in api){
  	(function(key){
  		requestList[key] = function (param) {
			var param = param || {}
		    param.url = api[key].url;
		    param.type = api[key].type;
		   return $.ajax(param)
		}
  	})(key)
  }
