const NEWS_BODIES = {
  "n-rescue": [
    "As early November storms dusted the northern pass, Kindfound dispatched its cedar-lined Mobile Vet Rescue Unit with two veterinarians and three behavioral volunteers.",
    "Over nine days, the team examined 142 rural dogs and barn cats, performed on-board rapid immunity screening, and transported fourteen unclaimed companions back to our heated sanctuary pavilions.",
    "Atlas and Koda were both discovered during the ridge sweep and are now fully vaccinated, socialized, and awaiting active forever homes.",
  ],
  "n-catroom": [
    "Traditional shelter acoustics often spike cortisol in sensitive cats. Working with acoustic timber artisans, we rebuilt Wing B into a silent garden glasshouse.",
    "Non-toxic fern ledges, elevated birch bridges, and warm limestone floor zones let Saffron, Cloud, and Sapphire choose when to explore or nap.",
    "Adoption readiness times dropped by nearly half because visitors meet companions in a calm living-room atmosphere.",
  ],
  "n-family": [
    "When Barnaby arrived at Kindfound, loud traffic startled him into freezing mid-crosswalk. Patient daily courtyard walks gradually rebuilt his curiosity.",
    "Thanks to our 14-day home transition coaching, his adoptive family paired familiar wool scents and slow evening routines during his first week home.",
    "Today he joins our Saturday therapy ambassadors to greet nervous newly arrived puppies.",
  ],
  "n-therapy": [
    "Calm sanctuary residents waiting for adoption gain confidence when invited into quiet, structured library reading circles.",
    "Supervised by certified trainers, our Paws & Pages sessions pair soft timber reading mats with calm treats and steady breathing breaks.",
    "Interested visitors can shadow Thursday sessions through our sanctuary volunteer inquiry form below.",
  ],
};

const HOTSPOTS = {
  chip: {
    code: "PROTOCOL 01 · ISO TRANSPONDER",
    title: "Lifetime Microchip & Registry",
    desc: "Every resident receives an international 15-digit ISO microchip registered directly to your family on adoption day, paired with an engraved brass sanctuary collar tag.",
    stat1: "Dr. Elena Vance · DVM",
    stat2: "Lifetime Transfer",
  },
  vax: {
    code: "PROTOCOL 02 · IMMUNITY SHIELD",
    title: "5-Way Core Vaccination & Screening",
    desc: "Complete core immunizations (DHPP / FVRCP / Rabies / RHDV2 for rabbits), parasite protection, and rapid negative infectious panels verified before courtyard visits.",
    stat1: "Full Cold-Chain Log",
    stat2: "Verified Vet Record",
  },
  social: {
    code: "PROTOCOL 03 · CALM BEHAVIORAL MAP",
    title: "Gentle Socialization & Rhythm Score",
    desc: "Two weeks of observed botanical courtyard play help us chart affection, leash manners, apartment quietness, and child compatibility accurately.",
    stat1: "14-Day Home Coaching",
    stat2: "Trainer Support",
  },
  diet: {
    code: "PROTOCOL 04 · SANCTUARY NUTRITION",
    title: "Tailored Meadow Transition Pack",
    desc: "Every companion goes home with 10 days of their accustomed organic meals, feeding schedule cards, and direct vet helpline access for gentle digestion transitions.",
    stat1: "10-Day Starter Kit",
    stat2: "Zero Sudden Switch",
  },
};

