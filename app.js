(function () {
  "use strict";

  var D = window.TRUMP_DATA;

  var CATEGORIES = {
    constitutional: { label: "Constitutional", color: "#f59e0b" },
    federal:        { label: "Federal criminal", color: "#ef4444" },
    state:          { label: "State criminal", color: "#a855f7" },
    civil:          { label: "Civil", color: "#06b6d4" },
    immigration:    { label: "Immigration & rights", color: "#f472b6" },
    military:       { label: "Military & war", color: "#84cc16" },
    allegations:    { label: "Allegations", color: "#fb7185" },
    misc:           { label: "Bulk lawsuits", color: "#94a3b8" }
  };

  var STATUSES = {
    convicted:     { label: "Convicted", color: "#ef4444" },
    liable:        { label: "Civil liability", color: "#f97316" },
    acquitted:     { label: "Acquitted", color: "#22c55e" },
    dismissed:     { label: "Dismissed", color: "#94a3b8" },
    settled:       { label: "Settled", color: "#a78bfa" },
    "not-charged": { label: "Never charged", color: "#facc15" },
    open:          { label: "Pending", color: "#38bdf8" },
    struck:        { label: "Blocked by courts", color: "#14b8a6" },
    "no-action":   { label: "No legal action", color: "#f0abfc" }
  };

  var SHORT = {
    "impeach-1": "Impeachment I",
    "impeach-2": "Impeachment II",
    "section-3": "14th Am. §3",
    "emo-qatar-jet": "Qatar jet",
    "emo-uae-crypto": "UAE crypto",
    "emo-china": "China trademarks",
    "emo-gulf-deals": "Gulf deals",
    "emo-hotel-suits": "Hotel suits",
    "mueller-obstruction": "Mueller obstruction",
    "classified-docs": "Classified docs",
    "jan6-election": "Jan. 6 / 2020 election",
    "campaign-finance": "Campaign finance",
    "alien-enemies": "Alien Enemies Act",
    "abrego": "Abrego Garcia",
    "birthright": "Birthright",
    "guard": "Guard",
    "detention": "ICE deaths",
    "castro": "Minneapolis shooting",
    "renee-good": "Renee Good suit",
    "boat-strikes": "Boat strikes",
    "iran-war": "Iran war powers",
    "iran-school": "Minab school",
    "ny-hush": "NY hush money",
    "georgia": "Georgia RICO",
    "fake-electors": "Fake electors",
    "carroll": "Carroll",
    "ny-civil-fraud": "NY civil fraud",
    "trump-university": "Trump University",
    "trump-foundation": "Trump Foundation",
    "acc-ivana": "Ivana deposition",
    "acc-harth": "Jill Harth",
    "acc-katie-johnson": "Katie Johnson suits",
    "acc-zervos": "Summer Zervos",
    "acc-alva-johnson": "Alva Johnson",
    "acc-leeds": "Jessica Leeds",
    "acc-anderson": "Kristin Anderson",
    "acc-williams": "Stacey Williams",
    "acc-keul": "Beatrice Keul",
    "acc-boyne": "Boyne",
    "acc-heller": "Heller",
    "acc-mcdowell": "McDowell",
    "acc-dorris": "Amy Dorris",
    "acc-virginia": "Karena Virginia",
    "acc-karen-johnson": "Karen Johnson",
    "acc-mcgillivray": "Mindy McGillivray",
    "acc-crooks": "Rachel Crooks",
    "acc-stoynoff": "Natasha Stoynoff",
    "acc-huddy": "Juliet Huddy",
    "acc-drake": "Jessica Drake",
    "acc-laaksonen": "Ninni Laaksonen",
    "acc-searles": "Cassandra Searles",
    "acc-miss-teen-usa": "Miss Teen USA rooms",
    "epstein-files": "Epstein files",
    "misc-business": "Business lawsuits",
    "misc-admin": "Admin challenges",
    "misc-tariffs": "Tariff suits",
    "misc-media": "Media / defamation"
  };

  var ORDER_CATS = ["constitutional", "federal", "state", "civil", "immigration", "military", "allegations", "misc"];
  var state = { cat: "all", status: "all", q: "", sort: "date", person: "trump" };

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(id) { return document.getElementById(id); }
  function countStatus(k) { return scopedCases().filter(function (c) { return c.status === k; }).length; }
  function countCat(k) { return scopedCases().filter(function (c) { return c.category === k; }).length; }
  function byId(id) { return D.cases.find(function (c) { return c.id === id; }); }

  function animateCount(el, to) {
    var dur = 900, t0 = performance.now();
    function step(t) {
      var p = Math.min(1, (t - t0) / dur);
      el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------- STATS ---------- */
  function renderStats() {
    var items = [{ label: "Matters tracked", value: scopedCases().length, color: "#f5c542" }];
    Object.keys(STATUSES).forEach(function (k) {
      var n = countStatus(k);
      if (n) items.push({ label: STATUSES[k].label, value: n, color: STATUSES[k].color });
    });
    $("stats").innerHTML = items.map(function (s) {
      return '<div class="stat" style="--accent:' + s.color + '">' +
        '<div class="num" data-count="' + s.value + '">0</div>' +
        '<div class="lbl">' + esc(s.label) + '</div></div>';
    }).join("");
    document.querySelectorAll("#stats .num").forEach(function (el) {
      animateCount(el, +el.dataset.count);
    });
  }

  /* ---------- DONUT ---------- */
  function renderDonut() {
    var svg = $("donut");
    var cx = 120, cy = 120, r = 88, C = 2 * Math.PI * r, total = scopedCases().length || 1;
    var keys = Object.keys(STATUSES).filter(function (k) { return countStatus(k) > 0; });
    var offset = 0, segs = "";
    keys.forEach(function (k) {
      var n = countStatus(k), len = C * n / total;
      segs += '<circle class="donut-seg" data-status="' + k + '" data-dash="' + len.toFixed(2) + ' ' + (C - len).toFixed(2) + '"' +
        ' cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="' + STATUSES[k].color + '" stroke-width="28"' +
        ' stroke-dasharray="0 ' + C.toFixed(2) + '" stroke-dashoffset="' + (-offset).toFixed(2) + '"' +
        ' transform="rotate(-90 ' + cx + ' ' + cy + ')"><title>' + esc(STATUSES[k].label) + ': ' + n + '</title></circle>';
      offset += len;
    });
    svg.innerHTML =
      '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="#1d2230" stroke-width="28"/>' +
      segs +
      '<text x="' + cx + '" y="' + (cy + 2) + '" text-anchor="middle" class="donut-center-num">' + scopedCases().length + '</text>' +
      '<text x="' + cx + '" y="' + (cy + 24) + '" text-anchor="middle" class="donut-center-lbl">matters</text>';

    setTimeout(function () {
      svg.querySelectorAll(".donut-seg").forEach(function (el) {
        el.style.strokeDasharray = el.dataset.dash;
      });
    }, 80);

    $("legend").innerHTML = keys.map(function (k) {
      return '<li data-status="' + k + '"><span class="sw" style="background:' + STATUSES[k].color + '"></span>' +
        '<span>' + esc(STATUSES[k].label) + '</span><span class="count">' + countStatus(k) + '</span></li>';
    }).join("");
  }

  /* ---------- CATEGORY BARS ---------- */
  function renderCategoryBars() {
    var cats = ORDER_CATS.filter(function (c) { return countCat(c) > 0; });
    var max = Math.max.apply(null, cats.map(countCat).concat([1]));
    $("categoryBars").innerHTML = cats.map(function (c) {
      var n = countCat(c);
      return '<div class="bar-row" data-cat="' + c + '" style="--c:' + CATEGORIES[c].color + '">' +
        '<div class="bar-top"><span>' + esc(CATEGORIES[c].label) + '</span><strong>' + n + '</strong></div>' +
        '<div class="bar-track"><div class="bar-fill" data-w="' + (n / max * 100) + '"></div></div></div>';
    }).join("");
    setTimeout(function () {
      document.querySelectorAll("#categoryBars .bar-fill").forEach(function (el) {
        el.style.width = el.dataset.w + "%";
      });
    }, 120);
  }

  /* ---------- TIMELINE ---------- */
  /* Label box for a timeline dot: to the right of the dot, or to the left when it would run off the chart. */
  function labelBounds(cx, r, w, side) {
    if (side === "right") return { l: cx + r + 5, r: cx + r + 5 + w };
    return { l: cx - r - 5 - w, r: cx - r - 5 };
  }

  /* True when a dot and its label would collide with an already placed dot and label. */
  function collides(p, cx, cy, r, b) {
    if (Math.abs(p.x - cx) < p.r + r + 3 && Math.abs(p.y - cy) < p.r + r + 3) return true;
    return Math.abs(p.y - cy) < 14 && b.l < p.bounds.r + 4 && p.bounds.l < b.r + 4;
  }

  function renderTimeline() {
    var svg = $("timelineSvg");
    var W = 1000, padL = 170, padR = 30;
    var t0 = Date.parse("1980-01-01"), t1 = Date.parse("2027-12-31");
    function X(d) { return padL + (Date.parse(d) - t0) / (t1 - t0) * (W - padL - padR); }
    var present = {};
    scopedCases().forEach(function (c) { present[c.category] = true; });
    var cats = ORDER_CATS.filter(function (c) { return present[c]; });
    if (!cats.length) cats = ORDER_CATS.slice();
    var lanes = {};
    cats.forEach(function (c, i) { lanes[c] = 100 + i * 100; });
    var AXIS_Y = 100 + cats.length * 100 + 40;
    svg.setAttribute("viewBox", "0 0 1000 " + (AXIS_Y + 30));

    var s = "";
    s += '<rect x="' + (X("2025-01-20")) + '" y="22" width="' + (W - padR - X("2025-01-20")) + '" height="' + (AXIS_Y - 22) + '" class="era-band"/>';
    s += '<text x="' + (X("2025-01-20") + 6) + '" y="38" class="era-label">2nd term</text>';

    for (var y = 1980; y <= 2027; y += 5) {
      var x = X(y + "-01-01");
      s += '<line x1="' + x + '" x2="' + x + '" y1="48" y2="' + (AXIS_Y - 4) + '" class="year-tick"/>';
      s += '<text x="' + x + '" y="' + (AXIS_Y + 16) + '" text-anchor="middle" class="year-label">' + y + '</text>';
    }

    cats.forEach(function (c, i) {
      var yy = lanes[c];
      if (i % 2 === 0) s += '<rect x="0" y="' + (yy - 50) + '" width="' + W + '" height="100" class="lane-band"/>';
      s += '<line x1="' + padL + '" x2="' + (W - padR) + '" y1="' + yy + '" y2="' + yy + '" stroke="#222838"/>';
      s += '<text x="16" y="' + (yy + 5) + '" class="lane-label" style="fill:' + CATEGORIES[c].color + '">' + esc(CATEGORIES[c].label) + '</text>';
    });

    var nowX = X("2026-11-11");
    s += '<line x1="' + nowX + '" x2="' + nowX + '" y1="48" y2="' + (AXIS_Y - 4) + '" class="now-line"/>';
    s += '<text x="' + (nowX + 6) + '" y="62" class="now-label">Today</text>';

    // Place dots lane by lane, nudging vertically to avoid overlaps.
    var placed = [];
    var sorted = scopedCases().slice().sort(function (a, b) { return Date.parse(a.date) - Date.parse(b.date); });
    sorted.forEach(function (c) {
      var cx = X(c.date);
      var base = lanes[c.category];
      var color = CATEGORIES[c.category].color;
      var r = 6 + c.stakes * 1.8;
      var label = SHORT[c.id] || c.title;
      var labelW = label.length * 6.1;
      var candidates = [0, -26, 26, -52, 52, -78, 78];
      var chosen = base, chosenSide = "right", chosenBounds = null;
      var fewest = Infinity;
      candidates.forEach(function (off) {
        ["right", "left"].forEach(function (side) {
          var cy = base + off;
          var b = labelBounds(cx, r, labelW, side);
          var n = placed.filter(function (p) { return collides(p, cx, cy, r, b); }).length;
          if (b.r > W - 6 || b.l < padL) n += 1; // keep labels inside the chart
          if (n < fewest) { fewest = n; chosen = cy; chosenSide = side; chosenBounds = b; }
        });
      });
      placed.push({ x: cx, y: chosen, r: r, bounds: chosenBounds });
      s += '<g class="tl-g">' +
        '<line class="tl-stem" x1="' + cx + '" x2="' + cx + '" y1="' + base + '" y2="' + chosen + '"/>' +
        '<circle class="tl-dot" data-id="' + c.id + '" tabindex="0" role="button" aria-label="' + esc(c.title) + '" ' +
        'cx="' + cx + '" cy="' + chosen + '" r="' + r + '" fill="' + color + '" style="color:' + color + '"/>' +
        '<text class="tl-label' + (fewest === 0 ? "" : " tl-hidden") + '" x="' + (chosenSide === "right" ? cx + r + 5 : cx - r - 5) + '" y="' + (chosen + 4) + '"' +
        (chosenSide === "left" ? ' text-anchor="end"' : '') + '>' + esc(label) + '</text>' +
        '</g>';
    });

    svg.innerHTML = s;

    svg.querySelectorAll(".tl-dot").forEach(function (dot) {
      dot.addEventListener("mouseenter", function (e) { showTip(e.target, byId(dot.dataset.id)); });
      dot.addEventListener("focus", function (e) { showTip(e.target, byId(dot.dataset.id)); });
      dot.addEventListener("mouseleave", hideTip);
      dot.addEventListener("blur", hideTip);
      dot.addEventListener("click", function () { openDetail(dot.dataset.id); });
      dot.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openDetail(dot.dataset.id); }
      });
    });
  }

  function showTip(target, c) {
    var tip = $("tooltip");
    var st = STATUSES[c.status];
    tip.innerHTML = '<strong>' + esc(c.title) + '</strong>' +
      '<div class="muted small">' + esc(c.dateLabel) + ' &middot; ' + esc(CATEGORIES[c.category].label) + '</div>' +
      '<div class="small" style="color:' + st.color + '">' + esc(st.label) + ' &middot; stakes ' + c.stakes + '/5</div>';
    var wrap = $("timelineWrap").getBoundingClientRect();
    var r = target.getBoundingClientRect();
    var left = r.left - wrap.left + r.width + 10;
    if (left + 280 > wrap.width) left = r.left - wrap.left - 290;
    tip.style.left = Math.max(0, left) + "px";
    tip.style.top = (r.top - wrap.top - 6) + "px";
    tip.classList.add("show");
  }
  function hideTip() { $("tooltip").classList.remove("show"); }

  /* ---------- FILTER CHIPS ---------- */
  function renderChips() {
    var cats = [{ key: "all", label: "All", n: scopedCases().length, color: "#f5c542" }].concat(
      ORDER_CATS.filter(function (c) { return countCat(c) > 0; }).map(function (c) {
        return { key: c, label: CATEGORIES[c].label, n: countCat(c), color: CATEGORIES[c].color };
      })
    );
    $("catChips").innerHTML = cats.map(function (x) {
      return '<button class="chip' + (state.cat === x.key ? " active" : "") + '" data-type="cat" data-val="' + x.key + '" style="--c:' + x.color + '">' +
        '<span class="dot"></span>' + esc(x.label) + ' <span>(' + x.n + ')</span></button>';
    }).join("");

    var stats = [{ key: "all", label: "All", n: scopedCases().length, color: "#f5c542" }].concat(
      Object.keys(STATUSES).filter(function (k) { return countStatus(k) > 0; }).map(function (k) {
        return { key: k, label: STATUSES[k].label, n: countStatus(k), color: STATUSES[k].color };
      })
    );
    $("statusChips").innerHTML = stats.map(function (x) {
      return '<button class="chip' + (state.status === x.key ? " active" : "") + '" data-type="status" data-val="' + x.key + '" style="--c:' + x.color + '">' +
        '<span class="dot"></span>' + esc(x.label) + ' <span>(' + x.n + ')</span></button>';
    }).join("");
  }

  /* ---------- CASE GRID ---------- */
  function matchesQuery(c) {
    if (!state.q) return true;
    var hay = [
      c.title, c.summary, c.current, c.charges.join(" "), c.defense.join(" "),
      c.handling.join(" "), c.convictionPath.join(" "),
      CATEGORIES[c.category].label, STATUSES[c.status].label
    ].join(" ").toLowerCase();
    return hay.indexOf(state.q) !== -1;
  }

  /* ---------- PEOPLE (top bar) ---------- */
  var PEOPLE_DROPDOWN_AT = 6;

  function activePerson() {
    return D.people.find(function (p) { return p.id === state.person; }) || D.people[0];
  }

  function scopedCases() {
    var p = activePerson();
    if (!p.caseIds) return D.cases.filter(function (c) { return c.category !== "misc"; });
    return D.cases.filter(function (c) { return p.caseIds.indexOf(c.id) !== -1; });
  }

  function renderPeople() {
    var p = activePerson();
    var bar = $("peopleBar");
    if (D.people.length > PEOPLE_DROPDOWN_AT) {
      bar.innerHTML = '<label class="people-label" for="peopleSelect">Official</label>' +
        '<select id="peopleSelect" class="people-select">' + D.people.map(function (x) {
          return '<option value="' + esc(x.id) + '"' + (x.id === p.id ? " selected" : "") + '>' + esc(x.name) + '</option>';
        }).join("") + '</select>';
    } else {
      bar.innerHTML = '<span class="people-label">Accountability</span>' +
        '<div class="people-tabs" role="tablist">' + D.people.map(function (x) {
          var on = x.id === p.id;
          return '<button type="button" role="tab" class="people-tab' + (on ? " on" : "") + '" aria-selected="' + on + '" data-person="' + esc(x.id) + '">' + esc(x.name) + '</button>';
        }).join("") + '</div>';
    }

    var n = scopedCases().length;
    var sources = (p.sources || []).map(function (s) {
      return '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.label) + '</a></li>';
    }).join("");
    $("personPanel").innerHTML =
      '<div class="person-head">' +
        '<div><p class="eyebrow">' + esc(p.role) + '</p><h2>' + esc(p.name) + '</h2></div>' +
        '<div class="person-count"><span class="num">' + n + '</span><span class="muted small">matters</span></div>' +
      '</div>' +
      '<p class="person-blurb">' + esc(p.blurb) + '</p>' +
      (p.note ? '<p class="muted small">' + esc(p.note) + '</p>' : "") +
      (sources ? '<ul class="person-sources">' + sources + '</ul>' : "");
  }

  function setPerson(id) {
    if (state.person === id) return;
    state.person = id;
    state.cat = "all";
    state.status = "all";
    renderPeople();
    renderStats();
    renderDonut();
    renderCategoryBars();
    renderChips();
    renderTimeline();
    renderGrid();
  }

  function filteredCases() {
    var list = scopedCases().filter(function (c) {
      return (state.cat === "all" || c.category === state.cat) &&
             (state.status === "all" || c.status === state.status) &&
             matchesQuery(c);
    });
    list.sort(function (a, b) {
      if (state.sort === "stakes") return (b.stakes - a.stakes) || (Date.parse(b.date) - Date.parse(a.date));
      if (state.sort === "title") return a.title.localeCompare(b.title);
      return Date.parse(b.date) - Date.parse(a.date);
    });
    return list;
  }

  function pips(stakes, color) {
    var out = '<span class="pips" style="--heat:' + color + '" title="Stakes ' + stakes + ' of 5">';
    for (var i = 1; i <= 5; i++) out += '<span class="pip' + (i <= stakes ? " on" : "") + '"></span>';
    return out + '</span>';
  }

  function progressHTML(c) {
    var steps = D.tracks[c.track].steps;
    var color = CATEGORIES[c.category].color;
    var segs = steps.map(function (s, i) {
      var cls = i < c.reached ? "done" : (i === c.reached ? (c.ended ? "end" : "now") : "");
      return '<span class="' + cls + '" title="' + esc(s) + '"></span>';
    }).join("");
    var stage = steps[Math.min(c.reached, steps.length - 1)];
    var label = c.ended ? "Stopped at: " + stage : "Current stage: " + stage;
    return '<div class="progress" style="--c:' + color + '">' + segs + '</div>' +
      '<div class="progress-label">' + esc(label) + '</div>';
  }

  function cardHTML(c, i) {
    var cc = CATEGORIES[c.category].color;
    var st = STATUSES[c.status];
    return '<article class="case" tabindex="0" role="button" data-id="' + c.id + '" ' +
      'style="--c:' + cc + ';animation-delay:' + (i * 35) + 'ms">' +
        '<div class="meta"><span>' + esc(c.dateLabel) + '</span><span class="tag" style="--c:' + cc + '">' + esc(CATEGORIES[c.category].label) + '</span></div>' +
        '<h3>' + esc(c.title) + '</h3>' +
        '<p class="sum">' + esc(c.summary) + '</p>' +
        progressHTML(c) +
        '<div class="foot" style="margin-top:12px">' +
          '<span class="tag" style="--c:' + st.color + '">' + esc(st.label) + '</span>' +
          '<span class="pips-wrap"><span class="stakes-label">Stakes</span>' + pips(c.stakes, cc) + '</span>' +
        '</div>' +
      '</article>';
  }

  function renderGrid() {
    var list = filteredCases();
    $("resultCount").textContent = "Showing " + list.length + " of " + scopedCases().length + " matters.";
    $("grid").innerHTML = list.length
      ? list.map(cardHTML).join("")
      : '<div class="empty">No matters match these filters.</div>';
  }

  /* ---------- PATHWAYS ---------- */
  function renderPathways() {
    $("pathwayGrid").innerHTML = D.pathways.map(function (p) {
      var flow = p.steps.map(function (s, i) {
        return '<span class="node"><span class="n">' + (i + 1) + '</span>' + esc(s) + '</span>' +
          (i < p.steps.length - 1 ? '<span class="arrow">→</span>' : "");
      }).join("");
      return '<article class="pathway" style="--c:' + p.color + '">' +
        '<h3>' + esc(p.name) + '</h3>' +
        '<p class="muted small">' + esc(p.who) + '</p>' +
        '<div class="flow">' + flow + '</div>' +
        '<dl>' +
          '<dt>Standard of proof</dt><dd>' + esc(p.standard) + '</dd>' +
          '<dt>Presidential pardon / limits</dt><dd>' + esc(p.endPower) + '</dd>' +
          '<dt>Where it stands</dt><dd>' + esc(p.status) + '</dd>' +
        '</dl>' +
      '</article>';
    }).join("");
  }

  /* ---------- DETAIL DIALOG ---------- */
  function openDetail(id) {
    var c = byId(id);
    if (!c) return;
    var cc = CATEGORIES[c.category].color;
    var st = STATUSES[c.status];
    var track = D.tracks[c.track];

    var stepsHTML = track.steps.map(function (s, i) {
      var cls = "", mark = String(i + 1), note = "";
      if (i < c.reached) { cls = "done"; mark = "✓"; }
      else if (i === c.reached) {
        cls = c.ended ? "end" : "now";
        mark = c.ended ? "■" : "●";
        if (c.ended) note = '<span class="step-note">' + esc(st.label) + '</span>';
      }
      return '<li class="' + cls + '"><span class="dot">' + mark + '</span>' + esc(s) + note + '</li>';
    }).join("");

    var sources = c.sources.map(function (src) {
      return '<a href="' + esc(src.url) + '" target="_blank" rel="noopener noreferrer">' + esc(src.label) + ' ↗</a>';
    }).join("");

    function list(items) {
      return '<ul>' + items.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join("") + '</ul>';
    }

    $("detail").innerHTML =
      '<div class="d-head" style="--c:' + cc + '">' +
        '<button class="d-close" aria-label="Close">×</button>' +
        '<div class="d-meta">' +
          '<span class="tag" style="--c:' + cc + '">' + esc(CATEGORIES[c.category].label) + '</span>' +
          '<span>' + esc(c.dateLabel) + '</span>' +
          '<span>Stakes ' + pips(c.stakes, cc) + '</span>' +
        '</div>' +
        '<h2>' + esc(c.title) + '</h2>' +
        '<span class="tag" style="--c:' + st.color + '">' + esc(st.label) + '</span>' +
      '</div>' +
      '<div class="d-body">' +
        '<p>' + esc(c.summary) + '</p>' +
        '<div class="d-box d-status" style="--c:' + st.color + '"><h4>Current status (as of ' + esc(D.asOf) + ')</h4><p>' + esc(c.current) + '</p></div>' +
        '<div class="d-grid">' +
          '<div class="d-box"><h4>What is alleged</h4>' + list(c.charges) + '</div>' +
          '<div class="d-box"><h4>Trump’s position</h4>' + list(c.defense) + '</div>' +
          '<div class="d-box"><h4>How it is being dealt with</h4>' + list(c.handling) + '</div>' +
          '<div class="d-box"><h4>What a conviction would take</h4>' + list(c.convictionPath) + '</div>' +
        '</div>' +
        '<div class="d-sec"><h3>Where it sits on the path</h3>' +
          '<ul class="stepper" style="--c:' + cc + '">' + stepsHTML + '</ul>' +
        '</div>' +
        '<div class="d-sec"><h3>Sources</h3><div class="source-list">' + sources + '</div></div>' +
        '<button class="d-close-btn">Close</button>' +
      '</div>';

    var dlg = $("detail");
    dlg.querySelector(".d-close").addEventListener("click", function () { dlg.close(); });
    dlg.querySelector(".d-close-btn").addEventListener("click", function () { dlg.close(); });
    if (!dlg.open) dlg.showModal();
    dlg.querySelector(".d-body").scrollTop = 0;
  }

  /* ---------- EVENTS ---------- */
  function bind() {
    $("peopleBar").addEventListener("click", function (e) {
      var btn = e.target.closest("[data-person]");
      if (btn) setPerson(btn.dataset.person);
    });
    $("peopleBar").addEventListener("change", function (e) {
      if (e.target.id === "peopleSelect") setPerson(e.target.value);
    });
    $("search").addEventListener("input", function (e) {
      state.q = e.target.value.toLowerCase().trim();
      renderGrid();
    });
    $("sort").addEventListener("change", function (e) {
      state.sort = e.target.value;
      renderGrid();
    });

    function setFilter(type, val) {
      if (type === "cat") state.cat = val;
      if (type === "status") state.status = val;
      renderChips();
      renderGrid();
    }

    $("catChips").addEventListener("click", function (e) {
      var b = e.target.closest(".chip");
      if (b) setFilter("cat", b.dataset.val);
    });
    $("statusChips").addEventListener("click", function (e) {
      var b = e.target.closest(".chip");
      if (b) setFilter("status", b.dataset.val);
    });

    $("legend").addEventListener("click", function (e) {
      var li = e.target.closest("li");
      if (!li) return;
      setFilter("status", li.dataset.status);
      document.getElementById("cases").scrollIntoView();
    });

    $("categoryBars").addEventListener("click", function (e) {
      var row = e.target.closest(".bar-row");
      if (!row) return;
      setFilter("cat", row.dataset.cat);
      document.getElementById("cases").scrollIntoView();
    });

    $("grid").addEventListener("click", function (e) {
      var card = e.target.closest(".case");
      if (card) openDetail(card.dataset.id);
    });
    $("grid").addEventListener("keydown", function (e) {
      var card = e.target.closest(".case");
      if (card && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        openDetail(card.dataset.id);
      }
    });

    var dlg = $("detail");
    dlg.addEventListener("click", function (e) {
      if (e.target === dlg) dlg.close();
    });
  }

  /* ---------- INIT ---------- */
  function init() {
    $("asOf").textContent = D.asOf;
    renderStats();
    renderDonut();
    renderCategoryBars();
    renderTimeline();
    renderChips();
    renderGrid();
    renderPeople();
    renderPathways();
    bind();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
