var API_key = "RGAPI-80c69aae-4adf-4d4f-bb7f-9df7c8b1a9c5"
var vnUrl = "https://vn2.api.riotgames.com"
var riotName = ""
var tagName = ""

function Search_summoner() {
	riotName = document.getElementById("riotId").value;
	tagName = document.getElementById("tag").value;
	console.log(riotName+tagName);
	data();
}

async function data() {
	// has some error
	// fetch('https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/Kurashikku/2305?api_key=RGAPI-80c69aae-4adf-4d4f-bb7f-9df7c8b1a9c5', { mode: 'no-cors' }).then(response => response.json()).catch(error => {
	// 	console.error('Fetch error:', error);
	// });

	fetch(`https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/Kurashikku/2305?api_key=RGAPI-80c69aae-4adf-4d4f-bb7f-9df7c8b1a9c5`).then(response => response.json()).then(json => {
		console.log(json.puuid);
	});

	// var dataRiotUrl = "https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/Kurashikku/2305?api_key=RGAPI-80c69aae-4adf-4d4f-bb7f-9df7c8b1a9c5";
	// var dataRiotIdTmp = await fetch(dataRiotUrl, { mode: 'no-cors' });
	// var dataRiotId = await dataRiotIdTmp.json();
	// console.log(dataRiotId);
	
	// var riotIdUrl = "/lol/summoner/v4/summoners/by-puuid/H4exwB0KQS5MBWwcXGTaACeuzcnC_QrU2N2370q0CXnrsK9c_xSfBq9FrrLw5VMtQouGyWe6-cqmIA";
	// var fullUrl = vnUrl + riotIdUrl + "?api_key=" + API_key;
	// console.log(fullUrl);
	// const dataSummoner1 = await fetch(fullUrl);
	// const dataSummonerFull = await dataSummoner1.json();
	// console.log(dataSummonerFull);
	
}