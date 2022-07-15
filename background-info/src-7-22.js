var fixArray = [
  "socco_SOCCO",
  "zabor_ZABOR",
  "dawin_DAWIN",
  "rkdia_RKDIA",
  "obike_OBIKE",
  "yiyyo_YIYYO",
  "neydu_NEYDU",
  "lamkn_LAMKN",
  "elopo_ELOPO",
  "trnky_TRNKY",
  "mnolo_MNOLO",
  "zpata_ZPATA",
  "gabar_GABAR",
  "slugo_SLUGO",
  "modux_MODUX",
  "iluri_ILURI",
  "geece_GEECE",
  "anada_ANADA",
  "kiker_KIKER",
  "milok_MILOK",
  "armur_ARMUR",
  "scapa_SCAPA",
  "negon_NEGON",
  "satoe_SATOE",
  "mella_MELLA",
  "antex_ANTEX",
  "katok_KATOK",
  "chuma_CHUMA",
  "betir_BETIR",
  "harbg_HARBG",
  "harde_HARDE",
  "calto_CALTO",
  "fekko_FEKKO",
  "sappo_SAPPO",
  "donqu_DONQU",
  "elmuc_ELMUC",
  "fipek_FIPEK",
  "kinch_KINCH",
  "ferna_FERNA",
  "hancy_HANCY",
  "crupe_CRUPE",
  "chedr_CHEDR",
  "baroe_BAROE",
  "keeka_KEEKA",
  "opaul_OPAUL",
  "thank_THANK",
  "vorce_VORCE",
  "geroa_GEROA",
  "lennt_LENNT",
  "janma_JANMA",
  "puyya_PUYYA",
  "tilda_TILDA",
  "dozgo_DOZGO",
  "conch_CONCH",
  "gagdd_GAGDD",
  "ziber_ZIBER",
  "idaho_IDAHO",
  "utahs_UTAHS",
  "pling_PLING",
  "vermo_VERMO",
  "sault_SAULT",
  "oduca_ODUCA",
  "caffe_CAFFE",
  "fratt_FRATT",
  "panmo_PANMO",
  "saalr_SAALR",
  "acony_ACONY",
  "beano_BEANO",
  "robll_ROBLL",
  "vachi_VACHI",
  "munoz_MUNOZ",
  "aqaba_AQABA",
  "leila_LEILA",
  "zadav_ZADAV",
  "meegl_MEEGL",
  "joshe_JOSHE",
  "tayog_TAYOG",
  "bewik_BEWIK",
  "tuuna_TUUNA",
  "vedas_VEDAS",
  "gesso_GESSO",
  "dakes_DAKES",
  "alask_ALASK",
  "kbeza_KBEZA",
  "crstl_CRSTL",
  "eteee_ETEEE",
  "rayas_RAYAS",
  "rafee_RAFEE",
  "anner_ANNER",
  "porqe_PORQE",
  "dande_DANDE",
  "leeoo_LEEOO",
  "malie_MALIE",
  "jetss_JETSS",
  "guyro_GUYRO",
  "larpp_LARPP",
  "juice_JUICE",
  "gouda_GOUDA",
  "qnepa_QNEPA",
  "prcha_PRCHA",
  "macor_MACOR",
  "kndll_KNDLL",
  "woodz_WOODZ",
  "aleri_ALERI",
  "cerda_CERDA",
  "goret_GORET",
  "dunta_DUNTA",
  "wexet_WEXET",
  "kolao_KOLAO",
  "mystr_MYSTR",
];

