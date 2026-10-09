(function () {
  /* Daten. Fotos liegen später unter fotos/<id>.jpg, fehlt eins, wird es einfach nicht gezeigt.
     "origin" (Herkunft laut Packung) wird nach dem Einkauf ergänzt, solange leer, bleibt die Zeile weg. */
  /* Eigene Fotos liegen unter fotos/<id>.jpg (z. B. cahors.jpg). Fehlt eins, wird es nicht gezeigt. */
  var PHOTOS = {};

  var DISHES = [
    {
      id: 'grillwurst', num: '1', title: 'Grillwurst',
      teaser: 'Zum Warmwerden. Der Nachwuchs darf zuerst – Erwachsene warten höflich.',
      facts: [
        ['Was ist das?', 'Ein Sortiment aus hellen und orangefarbenen Würsten, alle mit Schweinefleisch im Schweinedarm. Eine rohe Wurst wie die Roster muss auf dem Grill richtig durcherhitzt werden.'],
        ['Käseknacker', 'Die orangefarbene Wurst mit Kräutern. Sie besteht aus 81 % Schweinefleisch und 15 % Käse, ist gepökelt und geräuchert und hat etwa 205 kcal pro 100 g.'],
        ['Roster', 'Die helle Bratwurst. Sie besteht aus 85 % Schweinefleisch und etwas Speck und ist mit etwa 300 kcal pro 100 g deutlich fettreicher. Laut Packung kann sie Spuren von Ei, Milch und Senf enthalten.'],
        ['Auf dem Grill', 'Bei mittlerer Hitze und mit Geduld. Zu viel Hitze sprengt die Haut, bevor die Wurst innen gar ist.']
      ],
      origin: ['Käseknacker: hergestellt von Werz, Hardtstraße 98–100, 69124 Heidelberg. Zulassungsnummer DE BW 03107 EG (Baden-Württemberg)', 'Roster: hergestellt von Munzert GmbH, Rudolf-Strunz-Straße 2, 95111 Rehau. Zulassungsnummer DE BY 40394 EG (Bayern)', 'Verkauf durch SQM Moser GmbH, Weilerbach (ZEMO)']
    },
    {
      id: 'tritip', num: '2', title: 'Tri Tip', cut: 'tritip',
      teaser: 'Der Underdog: würzig und kräftig, schön quer zur Faser tranchiert.',
      facts: [
        ['Woher vom Rind?', 'Von oberhalb der Keule, zwischen Hüfte und Kugel. Jedes Tier hat zwei davon. Das Stück wiegt meist 750 g bis 1 kg.'],
        ['Wie sieht es aus?', 'Dreieckig, daher der Name. Komplett aus Muskelfleisch und stark marmoriert, das innere Fett hält es saftig.'],
        ['Andere Namen', 'Bürgermeisterstück, Pastorenstück, Hüferschwanzel. In den USA ist es als Tri-Tip bekannt, vor allem durch das kalifornische Grillen.'],
        ['Auf dem Grill', 'Mit Öl und Salz einreiben, kurz bei hoher Hitze scharf anbraten, dann ruhen lassen. Zielwert: 54 °C (medium rare) bis 56 °C (medium) Kerntemperatur.'],
        ['Zum Schneiden', 'Immer quer zur Faser in dünne Scheiben. Das macht es butterweich.']
      ],
      origin: ['Geburt, Mast, Schlachtung, Zerlegung: Deutschland', 'Geschlachtet: DE TH 01829 (TH = Thüringen)', 'Zerlegt: DE RP 13020 EG (RP = Rheinland-Pfalz)', 'Identifikationsnummer: 26372-3-01829']
    },
    {
      id: 'flatiron', num: '3', title: 'Flat Iron', cut: 'flatiron',
      teaser: 'Brutal zart, kurz auf der Platte. Schmilzt schneller als gute Vorsätze.',
      facts: [
        ['Woher vom Rind?', 'Aus der oberen Schulter, nahe der Hochrippe. Es ist der Muskel auf dem Schulterblatt (Fachwort: Infraspinatus).'],
        ['Das Besondere', 'Mitten durch den Muskel läuft eine zähe Sehnenplatte. Forscher aus den USA fanden Ende der 1990er heraus, dass man sie herausschneiden kann. Dann bleibt ein zartes, flaches Steak übrig: das Flat Iron.'],
        ['Andere Namen', 'Mittelbug, Butlers’ Steak (Großbritannien), Oyster Blade Steak (Australien).'],
        ['Geschmack', 'Intensiv und leicht nussig, ähnlich wie Rib-Eye, aber deutlich günstiger. Dünn, stark marmoriert und dadurch saftig.'],
        ['Auf dem Grill', 'Nur wenige Minuten bei starker, direkter Hitze. Nicht durchbraten, sonst wird es trocken.']
      ],
      origin: ['Geburt, Mast, Schlachtung, Zerlegung: Deutschland', 'Geschlachtet: DE TH 01829 (TH = Thüringen)', 'Zerlegt: DE RP 13020 EG (RP = Rheinland-Pfalz)']
    },
    {
      id: 'finale', num: '4', title: 'Das Finale: Entrecôte vs. Sweetheart', heart: true,
      teaser: 'Gleiches Fleisch, zwei Schnitte: einmal dick und saftig, einmal flach mit Herz. Ihr stimmt ab!',
      sub: [
        {
          id: 'entrecote', title: 'Entrecôte', cut: 'entrecote',
          facts: [
            ['Woher vom Rind?', 'Aus dem vorderen Rücken, direkt hinter dem Hals, ohne Knochen ausgelöst. Der Name kommt aus dem Französischen: entre côte, also „zwischen den Rippen“.'],
            ['Wie sieht es aus?', 'Meist 300 bis 550 g schwer, bis 6 cm dick, mit dem typischen Fettauge. Feinmarmoriert, saftig und im Geschmack kräftiger als Filet.'],
            ['Gut zu wissen', 'Entrecôte wird oft mit Ribeye gleichgesetzt. Manche Metzger unterscheiden beides, deshalb lohnt sich beim Einkauf die Frage.'],
            ['Auf dem Grill', 'Scharf angrillen, dann bei indirekter Hitze ziehen lassen. Zielwert: etwa 54 °C Kerntemperatur.']
          ],
          origin: ['Geburt, Mast, Schlachtung, Zerlegung: Deutschland', 'Geschlachtet: DE NI 10002 (NI = Niedersachsen)', 'Zerlegt: DE RP 13020 EG (RP = Rheinland-Pfalz)', 'Identifikationsnummer: 26402-3-10002']
        },
        {
          id: 'sweetheart', title: 'Sweetheart', cut: 'entrecote',
          facts: [
            ['Was ist das?', 'Das gleiche Fleisch wie das Entrecôte, nur anders geschnitten: im Schmetterlingsschnitt, flach und mit Herzform.'],
            ['Der Unterschied', 'Flacher heißt: mehr Kruste im Verhältnis zum Fleisch, schneller gar und schön für den Teller. Das dicke Entrecôte bleibt dafür innen saftiger. Genau das testen wir heute.'],
            ['Auf der Packung', 'Als Artikel steht dort „Entrecôte steak“. Das Sweetheart ist also wirklich ein Entrecôte, nur anders geschnitten.'],
            ['Auf dem Grill', 'Weil es dünner ist, braucht es deutlich weniger Zeit als das dicke Stück. Gut im Auge behalten.']
          ],
          origin: ['Geburt, Mast, Schlachtung, Zerlegung: Deutschland', 'Geschlachtet: DE NI 10002 (NI = Niedersachsen)', 'Zerlegt: DE RP 13020 EG (RP = Rheinland-Pfalz)', 'Identifikationsnummer: 26402-3-10002, dieselbe wie beim Entrecôte, also dieselbe Partie']
        }
      ]
    }
  ];

  var DRINK_GROUPS = [
    {
      title: 'Zum Empfang',
      items: [
        {
          id: 'aperol', title: 'Aperol Spritz', teaser: 'Mit Crémant statt Prosecco, Orangenscheibe inklusive',
          facts: [
            ['Was ist drin?', 'Aperol, ein orangeroter Bitterlikör aus Italien, dazu Schaumwein und ein Schuss Soda. Hier wird der Schaumwein ein Crémant.'],
            ['Was ist Crémant?', 'Hier der Crémant d’Alsace von Wolfberger: ein Schaumwein aus dem Elsass, der wie Champagner in der Flasche vergärt. Er ist meist trockener und feiner als Prosecco. Mehr dazu beim eigenen Eintrag unten.']
          ]
        },
        {
          id: 'kir', title: 'Kir Royal', teaser: 'Crémant mit Cassis, für die Feinen am Tisch',
          facts: [
            ['Rezept', 'Etwa 8 cl eiskalter Schaumwein und 2 cl Crème de Cassis, einem Likör aus schwarzen Johannisbeeren. Erst den Schaumwein ins Glas, dann langsam den Cassis.'],
            ['Woher der Name?', 'Vom Pfarrer und Politiker Félix Kir, der von 1945 bis 1968 Bürgermeister von Dijon war. Er servierte Gästen gern Weißwein mit Cassis, um die Produkte seiner Region bekannt zu machen. Crème de Cassis gibt es in der Gegend um Dijon seit 1841.'],
            ['Royal?', 'Der klassische Kir wird mit trockenem Weißwein gemacht. Für „Royal“ nimmt man stattdessen Schaumwein.']
          ]
        },
        {
          id: 'cremant', title: 'Crémant d’Alsace, Wolfberger Brut', teaser: 'Der Schaumwein im Spritz und im Kir Royal',
          facts: [
            ['Woher?', 'Aus dem Elsass, vom Winzerverband Wolfberger in Eguisheim, südlich von Colmar. Die Genossenschaft wurde 1902 gegründet, hat rund 450 Winzer als Mitglieder und bewirtschaftet etwa 1.200 Hektar.'],
            ['Was ist Crémant d’Alsace?', 'Eine eigene Herkunftsbezeichnung (AOC) seit 1976. Er wird wie Champagner gemacht: Die zweite Gärung findet in der Flasche statt, die Trauben werden von Hand gelesen. Erlaubt sind Riesling, Pinot Blanc, Pinot Gris, Pinot Noir, Auxerrois und Chardonnay.'],
            ['Diese Flasche', 'Laut Händlerangabe besteht der Brut aus 90 % Pinot Blanc und 10 % Auxerrois und lag mindestens 12 Monate auf der Hefe.'],
            ['Im Glas', 'Blassgolden mit feiner, anhaltender Perlage. Duftet nach Blüten, Pfirsich und Aprikose, schmeckt frisch und fruchtig. Am besten gut gekühlt, bei etwa 5 bis 7 °C.']
          ]
        }
      ]
    },
    {
      title: 'Zum Fleisch',
      items: [
        {
          id: 'cahors', title: 'Cahors, Clos de Pougette', teaser: 'Kräftiger Rotwein, der Partner fürs Finale',
          facts: [
            ['Woher?', 'Aus der Gegend um die Stadt Cahors im Département Lot, Südwestfrankreich. Die Weinberge liegen vor allem westlich der Stadt auf Kiesterrassen in den Schleifen des Flusses Lot.'],
            ['Welche Rebsorte?', 'Mindestens 70 % Malbec, der dort „Côt“ oder „Auxerrois“ heißt. Dazu dürfen bis zu 30 % Merlot und Tannat kommen.'],
            ['Geschichte', 'Hier wird seit der Römerzeit Wein gemacht, etwa seit 50 v. Chr. Im 13. Jahrhundert verschifften Händler den „schwarzen Wein“ über Bordeaux nach England, später gelangte er bis nach Russland. Die Reblaus zerstörte die Weinberge ab 1883, ein Frost im Februar 1956 machte eine große Neupflanzung nötig. Seit 1971 trägt er die Herkunftsbezeichnung AOC.'],
            ['Diese Box', '„Tradition“ vom Clos de Pougette, Appellation Cahors Contrôlée, 12,5 % vol. Abgefüllt auf dem Weingut (EARL Clos de Pougette, Winzer Pierre Benac) in Saint-Vincent-Rive-d’Olt im Département Lot.'],
            ['Heute Abend', 'Der Cahors kommt aus der 5-Liter-Box und wird vor dem Servieren in eine Karaffe gefüllt, damit er Luft bekommt.'],
            ['Im Glas', 'Tiefdunkel, kräftig und mit festen Tanninen. Das ist ein guter Partner für Fleisch mit Kruste.']
          ]
        },
        {
          id: 'grauburgunder', title: 'Grauburgunder feinherb, Nahe 2023', teaser: 'Zum Start, passt zu Wurst und Nudelsalat',
          facts: [
            ['Woher?', 'Von der Nahe, einem Weinbaugebiet in Rheinland-Pfalz an einem Nebenfluss des Rheins. Die Nahe entspringt übrigens im Saarland.'],
            ['Diese Flasche', 'Auf dem Etikett steht „Michel Wein“, Ludweiler Edition: Grauburgunder, feinherb, Jahrgang 2023, Nahe. Das Motiv zeigt einen Laternenanzünder mit seiner langen Stange.'],
            ['Die Rebsorte', 'Der Grauburgunder stammt vermutlich aus Burgund und ist eine Mutation des Spätburgunders. Die Beeren haben eine graue Haut, daher der Name. Der Name „Ruländer“ geht auf den Kaufmann Johann Seger Ruland zurück, der die Sorte 1709 in Speyer entdeckte.'],
            ['Im Glas', 'Meist säurearm, körperreich und fruchtig, mit Noten von Honigmelone, Birne oder getrockneten Früchten. „Feinherb“ heißt: ein wenig Restzucker, aber nicht süß.'],
            ['Trinktemperatur', 'Etwa 8 bis 14 °C. Dazu passen helles Fleisch, Wurst und Salate.']
          ]
        },
        {
          id: 'heyraud', title: 'Reflets, Domaine Heyraud 2023', teaser: 'Leichter Roter aus der Auvergne, passt zu Sweetheart und Flat Iron',
          facts: [
            ['Woher?', 'Aus dem Département Puy de Dôme in der Auvergne, Mittelfrankreich. Abgefüllt hat ihn das Weingut EARL Heyraud in Cormède (Postleitzahl 63430), die Besitzer Philippe und François sind laut Etikett auch die Winzer.'],
            ['Diese Flasche', 'Die Cuvée heißt „Reflets“, das bedeutet „Spiegelungen“. Auf dem Etikett steht „IGP Puy de Dôme“, Jahrgang 2023, 12,5 % vol. Der Wein ist ein Verschnitt aus Pinot noir und Syrah, laut Etikett aus den schönsten Cuvées des Weinguts. Ein Medaillen-Siegel klebt auch darauf.'],
            ['Im Glas', 'Laut Etikett fruchtig und gefällig durch den Pinot noir, dazu voll und mit Struktur durch den Syrah. Er ist leichter als der Cahors.'],
            ['Trinktemperatur', 'Leicht gekühlt, etwa 14 bis 16 °C.'],
            ['Passt zu', 'Sweetheart und Flat Iron, auch zum Entrecôte. Wenn der Cahors zu kräftig ist, ist das die sanftere Wahl.']
          ]
        },
        {
          id: 'viognier', title: 'Viognier, Domaine Costes Rouges', teaser: 'Fruchtig und voll, der Begleiter zum Flat Iron',
          facts: [
            ['Diese Flasche', 'Vom Weingut Domaine Costes Rouges, mit der Herkunftsangabe „Indication Géographique Protégée Pays d’Oc“ und der Rebsorte Viognier.'],
            ['Die Rebsorte', 'Der Viognier stammt aus dem nördlichen Rhônetal. Er war nach der Reblauskrise fast verschwunden: In den späten 1960ern standen dort nur noch rund 12 Hektar. Winzer wie Georges Vernay brachten ihn zurück, heute wird er auf der ganzen Welt angebaut.'],
            ['Im Glas', 'Sehr aromatisch: Aprikose, Pfirsich, Honig und Geißblatt. Er hat wenig Säure und wirkt dadurch weich und rund.'],
            ['Pays d’Oc', 'Pays d’Oc ist eine Herkunftsangabe für Weine aus dem Süden Frankreichs (Languedoc-Roussillon). Der Viognier wächst dort längst nicht mehr nur an der Rhône.'],
            ['Der berühmteste Verwandte', 'Condrieu im Rhônetal: teuer, weil der Anbau auf steilen Granithängen aufwendig ist und nur wenig wächst.']
          ]
        }
      ],
      note: 'Je nur 1 Flasche: Probieren ja, Leertrinken nein!'
    },
    {
      title: 'Die Bierkarte',
      items: [
        {
          id: 'bierwahl', title: 'Welches Bier zu welchem Fleisch?', teaser: 'Der Überblick zum Mitnehmen ans Glas',
          facts: [
            ['Grillwurst', 'Pils (Karlsberg, Tannenzäpfle) oder ein Weizen. Würzige Wurst verträgt Bitterkeit und Kohlensäure.'],
            ['Tri-Tip', 'Ratz Pale Ale. Das Fleisch hat Rauch und Gewürzkruste, da hält ein hopfiges Bier mit.'],
            ['Flat Iron', 'Ratz Blonde oder Tannenzäpfle. Das nussige, zarte Fleisch braucht ein Bier, das nicht dazwischenfunkt.'],
            ['Entrecôte', 'Guinness. Röstaromen und cremiger Schaum passen zur Kruste und zum Fett am Rand.'],
            ['Sweetheart', 'Ratz Blonde oder ein Weizen. Das Fleisch ist fein und mild, also lieber leichtes Bier.'],
            ['Faustregel', 'Je kräftiger Kruste und Rauch, desto dunkler oder hopfiger das Bier. Je zarter das Fleisch, desto heller und milder. Das sind Vorschläge, kein Gesetz: Probieren ist erlaubt.']
          ]
        },
        {
          id: 'ratz', title: 'Ratz Blonde und Ratz Pale Ale (0,75 l)', teaser: 'Zwei Handwerksbiere aus dem Lot, Südwestfrankreich',
          facts: [
            ['Woher?', 'Von der Brasserie Artisanale Ratz in Fontanes im Département Lot. Christophe Ratz hat die Brauerei dort 2001 wiederbelebt.'],
            ['Wie gebraut?', 'Laut Brauerei aus reinem Malz und aromatischem Hopfen, naturbelassen und nicht pasteurisiert.'],
            ['Blonde', 'Auf dem Etikett stehen 5 % vol. Ein helles, rundes Bier.'],
            ['Pale Ale', 'Auf dem Etikett „R de Ratz“. Ein hopfigeres Bier mit mehr Aroma und etwas kräftiger als das Blonde.'],
            ['Passt zu', 'Blonde: Flat Iron und Sweetheart. Pale Ale: Tri-Tip und Entrecôte.']
          ]
        },
        {
          id: 'guinness', title: 'Guinness (Dose, 0,42 l)', teaser: 'Das schwarze Bier aus Dublin',
          facts: [
            ['Woher?', 'Aus Dublin in Irland. Arthur Guinness gründete die Brauerei 1759 an der St. James’s Gate.'],
            ['Was ist es?', 'Ein Stout: dunkles, obergäriges Bier aus gerösteter Gerste. Es schmeckt nach Kaffee und Kakao und ist trotzdem nicht schwer. Es hat nur etwa 4 % Alkohol.'],
            ['Der Schaum', 'In der Dose sorgt eine Kapsel mit Stickstoff für den cremigen Schaum. Langsam einschenken und kurz setzen lassen.'],
            ['Passt zu', 'Entrecôte und Tri-Tip. Die Röstaromen greifen die Kruste auf.']
          ]
        },
        {
          id: 'urpils', title: 'Karlsberg UrPils (0,33 l)', teaser: 'Das Saarland im Glas',
          facts: [
            ['Woher?', 'Von der Karlsberg Brauerei in Homburg im Saarland, gegründet 1878. Also quasi ein Heimspiel.'],
            ['Was ist es?', 'Ein mildes Pils, süffig und nicht zu bitter.'],
            ['Passt zu', 'Grillwurst, auch zum Nudelsalat und zwischendurch als Durstlöscher.']
          ]
        },
        {
          id: 'rothaus', title: 'Rothaus Tannenzäpfle (0,33 l)', teaser: 'Das Pils aus dem Schwarzwald',
          facts: [
            ['Woher?', 'Von der Badischen Staatsbrauerei Rothaus bei Grafenhausen im Hochschwarzwald. Sie gehört dem Land Baden-Württemberg und liegt auf rund 1.000 Metern Höhe. Die Brauerei ist damit eine der höchstgelegenen Deutschlands.'],
            ['Was ist es?', 'Ein klassisches Pils mit 5,1 % vol. Es ist herb und frisch. Die kleine Flasche heißt „Tannenzäpfle“ nach dem Tannenzapfen.'],
            ['Passt zu', 'Grillwurst und Flat Iron.']
          ]
        },
        {
          id: 'bitburger', title: 'Bitburger 0,0 % Herb', teaser: 'Alkoholfrei, aber mit Bitterkeit',
          facts: [
            ['Woher?', 'Von der Bitburger Brauerei in der Eifel in Rheinland-Pfalz.'],
            ['Was ist es?', 'Ein alkoholfreies Pils mit 0,0 % Alkohol. „Herb“ heißt, dass es kräftiger nach Hopfen schmeckt als viele andere alkoholfreie Biere.'],
            ['Passt zu', 'Grillwurst und Flat Iron, wie ein normales Pils.']
          ]
        },
        {
          id: 'weizen', title: 'Franziskaner und Paulaner Weißbier alkoholfrei (hell)', teaser: 'Zwei Münchner Weizen ohne Alkohol',
          facts: [
            ['Woher?', 'Beide kommen aus München. Franziskaner gehört zur Spaten-Franziskaner-Bräu, Paulaner ist die Brauerei vom Nockherberg.'],
            ['Was ist es?', 'Helles Weizenbier: fruchtig, etwas Banane und Nelke, mit cremigem Schaum und wenig Bitterkeit. Beide sind alkoholfrei.'],
            ['Passt zu', 'Grillwurst und Sweetheart. Weizen mag Würziges und Mildes.']
          ]
        }
      ],
      note: 'Die Ratz-Flaschen haben 0,75 l: gern teilen.'
    },
    {
      title: 'Ohne Alkohol',
      items: [
        {
          id: 'soft', title: 'Sprudel, Wasser, Cola, Orange, Mix', teaser: 'Für alle, die fahren oder einfach Durst haben',
          facts: [
            ['Was gibt es?', 'Sprudel, stilles Wasser, Cola und Orangenlimonade. „Mix“ ist beides zusammen, also Cola-Orange.'],
            ['Tipp', 'Zwischen den Gängen ein Glas Wasser, dann schmeckt das nächste Stück Fleisch wieder wie das erste.']
          ]
        }
      ]
    },
    {
      title: 'Danach',
      items: [
        {
          id: 'gin', title: 'Gin Tonic', teaser: 'Roku Gin mit Schweppes, Gurke oder Zitrone',
          facts: [
            ['Woher?', 'Roku kommt von Suntory und wird in Osaka in Japan hergestellt. Der Gin kam 2017 auf den Markt. „Roku“ ist das japanische Wort für „sechs“.'],
            ['Sechs japanische Botanicals', 'Sakura-Blüten, Sakura-Blätter, Sencha-Tee, Gyokuro-Tee, Sansho-Pfeffer und Yuzu-Schale, jeweils zur besten Erntezeit gesammelt.'],
            ['Geschmack', 'Mild, fruchtig und blumig, mit Yuzu (japanische Zitrusfrucht) im Vordergrund und einem leicht pfeffrigen Abgang. 43 % Alkohol.']
          ]
        },
        {
          id: 'brand', title: 'Quittenbrand und Mirabellenbrand', teaser: 'Klein, aber oho. Zum Verdauen des Finales',
          facts: [
            ['Wie entsteht ein Obstbrand?', 'Reife Früchte werden eingemaischt und vergoren, dann destilliert. Der Brennmeister trennt dabei Vor- und Nachlauf ab und nutzt nur das Herzstück, den Mittellauf. Danach reift der Brand, meist über ein Jahr, und wird mit Wasser auf Trinkstärke gebracht.'],
            ['Wie stark?', 'Meist 40 bis 42 % Alkohol. Echter Obstbrand muss mindestens 37,5 % haben.'],
            ['Mirabelle', 'Die kleine gelbe Pflaume wird besonders in Lothringen angebaut, direkt hinter der Saargrenze.'],
            ['Wie trinkt man ihn?', 'Nicht eiskalt, sondern bei etwa 15 bis 18 °C. Dann entfalten sich die Aromen.']
          ]
        }
      ]
    }
  ];

  /* Kuh-Schema: Lage der Schnitte, nicht maßstabsgetreu */
  var ZONES = {
    flatiron: { cx: 100, cy: 56, rx: 25, ry: 13, label: 'Schulter' },
    entrecote: { cx: 150, cy: 52, rx: 26, ry: 11, label: 'Rücken' },
    tritip: { cx: 212, cy: 66, rx: 17, ry: 14, label: 'Hüfte' }
  };

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  var SVGNS = 'http://www.w3.org/2000/svg';
  function svg(tag, attrs) {
    var e = document.createElementNS(SVGNS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    return e;
  }

  function cowDiagram(active) {
    var s = svg('svg', { viewBox: '0 0 300 150', role: 'img', 'aria-label': 'Schema einer Kuh, markiert ist die Lage des Schnitts: ' + ZONES[active].label, 'class': 'cow' });
    var ink = '#2b1d17';
    s.appendChild(svg('path', { d: 'M70 52 C70 38 100 34 150 34 C200 34 232 38 238 54 C244 70 240 92 232 100 L232 130 L218 130 L216 104 L100 104 L98 130 L84 130 L82 100 C72 94 68 72 70 52 Z', fill: '#ffffff', stroke: ink, 'stroke-width': 3, 'stroke-linejoin': 'round' }));
    s.appendChild(svg('path', { d: 'M70 52 C58 46 44 52 38 62 C32 74 34 88 46 90 C58 92 68 84 72 72 Z', fill: '#ffffff', stroke: ink, 'stroke-width': 3, 'stroke-linejoin': 'round' }));
    s.appendChild(svg('circle', { cx: 52, cy: 66, r: 3, fill: ink }));
    s.appendChild(svg('path', { d: 'M238 54 C252 62 254 84 250 104', fill: 'none', stroke: ink, 'stroke-width': 3, 'stroke-linecap': 'round' }));
    Object.keys(ZONES).forEach(function (k) {
      var z = ZONES[k];
      var on = k === active;
      s.appendChild(svg('ellipse', { cx: z.cx, cy: z.cy, rx: z.rx, ry: z.ry, fill: on ? '#b8321f' : 'none', 'fill-opacity': on ? 0.85 : 0, stroke: on ? '#b8321f' : '#5a463c', 'stroke-width': on ? 2.5 : 1.5, 'stroke-dasharray': on ? '0' : '4 3' }));
      var t = svg('text', { x: z.cx, y: z.cy + 3.5, 'text-anchor': 'middle', 'font-size': 9, 'font-weight': 700, fill: on ? '#fbf1dc' : '#5a463c', 'font-family': 'Bitter, Georgia, serif' });
      t.textContent = z.label;
      s.appendChild(t);
    });
    return s;
  }

  function photo(d) {
    var wrap = el('figure', 'foto');
    wrap.hidden = true;
    var img = new Image();
    img.alt = '';
    var ex = PHOTOS[d.id];
    var cap = el('figcaption');
    cap.hidden = true;
    wrap.appendChild(img);
    wrap.appendChild(cap);
    var tried = false;
    img.onload = function () { wrap.hidden = false; };
    img.onerror = function () {
      if (!tried && ex) {
        tried = true;
        cap.appendChild(document.createTextNode('Beispielbild: ' + ex[1] + ', ' + ex[2] + ', '));
        var a = el('a', null, 'Wikimedia Commons');
        a.href = 'https://commons.wikimedia.org/wiki/File:' + encodeURIComponent(ex[0].replace(/ /g, '_'));
        a.target = '_blank';
        a.rel = 'noopener';
        cap.appendChild(a);
        cap.hidden = false;
        img.src = 'https://commons.wikimedia.org/wiki/Special:FilePath/' + encodeURIComponent(ex[0]) + '?width=800';
      } else {
        wrap.hidden = true;
      }
    };
    wrap._load = function () { img.src = 'fotos/' + d.id + '.jpg'; };
    return wrap;
  }

  function loadPhotos(root) {
    var f = root.querySelectorAll('figure.foto');
    for (var i = 0; i < f.length; i++) {
      if (f[i]._load) { f[i]._load(); f[i]._load = null; }
    }
  }

  function detailBody(d) {
    var box = el('div', 'detail-in');
    box.appendChild(photo(d));
    if (d.cut) {
      var fig = el('div', 'cowfig');
      fig.appendChild(cowDiagram(d.cut));
      fig.appendChild(el('p', 'cowcap', 'Schema, nicht maßstabsgetreu'));
      box.appendChild(fig);
    }
    var dl = el('dl', 'facts');
    d.facts.forEach(function (f) {
      dl.appendChild(el('dt', null, f[0]));
      dl.appendChild(el('dd', null, f[1]));
    });
    if (d.origin && d.origin.length) {
      dl.appendChild(el('dt', 'orig', 'Herkunft laut Packung'));
      var dd = el('dd', 'orig');
      d.origin.forEach(function (line, i) { if (i) dd.appendChild(document.createElement('br')); dd.appendChild(document.createTextNode(line)); });
      dl.appendChild(dd);
    }
    box.appendChild(dl);
    return box;
  }

  var counter = 0;
  function toggleItem(kind, d, num, head) {
    counter++;
    var pid = 'p' + counter;
    var wrap = el('div', 'tapitem ' + kind);
    var btn = el('button', 'tap');
    btn.type = 'button';
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', pid);
    if (num) { btn.appendChild(el('span', 'num', num)); }
    var txt = el('span', 'tt');
    var b = el('b', null, d.title);
    if (d.heart) {
      var h = svg('svg', { 'class': 'heart-inline', width: 22, height: 22, viewBox: '0 0 100 100', 'aria-hidden': 'true' });
      h.appendChild(svg('path', { d: 'M50 90 C8 60 4 30 26 20 C40 15 48 22 50 32 C52 22 60 15 74 20 C96 30 92 60 50 90 Z', fill: '#c0392b', stroke: '#2b1d17', 'stroke-width': 6 }));
      b.appendChild(h);
    }
    txt.appendChild(b);
    if (d.teaser) txt.appendChild(el('em', null, d.teaser));
    btn.appendChild(txt);
    btn.appendChild(el('span', 'chev'));
    wrap.appendChild(btn);

    var panel = el('div', 'detail');
    panel.id = pid;
    panel.hidden = true;
    if (d.sub) {
      d.sub.forEach(function (s) {
        var blk = el('div', 'subblk');
        blk.appendChild(el('h3', null, s.title));
        blk.appendChild(detailBody(s));
        panel.appendChild(blk);
      });
    } else {
      panel.appendChild(detailBody(d));
    }
    wrap.appendChild(panel);
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      panel.hidden = open;
      wrap.classList.toggle('open', !open);
      if (!open) loadPhotos(panel);
    });
    return wrap;
  }

  var dishes = document.getElementById('dishes');
  DISHES.forEach(function (d) { dishes.appendChild(toggleItem('dish', d, d.num)); });

  var glas = document.getElementById('glas');
  DRINK_GROUPS.forEach(function (g) {
    glas.appendChild(el('p', 'hand big', g.title));
    g.items.forEach(function (d) { glas.appendChild(toggleItem('drinkitem', d, null)); });
    if (g.note) glas.appendChild(el('p', 'hand ink', g.note));
  });

  /* Zum Würzen */
  var SEASON = [
    {
      id: 'fleur', title: 'Fleur de Sel, Le Saunier de Camargue', teaser: 'Das feine Salz zum Schluss, direkt aufs Fleisch',
      facts: [
        ['Woher?', 'Aus der Camargue, dem Mündungsgebiet der Rhône in Südfrankreich am Mittelmeer. Dort liegen flache Salzgärten, in denen Meerwasser in der Sonne verdunstet.'],
        ['Was ist Fleur de Sel?', 'Das heißt „Salzblume“. Gemeint ist die hauchdünne Schicht aus zarten Kristallen, die sich bei Sonne und Wind oben auf dem Wasser bildet. Sie wird von Hand abgeschöpft und ist deshalb teurer als normales Salz.'],
        ['Auf dem Etikett', 'Der „Saunier“ ist der Salzbauer. Oben auf dem Töpfchen steht das Kreuz der Camargue mit Anker und Herz. Es steht für Glaube, Hoffnung und Nächstenliebe.'],
        ['Wie nimmt man es?', 'Erst ganz zum Schluss auf das aufgeschnittene Fleisch streuen, nicht davor. Dann bleiben die Kristalle knusprig und schmecken mild und rein.']
      ]
    },
    {
      id: 'pfeffer', title: 'Wilder Madagaskar-Pfeffer', teaser: 'Selbst mörsern, kein gewöhnlicher Pfeffer',
      facts: [
        ['Was ist das?', 'Voatsiperifery, ein wilder Pfeffer aus Madagaskar. Er ist botanisch mit dem Schwarzen Pfeffer verwandt, aber eine andere Art. Er wächst als Kletterpflanze wild im Regenwald und wird dort von Hand gesammelt.'],
        ['Woran erkennt man ihn?', 'Die kleinen dunklen Beeren haben einen langen dünnen Stiel, wie kleine Kirschen. Den Stiel nicht abmachen, er kommt mit in den Mörser.'],
        ['Wie schmeckt er?', 'Holzig und würzig, dazu zitronig und blumig und mit einer leichten Schärfe. Er ist weniger scharf als Schwarzer Pfeffer, dafür aromatischer.'],
        ['Wie nimmt man ihn?', 'Frisch im Mörser zerstoßen und zum Schluss aufs Fleisch geben, zusammen mit dem Fleur de Sel. Beim Mörsern bitte nicht zu fein, damit die Stücke knacken.']
      ]
    }
  ];
  var wuerz = document.getElementById('wuerz');
  if (wuerz) {
    wuerz.appendChild(el('p', 'hand big', 'Zum Würzen'));
    SEASON.forEach(function (d) { wuerz.appendChild(toggleItem('drinkitem', d, null)); });
  }

  /* Alle auf-/zuklappen */
  var allBtn = document.getElementById('toggleall');
  if (allBtn) {
    var allOpen = false;
    allBtn.addEventListener('click', function () {
      allOpen = !allOpen;
      var btns = document.querySelectorAll('button.tap');
      for (var i = 0; i < btns.length; i++) {
        btns[i].setAttribute('aria-expanded', allOpen ? 'true' : 'false');
        var p = document.getElementById(btns[i].getAttribute('aria-controls'));
        p.hidden = !allOpen;
        if (allOpen) loadPhotos(p);
        btns[i].parentNode.classList.toggle('open', allOpen);
      }
      allBtn.textContent = allOpen ? 'Alle zuklappen' : 'Alle aufklappen';
    });
  }
})();
