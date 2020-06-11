var name =["yaakov","raj","rio"];
console.log(name);
for(var i=0;i<name.length;i++){
	console.log("Hello"+name[i]);
}
name[3]="Jim";
for (var i=0;i<name.length;i++){
	console.log("Goodbye"+name[i]);
}