xhr = new XMLHttpRequest();
n=2;

function fetch(){
    xhr.onreadystatechange = show;
    xhr.timeout = 3000; // give as 2000 to handle backoff
    xhr.ontimeout = backoff;
    xhr.open("GET","index.php",true);
    xhr.send();
}

function show(){
    if(xhr.readyState == 4 && xhr.status == 200){
        var res = JSON.parse(xhr.responseText);
        // var res = xhr.responseText;
        console.log(res);
        // var resArr = res.split(";");
        document.getElementById("CSE").innerHTML = res.cse;
        document.getElementById("ECE").innerHTML = res.ece;
        document.getElementById("ME").innerHTML = res.me;
        document.getElementById("BT").innerHTML = res.bt;
        setTimeout(fetch,3000);
    }
    
    

}
function backoff(){
    console.log("Looks like we have failed!!!");
    setTimeout(fetch,2*n*1000);
    n=n*2;
    console.log("The value of n is"+ n);
}

function update(){
    // console.log('hello');
    var branch = document.getElementById("dept").value;
    // console.log(branch);

    var str = "dept="+branch+"&post=post";
    // console.log(str);

    var xhr = new XMLHttpRequest();
    var url = "index.php";
    xhr.open("POST", url, true); 
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if( xhr.readyState==4 && xhr.status==200 ){
            console.log( xhr.responseText );
        }
        else if(xhr.readyState == 4 && xhr.status == 400){
            var error = xhr.responseText;
            document.getElementById("error").innerHTML = error;
            // setTimeout(fetch,3000);
            // document.write('NO SEAT LEFT BOI');
        }
    };
    
    xhr.send(str);

    
}