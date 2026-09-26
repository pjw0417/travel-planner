// Revision from the itinerary supplied by the traveler. Times and reservations are plans to confirm.
const R=(name,nameKo,time,lat,lon,note='',noteKo='',address='')=>({id:crypto.randomUUID(),name,nameKo,time,lat,lon,note,noteKo,address,image:'',visited:false});
const revisedInitial={revision:2,start:'2026-12-31',end:'2027-01-05',hotel:{name:'Hilton New York Fashion District',address:'152 W 26th St, New York, NY 10001',lat:40.7457,lon:-73.9933},days:[
{title:'Midtown & New Year’s Eve',titleKo:'미드타운과 새해 전야',note:'MoMA, Grand Central, SUMMIT, then a reserved Times Square venue.',noteKo:'MoMA, 그랜드 센트럴, SUMMIT을 둘러보고 예약한 타임스스퀘어 행사장으로.',tips:[
'Arrive at 10:30 AM; aim to reach the hotel around noon. Use the hotel restroom before leaving.',
'Use restrooms at MoMA, Grand Central Lower Level, and inside SUMMIT.',
'SUMMIT reservation: around 4:15 PM. Reserve a paid Times Square NYE venue with a direct or partial ball-drop view. This plan does not use a public viewing pen.',
'Return to the hotel around 6 PM for a break, clothes change, and dinner. Leave for the venue after 8 PM; return after 12:30 AM.'
],tipsKo:[
'오전 10:30 도착, 정오쯤 호텔 도착 목표. 출발 전 호텔 화장실 이용.',
'MoMA, 그랜드 센트럴 지하층, SUMMIT 내부 화장실 이용.',
'SUMMIT은 오후 4:15 전후 예약. 볼 드롭이 직접 또는 부분적으로 보이는 타임스스퀘어 유료 NYE 행사장을 예약하세요. 일반 관람구역에는 들어가지 않습니다.',
'오후 6시쯤 호텔로 돌아와 휴식, 옷 갈아입기, 저녁 식사. 오후 8시 이후 행사장으로 이동하고 오전 12:30 이후 귀가.'
],stops:[
R('Hotel arrival & check-in','호텔 도착 및 체크인','12:00',40.7457,-73.9933,'Drop bags and get ready.','짐 정리 후 일정 준비.','152 W 26th St, New York, NY 10001'),
R('Museum of Modern Art (MoMA)','뉴욕 현대미술관(MoMA)','12:30–14:15',40.7614,-73.9776,'Highlights visit, about 1 hour 45 minutes.','대표작 중심으로 약 1시간 45분 관람.'),
R('Grand Central Terminal','그랜드 센트럴 터미널','14:35–15:10',40.7527,-73.9772,'Main Concourse, ceiling, clock, and interior.','메인 콘코스, 천장, 중앙 시계, 내부 구경.'),
R('Shake Shack at Grand Central','그랜드 센트럴 쉐이크쉑','15:10–15:45',40.7527,-73.9772,'Late lunch.','늦은 점심.'),
R('Magnolia Bakery at Grand Central','그랜드 센트럴 매그놀리아 베이커리','15:45–16:05',40.7527,-73.9772,'Banana pudding.','바나나 푸딩.'),
R('SUMMIT One Vanderbilt','서밋 원 밴더빌트','16:15–17:45',40.7528,-73.9787,'About 90 minutes at the observatory. Reservation around 4:15 PM.','전망대 약 90분. 오후 4:15 전후 예약.'),
R('Hotel break & dinner','호텔 휴식 및 저녁','18:30–20:00',40.7457,-73.9933,'Rest, change clothes, and eat dinner.','휴식, 옷 갈아입기, 저녁 식사.','152 W 26th St, New York, NY 10001'),
R('Times Square NYE venue','타임스스퀘어 유료 NYE 행사장','20:00–00:30',40.758,-73.9855,'Reserved paid venue; ball drop at midnight. Exact venue to be booked.','예약한 유료 행사장. 자정 볼 드롭. 정확한 장소는 추후 예약.')
]},
{title:'West Side & Whitney',titleKo:'웨스트사이드와 휘트니',note:'A relaxed start after New Year’s Eve, ending with Friday evening at the Whitney.',noteKo:'새해 전야 다음 날 느긋하게 시작해 휘트니 미술관에서 금요일 저녁을 보내세요.',tips:[
'Sleep in; leave the hotel around 12:30 PM.',
'Restroom options: The Shops at Hudson Yards, Chelsea Market, Little Island, and Whitney Museum.',
'Whitney Friday evening reservation: around 5 PM. Start upstairs and work down.'
],tipsKo:[
'느긋하게 준비하고 오후 12:30쯤 호텔 출발.',
'화장실: 허드슨 야드 쇼핑몰, 첼시 마켓, 리틀 아일랜드, 휘트니 미술관.',
'휘트니 금요일 저녁 예약: 오후 5시 전후. 위층부터 내려오며 관람.'
],stops:[
R('Hudson Yards & Vessel','허드슨 야드와 베슬','13:00–14:30',40.7538,-74.0021,'Vessel, The Shops, photos, and the surrounding area.','베슬, 쇼핑몰, 주변 사진 촬영.'),
R('Blue Bottle Coffee at Hudson Yards','허드슨 야드 블루보틀 커피','During 13:00–14:30',40.7538,-74.0021,'Coffee and a light meal or brunch.','커피와 간단한 식사 또는 브런치.'),
R('Chelsea Market','첼시 마켓','14:45–16:00',40.7425,-74.006,'Food, snacks, shopping, and browsing.','음식, 간식, 쇼핑, 내부 구경.'),
R('Little Island','리틀 아일랜드','16:10–16:45',40.7416,-74.0109,'Hudson River views and photos.','허드슨강 풍경과 사진.'),
R('Whitney Museum of American Art','휘트니 미술관','17:00–20:00',40.7396,-74.0089,'Friday evening visit; return to the hotel for dinner afterward.','금요일 저녁 관람. 이후 호텔로 돌아가 저녁 식사.')
]},
{title:'Fifth Avenue to The Met',titleKo:'5번가에서 메트까지',note:'Fifth Avenue, Madison Avenue, Upper East Side museums, and the Rockefeller tree.',noteKo:'5번가, 매디슨 애비뉴, 어퍼 이스트 사이드 미술관, 록펠러 트리.',tips:[
'This route does not include a long Central Park walk. Have lunch around 12:25–1:15 PM.',
'Restroom options: Tiffany if available, Ralph Lauren/Ralph’s Coffee, Guggenheim, The Met, and Rockefeller Center Concourse.',
'Allow about three hours at The Met. Visit the Rockefeller Christmas Tree after dark.'
],tipsKo:[
'센트럴파크를 깊게 걷지 않습니다. 점심은 오후 12:25~1:15쯤.',
'화장실: 티파니(가능한 경우), 랄프 로렌/랄프스 커피, 구겐하임, 메트, 록펠러 센터 지하.',
'메트는 약 3시간 관람. 록펠러 크리스마스트리는 밤에 방문.'
],stops:[
R('Louis Vuitton 57th Street','루이비통 57번가','10:15–11:00',40.764,-73.9731,'Large trunk-shaped building and flagship interior.','대형 트렁크 형태 건물과 플래그십 내부.'),
R('Tiffany & Co. The Landmark','티파니 랜드마크','11:05–12:00',40.7625,-73.9745,'Fifth Avenue flagship.','5번가 본점 내부 구경.'),
R('The Plaza Hotel','플라자 호텔','12:05–12:20',40.7645,-73.9744,'Exterior photos and a brief look across at Central Park.','외관 사진과 맞은편 센트럴파크 잠깐 보기.'),
R('Ralph Lauren Men’s Flagship','랄프 로렌 남성 플래그십','13:25–14:05',40.77,-73.9659,'Rhinelander Mansion; see the building and men’s store.','라인랜더 맨션 건물과 남성 매장.','867 Madison Ave, New York, NY'),
R('Ralph Lauren Women’s & Home','랄프 로렌 여성 및 홈','14:05–14:45',40.7716,-73.9653,'Women’s and Home flagship.','여성 및 홈 플래그십.','888 Madison Ave, New York, NY'),
R('Ralph’s Coffee, Madison Avenue','랄프스 커피, 매디슨 애비뉴','14:45–15:20',40.7716,-73.9653,'Coffee break.','커피를 마시며 휴식.','888 Madison Ave, New York, NY'),
R('Madison Avenue stroll','매디슨 애비뉴 산책','15:20–15:45',40.775,-73.962,'Browse nearby stores at an easy pace.','근처 매장을 여유 있게 구경.'),
R('Guggenheim Museum','구겐하임 미술관','15:50–16:55',40.783,-73.959),
R('The Metropolitan Museum of Art','메트로폴리탄 미술관','17:05–20:00',40.7794,-73.9632,'Main museum visit, about three hours.','이날의 주요 미술관, 약 3시간 관람.'),
R('Rockefeller Christmas Tree','록펠러 크리스마스트리','20:30–21:15',40.7587,-73.9787,'See the lights and take photos.','야간 조명과 사진 촬영.')
]},
{title:'Lower Manhattan',titleKo:'로어맨해튼',note:'Liberty Island, Wall Street, the World Trade Center area, and a longer Century 21 visit.',noteKo:'리버티 아일랜드, 월스트리트, 세계무역센터 주변, 센추리 21 쇼핑.',tips:[
'Leave the hotel at 7:30 AM. Book the earliest practical Statue City Cruises departure.',
'Lunch and coffee break in Lower Manhattan around 1:30–2:20 PM.',
'Restroom options: Battery/ferry terminal, Liberty Island, Printemps, Oculus or Brookfield Place, and Century 21/WTC area.'
],tipsKo:[
'오전 7:30 호텔 출발. 스태추 시티 크루즈 가능한 가장 이른 시간대 예약.',
'오후 1:30~2:20쯤 로어맨해튼에서 점심 및 커피 휴식.',
'화장실: 배터리/페리 터미널, 리버티 아일랜드, 쁘렝땅, 오큘러스 또는 브룩필드 플레이스, 센추리 21/WTC 주변.'
],stops:[
R('The Battery / ferry terminal','배터리 파크 / 페리 터미널','08:15–09:00',40.7033,-74.017,'Security and boarding preparation.','보안검색 및 탑승 준비.'),
R('Statue City Cruises ferry','스태추 시티 크루즈 페리','09:00',40.7033,-74.017,'Board around 9 AM.','오전 9시 전후 탑승.'),
R('Statue of Liberty / Liberty Island','자유의 여신상 / 리버티 아일랜드','09:20–11:15',40.6892,-74.0445,'Focus on Liberty Island; return to Manhattan around 11:45 AM.','리버티 아일랜드 중심 관람. 오전 11:45쯤 맨해튼 복귀.'),
R('Charging Bull','차징 불','11:50–12:10',40.7056,-74.0134),
R('Wall Street','월스트리트','12:10–12:30',40.7064,-74.0094,'NYSE, Federal Hall, and photos.','뉴욕 증권거래소, 페더럴 홀, 사진.'),
R('Printemps New York','쁘렝땅 뉴욕','12:35–13:30',40.707,-74.0112,'Explore the store and One Wall Street.','매장과 원 월스트리트 건물 구경.','1 Wall St, New York, NY'),
R('9/11 Memorial','9/11 메모리얼','14:25–15:00',40.7115,-74.0134),
R('Oculus','오큘러스','15:00–15:25',40.7116,-74.0114,'Architecture and photos.','건축물 구경 및 사진.'),
R('Century 21','센추리 21','15:30–17:15',40.7112,-74.01,'Leave ample time for shopping, then return to the hotel.','쇼핑 시간을 넉넉하게 확보하고 호텔 복귀.')
]},
{title:'Nolita & SoHo',titleKo:'놀리타와 소호',note:'An unhurried shopping day with bagels, pizza, Raku, and tacos.',noteKo:'베이글, 피자, 라쿠, 타코를 곁들인 여유로운 쇼핑의 날.',tips:[
'Aimé Leon Dore reservation: 11:30 AM. Raku reservation target: 5 PM.',
'Restroom stops: Lombardi’s, Raku, and nearby facilities around Kith.',
'Browse Mercer, Greene, Wooster, and Broadway freely from about 3:40–4:40 PM.'
],tipsKo:[
'에메 레온 도르 예약: 오전 11:30. 라쿠 예약 목표: 오후 5시.',
'화장실: 롬바르디스, 라쿠, 키스 주변.',
'오후 3:40~4:40쯤 머서, 그린, 우스터, 브로드웨이를 자유롭게 쇼핑.'
],stops:[
R('Black Seed Bagels','블랙 시드 베이글','09:45–10:25',40.7207,-73.9948,'Breakfast.','아침 식사.'),
R('Supreme','슈프림','10:45–11:20',40.7232,-73.9957),
R('Aimé Leon Dore','에메 레온 도르','11:30–12:15',40.7235,-73.9942,'11:30 AM reservation.','오전 11:30 예약.'),
R('Buck Mason Nolita','벅 메이슨 놀리타','12:20–12:50',40.7228,-73.9944,'The location near Aimé Leon Dore.','에메 레온 도르 근처 지점.','235 Elizabeth St, New York, NY'),
R('Lombardi’s Pizza','롬바르디스 피자','13:00–14:00',40.7215,-73.9957,'Lunch.','점심 식사.'),
R('Stüssy','스투시','14:10–14:40',40.7247,-73.9995),
R('Prada Broadway Epicenter','프라다 브로드웨이 에피센터','14:45–15:40',40.7243,-73.9972,'Explore the architecture and lower-level interior.','건축과 지하까지 이어지는 매장 내부 구경.','575 Broadway, New York, NY'),
R('SoHo free shopping','소호 자유 쇼핑','15:40–16:40',40.724,-74.001,'Mercer, Greene, Wooster, and Broadway.','머서, 그린, 우스터, 브로드웨이 주변.'),
R('RAKU SOHO','라쿠 소호','17:00–18:00',40.727,-74.0004,'Dinner; reservation target around 5 PM.','저녁 식사. 오후 5시 전후 예약.','48 MacDougal St, New York, NY'),
R('KITH Manhattan','키스 맨해튼','18:15–19:00',40.7248,-73.9987),
R('LOS TACOS No.1','로스 타코스 넘버원','19:00–19:30',40.7257,-73.9996,'Snack near Kith; return to the hotel afterward.','키스 근처 간식. 이후 호텔 복귀.')
]},
{title:'Brooklyn & departure',titleKo:'브루클린과 출발',note:'DUMBO photos and a final meal at Peter Luger before the airport.',noteKo:'덤보에서 사진을 찍고 피터 루거에서 마지막 식사 후 공항으로.',tips:[
'Check out at 8:30 AM, leave luggage at the hotel, and use the restroom before leaving.',
'DUMBO photo route: Washington Street → Brooklyn Bridge Park → Pebble Beach / waterfront. Restroom option: Empire Stores / Time Out Market building.',
'Take an Uber or taxi to Williamsburg around 10:50 AM. Peter Luger reservation: 11:45 AM.',
'Collect bags around 2 PM. Leave the hotel at 2:30 PM for JFK/EWR or around 3 PM for LGA. Domestic flight departs at 7 PM.'
],tipsKo:[
'오전 8:30 체크아웃, 호텔에 짐 보관, 출발 전 화장실 이용.',
'덤보 사진 동선: 워싱턴 스트리트 → 브루클린 브리지 파크 → 페블 비치/워터프런트. 화장실: 엠파이어 스토어스/타임 아웃 마켓 건물.',
'오전 10:50쯤 우버나 택시로 윌리엄스버그 이동. 피터 루거 예약: 오전 11:45.',
'오후 2시쯤 짐 찾기. JFK/EWR은 오후 2:30, LGA는 오후 3시 전후 호텔 출발. 국내선은 오후 7시 출발.'
],stops:[
R('Hotel checkout / luggage storage','호텔 체크아웃 / 짐 보관','08:30',40.7457,-73.9933,'Leave luggage with the bell desk.','벨 데스크에 짐 맡기기.','152 W 26th St, New York, NY 10001'),
R('DUMBO / Washington Street','덤보 / 워싱턴 스트리트','09:40–10:05',40.7033,-73.9906,'Couple photos with the Manhattan Bridge in the background.','맨해튼 브리지를 배경으로 커플 사진.'),
R('Brooklyn Bridge Park','브루클린 브리지 파크','10:05–10:30',40.7003,-73.9967,'Waterfront and skyline photos.','워터프런트와 스카이라인 사진.'),
R('Pebble Beach / waterfront','페블 비치 / 워터프런트','10:30–10:50',40.7043,-73.9907,'More photos; keep shopping brief.','사진 위주로, 쇼핑은 짧게.'),
R('Peter Luger Steak House','피터 루거 스테이크 하우스','11:45–13:15',40.7099,-73.9624,'Final main meal; 11:45 AM reservation.','여행 마지막 메인 식사. 오전 11:45 예약.'),
R('Hotel / collect luggage','호텔 / 짐 찾기','14:00–14:30',40.7457,-73.9933,'Restroom and final packing.','화장실 및 마지막 짐 정리.','152 W 26th St, New York, NY 10001'),
R('Leave for the airport','공항으로 출발','14:30–15:00',40.7457,-73.9933,'JFK/EWR: leave at 2:30 PM. LGA: around 3 PM. Flight at 7 PM.','JFK/EWR은 오후 2:30, LGA는 오후 3시 전후 출발. 비행기는 오후 7시.','152 W 26th St, New York, NY 10001')
]}
]};
