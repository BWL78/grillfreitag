(function () {
  /* Daten. Fotos liegen später unter fotos/<id>.jpg, fehlt eins, wird es einfach nicht gezeigt.
     "origin" (Herkunft laut Packung) wird nach dem Einkauf ergänzt, solange leer, bleibt die Zeile weg. */
  var DISHES = [
    {
      id: 'grillwurst', num: '1', title: 'Grillwurst',
      teaser: 'Zum Warmwerden. Der Nachwuchs darf zuerst – Erwachsene warten höflich.',
      facts: [
        ['Was ist das?', 'Grillwürste gibt es grob in zwei Sorten: rohe Brat- und Grillwürste, die erst auf dem Rost gar werden, und Brühwürste, die schon gebrüht sind und nur noch heiß und knusprig werden müssen.'],
        ['Auf dem Grill', 'Bei mittlerer Hitze und mit Geduld. Zu viel Hitze sprengt die Haut, bevor die Wurst innen gar ist.']
      ],
      origin: []
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
      origin: []
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
      origin: []
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
          origin: []
        },
        {
          id: 'sweetheart', title: 'Sweetheart', cut: 'entrecote',
          facts: [
            ['Was ist das?', 'Das gleiche Fleisch wie das Entrecôte, nur anders geschnitten: im Schmetterlingsschnitt, flach und mit Herzform.'],
            ['Der Unterschied', 'Flacher heißt: mehr Kruste im Verhältnis zum Fleisch, schneller gar und schön für den Teller. Das dicke Entrecôte bleibt dafür innen saftiger. Genau das testen wir heute.'],
            ['Auf dem Grill', 'Weil es dünner ist, braucht es deutlich weniger Zeit als das dicke Stück. Gut im Auge behalten.']
          ],
          origin: []
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
            ['Was ist Crémant?', 'Ein französischer Schaumwein, der wie Champagner in der Flasche vergärt, aber nicht aus der Champagne kommt. Er ist meist trockener und feiner als Prosecco.']
          ]
        },
        {
          id: 'kir', title: 'Kir Royal', teaser: 'Crémant mit Cassis, für die Feinen am Tisch',
          facts: [
            ['Rezept', 'Etwa 8 cl eiskalter Schaumwein und 2 cl Crème de Cassis, einem Likör aus schwarzen Johannisbeeren. Erst den Schaumwein ins Glas, dann langsam den Cassis.'],
            ['Woher der Name?', 'Vom Pfarrer und Politiker Félix Kir, der von 1945 bis 1968 Bürgermeister von Dijon war. Er servierte Gästen gern Weißwein mit Cassis, um die Produkte seiner Region bekannt zu machen. Crème de Cassis gibt es in der Gegend um Dijon seit 1841.'],
            ['Royal?', 'Der klassische Kir wird mit trockenem Weißwein gemacht. Für „Royal“ nimmt man stattdessen Schaumwein.']
          ]
        }
      ]
    },
    {
      title: 'Zum Fleisch',
      items: [
        {
          id: 'bier', title: 'Bier', teaser: 'Eiskalt. Der Klassiker zum Grillen.',
          facts: [
            ['Warum passt es?', 'Bier ist bitter und prickelt. Das räumt zwischen zwei Bissen den Gaumen auf und passt gut zu Röstaromen von der Kruste.']
          ]
        },
        {
          id: 'cahors', title: 'Cahors, Clos de Pougette', teaser: 'Kräftiger Rotwein, der Partner fürs Finale',
          facts: [
            ['Woher?', 'Aus der Gegend um die Stadt Cahors im Département Lot, Südwestfrankreich. Die Weinberge liegen vor allem westlich der Stadt auf Kiesterrassen in den Schleifen des Flusses Lot.'],
            ['Welche Rebsorte?', 'Mindestens 70 % Malbec, der dort „Côt“ oder „Auxerrois“ heißt. Dazu dürfen bis zu 30 % Merlot und Tannat kommen.'],
            ['Geschichte', 'Hier wird seit der Römerzeit Wein gemacht, etwa seit 50 v. Chr. Im 13. Jahrhundert verschifften Händler den „schwarzen Wein“ über Bordeaux nach England, später gelangte er bis nach Russland. Die Reblaus zerstörte die Weinberge ab 1883, ein Frost im Februar 1956 machte eine große Neupflanzung nötig. Seit 1971 trägt er die Herkunftsbezeichnung AOC.'],
            ['Im Glas', 'Tiefdunkel, kräftig und mit festen Tanninen. Das ist ein guter Partner für Fleisch mit Kruste.']
          ]
        },
        {
          id: 'grauburgunder', title: 'Grauburgunder feinherb, Nahe 2023', teaser: 'Zum Start, passt zu Wurst und Nudelsalat',
          facts: [
            ['Woher?', 'Von der Nahe, einem Weinbaugebiet in Rheinland-Pfalz an einem Nebenfluss des Rheins. Die Nahe entspringt übrigens im Saarland.'],
            ['Die Rebsorte', 'Der Grauburgunder stammt vermutlich aus Burgund und ist eine Mutation des Spätburgunders. Die Beeren haben eine graue Haut, daher der Name. Der Name „Ruländer“ geht auf den Kaufmann Johann Seger Ruland zurück, der die Sorte 1709 in Speyer entdeckte.'],
            ['Im Glas', 'Meist säurearm, körperreich und fruchtig, mit Noten von Honigmelone, Birne oder getrockneten Früchten. „Feinherb“ heißt: ein wenig Restzucker, aber nicht süß.'],
            ['Trinktemperatur', 'Etwa 8 bis 14 °C. Dazu passen helles Fleisch, Wurst und Salate.']
          ]
        },
        {
          id: 'viognier', title: 'Viognier, Domaine Costes Rouges', teaser: 'Fruchtig und voll, der Begleiter zum Flat Iron',
          facts: [
            ['Die Rebsorte', 'Der Viognier stammt aus dem nördlichen Rhônetal. Er war nach der Reblauskrise fast verschwunden: In den späten 1960ern standen dort nur noch rund 12 Hektar. Winzer wie Georges Vernay brachten ihn zurück, heute wird er auf der ganzen Welt angebaut.'],
            ['Im Glas', 'Sehr aromatisch: Aprikose, Pfirsich, Honig und Geißblatt. Er hat wenig Säure und wirkt dadurch weich und rund.'],
            ['Der berühmteste Verwandte', 'Condrieu im Rhônetal: teuer, weil der Anbau auf steilen Granithängen aufwendig ist und nur wenig wächst.']
          ]
        }
      ],
      note: 'Je nur 1 Flasche: Probieren ja, Leertrinken nein!'
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

  function photo(id) {
    var wrap = el('figure', 'foto');
    wrap.hidden = true;
    var img = new Image();
    img.alt = '';
    img.onload = function () { wrap.hidden = false; };
    img.onerror = function () { wrap.hidden = true; };
    img.src = 'fotos/' + id + '.jpg';
    wrap.appendChild(img);
    return wrap;
  }

  function detailBody(d) {
    var box = el('div', 'detail-in');
    box.appendChild(photo(d.id));
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
        btns[i].parentNode.classList.toggle('open', allOpen);
      }
      allBtn.textContent = allOpen ? 'Alle zuklappen' : 'Alle aufklappen';
    });
  }
})();
