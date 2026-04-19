const pitanja = [
    { p: "Koliko slobodnog prostora imaš u sobi za terarij?", o: [{t: "Jako malo (manji kut)", b: "leopard_krestasti"}, {t: "Srednje (mjesto za komodu)", b: "agama_uromastiks"}, {t: "Cijeli jedan slobodan zid", b: "tegu_iguana"}] },
    { p: "Voliš li hraniti ljubimca živim kukcima (cvrčci, žohari)?", o: [{t: "Da, to mi je zanimljivo", b: "kameleon_leopard"}, {t: "Svejedno mi je", b: "agama"}, {t: "Radije ne bih živu hranu", b: "uromastiks_iguana"}] },
    { p: "Tražiš li guštera koji je miran i voli se 'maziti'?", o: [{t: "Da, želim ljubimca za kauč", b: "tegu_agama"}, {t: "Više sam za promatranje", b: "kameleon"}, {t: "Neka sredina", b: "leopard_krestasti"}] },
    { p: "Jesi li spreman na visoke račune za struju (puno lampi)?", o: [{t: "Ne baš, želim štedljivije", b: "krestasti"}, {t: "U granicama normale", b: "agama_leopard"}, {t: "Nije problem za pravu mrcinu", b: "tegu_uromastiks"}] },
    { p: "Kakvu klimu preferiraš u terariju?", o: [{t: "Tropsku vlagu i prskanje", b: "kameleon_iguana"}, {t: "Suha pustinja i pijesak", b: "agama_uromastiks"}, {t: "Umjerena sobna klima", b: "leopard_krestasti"}] },
    { p: "Koliko vremena dnevno imaš za druženje s njim?", o: [{t: "Jako puno, želim interakciju", b: "tegu_agama"}, {t: "Sat vremena je dovoljno", b: "kameleon_leopard"}, {t: "Samo vikendom i navečer", b: "uromastiks"}] },
    { p: "Što misliš o pripremi svježih salata svaki dan?", o: [{t: "Radije bih samo bube", b: "leopard_kameleon"}, {t: "Mogu kombinirati", b: "agama"}, {t: "Želim isključivo biljojeda", b: "iguana_uromastiks"}] },
    { p: "Želiš li guštera koji je budan danju ili noću?", o: [{t: "Danju (Dnevni)", b: "agama_kameleon_uromastiks"}, {t: "Noću (Noćni)", b: "leopard_krestasti"}, {t: "Svejedno mi je", b: "tegu"}] },
    { p: "Koliko ti je bitan vizualni izgled i boje?", o: [{t: "Želim najšarenijeg mogućeg", b: "kameleon"}, {t: "Volim prirodne 'zmaj' tonove", b: "agama_tegu"}, {t: "Volim neobične repove i kožu", b: "uromastiks_leopard"}] },
    { p: "Jesi li početnik ili si već imao gmazove?", o: [{t: "Apsolutni početnik", b: "agama_leopard_krestasti"}, {t: "Imao sam kornjaču/zmiju", b: "uromastiks"}, {t: "Želim odmah nešto zahtjevno", b: "kameleon_tegu"}] },
    { p: "Voliš li kad životinja brzo raste i postane velika?", o: [{t: "Da, želim pravog zmaja", b: "tegu_iguana"}, {t: "Ne, neka ostane mali i sladak", b: "leopard_krestasti"}, {t: "Srednja veličina je ok", b: "agama_uromastiks"}] },
    { p: "Što ti je najvažnije kod ljubimca?", o: [{t: "Da je fascinantan za gledat", b: "kameleon"}, {t: "Da je inteligentan", b: "tegu"}, {t: "Da je 'lak' za održavanje", b: "leopard_krestasti"}] },
    { p: "Možeš li podnijeti cvrčanje cvrčaka u sobi?", o: [{t: "Može, ne smeta mi", b: "agama_leopard_kameleon"}, {t: "Radije bih gotovu hranu/kašice", b: "krestasti_uromastiks_iguana"}] },
    { p: "Koliki ti je budžet za sam terarij?", o: [{t: "Što manje to bolje", b: "leopard_krestasti"}, {t: "Srednji budžet", b: "agama"}, {t: "Nije bitno, gradim cijelu sobu", b: "tegu_iguana"}] },
    { p: "Zadnje: Želiš li guštera koji se penje ili onog na tlu?", o: [{t: "Želim da se penje po granama", b: "kameleon_iguana_krestasti"}, {t: "Želim da je na tlu/pijesku", b: "agama_leopard_uromastiks_tegu"}] }
];

