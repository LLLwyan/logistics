// JavaScript Document
    /**ztree的参数配置，setting主要是设置一些tree的属性，是本地数据源，还是远程，动画效果，是否含有复选框等等**/    
    var setting = {  
     check: { /**复选框**/  
      enable: true,  
      autoCheckTrigger: true,
      chkboxType: {"Y":"ps", "N":"ps"}  
     },  
     view: {                                     
      expandSpeed: 300 //设置树展开的动画速度，IE6下面没效果，  
     },                            
     data: {                                    
      simpleData: {   //简单的数据源，一般开发中都是从数据库里读取，API有介绍，这里只是本地的                           
       enable: true,  
       idKey: "id",  //id和pid，这里不用多说了吧，树的目录级别  
       pIdKey: "pId",  
       rootPId: 0   //根节点  
      }                            
     },                           
     callback: {     /**回调函数的设置，随便写了两个**/  
      beforeClick: beforeClick,                                    
      onCheck: onCheck                            
     }  
    };  
    function beforeClick(treeId, treeNode) {  
     alert("beforeClick");  
    }  
    function onCheck(e, treeId, treeNode) {  
   /*   alert("onCheck");   */
    }       
      
    var citynodes1 = [      /**自定义的数据源，ztree支持json,数组，xml等格式的**/  
     {id:0, pId:-1, name:"权限组"},    
     {id:1, pId:0, name:"柏阳深圳", open:true},   
     {id:11, pId:1, name:"总经理组"},   
     {id:12, pId:1, name:"运价组"},   
     {id:13, pId:1, name:"运价经理组"},   
     {id:14, pId:1, name:"销售组"},
	 {id:15, pId:1, name:"销售经理组"},   
     {id:16, pId:1, name:"操作经理组"},   
     {id:17, pId:1, name:"财务组"},
	 {id:18, pId:1, name:"财务经理组"},   
     {id:19, pId:1, name:"IT组"}
    ];
	var citynodes2 = [      /**自定义的数据源，ztree支持json,数组，xml等格式的**/  
     {id:0, pId:-1, name:"关系组"},    
     {id:1, pId:0, name:"柏阳深圳", open:true},   
     {id:11, pId:1, name:"总经理组"},   
     {id:12, pId:1, name:"运价组"},   
     {id:13, pId:1, name:"运价经理组"},   
     {id:14, pId:1, name:"销售组"},
	 {id:15, pId:1, name:"销售经理组"},   
     {id:16, pId:1, name:"操作经理组"},   
     {id:17, pId:1, name:"财务组"},
	 {id:18, pId:1, name:"财务经理组"},   
     {id:19, pId:1, name:"IT组"}
    ];

/*部门管理树形数据*/
	var depart = [      /**自定义的数据源，ztree支持json,数组，xml等格式的**/  
		 {id:0, pId:-1, name:"柏阳识别"},    
		 {id:1, pId:0, name:"柏阳识别", open:true},   
		 {id:11, pId:1, name:"数据1"},   
		 {id:12, pId:1, name:"数据2"},   
		 {id:13, pId:1, name:"数据3"}
		]



