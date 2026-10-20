import type { ElektroLes } from './types'

export const BASIS: ElektroLes[] = [
  // ───────────────────────── Basisbegrippen ─────────────────────────
  {
    id: 1,
    thema: "Basisbegrippen",
    titel: "Spanning: het drukverschil",
    uitleg: "Spanning (symbool U, eenheid volt) is het verschil in elektrische potentiaal tussen twee punten: hoeveel energie elke lading krijgt of afgeeft als hij van het ene naar het andere punt gaat. Eén volt betekent één joule energie per coulomb lading. Spanning bestaat daarom altijd tússen twee punten; een losse draad heeft geen spanning, alleen een spanning ten opzichte van iets anders. Een batterij van 1,5 V houdt via een chemische reactie haar plus- en minpool op een vast potentiaalverschil. De vergelijking met waterdruk helpt: spanning is de druk die water door een leiding wil duwen, maar zonder gesloten leiding stroomt er niets.",
    praktijk: "Meet je met een multimeter spanning, dan zet je de twee meetpennen altijd op twee punten tegelijk (parallel over het onderdeel). Zet de zwarte pen op de min of massa, dan lees je de spanning van elk ander punt ten opzichte van die referentie.",
    formule: "U = E / Q  (volt = joule per coulomb)",
    vraag: "Waarom zegt de uitspraak 'deze draad heeft 5 V' eigenlijk niets zolang je niets toevoegt?",
    opties: [
      "Omdat spanning altijd een verschil tussen twee punten is en het referentiepunt ontbreekt",
      "Omdat spanning alleen in wisselstroomcircuits bestaat",
      "Omdat je eerst de stroom moet weten voordat spanning bestaat",
      "Omdat een draad geen weerstand heeft en dus geen spanning kan hebben"
    ],
    goed: 0
  },
  {
    id: 2,
    thema: "Basisbegrippen",
    titel: "Stroom: lading per seconde",
    uitleg: "Stroom (symbool I, eenheid ampère) is de hoeveelheid lading die per seconde door een doorsnede van een geleider gaat: 1 A is 1 coulomb per seconde, ongeveer 6,24 × 10^18 elektronen per seconde. In metalen zijn het de vrije elektronen die bewegen, en die gaan van min naar plus. Toch tekent men de stroomrichting historisch van plus naar min: de 'conventionele stroomrichting', vastgelegd voordat het elektron ontdekt was. Opvallend is dat elektronen zelf heel langzaam driften (fracties van een millimeter per seconde), terwijl het signaal zich bijna met lichtsnelheid voortplant, omdat het elektrische veld alle elektronen tegelijk aanduwt. Stroom kan alleen lopen in een gesloten kring.",
    praktijk: "Alle schema's, diodesymbolen en pijlen in datasheets gebruiken de conventionele richting (plus naar min). Denk dus in die richting bij het lezen van schema's, ook al weet je dat elektronen andersom gaan.",
    formule: "I = Q / t",
    vraag: "Een schema tekent de stroom van plus naar min. Wat bewegen de elektronen in een koperdraad werkelijk?",
    opties: [
      "Ook van plus naar min, met bijna de lichtsnelheid",
      "Van min naar plus, met een lage driftsnelheid",
      "Ze staan stil; alleen de spanning beweegt",
      "Ze bewegen heen en weer, ook bij gelijkstroom"
    ],
    goed: 1
  },
  {
    id: 3,
    thema: "Basisbegrippen",
    titel: "Weerstand en soortelijke weerstand",
    uitleg: "Weerstand (symbool R, eenheid ohm, Ω) geeft aan hoe sterk een materiaal de stroom tegenwerkt: elektronen botsen op de atomen van het rooster en geven daarbij energie af als warmte. De weerstand van een draad hangt af van het materiaal (soortelijke weerstand ρ), de lengte en de doorsnede: langer geeft meer weerstand, dikker geeft minder. Koper heeft ρ ≈ 0,0175 Ω·mm²/m, aluminium ongeveer 0,028 en nichroom (verwarmingsdraad) ruim 1,1. Een koperdraad van 10 m en 1,5 mm² heeft dus 0,0175 × 10 / 1,5 ≈ 0,12 Ω. Bij metalen stijgt de weerstand bovendien met de temperatuur, omdat de roosteratomen harder trillen.",
    praktijk: "Daarom gebruik je voor een lange verlengkabel of een zware verbruiker dikkere draad (2,5 mm² in plaats van 1,5 mm²): minder weerstand, minder spanningsverlies en minder opwarming.",
    formule: "R = ρ × L / A",
    vraag: "Je vervangt een koperdraad door een draad van hetzelfde koper die twee keer zo lang én twee keer zo dik (doorsnede) is. Wat gebeurt er met de weerstand?",
    opties: [
      "Die wordt vier keer zo groot",
      "Die halveert",
      "Die blijft gelijk",
      "Die wordt twee keer zo groot"
    ],
    goed: 2
  },
  {
    id: 4,
    thema: "Basisbegrippen",
    titel: "De wet van Ohm",
    uitleg: "De wet van Ohm legt het verband tussen spanning, stroom en weerstand: de stroom door een weerstand is evenredig met de spanning erover en omgekeerd evenredig met de weerstand. Verdubbel je de spanning over een vaste weerstand, dan verdubbelt de stroom. Met U = I × R kun je elke grootheid uitrekenen als je de andere twee kent: 12 V over 240 Ω geeft 12 / 240 = 0,05 A, oftewel 50 mA. De wet geldt voor 'ohmse' componenten zoals gewone weerstanden; een diode of LED volgt haar niet, want daar stijgt de stroom exponentieel met de spanning. Toch is de wet van Ohm het gereedschap waarmee je vrijwel elke voorschakelweerstand of spanningsval berekent.",
    praktijk: "Handig ezelsbruggetje is de driehoek U boven, I en R onder: bedek wat je zoekt en je ziet de formule. Reken altijd in basiseenheden (volt, ampère, ohm) en zet milliampère en kilo-ohm eerst om.",
    formule: "U = I × R",
    vraag: "Over een weerstand van 4,7 kΩ staat 9,4 V. Hoeveel stroom loopt er?",
    opties: [
      "2 A",
      "44 mA",
      "0,5 mA",
      "2 mA"
    ],
    goed: 3
  },
  {
    id: 5,
    thema: "Basisbegrippen",
    titel: "Elektrisch vermogen",
    uitleg: "Vermogen (symbool P, eenheid watt) is hoeveel energie per seconde wordt omgezet: 1 W is 1 joule per seconde. Voor elektriciteit geldt P = U × I: een lamp op 230 V die 0,26 A trekt, verbruikt ongeveer 60 W. Combineer je dit met de wet van Ohm, dan krijg je twee nuttige varianten: P = I² × R en P = U² / R. Die tweede laat zien waarom een verwarmingselement met een lágere weerstand méér vermogen geeft bij dezelfde netspanning. De eerste laat zien waarom dunne kabels bij grote stromen heet worden: het verlies stijgt met het kwadraat van de stroom, dus dubbele stroom geeft vier keer zoveel warmte in de kabel.",
    praktijk: "Op een stekkerdoos staat vaak max. 3680 W: dat is 230 V × 16 A. Tel de vermogens van wat je aansluit op om te zien of je daaronder blijft.",
    formule: "P = U × I = I² × R = U² / R",
    vraag: "Door een kabel gaat de stroom van 5 A naar 10 A. Wat gebeurt er met het warmteverlies in die kabel?",
    opties: [
      "Het wordt vier keer zo groot",
      "Het verdubbelt",
      "Het blijft gelijk, want de kabelweerstand verandert niet",
      "Het halveert"
    ],
    goed: 0
  },
  {
    id: 6,
    thema: "Basisbegrippen",
    titel: "Energie en de kilowattuur",
    uitleg: "Vermogen zegt hoe snel energie wordt gebruikt; energie is vermogen maal tijd. De energierekening rekent in kilowattuur (kWh): 1 kW gedurende 1 uur, oftewel 3,6 miljoen joule. Een waterkoker van 2000 W die 3 minuten aanstaat, gebruikt 2 kW × 0,05 h = 0,1 kWh, bij € 0,30 per kWh dus 3 cent. Een apparaat van 5 W dat dag en nacht aanstaat, gebruikt 5 × 24 × 365 = 43,8 kWh per jaar, zo'n € 13. Daarom tellen kleine sluipverbruikers die altijd aanstaan vaak meer op dan grote apparaten die kort draaien.",
    praktijk: "Met een energiemeter-tussenstekker meet je het werkelijke verbruik van een apparaat over een week; vermenigvuldig met 52 voor een jaarschatting.",
    formule: "E = P × t  (kWh = kW × uur)",
    vraag: "Een router van 10 W staat het hele jaar aan. Hoeveel energie is dat ongeveer?",
    opties: [
      "10 kWh",
      "3650 kWh",
      "88 kWh",
      "240 kWh"
    ],
    goed: 2
  },
  {
    id: 7,
    thema: "Basisbegrippen",
    titel: "Serieschakeling",
    uitleg: "In een serieschakeling staan componenten achter elkaar in één pad, dus door alle onderdelen loopt dezelfde stroom. De totale weerstand is de som van de afzonderlijke weerstanden: 100 Ω + 220 Ω = 320 Ω. De bronspanning verdeelt zich over de onderdelen naar verhouding van hun weerstand: de grootste weerstand krijgt de grootste spanning. Gaat één onderdeel stuk en wordt het een onderbreking, dan stopt de stroom in de hele kring; dat was het bekende probleem van oude kerstverlichting. Serieschakelen gebruik je bewust om spanning te verdelen of stroom te begrenzen, zoals met een voorschakelweerstand voor een LED.",
    praktijk: "Wil je een stroom meten, dan zet je de ampèremeter in serie: je onderbreekt de kring en laat de stroom door de meter lopen.",
    formule: "R_totaal = R1 + R2 + R3 + …",
    vraag: "Een weerstand van 1 kΩ en een van 2 kΩ staan in serie op 9 V. Hoeveel spanning staat er over de 2 kΩ?",
    opties: [
      "3 V",
      "6 V",
      "4,5 V",
      "9 V"
    ],
    goed: 1
  },
  {
    id: 8,
    thema: "Basisbegrippen",
    titel: "Parallelschakeling",
    uitleg: "Bij een parallelschakeling staan componenten naast elkaar tussen dezelfde twee punten, dus ze krijgen allemaal dezelfde spanning. De stroom splitst zich: door de kleinste weerstand gaat de grootste stroom. De vervangingsweerstand is altijd kleiner dan de kleinste losse weerstand, want je biedt de stroom extra paden. Voor twee weerstanden geldt de handige regel 'product gedeeld door som': 100 Ω parallel aan 100 Ω is 50 Ω, en 1 kΩ parallel aan 4 kΩ is 4/5 = 0,8 kΩ. Alle stopcontacten in huis staan parallel: elk apparaat krijgt 230 V en de stromen tellen op in de groepskabel.",
    praktijk: "Heb je een weerstandswaarde niet in je bakje, combineer er dan twee: twee gelijke weerstanden parallel geven precies de halve waarde, en verdelen bovendien het vermogen.",
    formule: "1/R_totaal = 1/R1 + 1/R2 + …   (twee stuks: R1×R2/(R1+R2))",
    vraag: "Je schakelt 330 Ω parallel aan 10 kΩ. Wat is ongeveer de vervangingsweerstand?",
    opties: [
      "10,3 kΩ",
      "5,2 kΩ",
      "660 Ω",
      "Iets minder dan 330 Ω (ca. 319 Ω)"
    ],
    goed: 3
  },
  {
    id: 9,
    thema: "Basisbegrippen",
    titel: "Gelijkstroom en wisselstroom",
    uitleg: "Bij gelijkstroom (DC) heeft de spanning een vaste polariteit: een batterij, een USB-lader of een zonnepaneel levert DC. Bij wisselstroom (AC) keert de polariteit periodiek om; het stopcontact levert een sinusvormige wisselspanning. Wisselspanning won het in de 19e eeuw omdat je haar met een transformator eenvoudig omhoog en omlaag kunt zetten. Dat is cruciaal voor transport: bij een hoge spanning heb je voor hetzelfde vermogen een kleinere stroom nodig, en het kabelverlies is I² × R. Hoogspanningslijnen werken daarom met honderden kilovolts. Bijna alle elektronica werkt intern weer op lage gelijkspanning, dus elke adapter zet AC om naar DC.",
    praktijk: "Kijk op een adapter naar het symbool: een rechte lijn met stippellijn eronder betekent DC, een golfje (~) betekent AC. Een adapter met AC-uitgang kun je niet zomaar op DC-elektronica aansluiten.",
    vraag: "Waarom wordt elektriciteit over lange afstand met zeer hoge spanning getransporteerd?",
    opties: [
      "Omdat hoge spanning sneller door de kabel reist",
      "Omdat transformatoren alleen bij hoge spanning werken",
      "Omdat dan de stroom kleiner is en het verlies I²×R sterk daalt",
      "Omdat wisselstroom bij lage spanning niet kan bestaan"
    ],
    goed: 2
  },
  {
    id: 10,
    thema: "Basisbegrippen",
    titel: "Frequentie: 50 hertz",
    uitleg: "De frequentie is het aantal volledige trillingen per seconde, in hertz (Hz). Het Europese net draait op 50 Hz; Noord-Amerika op 60 Hz. Een periode duurt dus T = 1 / f = 1 / 50 = 20 ms, en binnen die 20 ms gaat de spanning tweemaal door nul. De frequentie wordt bepaald door het toerental van de generatoren in centrales en is in heel Europa gesynchroniseerd; netbeheerders houden haar binnen ongeveer ±0,2 Hz. Zakt de frequentie, dan is er meer vraag dan aanbod; het is dus een real-time indicator van de balans op het net. Na gelijkrichting met een brug krijg je bovendien een rimpel van 100 Hz, omdat beide halve golven worden gebruikt.",
    praktijk: "Het lage brommen van een transformator of slechte audio-aarding is vaak 100 Hz (twee keer per periode trekt het magnetische veld aan) of 50 Hz; aan de toonhoogte herken je dus netbrom.",
    formule: "T = 1 / f   (50 Hz → 20 ms)",
    vraag: "Hoe lang duurt één volledige periode van de Europese netspanning?",
    opties: [
      "20 ms",
      "50 ms",
      "10 ms",
      "16,7 ms"
    ],
    goed: 0
  },
  {
    id: 11,
    thema: "Basisbegrippen",
    titel: "Effectieve waarde: 230 V is eigenlijk 325 V piek",
    uitleg: "Een sinusvormige wisselspanning verandert voortdurend, dus welke waarde bedoel je met '230 V'? Dat is de effectieve waarde (RMS, root mean square): de gelijkspanning die in een weerstand precies evenveel warmte zou opwekken. Voor een sinus is de piekwaarde √2 ≈ 1,414 keer de effectieve waarde, dus 230 V RMS betekent een piek van 230 × 1,414 ≈ 325 V en een top-tot-topwaarde van ongeveer 650 V. Isolatie en componenten moeten dus tegen die 325 V kunnen, niet tegen 230 V. Ook een goedkope multimeter rekent vaak de RMS uit door de gemiddelde waarde met een vaste factor te vermenigvuldigen; dat klopt alleen bij een zuivere sinus. Bij vervormde signalen heb je een 'True RMS'-meter nodig.",
    praktijk: "Een condensator direct over het net (bijvoorbeeld een X2-ontstoorcondensator) moet daarom minstens voor 275 V AC gespecificeerd zijn; een elco van 250 V DC is daar absoluut niet geschikt voor.",
    formule: "U_piek = U_eff × √2   (230 V → ≈ 325 V)",
    vraag: "Je trafo levert 12 V AC (effectief). Tot welke piekspanning laadt een afvlakcondensator ongeveer op, als je verliezen in diodes negeert?",
    opties: [
      "12 V",
      "24 V",
      "8,5 V",
      "17 V"
    ],
    goed: 3
  },
  {
    id: 12,
    thema: "Basisbegrippen",
    titel: "Kortsluiting",
    uitleg: "Kortsluiting ontstaat als er een pad met (bijna) nul weerstand tussen de polen van een bron komt, bijvoorbeeld als twee draden elkaar raken. Volgens I = U / R wordt de stroom dan enorm, alleen begrensd door de weerstand van de draden en de inwendige weerstand van de bron. Op het lichtnet kunnen dat honderden tot duizenden ampères zijn, genoeg om draden te laten smelten en een vlamboog te veroorzaken. Bij een auto-accu met een inwendige weerstand van ongeveer 0,01 Ω loopt er al gauw meer dan 1000 A; een sleutel over de polen kan gaan gloeien. Kortsluiting is dus geen probleem van spanning maar van ongelimiteerde stroom en het daardoor vrijkomende vermogen.",
    praktijk: "Zet bij het testen van een nieuwe schakeling een labvoeding op een lage stroomgrens (bijvoorbeeld 100 mA): een kortsluiting doet dan niets kapot. Bij lithiumaccu's altijd de polen afplakken bij opslag.",
    vraag: "Waarom is een kortsluiting op een 12 V-auto-accu gevaarlijker dan op een 9 V-blokbatterij, ondanks de vergelijkbare spanning?",
    opties: [
      "Omdat 12 V boven de veilige aanraakspanning ligt",
      "Omdat de auto-accu een veel lagere inwendige weerstand heeft en dus een veel grotere stroom levert",
      "Omdat een auto-accu wisselspanning levert",
      "Omdat een 9 V-batterij een ingebouwde zekering heeft"
    ],
    goed: 1
  },
  {
    id: 13,
    thema: "Basisbegrippen",
    titel: "Kirchhoff: de stroomwet",
    uitleg: "De eerste wet van Kirchhoff (stroomwet, KCL) zegt: in elk knooppunt is de som van de inkomende stromen gelijk aan de som van de uitgaande stromen. Dat volgt rechtstreeks uit behoud van lading; elektronen kunnen zich niet in een knooppunt ophopen. Komt er 300 mA een knooppunt binnen en gaat er 120 mA via één tak weg, dan moet de andere tak precies 180 mA voeren. Deze wet is de basis van het oplossen van parallelle takken en ook van methodes als de knooppuntsanalyse die simulatieprogramma's zoals SPICE gebruiken. Ze geldt op elk moment, dus ook voor wisselstromen en snelle signalen.",
    praktijk: "Gebruik de stroomwet om een stroom te bepalen die je lastig direct kunt meten: meet de totale stroom en de andere takken, en het verschil is de stroom in de lastige tak.",
    formule: "Σ I_in = Σ I_uit",
    vraag: "In een knooppunt komt 0,5 A binnen. Twee takken voeren 120 mA en 200 mA weg. Wat loopt er door de derde tak?",
    opties: [
      "820 mA",
      "320 mA",
      "180 mA",
      "500 mA"
    ],
    goed: 2
  },
  {
    id: 14,
    thema: "Basisbegrippen",
    titel: "Kirchhoff: de spanningswet",
    uitleg: "De tweede wet van Kirchhoff (spanningswet, KVL) zegt: in elke gesloten lus is de som van alle spanningen nul. Anders gezegd: de spanning die de bron levert, wordt helemaal 'opgebruikt' door de spanningsvallen in de lus. Dit volgt uit behoud van energie: als je rondloopt en weer bij je startpunt uitkomt, ben je op dezelfde potentiaal. In een lus met een 9 V-batterij, een LED van 2 V en een weerstand moet over die weerstand dus 7 V staan. Samen met de stroomwet kun je hiermee elk lineair netwerk oplossen.",
    praktijk: "Klopt een meting niet met je verwachting, tel dan alle gemeten spanningen in een lus op; als de som niet nul is, heb je ergens een verkeerd gemeten punt of een slechte verbinding met eigen spanningsval.",
    formule: "Σ U (rond een lus) = 0",
    vraag: "In een lus van 12 V staan een weerstand en een motor in serie. Over de motor meet je 9,5 V. Wat staat er over de weerstand?",
    opties: [
      "2,5 V",
      "12 V",
      "21,5 V",
      "9,5 V"
    ],
    goed: 0
  },
  {
    id: 15,
    thema: "Basisbegrippen",
    titel: "De spanningsdeler",
    uitleg: "Twee weerstanden in serie vormen een spanningsdeler: de uitgangsspanning op het middenpunt is een vaste fractie van de ingangsspanning. Met R1 boven en R2 onder geldt U_uit = U_in × R2 / (R1 + R2). Met 12 V, R1 = 10 kΩ en R2 = 4,7 kΩ krijg je 12 × 4,7 / 14,7 ≈ 3,84 V. Belangrijk: dit klopt alleen zolang de belasting veel hoger is dan R2. Hang je er een verbruiker aan, dan staat die parallel aan R2, daalt de effectieve onderweerstand en zakt de spanning. Een spanningsdeler is daarom prima om een spanning te méten (bijvoorbeeld een accuspanning op een ADC), maar ongeschikt als voeding.",
    praktijk: "Wil je met een 5 V-microcontroller een spanning tot 15 V meten, kies dan een deler van 1 op 3, zoals 20 kΩ boven en 10 kΩ onder: 15 V wordt dan 5 V.",
    formule: "U_uit = U_in × R2 / (R1 + R2)",
    vraag: "Je voedt een 3,3 V-module van 50 mA via een spanningsdeler van 10 kΩ en 6,8 kΩ op 5 V. Waarom werkt dat niet?",
    opties: [
      "Omdat de verhouding niet precies 3,3 V oplevert",
      "Omdat spanningsdelers alleen met wisselspanning werken",
      "Omdat de weerstanden dan meer dan 1 W moeten dissiperen",
      "Omdat de belasting veel lager is dan de onderweerstand, waardoor de uitgangsspanning instort"
    ],
    goed: 3
  },
  {
    id: 16,
    thema: "Basisbegrippen",
    titel: "Inwendige weerstand van een bron",
    uitleg: "Een echte spanningsbron gedraagt zich als een ideale bron (de bronspanning E) met een kleine weerstand in serie: de inwendige weerstand Ri. Hoe meer stroom je trekt, hoe meer spanning over Ri wegvalt, zodat de klemspanning daalt: U_klem = E − I × Ri. Een 9 V-blokje heeft een Ri van ongeveer 1 à 2 Ω; bij 0,5 A zakt de klemspanning dus naar 8 à 8,5 V. Een AA-alkalinecel zit rond 0,15 Ω, een auto-accu rond 0,01 Ω. Naarmate een batterij leger raakt, stijgt Ri; daarom lijkt een bijna lege batterij onbelast nog prima te meten, maar zakt hij in zodra er een motor aan hangt.",
    praktijk: "Test een batterij daarom onder belasting: meet de spanning eerst onbelast en dan met een bekende weerstand eraan. Uit het verschil en de stroom bereken je Ri = ΔU / I.",
    formule: "U_klem = E − I × Ri",
    vraag: "Een batterij meet onbelast 9,0 V en met 300 mA belasting 8,4 V. Hoe groot is de inwendige weerstand?",
    opties: [
      "28 Ω",
      "2 Ω",
      "0,18 Ω",
      "30 Ω"
    ],
    goed: 1
  },
  {
    id: 17,
    thema: "Basisbegrippen",
    titel: "Massa en aarde: niet hetzelfde",
    uitleg: "In elektronica is massa (GND) gewoon het afgesproken referentiepunt van 0 V waartegen je alle spanningen meet, meestal de min van de voeding. Aarde (PE, de geelgroene draad) is iets anders: een veiligheidsverbinding met de echte aarde via de aardpen in je stopcontact en een aardelektrode bij de meterkast. Het metalen huis van een wasmachine is geaard, zodat bij een isolatiefout de stroom via de aarddraad wegvloeit en de aardlekschakelaar afschakelt in plaats van via jouw lichaam. Een batterijschakeling heeft wel massa, maar geen aarde. In apparaten met een geaarde stekker is de massa vaak met de aarde verbonden, wat bij het verbinden van meerdere apparaten tot zogenoemde aardlussen en brom kan leiden.",
    praktijk: "Pas op met een geaarde oscilloscoop: de massaklem van de probe zit aan de aarde. Klem je die op een punt dat niet op aardpotentiaal ligt (bijvoorbeeld in een netvoeding), dan maak je kortsluiting via de aarddraad.",
    vraag: "Wat is de hoofdfunctie van de geelgroene aarddraad in een stopcontact?",
    opties: [
      "Het teruggeleiden van de normale werkstroom van het apparaat",
      "Het leveren van de 0 V-referentie voor elektronica in het apparaat",
      "Een veilige afvoer bij een isolatiefout, zodat de beveiliging afschakelt",
      "Het verlagen van de netfrequentie naar 50 Hz"
    ],
    goed: 2
  },
  {
    id: 18,
    thema: "Basisbegrippen",
    titel: "Capaciteit van een accu: mAh en Wh",
    uitleg: "De capaciteit van een batterij of accu wordt vaak in milliampère-uur (mAh) opgegeven: hoeveel stroom hij hoe lang kan leveren. Een cel van 2000 mAh levert in theorie 2000 mA gedurende 1 uur, of 100 mA gedurende 20 uur. Maar mAh zegt niets over energie zonder de spanning erbij: energie in wattuur is spanning × capaciteit. Een Li-ion-cel van 3,7 V en 2000 mAh bevat 3,7 × 2 = 7,4 Wh; een powerbank met 10 000 mAh 'op 3,7 V' levert op 5 V USB dus hooguit zo'n 37 Wh / 5 V ≈ 7400 mAh, en na omzettingsverlies nog minder. In de praktijk daalt de bruikbare capaciteit ook bij hoge stroom en kou.",
    praktijk: "Vergelijk accu's van verschillende spanning altijd in Wh. Vliegtuigregels voor powerbanks (meestal max. 100 Wh zonder toestemming) gaan ook over Wh, niet mAh.",
    formule: "E (Wh) = U (V) × Q (Ah)",
    vraag: "Waarom levert een powerbank van 10 000 mAh (cellen van 3,7 V) op de USB-uitgang van 5 V duidelijk minder dan 10 000 mAh?",
    opties: [
      "Omdat de energie gelijk blijft maar de spanning hoger is, plus verlies in de omzetter",
      "Omdat USB maximaal 500 mA mag leveren",
      "Omdat mAh-waarden op verpakkingen altijd dubbel worden geteld",
      "Omdat Li-ion-cellen bij 5 V sneller leeglopen door inwendige kortsluiting"
    ],
    goed: 0
  },
  {
    id: 19,
    thema: "Basisbegrippen",
    titel: "Spanningsverlies in kabels",
    uitleg: "Elke kabel heeft weerstand, en bij stroom valt daarover spanning weg: U_verlies = I × R_kabel. Vergeet niet dat de stroom heen én terug gaat, dus de kabellengte telt dubbel. Een 12 V-ledstrip van 5 A aan 10 m kabel van 0,75 mm²: R = 0,0175 × 20 / 0,75 ≈ 0,47 Ω, dus 5 × 0,47 ≈ 2,3 V verlies. Er komt dan maar 9,7 V aan, en de kabel dissipeert ruim 11 W. Bij lage spanningen zijn verliezen relatief veel erger dan bij 230 V: dezelfde 2,3 V is op 12 V bijna 20 procent, op 230 V nog geen procent.",
    praktijk: "Bij 12 V- of 24 V-installaties (camper, tuinverlichting, ledstrips) houd je het spanningsverlies onder ongeveer 3 procent: kies dikkere kabel of voed lange ledstrips van beide kanten.",
    formule: "U_verlies = I × ρ × 2L / A",
    vraag: "Waarom is een kabel van 10 m voor een 12 V-verbruiker kritischer dan voor een 230 V-verbruiker van hetzelfde vermogen?",
    opties: [
      "Omdat 12 V-kabels van ander koper worden gemaakt",
      "Omdat gelijkstroom meer weerstand ondervindt dan wisselstroom",
      "Omdat de kabelweerstand bij lage spanning toeneemt",
      "Omdat de stroom bij 12 V veel groter is en het verlies ook relatief een groter deel van de spanning is"
    ],
    goed: 3
  },
  {
    id: 20,
    thema: "Basisbegrippen",
    titel: "De multimeter goed gebruiken",
    uitleg: "Een multimeter meet spanning, stroom en weerstand, maar elke functie vraagt een andere aansluiting. Spanning meet je parallel: de meter heeft dan een zeer hoge ingangsweerstand (vaak 10 MΩ), zodat hij de schakeling nauwelijks beïnvloedt. Stroom meet je in serie, via een aparte ingang (mA of 10 A) met een heel lage shuntweerstand. Zet je de meter in de stroomstand parallel over een voeding, dan maak je dus kortsluiting via de meter; de interne zekering springt (of erger). Weerstand meet je alleen spanningsloos, omdat de meter zelf een kleine stroom stuurt en een externe spanning de meting verstoort of de meter beschadigt.",
    praktijk: "Gewoonte die veel ellende voorkomt: zet de rode meetsnoer na elke stroommeting meteen terug in de V/Ω-bus.",
    vraag: "Je laat de rode meetsnoer per ongeluk in de 10 A-bus en meet daarna 'spanning' op een stopcontact. Wat gebeurt er?",
    opties: [
      "Je leest gewoon 230 V af",
      "Je maakt vrijwel kortsluiting via de lage shuntweerstand in de meter",
      "De meter toont 0 V, maar er gebeurt verder niets",
      "De meter meet automatisch de stroom van het stopcontact"
    ],
    goed: 1
  },
  {
    id: 21,
    thema: "Basisbegrippen",
    titel: "Driefasenstroom: 230 en 400 V",
    uitleg: "Het net bestaat uit drie fasen (L1, L2, L3) waarvan de sinussen 120 graden ten opzichte van elkaar verschoven zijn. Tussen een fase en de nul staat 230 V; tussen twee fasen staat 230 × √3 ≈ 400 V, omdat je het verschil van twee verschoven sinussen meet. Met drie fasen kun je veel meer vermogen leveren met dezelfde kabeldoorsnede, en bij een gelijke belasting op alle fasen heft de stroom in de nulgeleider zich op. Driefasige motoren draaien bovendien vanzelf zonder startcondensator, omdat de verschoven fasen een draaiend magnetisch veld vormen. Een 3×25 A-aansluiting levert maximaal ongeveer √3 × 400 × 25 ≈ 17 kW.",
    praktijk: "Een inductiekookplaat of laadpaal wordt vaak op twee of drie fasen aangesloten. Een 'perilex'-contactdoos of rood CEE-stopcontact herken je als krachtstroom: hier staat 400 V tussen de fasen.",
    formule: "U_fase-fase = √3 × U_fase-nul  (≈ 400 V)",
    vraag: "Waarom is de spanning tussen twee fasen 400 V en niet 460 V (2 × 230)?",
    opties: [
      "Omdat er een spanningsverlies van 60 V in de kabels is",
      "Omdat de fasen 120 graden verschoven zijn, waardoor het verschil √3 × 230 V is",
      "Omdat de netbeheerder dat wettelijk zo heeft vastgelegd",
      "Omdat één fase gelijkspanning is"
    ],
    goed: 1
  },
  {
    id: 22,
    thema: "Basisbegrippen",
    titel: "Blindvermogen en cos φ",
    uitleg: "Bij een zuivere weerstand lopen spanning en stroom in de pas. Bij spoelen (motoren, transformatoren) ijlt de stroom na, bij condensatoren loopt hij voor; de faseverschuiving heet φ. Het werkelijk omgezette vermogen is dan P = U × I × cos φ, terwijl het product U × I het schijnbaar vermogen in voltampère (VA) heet. Een motor op 230 V die 5 A trekt met cos φ = 0,8 heeft 1150 VA schijnbaar vermogen maar zet maar 920 W om. Het verschil is blindvermogen: energie die elke halve periode heen en weer pendelt tussen net en magnetisch veld en wel stroom kost in kabels, maar geen arbeid levert.",
    praktijk: "Daarom staan UPS'en en omvormers in VA én W opgegeven, en moet je kabels en zekeringen dimensioneren op de stroom, niet op het wattage. Grote bedrijven compenseren met condensatorbanken om cos φ naar 1 te brengen.",
    formule: "P = U × I × cos φ",
    vraag: "Een apparaat trekt 4 A op 230 V en heeft cos φ = 0,5. Wat is het werkelijke vermogen?",
    opties: [
      "920 W",
      "1840 W",
      "460 W",
      "115 W"
    ],
    goed: 2
  },

  // ───────────────────────── Componenten ─────────────────────────
  {
    id: 23,
    thema: "Componenten",
    titel: "De weerstand als component",
    uitleg: "Een weerstand begrenst stroom of maakt van een stroom een spanning. Klassieke through-hole weerstanden zijn koolfilm (goedkoop, tolerantie 5 procent) of metaalfilm (1 procent, minder ruis en stabieler bij temperatuur). SMD-weerstanden zijn piepkleine blokjes met maten als 0805 of 0603 (in honderdsten van een inch). Behalve de waarde zijn er twee eigenschappen die je moet controleren: de tolerantie (hoeveel de echte waarde mag afwijken) en het maximale vermogen. Een weerstand heeft geen polariteit: je kunt hem in beide richtingen plaatsen.",
    praktijk: "Voor algemeen hobbywerk volstaan metaalfilmweerstanden van 1/4 W, 1 procent: ze zijn nauwelijks duurder dan koolfilm en je kunt dan op de kleurcode met vijf ringen vertrouwen.",
    vraag: "Een weerstand van 1 kΩ met 5 procent tolerantie meet 1040 Ω. Wat concludeer je?",
    opties: [
      "Hij is defect, want hij moet precies 1000 Ω zijn",
      "Hij zit binnen de tolerantie (950–1050 Ω) en is in orde",
      "Hij is verkeerd om geplaatst",
      "Hij is oververhit en moet worden vervangen"
    ],
    goed: 1
  },
  {
    id: 24,
    thema: "Componenten",
    titel: "De kleurcode van weerstanden",
    uitleg: "De waarde van through-hole weerstanden staat in gekleurde ringen. De cijfers: zwart 0, bruin 1, rood 2, oranje 3, geel 4, groen 5, blauw 6, violet 7, grijs 8, wit 9. Bij vier ringen zijn de eerste twee cijfers, de derde is de vermenigvuldiger (het aantal nullen) en de vierde de tolerantie (goud 5 procent, zilver 10 procent). Geel-violet-rood-goud is dus 4-7 met 2 nullen: 4700 Ω = 4,7 kΩ, ±5 procent. Bij vijf ringen (precisieweerstanden) zijn er drie cijfers: bruin-zwart-zwart-rood-bruin is 100 × 100 = 10 kΩ, ±1 procent (bruin). De tolerantiering staat iets verder van de andere af; zo weet je waar je begint te lezen.",
    praktijk: "Ezelsbruggetje voor de volgorde zwart-bruin-rood-oranje-geel-groen-blauw-violet-grijs-wit: denk aan de regenboog tussen zwart/bruin en grijs/wit. Twijfel je over kleuren (rood/oranje, bruin/violet), meet dan altijd even na.",
    vraag: "Welke waarde heeft een weerstand met de ringen bruin-zwart-oranje-goud?",
    opties: [
      "103 Ω",
      "1 kΩ",
      "100 kΩ",
      "10 kΩ"
    ],
    goed: 3
  },
  {
    id: 25,
    thema: "Componenten",
    titel: "De E12-reeks",
    uitleg: "Weerstanden worden niet in elke waarde gemaakt maar in genormeerde reeksen. De E12-reeks heeft 12 waarden per decade: 10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68 en 82, en daarna dezelfde getallen maal 10, 100, enzovoort. De stappen zijn logaritmisch: elke waarde is ongeveer 1,21 keer de vorige (de twaalfde machtswortel van 10). Dat is afgestemd op 10 procent tolerantie: de tolerantiegebieden van opeenvolgende waarden overlappen net, zodat elke denkbare weerstandswaarde wordt gedekt. Voor 5 procent bestaat de E24-reeks en voor 1 procent de E96-reeks.",
    praktijk: "Reken je 190 Ω uit, kies dan de dichtstbijzijnde E12-waarde aan de veilige kant: bij een LED-voorschakelweerstand rond je naar boven af (220 Ω), zodat de stroom iets lager uitvalt in plaats van hoger.",
    vraag: "Waarom zijn de E12-waarden logaritmisch verdeeld en niet bijvoorbeeld 10, 20, 30…?",
    opties: [
      "Zodat elke stap dezelfde relatieve afstand heeft en de tolerantiegebieden aansluiten",
      "Omdat logaritmische waarden goedkoper te produceren zijn",
      "Omdat de kleurcode alleen deze cijfers kan weergeven",
      "Omdat weerstanden hun waarde logaritmisch verliezen bij veroudering"
    ],
    goed: 0
  },
  {
    id: 26,
    thema: "Componenten",
    titel: "Het vermogen van een weerstand",
    uitleg: "Een weerstand zet alle energie die hij opneemt om in warmte, en hij kan maar een beperkte hoeveelheid kwijt. Gewone weerstanden zijn 1/4 W (0,25 W), grotere 1/2 W, 1 W, 5 W enzovoort. Reken het vermogen uit met P = U² / R of P = I² × R. Een weerstand van 100 Ω direct op 12 V dissipeert 144 / 100 = 1,44 W: een kwartwattweerstand wordt dan bloedheet, verkleurt en brandt door. Ontwerp met marge: houd ongeveer de helft van het nominale vermogen aan, want de nominale waarde geldt bij 70 °C omgevingstemperatuur en de weerstand zelf mag dan veel heter worden.",
    praktijk: "Een LED-voorschakelweerstand van 150 Ω met 20 mA dissipeert 0,02² × 150 = 0,06 W: ruim binnen 1/4 W. Maar bij een 12 V-schakeling met een LED van 2 V en 20 mA is het al 0,2 W: kies dan liever een 1/2 W-type.",
    formule: "P = I² × R = U² / R",
    vraag: "Over een weerstand van 47 Ω loopt 100 mA. Welk minimaal weerstandsvermogen kies je verstandig?",
    opties: [
      "1/8 W",
      "1/4 W",
      "1 W",
      "Maakt niet uit, het is maar 4,7 V"
    ],
    goed: 2
  },
  {
    id: 27,
    thema: "Componenten",
    titel: "De potmeter",
    uitleg: "Een potentiometer (potmeter) is een weerstandsbaan met een verschuifbaar contact, de loper. Hij heeft drie aansluitingen: de twee uiteinden van de baan en de loper. Sluit je de uiteinden op plus en massa aan, dan is het een instelbare spanningsdeler: de loper geeft een spanning tussen 0 en de voedingsspanning, zoals bij een volumeknop of een Arduino-analoge ingang. Gebruik je alleen één uiteinde en de loper, dan is het een regelbare weerstand (reostaat). Er bestaan lineaire potmeters (B) en logaritmische (A), die laatste voor volume omdat ons gehoor logaritmisch werkt.",
    praktijk: "Voor een Arduino-ingang is een lineaire potmeter van 10 kΩ standaard: uiteinden op 5 V en GND, loper op A0, en analogRead geeft 0 tot 1023. Gebruik een potmeter nooit als voorschakelweerstand voor een LED zonder vaste weerstand in serie: op de nulstand loopt er onbeperkte stroom.",
    vraag: "Waarom heeft een volumeknop meestal een logaritmische potmeter?",
    opties: [
      "Omdat die minder slijt",
      "Omdat een lineaire potmeter niet met wisselspanning werkt",
      "Omdat logaritmische potmeters een hoger vermogen aankunnen",
      "Omdat het gehoor geluidssterkte logaritmisch ervaart, zodat de knop dan gelijkmatig aanvoelt"
    ],
    goed: 3
  },
  {
    id: 28,
    thema: "Componenten",
    titel: "De LDR: lichtgevoelige weerstand",
    uitleg: "Een LDR (light dependent resistor) bestaat uit een halfgeleider zoals cadmiumsulfide. Licht maakt in dat materiaal ladingsdragers vrij, waardoor de weerstand daalt naarmate er meer licht op valt: van ruwweg 1 MΩ in het donker tot een paar honderd ohm in fel licht. Een LDR is traag (tientallen milliseconden tot seconden) en niet erg nauwkeurig, maar goedkoop en eenvoudig. Omdat een microcontroller geen weerstand kan meten, zet je de LDR in een spanningsdeler met een vaste weerstand. Vanwege het cadmium zijn LDR's in de EU onder RoHS grotendeels uitgefaseerd; fototransistoren en lichtsensor-IC's nemen hun plaats in.",
    praktijk: "Schemerschakelaar: LDR tussen 5 V en A0, 10 kΩ tussen A0 en GND. Meer licht geeft een lagere LDR-weerstand en dus een hogere spanning op A0.",
    vraag: "In een spanningsdeler zit de LDR boven (aan 5 V) en een vaste 10 kΩ onder (aan GND). Wat doet de uitgangsspanning als het donker wordt?",
    opties: [
      "Die daalt, omdat de LDR-weerstand stijgt",
      "Die stijgt, omdat de LDR-weerstand stijgt",
      "Die blijft gelijk; alleen de stroom verandert",
      "Die wordt negatief"
    ],
    goed: 0
  },
  {
    id: 29,
    thema: "Componenten",
    titel: "NTC en PTC: temperatuurafhankelijke weerstanden",
    uitleg: "Een thermistor is een weerstand waarvan de waarde sterk van de temperatuur afhangt. Bij een NTC (negatieve temperatuurcoëfficiënt) daalt de weerstand als het warmer wordt; een typische NTC van 10 kΩ bij 25 °C zakt naar ongeveer 3,6 kΩ bij 60 °C. Ze worden veel gebruikt als temperatuursensor, bijvoorbeeld in accupakketten en 3D-printers. Een PTC (positieve coëfficiënt) wordt boven een schakeltemperatuur plots veel hoogohmiger. Daarom dient een PTC als zelfherstellende zekering (polyfuse): bij te veel stroom wordt hij warm, schiet naar hoge weerstand en beperkt de stroom, en na afkoelen herstelt hij. Een NTC wordt ook als inschakelstroombegrenzer in voedingen gebruikt: koud hoogohmig, warm na enkele seconden laagohmig.",
    praktijk: "De relatie van een NTC is niet lineair; reken met de B-waarde uit de datasheet (bijvoorbeeld B = 3950) of gebruik een opzoektabel. Op USB-poorten zit vaak een polyfuse: bij kortsluiting valt de poort weg en werkt hij na afkoelen weer.",
    vraag: "Waarom gebruik je een PTC en geen NTC als zelfherstellende zekering?",
    opties: [
      "Omdat een PTC goedkoper is",
      "Omdat een NTC alleen op wisselspanning werkt",
      "Omdat een PTC bij opwarming hoogohmig wordt en zo de stroom beperkt, terwijl een NTC dan juist meer stroom doorlaat",
      "Omdat een PTC geen warmte ontwikkelt"
    ],
    goed: 2
  },
  {
    id: 30,
    thema: "Componenten",
    titel: "De condensator: lading opslaan",
    uitleg: "Een condensator bestaat uit twee geleidende platen gescheiden door een isolator (diëlektricum). Zet je er spanning op, dan hopen zich op de ene plaat positieve en op de andere negatieve ladingen op; er loopt geen stroom dóór de isolator, maar wel een laadstroom zolang de spanning verandert. De capaciteit C, in farad, zegt hoeveel lading er per volt in past: Q = C × U. Praktische waarden zijn piepklein: picofarad (pF), nanofarad (nF) en microfarad (µF). De opgeslagen energie is ½ × C × U², dus een elco van 1000 µF op 25 V bevat 0,31 J. Voor gelijkspanning is een opgeladen condensator een onderbreking; wisselspanning laat hij des te beter door naarmate de frequentie hoger is.",
    praktijk: "Grote condensatoren in voedingen kunnen na uitschakelen nog lang geladen blijven. Ontlaad ze via een weerstand (bijvoorbeeld 1 kΩ, 5 W) voordat je eraan werkt, nooit met een schroevendraaier.",
    formule: "Q = C × U   ;   E = ½ × C × U²",
    vraag: "Hoe gedraagt een condensator zich in een gelijkstroomkring nadat hij volledig is opgeladen?",
    opties: [
      "Als een kortsluiting",
      "Als een onderbreking: er loopt geen stroom meer",
      "Als een weerstand van precies 1 Ω per µF",
      "Hij laat de stroom pulserend door met 50 Hz"
    ],
    goed: 1
  },
  {
    id: 31,
    thema: "Componenten",
    titel: "De elco en zijn polariteit",
    uitleg: "Een elektrolytische condensator (elco) haalt een grote capaciteit in een klein volume (bijvoorbeeld 1000 µF) door een flinterdunne oxidelaag op aluminium als diëlektricum te gebruiken. Die oxidelaag wordt in stand gehouden door de juiste polariteit. Sluit je een elco omgekeerd aan, dan breekt de laag af, gaat er stroom lopen, ontstaat gas en kan de elco opzwellen of met een knal openbarsten. Op de behuizing geeft een streep met mintekens de min aan, en het kortere pootje is ook de min. Elco's hebben bovendien een maximale spanning (kies minstens 1,5 à 2 keer de werkspanning) en drogen op den duur uit, sneller bij hoge temperatuur.",
    praktijk: "Een opgezwollen of lekkende elco (bolle bovenkant) is de meest voorkomende oorzaak van kapotte voedingen en moederborden. Vervang hem door een exemplaar met dezelfde capaciteit, minstens dezelfde spanning en bij voorkeur 105 °C en lage ESR.",
    vraag: "Je hebt een 12 V-voeding. Welke elco is het meest geschikt als afvlakcondensator?",
    opties: [
      "470 µF, 10 V",
      "470 µF, 25 V",
      "470 µF, 6,3 V",
      "470 µF, 12 V"
    ],
    goed: 1
  },
  {
    id: 32,
    thema: "Componenten",
    titel: "Keramische condensators en ontkoppeling",
    uitleg: "Keramische condensators zijn klein, ongepolariseerd en hebben een zeer lage inwendige weerstand en inductie, waardoor ze ook bij hoge frequenties goed werken. Ze worden vooral gebruikt voor ontkoppeling: een condensator van 100 nF zo dicht mogelijk bij de voedingspennen van elk IC. Een chip trekt bij het schakelen korte stroompieken van nanoseconden; de inductie van lange printsporen laat die niet snel genoeg uit de voeding komen, waardoor de spanning lokaal inzakt. De ontkoppelcondensator is een klein lokaal energiereservoir dat die pieken levert. De opdruk 104 betekent 10 met 4 nullen picofarad = 100 000 pF = 100 nF.",
    praktijk: "Zet bij elk IC 100 nF tussen Vcc en GND, met korte draadjes. Rare resets of onverklaarbaar gedrag van een microcontroller zijn vaak het gevolg van ontbrekende ontkoppeling.",
    vraag: "Welke capaciteit heeft een keramische condensator met de opdruk 473?",
    opties: [
      "473 pF",
      "4,7 µF",
      "47 nF",
      "47 pF"
    ],
    goed: 2
  },
  {
    id: 33,
    thema: "Componenten",
    titel: "De RC-tijd",
    uitleg: "Laad je een condensator op via een weerstand, dan gaat dat niet ineens: de stroom is groot zolang de condensator leeg is en wordt kleiner naarmate de spanning oploopt. Het verloop is exponentieel, met een tijdconstante τ = R × C. Na één τ is de condensator voor 63 procent geladen, na 3τ voor 95 procent en na 5τ praktisch volledig (99,3 procent). Met 10 kΩ en 100 µF is τ = 10 000 × 0,0001 = 1 s, dus na ongeveer 5 seconden is hij vol. Ontladen werkt spiegelbeeldig: na één τ is nog 37 procent over. Dit principe zit in timers, filters, ontdendercircuits en de 555-timer.",
    praktijk: "Een RC-filter van 10 kΩ en 100 nF (τ = 1 ms) dempt contactdender van een drukknop. Ook een PWM-signaal maak je met een RC-filter tot een gladde gelijkspanning, als τ veel groter is dan de PWM-periode.",
    formule: "τ = R × C   (63 % na 1τ, ≈ 99 % na 5τ)",
    vraag: "Een condensator van 47 µF wordt via 22 kΩ opgeladen. Na hoeveel tijd is hij ongeveer volledig geladen?",
    opties: [
      "Ongeveer 5 seconden",
      "Ongeveer 1 seconde",
      "Ongeveer 0,1 seconde",
      "Ongeveer 1 milliseconde"
    ],
    goed: 0
  },
  {
    id: 34,
    thema: "Componenten",
    titel: "De spoel",
    uitleg: "Een spoel (inductor) is een gewikkelde draad, vaak om een kern van ferriet of ijzer. Stroom door de spoel bouwt een magnetisch veld op waarin energie wordt opgeslagen (½ × L × I²). Een spoel verzet zich tegen verandering van stroom: probeer je de stroom snel te veranderen, dan wekt de spoel zelf een spanning op die U = L × dI/dt bedraagt. Dat is het spiegelbeeld van een condensator, die zich tegen snelle spanningsverandering verzet. Voor gelijkstroom is een spoel (na het inschakelen) gewoon een stukje draad; voor wisselstroom groeit de weerstand (reactantie) met de frequentie. De eenheid is henry (H); in elektronica meestal µH of mH.",
    praktijk: "Schakel je de stroom door een relaisspoel of motor plotseling uit, dan wordt dI/dt enorm en ontstaat een spanningspiek van honderden volts: precies daarom zet je er een flyback-diode over.",
    formule: "U = L × dI/dt   ;   E = ½ × L × I²",
    vraag: "Wat gebeurt er als je de stroom door een spoel abrupt onderbreekt?",
    opties: [
      "De spoel ontlaadt zich langzaam via de isolatie",
      "Er gebeurt niets; een spoel slaat geen energie op",
      "De stroom keert direct om en blijft rondlopen",
      "De spoel wekt een hoge spanningspiek op, omdat dI/dt zeer groot is"
    ],
    goed: 3
  },
  {
    id: 35,
    thema: "Componenten",
    titel: "De transformator",
    uitleg: "Een transformator bestaat uit twee spoelen op een gemeenschappelijke ijzerkern. De wisselstroom in de primaire spoel wekt een wisselend magnetisch veld op dat in de secundaire spoel een spanning induceert. De spanningsverhouding is gelijk aan de verhouding van de windingen: U1 / U2 = N1 / N2. Een trafo van 230 naar 12 V heeft dus ongeveer 19 keer zoveel primaire als secundaire windingen. Omdat het vermogen (op verliezen na) behouden blijft, gaat de stroom andersom: 12 V met 2 A secundair vraagt primair ongeveer 0,1 A. Een transformator werkt alleen met wisselspanning, omdat alleen een veranderend veld spanning induceert, en hij zorgt ook voor galvanische scheiding tussen net en uitgang.",
    praktijk: "Moderne adapters gebruiken geen zware 50 Hz-trafo meer maar een schakelende voeding: die maakt eerst een hoge frequentie (tientallen kHz), waardoor de transformator vele malen kleiner kan zijn.",
    formule: "U1 / U2 = N1 / N2   ;   U1 × I1 ≈ U2 × I2",
    vraag: "Waarom kun je een transformator niet op een 12 V-accu aansluiten om 230 V te krijgen?",
    opties: [
      "Omdat de windingsverhouding dan omgekeerd moet",
      "Omdat gelijkspanning geen veranderend magnetisch veld geeft en er dus niets wordt geïnduceerd",
      "Omdat de accu te weinig stroom levert",
      "Omdat transformatoren alleen omlaag kunnen transformeren"
    ],
    goed: 1
  },
  {
    id: 36,
    thema: "Componenten",
    titel: "De diode",
    uitleg: "Een diode is een halfgeleider (een PN-overgang) die stroom maar in één richting doorlaat: van anode naar kathode. De kathode herken je aan de streep op de behuizing. In doorlaatrichting begint een siliciumdiode pas echt te geleiden vanaf ongeveer 0,6 à 0,7 V; daarboven blijft de spanning over de diode nagenoeg constant, ook als de stroom flink stijgt. In sperrichting loopt er vrijwel niets, tot de doorslagspanning wordt bereikt. Een 1N4007 kan 1 A doorlaten en 1000 V sperren; een 1N4148 is een kleine snelle signaaldiode. Schottkydiodes hebben een lagere drempel (0,2 à 0,4 V) en zijn sneller, maar lekken meer en sperren minder hoge spanningen.",
    praktijk: "Een diode in serie met de voedingsingang beschermt tegen ompolen. Gebruik bij een batterijschakeling liever een Schottky: je verliest dan zo'n 0,3 V in plaats van 0,7 V.",
    vraag: "Je zet een 1N4007 in serie met een 5 V-voeding om tegen ompolen te beschermen. Welke spanning krijgt de schakeling ongeveer?",
    opties: [
      "5,0 V",
      "4,3 V",
      "2,5 V",
      "5,7 V"
    ],
    goed: 1
  },
  {
    id: 37,
    thema: "Componenten",
    titel: "De gelijkrichterbrug",
    uitleg: "Een gelijkrichterbrug (graetzbrug) bestaat uit vier diodes die beide halve golven van een wisselspanning dezelfde kant op sturen. Tijdens elke halve periode geleiden twee diodes in serie, dus je verliest ongeveer 2 × 0,7 = 1,4 V. Het resultaat is een pulserende gelijkspanning van 100 Hz, die je met een grote elco afvlakt tot bijna de piekwaarde. Een 12 V AC-trafo levert zo ongeveer 12 × 1,414 − 1,4 ≈ 15,6 V DC onbelast. Onder belasting ontlaadt de elco tussen de pieken, wat een rimpel geeft van ongeveer ΔU ≈ I / (f × C): met 1 A en 4700 µF is dat 1 / (100 × 0,0047) ≈ 2,1 V.",
    praktijk: "Kies de elco zo groot dat de laagste waarde van de rimpel nog boven de minimale ingangsspanning van je regelaar blijft; voor een 7805 is dat ongeveer 7 V.",
    formule: "U_DC ≈ U_eff × √2 − 1,4 V   ;   ΔU ≈ I / (f × C)",
    vraag: "Waarom is de rimpelfrequentie na een gelijkrichterbrug op het Europese net 100 Hz en niet 50 Hz?",
    opties: [
      "Omdat de brug de frequentie elektronisch verdubbelt",
      "Omdat de elco met dubbele frequentie oplaadt door resonantie",
      "Omdat beide halve golven worden gebruikt, dus twee pieken per periode van 20 ms",
      "Omdat het net eigenlijk op 100 Hz draait"
    ],
    goed: 2
  },
  {
    id: 38,
    thema: "Componenten",
    titel: "De zenerdiode",
    uitleg: "Een zenerdiode is gemaakt om in sperrichting bij een nauwkeurig bepaalde spanning door te slaan, zonder kapot te gaan. Je schakelt haar daarom in sperrichting (kathode aan plus), met een serieweerstand die de stroom begrenst. Boven de zenerspanning (bijvoorbeeld 5,1 V) geleidt ze precies zoveel dat de spanning op die waarde blijft. Een eenvoudige stabilisator van 12 V naar 5,1 V met 20 mA zenerstroom: R = (12 − 5,1) / 0,02 ≈ 345 Ω, dus 330 Ω. De belastingsstroom gaat van de zenerstroom af; trek je er meer dan die 20 mA uit, dan valt de stabilisatie weg. Zeners zijn dus geschikt als referentie of beveiliging, niet als stevige voeding.",
    praktijk: "Een zener van 5,1 V of 3,3 V met een serieweerstand is een goedkope bescherming voor een microcontrolleringang tegen te hoge spanning. Let op het vermogen: P = U_z × I_z.",
    formule: "R_serie = (U_in − U_z) / I",
    vraag: "Hoe sluit je een zenerdiode aan om een spanning te stabiliseren?",
    opties: [
      "In sperrichting, met een serieweerstand ervoor",
      "In doorlaatrichting, zonder weerstand",
      "In sperrichting, rechtstreeks over de voeding zonder weerstand",
      "In serie met de belasting, in doorlaatrichting"
    ],
    goed: 0
  },
  {
    id: 39,
    thema: "Componenten",
    titel: "De LED",
    uitleg: "Een LED (light emitting diode) is een diode waarin elektronen bij het oversteken van de PN-overgang energie als licht afgeven. De kleur hangt af van het halfgeleidermateriaal en bepaalt ook de doorlaatspanning: rood ongeveer 1,8 à 2 V, groen en geel rond 2 à 2,2 V, blauw en wit rond 3 à 3,3 V (blauw licht bevat meer energie per foton). Een witte LED is meestal een blauwe LED met gele fosfor. Het lange pootje is de anode (+), aan de kant van de kathode zit een platte rand. Een LED moet je op stróóm aansturen, niet op spanning: boven de drempel stijgt de stroom zo steil dat een paar tiende volt extra al het verschil is tussen mooi branden en doorbranden.",
    praktijk: "Standaard indicator-LED's van 5 mm zijn op 20 mA gespecificeerd, maar moderne LED's zijn op 2 à 5 mA al ruim fel genoeg. Een lagere stroom spaart batterij en verlengt de levensduur.",
    vraag: "Waarom kun je een rode LED niet direct op een 3 V-knoopcel aansluiten op dezelfde manier als op een 5 V-voeding?",
    opties: [
      "Omdat LED's alleen op wisselspanning branden",
      "Omdat knoopcellen een te hoge stroom leveren",
      "Omdat een LED stroomgestuurd is en de stroom zonder begrenzing door kleine spanningsverschillen sterk varieert",
      "Omdat een rode LED minimaal 5 V nodig heeft"
    ],
    goed: 2
  },
  {
    id: 40,
    thema: "Componenten",
    titel: "Een LED-voorschakelweerstand berekenen",
    uitleg: "Omdat een LED stroom moet krijgen in plaats van spanning, zet je een weerstand in serie die de stroom vastlegt. Volgens Kirchhoff staat over de weerstand de voedingsspanning min de LED-spanning, en met de wet van Ohm volgt de weerstand. Een rode LED van 2 V op 5 V met 20 mA: R = (5 − 2) / 0,02 = 150 Ω. Een witte LED van 3,1 V op 5 V met 10 mA: R = (5 − 3,1) / 0,01 = 190 Ω, en dan kies je 220 Ω uit de E12-reeks. Op 12 V met een rode LED en 20 mA: R = 10 / 0,02 = 500 Ω, dus 470 of 560 Ω, en het vermogen is dan 0,2 W. Meerdere LED's zet je bij voorkeur elk met een eigen weerstand, niet parallel op één weerstand: door spreiding in doorlaatspanning zou één LED dan de meeste stroom trekken.",
    praktijk: "Op 12 V kun je drie rode LED's in serie met één weerstand zetten: R = (12 − 3 × 2) / 0,02 = 300 Ω (kies 330 Ω). Dat bespaart energie, want er gaat minder in de weerstand verloren.",
    formule: "R = (U_voeding − U_LED) / I_LED",
    vraag: "Je wilt een blauwe LED (3,2 V) op 9 V laten branden met 15 mA. Welke weerstand is het meest geschikt?",
    opties: [
      "600 Ω, dus kies 560 Ω",
      "213 Ω, dus kies 220 Ω",
      "Geen weerstand nodig bij 15 mA",
      "387 Ω, dus kies 390 Ω"
    ],
    goed: 3
  },
  {
    id: 41,
    thema: "Componenten",
    titel: "Het relais",
    uitleg: "Een relais is een elektrisch bediende schakelaar: een kleine stroom door een spoel trekt via een elektromagneet een anker aan, dat mechanische contacten omzet. Zo bedien je met een laag vermogen (bijvoorbeeld een 5 V-spoel van ongeveer 70 mA) een veel groter vermogen, zoals 230 V en 10 A, met volledige galvanische scheiding tussen stuur- en lastcircuit. De contacten hebben meestal een COM (gemeenschappelijk), een NO (normally open: sluit bij bekrachtiging) en een NC (normally closed: opent bij bekrachtiging). Nadelen zijn de beperkte levensduur van de contacten, schakelvonken, een schakeltijd van ongeveer 10 ms en de spanningspiek van de spoel bij uitschakelen.",
    praktijk: "Een Arduino-pin kan de 70 mA van een relaisspoel niet leveren: gebruik een transistor of een relaismodule (waar transistor en flyback-diode al op zitten).",
    vraag: "Een lamp moet branden als het relais níet bekrachtigd is, en uitgaan als het wel bekrachtigd is. Welke contacten gebruik je?",
    opties: [
      "COM en NC",
      "COM en NO",
      "NO en NC",
      "De twee spoelaansluitingen"
    ],
    goed: 0
  },
  {
    id: 42,
    thema: "Componenten",
    titel: "De zekering",
    uitleg: "Een zekering beschermt de bedrading en het apparaat tegen te grote stroom, vooral bij kortsluiting. De klassieke smeltzekering bevat een dun draadje dat door I² × R-warmte smelt zodra de stroom te lang boven de nominale waarde ligt. Er zijn snelle (F, fast) en trage (T, time-lag) typen: een trage zekering verdraagt korte inschakelpieken van motoren of voedingen. Belangrijk is dat een zekering in eerste instantie de kabel beschermt, en niet jou tegen een schok: de stromen waarbij hij doorslaat zijn veel groter dan wat voor het lichaam dodelijk is. De zekering hoort altijd in de fase (de plus), zodat alles erachter spanningsloos wordt.",
    praktijk: "Vervang een doorgebrande zekering altijd door dezelfde waarde en hetzelfde type. Slaat hij steeds weer door, dan is er een fout; een zwaardere zekering verplaatst het probleem naar de kabel, die dan in brand kan vliegen.",
    vraag: "Een zekering in een versterker brandt telkens door bij inschakelen, terwijl het apparaat daarna normaal werkt. Wat is de meest waarschijnlijke oplossing?",
    opties: [
      "Een snelle zekering met een twee keer zo hoge stroomwaarde plaatsen",
      "De zekering overbruggen met een draadje",
      "Controleren of er per ongeluk een snelle (F) in plaats van een trage (T) zekering van dezelfde waarde zit",
      "De zekering in de nul in plaats van de fase zetten"
    ],
    goed: 2
  },
  {
    id: 43,
    thema: "Componenten",
    titel: "Smeltzekering versus installatieautomaat",
    uitleg: "In de meterkast zitten tegenwoordig installatieautomaten in plaats van smeltpatronen. Een automaat combineert twee mechanismen: een thermische beveiliging (een bimetaal dat langzaam reageert op langdurige overbelasting) en een magnetische beveiliging (een spoel die bij kortsluiting binnen milliseconden afschakelt). De karakteristiek geeft aan bij welke veelvoud van de nominale stroom het magnetische deel reageert: B bij 3 à 5 keer In, C bij 5 à 10 keer In. Een B16 in een huisinstallatie schakelt bij kortsluiting dus direct af vanaf 48 à 80 A. Een automaat kun je na het verhelpen van de fout gewoon weer inschakelen, in tegenstelling tot een smeltzekering die vervangen moet worden.",
    praktijk: "Valt een groep pas na enkele minuten uit, dan is het waarschijnlijk overbelasting (thermisch): te veel apparaten tegelijk. Valt hij meteen bij inschakelen van één apparaat, dan wijst dat op kortsluiting of een aardlekfout in dat apparaat.",
    vraag: "Waarom gebruik je voor een groep met grote motoren eerder een C- dan een B-karakteristiek?",
    opties: [
      "Omdat C-automaten minder stroom doorlaten",
      "Omdat motoren een hoge aanloopstroom hebben die een B-automaat al onterecht zou laten afschakelen",
      "Omdat C staat voor 'continue belasting'",
      "Omdat B-automaten alleen geschikt zijn voor gelijkstroom"
    ],
    goed: 1
  },
  {
    id: 44,
    thema: "Componenten",
    titel: "De aardlekschakelaar",
    uitleg: "Een aardlekschakelaar beschermt mensen, niet kabels. Hij vergelijkt voortdurend de stroom die via de fase naar binnen gaat met de stroom die via de nul terugkomt; beide geleiders gaan door een ringkern. Normaal zijn die stromen gelijk en heffen hun magnetische velden elkaar op. Lekt er stroom weg via een andere weg (een aarddraad of een menselijk lichaam), dan ontstaat een verschil, en vanaf 30 mA schakelt de aardlekschakelaar binnen ongeveer 0,3 s af. Die 30 mA is gekozen omdat hartritmestoornissen bij langdurige stroom in die orde beginnen. Een aardlekschakelaar beschermt níet als je tegelijk fase en nul aanraakt, want dan gaat er evenveel stroom heen als terug.",
    praktijk: "Druk eens per halfjaar op de testknop van de aardlekschakelaar; die maakt kunstmatig een lekstroom en controleert of het mechanisme nog werkt.",
    vraag: "In welke situatie beschermt een aardlekschakelaar je níet?",
    opties: [
      "Als je een defect apparaat met metalen behuizing aanraakt",
      "Als je met één hand een fasedraad aanraakt en met je voeten op een natte vloer staat",
      "Als een wasmachine door vocht lekt naar de aarde",
      "Als je fase en nul aanraakt terwijl je verder goed geïsoleerd staat"
    ],
    goed: 3
  },
  {
    id: 45,
    thema: "Componenten",
    titel: "Schakelaars, drukknoppen en contactdender",
    uitleg: "Schakelaars worden beschreven met polen (P, aantal onafhankelijke circuits) en worpen (T, aantal standen per pool). Een SPST is een simpele aan/uit, een SPDT een wisselschakelaar met drie aansluitingen, een DPDT twee gekoppelde wisselschakelaars. Een drukknop is meestal NO (maakt contact zolang je drukt) of NC. Mechanische contacten hebben een verraderlijke eigenschap: bij het sluiten stuiteren ze een paar milliseconden, waardoor de stroom tientallen keren aan en uit gaat. Dat heet contactdender. Een microcontroller is snel genoeg om elke stuiter als aparte druk te zien, dus één druk kan als vijf tellen.",
    praktijk: "Ontdender in software (pas reageren als de ingang 20 à 50 ms stabiel is) of in hardware (RC-filter met bijvoorbeeld 10 kΩ en 100 nF, eventueel met een Schmitt-trigger).",
    vraag: "Je teller op een Arduino springt soms 3 of 4 op bij één druk op een knop. Wat is de oorzaak?",
    opties: [
      "Contactdender: het contact stuitert, wat meerdere flanken geeft",
      "De knop is een NC-type in plaats van NO",
      "De Arduino-klok loopt te langzaam",
      "De pull-upweerstand is te klein, waardoor de stroom te hoog is"
    ],
    goed: 0
  },
  {
    id: 46,
    thema: "Componenten",
    titel: "Het kwartskristal",
    uitleg: "Een kwartskristal is een plaatje kwarts dat door het piëzo-elektrische effect mechanisch trilt als je er een wisselspanning op zet, en omgekeerd een spanning opwekt als het trilt. Door de afmetingen resoneert het extreem nauwkeurig op één frequentie, bijvoorbeeld 16 MHz voor een Arduino Uno of 32,768 kHz voor horloges (2^15, zodat vijftien keer delen door twee precies 1 Hz geeft). De nauwkeurigheid is typisch 20 à 50 ppm, oftewel een afwijking van hooguit enkele seconden per dag. Een RC-oscillator kan procenten afwijken. Het kristal zit met twee kleine condensators (bijvoorbeeld 22 pF) naar massa aan de oscillatorpennen van de microcontroller.",
    praktijk: "Seriële communicatie (UART) vereist dat beide kanten dezelfde baudrate hebben binnen een paar procent. Draait een microcontroller op zijn interne RC-oscillator, dan kan dat net misgaan; met een kristal is het betrouwbaar.",
    vraag: "Waarom hebben horlogekristallen een frequentie van 32 768 Hz?",
    opties: [
      "Omdat dat de natuurlijke trillingsfrequentie van alle kwarts is",
      "Omdat het 2^15 is, waardoor je met binaire delers precies 1 Hz krijgt",
      "Omdat het boven de gehoorgrens ligt",
      "Omdat het de netfrequentie maal 655 is"
    ],
    goed: 1
  },
  {
    id: 47,
    thema: "Componenten",
    titel: "De luidspreker",
    uitleg: "Een dynamische luidspreker heeft een spreekspoel in de luchtspleet van een permanente magneet, vastgemaakt aan een conus. Stroom door de spoel geeft een kracht (de Lorentzkracht) die de conus heen en weer beweegt, evenredig met het signaal. De opgegeven impedantie, vaak 4 of 8 Ω, is een nominale wisselstroomwaarde; de gelijkstroomweerstand ligt lager (een 8 Ω-luidspreker meet met een multimeter ongeveer 6 Ω). Een versterker is ontworpen voor een minimale impedantie: twee 8 Ω-luidsprekers parallel geven 4 Ω, wat de versterker meer stroom laat leveren. Een luidspreker mag nooit gelijkstroom krijgen; de conus wordt dan uit het midden gedrukt en de spoel wordt heet.",
    praktijk: "Wil je met een Arduino een luidsprekertje aansturen, zet dan een weerstand van ongeveer 100 Ω of een condensator in serie, of beter een kleine versterker (bijvoorbeeld PAM8403). Een 8 Ω direct op een pin trekt veel te veel stroom.",
    vraag: "Je meet een luidspreker met een multimeter en vindt 6,2 Ω. Wat is waarschijnlijk de nominale impedantie?",
    opties: [
      "4 Ω",
      "6 Ω",
      "16 Ω",
      "8 Ω"
    ],
    goed: 3
  },
  {
    id: 48,
    thema: "Componenten",
    titel: "Piëzozoemers: actief en passief",
    uitleg: "Een piëzo-element is een keramische schijf die vervormt als je er spanning op zet, en omgekeerd spanning opwekt als hij vervormt (bijvoorbeeld bij een tik: de basis van klopsensoren en gasaanstekers). Een passieve zoemer is alleen het element: je moet er een wisselend signaal op zetten, en de frequentie bepaalt de toon. Een actieve zoemer heeft een ingebouwde oscillator: zet je er gelijkspanning op, dan piept hij op één vaste toon. Elektrisch gedraagt een piëzo zich vooral als een condensator van enkele tientallen nanofarad, zodat hij weinig stroom trekt. Hij is het luidst rond zijn resonantiefrequentie, meestal 2 à 4 kHz.",
    praktijk: "Met de Arduino-functie tone(pin, 440) speel je melodieën op een passieve zoemer. Op een actieve zoemer klinkt dat raar, want die maakt zelf al zijn toon; daar volstaat digitalWrite HIGH.",
    vraag: "Je zet 5 V gelijkspanning op een zoemer en hoort niets, alleen een tikje bij aansluiten. Wat is er aan de hand?",
    opties: [
      "Het is een passieve zoemer, die een wisselend signaal nodig heeft",
      "Het is een actieve zoemer die defect is",
      "De zoemer is verkeerd gepolariseerd",
      "Piëzozoemers werken alleen op 230 V"
    ],
    goed: 0
  },

  // ───────────────────────── Halfgeleiders & schakelingen ─────────────────────────
  {
    id: 49,
    thema: "Halfgeleiders & schakelingen",
    titel: "De NPN-transistor als schakelaar",
    uitleg: "Een bipolaire NPN-transistor heeft drie aansluitingen: basis, collector en emitter. Een kleine stroom van basis naar emitter laat een veel grotere stroom van collector naar emitter toe. Als schakelaar zet je de emitter aan massa en de last (lamp, relais, motor) tussen de plus en de collector: dat heet low-side schakelen. Geef je de basis via een weerstand een paar milliampère, dan gaat de transistor in verzadiging: hij geleidt volledig en er blijft maar ongeveer 0,1 à 0,3 V (Uce,sat) over. Zonder basisstroom spert hij. Over de basis-emitterovergang staat in geleiding, net als bij een diode, ongeveer 0,7 V.",
    praktijk: "Een BC547 (tot 100 mA) of 2N2222 (tot ongeveer 600 mA) is het werkpaard voor het schakelen van relais en kleine lasten vanaf een microcontroller. Vergeet de basisweerstand nooit: zonder weerstand trek je de pin kapot.",
    vraag: "Waar zet je bij low-side schakelen met een NPN-transistor de last?",
    opties: [
      "Tussen de emitter en massa",
      "Tussen de basis en de plus",
      "Tussen de plus en de collector",
      "Tussen de collector en de basis"
    ],
    goed: 2
  },
  {
    id: 50,
    thema: "Halfgeleiders & schakelingen",
    titel: "hFE en de basisweerstand berekenen",
    uitleg: "De stroomversterking hFE (of β) geeft aan hoeveel keer groter de collectorstroom is dan de basisstroom, zolang de transistor niet verzadigd is. Die waarde spreidt enorm: een BC547 kan tussen 110 en 800 zitten, en hij daalt bij hoge stroom en lage temperatuur. Daarom reken je bij schakelen met de minimale hFE uit de datasheet en stuur je de basis bewust een factor 3 à 10 te hard (overdrive), zodat de transistor zeker verzadigt. Voorbeeld: een last van 50 mA, minimale hFE 100, dus minimaal 0,5 mA; met factor 5 wordt dat 2,5 mA. Vanaf een 5 V-pin: R_b = (5 − 0,7) / 0,0025 ≈ 1720 Ω, dus 1,5 kΩ.",
    praktijk: "Wordt je schakeltransistor warm terwijl hij aan staat, meet dan Uce: is die veel groter dan 0,3 V, dan zit hij niet in verzadiging en is de basisweerstand te groot.",
    formule: "I_b ≥ I_c / hFE_min  ;  R_b = (U_stuur − 0,7) / I_b",
    vraag: "Waarom stuur je bij een transistorschakelaar de basis met meer stroom aan dan I_c / hFE?",
    opties: [
      "Om de transistor sneller te laten verouderen",
      "Omdat hFE sterk spreidt en daalt, en je zeker wilt zijn van verzadiging",
      "Omdat de collectorstroom anders van richting verandert",
      "Omdat de wet van Ohm niet geldt voor de basis"
    ],
    goed: 1
  },
  {
    id: 51,
    thema: "Halfgeleiders & schakelingen",
    titel: "De transistor als versterker",
    uitleg: "In het lineaire gebied, tussen sperren en verzadiging in, verandert de collectorstroom evenredig met de basisstroom. In de klassieke gemeenschappelijke-emitterschakeling stel je met een spanningsdeler op de basis een rustpunt (instelpunt) in, zodat de collectorspanning in rust ongeveer halverwege de voeding staat. Een klein wisselsignaal op de basis, via een koppelcondensator, laat de collectorstroom en dus de spanning over de collectorweerstand meebewegen: een versterkte, omgekeerde kopie. Met een emitterweerstand R_e wordt de spanningsversterking ongeveer R_c / R_e, onafhankelijk van de onbetrouwbare hFE. Die tegenkoppeling maakt de schakeling ook temperatuurstabiel.",
    praktijk: "Met R_c = 4,7 kΩ en R_e = 470 Ω krijg je ongeveer een spanningsversterking van 10. Zet je een grote condensator over R_e, dan stijgt de versterking voor wisselsignalen flink, maar wordt ze minder voorspelbaar.",
    formule: "A_u ≈ − R_c / R_e",
    vraag: "Waarom stel je de collectorspanning in rust ongeveer halverwege de voedingsspanning in?",
    opties: [
      "Zodat het signaal maximaal naar boven en naar beneden kan uitslaan zonder te vervormen",
      "Omdat de transistor anders in sperrichting gaat",
      "Om de hFE te verdubbelen",
      "Om het stroomverbruik op nul te krijgen"
    ],
    goed: 0
  },
  {
    id: 52,
    thema: "Halfgeleiders & schakelingen",
    titel: "De PNP-transistor",
    uitleg: "Een PNP-transistor is het spiegelbeeld van een NPN: de emitter zit aan de plus, en de transistor geleidt als je de basis ongeveer 0,7 V láger maakt dan de emitter, waardoor basisstroom uit de basis wegvloeit. Daarmee kun je high-side schakelen: de transistor zit tussen de plus en de last, en de last hangt aan massa. Dat is nodig als de last één kant aan massa moet hebben, zoals bij veel modules of in een auto (chassis = massa). Een valkuil: als de emitter op 12 V zit, moet de basis naar 12 V om uit te gaan. Een 5 V-microcontroller kan dat niet, dus de PNP blijft dan altijd een beetje aan; je hebt een extra NPN nodig om de basis naar massa te trekken.",
    praktijk: "Typische complementaire paren zijn BC547/BC557 en 2N2222/2N2907. In een H-brug of push-pullversterker werken NPN en PNP samen.",
    vraag: "Een PNP-transistor heeft zijn emitter op 12 V. Je stuurt de basis via een weerstand met een 5 V-Arduino-pin. Wat gebeurt er als de pin HIGH (5 V) is?",
    opties: [
      "De transistor spert volledig",
      "De transistor gaat kapot door de 5 V",
      "Er gebeurt niets, PNP's reageren alleen op negatieve spanning",
      "De transistor geleidt nog steeds, omdat de basis veel lager dan de emitter staat"
    ],
    goed: 3
  },
  {
    id: 53,
    thema: "Halfgeleiders & schakelingen",
    titel: "De darlingtontransistor",
    uitleg: "Een darlington bestaat uit twee transistoren waarbij de emitterstroom van de eerste de basisstroom van de tweede is. De totale versterking is ongeveer het product: hFE1 × hFE2, al snel 1000 of meer. Daardoor kun je met een paar milliampère uit een microcontroller ampères schakelen, bijvoorbeeld met een TIP120 of het ULN2003-IC met zeven darlingtons. Er zijn wel nadelen: de basis-emitterspanning is ongeveer 1,2 à 1,4 V (twee overgangen), en de verzadigingsspanning is niet 0,2 maar ongeveer 0,7 à 1 V, omdat de eerste transistor de tweede niet volledig kan verzadigen. Bij 2 A betekent dat ongeveer 2 W warmte, terwijl een goede MOSFET met 0,05 W toe kan.",
    praktijk: "De ULN2003 is ideaal voor stappenmotoren en relais: hij heeft ingebouwde flyback-diodes (aansluiting COM naar de plus). Voor grote stromen is een logic-level MOSFET tegenwoordig vrijwel altijd beter.",
    vraag: "Wat is het belangrijkste nadeel van een darlington ten opzichte van een enkele transistor of MOSFET bij het schakelen van een grote stroom?",
    opties: [
      "Hij heeft een te lage stroomversterking",
      "Hij kan alleen wisselspanning schakelen",
      "Hij heeft een hoge verzadigingsspanning en wordt daardoor warm",
      "Hij heeft een negatieve voedingsspanning nodig"
    ],
    goed: 2
  },
  {
    id: 54,
    thema: "Halfgeleiders & schakelingen",
    titel: "De MOSFET",
    uitleg: "Een MOSFET heeft gate, drain en source. Anders dan een bipolaire transistor wordt hij met spanning gestuurd: de gate is door een flinterdun oxidelaagje geïsoleerd, dus er loopt in rust geen gatestroom. Een spanning tussen gate en source (U_gs) trekt ladingsdragers naar een kanaal onder de gate, waardoor drain en source laagohmig verbonden worden. Volledig aan gedraagt de MOSFET zich als een kleine weerstand, R_ds(on), vaak tientallen milliohm of minder. De warmte is dan P = I² × R_ds(on): met 5 A en 25 mΩ is dat maar 0,6 W. De gate is wel een condensator (de gatecapaciteit) die bij elk schakelen even op- en ontladen moet worden.",
    praktijk: "Zet altijd een pull-downweerstand van ongeveer 10 kΩ tussen gate en source: een zwevende gate houdt lading vast en de MOSFET kan dan willekeurig half aan blijven staan en heet worden.",
    formule: "P = I² × R_ds(on)",
    vraag: "Waarom heeft een MOSFET als schakelaar vaak minder verlies dan een bipolaire transistor bij grote stromen?",
    opties: [
      "Omdat hij in geleiding een zeer lage weerstand heeft in plaats van een vaste spanningsval van enkele tienden volt",
      "Omdat hij alleen bij lage spanningen werkt",
      "Omdat de stroom door de gate gaat in plaats van door de drain",
      "Omdat MOSFETs geen warmte kunnen ontwikkelen"
    ],
    goed: 0
  },
  {
    id: 55,
    thema: "Halfgeleiders & schakelingen",
    titel: "Logic-level MOSFETs en de gatespanning",
    uitleg: "De drempelspanning U_gs(th) in een datasheet is een valkuil: dat is de spanning waarbij de MOSFET nét begint te geleiden (vaak gedefinieerd bij 250 µA), niet waarbij hij volledig aan staat. Een IRF540 heeft een drempel van 2 à 4 V, maar zijn lage R_ds(on) geldt pas bij U_gs = 10 V. Op 5 V uit een Arduino staat hij maar half aan en wordt hij heet. Een logic-level MOSFET, zoals de IRLZ44N (de L verraadt het), heeft een R_ds(on) die al bij 4 à 5 V gespecificeerd is: rond 25 mΩ bij 5 V. Voor 3,3 V-microcontrollers (ESP32, Raspberry Pi) heb je MOSFETs nodig die bij 2,5 à 3,3 V zijn gespecificeerd, zoals de AO3400.",
    praktijk: "Zoek in de datasheet de regel R_ds(on) en kijk bij welke U_gs die staat. Staat daar alleen 10 V, dan is hij niet geschikt om rechtstreeks vanaf een 5 V- of 3,3 V-pin te schakelen. Zet een gateweerstand van 100 à 220 Ω in serie om stroompieken naar de gatecapaciteit te beperken.",
    vraag: "Een MOSFET heeft U_gs(th) = 2 V. Je stuurt hem met 3,3 V. Wat is de juiste conclusie?",
    opties: [
      "Hij staat volledig aan, want 3,3 V is ruim boven de drempel",
      "Hij gaat kapot, want 3,3 V is boven de drempel",
      "Je weet het pas als je in de datasheet ziet bij welke U_gs de R_ds(on) gespecificeerd is",
      "Hij geleidt alleen als je ook een basisweerstand toevoegt"
    ],
    goed: 2
  },
  {
    id: 56,
    thema: "Halfgeleiders & schakelingen",
    titel: "De flyback-diode",
    uitleg: "Schakelt een transistor de stroom door een spoel (relais, motor, magneetventiel) uit, dan wil de spoel de stroom vasthouden en wekt hij volgens U = L × dI/dt een spanningspiek op die honderden volts kan bedragen. Die piek staat over de transistor en kan hem in één keer vernielen of storingen veroorzaken. Een flyback-diode (vrijloopdiode) antiparallel over de spoel geeft de stroom een rondloopweg: de diode zit in sperrichting tijdens normaal bedrijf (kathode aan de plus) en gaat geleiden zodra de spanning omkeert. De spanning wordt zo begrensd tot ongeveer 0,7 V boven de voeding en de energie verdwijnt rustig als warmte. Bijwerking: het relais valt iets trager af.",
    praktijk: "Een 1N4007 of 1N4148 over een relaisspoel is standaard. Voor sneller afvallen kun je een zener in serie met de diode zetten; de piek wordt dan iets hoger maar de energie verdwijnt sneller.",
    vraag: "Hoe plaats je een flyback-diode over een relaisspoel die via een NPN-transistor aan massa wordt geschakeld?",
    opties: [
      "In serie met de spoel, anode aan de plus",
      "Parallel over de spoel, anode aan de plus",
      "Tussen basis en emitter van de transistor",
      "Parallel over de spoel, kathode aan de plus"
    ],
    goed: 3
  },
  {
    id: 57,
    thema: "Halfgeleiders & schakelingen",
    titel: "Pull-up en pull-down",
    uitleg: "Een digitale ingang van een microcontroller is extreem hoogohmig. Is er niets op aangesloten (een open drukknop), dan zweeft de ingang: hij pikt storingen op en leest willekeurig 0 of 1. Een pull-upweerstand (bijvoorbeeld 10 kΩ naar Vcc) trekt de ingang standaard naar HIGH; de knop schakelt naar massa en maakt de ingang LOW als je drukt. Een pull-down doet het omgekeerde. De weerstand moet groot genoeg zijn om weinig stroom te kosten (5 V / 10 kΩ = 0,5 mA als de knop is ingedrukt) en klein genoeg om storingen te overstemmen. Veel microcontrollers hebben interne pull-ups, op de Arduino ongeveer 20 à 50 kΩ.",
    praktijk: "Met pinMode(2, INPUT_PULLUP) en een knop tussen pin 2 en GND heb je geen externe weerstand nodig. Let op de omgekeerde logica: ingedrukt leest LOW.",
    vraag: "Je gebruikt INPUT_PULLUP en een drukknop naar GND. Wat leest digitalRead als de knop níet is ingedrukt?",
    opties: [
      "HIGH",
      "LOW",
      "Willekeurig HIGH of LOW",
      "Een analoge waarde tussen 0 en 1023"
    ],
    goed: 0
  },
  {
    id: 58,
    thema: "Halfgeleiders & schakelingen",
    titel: "Logische poorten",
    uitleg: "Logische poorten voeren Booleaanse bewerkingen uit op digitale signalen (0 = laag, 1 = hoog). Een AND geeft 1 als alle ingangen 1 zijn, een OR als minstens één ingang 1 is, een NOT keert om, en een XOR geeft 1 als de ingangen verschillen. NAND en NOR zijn de omgekeerde AND en OR; ze zijn universeel, want met alleen NAND-poorten kun je elke andere functie bouwen. Intern bestaan moderne poorten (CMOS, zoals de 74HC-serie) uit complementaire MOSFET-paren die in rust vrijwel geen stroom trekken. Een 74HC00 bevat vier NAND-poorten met twee ingangen.",
    praktijk: "Laat ongebruikte ingangen van CMOS-IC's nooit zwevend: verbind ze met Vcc of GND. Een zwevende ingang kan halverwege blijven hangen, waardoor beide transistors in de poort half geleiden en het IC stroom trekt en warm wordt.",
    vraag: "Een XOR-poort krijgt op beide ingangen een 1. Wat is de uitgang?",
    opties: [
      "1",
      "Afhankelijk van de voedingsspanning",
      "0",
      "Zwevend"
    ],
    goed: 2
  },
  {
    id: 59,
    thema: "Halfgeleiders & schakelingen",
    titel: "De 555-timer",
    uitleg: "De NE555 uit 1972 is een van de meest verkochte IC's ooit. Binnenin zitten twee comparatoren, een flipflop en een ontlaadtransistor, met een interne spanningsdeler van drie gelijke weerstanden op 1/3 en 2/3 van de voeding. In astabiele modus laadt een condensator op via R1 en R2 tot 2/3 Vcc, ontlaadt dan via R2 tot 1/3 Vcc, en zo verder: de uitgang knippert. De frequentie is f ≈ 1,44 / ((R1 + 2 × R2) × C). Met R1 = 1 kΩ, R2 = 10 kΩ en C = 10 µF krijg je 1,44 / (21 000 × 0,00001) ≈ 6,9 Hz. In monostabiele modus geeft een triggerpuls één uitgangspuls van t = 1,1 × R × C.",
    praktijk: "Omdat de drempels verhoudingen van de voeding zijn, is de frequentie nagenoeg onafhankelijk van de voedingsspanning. Neem de CMOS-versie (TLC555 of 7555) voor batterijprojecten: die verbruikt veel minder stroom dan de klassieke NE555.",
    formule: "f ≈ 1,44 / ((R1 + 2·R2) × C)   ;   t_mono = 1,1 × R × C",
    vraag: "Hoe lang duurt de uitgangspuls van een monostabiele 555 met R = 100 kΩ en C = 10 µF?",
    opties: [
      "0,11 s",
      "1,1 s",
      "11 s",
      "1,44 s"
    ],
    goed: 1
  },
  {
    id: 60,
    thema: "Halfgeleiders & schakelingen",
    titel: "De opamp: twee gouden regels",
    uitleg: "Een operationele versterker (opamp) versterkt het spanningsverschil tussen zijn niet-inverterende (+) en inverterende (−) ingang met een enorme open-lusversterking, vaak 100 000 keer of meer. Zonder terugkoppeling slaat de uitgang daardoor bij het minste verschil vol tegen een voedingsrail. Met negatieve terugkoppeling (een deel van de uitgang terug naar de −-ingang) regelt de opamp zichzelf. Voor zo'n schakeling gelden twee gouden regels: de uitgang doet alles om de spanning op beide ingangen gelijk te maken, en er loopt (vrijwel) geen stroom in de ingangen. Met deze twee regels kun je bijna elke opampschakeling uitrekenen. Let op: de uitgang komt zelden helemaal tot de voedingsrails, tenzij het een rail-to-railtype is.",
    praktijk: "De klassieke LM358 werkt op een enkele voeding van 5 V maar zijn uitgang komt niet hoger dan ongeveer Vcc − 1,5 V. Voor 3,3 V- of 5 V-systemen met volle uitgangszwaai kies je een rail-to-railopamp zoals de MCP6002.",
    vraag: "Een opamp met negatieve terugkoppeling heeft 2,0 V op de +-ingang. Welke spanning zal op de −-ingang staan?",
    opties: [
      "0 V",
      "Afhankelijk van de voeding, meestal de helft",
      "−2,0 V",
      "Ongeveer 2,0 V"
    ],
    goed: 3
  },
  {
    id: 61,
    thema: "Halfgeleiders & schakelingen",
    titel: "De niet-inverterende versterker",
    uitleg: "In de niet-inverterende versterker gaat het signaal naar de +-ingang, en een spanningsdeler van R_f (van uitgang naar −) en R_g (van − naar massa) koppelt een deel van de uitgang terug. Volgens de gouden regel maakt de opamp de −-ingang gelijk aan het ingangssignaal. De uitgang moet dus zo groot zijn dat de deler precies U_in oplevert, wat geeft: versterking = 1 + R_f / R_g. Met R_f = 9 kΩ en R_g = 1 kΩ is de versterking 10: 0,2 V in wordt 2 V uit, zonder omkering. Laat je R_g weg en maak je R_f nul, dan krijg je een spanningsvolger (versterking 1), handig als buffer met hoge ingangs- en lage uitgangsimpedantie. De inverterende versterker geeft daarentegen −R_f / R_in.",
    praktijk: "Wil je een zwakke sensor, bijvoorbeeld een spanningsdeler met hoge weerstanden, uitlezen zonder hem te belasten, zet er dan een spanningsvolger achter.",
    formule: "A = 1 + R_f / R_g",
    vraag: "Je wilt met een niet-inverterende versterker een signaal 5 keer versterken. R_g = 10 kΩ. Hoe groot moet R_f zijn?",
    opties: [
      "40 kΩ",
      "50 kΩ",
      "2 kΩ",
      "60 kΩ"
    ],
    goed: 0
  },
  {
    id: 62,
    thema: "Halfgeleiders & schakelingen",
    titel: "De comparator en hysterese",
    uitleg: "Een comparator vergelijkt twee spanningen en geeft een digitaal antwoord: uitgang hoog als + groter is dan −, anders laag. Je kunt daarvoor een opamp zonder terugkoppeling gebruiken, maar echte comparators (zoals LM393) zijn sneller en hebben vaak een open-collectoruitgang die een pull-upweerstand nodig heeft. Een probleem ontstaat als het ingangssignaal langzaam en met ruis rond de drempel beweegt: de uitgang klappert dan snel heen en weer. De oplossing is hysterese via positieve terugkoppeling (een weerstand van de uitgang naar de +-ingang): de drempel om aan te gaan ligt dan iets hoger dan de drempel om uit te gaan. Zo'n schakeling heet een Schmitt-trigger.",
    praktijk: "Een thermostaat die bij 20,0 °C aan en bij 20,0 °C uit gaat, schakelt de ketel continu. Met hysterese gaat hij bijvoorbeeld aan bij 19,5 °C en uit bij 20,5 °C; datzelfde principe gebruik je ook in software.",
    vraag: "Waarom heeft de uitgang van een LM393 een pull-upweerstand nodig?",
    opties: [
      "Omdat de ingangen anders zweven",
      "Omdat het een open-collectoruitgang is die alleen naar massa kan trekken",
      "Om de hysterese in te stellen",
      "Omdat de comparator anders oscilleert op 50 Hz"
    ],
    goed: 1
  },
  {
    id: 63,
    thema: "Halfgeleiders & schakelingen",
    titel: "Lineaire regelaars: 7805 en LDO",
    uitleg: "Een lineaire spanningsregelaar zoals de 7805 maakt van een hogere, wisselende ingangsspanning een stabiele 5 V. Intern werkt een transistor als regelbare weerstand die precies zoveel spanning wegneemt als nodig. Al dat verschil wordt warmte: P = (U_in − U_uit) × I. Van 12 V naar 5 V bij 0,5 A betekent 3,5 W, wat een koellichaam vereist. De 7805 heeft bovendien een dropout van ongeveer 2 V: de ingang moet minstens 7 V zijn. Een LDO (low dropout) regelaar werkt al met een veel kleiner verschil, bijvoorbeeld 0,2 V bij de MCP1700, zodat je van een Li-ion-cel (3,7 V) stabiel 3,3 V kunt maken. Beide typen hebben condensators aan in- en uitgang nodig (vaak 100 nF à 10 µF; sommige LDO's eisen een bepaalde ESR).",
    praktijk: "Een lineaire regelaar is ideaal voor weinig stroom en een klein spanningsverschil: stil, rimpelvrij en goedkoop. Bij een groot verschil of veel stroom kies je een schakelende buckconverter.",
    formule: "P_warmte = (U_in − U_uit) × I",
    vraag: "Een 7805 levert 300 mA uit een 9 V-ingang. Hoeveel warmte moet hij kwijt?",
    opties: [
      "1,5 W",
      "2,7 W",
      "0,3 W",
      "1,2 W"
    ],
    goed: 3
  },
  {
    id: 64,
    thema: "Halfgeleiders & schakelingen",
    titel: "PWM: vermogen regelen door snel te schakelen",
    uitleg: "Pulsbreedtemodulatie (PWM) regelt het gemiddelde vermogen door een spanning heel snel aan en uit te zetten. De duty cycle is het percentage van de tijd dat het signaal hoog is. Een 12 V-signaal met 25 procent duty cycle geeft gemiddeld 3 V. Omdat de schakelaar óf volledig aan óf volledig uit is, gaat er in de transistor weinig vermogen verloren, in tegenstelling tot regelen met een weerstand. Een motor of ledlamp middelt het signaal uit (de motor door zijn traagheid, het oog doordat het boven ongeveer 100 Hz geen knipperen ziet). De Arduino-functie analogWrite(pin, 0–255) maakt PWM op ongeveer 490 Hz (pinnen 5 en 6: ongeveer 980 Hz); analogWrite(pin, 64) is dus ongeveer 25 procent.",
    praktijk: "Wil je een motor zonder hoorbaar fluiten regelen, kies dan een PWM-frequentie boven 20 kHz. Wil je een echte analoge spanning, zet dan een RC-laagdoorlaatfilter achter de PWM-pin.",
    formule: "U_gemiddeld = duty cycle × U_hoog",
    vraag: "Waarom wordt een MOSFET die een motor met PWM regelt veel minder warm dan een transistor die de motor lineair op halve snelheid regelt?",
    opties: [
      "Omdat PWM-signalen geen stroom voeren",
      "Omdat de MOSFET bij PWM steeds óf volledig aan óf volledig uit is, en in beide toestanden weinig vermogen dissipeert",
      "Omdat de motor bij PWM minder koppel levert",
      "Omdat PWM alleen werkt met wisselspanning"
    ],
    goed: 1
  },
  {
    id: 65,
    thema: "Halfgeleiders & schakelingen",
    titel: "De buckconverter",
    uitleg: "Een buckconverter (step-down) verlaagt een gelijkspanning met een rendement van 85 à 95 procent. Een schakelaar (MOSFET) zet de ingang met een hoge frequentie (honderden kHz) op een spoel; als de schakelaar opengaat, houdt de spoel de stroom vast en loopt die verder via een diode of een tweede MOSFET. De spoel en een uitgangscondensator middelen de pulsen tot een gladde spanning. Ideaal geldt U_uit = D × U_in, met D de duty cycle: 12 V naar 5 V vraagt ongeveer 42 procent. Omdat vermogen behouden blijft (op verlies na), is de ingangsstroom kléiner dan de uitgangsstroom: 5 V bij 2 A uit 12 V met 90 procent rendement kost maar ongeveer 0,93 A. Een 7805 zou hier 14 W slurpen en 10 W verstoken.",
    praktijk: "Kleine kant-en-klare modules zoals de MP1584 of LM2596 zijn ideaal om van een 12 V-accu 5 V te maken. Stel de uitgangsspanning eerst in met een multimeter, voordat je je dure schakeling aansluit.",
    formule: "U_uit ≈ D × U_in   ;   I_in ≈ U_uit × I_uit / (U_in × η)",
    vraag: "Een buckconverter maakt van 24 V netjes 3,3 V bij 1 A. Wat geldt voor de ingangsstroom?",
    opties: [
      "Ook 1 A, want stroom blijft gelijk in serie",
      "Meer dan 1 A, omdat de spanning wordt verlaagd",
      "Veel minder dan 1 A, ongeveer 0,15 A",
      "Precies 0 A in rust, want een buck slaat energie op"
    ],
    goed: 2
  },
  {
    id: 66,
    thema: "Halfgeleiders & schakelingen",
    titel: "De boostconverter",
    uitleg: "Een boostconverter (step-up) maakt van een lage gelijkspanning een hogere. De MOSFET staat hier aan de massakant van de spoel: als hij aan is, loopt er stroom door de spoel naar massa en bouwt de spoel energie op. Gaat de MOSFET uit, dan wil de spoel de stroom vasthouden; zijn spanning telt op bij de ingangsspanning en duwt via een diode lading in de uitgangscondensator. Ideaal geldt U_uit = U_in / (1 − D): met D = 0,5 verdubbelt de spanning. Omdat vermogen niet uit het niets komt, is de ingangsstroom groter dan de uitgangsstroom: 5 V bij 1 A uit een 3,7 V-cel met 90 procent rendement kost ongeveer 1,5 A.",
    praktijk: "Elke powerbank bevat een boostconverter van 3,7 naar 5 V. Let op: een simpele boost heeft geen uitschakelfunctie; ook als hij niet schakelt, loopt de ingangsspanning via spoel en diode door naar de uitgang.",
    formule: "U_uit ≈ U_in / (1 − D)",
    vraag: "Een boostconverter maakt van 3 V 12 V. Hoe groot is de duty cycle ongeveer (ideaal, zonder verlies)?",
    opties: [
      "75 procent",
      "25 procent",
      "400 procent",
      "50 procent"
    ],
    goed: 0
  },
  {
    id: 67,
    thema: "Halfgeleiders & schakelingen",
    titel: "De H-brug",
    uitleg: "Om een gelijkstroommotor in twee richtingen te laten draaien, moet je de stroom erdoor omkeren. Een H-brug doet dat met vier schakelaars, getekend als de letter H met de motor als dwarsbalk. Sluit je linksboven en rechtsonder, dan loopt de stroom de ene kant op; sluit je rechtsboven en linksonder, dan de andere kant. Sluit je beide onderste, dan worden de motorpolen kortgesloten en remt de motor actief. De gevaarlijkste fout is beide schakelaars aan dezelfde kant tegelijk sluiten: dan sluit je de voeding direct kort (shoot-through). Driver-IC's lassen daarom een korte 'dode tijd' in bij het omschakelen.",
    praktijk: "De klassieke L298N gebruikt bipolaire transistors en verliest ongeveer 2 à 3 V; een moderne MOSFET-driver zoals de TB6612FNG of DRV8833 verliest veel minder en blijft koeler. Combineer met PWM op de enable-ingang voor snelheidsregeling.",
    vraag: "Wat gebeurt er als in een H-brug de twee schakelaars aan dezelfde kant (boven en onder) tegelijk aan gaan?",
    opties: [
      "De motor draait op dubbele snelheid",
      "De motor remt zacht af",
      "De motor keert van richting",
      "De voeding wordt kortgesloten (shoot-through)"
    ],
    goed: 3
  },
  {
    id: 68,
    thema: "Halfgeleiders & schakelingen",
    titel: "De optocoupler",
    uitleg: "Een optocoupler bevat een LED en een lichtgevoelig element (meestal een fototransistor) in één lichtdichte behuizing. Stroom door de LED laat de fototransistor geleiden, terwijl er geen enkele elektrische verbinding is tussen beide kanten: galvanische scheiding, met een isolatiespanning van vaak 5000 V. Zo kun je veilig een signaal doorgeven tussen circuits met een verschillende massa of tussen een netspanningsdeel en een microcontroller. De verhouding tussen uitgangs- en ingangsstroom heet de CTR (current transfer ratio); bij de populaire PC817 ligt die tussen 50 en 600 procent en daalt hij als de LED veroudert. Optocouplers zijn vrij traag (microseconden), dus voor snelle signalen bestaan er speciale digitale isolators.",
    praktijk: "In bijna elke schakelende telefoonlader zit een optocoupler die de terugkoppeling van de uitgangsspanning naar de netspanningskant overbrengt. Ontwerp met de laagste CTR uit de datasheet en wat marge.",
    vraag: "Wat is het belangrijkste voordeel van een optocoupler?",
    opties: [
      "Een galvanisch gescheiden signaaloverdracht tussen twee circuits",
      "Een hogere stroomversterking dan een darlington",
      "Een hogere schakelsnelheid dan een gewone transistor",
      "Het omzetten van wisselspanning naar gelijkspanning"
    ],
    goed: 0
  },
  {
    id: 69,
    thema: "Halfgeleiders & schakelingen",
    titel: "Arduino-basis: wat een pin aankan",
    uitleg: "Een Arduino Uno draait op een ATmega328P-microcontroller op 5 V en 16 MHz. Een digitale pin kan zowel stroom leveren (source) als opnemen (sink); de absolute maximumwaarde is 40 mA per pin, maar 20 mA is een veilige grens, en de chip als geheel kan zo'n 200 mA aan via zijn voedingspennen. Een LED met weerstand gaat dus prima, maar een motor, relais of ledstrip nooit rechtstreeks: daar heb je een transistor of MOSFET voor. De analoge ingangen gebruiken een 10-bits ADC: 0 tot 5 V wordt 0 tot 1023, dus elke stap is ongeveer 4,9 mV. Een ESP32 werkt op 3,3 V; zijn pinnen verdragen geen 5 V en de ADC is bovendien niet erg lineair.",
    praktijk: "Voed servo's of motoren nooit via de 5 V-pin van de Arduino maar met een aparte voeding, en verbind de massa's van beide voedingen met elkaar, anders hebben de stuursignalen geen gemeenschappelijke referentie.",
    vraag: "analogRead op een Arduino Uno geeft de waarde 512. Welke spanning staat er ongeveer op de pin?",
    opties: [
      "512 mV",
      "3,3 V",
      "2,5 V",
      "1,0 V"
    ],
    goed: 2
  },
  {
    id: 70,
    thema: "Halfgeleiders & schakelingen",
    titel: "ESD: onzichtbare schade door statische elektriciteit",
    uitleg: "Je lichaam kan door lopen over vloerbedekking of door kleding gemakkelijk tot duizenden volts statisch opladen; je voelt een vonk pas vanaf ongeveer 3000 V. De energie is klein, maar voor halfgeleiders genoeg: het gateoxide van een MOSFET is maar nanometers dik en kan al bij enkele tientallen volts doorslaan. ESD-schade (electrostatic discharge) is verraderlijk, omdat een onderdeel vaak niet meteen kapotgaat maar verzwakt (latente schade) en later ineens uitvalt. Veel IC's hebben interne beschermdiodes, maar die vangen alleen beperkte ontladingen op. Gevoelige onderdelen worden daarom verpakt in geleidend of afschermend (zilverkleurig of roze) plastic.",
    praktijk: "Raak een geaard metalen object aan voordat je een print pakt, houd boards aan de randen vast en werk bij voorkeur met een ESD-polsband die via een weerstand van 1 MΩ met de aarde verbonden is. Die weerstand beperkt de stroom als je per ongeluk spanning aanraakt.",
    vraag: "Waarom zit er in een ESD-polsband een weerstand van ongeveer 1 MΩ in plaats van een directe verbinding met de aarde?",
    opties: [
      "Om de statische lading sneller af te voeren",
      "Omdat een directe verbinding de elektronica zou beschadigen",
      "Om het meetbereik van de multimeter te vergroten",
      "Om lading wel langzaam af te voeren, maar de stroom door je lichaam te begrenzen als je een spanningvoerend deel aanraakt"
    ],
    goed: 3
  }
]