let trenutnoPitanje = 0;
let bodovi = { agama: 0, kameleon: 0, tegu: 0, leopard: 0, krestasti: 0, uromastiks: 0, iguana: 0 };

function otvoriKviz() {
    document.getElementById("quizModal").style.display = "block";
    trenutnoPitanje = 0;
    bodovi = { agama: 0, kameleon: 0, tegu: 0, leopard: 0, krestasti: 0, uromastiks: 0, iguana: 0 };
    prikaziPitanje();
}

function zatvoriKviz() {
    document.getElementById("quizModal").style.display = "none";
}

function prikaziPitanje() {
    const container = document.getElementById("quiz-container");
    if (trenutnoPitanje < pitanja.length) {
        const p = pitanja[trenutnoPitanje];
        document.getElementById("pitanje-naslov").innerText = `Pitanje ${trenutnoPitanje + 1} od ${pitanja.length}`;
        document.getElementById("pitanje-tekst").innerText = p.p;
        
        const odgovoriDiv = document.getElementById("odgovori-container");
        odgovoriDiv.innerHTML = "";
        
        p.o.forEach(odgovor => {
            const btn = document.createElement("button");
            btn.innerText = odgovor.t;
            btn.className = "quiz-answer-btn";
            btn.onclick = () => sljedeci(odgovor.b);
            odgovoriDiv.appendChild(btn);
        });
        
        document.getElementById("progres").style.width = `${((trenutnoPitanje) / pitanja.length) * 100}%`;
    } else {
        prikaziRezultat();
    }
}

function sljedeci(kategorije) {
    const katArray = kategorije.split("_");
    katArray.forEach(k => {
        if(bodovi.hasOwnProperty(k)) { bodovi[k]++; }
    });
    trenutnoPitanje++;
    prikaziPitanje();
}

function prikaziRezultat() {
    let pobjednik = Object.keys(bodovi).reduce((a, b) => bodovi[a] > bodovi[b] ? a : b);
    let imePobjednika = "";
    let link = "";

    const imena = {
        agama: ["BRADATA AGAMA", "Bradataagama.html"],
        kameleon: ["JEMENSKI KAMELEON", "Kameleon.html"],
        tegu: ["ARGENTINSKI TEGU", "Argetinskitegu.html"],
        leopard: ["LEOPARD GEKON", "Leopardgekon.html"],
        krestasti: ["KRESTASTI GEKON", "Krestastigekon.html"],
        uromastiks: ["UROMASTIKS", "Uromastiks.html"],
        iguana: ["ZELENA IGUANA", "Zelenaiguana.html"]
    };

    imePobjednika = imena[pobjednik][0];
    link = imena[pobjednik][1];

    document.getElementById("quiz-container").innerHTML = `
        <h2 style="letter-spacing: 2px;">TVOJ IDEALAN COMPANION JE:</h2>
        <h1 style="color: #00ff88; font-size: 40px; margin: 20px 0; text-shadow: 0 0 20px rgba(0,255,136,0.5);">${imePobjednika}</h1>
        <p style="margin-bottom: 30px; color: #ccc;">Na temelju tvojih odgovora, ova vrsta guštera najbolje odgovara tvom karakteru i prostoru.</p>
        <button onclick="window.location.href='${link}'" class="cta-button">PROČITAJ SVE O NJEMU</button>
    `;
}