const ROUTINES = {
  Dog: {
    morning: {
      code: "07:00 AM · DOG ROUTINE",
      title: "Dew-Fresh Neighborhood Stroll",
      desc: "An unhurried 25-minute garden sniff walk followed by warm meadow kibble and fresh spring water.",
      s1: "25 min walk",
      s2: "160g bowl",
      s3: "Steady joy",
      cx: 56,
      cy: 44,
      sun: "#E8A838",
    },
    midday: {
      code: "01:00 PM · DOG ROUTINE",
      title: "Sunny Carpet Rest & Puzzle Chew",
      desc: "Quiet deep snooze beside your desk while you work, paired with a calm sniff mat enrichment break.",
      s1: "2.5 hr nap",
      s2: "Lick mat",
      s3: "Quiet focus",
      cx: 112,
      cy: 34,
      sun: "#F6D58E",
    },
    evening: {
      code: "05:30 PM · DOG ROUTINE",
      title: "Meadow Recall & Rope Play",
      desc: "Energetic lawn fetch or twilight trail trot before dinner, bonding through gentle praise cues.",
      s1: "35 min play",
      s2: "180g dinner",
      s3: "Playful bliss",
      cx: 168,
      cy: 52,
      sun: "#D95D39",
    },
    night: {
      code: "09:00 PM · DOG ROUTINE",
      title: "Fireside Heartbeat Winding Down",
      desc: "Soft brushing session and steady rhythmic breathing on a washable wool bolster bed through morning.",
      s1: "10 min brush",
      s2: "Fresh water",
      s3: "Deep sleep",
      cx: 170,
      cy: 38,
      sun: "#FBF8F3",
    },
  },
  Cat: {
    morning: {
      code: "07:00 AM · CAT ROUTINE",
      title: "Birdsong Perch & Slow Whisker Stretch",
      desc: "Greets your coffee ritual with ankle figure-eights before watching sparrows from a heated windowsill.",
      s1: "15 min greeting",
      s2: "75g wet meal",
      s3: "Warm purr",
      cx: 56,
      cy: 44,
      sun: "#E8A838",
    },
    midday: {
      code: "01:00 PM · CAT ROUTINE",
      title: "Botanical Shelf Sunbeam Slumber",
      desc: "Effortless zero-demand afternoon curling in warm indoor daylight away from noisy footsteps.",
      s1: "4 hr sun nap",
      s2: "Light snack",
      s3: "Ultra calm",
      cx: 112,
      cy: 34,
      sun: "#F6D58E",
    },
    evening: {
      code: "05:30 PM · CAT ROUTINE",
      title: "Feather Wand Chase & Grooming",
      desc: "Ten minutes of satisfying pounce-and-catch play mimics natural dusk hunting before dinner.",
      s1: "15 min chase",
      s2: "80g salmon",
      s3: "Happy zoom",
      cx: 168,
      cy: 52,
      sun: "#D95D39",
    },
    night: {
      code: "09:00 PM · CAT ROUTINE",
      title: "Lap Kneading & Acoustic Purr",
      desc: "Steady 26 Hz purr resonance beside reading lamps before settling quietly at the foot of the bed.",
      s1: "20 min cuddle",
      s2: "Quiet home",
      s3: "Purr trance",
      cx: 170,
      cy: 38,
      sun: "#FBF8F3",
    },
  },
  Rabbit: {
    morning: {
      code: "07:00 AM · RABBIT ROUTINE",
      title: "Garden Greens & Morning Binkies",
      desc: "Crisp dandelion leaves and timothy hay refill accompanied by joyful hops across woven cotton rugs.",
      s1: "20 min roam",
      s2: "Fresh greens",
      s3: "Happy hops",
      cx: 56,
      cy: 44,
      sun: "#E8A838",
    },
    midday: {
      code: "01:00 PM · RABBIT ROUTINE",
      title: "Quiet Cedar Tunnel Loafing",
      desc: "Rabbits naturally rest through bright afternoons tucked cleanly inside breathable linen corners.",
      s1: "3.5 hr loaf",
      s2: "Unlimited hay",
      s3: "Silent peace",
      cx: 112,
      cy: 34,
      sun: "#F6D58E",
    },
    evening: {
      code: "05:30 PM · RABBIT ROUTINE",
      title: "Crepuscular Courtyard Explorer",
      desc: "Dusk is a rabbit’s favorite playful hour for willow ball nudges and gentle nose-boop check-ins.",
      s1: "40 min play",
      s2: "Herb salad",
      s3: "Curious calm",
      cx: 168,
      cy: 52,
      sun: "#D95D39",
    },
    night: {
      code: "09:00 PM · RABBIT ROUTINE",
      title: "Cheek Massage & Hay Nibble",
      desc: "Gentle forehead strokes bring contented tooth-purrs while cozying cleanly in their enclosure.",
      s1: "10 min pets",
      s2: "Fresh hay",
      s3: "Gentle rest",
      cx: 170,
      cy: 38,
      sun: "#FBF8F3",
    },
  },
};

const state = {
  cat: "All",
  search: "",
  sort: "match",
  quiz: {
    space: "apartment",
    pace: "calm",
    household: "quiet",
  },
  favorites: new Set(),
  meetList: [],
  careKits: new Map(),
  newsCat: "All",
  rsvpBooked: false,
  rsvpSpots: 18,
  routineSpecies: "Dog",
  routinePhase: "morning",
  audioActive: false,
  customTag: {
    attached: false,
    name: "MILO",
    note: "CEDAR MEADOW · HOME SAFE",
    charm: "KINDFOUND · PAW",
  },
};

const preloaderEl = document.getElementById("preloader");
const preloaderBar = document.getElementById("preloader-bar");
const preloaderPct = document.getElementById("preloader-percent");
const skipPreloaderBtn = document.getElementById("skip-preloader");

function finishPreloader(immediate) {
  if (!preloaderEl) return;
  if (immediate) {
    preloaderEl.classList.add("is-opening", "is-done");
    preloaderEl.setAttribute("aria-hidden", "true");
    return;
  }
  preloaderEl.classList.add("is-opening");
  setTimeout(() => {
    preloaderEl.classList.add("is-done");
    preloaderEl.setAttribute("aria-hidden", "true");
  }, 950);
}

