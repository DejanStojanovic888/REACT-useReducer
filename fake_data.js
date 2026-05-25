const initialRecipes = [
    {
        id: "1",
        title: "Špagete Karbonara",
        description: "Klasično italijansko jelo od testenine sa slaninom, jajima i parmezanom, bez pavlake za kuvanje.",
        ingredients: [
            "350g špageta",
            "150g guančale-a ili pančete",
            "4 krupna žumanca",
            "75g rendanog Pekorino Romana ili Parmezana",
            "Sveže mleveni crni biber",
            "So"
        ],
        steps: [
            "Skuvajte špagete u slanoj vodi da budu al dente.",
            "Dok se pasta kuva, propržite iseckanu pančetu u tiganju na srednjoj vatri dok ne postane hrskava. Sklonite tiganj sa vatre.",
            "U činiji umutite žumanca sa narendanim sirom i dosta crnog bibera.",
            "Ocedite špagete (sačuvajte šolju vode od kuvanja) i ubacite ih u tiganj sa pančetom van ringle.",
            "Ulijte smesu sa jajima i sirom i brzo mešajte. Dodajte malo tople vode od kuvanja po potrebi da dobijete kremast sos od same toplote paste."
        ],
        prepTime: "20 min",
        servings: "4",
        likes: 124,
        dislikes: 3,
        comments: [
            { id: "c1", user: "Marko", text: "Konačno recept bez pavlake! Savršena tekstura sosa." },
            { id: "c2", user: "Jelena", text: "Pravila večeras, cela porodica je oduševljena." }
        ]
    },
    {
        id: "2",
        title: "Domaći Burgeri",
        description: "Sočne i preukusne pljeskavice od čiste junetine, savršene za roštilj ili tiganj.",
        ingredients: [
            "800g mlevenog junećeg mesa (od vrata, 20% masti)",
            "4 zemičke za burgere",
            "4 lista čedar sira",
            "1 glavica crvenog luka",
            "Zelena salata i paradajz",
            "So i biber"
        ],
        steps: [
            "Meso nežno podelite na 4 dela i formirajte pljeskavice malo šire od zemički. Nemojte previše mesiti meso.",
            "Napravite blago udubljenje palcem u centru svakog burgera (da se ne skupe tokom pečenja).",
            "Dobro posolite i pobiberite spolja neposredno pre pečenja.",
            "Pecite na jakoj vatri 3-4 minuta po strani. U poslednjem minutu stavite sir preko mesa da se otopi.",
            "Tostirajte zemičke i složite burger sa salatom, paradajzom i crvenim lukom."
        ],
        prepTime: "15 min",
        servings: "4",
        likes: 89,
        dislikes: 5,
        comments: [
            { id: "c3", user: "Nikola", text: "Trik sa udubljenjem u centru zapravo radi, ispali su ravni!" }
        ]
    },
    {
        id: "3",
        title: "Krem Čorba od Bundeve",
        description: "Topla, svilenkasta i hranljiva čorba idealna za jesenje i zimske dane.",
        ingredients: [
            "1 kg očišćene bundeve",
            "1 glavica crnog luka",
            "2 čena belog luka",
            "1 l supe (povrtne ili pileće)",
            "100ml pavlake za kuvanje",
            "Maslinovo ulje, so, biber, muskatni oraščić"
        ],
        steps: [
            "Isecite bundevu na kockice, a crni i beli luk sitno iseckajte.",
            "Na maslinovom ulju propržite crni i beli luk, pa dodajte kockice bundeve.",
            "Prelijte supom tako da tečnost pokrije bundevu i kuvajte na srednjoj vatri oko 20-25 minuta dok bundeva potpuno ne omekša.",
            "Sklonite sa vatre i izblendajte štapnim mikserom dok ne dobijete glatku teksturu.",
            "Vratite na laganu vatru, umešajte pavlaku za kuvanje, so, biber i prstohvat muskatnog oraščića."
        ],
        prepTime: "35 min",
        servings: "6",
        likes: 56,
        dislikes: 2,
        comments: [
            { id: "c4", user: "Milica", text: "Muskatni oraščić daje neverovatnu aromu." }
        ]
    },
    {
        id: "4",
        title: "Piletina u Sosu od Alfrede",
        description: "Bogata i kremasta piletina sa testeninom u gustom sosu od sira i belog luka.",
        ingredients: [
            "500g pilećeg filea",
            "300g fetučina ili druge testenine",
            "50g putera",
            "2 čena belog luka",
            "250ml pavlake za kuvanje",
            "100g narendanog parmezana",
            "Maslinovo ulje, so, biber, peršun"
        ],
        steps: [
            "Piletinu isecite na šnicle, začinite solju i biberom, pa ispecite na maslinovom ulju dok ne porumeni. Sklonite je i isecite na trakice.",
            "U istom tiganju otopite puter, dodajte sitno seckani beli luk i pržite oko 1 minut.",
            "Sipajte pavlaku za kuvanje i pustite da lagano zakuva na slaboj vatri.",
            "Dodajte parmezan i mešajte dok se potpuno ne otopi i sos ne zgusne.",
            "Umešajte kuvanu testeninu, piletinu i pospite svežim peršunom."
        ],
        prepTime: "25 min",
        servings: "3",
        likes: 112,
        dislikes: 8,
        comments: [
            { id: "c5", user: "Stefan", text: "Brzo i preukusno, savršen ručak za radni dan." }
        ]
    },
    {
        id: "5",
        title: "Grčka Salata",
        description: "Osvežavajuća tradicionalna salata sa mediteranskim ukusima, bez zelene salate.",
        ingredients: [
            "3 paradajza",
            "1 krastavac",
            "1 crveni luk",
            "1 zelena paprika",
            "200g feta sira (u komadu)",
            "Šaka kalamata maslina",
            "Maslinovo ulje, sušeni origano, so"
        ],
        steps: [
            "Paradajz isecite na krupnije komade, a krastavac na kolutove.",
            "Papriku isecite na trake, a crveni luk na tanke polumesece.",
            "Svo povrće ubacite u veliku činiju i lagano promešajte sa maslinovim uljem i malo soli.",
            "Na vrh salate stavite ceo blok feta sira.",
            "Dodajte masline, prelijte sir sa još malo maslinovog ulja i sve obilno pospite origanom."
        ],
        prepTime: "10 min",
        servings: "2",
        likes: 74,
        dislikes: 1,
        comments: [
            { id: "c6", user: "Ana", text: "Drago mi je da neko ne stavlja zelenu salatu u pravu grčku!" }
        ]
    },
    {
        id: "6",
        title: "Čokoladni Lava Kolač",
        description: "Dezert sa tečnim, čokoladnim srcem koji uspeva svaki put.",
        ingredients: [
            "100g kvalitetne crne čokolade",
            "100g putera",
            "2 jaja",
            "2 žumanca",
            "50g šećera",
            "30g brašna",
            "Prstohvat soli"
        ],
        steps: [
            "Otopite čokoladu i puter na pari, pa ostavite da se malo prohladi.",
            "U posebnoj posudi umutite jaja, žumanca i šećer dok smesa ne postane svetla i penasta.",
            "Lagano umešajte otopljenu čokoladu u smesu sa jajima.",
            "Na kraju prosejte brašno i so preko smese i lagano špatulom sjedinite.",
            "Sipajte u podmazane kalupe i pecite tačno 10-12 minuta na 200°C. Ivice moraju biti čvrste, a sredina mekana."
        ],
        prepTime: "20 min",
        servings: "4",
        likes: 210,
        dislikes: 4,
        comments: [
            { id: "c7", user: "Darko", text: "Pekao sam tačno 11 minuta, ispao je savršeno tečan unutra." },
            { id: "c8", user: "Maja", text: "Moj omiljeni brzi dezert za goste." }
        ]
    },
    {
        id: "7",
        title: "Kaprese Sendvič",
        description: "Brz, svež i jednostavan sendvič inspirisan čuvenom italijanskom salatom.",
        ingredients: [
            "1 baget ili čiabata hleb",
            "150g sveže mocarele",
            "1 krupan paradajz",
            "Sveži listovi bosiljka",
            "2 kašike pesto sosa",
            "Balzamiko glazure, maslinovo ulje"
        ],
        steps: [
            "Presecite hleb uzdužno i donju polovinu premažite pesto sosom.",
            "Narežite mocarelu i paradajz na kolutove.",
            "Preko pesta naizmenično ređajte kolutove paradajza i mocarele.",
            "Preko stavite listove svežeg bosiljka.",
            "Poprskajte sa par kapi maslinovog ulja i balzamiko glazure, pa preklopite gornjim delom hleba."
        ],
        prepTime: "5 min",
        servings: "1",
        likes: 45,
        dislikes: 0,
        comments: []
    },
    {
        id: "8",
        title: "Rižoto sa Pečurkama",
        description: "Kremasti italijanski rižoto sa miksom šumskih pečuraka i šampinjona.",
        ingredients: [
            "300g Arborio pirinča",
            "400g mešanih pečuraka (šampinjoni, vrganji, bukovače)",
            "1 glavica crnog luka",
            "100ml belog vina",
            "1 l vrućeg povrtnog bujona",
            "50g putera",
            "50g parmezana",
            "Maslinovo ulje, so, biber"
        ],
        steps: [
            "Na maslinovom ulju i malo putera dinstajte sitno seckani luk, pa dodajte narezane pečurke dok ne ispuste vodu i porumene.",
            "Dodajte pirinač i kratko ga pržite (oko 2 minuta) dok ne postane staklast.",
            "Sipajte belo vino i mešajte dok potpuno ne ispari.",
            "Postepeno dodajte vreo bujon, kutlaču po kutlaču, stalno mešajući. Sledeću kutlaču dodajte tek kad pirinač upije prethodnu (oko 18-20 minuta).",
            "Sklonite sa vatre, umešajte preostali puter i parmezan, poklopite i ostavite 2 minuta pre služenja."
        ],
        prepTime: "30 min",
        servings: "3",
        likes: 93,
        dislikes: 3,
        comments: [
            { id: "c9", user: "Ivan", text: "Ključ je stvarno u stalnom mešanju i dodavanju bujona pomalo." }
        ]
    },
    {
        id: "9",
        title: "Zobena Kaša sa Bobičastim Voćem",
        description: "Zdrav, brz i izbalansiran doručak pun vlakana.",
        ingredients: [
            "50g zobenih pahuljica",
            "200ml bademovog ili običnog mleka",
            "1 kašika meda ili javorovog sirupa",
            "Šaka svežih borovnica i malina",
            "1 kašičica čija semenki",
            "Prstohvat cimeta"
        ],
        steps: [
            "U šerpicu sipajte zobene pahuljice i mleko, pa kuvajte na srednjoj vatri uz mešanje.",
            "Kada proključa, smanjite vatru i kuvajte još 3-5 minuta dok se kaša ne zgusne.",
            "Sklonite sa vatre, umešajte med, čija semenke i cimet.",
            "Sipajte u činiju i preko poređajte sveže bobičasto voće.",
            "Po želji dodajte malo seckanih badema ili lešnika na vrh."
        ],
        prepTime: "8 min",
        servings: "1",
        likes: 62,
        dislikes: 6,
        comments: [
            { id: "c10", user: "Sanja", text: "Super doručak, često dodam i mericu proteina." }
        ]
    },
    {
        id: "10",
        title: "Domaći Gvakamole sos",
        description: "Svež i kremast meksički umak od avokada, savršen uz načo čips.",
        ingredients: [
            "3 zrela avokada",
            "Sok od 1 limete",
            "1 manji crveni luk",
            "1 šaka svežeg korijandera",
            "1 paradajz (očišćen od semenki)",
            "So, biber, po želji malo čili papričice"
        ],
        steps: [
            "Presecite avokado, izvadite koske i kašikom izvadite meso u činiju.",
            "Viljuškom izgnječite avokado (ostavite malo teksture, nemojte napraviti potpuni pire).",
            "Odmah prelijte sokom od limete da avokado ne promeni boju.",
            "Dodajte sitno iseckan crveni luk, paradajz narezan na sitne kockice i iseckan korijander.",
            "Začinite solju, biberom i čilijem po ukusu, pa sve lagano promešajte."
        ],
        prepTime: "10 min",
        servings: "4",
        likes: 105,
        dislikes: 2,
        comments: [
            { id: "c11", user: "Katarina", text: "Savršen prilog za filmsko veče!" }
        ]
    }
];


export default initialRecipes;