// @author: Jeffrey van Bijleveld

var moment = require('moment');

exports.wrap = function(entity, request){
	var ret = {};
	for(var key in entity){
			if(request[key] !== undefined){
			switch(entity[key].type){
				case "integer":
					ret[key] = parseInt(request[key]);
					break;
					
				case "float":
					ret[key] = parseFloat(request[key]);
					break;
					
				case "date":
					ret[key] = formatDate(request[key], entity[key].format);
					break;
					
				case "datetime":
					ret[key] = formatDateTime(request[key], entity[key].format);
					break;
					
				default :
					ret[key] = request[key];
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