function initPreloader() {
  const params = new URLSearchParams(window.location.search);
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  if (params.get("autostart") === "1" || reducedMotion) {
    finishPreloader(true);
    return;
  }

  let pct = 0;
  const timer = setInterval(() => {
    pct = Math.min(100, pct + 4);
    if (preloaderBar) preloaderBar.style.width = `${pct}%`;
    if (preloaderPct) preloaderPct.textContent = `${pct}%`;
    if (pct >= 100) {
      clearInterval(timer);
      setTimeout(() => finishPreloader(false), 260);
    }
  }, 55);

  if (skipPreloaderBtn) {
    skipPreloaderBtn.addEventListener("click", () => {
      clearInterval(timer);
      if (preloaderBar) preloaderBar.style.width = "100%";
      if (preloaderPct) preloaderPct.textContent = "100%";
      finishPreloader(false);
    });
  }
}

function readPetDataFromCard(card) {
  const imgEl = card.querySelector("img");
  return {
    el: card,
    id: card.dataset.petId,
    name: card.dataset.name || "",
    cat: card.dataset.cat || "",
    young: card.dataset.young === "true",
    breed: card.dataset.breed || "",
    ageLabel: card.dataset.ageLabel || "",
    ageMonths: Number(card.dataset.ageMonths || 12),
    fee: Number(card.dataset.fee || 0),
    affection: Number(card.dataset.affection || 85),
    playfulness: Number(card.dataset.play || 80),
    calm: Number(card.dataset.calm || 80),
    spaceFit: card.dataset.space || "apartment",
    paceFit: card.dataset.pace || "calm",
    householdFit: card.dataset.household || "quiet",
    story: card.dataset.story || "",
    vetNote: card.dataset.vet || "",
    blurb: card.querySelector(".pet-blurb")?.textContent || "",
    img: imgEl ? imgEl.getAttribute("src") : "",
  };
}

function computeMatchScore(pet) {
  let score = 72;
  if (pet.spaceFit === state.quiz.space) score += 10;
  else score -= 4;

  if (pet.paceFit === state.quiz.pace) score += 11;
  else score -= 3;

  if (pet.householdFit === state.quiz.household) score += 6;
  else if (state.quiz.household === "family" && pet.calm >= 82) score += 3;

  return Math.max(70, Math.min(99, score));
}

function spawnHeartBurst(originEl) {
  const rect = originEl.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const angles = [-70, -35, 0, 35, 70];

  angles.forEach((deg, idx) => {
    const rad = (deg - 90) * (Math.PI / 180);
    const dist = 34 + idx * 8;
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "currentColor");
    svg.setAttribute("class", "heart-burst-particle");
    svg.style.left = `${cx - 7}px`;
    svg.style.top = `${cy - 7}px`;
    svg.style.setProperty("--tx", `${Math.cos(rad) * dist}px`);
    svg.style.setProperty("--ty", `${Math.sin(rad) * dist}px`);
    svg.innerHTML = `<path d="M12 21s-7-4.6-9.5-8.7C.7 9.1 2.2 5 5.9 5c2.2 0 3.7 1.2 4.6 2.5C11.4 6.2 12.9 5 15.1 5c3.7 0 5.2 4.1 3.4 7.3C19 16.4 12 21 12 21Z"/>`;
    document.body.appendChild(svg);
    setTimeout(() => svg.remove(), 820);
  });
}

function syncPetCardsDOM() {
  const grid = document.getElementById("pets-grid");
  if (!grid) return;

  const query = state.search.trim().toLowerCase();
  const cards = Array.from(grid.querySelectorAll(".pet-card"));
  const items = cards.map((card, index) => {
    const pet = readPetDataFromCard(card);
    pet.originalOrder = index;
    pet.matchScore = computeMatchScore(pet);
    return pet;
  });

  if (state.sort === "match") {
    items.sort((a, b) => b.matchScore - a.matchScore);
  } else if (state.sort === "youngest") {
    items.sort((a, b) => a.ageMonths - b.ageMonths);
  } else if (state.sort === "calm") {
    items.sort((a, b) => b.calm - a.calm);
  } else {
    items.sort((a, b) => a.originalOrder - b.originalOrder);
  }

  let visibleCount = 0;
  items.forEach((pet) => {
    const card = pet.el;
    let visible = true;

    if (state.cat === "Favorites" && !state.favorites.has(pet.id))
      visible = false;
    else if (state.cat === "Young" && !pet.young) visible = false;
    else if (
      (state.cat === "Dog" || state.cat === "Cat" || state.cat === "Rabbit") &&
      pet.cat !== state.cat
    ) {
      visible = false;
    }

    if (visible && query) {
      const hay =
        `${pet.name} ${pet.breed} ${pet.cat} ${pet.blurb}`.toLowerCase();
      if (!hay.includes(query)) visible = false;
    }

    card.hidden = !visible;
    if (visible) visibleCount += 1;

    const matchEl = card.querySelector(".pet-match-readout");
    if (matchEl) matchEl.textContent = `${pet.matchScore}% Match`;

    const favBtn = card.querySelector(".fav-heart-btn");
    const isFav = state.favorites.has(pet.id);
    if (favBtn) {
      favBtn.classList.toggle("is-fav", isFav);
      const favPathSvg = favBtn.querySelector("svg");
      if (favPathSvg)
        favPathSvg.setAttribute("fill", isFav ? "currentColor" : "none");
    }

    const adoptBtn = card.querySelector(".btn-card-adopt");
    const inList = state.meetList.includes(pet.id);
    if (adoptBtn) {
      adoptBtn.classList.toggle("in-list", inList);
      adoptBtn.textContent = inList ? "In Meet List" : "Add to Visit";
    }

    grid.appendChild(card);
  });

  const emptyEl = document.getElementById("pets-empty");
  if (emptyEl) {
    emptyEl.hidden = visibleCount > 0;
    grid.appendChild(emptyEl);
  }
}

