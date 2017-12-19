
exports.wrap = function(entity, request){
	var ret = {};
	console.log("wrapping entity: " + JSON.stringify(entity));
	for(var key in entity){
		console.log("parsing field " + JSON.stringify(key));
		if(request.body[key] !== undefined){
			if(entity[key].type == "integer"){
				ret[key] = parseInt(request.body[key]);
			}else{
				ret[key] = request.body[key];
			}
		}
	}
	return ret;
}
