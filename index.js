var moment = require('moment');

exports.wrap = function(entity, request){
	var ret = {};
	console.log("wrapping entity: " + JSON.stringify(entity));
	for(var key in entity){
		console.log("parsing field " + JSON.stringify(key));
		if(request.body[key] !== undefined){
			switch(entity[key].type){
				case "integer":
					ret[key] = parseInt(request.body[key]);
					break;
					
				case "float":
					ret[key] = parseFloat(request.body[key]);
					break;
					
				case "date":
					ret[key] = formatDate(request.body[key], entity[key].format);
					break;
					
				case "datetime":
					ret[key] = formatDateTime(request.body[key], entity[key].format);
					break;
					
				default :
					ret[key] = request.body[key];
			}
		}
	}
	return ret;
}

formatDate = function(inp, format){
	return moment(inp, format);
}

formatDateTime = function(inp, format){
	return moment(inp.replace('T',' '), format);
}