function syncNewsDOM() {
  const cards = document.querySelectorAll("#news-grid .news-card");
  cards.forEach((card) => {
    const cat = card.dataset.newsCat || "";
    card.hidden = state.newsCat !== "All" && cat !== state.newsCat;
  });
}

function updateCountsAndDrawer() {
  const meetCountEl = document.getElementById("meet-count");
  const favCountEl = document.getElementById("fav-filter-count");
  const drawerItemsEl = document.getElementById("drawer-items");
  const drawerPetCountEl = document.getElementById("drawer-pet-count");
  const drawerFeeTotalEl = document.getElementById("drawer-fee-total");
  const drawerPledgeTotalEl = document.getElementById("drawer-pledge-total");
  const sponsorTotalReadout = document.getElementById("sponsor-total-readout");

  const selectedPets = state.meetList
    .map((id) => {
      const card = document.querySelector(`.pet-card[data-pet-id="${id}"]`);
      return card ? readPetDataFromCard(card) : null;
    })
    .filter(Boolean);

  const petFeeSum = selectedPets.reduce((acc, p) => acc + p.fee, 0);
  let careSum = 0;
  state.careKits.forEach((kit) => {
    careSum += kit.price;
  });

  const tagExtra = state.customTag.attached ? 1 : 0;
  if (meetCountEl)
    meetCountEl.textContent = String(
      selectedPets.length + state.careKits.size + tagExtra,
    );
  if (favCountEl) favCountEl.textContent = String(state.favorites.size);
  if (drawerPetCountEl)
    drawerPetCountEl.textContent = String(selectedPets.length);
  if (drawerFeeTotalEl) drawerFeeTotalEl.textContent = `$${petFeeSum}`;
  if (drawerPledgeTotalEl) drawerPledgeTotalEl.textContent = `$${careSum}/mo`;
  if (sponsorTotalReadout) sponsorTotalReadout.textContent = `$${careSum}/mo`;

  if (!drawerItemsEl) return;

  if (
    selectedPets.length === 0 &&
    state.careKits.size === 0 &&
    !state.customTag.attached
  ) {
    drawerItemsEl.innerHTML = `<div class="empty-state">Your courtyard list is empty. Add any companion, custom collar tag, or monthly care kit to reserve a sanctuary visit.</div>`;
    return;
  }

  const petRows = selectedPets
    .map(
      (pet) => `
      <div class="drawer-item">
        <img src="${pet.img}" alt="${pet.name}" />
        <div>
          <div class="drawer-item-name">${pet.name}</div>
          <div class="drawer-item-meta">${pet.breed} · ${pet.ageLabel} · $${pet.fee}</div>
        </div>
        <button type="button" class="drawer-remove-btn" data-remove-pet="${pet.id}" aria-label="Remove ${pet.name}">×</button>
      </div>
    `,
    )
    .join("");

  const kitRows = Array.from(state.careKits.values())
    .map(
      (kit) => `
      <div class="drawer-item">
        <div style="width:64px;height:64px;border-radius:10px;background:#EEF2EC;display:grid;place-items:center;font-family:var(--font-mono);font-size:0.78rem;color:#162B22;">CARE</div>
        <div>
          <div class="drawer-item-name">${kit.name}</div>
          <div class="drawer-item-meta">Monthly Sanctuary Pledge · $${kit.price}/mo</div>
        </div>
        <button type="button" class="drawer-remove-btn" data-remove-kit="${kit.id}" aria-label="Remove ${kit.name}">×</button>
      </div>
    `,
    )
    .join("");

  const tagRow = state.customTag.attached
    ? `
      <div class="drawer-item">
        <div style="width:64px;height:64px;border-radius:10px;background:#D7A145;display:grid;place-items:center;font-family:var(--font-display);font-weight:700;font-size:0.78rem;color:#162B22;">BRASS</div>
        <div>
          <div class="drawer-item-name">Brass Tag · ${state.customTag.name}</div>
          <div class="drawer-item-meta">${state.customTag.charm} · Free Keepsake</div>
        </div>
        <button type="button" class="drawer-remove-btn" data-remove-tag="true" aria-label="Remove custom brass tag">×</button>
      </div>
    `
    : "";

  drawerItemsEl.innerHTML = petRows + kitRows + tagRow;
}

