let elfNames;

elfNames = ["Adaia","Alisaie","Allisara","Alengwan","Alglaranna","Alachia","Alysia","Amberle","Anethra","Anwen","Apolline","Arathel","Ariane","Arianni","Ariel","Arwen","Ashalle","Ashniel","Atara","Ayara","Brelyna","Briala","Celebrían","Clothild","Cullich","Cylia","Dalish","Dirael","Eldyra","Elanor","Elenwen","Elezen","Ellia","Elynea","Éowyn","Failla","Faralda","Fleur","Freyalise","Galadriel","Gheyna","Jenassa","Katriel","Kira","Laina","Laniatte","Lauriel","Liallan","Liriel","Liselle","Loriel","Lúthien","Máire","Mayael", "Merril","Miara","Mihris","Minaeve","Nadja","Niranye","Nirya","Raewyn","Selveni","Sera","Shaera","Siofra","Taarie","Tauriel", "Valora","Valya","Vanadis","Vanora","Velanna","Ylthin","Ysayle","Yvraine","Zelda"];
let count;
count = elfNames
document.getElementById("femElf").addEventListener("click", elvenRandom);

function elvenRandom(elfNames){
    var currentIndex = elfNames.length, temporaryValue, randomIndex;

    while( 0 != currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = elfNames[currentIndex];
        elfNames[currentIndex] = elfNames[randomIndex];
        elfNames[randomIndex] = temporaryValue;
    }

}

