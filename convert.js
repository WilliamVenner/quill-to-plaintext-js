module.exports = function(delta) {
	let delta_obj = null;
	if (typeof delta === "string")
		delta_obj = JSON.parse(delta);
	else if (typeof delta === "object")
		delta_obj = delta;
	
	if (delta_obj === null || !"ops" in delta_obj) throw "Can't convert invalid Quill Delta to plaintext!";
	
	let plaintext = "";
	for (let i=0; i < delta_obj.ops.length; i++) {
		let op = delta_obj.ops[i];
		if (op.insert) {
			if (typeof op.insert === "string") {
				plaintext += op.insert;
			} else {
				plaintext += " ";
			}
		}
	}
	
	return plaintext;
};