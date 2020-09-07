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
        // var person = {'cse':0, 'ece':1, 'me':2, 'bt':3};
        // var x = person[resArr[0]];
            // console.log(x);
        if(res.cse<=0){
            document.getElementById("dept").options[0].disabled=true;
        }
        if(res.ece<=0){
            document.getElementById("dept").options[1].disabled=true;
        }
        if(res.me<=0){
            document.getElementById("dept").options[2].disabled=true;
        }
        if(res.bt<=0){
            document.getElementById("dept").options[3].disabled=true;
        }
        // document.getElementById("dept").options[x].disabled=true;
        setTimeout(fetch,100);
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
            var resArr = error.split(".");

            
            // ele = document.getElementById(error);
            // document.getElementById('error').innerHTML = error;
            // ele.disabled;

            var person = {'cse':0, 'ece':1, 'me':2, 'bt':3};
            var x = person[resArr[0]];
            // console.log(x);
            document.getElementById("dept").options[x].disabled=true;
            // setTimeout(fetch,3000);
            // document.write('NO SEAT LEFT BOI');
        }
    };
    
    xhr.send(str);

    
}