var errorCount = 0;							
			
			var autocorrect = false;
			
			function setAutocorrect() {
				checkbox = document.getElementById("enableAutocorrect");
				checkButton = document.getElementById("checkAnswers");
				if (checkbox.checked) {
					autocorrect = true;
					checkButton.style.backgroundColor = "gray";
					checkAll();
				}
				else {
					autocorrect = false;
					checkButton.style.backgroundColor = "#0061c6";
				}
			}
      
      
      
      
      function addInput() {

				
				var radius = 50;
				
				
				for (var i = 0; i < fixArray.length; i++) {
					var fixName = fixArray[i].substring(0, fixArray[i].indexOf("_"));
					var fixData = fixArray[i].substring(fixArray[i].indexOf("_") + 1, fixArray[i].length);
					var fixDegree = parseInt(fixData);
					var fixElement = document.getElementById(fixName);
					if (!fixElement) continue;
					var coords = getCoords(fixElement);	

					var node = document.createElement("input");  										
					node.style.position = "absolute";					
					node.id = fixArray[i];					
					node.className = "fixDegree";					

					node.addEventListener('keyup',function(){doInput(this)});									
					//airports, NAVAIDS, intersections
					if (isNaN(fixDegree) || fixName == "ble") {
						node.setAttribute('placeholder', "ABCDE");
						node.setAttribute("type", "text");
						//airway names starting with L
						if (fixData.substring(0, 1) == "L") {
							node.setAttribute('placeholder', "L000");
              if (fixData.substring(0, 1) == "R") {
                node.setAttribute('placeholder', "R000");
                if (fixData.substring(0, 1) == "B") {
                  node.setAttribute('placeholder', "B000");
                  if (fixData.substring(0, 1) == "N") {
                    node.setAttribute('placeholder', "N000");
                    if (fixData.substring(0, 1) == "M") {
                      node.setAttribute('placeholder', "M000");		
						
						
						node.setAttribute("spellcheck", "false");
						node.setAttribute("class","labelText");
						node.style.textAlign = "center";
						node.style.left = coords.left;
						node.style.top = coords.top - 15;
					}}}}}}
					//degrees around VOR circle 
					else if (fixName.substring(0, 3) == "fix") {
						
						//var rectNode = document.createElementNS("http://www.w3.org/2000/svg","circle");
						//rectNode.setAttribute("r", "3");
	
						node.setAttribute('type', 'tel');
						node.setAttribute('inputmode', 'numeric');
						node.setAttribute('placeholder', "000");
						if (fixDegree < 180) {
							node.style.transform = "rotate("+(fixDegree - 90)+"deg)";
						}
						else {
							node.style.transform = "rotate("+(fixDegree - 270)+"deg)";
							node.style.textAlign = "right";
						}
						node.style.left = coords.left + (Math.sin(fixDegree * (Math.PI/180))  * radius);
						node.style.top = coords.top - (Math.cos(fixDegree * (Math.PI/180))  * radius);
						//rectNode.setAttribute("cx", parseInt(node.style.left) + 18);
						//rectNode.setAttribute("cy", parseInt(node.style.top));			
					}
					//boundary numbers (diamond box)
					else {						
						if (fixName.substring(0,4) == "rect") {
			
							var rotation = document.getElementById(fixName).getAttribute("transform");
							if (rotation !== null) {
								rotation = rotation.substring(0, rotation.length - 1);

								node.style.transform = rotation + "deg)";
							}
						}
						
						node.setAttribute('placeholder', "00");
						node.setAttribute('type', 'tel');
						node.setAttribute('inputmode', 'numeric');
						node.style.textAlign = "center";
						node.style.left = coords.left;
						node.style.top = coords.top;
					}					


					document.getElementById("fixes").appendChild(node);
					

					var node = document.getElementById(node.id);
					var box = node.getBoundingClientRect();						

					node.style.left = parseFloat(node.style.left) - (node.offsetWidth / 2);
					node.style.top = parseFloat(node.style.top) - (node.offsetHeight / 2);					

				}
			}


      function fillBoxes() {
				for (var i = 0; i < fixArray.length; i++) {
					fixID = fixArray[i].substring(0, fixArray[i].indexOf("_"));
					fixDegree = fixArray[i].substring(fixArray[i].indexOf("_") + 1, fixArray[i].length);
					ele = document.getElementById(fixArray[i]);
					ele.style.color = "black";
					ele.disabled = false;

					ele.defaultValue = fixDegree;					
					ele.value = fixDegree;					

				}
			}

			function hintBoxes() {
				for (var i = 0; i < fixArray.length; i++) {
					fixID = fixArray[i].substring(0, fixArray[i].indexOf("_"));
					fixDegree = fixArray[i].substring(fixArray[i].indexOf("_") + 1, fixArray[i].length);
					ele = document.getElementById(fixArray[i]);
					if (ele.value == "") {
						ele.defaultValue = fixDegree.substring(0,1);					
						ele.value = fixDegree.substring(0,1);						
					}

				}
			}
			
			
			function clearBoxes() {
				for (var i = 0; i < fixArray.length; i++) {
					ele = document.getElementById(fixArray[i]);
					ele.defaultValue = "";	
					ele.style.color = "black";
					ele.style.background = "transparent";
					ele.disabled = false;
				
					ele.value = "";					
					errorCount = 0;
					//document.getElementById("mistakes").innerHTML = 0;

				}
			}
			
			function getCoords(elem) {

			  var box = elem.getBoundingClientRect();
			
			  return {
			    top: box.top + box.height/2,
			    left: box.left + box.width/2
			  };
	
			}			
			
			function getAngle(elem) {

			}
			
			function doInput(ele) {
				if (autocorrect) {
					checkBoxes(ele);
				}
			}
			
			function checkAll() {
				for (var i = 0; i < fixArray.length; i++) {
					ele = document.getElementById(fixArray[i]);
					checkBoxes(ele);

				}
			}
			
			function toggleSectors() {
				var sectors = document.getElementById("sectors");
				if (sectors.style.display === "none") {
					sectors.style.display = "block";
				} 
				else {
					sectors.style.display = "none";
				}
			}


			function checkBoxes(ele) {
				var id = ele.id.toUpperCase();
				ele.value = ele.value.toUpperCase();
				var input = ele.value.toUpperCase();
				var degrees = id.substring(id.indexOf("_") + 1, id.length);
	//				ele.style.transform = "rotate(-"+(90-degrees)+"deg)";	
			
				if (degrees.substring(0,input.length) == input) {
					ele.style.color = "black";
				}
				else {
/*
				var key = event.keyCode || event.charCode;
		    if (key != 8 && key != 46 && (ele.value.length == 1 || ele.style.color == "black")) {
					errorCount++;    
		    }			
*/
				ele.style.color = "red";
				ele.style.background = "rgba(255,255,0, .5)";

			  }
			  if (degrees == input) {
				  ele.disabled = true;
				  ele.style.color = "#055a00";
			  }
				console.log(errorCount);
//				document.getElementById("mistakes").innerHTML = errorCount;

				
				
				
			}