function openQuickView(petId) {
  const card = document.querySelector(`.pet-card[data-pet-id="${petId}"]`);
  const modal = document.getElementById("quick-view-modal");
  if (!card || !modal) return;

  const pet = readPetDataFromCard(card);
  const score = computeMatchScore(pet);
  document.getElementById("qv-img").src = pet.img;
  document.getElementById("qv-img").alt = `${pet.name} portrait`;
  document.getElementById("qv-eyebrow").textContent =
    `${pet.cat.toUpperCase()} · ${score}% HOME COMPATIBILITY`;
  document.getElementById("qv-name").textContent = pet.name;
  document.getElementById("qv-meta").textContent =
    `${pet.breed} · ${pet.ageLabel} · $${pet.fee} Care & Vet Fee`;
  document.getElementById("qv-story").textContent = pet.story;
  document.getElementById("qv-stat-affection").textContent =
    `${pet.affection}%`;
  document.getElementById("qv-stat-play").textContent = `${pet.playfulness}%`;
  document.getElementById("qv-stat-calm").textContent = `${pet.calm}%`;
  document.getElementById("qv-bar-affection").style.width = `${pet.affection}%`;
  document.getElementById("qv-bar-play").style.width = `${pet.playfulness}%`;
  document.getElementById("qv-bar-calm").style.width = `${pet.calm}%`;
  document.getElementById("qv-vet-note").textContent =
    `Vet Passport: ${pet.vetNote}`;

  const addBtn = document.getElementById("qv-add-btn");
  const favBtn = document.getElementById("qv-fav-btn");
  addBtn.dataset.petId = pet.id;
  addBtn.textContent = state.meetList.includes(pet.id)
    ? "Added to Meet List"
    : "Add to Meet & Greet List";
  favBtn.dataset.petId = pet.id;
  favBtn.textContent = state.favorites.has(pet.id)
    ? "Saved in Favorites"
    : "Save Favorite";

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeQuickView() {
  const modal = document.getElementById("quick-view-modal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function openNewsModal(newsId) {
  const card = document.querySelector(`.news-card[data-news-id="${newsId}"]`);
  const modal = document.getElementById("news-modal");
  if (!card || !modal) return;

  const imgSrc = card.querySelector("img")?.getAttribute("src") || "";
  const title = card.querySelector(".news-title")?.textContent || "";
  const meta = card.querySelector(".news-meta")?.textContent || "";
  const quote = card.dataset.quote || "";
  const paragraphs = NEWS_BODIES[newsId] || [];

  document.getElementById("nm-img").src = imgSrc;
  document.getElementById("nm-img").alt = title;
  document.getElementById("nm-meta").textContent = meta;
  document.getElementById("nm-title").textContent = title;
  document.getElementById("nm-body").innerHTML = paragraphs
    .map((p) => `<p>${p}</p>`)
    .join("");
  document.getElementById("nm-quote").textContent = `"${quote}"`;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeNewsModal() {
  const modal = document.getElementById("news-modal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function openDrawer() {
  const drawer = document.getElementById("adopt-drawer");
  const backdrop = document.getElementById("drawer-backdrop");
  if (!drawer || !backdrop) return;
  drawer.classList.add("open");
  backdrop.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeDrawer() {
  const drawer = document.getElementById("adopt-drawer");
  const backdrop = document.getElementById("drawer-backdrop");
  if (!drawer || !backdrop) return;
  drawer.classList.remove("open");
  backdrop.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function animateCounter(el) {
  if (el.dataset.animated === "true") return;
  el.dataset.animated = "true";
  const target = Number(el.dataset.count || 0);
  const duration = 1250;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = String(Math.round(target * eased));
    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      el.textContent = String(target);
    }
  }
  requestAnimationFrame(tick);
}

function initScrollObservers() {
  const revealEls = document.querySelectorAll(".reveal");
  const counterEls = document.querySelectorAll("[data-count]");

  if (!("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
    counterEls.forEach((el) => animateCounter(el));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  revealEls.forEach((el) => revealObserver.observe(el));

  const countObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.25 },
  );

  counterEls.forEach((el) => countObserver.observe(el));
}

function selectHotspot(key) {
  const data = HOTSPOTS[key];
  if (!data) return;

  document.getElementById("hotspot-code").textContent = data.code;
  document.getElementById("hotspot-title").textContent = data.title;
  document.getElementById("hotspot-desc").textContent = data.desc;
  document.getElementById("hotspot-stat-1").textContent = data.stat1;
  document.getElementById("hotspot-stat-2").textContent = data.stat2;

  document.querySelectorAll("[data-hotspot]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.hotspot === key);
  });
}

function togglePetInList(petId) {
  const idx = state.meetList.indexOf(petId);
  if (idx >= 0) {
    state.meetList.splice(idx, 1);
  } else {
    state.meetList.push(petId);
  }
  syncPetCardsDOM();
  updateCountsAndDrawer();
}

function toggleFavorite(petId, sourceBtn) {
  if (state.favorites.has(petId)) {
    state.favorites.delete(petId);
  } else {
    state.favorites.add(petId);
    if (sourceBtn) spawnHeartBurst(sourceBtn);
  }
  syncPetCardsDOM();
  updateCountsAndDrawer();
}

let audioCtx = null;
let audioOsc = null;
let audioGain = null;

function updateRoutineView() {
  const data = ROUTINES[state.routineSpecies]?.[state.routinePhase];
  if (!data) return;

  document.getElementById("routine-badge").textContent = data.code;
  document.getElementById("routine-title").textContent = data.title;
  document.getElementById("routine-desc").textContent = data.desc;
  document.getElementById("r-stat-1").textContent = data.s1;
  document.getElementById("r-stat-2").textContent = data.s2;
  document.getElementById("r-stat-3").textContent = data.s3;

  const orb = document.getElementById("r-celestial");
  if (orb) {
    orb.setAttribute("cx", String(data.cx));
    orb.setAttribute("cy", String(data.cy));
    orb.setAttribute("fill", data.sun);
  }
}

function toggleSanctuaryAudio() {
  const btn = document.getElementById("ambient-toggle-btn");
  const label = document.getElementById("ambient-btn-label");
  const waves = document.getElementById("sound-wave-bars");
  state.audioActive = !state.audioActive;

  if (btn) btn.setAttribute("aria-pressed", String(state.audioActive));
  if (waves) waves.classList.toggle("playing", state.audioActive);
  if (label)
    label.textContent = state.audioActive
      ? "Pause Sanctuary Calm Tone"
      : "Hear Sanctuary Calm Tone";

  try {
    if (state.audioActive) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (Ctx) {
        if (!audioCtx) audioCtx = new Ctx();
        if (audioCtx.state === "suspended") audioCtx.resume();
        audioOsc = audioCtx.createOscillator();
        audioGain = audioCtx.createGain();
        audioOsc.type = "sine";
        audioOsc.frequency.setValueAtTime(174, audioCtx.currentTime);
        audioGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
        audioGain.gain.exponentialRampToValueAtTime(
          0.028,
          audioCtx.currentTime + 0.35,
        );
        audioOsc.connect(audioGain);
        audioGain.connect(audioCtx.destination);
        audioOsc.start();
      }
    } else if (audioGain && audioCtx && audioOsc) {
      audioGain.gain.exponentialRampToValueAtTime(
        0.0001,
        audioCtx.currentTime + 0.2,
      );
      const oldOsc = audioOsc;
      setTimeout(() => {
        try {
          oldOsc.stop();
        } catch (_) {}
      }, 220);
    }
  } catch (_) {}
}

function updateTagPreview() {
  const nameEl = document.getElementById("tag-svg-name");
  const noteEl = document.getElementById("tag-svg-note");
  const emblemEl = document.getElementById("tag-svg-emblem");
  if (nameEl) nameEl.textContent = state.customTag.name || "MILO";
  if (noteEl)
    noteEl.textContent = state.customTag.note || "CEDAR MEADOW · HOME SAFE";
  if (emblemEl)
    emblemEl.textContent = state.customTag.charm || "KINDFOUND · PAW";
}

function bindEvents() {
  window.addEventListener("scroll", () => {
    const header = document.getElementById("site-header");
    if (header) header.classList.toggle("scrolled", window.scrollY > 24);
  });

  const mobileBtn = document.getElementById("mobile-menu-btn");
  const mobileNav = document.getElementById("mobile-nav-panel");
  if (mobileBtn && mobileNav) {
    mobileBtn.addEventListener("click", () => {
      const open = mobileNav.classList.toggle("open");
      mobileBtn.setAttribute("aria-expanded", String(open));
      mobileNav.setAttribute("aria-hidden", String(!open));
    });
    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
        mobileBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.querySelectorAll(".quiz-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const group = btn.closest("[data-quiz-group]")?.dataset.quizGroup;
      if (!group) return;
      state.quiz[group] = btn.dataset.value;
      btn.parentElement
        .querySelectorAll(".quiz-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const summaryEl = document.getElementById("match-summary-text");
      if (summaryEl) {
        summaryEl.textContent = `Live scores updated for ${state.quiz.space} · ${state.quiz.pace} · ${state.quiz.household}`;
      }
      syncPetCardsDOM();
    });
  });

  const sortBestBtn = document.getElementById("sort-best-match-btn");
  const sortSelect = document.getElementById("pet-sort");
  if (sortBestBtn && sortSelect) {
    sortBestBtn.addEventListener("click", () => {
      state.sort = "match";
      sortSelect.value = "match";
      syncPetCardsDOM();
      document.getElementById("pets")?.scrollIntoView({ behavior: "smooth" });
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      state.sort = sortSelect.value;
      syncPetCardsDOM();
    });
  }

  const searchInput = document.getElementById("pet-search");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      state.search = searchInput.value;
      syncPetCardsDOM();
    });
  }

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.cat = btn.dataset.cat || "All";
      document
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      syncPetCardsDOM();
    });
  });

  document.getElementById("pets-grid")?.addEventListener("click", (e) => {
    const favBtn = e.target.closest("[data-fav-id]");
    if (favBtn) {
      toggleFavorite(favBtn.dataset.favId, favBtn);
      return;
    }
    const inspectBtn = e.target.closest("[data-inspect-id]");
    if (inspectBtn) {
      openQuickView(inspectBtn.dataset.inspectId);
      return;
    }
    const adoptBtn = e.target.closest("[data-adopt-id]");
    if (adoptBtn) {
      togglePetInList(adoptBtn.dataset.adoptId);
    }
  });

  document.querySelectorAll(".news-filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.newsCat = btn.dataset.newsCat || "All";
      document
        .querySelectorAll(".news-filter-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      syncNewsDOM();
    });
  });

  document.getElementById("news-grid")?.addEventListener("click", (e) => {
    const readBtn = e.target.closest("[data-news-open]");
    if (readBtn) {
      openNewsModal(readBtn.dataset.newsOpen);
    }
  });

  const rsvpBtn = document.getElementById("rsvp-toggle-btn");
  const rsvpSpotsEl = document.getElementById("rsvp-spots-num");
  const rsvpFeedback = document.getElementById("rsvp-feedback");
  if (rsvpBtn && rsvpSpotsEl && rsvpFeedback) {
    rsvpBtn.addEventListener("click", () => {
      state.rsvpBooked = !state.rsvpBooked;
      state.rsvpSpots = state.rsvpBooked ? 17 : 18;
      rsvpSpotsEl.textContent = String(state.rsvpSpots);
      rsvpBtn.textContent = state.rsvpBooked
        ? "Pass Reserved · Cancel Spot"
        : "Reserve Free Visit Pass";
      rsvpFeedback.textContent = state.rsvpBooked
        ? "Pass #KF-SAT-118 confirmed for Saturday Garden Adoption Picnic (10:00 AM)."
        : "";
    });
  }

  document.querySelectorAll(".sponsor-kit-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.kitId;
      const name = btn.dataset.kitName;
      const price = Number(btn.dataset.kitPrice || 0);
      if (state.careKits.has(id)) {
        state.careKits.delete(id);
        btn.classList.remove("active");
      } else {
        state.careKits.set(id, { id, name, price });
        btn.classList.add("active");
      }
      updateCountsAndDrawer();
    });
  });

  document
    .getElementById("open-care-drawer-btn")
    ?.addEventListener("click", openDrawer);

  document.querySelectorAll("[data-hotspot]").forEach((btn) => {
    btn.addEventListener("click", () => selectHotspot(btn.dataset.hotspot));
  });

  document
    .getElementById("qv-close")
    ?.addEventListener("click", closeQuickView);
  document
    .getElementById("quick-view-modal")
    ?.addEventListener("click", (e) => {
      if (e.target.id === "quick-view-modal") closeQuickView();
    });

  document.getElementById("qv-add-btn")?.addEventListener("click", (e) => {
    const id = e.currentTarget.dataset.petId;
    if (id) {
      togglePetInList(id);
      e.currentTarget.textContent = state.meetList.includes(id)
        ? "Added to Meet List"
        : "Add to Meet & Greet List";
    }
  });

  document.getElementById("qv-fav-btn")?.addEventListener("click", (e) => {
    const id = e.currentTarget.dataset.petId;
    if (id) {
      toggleFavorite(id, e.currentTarget);
      e.currentTarget.textContent = state.favorites.has(id)
        ? "Saved in Favorites"
        : "Save Favorite";
    }
  });

  document
    .getElementById("nm-close")
    ?.addEventListener("click", closeNewsModal);
  document.getElementById("news-modal")?.addEventListener("click", (e) => {
    if (e.target.id === "news-modal") closeNewsModal();
  });

  document
    .getElementById("open-adopt-btn")
    ?.addEventListener("click", openDrawer);
  document
    .getElementById("drawer-close")
    ?.addEventListener("click", closeDrawer);
  document
    .getElementById("drawer-backdrop")
    ?.addEventListener("click", closeDrawer);

  document.getElementById("drawer-items")?.addEventListener("click", (e) => {
    const rmPet = e.target.closest("[data-remove-pet]");
    if (rmPet) {
      togglePetInList(rmPet.dataset.removePet);
      return;
    }
    const rmKit = e.target.closest("[data-remove-kit]");
    if (rmKit) {
      const kitId = rmKit.dataset.removeKit;
      state.careKits.delete(kitId);
      document
        .querySelector(`.sponsor-kit-btn[data-kit-id="${kitId}"]`)
        ?.classList.remove("active");
      updateCountsAndDrawer();
      return;
    }
    const rmTag = e.target.closest("[data-remove-tag]");
    if (rmTag) {
      state.customTag.attached = false;
      const attachBtn = document.getElementById("attach-tag-btn");
      const fb = document.getElementById("tag-attach-feedback");
      if (attachBtn)
        attachBtn.textContent = "Attach Free Brass Tag to Visit List";
      if (fb) fb.textContent = "";
      updateCountsAndDrawer();
    }
  });

  document
    .getElementById("drawer-booking-form")
    ?.addEventListener("submit", (e) => {
      e.preventDefault();
      const guestName = document
        .getElementById("booking-guest-name")
        .value.trim();
      const guestEmail = document
        .getElementById("booking-guest-email")
        .value.trim();
      const feedback = document.getElementById("drawer-feedback");
      if (!guestName || !guestEmail.includes("@")) {
        feedback.textContent =
          "Please enter your name and valid email to confirm your visit pass.";
        return;
      }
      feedback.textContent = `Visit confirmed for ${guestName}. Sanctuary Pass #KF-${Math.floor(1000 + Math.random() * 9000)} sent to ${guestEmail}.`;
    });

  document.getElementById("visit-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("visit-name").value.trim();
    const email = document.getElementById("visit-email").value.trim();
    const type = document.getElementById("visit-type").value;
    const feedback = document.getElementById("visit-form-feedback");
    if (!name || !email.includes("@")) {
      feedback.textContent =
        "Please complete your name and valid email address.";
      return;
    }
    feedback.textContent = `Thank you, ${name}. Your ${type} inquiry has been logged for our Cedar Meadow coordinator.`;
    e.target.reset();
  });

  document.querySelectorAll(".r-species-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.routineSpecies = btn.dataset.rSpecies || "Dog";
      document
        .querySelectorAll(".r-species-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      updateRoutineView();
    });
  });

  document.querySelectorAll(".r-phase-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.routinePhase = btn.dataset.rPhase || "morning";
      document
        .querySelectorAll(".r-phase-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      updateRoutineView();
    });
  });

  document
    .getElementById("ambient-toggle-btn")
    ?.addEventListener("click", toggleSanctuaryAudio);

  document.getElementById("tag-name-input")?.addEventListener("input", (e) => {
    state.customTag.name = (e.target.value || "MILO")
      .toUpperCase()
      .slice(0, 14);
    updateTagPreview();
    if (state.customTag.attached) updateCountsAndDrawer();
  });

  document.getElementById("tag-note-input")?.addEventListener("input", (e) => {
    state.customTag.note = (e.target.value || "CEDAR MEADOW · HOME SAFE")
      .toUpperCase()
      .slice(0, 26);
    updateTagPreview();
  });

  document.querySelectorAll(".charm-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.customTag.charm = btn.dataset.charm || "KINDFOUND · PAW";
      document
        .querySelectorAll(".charm-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      updateTagPreview();
      if (state.customTag.attached) updateCountsAndDrawer();
    });
  });

  document.getElementById("attach-tag-btn")?.addEventListener("click", () => {
    state.customTag.attached = !state.customTag.attached;
    const btn = document.getElementById("attach-tag-btn");
    const fb = document.getElementById("tag-attach-feedback");
    if (btn) {
      btn.textContent = state.customTag.attached
        ? "Brass Tag Added · Click to Remove"
        : "Attach Free Brass Tag to Visit List";
    }
    if (fb) {
      fb.textContent = state.customTag.attached
        ? `Free brass tag "${state.customTag.name}" bundled into your Meet List.`
        : "";
    }
    updateCountsAndDrawer();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeQuickView();
      closeNewsModal();
      closeDrawer();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initPreloader();
  syncPetCardsDOM();
  syncNewsDOM();
  updateRoutineView();
  updateTagPreview();
  updateCountsAndDrawer();
  initScrollObservers();
  bindEvents();
});
