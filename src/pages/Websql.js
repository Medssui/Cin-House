import $ from 'jquery';


var db = openDatabase("TrackUser","1.0","Users History",65535);

export function createTableUsers()
{
    db.transaction(function(transaction){
       var s = "CREATE TABLE IF NOT EXISTS Users "+
       "(mail VARCHAR(40) UNIQUE,"+
       "id INT PRIMARY KEY)";
transaction.executeSql(s,undefined)
var q = "CREATE TABLE IF NOT EXISTS Favorie "+
       "(mail VARCHAR(100),"+
       "idFavorie INT UNIQUE,"+
       "NameFavorie VARCHAR(200),"+
       "ImgFavorie BLOB)";
transaction.executeSql(q,undefined)});
}

export function InsertUser(mail,)
{
    db.transaction(function (tx) {  
        tx.executeSql('INSERT INTO Users (mail,id) VALUES (?, ?)', [mail]);
      });
    }


export function InsertFavorite(email,idF,NomF,ImgF)
{
    db.transaction(function (ts) {  
        ts.executeSql('INSERT INTO Favorie (mail,idFavorie,NameFavorie,ImgFavorie) VALUES (?, ?,?,?)', [email,idF,NomF,ImgF]);
      });}

export function ShowFavorite(email)
{
  db.transaction(function(transaction){
		var sql=`SELECT DISTINCT NameFavorie,ImgFavorie FROM Favorie  WHERE mail='${email}'`;
		transaction.executeSql(sql,undefined,function(_transaction,result){
if(result.rows.length){
  for(var i=0;i<result.rows.length;i++){
	var row=result.rows.item(i);
   var NameFavorie = row.NameFavorie;
   var ImgFavorie = row.ImgFavorie;
   $('#favorites').append('<div class="column"><img src="'+ImgFavorie+'"><h4>'+NameFavorie+'</h4></div>')
}
}
		})
	});
}