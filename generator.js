var word = "";
function import_function(n) {
    word = n.trim();

}
function find_math(word){
    var ind_list = [];
    var ind = [0,0];
    var content = [];
    var full_txt = word;
    while (True){
        ind[0] = word.search("math");
        if (ind[0] == -1){return}
        ind[0] = ind[0] + 5;
        word = word.substring(ind[0]);
        ind[1] = word.search("}");
        content.push(full_txt.substring(ind[0],ind[1]));
        ind_list.push(ind);
    }
}
    function choose_word(word){
        var arr = word.split(".");
        time_clip = call_flag();
        console.log(arr);
        var content = document.getElementById("cnt");
        for(i=0;i<arr.length;i++){
            if (i<time_clip[0]){
                start_time = 0;
                end_time = time_clip[1];
            } else {
                start_time = time_clip[1];
                end_time = 213;
            }
            var x = "<a onclick='play("+start_time+","+end_time+")'>"+arr[i]+".</a>";
            content.innerHTML += x;
        }
    }
    function call_flag(){
        var time_clip = localStorage.getItem("time_clip");
        if (time_clip==null){time_clip=[1,30];}
        return time_clip;
    }
    function add() {
        var tab_1 = document.getElementById("tab_1");
        var i = tab_1.getElementsByTagName("TR").length;
        var tr = tab_1.insertRow(-1);
        var cell = tr.insertCell(-1);
        i = i+1;
        
        cell.innerHTML = i;
        var cell2 = tr.insertCell(-1);
        var x = document.createElement("INPUT");
        x.setAttribute("type","text");
        x.setAttribute("id","input_"+i);
        console.log(i);
        cell2.appendChild(x);   
    }