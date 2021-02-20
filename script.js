    // ここから！
    (function(){
    
    //要素の取得
    var elements = document.getElementsByClassName("drag-and-drop");
    
    //要素内のクリックされた位置を取得するグローバル（のような）変数
    var x;
    var y;
    
    //マウスが要素内で押されたとき、又はタッチされたとき発火
    for(var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("mousedown", mdown, false);
        elements[i].addEventListener("touchstart", mdown, false);
    }
    
    //マウスが押された際の関数
    function mdown(e) {
    
        //クラス名に .drag を追加
        this.classList.add("drag");
    
        //タッチデイベントとマウスのイベントの差異を吸収
        if(e.type === "mousedown") {
            var event = e;
        } else {
            var event = e.changedTouches[0];
        }
    
        //要素内の相対座標を取得
        x = event.pageX - this.offsetLeft;
        y = event.pageY - this.offsetTop;
    
        //ムーブイベントにコールバック
        document.body.addEventListener("mousemove", mmove, false);
        document.body.addEventListener("touchmove", mmove, false);
    }
    
    //マウスカーソルが動いたときに発火
    function mmove(e) {
    
        //ドラッグしている要素を取得
        var drag = document.getElementsByClassName("drag")[0];
    
        //同様にマウスとタッチの差異を吸収
        if(e.type === "mousemove") {
            var event = e;
        } else {
            var event = e.changedTouches[0];
        }
    
        //フリックしたときに画面を動かさないようにデフォルト動作を抑制
        e.preventDefault();
    
        //マウスが動いた場所に要素を動かす
        drag.style.top = event.pageY - y + "px";
        drag.style.left = event.pageX - x + "px";
    
        //マウスボタンが離されたとき、またはカーソルが外れたとき発火
        drag.addEventListener("mouseup", mup, false);
        document.body.addEventListener("mouseleave", mup, false);
        drag.addEventListener("touchend", mup, false);
        document.body.addEventListener("touchleave", mup, false);
    
    }
    
    //マウスボタンが上がったら発火
    function mup(e) {
        var drag = document.getElementsByClassName("drag")[0];
    
        //ムーブベントハンドラの消去
        document.body.removeEventListener("mousemove", mmove, false);
        drag.removeEventListener("mouseup", mup, false);
        document.body.removeEventListener("touchmove", mmove, false);
        drag.removeEventListener("touchend", mup, false);
    
        //クラス名 .drag も消す
        drag.classList.remove("drag");
    }
    
    })()
    
    //ここまで！
    
    console.log("%c個人情報は、決して盗まないでください。", 'color: red; background: white; font-size: 30px;');
    
    function btnn() {
        location.href = "http://localhost/nakazawa/App/crossmusic%20home.php";
    }  
    
            document.getElementById("songs").style.display = "block";
            document.getElementById("searchdis").style.display = "none";
            document.getElementById("playlistdis").style.display = "none";
            document.getElementById("settingdis").style.display = "none";
            document.getElementById("videodis").style.display = "none";
            document.getElementById("pract").style.display = "none";
            document.getElementById("out1").style.display = "none";
            document.getElementById("pract1").style.display = "none";
            //document.getElementById("api").style.display = "block";
            document.getElementById("out0").style.display = "none";
            document.getElementById("out2").style.display = "none";
            document.getElementById("box").style.display = "none";
            document.getElementById("vvv").style.display = "none";
    
            function out1() {
                document.getElementById("songs").style.display = "none";
                document.getElementById("searchdis").style.display = "none";
                document.getElementById("playlistdis").style.display = "none";
                document.getElementById("settingdis").style.display = "none";
                document.getElementById("videodis").style.display = "none";
                document.getElementById("pract").style.display = "none";
                document.getElementById("out1").style.display = "block";
                document.getElementById("pract1").style.display = "none";
                //document.getElementById("api").style.display = "block";
                document.getElementById("out0").style.display = "none";
                document.getElementById("out2").style.display = "none";
                document.getElementById("box").style.display = "none";
                document.getElementById("vvv").style.display = "none";
            }
    
            function out0() {
                document.getElementById("songs").style.display = "none";
                document.getElementById("searchdis").style.display = "none";
                document.getElementById("playlistdis").style.display = "none";
                document.getElementById("settingdis").style.display = "none";
                document.getElementById("videodis").style.display = "none";
                document.getElementById("pract").style.display = "none";
                document.getElementById("out1").style.display = "none";
                document.getElementById("pract1").style.display = "none";
                //document.getElementById("api").style.display = "block";
                document.getElementById("out0").style.display = "block";
                document.getElementById("out2").style.display = "none";
                document.getElementById("box").style.display = "none";
                document.getElementById("vvv").style.display = "none";
            }
    
            function out2() {
                document.getElementById("songs").style.display = "none";
                document.getElementById("searchdis").style.display = "none";
                document.getElementById("playlistdis").style.display = "none";
                document.getElementById("settingdis").style.display = "none";
                document.getElementById("videodis").style.display = "none";
                document.getElementById("pract").style.display = "none";
                document.getElementById("out1").style.display = "none";
                document.getElementById("pract1").style.display = "none";
                //document.getElementById("api").style.display = "block";
                document.getElementById("out0").style.display = "none";
                document.getElementById("out2").style.display = "block";
                document.getElementById("box").style.display = "none";
                document.getElementById("vvv").style.display = "none";
            }
    
            function home() {
                document.getElementById("songs").style.display = "block";
                document.getElementById("searchdis").style.display = "none";
                document.getElementById("playlistdis").style.display = "none";
                document.getElementById("settingdis").style.display = "none";
                document.getElementById("videodis").style.display = "none";
                document.getElementById("pract").style.display = "none";
                document.getElementById("out1").style.display = "none";
                document.getElementById("pract1").style.display = "none";
                //document.getElementById("api").style.display = "block";
                document.getElementById("out0").style.display = "none";
                document.getElementById("out2").style.display = "none";
                document.getElementById("box").style.display = "none";
                document.getElementById("vvv").style.display = "none";
            }
            function searchpage() {
                document.getElementById("searchdis").style.display = "block";
                document.getElementById("songs").style.display = "none";
                document.getElementById("playlistdis").style.display = "none";
                document.getElementById("settingdis").style.display = "none";
                document.getElementById("videodis").style.display = "none";
                document.getElementById("pract").style.display = "none";
                document.getElementById("out1").style.display = "none";
                document.getElementById("pract1").style.display = "none";
                //document.getElementById("api").style.display = "block";
                document.getElementById("out0").style.display = "none";
                document.getElementById("out2").style.display = "none";
                document.getElementById("box").style.display = "none";
                document.getElementById("vvv").style.display = "none";
            }
            function playlist() {
                document.getElementById("vvv").style.display = "none";
                document.getElementById("playlistdis").style.display = "block";
                document.getElementById("searchdis").style.display = "none";
                document.getElementById("songs").style.display = "none";
                document.getElementById("settingdis").style.display = "none";
                document.getElementById("videodis").style.display = "none";
                document.getElementById("pract").style.display = "none";
                document.getElementById("out1").style.display = "none";
                document.getElementById("pract1").style.display = "none";
                //document.getElementById("api").style.display = "block";
                document.getElementById("out0").style.display = "none";
                document.getElementById("out2").style.display = "none";
                document.getElementById("box").style.display = "none";
            }
            function setting() {
                document.getElementById("vvv").style.display = "none";
                document.getElementById("settingdis").style.display = "block";
                document.getElementById("searchdis").style.display = "none";
                document.getElementById("playlistdis").style.display = "none";
                document.getElementById("songs").style.display = "none";
                document.getElementById("videodis").style.display = "none";
                document.getElementById("pract").style.display = "none";
                document.getElementById("out1").style.display = "none";
                document.getElementById("pract1").style.display = "none";
                //document.getElementById("api").style.display = "block";
                document.getElementById("out0").style.display = "none";
                document.getElementById("out2").style.display = "none";
                document.getElementById("box").style.display = "none";
            }
            function videopage() {
                document.getElementById("settingdis").style.display = "none";
                document.getElementById("searchdis").style.display = "none";
                document.getElementById("playlistdis").style.display = "none";
                document.getElementById("songs").style.display = "none";
                document.getElementById("videodis").style.display = "block";
                document.getElementById("pract").style.display = "none";
                document.getElementById("out1").style.display = "none";
                document.getElementById("pract1").style.display = "none";
                //document.getElementById("api").style.display = "block";
                document.getElementById("out0").style.display = "none";
                document.getElementById("out2").style.display = "none";
                document.getElementById("box").style.display = "none";
                document.getElementById("vvv").style.display = "none";
            }
            function fff1() {
                document.getElementById("settingdis").style.display = "none";
                document.getElementById("searchdis").style.display = "none";
                document.getElementById("playlistdis").style.display = "none";
                document.getElementById("songs").style.display = "none";
                document.getElementById("videodis").style.display = "none";
                document.getElementById("pract").style.display = "block";
                document.getElementById("out1").style.display = "none";
                document.getElementById("pract1").style.display = "none";
                //document.getElementById("api").style.display = "block";
                document.getElementById("out0").style.display = "none";
                document.getElementById("out2").style.display = "none";
                document.getElementById("box").style.display = "none";
                document.getElementById("vvv").style.display = "none";
            }
    
    //itunesについて
    
    document.onkeypress = enter;
    function enter(){
        if( window.event.keyCode == 13 ){
            target = document.getElementById("searchbtn2");
            target0 = document.getElementById("searchbtn1")
            word = target.value;
            word0 = target0.value;
            if(word == "お気に入り Crossmusic") {
                document.getElementById("result").innerHTML = '<h3 style="color: white;margin-left: 30px;">あなたのお気に入りを登録してください。</h3>';
            }
            if (word == '') {
                search({term: word0,limit: 20});
            }else {
                search({term: word,limit: 20});
            }
            document.getElementById("searchdis").style.display = "block";
            document.getElementById("songs").style.display = "none";
            document.getElementById("playlistdis").style.display = "none";
            document.getElementById("settingdis").style.display = "none";
            document.getElementById("videodis").style.display = "none";
            document.getElementById("pract").style.display = "none";
            document.getElementById("out1").style.display = "none";
            document.getElementById("pract1").style.display = "none";
            //document.getElementById("api").style.display = "block";
            document.getElementById("out0").style.display = "none";
            document.getElementById("out2").style.display = "none";
            document.getElementById("box").style.display = "none";
            document.getElementById("vvv").style.display = "none";
    
            $('#res').html('');
            $('#buttons').html('');
            var searchField = $('#searchbtn2');
            var icon = $('#search-btn');
            q = $('#searchbtn2').val();
            q0 = $('#searchbtn1').val();
    
            if (q == '') {
                $.get(
                    "https://www.googleapis.com/youtube/v3/search",{
                    part: 'snippet, id',
                    q: q0,
                    type:'video',
                    key: 'AIzaSyBmDq6xDTCI12GvdKQNLAs6HBvgI8bH5GY'},
                    function(data){
                        var nextPageToken = data.nextPageToken;
                        var prevPageToken = data.prevPageToken;
                    
                        $.each(data.items, function(i, item){
                            var output = getOutput(item);
                            $('#res').append(output);
                        });
                    }
                );
            }else {
                $.get(
                    "https://www.googleapis.com/youtube/v3/search",{
                    part: 'snippet, id',
                    q: q,
                    type:'video',
                    key: 'AIzaSyBmDq6xDTCI12GvdKQNLAs6HBvgI8bH5GY'},
                    function(data){
                        var nextPageToken = data.nextPageToken;
                        var prevPageToken = data.prevPageToken;		
                        $.each(data.items, function(i, item){
                            var output = getOutput(item);
                            $('#res').append(output);
                        });
                    }
                );
            }
        }
    }
    
    var search = function getInfo (options) {
        var params = {
            lang: 'ja_jp',
            entry: 'music',
            media: 'music',
            country: 'JP',
        };
            
        if (options && options.term) {
            params.term = options.term;
        }
            
        if (options && options.limit) {
            params.limit = options.limit;
        }
              
        $.ajax({
            url: 'https://itunes.apple.com/search',
            //url: 'https://itunes.apple.com/jp/rss/topsongs/limit=100/json',
            method: 'GET',
            data: params,
            dataType: 'jsonp',
                
            success: function(json) {
                showData(json);
            },
    
            error:function () {
                console.log("no response!");
                document.getElementById("result").innerHTML = '<h2 style="color: white;">インターネット接続がありません。</h2>';
            }
        });
    };
            
    function showData(json) {
        if (json.results.length != 0) {//length
            target = document.getElementById("result");
            html  = '<div>';
                    
            for (var i = 0, len = json.results.length; i < len; i++) {//length
                var result = json.results[i];
            
                html +=   '<div id="token"><a href="' + result.trackViewUrl + '&amp;at=アフィリエイト・トークン" rel="nofollow" target="_blank">';
                html +=   '<img crossorigin style="width: 15%;height: 80%;" src="' + result.artworkUrl100 + '" class="itunes-embed-image"/>';
                html +=   '</a><br>';
                html +=   '<div id="matome"><h2 class="itunes-embed-artist">' + result.artistName + "「" + result.trackName + "」" + '</h2>'
                html += '<button id="' + result.trackId + '" onclick="replay_click(this.id)" style="width: 20%;height: 40px;font-size: 20px;color: white;background: rgb(32, 147, 201);outline: none;border: none;border-radius: 5px;cursor: pointer;">視聴する</button></div></div><br>'
            }
            html += '</div>';
        }
        target.innerHTML = html;
    }
    
    function replay_click(clicked_id) {
        document.getElementById("searchdis").style.display = "none";
        document.getElementById("songs").style.display = "none";
        document.getElementById("playlistdis").style.display = "none";
        document.getElementById("settingdis").style.display = "none";
        document.getElementById("videodis").style.display = "none";
        document.getElementById("pract").style.display = "block";
        document.getElementById("out1").style.display = "none";
        document.getElementById("pract1").style.display = "none";
        //document.getElementById("api").style.display = "block";
        document.getElementById("out0").style.display = "none";
        document.getElementById("out2").style.display = "none";
        document.getElementById("box").style.display = "none";
        document.getElementById("vvv").style.display = "none";

        htm = 'https://itunes.apple.com/lookup?id=' + clicked_id; // + '&country=JP'
    
        var pa = {
            lang: 'ja_jp', //ja_jp
            entry: 'music',
            media: 'music',
            country: 'JP', //JP
        };
    
        $.ajax({
            url: htm,
            method: 'GET',
            data: pa,
            dataType: 'jsonp',
                    
            success: function(json) {
                shows(json);
            },
            error:function () {
                console.log("no response!");
                document.getElementById("pract0").innerHTML = '<i class="fas fa-arrow-left" id="past" title="戻る" style="margin-left: 5px;" onclick="searchpage()"></i><br><br><h2 style="color: white;">インターネット接続がありません。</h2>';
            }
        });
    }
    
    function shows(json) {
        if (json.results.length != 0) {
            http  = '<div>';
                  
            for (var i = 0, len = json.results.length; i < len; i++) {
                var re = json.results[i];
                var pract0 = document.getElementById("pract0"); 
                pract0.style.background = ""
                window.defaultStatus = "今、" + re.trackName + "が、流れています。";
                console.log("この曲のidは、" + re.trackId + "です。");
                var sourceStr = re.artworkUrl100 ;
                var targetStr = "100x100bb.jpg" ;
                var regExp = new RegExp( targetStr, "g" ) ;
                var a = sourceStr.replace( regExp , "350x350bb.jpg" );
                var b = sourceStr.replace( regExp , "1300x1300bb.jpg");
                //document.getElementById("pract0").style.backgroundImage = 'url(' + b + ')'
                //b.style.webkitFilter = "blur(3px)";
                http += '<i class="fas fa-arrow-left" id="past" title="戻る" style="margin-left: 5px;float: left;font-size: 20px;" onclick="searchpage()"></i><i onclick="small()" id="past" class="fas fa-chevron-up" title="ラジオモードにする" style="margin-left: 1195px;float: left;font-size: 20px;"></i><br><br>';
                http += '<p style="text-align: center;"><img src="' + a + '" style="width: 300px;height: 300px;" crossorigin onclick="clicked1()"></p>';
                http += '<div class="xxx"><h1 style="color: white;text-align: center;">' + re.trackName + '-' + re.artistName + '</h1><br>';
                //http += '<a style="color: white;font-size: 25px;" href="' + re.trackViewUrl + '&amp;at=アフィリエイト・トークン" rel="nofollow" target="_blank">' + re.trackName + "　ダウンロード" + '</a><br></div><br><br>'
                http += '<div style="text-align: center;margin-top: 30px;"><div class="seek"><div class="fill"></div></div><div class="time">00:00 <span>/</span> 00:00</div>'
                http += '<div class="repeat-btns"><p style="text-align: center;"><span id="' + re.artistName + '" onclick="fff(this.id)"><i class="fas fa-tv" id="icon0" style="margin: 25px;" title="関連曲"></i></span><span><i style="margin: 25px" class="fas fa-microphone-alt" id="icon0" title="歌詞"></i></span><span><button class="play-pause" id="' + re.trackId + '" onclick="ok(this.id)" style="margin: 25px"><i title="再生" style="cursor: pointer;" class="fa fa-play"></i></button></span><span onclick="uuu()"><i title="お気に入り" class="fas fa-star" style="margin: 25px" id="icon0"></i></span><span id="' + re.trackViewUrl + '" onclick="download(this.id)"><i style="margin: 25px" id="icon0" title="ダウンロード" class="fas fa-download"></i></span></p></div>'
                http += '<br><br><br></div>';
                //console.log(re.trackViewUrl)
            }
            http += '</div>';
        }
        pract0.innerHTML = http;
    }

    function small() {
        var pract = document.getElementById("pract");
        pract.style.border = "1px solid blue";
        pract.style.height = "100px";
    }

        //document.getElementById("pract0").innerHTML = '<video src="' + clicked_id + '" autoplay loop muted style="position: static;z-index: 10;width: 100%;height: 600px;"></video>';

    function download(clicked_id) {
        location.href = clicked_id + "&at=アフィリエイト・トークン";
        //console.log(clicked_id + "&at=アフィリエイト・トークン")
    }

    function fff(clicked_id) {
        document.getElementById("searchdis").style.display = "none";
        document.getElementById("songs").style.display = "none";
        document.getElementById("playlistdis").style.display = "none";
        document.getElementById("settingdis").style.display = "none";
        document.getElementById("videodis").style.display = "none";
        document.getElementById("pract").style.display = "none";
        document.getElementById("out1").style.display = "none";
        document.getElementById("pract1").style.display = "none";
        //document.getElementById("api").style.display = "block";
        document.getElementById("out0").style.display = "none";
        document.getElementById("out2").style.display = "none";
        document.getElementById("box").style.display = "block";
        document.getElementById("vvv").style.display = "none";

        search11({term: clicked_id,limit: 20});
    }

    var search11 = function getInfo (options) {
        var params = {
            lang: 'ja_jp',
            entry: 'music',
            media: 'music',
            country: 'JP',
        };
            
        if (options && options.term) {
            params.term = options.term;
        }
            
        if (options && options.limit) {
            params.limit = options.limit;
        }
              
        $.ajax({
            url: 'https://itunes.apple.com/search',
            method: 'GET',
            data: params,
            dataType: 'jsonp',
                
            success: function(json) {
                shows11(json);
            }
        });
    };

    function shows11(json) {
        if (json.results.length != 0) {
            box = document.getElementById("box");
            html  = '<div>';
            html += '<i class="fas fa-times" id="past" title="戻る" style="margin-left: 5px;" onclick="fff1()"></i><br><br>';
            html += '<h1 style="color: white;">関連曲</h1><br>';
                    
            for (var i = 0, len = json.results.length; i < len; i++) {
                var result = json.results[i];
            
                html +=   '<div id="token"><a href="' + result.trackViewUrl + '&amp;at=アフィリエイト・トークン" rel="nofollow" target="_blank">';
                html +=   '<img crossorigin style="width: 15%;height: 80%;" src="' + result.artworkUrl100 + '" class="itunes-embed-image"/>';
                html +=   '</a><br>';
                html +=   '<div id="matome"><h2 class="itunes-embed-artist">' + result.artistName + "「" + result.trackName + "」" + '</h2>'
                html += '<button id="' + result.trackId + '" onclick="replay_click(this.id)" style="width: 20%;height: 40px;font-size: 20px;color: white;background: rgb(32, 147, 201);outline: none;border: none;border-radius: 5px;cursor: pointer;">視聴する</button></div></div><br>'
            }
            html += '</div>';
        }
        box.innerHTML = html;
    }
    
    function push(clicked_id) {
        document.getElementById("searchdis").style.display = "none";
        document.getElementById("songs").style.display = "none";
        document.getElementById("playlistdis").style.display = "none";
        document.getElementById("settingdis").style.display = "none";
        document.getElementById("videodis").style.display = "none";
        document.getElementById("pract").style.display = "block";
        document.getElementById("out1").style.display = "none";
        document.getElementById("pract1").style.display = "none";
        //document.getElementById("api").style.display = "block";
        document.getElementById("out0").style.display = "none";
        document.getElementById("out2").style.display = "none";
        document.getElementById("box").style.display = "none";
        document.getElementById("vvv").style.display = "none";

        htm = 'https://itunes.apple.com/lookup?id=' + clicked_id; // + '&country=JP'
    
        var pa = {
            lang: 'ja_jp', //ja_jp
            entry: 'music',
            media: 'music',
            country: 'JP', //JP
        };
    
        $.ajax({
            url: htm,
            method: 'GET',
            data: pa,
            dataType: 'jsonp',
                    
            success: function(json) {
                shows1(json);
            },
            error:function () {
                console.log("no response!");
                document.getElementById("pract0").innerHTML = '<i class="fas fa-arrow-left" id="past" title="戻る" onclick="searchpage()"></i><br><br><h2 style="color: white;">インターネット接続がありません。</h2>';
            }
        });
    }
    
    function shows1(json) {
        if (json.results.length != 0) {
            httppp  = '<div>';
                  
            for (var i = 0, len = json.results.length; i < len; i++) {
                var re = json.results[i];
                var pract0 = document.getElementById("pract0");   
                window.defaultStatus = "今、" + re.trackName + "が、流れています。";
                console.log("この曲のidは、" + re.trackId + "です。");
                var sourceStr = re.artworkUrl100 ;
                var targetStr = "100x100bb.jpg" ;
                var regExp = new RegExp( targetStr, "g" ) ;
                var a = sourceStr.replace( regExp , "350x350bb.jpg" );
                var b = sourceStr.replace( regExp , "1300x1300bb.jpg");

                httppp += '<i class="fas fa-arrow-left" id="past" title="戻る" style="margin-left: 5px;" onclick="searchpage()"></i><br><br>'
                httppp += '<p style="text-align: center;"><img src="' + a + '" style="width: 300px;height: 300px;" crossorigin></p>';
                httppp += '<div class="xxx"><h1 style="color: white;text-align: center;">' + re.trackName + '-' + re.artistName + '</h1><br>';
                //http += '<a style="color: white;font-size: 25px;" href="' + re.trackViewUrl + '&amp;at=アフィリエイト・トークン" rel="nofollow" target="_blank">' + re.trackName + "　ダウンロード" + '</a><br></div><br><br>'
                httppp += '<div style="text-align: center;margin-top: 30px;"><div class="seek"><div class="fill"></div></div><div class="time">00:00 <span>/</span> 00:00</div>'
                httppp += '<div class="repeat-btns"><p style="text-align: center;"><span id="' + re.artistName + '" onclick="fff(this.id)"><i class="fas fa-tv" id="icon0" style="margin: 25px;" title="関連曲"></i></span><span><i style="margin: 25px" class="fas fa-microphone-alt" id="icon0" title="歌詞"></i></span><span><button class="play-pause" id="' + re.trackId + '" onclick="ok(this.id)" style="margin: 25px"><i title="再生" style="cursor: pointer;" class="fa fa-play"></i></button></span><span onclick="uuu()"><i title="お気に入り" onclick="uuu()" class="fas fa-star" style="margin: 25px" id="icon0"></i></span><span id="' + re.trackViewUrl + '" onclick="download(this.id)"><i style="margin: 25px" id="icon0" title="ダウンロード" class="fas fa-download"></i></span></p></div>'
                httppp += '<br><br><br></div>';
            }
            httppp += '</div>';
        }
        pract0.innerHTML = httppp;
    }
    
    
    //function li(clicked_id) {
    //    var nummm = 'https://itunes.apple.com/lookup?id=' + clicked_id;
    //    var papapa = {lang: 'ja_jp',entry: 'music',media: 'music',country: 'JP',};
    
        //$.ajax({url: nummm,method: 'GET',data: papapa,dataType: 'jsonp',
        //    success: function(json) {
        //      showeded(json);
        //    },
        //});
    //}
    
    //function showeded(json) {
    //    if (json.results.length != 0) {
    //        for (var i = 0, len = json.results.length; i < len; i++) {
    //            var r00 = json.results[i];
    //            var artist = r00.artistName;
    //            var track = r00.trackName;
    //            $.get("https://api.lyrics.ovh/v1/" + artist + "/" + track,
    //                function(data) {
    //                   var neww = data.lyrics.replace(new RegExp("\n", "g"), "<br>");
    //                    document.getElementById("lyrics").innerHTML = neww;
                        //if(neww != null) {
                        //    document.getElementById("lyrics").innerHTML = neww;
                        //}else {
                        //    document.getElementById("lyrics").innerHTML = "歌詞を取得できませんでした";
                        //}
    //                },
    //            )
    //        }
    //    }
    //}
    
    function ok(clicked_id) {
        var num = 'https://itunes.apple.com/lookup?id=' + clicked_id;
        var papa = {
            lang: 'ja_jp',
            entry: 'music',
            media: 'music',
            country: 'JP',
        };
    
        $.ajax({
            url: num,
            method: 'GET',
            data: papa,
            dataType: 'jsonp',
            
            success: function(json) {
                showed(json);
            }
        });
    }
    
    function showed(json) {
        if (json.results.length != 0) {
            for (var i = 0, len = json.results.length; i < len; i++) {
                let audio = new Audio();
                var rep = json.results[i];
                let fillbar = document.querySelector(".fill");
                let audios = [rep.previewUrl];
                let currentTime = document.querySelector(".time");
                let currentSong = 0;
                audio.src = audios[currentSong];
                if (audio.paused) {
                    audio.play();
                    let playBtn = document.querySelector(".play-pause");
                    playBtn.innerHTML = '<i title="停止できません" style="cursor: not-allowed" class="fa fa-pause"></i>';
                    //もうひとつ、同じような停止用のfunction作っておいたら停止できるかも。
                }
                audio.addEventListener("timeupdate", function() {
                    let position = audio.currentTime / audio.duration;
                    fillbar.style.width = position * 100 + "%";
                    convertTime(Math.round(audio.currentTime));
                });
                  
                function convertTime(seconds) {
                    let min = Math.floor(seconds / 60);
                    let sec = seconds % 60;
                    min = min < 10 ? "0" + min : min;
                    sec = sec < 10 ? "0" + sec : sec;
                    currentTime.textContent = min + ":" + sec;
                    totalTime(Math.round(audio.duration));
                }
                  
                function totalTime(seconds) {
                    let min = Math.floor(seconds / 60);
                    let sec = seconds % 60;
                    min = min < 10 ? "0" + min : min;
                    sec = sec < 10 ? "0" + sec : sec;
                    currentTime.textContent += " / " + min + ":" + sec;
                }
            }
        }
    }
    
    //youtubeについて
    
    function getOutput(item) {
        var title = item.snippet.title;
        var description = item.snippet.description;
        //var thumb = item.snippet.thumbnails.high.url;
        var img = item.snippet.thumbnails.medium.url
        var channelTitle = item.snippet.channelTitle;
        var videoDate = item.snippet.publishedAt;
        var videoId = item.id.videoId; //id.videoId
        var output = '<div id="div0">' + 
        '<div class="list-left" style="margin-right: 10%;">' + 
        //'<iframe id="pre" src="https://www.youtube.com/embed/' + videoId + '" style="width: 350px;height: 180px;"></iframe>' +
        '<img src="' + img + '" id="pre" style="width: 350px;height: 180px;">' + 
        '</div>' +
        '<div class="list-right">' +
        '<h3 style="color: white;">'+title+'</a></h3>' +
        '<h3 style="color: white;">By <span class="cTitle">' + channelTitle + '</span> on ' + videoDate + '</h3>' +
        '<button id="' + videoId + '" onclick="youtube_click(this.id)" style="width: 20%;height: 40px;font-size: 20px;color: white;background: rgb(32, 147, 201);outline: none;border: none;border-radius: 5px;cursor: pointer;margin-left: 20px;">視聴する</button>' + 
        '</div>' +
        '</div>' +
        '<div id="clear"></div><br><br>';
        return output;
    }
    
    function youtube_click(clicked_id) {
        document.getElementById("searchdis").style.display = "none";
        document.getElementById("songs").style.display = "none";
        document.getElementById("playlistdis").style.display = "none";
        document.getElementById("settingdis").style.display = "none";
        document.getElementById("videodis").style.display = "none";
        document.getElementById("pract").style.display = "none";
        document.getElementById("out1").style.display = "none";
        document.getElementById("pract1").style.display = "block";
        //document.getElementById("api").style.display = "block";
        document.getElementById("out0").style.display = "none";
        document.getElementById("out2").style.display = "none";
        document.getElementById("box").style.display = "none";
        document.getElementById("vvv").style.display = "none";
        var api = document.getElementById("api");
        var pract2 = document.getElementById("pract2");
    
        $.get(
            "https://www.googleapis.com/youtube/v3/videos?id=" +clicked_id + "&key=AIzaSyBmDq6xDTCI12GvdKQNLAs6HBvgI8bH5GY&part=snippet,contentDetails,statistics,status",{
                part: 'snippet, id'},
                function(data){
                    var nextPageToken = data.nextPageToken;
                    var prevPageToken = data.prevPageToken;
                    $.each(data.items, function(i, item){
                        var title = item.snippet.title;
                        var description = item.snippet.description;
                        var thumb = item.snippet.thumbnails.high.url;
                        var channelTitle = item.snippet.channelTitle;
                        var videoDate = item.snippet.publishedAt;
                        var videoId = item.snippet.videoId;
                        window.defaultStatus = "今、" + title + "が、流れています。"

                        var underput = '<i class="fas fa-arrow-left" id="past" style="margin-left: 5px;" title="戻る" onclick="searchpage()"></i><br><br><p style="text-align: center;"><iframe id="iframe" frameborder="0" src="https://www.youtube.com/embed/' + clicked_id + '" style="width: 70%;height: 400px;margin-top: 10px;"></iframe></p>' +
                        '<div class="xxx"><h2 style="color: white;margin-top: 45px;text-align: center;">' + title + '</h2>' + 
                        '<div style="text-align: center;margin-top: 30px;">' + 
                        '<div class="repeat-btns"><p style="text-align: center;"><span><i class="fas fa-tv" id="icon0" style="margin: 25px;" title="関連曲"></i></span><span><i style="margin: 25px" class="fas fa-microphone-alt" id="icon0" title="歌詞"></i></span><span><button class="play-pause" style="margin: 25px" id="' + clicked_id + '" onclick="ok1(this.id)"><i title="拡大" style="cursor: pointer;" class="fas fa-expand"></i></button></span><span><i onclick="uuu()" title="お気に入り" class="fas fa-star" style="margin: 25px" id="icon0"></i></span><span id="videoId" onclick="youtuber(this.id)"><i style="margin: 25px" id="icon0" title="ダウンロード" class="fas fa-download"></i></span></p></div>' + 
                        '<br><br><br></div>';
                        pract2.innerHTML = underput;
                        var api1 = '<iframe frameborder="0" src="https://www.youtube.com/embed/' + clicked_id + '" style="width: 100%;height: 90%;"></iframe>';
                        api.innerHTML = api1;
                        api.style.display = "block";
                        console.log("この曲のidは、" + clicked_id + "です。");
                    });
                }
        );
    }

    function ok1(clicked_id) {
        document.getElementById("searchdis").style.display = "none";
        document.getElementById("songs").style.display = "none";
        document.getElementById("playlistdis").style.display = "none";
        document.getElementById("settingdis").style.display = "none";
        document.getElementById("videodis").style.display = "none";
        document.getElementById("pract").style.display = "none";
        document.getElementById("out1").style.display = "none";
        document.getElementById("pract1").style.display = "block";
        //document.getElementById("api").style.display = "block";
        document.getElementById("out0").style.display = "none";
        document.getElementById("out2").style.display = "none";
        document.getElementById("box").style.display = "none";
        document.getElementById("vvv").style.display = "block";
        var videos = '<iframe frameborder="0" style="height: 650px;width: 100%;margin: 0;" src="https://www.youtube.com/embed/' + clicked_id + '"></iframe>';
        document.getElementById("iframe-inner").innerHTML = videos;
    }

    function ok2() {
        document.getElementById("searchdis").style.display = "none";
        document.getElementById("songs").style.display = "none";
        document.getElementById("playlistdis").style.display = "none";
        document.getElementById("settingdis").style.display = "none";
        document.getElementById("videodis").style.display = "none";
        document.getElementById("pract").style.display = "none";
        document.getElementById("out1").style.display = "none";
        document.getElementById("pract1").style.display = "block";
        //document.getElementById("api").style.display = "block";
        document.getElementById("out0").style.display = "none";
        document.getElementById("out2").style.display = "none";
        document.getElementById("box").style.display = "none";
        document.getElementById("vvv").style.display = "none";
        document.getElementById("iframe-inner").innerHTML = "";
    }

    function youtuber(clicked_id) {
        location.href = "https://www.youtube.com/watch?v=" + clicked_id;
    }

    //function ly1(clicked_id) {
    //    $.get(
    //        "https://www.googleapis.com/youtube/v3/videos?id=" +clicked_id + "&key=AIzaSyCJRI6ANgqNY3GswCGQ1kkLjpSxm9az7qQ&part=snippet,contentDetails,statistics,status",{
    //        part: 'snippet, id'},
    ////        function(data){
    //            var nextPageToken = data.nextPageToken;
    //            var prevPageToken = data.prevPageToken;			
    //            $.each(data.items, function(i, item){
    //            var track = item.snippet.title;
    //            var description = item.snippet.description;
    //            var img = item.snippet.thumbnails.medium.url
    //            var artist = item.snippet.channelTitle;
    //            var videoDate = item.snippet.publishedAt;
    //            var videoId = item.id.videoId; //id.videoId
    //            $.get("https://api.lyrics.ovh/v1/" + artist + "/" + track,
    //                function(data) {
    //                    var neww = data.lyrics.replace(new RegExp("\n", "g"), "<br>");
    //                    document.getElementById("lyrics1").innerHTML = neww;
    //                },
    //            )
    //            });
    //        }
    //    );
    //}

    function prec() {
        $('#pop').html('');
        $('#buttons').html('');
        q = "最近人気のMV";
        $.get(
            "https://www.googleapis.com/youtube/v3/search",{
                part: 'snippet, id',
                q: q,
                type:'video',
                key: 'AIzaSyBmDq6xDTCI12GvdKQNLAs6HBvgI8bH5GY'},
                function(data){
                        $.each(data.items, function(i, it){
                            var output = getInput(it);
                            $('#pop').append(output);
                        });
                }
        );
    
    }
    
    function getInput(it) {
        var title = it.snippet.title;
        var description = it.snippet.description;
        var thumb = it.snippet.thumbnails.high.url;
        var channelTitle = it.snippet.channelTitle;
        var videoDate = it.snippet.publishedAt;
        var videoId = it.id.videoId;
        var output = '<div style="float: left;width: 28.5%;height: 300px;padding: 5%;margin-right: -8%;margin-top: -3%;cursor: pointer;on">' + 
            '<div>' + 
            //'<iframe src="https://www.youtube.com/embed/' + videoId + '" style="width: 90%;height: 200px;" frameborder="0"></iframe>' +
            '<img src="' + thumb + '" style="width: 90%;height: 200px;" id="' + videoId + '" onclick="youtube_click(this.id)">' + 
            '<h3 style="color: white;">'+title+'</a></h3>' +
            '</div>' +
            '</div>';
        return output;
     }    

     function uuu() {
        $("#errorbox").fadeIn("slow"); 
        setTimeout(countup, 4000);
    }

    var countup =  function () {
        $("#errorbox").fadeOut("slow");
    }
