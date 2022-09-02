// url에서 특정정보
function get_url_info(key) {
    // 1) url에 있는 문자열 가져오기
    let url = location.href; // product.html?xcode=044&cate_no=0&genre=men

    // 2) ? 뒤에꺼만(정보) 잘라내기
    url = url.split("?"); // [product.html , xcode=044&cate_no=0&genre=men]

    if(url.length > 1) {

        url = url[1]; // xcode=044&cate_no=0&genre=men

        // 3) &(정보별)로 나누기
        url = url.split("&"); // [xcode=044  ,  cate_no=0  ,  genre=men]

        // 4) 각 방마다 'cate_no' 있는지 체크
        for(let i=0; i<url.length; i++) {
            let tmp_url = url[i].split("=") // i:0 =>[xcode , 044]
                                            // i:1 =>[cate_no , 0]
            if(tmp_url[0] == key) {
                // 5) 있으면 'cate_no'의 실제값 return 해주기
                return tmp_url[1];
            }
        }
        return -1;
    }
    else {
        return -1;
    }
}