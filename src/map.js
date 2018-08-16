var container = document.getElementById('map');
var options = {
    center: new daum.maps.LatLng(37.276, 127.047),
    level: 3
};

var map = new daum.maps.Map(container, options);

// 마커를 표시할 위치와 title 객체 배열입니다
var positions = [
    {
        title: 'GS25 원천점',
        latlng: new daum.maps.LatLng(37.276705, 127.045077)
    },
    {
        title: 'GS25 우만점',
        latlng: new daum.maps.LatLng(37.276936, 127.047377)
    },
    {
        title: 'CU 원천점',
        latlng: new daum.maps.LatLng(37.275079, 127.047940)
    },
    {
        title: '세븐일레븐 아주대',
        latlng: new daum.maps.LatLng(37.274393, 127.046738)
    }
];

// 마커 이미지의 이미지 주소입니다
var imageSrc = "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

var iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

for (var i = 0; i < positions.length; i ++) {

    if(i==3) {
        console.log('hello')

        setTimeout(() => {
            console.log('asdasd')
        }, 6000);
    }

    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new daum.maps.Size(24, 35);

    // 마커 이미지를 생성합니다
    var markerImage = new daum.maps.MarkerImage(imageSrc, imageSize);

    // 마커를 생성합니다
    var marker = new daum.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image : markerImage // 마커 이미지
    });

    var iwContent = `<div class="store-wrap" id="store${i}">
    <div class="title">
        ${positions[i].title}
    </div>
    <div class="item-list">
<a href="/viewProduct">
    <div class="item"><img src="/images/food/salad.svg" class="hot-deal-img"/>
      <div class="item-name">샐러드</div>
    </div>
</a>
<div class="item"><img src="/images/food/lunch-box.svg" class="hot-deal-img"/>
  <div class="item-name">행복도시락</div>
</div>
<div class="item"><img src="/images/food/sushi.svg" class="hot-deal-img"/>
  <div class="item-name">삼각김밥</div>
</div>
<div class="item"><img src="/images/food/kebab.svg" class="hot-deal-img"/>
  <div class="item-name">케밥</div>
</div>
<div class="item"><img src="/images/food/hot-dog.svg" class="hot-deal-img"/>
  <div class="item-name">핫도그</div>
</div>
<div class="item"><img src="/images/food/sandwich.svg" class="hot-deal-img"/>
  <div class="item-name">샌드위치</div>
</div>
<div class="item"><img src="/images/food/milk(3).svg" class="hot-deal-img"/>
  <div class="item-name">서울우유</div>
</div>
<div class="item"><img src="/images/food/lunch.svg" class="hot-deal-img"/>
  <div class="item-name">애플도시락</div>
</div>
    </div>
</div>`;

    var infowindow = new daum.maps.InfoWindow({
        content : iwContent,
        removable : iwRemoveable
    });

    (function(marker, infowindow) {
        // 마커에 mouseover 이벤트를 등록하고 마우스 오버 시 인포윈도우를 표시합니다
        daum.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });
    })(marker, infowindow);
}


