/**
 * BYNEX PHARMA – Official Client Application Engine
 * Healthcare for a Healthier Tomorrow
 * Official Brand Colors: Primary Red #ED1C24 | Primary Royal Blue #2E3192 | White #FFFFFF
 */

// Official BYNEX PHARMA Product Catalog (verified from official PingMeDoc portfolio)
const OFFICIAL_BYNEX_PRODUCTS = [
  {
    id: "BYN-DYDRO",
    name: "Dydro Ova Tablet",
    molecule: "Dydrogesterone Tablets IP 10 mg",
    composition: "Each film-coated tablet contains: Dydrogesterone IP 10 mg (Approved for Gynecological & Endocrine Therapy)",
    category: "Gynecology & Women's Health",
    dosageForm: "Tablet",
    strength: "10 mg",
    packSize: "10 x 10 Alu-Alu Blister Strip",
    schedule: "Schedule H Prescription Drug",
    status: "Published",
    featured: true,
    image: "/assets/products/dydro-ova-tab.webp",
    storage: "Store below 25°C in a dry place. Protect from moisture and direct sunlight.",
    indications: "Indicated for the treatment of progesterone deficiencies including irregular cycles, luteal phase support in assisted reproductive technology (ART), dysmenorrhea, endometriosis, threatened miscarriage, and dysfunctional uterine bleeding.",
    contraindications: "Restricted to verified medical practitioners. Undiagnosed vaginal bleeding; severe hepatic impairment; history of hormone-dependent neoplasms or venous thromboembolism.",
    pharmacokinetics: "Rapidly absorbed orally. Maximum plasma concentration reached within 0.5 to 2.5 hours. Metabolized predominantly to 20-alpha-dihydrodydrogesterone (DHD).",
    marketer: "BYNEX PHARMA PVT. LTD.",
    manufacturer: "WHO-GMP Certified Hormone & Solid Oral Dosage Facility",
    documents: [
      { name: "Dydro-Ova Clinical Monograph & Efficacy Dossier.pdf", size: "1.8 MB" },
      { name: "SmPC - Summary of Product Characteristics.pdf", size: "920 KB" }
    ]
  },
  {
    id: "BYN-FATIG",
    name: "Fatigfite-5g Softgel Capsule",
    molecule: "5G Vitality & Antioxidant Complex (Ginseng, Ginkgo, Green Tea, Grape Seed, Garlic)",
    composition: "Potent 5G Botanical Extracts: Panax Ginseng, Ginkgo Biloba, Green Tea Extract (EGCG), Grape Seed Extract, Garlic Extract + Multivitamins, Minerals & Amino Acids",
    category: "Nutraceuticals & Vitality",
    dosageForm: "Capsule",
    strength: "5000 mg Vitality Complex",
    packSize: "10 x 1 x 10 Blister Pack",
    schedule: "Therapeutic Health Supplement",
    status: "Published",
    featured: true,
    image: "/assets/products/fatigfite-5g-softgel-cap.webp",
    storage: "Store in a cool, dark and dry place below 25°C. Keep bottle tightly closed.",
    indications: "Chronic physical and mental fatigue, post-viral asthenia, generalized debility, oxidative cellular stress, microvascular circulation impairment, and metabolic exhaustion.",
    contraindications: "Restricted to verified medical practitioners. Hypersensitivity to botanical extracts; bleeding disorders or concurrent high-dose anticoagulant therapy.",
    pharmacokinetics: "Standardized bioflavonoids and ginsenosides facilitate mitochondrial ATP production, enhance peripheral capillary flow, and scavenge free radicals.",
    marketer: "BYNEX PHARMA PVT. LTD.",
    manufacturer: "WHO-GMP Certified Softgel Encapsulation Unit",
    documents: [
      { name: "Fatigfite-5g Scientific Formulation Monograph.pdf", size: "2.1 MB" }
    ]
  },
  {
    id: "BYN-CISO",
    name: "Cisomax Tablet",
    molecule: "Myo-Inositol, D-Chiro-Inositol, L-Methylfolate & Chromium Picolinate",
    composition: "Myo-Inositol 1100 mg + D-Chiro-Inositol 27.5 mg (Physiological 40:1 Ratio) + L-Methylfolate Calcium 1 mg + Chromium Picolinate 100 mcg + Vitamin D3 1000 IU",
    category: "Gynecology & Women's Health",
    dosageForm: "Tablet",
    strength: "40:1 Inositol Synergistic Ratio",
    packSize: "10 x 10 Alu-Alu Blister Strip",
    schedule: "Therapeutic Prescription",
    status: "Published",
    featured: true,
    image: "/assets/products/cisomax-tab.webp",
    storage: "Store below 25°C in a dry place. Protect from heat and moisture.",
    indications: "First-line insulin sensitizer for Polycystic Ovary Syndrome (PCOS), hyperandrogenism, oligomenorrhea, follicular maturation induction, and ovulatory metabolic restoration.",
    contraindications: "Restricted to verified medical practitioners. Hypersensitivity to inositol isomers or folate derivatives.",
    pharmacokinetics: "Myo-inositol acts as second messenger for FSH; D-chiro-inositol mediates peripheral insulin action, restoring ovarian steroidogenesis.",
    marketer: "BYNEX PHARMA PVT. LTD.",
    manufacturer: "WHO-GMP Certified Facility",
    documents: [
      { name: "Cisomax PCOS Endocrine Clinical Study.pdf", size: "2.4 MB" }
    ]
  },
  {
    id: "BYN-ARGI",
    name: "Argi Total Sachet",
    molecule: "L-Arginine, Proanthocyanidins, Folic Acid & Zinc Sachet",
    composition: "Each 5g sachet contains: L-Arginine USP 3 g + Grape Seed Extract (Proanthocyanidins 95%) 75 mg + Folic Acid IP 2.5 mg + Zinc Sulphate Monohydrate eq. to elemental Zinc 12 mg",
    category: "Cardiology & Vascular Health",
    dosageForm: "Sachet",
    strength: "3g L-Arginine Bioactive Matrix",
    packSize: "Box of 10 x 5g Sachets (Delicious Orange Flavour)",
    schedule: "Therapeutic Vascular Nutrition",
    status: "Published",
    featured: true,
    image: "/assets/products/argi-total-sachet.jpg",
    storage: "Store in a cool and dry place. Protect from direct heat and moisture.",
    indications: "Intrauterine Growth Restriction (IUGR), oligohydramnios, pregnancy-induced hypertension / preeclampsia prophylaxis, peripheral arterial endothelial dysfunction, and erectile vascular insufficiency.",
    contraindications: "Restricted to verified medical practitioners. Post-myocardial infarction acute phase; severe renal insufficiency.",
    pharmacokinetics: "L-Arginine serves as the natural biological substrate for endothelial nitric oxide synthase (eNOS), promoting potent vasodilation and uteroplacental blood flow.",
    marketer: "BYNEX PHARMA PVT. LTD.",
    manufacturer: "WHO-GMP Certified Granules & Sachet Division",
    documents: [
      { name: "Argi Total Placental & Vascular Hemodynamics Study.pdf", size: "1.9 MB" }
    ]
  },
  {
    id: "BYN-BON",
    name: "Bon Walk Softgel Capsule",
    molecule: "Cissus Quadrangularis, Boswellia Serrata, Glucosamine & Calcium",
    composition: "Cissus Quadrangularis Extract 500 mg + Boswellia Serrata (AKBA 30%) 100 mg + Glucosamine Sulphate Potassium 750 mg + Calcium Citrate Malate 250 mg + Vitamin D3 400 IU",
    category: "Orthopedics & Joint Care",
    dosageForm: "Capsule",
    strength: "Bioactive Joint Regeneration Matrix",
    packSize: "10 x 10 Alu-Alu Blister Pack",
    schedule: "Prescription Orthopedic Therapeutic",
    status: "Published",
    featured: false,
    image: "/assets/products/bon-walk-softgel-cap.jpg",
    storage: "Store below 25°C. Protect from moisture and light.",
    indications: "Osteoarthritis of knee and hip, accelerated fracture healing, ligamentous and tendon strain, degenerative joint pain, and osteopenia.",
    contraindications: "Restricted to verified medical practitioners. Known shellfish allergy (due to glucosamine derivation); hypercalcemia.",
    pharmacokinetics: "Cissus stimulates osteoblastogenesis and bone alkaline phosphatase. Boswellia AKBA provides potent 5-LOX inflammatory cascade inhibition.",
    marketer: "BYNEX PHARMA PVT. LTD.",
    manufacturer: "WHO-GMP Certified Softgel Division",
    documents: [
      { name: "Bon Walk Cartilage & Bone Regeneration Study.pdf", size: "1.7 MB" }
    ]
  },
  {
    id: "BYN-CHONDRO",
    name: "Chondro Life Tablet",
    molecule: "Glucosamine Sulphate, Chondroitin Sulphate & MSM",
    composition: "Glucosamine Sulphate Potassium Chloride 750 mg + Chondroitin Sulphate Sodium 100 mg + Methylsulfonylmethane (MSM) 250 mg + Hyaluronic Acid 10 mg",
    category: "Orthopedics & Joint Care",
    dosageForm: "Tablet",
    strength: "Chondro-protective Complex",
    packSize: "10 x 10 Blister Pack",
    schedule: "Therapeutic Joint Formulation",
    status: "Published",
    featured: false,
    image: "/assets/products/chondro-life-tab.jpg",
    storage: "Store in a dry place at room temperature.",
    indications: "Cartilage degradation, primary and secondary osteoarthritis, joint stiffness, synovial fluid depletion, and sports musculoskeletal wear.",
    contraindications: "Restricted to verified medical practitioners. Severe hepatic impairment or shellfish allergy.",
    pharmacokinetics: "Exogenous chondroitin and glucosamine serve as structural substrates for proteoglycan biosynthesis in articular cartilage matrix.",
    marketer: "BYNEX PHARMA PVT. LTD.",
    manufacturer: "WHO-GMP Certified Formulation Facility, Unit II",
    documents: [
      { name: "Chondro Life Clinical Trials & Synovial Fluid Synthesis.pdf", size: "1.5 MB" }
    ]
  },
  {
    id: "BYN-IFOL",
    name: "I Fol Dha Softgel Capsule",
    molecule: "L-Methylfolate, DHA, Methylcobalamin, Pyridoxal-5-Phosphate & Vitamin D3",
    composition: "Docosahexaenoic Acid (DHA 40%) 200 mg + L-Methylfolate Calcium 1 mg + Methylcobalamin 1500 mcg + Pyridoxal-5-Phosphate 1.5 mg + Vitamin D3 1000 IU + Iodine 150 mcg",
    category: "Gynecology & Women's Health",
    dosageForm: "Capsule",
    strength: "Active Prenatal Neuro-DHA Matrix",
    packSize: "10 x 10 Alu-Alu Blister Strip",
    schedule: "Therapeutic Prenatal Formulation",
    status: "Published",
    featured: false,
    image: "/assets/products/i-fol-dha-softgel-cap.jpg",
    storage: "Store below 25°C in a dry place. Protect from heat and light.",
    indications: "Preconception, pregnancy and lactation nutritional optimization; neural tube defect prevention; fetal cerebral cortex, retina and nervous system development.",
    contraindications: "Restricted to verified medical practitioners. Hypersensitivity to fish oil / marine omega derivatives.",
    pharmacokinetics: "L-Methylfolate bypasses MTHFR enzymatic polymorphism for 100% active cellular folate delivery. Purified DHA crosses maternal-fetal placental barrier.",
    marketer: "BYNEX PHARMA PVT. LTD.",
    manufacturer: "WHO-GMP Certified Softgel Encapsulation Division",
    documents: [
      { name: "I Fol Dha Fetal Neurodevelopment Clinical Dossier.pdf", size: "2.3 MB" }
    ]
  },
  {
    id: "BYN-MAG60K",
    name: "Mag V3 60K Combikit Tablet",
    molecule: "Cholecalciferol (Vitamin D3) 60,000 IU + Magnesium Bisglycinate & K2-7",
    composition: "Kit contains: [Tablet A]: Cholecalciferol IP 60,000 IU (1 Weekly Tablet) + [Tablet B]: Magnesium Bisglycinate 360 mg + Vitamin K2-7 (Menaquinone-7) 55 mcg (Daily Support Tablets)",
    category: "Nutraceuticals & Vitality",
    dosageForm: "Tablet",
    strength: "60,000 IU High-Potency Combikit",
    packSize: "Targeted Multi-Tablet Weekly Combikit Pack",
    schedule: "Schedule H Prescription Drug",
    status: "Published",
    featured: true,
    image: "/assets/products/mag-v3-60k-combikit-tab.webp",
    storage: "Store in a cool, dry place. Protect from light.",
    indications: "Correction of acute and chronic Vitamin D3 deficiency, metabolic bone disease, osteomalacia, hypocalcemic tetany, refractory rickets, and immune weakness.",
    contraindications: "Restricted to verified medical practitioners. Hypervitaminosis D; hypercalcemia; severe renal osteodystrophy with hyperphosphatemia.",
    pharmacokinetics: "Cholecalciferol is hydroxylated in the liver to 25-hydroxyvitamin D3 and in kidneys to 1,25-dihydroxyvitamin D3. Magnesium is an essential cofactor for 25-hydroxylase enzyme activation.",
    marketer: "BYNEX PHARMA PVT. LTD.",
    manufacturer: "WHO-GMP Certified Solid Dosage Facility",
    documents: [
      { name: "Mag V3 60K Magnesium-Vitamin D3 Synergy Whitepaper.pdf", size: "2.0 MB" }
    ]
  },
  {
    id: "BYN-MAG",
    name: "Mag V3 Tablet",
    molecule: "Magnesium Bisglycinate, Vitamin D3 & Methylcobalamin",
    composition: "Magnesium Bisglycinate eq. to Elemental Magnesium 250 mg + Cholecalciferol (Vitamin D3) IP 1000 IU + Methylcobalamin IP 1500 mcg",
    category: "Neurology & Pain Management",
    dosageForm: "Tablet",
    strength: "250 mg Chelate Complex",
    packSize: "10 x 10 Blister Strip",
    schedule: "Therapeutic Health Formulation",
    status: "Published",
    featured: false,
    image: "/assets/products/mag-v3-tab.jpg",
    storage: "Store in a cool, dry and dark place below 25°C.",
    indications: "Nocturnal leg cramps, neuromuscular irritability, migraine prophylaxis, fibromyalgia muscle tension, cardiovascular rhythm support, and diabetic neuropathy adjunct.",
    contraindications: "Restricted to verified medical practitioners. Severe bradycardia; atrioventricular block; end-stage renal failure.",
    pharmacokinetics: "Amino acid chelated magnesium bisglycinate offers superior bioavailability and zero gastrointestinal laxative irritation compared to inorganic salts.",
    marketer: "BYNEX PHARMA PVT. LTD.",
    manufacturer: "WHO-GMP Certified Facility, Unit I",
    documents: [
      { name: "Mag V3 Neuromuscular Efficacy Monograph.pdf", size: "1.4 MB" }
    ]
  },
  {
    id: "BYN-TINY",
    name: "Tinycal Softgel Capsule",
    molecule: "Calcium Citrate Malate, Calcitriol & Vitamin K2-7",
    composition: "Calcium Citrate Malate 500 mg + Calcitriol IP 0.25 mcg + Vitamin K2-7 50 mcg + Zinc Oxide eq. to Zinc 7.5 mg + Magnesium Oxide 50 mg",
    category: "Orthopedics & Joint Care",
    dosageForm: "Capsule",
    strength: "Triple Action Bone Mineralizer",
    packSize: "10 x 10 Blister Strip",
    schedule: "Therapeutic Mineral Formulation",
    status: "Published",
    featured: false,
    image: "/assets/products/tinycal-softgel-cap.jpg",
    storage: "Store in a cool and dry place below 25°C.",
    indications: "Senile and post-menopausal osteoporosis, osteopenia, calcium malabsorption, pregnancy and lactation calcium demand, and accelerated fracture healing.",
    contraindications: "Restricted to verified medical practitioners. Hypercalcemia, hypercalciuria, calcium renal calculi.",
    pharmacokinetics: "Calcium citrate malate offers highest fractional calcium absorption irrespective of gastric pH; Vitamin K2-7 activates osteocalcin for arterial calcification prevention.",
    marketer: "BYNEX PHARMA PVT. LTD.",
    manufacturer: "WHO-GMP Certified Softgel Division",
    documents: [
      { name: "Tinycal Osteocalcin Activation & Bone Density Study.pdf", size: "1.6 MB" }
    ]
  },
  {
    id: "BYN-HB5",
    name: "Hb-5 Softgel Capsule",
    molecule: "Ferrous Asparto-Glycinate, L-Methylfolate, Methylcobalamin & Zinc",
    composition: "Ferrous Asparto-Glycinate eq. to Elemental Iron 100 mg + L-Methylfolate 1 mg + Methylcobalamin 1500 mcg + Zinc Sulphate 15 mg",
    category: "Hematology & Iron Therapy",
    dosageForm: "Capsule",
    strength: "100 mg Non-Constipating Amino Iron",
    packSize: "10 x 10 Blister Strip",
    schedule: "Prescription Hematopoietic Agent",
    status: "Published",
    featured: false,
    image: "/assets/products/hb-5-softgel-cap.webp",
    storage: "Store below 25°C. Protect from moisture and direct sunlight.",
    indications: "Iron deficiency anemia (IDA), pregnancy-induced anemia, heavy menstrual blood loss, nutritional macrocytic and microcytic anemias, and post-surgical hemoglobin recovery.",
    contraindications: "Restricted to verified medical practitioners. Hemochromatosis, hemosiderosis, hemolytic anemia.",
    pharmacokinetics: "Amino acid chelated ferrous asparto-glycinate is absorbed intact via mucosal peptide channels, avoiding gastric irritation and constipation.",
    marketer: "BYNEX PHARMA PVT. LTD.",
    manufacturer: "WHO-GMP Certified Softgel Unit",
    documents: [
      { name: "Hb-5 Hemoglobin Reconstitution Clinical Dossier.pdf", size: "1.9 MB" }
    ]
  }
];

// Seed Resources / Downloads
const DEFAULT_RESOURCES = [
  {
    id: "RES-01",
    title: "BYNEX PHARMA Corporate Product Compendium 2026",
    category: "Product Brochures",
    date: "November 2026",
    size: "4.8 MB",
    type: "PDF Document",
    access: "Public"
  },
  {
    id: "RES-02",
    title: "Dydro-Ova: Hormonal Protocols in Modern Reproductive Medicine",
    category: "Clinical Monographs",
    date: "October 2026",
    size: "2.1 MB",
    type: "Scientific Dossier",
    access: "HCP Only"
  },
  {
    id: "RES-03",
    title: "WHO-GMP Quality Assurance & Facility Compliance Certification",
    category: "Regulatory Declarations",
    date: "August 2026",
    size: "1.2 MB",
    type: "Accreditation",
    access: "Public"
  },
  {
    id: "RES-04",
    title: "Cardio-Placental Hemodynamics in Pregnancy with Argi-Total Matrix",
    category: "Clinical Monographs",
    date: "September 2026",
    size: "3.4 MB",
    type: "Whitepaper",
    access: "HCP Only"
  }
];

// Seed Doctor Registrations
const DEFAULT_DOCTORS = [
  {
    id: "DOC-8021",
    name: "Dr. Rajeshwar Rao",
    regNumber: "MCI-48291-MH",
    council: "Maharashtra Medical Council",
    speciality: "Obstetrics & Gynecology",
    affiliation: "Apex Super Specialty Hospital, Mumbai",
    email: "dr.rao@apexhealth.org",
    phone: "+91 98201 44521",
    status: "Verified"
  },
  {
    id: "DOC-8022",
    name: "Dr. Ananya Sengupta",
    regNumber: "WBMC-92810",
    council: "West Bengal Medical Council",
    speciality: "Orthopedic Surgeon & Joint Specialist",
    affiliation: "Apollo Gleneagles Hospital, Kolkata",
    email: "dr.ananya@gastromedic.in",
    phone: "+91 94330 88219",
    status: "Pending"
  }
];

// Seed Commercial Enquiries
const DEFAULT_ENQUIRIES = [
  {
    id: "ENQ-9401",
    type: "Distributor",
    firm: "Mediswift Pharma Logistics & Dist.",
    contact: "Mr. Harish Mehta",
    territory: "Western Region (Pune, Nashik)",
    drugLicense: "MH-PZ-104921",
    status: "New",
    date: "Today",
    phone: "+91 98220 54109",
    email: "commercial@mediswift.com",
    notes: "Super stockist allocation inquiry for Dydro-Ova & Argi-Total lines."
  }
];

class Store {
  constructor() {
    let prods = this.load('bynex_v3_products', null);
    if (!prods || !Array.isArray(prods) || prods.length < 11 || !prods.find(p => p.id === 'BYN-DYDRO')) {
      prods = OFFICIAL_BYNEX_PRODUCTS;
      this.save('bynex_v3_products', prods);
    }
    this.products = prods;
    this.resources = this.load('bynex_v3_resources', DEFAULT_RESOURCES);
    this.doctors = this.load('bynex_v3_doctors', DEFAULT_DOCTORS);
    this.enquiries = this.load('bynex_v3_enquiries', DEFAULT_ENQUIRIES);
    this.currentUser = this.load('bynex_v3_auth_user', null);
  }

  load(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch(e) {
      return fallback;
    }
  }

  save(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch(e) {}
  }

  setDoctorAuth(doctor) {
    this.currentUser = doctor ? { role: 'doctor', ...doctor } : null;
    this.save('bynex_v3_auth_user', this.currentUser);
  }

  logout() {
    this.currentUser = null;
    this.save('bynex_v3_auth_user', null);
  }

  updateProductStatus(productId, newStatus) {
    const prod = this.products.find(p => p.id === productId);
    if (prod) {
      prod.status = newStatus;
      this.save('bynex_v3_products', this.products);
      return true;
    }
    return false;
  }

  addProduct(product) {
    this.products.unshift(product);
    this.save('bynex_v3_products', this.products);
  }

  updateDoctorStatus(docId, newStatus) {
    const doc = this.doctors.find(d => d.id === docId);
    if (doc) {
      doc.status = newStatus;
      this.save('bynex_v3_doctors', this.doctors);
      return true;
    }
    return false;
  }

  addEnquiry(enquiry) {
    this.enquiries.unshift(enquiry);
    this.save('bynex_v3_enquiries', this.enquiries);
  }
}

window.BynexApp = {
  store: new Store(),
  currentRoute: 'home',
  selectedProductId: null,
  activeAdminTab: 'overview',
  productFilters: {
    search: '',
    category: 'All',
    dosage: 'All'
  },

  init() {
    // Smooth preloader dismiss on page load
    window.addEventListener('load', () => {
      const preloader = document.getElementById('global-preloader');
      if (preloader) {
        setTimeout(() => preloader.classList.add('fade-out'), 350);
      }
    });
    // Fallback dismiss in case load already fired
    setTimeout(() => {
      const preloader = document.getElementById('global-preloader');
      if (preloader && !preloader.classList.contains('fade-out')) {
        preloader.classList.add('fade-out');
      }
    }, 600);

    window.addEventListener('hashchange', () => this.handleRoute());
    this.handleRoute();
  },

  triggerPageLoader() {
    const bar = document.getElementById('page-loader-bar');
    if (!bar) return;
    bar.style.opacity = '1';
    bar.style.width = '30%';
    setTimeout(() => { bar.style.width = '75%'; }, 120);
    setTimeout(() => {
      bar.style.width = '100%';
      setTimeout(() => {
        bar.style.opacity = '0';
        setTimeout(() => { bar.style.width = '0%'; }, 250);
      }, 180);
    }, 280);
  },

  initScrollAnimations() {
    const targets = document.querySelectorAll('.reveal-on-scroll, .pharma-product-card, .card-hover-effect');
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

      targets.forEach((el, idx) => {
        el.classList.add('reveal-on-scroll');
        if (!el.classList.contains('delay-75') && !el.classList.contains('delay-150') && !el.classList.contains('delay-225') && !el.classList.contains('delay-300')) {
          const delayClass = `delay-${(idx % 4 + 1) * 75}`;
          el.classList.add(delayClass);
        }
        observer.observe(el);
      });
    } else {
      targets.forEach(el => el.classList.add('is-revealed'));
    }
  },

  showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    const bgClass = type === 'success' ? 'bg-emerald-600 text-white' : 'bg-slate-900 text-white';
    toast.className = `flex items-center gap-3 px-5 py-3 rounded-xl shadow-xl text-sm font-medium transition-all duration-300 transform translate-y-2 opacity-0 ${bgClass}`;
    toast.innerHTML = `<span>${message}</span>`;

    container.appendChild(toast);
    setTimeout(() => toast.classList.remove('translate-y-2', 'opacity-0'), 20);
    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-2');
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  },

  toggleMobileMenu() {
    const drawer = document.getElementById('mobile-drawer');
    if (!drawer) return;
    const isHidden = drawer.classList.contains('hidden');
    if (isHidden) {
      drawer.classList.remove('hidden');
      const input = document.getElementById('mobile-drawer-search');
      if (input) setTimeout(() => input.focus(), 120);
    } else {
      drawer.classList.add('hidden');
    }
  },

  closeMobileMenu() {
    const drawer = document.getElementById('mobile-drawer');
    if (drawer && !drawer.classList.contains('hidden')) {
      drawer.classList.add('hidden');
    }
  },

  navigateToSearch(query) {
    if (!query) return;
    this.closeMobileMenu();
    window.location.hash = `#/products?search=${encodeURIComponent(query.trim())}`;
  },

  handleRoute() {
    this.closeMobileMenu();
    this.triggerPageLoader();

    const hash = window.location.hash.replace(/^#\/?/, '') || 'home';
    const [path, queryStr] = hash.split('?');
    const params = new URLSearchParams(queryStr);

    this.currentRoute = path;

    document.querySelectorAll('.app-page-view').forEach(view => view.classList.add('hidden'));

    document.querySelectorAll('.nav-link-item').forEach(link => {
      if (link.dataset.page === path) {
        link.classList.add('text-[#2E3192]', 'font-bold', 'border-b-2', 'border-[#2E3192]');
        link.classList.remove('text-[#172033]', 'font-medium');
      } else {
        link.classList.remove('text-[#2E3192]', 'font-bold', 'border-b-2', 'border-[#2E3192]');
        link.classList.add('text-[#172033]', 'font-medium');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (path === 'home') this.renderHome();
    else if (path === 'products') {
      if (params.get('search')) this.productFilters.search = params.get('search');
      if (params.get('category')) this.productFilters.category = params.get('category');
      this.renderProducts();
    }
    else if (path === 'product-detail') this.renderProductDetail(params.get('id') || 'BYN-DYDRO');
    else if (path === 'about') this.renderAbout();
    else if (path === 'doctors' || path === 'doctor-auth') this.renderDoctorPortal();
    else if (path === 'resources') this.renderResources();
    else if (path === 'partner') this.renderPartner();
    else if (path === 'contact') this.renderContact();
    else if (path === 'admin') this.renderAdmin(params.get('tab') || 'overview');
    else this.renderHome();

    setTimeout(() => this.initScrollAnimations(), 60);
  },

  renderHome() {
    const page = document.getElementById('page-home');
    if (!page) return;
    page.classList.remove('hidden');

    const featuredContainer = document.getElementById('home-featured-products');
    if (featuredContainer) {
      const published = this.store.products.filter(p => p.status === 'Published');
      const featured = published.slice(0, 4);

      featuredContainer.innerHTML = featured.map(prod => this.buildProductCardHtml(prod)).join('');
    }
  },

  buildProductCardHtml(prod) {
    return `
      <div class="pharma-product-card p-5 sm:p-6 flex flex-col justify-between">
        <div>
          <!-- Card Header Badges -->
          <div class="flex items-center justify-between gap-2 mb-4">
            <span class="badge-category px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold truncate max-w-[70%]">${prod.category}</span>
            <span class="badge-rx px-2 sm:px-2.5 py-0.5 rounded text-[10px] sm:text-[11px] flex-shrink-0">${prod.dosageForm.toUpperCase()}</span>
          </div>

          <!-- Studio Mockup Frame with Real Packaging Image -->
          <div class="pharma-pack-frame h-48 sm:h-52 mb-4 sm:mb-5 p-3 sm:p-4 flex items-center justify-center">
            <img src="${prod.image}" alt="${prod.name}" class="max-h-40 sm:max-h-44 w-auto max-w-full object-contain pointer-events-none" loading="lazy" />
          </div>

          <!-- Product Identifiers -->
          <span class="text-[10px] font-black tracking-widest text-[#2E3192] uppercase block">BYNEX PHARMA</span>
          <h3 class="text-lg sm:text-xl font-black text-[#172033] hover:text-[#2E3192] transition mt-1">
            <a href="#/product-detail?id=${prod.id}">${prod.name}</a>
          </h3>
          <p class="text-xs font-medium text-[#64748B] mt-1 line-clamp-2">${prod.molecule}</p>
          
          <div class="mt-3 flex flex-wrap items-center gap-2">
            <span class="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded font-bold border border-slate-200">
              ${prod.strength}
            </span>
            <span class="text-[11px] bg-blue-50 text-[#2E3192] border border-blue-200 px-2.5 py-0.5 rounded font-semibold">
              ${prod.packSize}
            </span>
          </div>
        </div>

        <!-- Action CTA -->
        <div class="mt-5 sm:mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
          <a href="#/product-detail?id=${prod.id}" class="flex-1 text-center py-2.5 px-2 sm:px-3 rounded-xl bg-[#2E3192] hover:bg-[#222575] text-white text-[11px] sm:text-xs font-bold transition shadow-sm whitespace-nowrap">
            View Approved Monograph
          </a>
          <button onclick="BynexApp.openMedicalEnquiryModal('${prod.name}')" title="Submit Medical Enquiry" class="p-2.5 rounded-xl border border-slate-200 hover:border-[#ED1C24] hover:text-[#ED1C24] text-slate-500 transition flex-shrink-0">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </button>
        </div>
      </div>
    `;
  },

  renderProducts() {
    const page = document.getElementById('page-products');
    if (!page) return;
    page.classList.remove('hidden');

    const searchInput = document.getElementById('product-search-input');
    const categorySelect = document.getElementById('product-category-filter');
    const dosageSelect = document.getElementById('product-dosage-filter');

    if (searchInput) searchInput.value = this.productFilters.search;
    if (categorySelect) categorySelect.value = this.productFilters.category;
    if (dosageSelect) dosageSelect.value = this.productFilters.dosage;

    this.filterAndRenderProductGrid();
  },

  filterAndRenderProductGrid() {
    const container = document.getElementById('products-grid-container');
    if (!container) return;

    const term = (this.productFilters.search || '').toLowerCase().trim();
    const cat = this.productFilters.category;
    const dos = this.productFilters.dosage;

    const filtered = this.store.products.filter(p => {
      const isVisible = p.status === 'Published' || p.status === 'Approved';
      if (!isVisible) return false;

      const matchesSearch = !term ||
        p.name.toLowerCase().includes(term) ||
        p.molecule.toLowerCase().includes(term) ||
        p.composition.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term);

      const matchesCat = (cat === 'All' || p.category === cat);
      const matchesDos = (dos === 'All' || p.dosageForm === dos);

      return matchesSearch && matchesCat && matchesDos;
    });

    const countBadge = document.getElementById('product-results-count');
    if (countBadge) {
      countBadge.textContent = `${filtered.length} Approved Formulation${filtered.length === 1 ? '' : 's'} Available`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-16 text-center bg-white rounded-2xl border border-dashed border-slate-300">
          <h4 class="text-base font-bold text-slate-800">No matching pharmaceutical formulations found</h4>
          <p class="text-xs text-slate-500 mt-1">Try broadening your search term or clearing filters.</p>
          <button onclick="BynexApp.clearProductFilters()" class="mt-4 px-4 py-2 rounded-lg bg-[#2E3192] text-white text-xs font-semibold hover:bg-[#222575]">
            Reset Filters
          </button>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(prod => this.buildProductCardHtml(prod)).join('');
  },

  clearProductFilters() {
    this.productFilters = { search: '', category: 'All', dosage: 'All' };
    const searchInput = document.getElementById('product-search-input');
    const categorySelect = document.getElementById('product-category-filter');
    const dosageSelect = document.getElementById('product-dosage-filter');
    if (searchInput) searchInput.value = '';
    if (categorySelect) categorySelect.value = 'All';
    if (dosageSelect) dosageSelect.value = 'All';
    this.filterAndRenderProductGrid();
  },

  onProductSearchChange(val) {
    this.productFilters.search = val;
    this.filterAndRenderProductGrid();
  },

  onCategoryFilterChange(val) {
    this.productFilters.category = val;
    this.filterAndRenderProductGrid();
  },

  onDosageFilterChange(val) {
    this.productFilters.dosage = val;
    this.filterAndRenderProductGrid();
  },

  renderProductDetail(prodId) {
    const page = document.getElementById('page-product-detail');
    if (!page) return;
    page.classList.remove('hidden');

    const prod = this.store.products.find(p => p.id === prodId) || this.store.products[0];
    this.selectedProductId = prod.id;
    const isDoctor = this.store.currentUser && this.store.currentUser.role === 'doctor';

    const container = document.getElementById('product-detail-view-container');
    if (!container) return;

    container.innerHTML = `
      <div class="mb-6 flex items-center gap-2 text-xs text-slate-500">
        <a href="#/home" class="hover:text-[#2E3192]">Home</a>
        <span>/</span>
        <a href="#/products" class="hover:text-[#2E3192]">Products</a>
        <span>/</span>
        <span class="text-slate-800 font-semibold">${prod.name}</span>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- Left: Packaging Showcase Card -->
        <div class="lg:col-span-5 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-200/90 shadow-sm lg:sticky lg:top-28">
          <div class="flex items-center justify-between gap-2 mb-4">
            <span class="badge-category px-3 py-1 rounded-full text-xs font-bold truncate">${prod.category}</span>
            <span class="badge-rx px-2.5 py-1 rounded text-xs flex-shrink-0">${prod.schedule}</span>
          </div>

          <!-- High-End Product Photo Showcase -->
          <div class="pharma-pack-frame h-64 sm:h-80 rounded-2xl p-4 sm:p-6 flex flex-col justify-center items-center text-center my-4 sm:my-6 shadow-inner">
            <img src="${prod.image}" alt="${prod.name}" class="max-h-52 sm:max-h-64 max-w-full object-contain" />
          </div>

          <div class="space-y-2 pt-4 border-t border-slate-100 text-xs">
            <div class="flex flex-col sm:flex-row sm:justify-between py-1.5 border-b border-slate-100 gap-0.5">
              <span class="text-slate-500 font-medium">Strength:</span>
              <span class="font-bold text-slate-800">${prod.strength}</span>
            </div>
            <div class="flex flex-col sm:flex-row sm:justify-between py-1.5 border-b border-slate-100 gap-0.5">
              <span class="text-slate-500 font-medium">Dosage Form:</span>
              <span class="font-bold text-slate-800">${prod.dosageForm}</span>
            </div>
            <div class="flex flex-col sm:flex-row sm:justify-between py-1.5 border-b border-slate-100 gap-0.5">
              <span class="text-slate-500 font-medium">Packaging Presentation:</span>
              <span class="font-bold text-slate-800">${prod.packSize}</span>
            </div>
            <div class="flex flex-col sm:flex-row sm:justify-between py-1.5 border-b border-slate-100 gap-0.5">
              <span class="text-slate-500 font-medium">Storage Requirements:</span>
              <span class="font-medium text-slate-800">${prod.storage}</span>
            </div>
            <div class="flex flex-col sm:flex-row sm:justify-between py-1.5 border-b border-slate-100 gap-0.5">
              <span class="text-slate-500 font-medium">Marketer:</span>
              <span class="font-bold text-slate-800">${prod.marketer}</span>
            </div>
            <div class="flex flex-col sm:flex-row sm:justify-between py-1.5 gap-0.5">
              <span class="text-slate-500 font-medium">Manufacturing Quality:</span>
              <span class="font-medium text-slate-800">${prod.manufacturer}</span>
            </div>
          </div>

          <div class="mt-6 sm:mt-8 space-y-3">
            <button onclick="BynexApp.openMedicalEnquiryModal('${prod.name}')" class="w-full py-3.5 px-4 rounded-xl bg-[#ED1C24] hover:bg-[#D0141B] text-white text-xs font-bold tracking-wide uppercase shadow-sm transition">
              Submit Medical Information Enquiry
            </button>
            <a href="#/partner" class="w-full block text-center py-2.5 px-4 rounded-xl border border-[#2E3192] text-[#2E3192] hover:bg-[#2E3192]/5 text-xs font-bold transition">
              Distributor & Commercial Supply Enquiry
            </a>
          </div>
        </div>

        <!-- Right: Approved Monograph & Clinical Data -->
        <div class="lg:col-span-7 space-y-6">
          <div class="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-200/90 shadow-sm">
            <span class="text-xs font-extrabold text-[#2E3192] tracking-wider uppercase">Official Product Monograph</span>
            <h1 class="text-2xl lg:text-3xl font-extrabold text-[#172033] mt-1">${prod.name}</h1>
            <p class="text-sm font-semibold text-slate-600 mt-2">${prod.molecule}</p>

            <div class="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h4 class="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Approved Composition Breakdown</h4>
              <p class="text-xs text-slate-700 leading-relaxed font-mono">${prod.composition}</p>
            </div>

            <div class="mt-6">
              <h3 class="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-[#2E3192]"></span>
                Approved Clinical Indications
              </h3>
              <p class="text-xs text-slate-600 leading-relaxed">${prod.indications}</p>
            </div>

            <div class="mt-6">
              <h3 class="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-[#2E3192]"></span>
                Clinical Pharmacology & Pharmacokinetics
              </h3>
              <p class="text-xs text-slate-600 leading-relaxed">${prod.pharmacokinetics}</p>
            </div>
          </div>

          <!-- APPROVED PRESCRIBING & CLINICAL GUIDANCE -->
          <div class="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm relative overflow-hidden">
            <div class="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <h3 class="text-base font-bold text-slate-900">Approved Prescribing & Clinical Guidance</h3>
                <p class="text-xs text-slate-500">Contraindications, hepatic/renal considerations and drug interactions</p>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-[#2E3192] border border-blue-200">
                Prescription Guidance
              </span>
            </div>

            <div class="mt-6 space-y-4 text-xs">
              <div>
                <h4 class="font-bold text-slate-800 mb-1 flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#ED1C24]"></span>
                  Clinical Contraindications & Warnings:
                </h4>
                <p class="text-slate-600 leading-relaxed">${prod.contraindications}</p>
              </div>
              <div>
                <h4 class="font-bold text-slate-800 mb-1 flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#2E3192]"></span>
                  Drug-Drug Interactions & Hepatorenal Dosing:
                </h4>
                <p class="text-slate-600 leading-relaxed">Concomitant administration with oral anticoagulants or potent CYP enzyme inducers requires periodic monitoring. Dose reduction advised in severe renal insufficiency.</p>
              </div>
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-500 text-[11px] leading-relaxed">
                <strong>Statutory Medical Notice:</strong> Formulations listed are for the professional reference of registered medical practitioners, hospitals, and pharmacies. Dispensation is strictly subject to valid prescription under applicable drug rules.
              </div>
            </div>
          </div>

          <!-- Document Downloads -->
          <div class="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm">
            <h3 class="text-base font-bold text-slate-900 mb-4">Approved Product Documentation & Dossiers</h3>
            <div class="space-y-3">
              ${(prod.documents || []).map(doc => `
                <div class="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div>
                    <h5 class="text-xs font-bold text-slate-800">${doc.name}</h5>
                    <span class="text-[11px] text-slate-500">PDF Document • ${doc.size}</span>
                  </div>
                  <button onclick="BynexApp.showToast('Downloading dossier: ${doc.name}')" class="px-3.5 py-1.5 rounded-lg bg-white border border-slate-300 text-[#2E3192] text-xs font-bold hover:bg-[#2E3192] hover:text-white transition shadow-sm">
                    Download
                  </button>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  },

  renderAbout() {
    const page = document.getElementById('page-about');
    if (!page) return;
    page.classList.remove('hidden');
  },

  renderDoctorPortal() {
    const page = document.getElementById('page-doctors');
    if (!page) return;
    page.classList.remove('hidden');

    const container = document.getElementById('doctor-portal-content');
    if (!container) return;

    container.innerHTML = `
      <div class="space-y-10">
        <!-- Header Banner -->
        <div class="bg-gradient-to-r from-[#2E3192] to-[#1E2260] rounded-3xl p-8 lg:p-10 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 reveal-on-scroll">
          <div>
            <span class="text-xs font-bold tracking-wider text-red-300 uppercase">Healthcare Professionals & Clinical Affairs</span>
            <h1 class="text-2xl lg:text-4xl font-extrabold mt-1">Clinical Portfolio & Medical Gateway</h1>
            <p class="text-xs sm:text-sm text-blue-100 mt-2 max-w-2xl leading-relaxed">
              Open clinical reference access for medical practitioners, hospital formularies, and clinical researchers. Access full prescribing monographs, therapeutic guidelines, and request trial evaluation samples.
            </p>
          </div>
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button onclick="BynexApp.openSampleRequestModal()" class="px-5 py-3 rounded-xl bg-[#ED1C24] hover:bg-[#D0141B] text-white text-xs font-bold uppercase tracking-wider transition shadow-lg text-center">
              Request Physician Samples
            </button>
            <a href="#/products" class="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition text-center">
              Browse Formulations
            </a>
          </div>
        </div>

        <!-- 3 Feature Pillars -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm reveal-on-scroll delay-75">
            <div class="w-10 h-10 rounded-xl bg-blue-50 text-[#2E3192] flex items-center justify-center font-bold text-lg mb-3">📋</div>
            <h3 class="text-base font-bold text-slate-800">Approved Prescribing Monographs</h3>
            <p class="text-xs text-slate-500 mt-1 leading-relaxed">
              Access complete molecular monographs, verified active ingredients, therapeutic indications, and pharmacokinetic parameters across all 11 formulations.
            </p>
            <a href="#/products" class="inline-block mt-4 text-xs font-bold text-[#2E3192] hover:underline">View All Monographs →</a>
          </div>

          <div class="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm reveal-on-scroll delay-150">
            <div class="w-10 h-10 rounded-xl bg-red-50 text-[#ED1C24] flex items-center justify-center font-bold text-lg mb-3">💊</div>
            <h3 class="text-base font-bold text-slate-800">Physician Trial Samples</h3>
            <p class="text-xs text-slate-500 mt-1 leading-relaxed">
              Request starter kits and evaluation packs for clinical observation in hospital departments and outpatient clinics across India.
            </p>
            <button onclick="BynexApp.openSampleRequestModal()" class="mt-4 text-xs font-bold text-[#ED1C24] hover:underline">
              Submit Sample Request →
            </button>
          </div>

          <div class="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm reveal-on-scroll delay-225">
            <div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-lg mb-3">🔬</div>
            <h3 class="text-base font-bold text-slate-800">Medical Affairs Inquiry</h3>
            <p class="text-xs text-slate-500 mt-1 leading-relaxed">
              Direct communication link with BYNEX PHARMA's pharmacology and regulatory medical cell for trial citations or clinical questions.
            </p>
            <button onclick="BynexApp.openMedicalEnquiryModal('Medical Affairs Clinical Enquiry')" class="mt-4 text-xs font-bold text-emerald-700 hover:underline">
              Submit Clinical Query →
            </button>
          </div>
        </div>

        <!-- Sample Requisition Inline Card -->
        <div class="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200/90 shadow-sm reveal-on-scroll">
          <div class="max-w-2xl">
            <span class="badge-category px-3.5 py-1 rounded-full text-xs font-bold uppercase">Physician Support</span>
            <h2 class="text-2xl font-extrabold text-[#172033] mt-2">Physician Academic Sample Requisition</h2>
            <p class="text-xs sm:text-sm text-slate-500 mt-1">
              Qualified medical practitioners may request clinical evaluation packs for in-clinic assessment.
            </p>
          </div>

          <form onsubmit="BynexApp.handleDoctorSampleSubmit(event)" class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label class="block font-semibold text-slate-700 mb-1">Doctor Name *</label>
              <input type="text" id="doc-sample-name" required placeholder="Dr. ..." class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 form-input-focus" />
            </div>
            <div>
              <label class="block font-semibold text-slate-700 mb-1">Medical Registration No. / Council *</label>
              <input type="text" id="doc-sample-reg" required placeholder="e.g. MCI / State Reg. No." class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 form-input-focus" />
            </div>
            <div>
              <label class="block font-semibold text-slate-700 mb-1">Hospital / Clinic / Affiliation *</label>
              <input type="text" id="doc-sample-hosp" required placeholder="Hospital or Clinic Name" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 form-input-focus" />
            </div>
            <div>
              <label class="block font-semibold text-slate-700 mb-1">City / Location *</label>
              <input type="text" id="doc-sample-city" required placeholder="City, State" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 form-input-focus" />
            </div>
            <div class="sm:col-span-2">
              <label class="block font-semibold text-slate-700 mb-1">Requested Formulations *</label>
              <select id="doc-sample-product" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 form-input-focus bg-white">
                <option value="Dydro Ova Tablet">Dydro Ova Tablet (Dydrogesterone 10mg)</option>
                <option value="Cisomax Tablet">Cisomax Tablet (Myo-Inositol & D-Chiro-Inositol 40:1)</option>
                <option value="Fatigfite-5g Softgel Capsule">Fatigfite-5g Softgel Capsule (5G Vitality Complex)</option>
                <option value="Bon Walk Softgel Capsule">Bon Walk Softgel Capsule (Cissus & Boswellia Joint Matrix)</option>
                <option value="Chondro Life Tablet">Chondro Life Tablet (Glucosamine & Chondroitin)</option>
                <option value="Tinycal Softgel Capsule">Tinycal Softgel Capsule (CCM + Calcitriol + K2-7)</option>
                <option value="I Fol Dha Softgel Capsule">I Fol Dha Softgel Capsule (Active Prenatal DHA)</option>
                <option value="Hb-5 Softgel Capsule">Hb-5 Softgel Capsule (Ferrous Asparto-Glycinate)</option>
                <option value="Argi Total Sachet">Argi Total Sachet (L-Arginine & Proanthocyanidins)</option>
                <option value="Mag V3 60K Combikit Tablet">Mag V3 60K Combikit Tablet (Vit D3 + Magnesium)</option>
                <option value="Mag V3 Tablet">Mag V3 Tablet (Magnesium Bisglycinate Chelate)</option>
              </select>
            </div>
            <div class="sm:col-span-2 pt-2">
              <button type="submit" class="px-6 py-3 rounded-xl bg-[#2E3192] hover:bg-[#222575] text-white text-xs font-bold uppercase tracking-wider transition shadow-sm">
                Submit Sample Requisition
              </button>
            </div>
          </form>
        </div>
      </div>
    `;
  },

  openSampleRequestModal() {
    this.openMedicalEnquiryModal('Physician Evaluation Sample Request');
  },

  handleDoctorSampleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('doc-sample-name')?.value || 'Doctor';
    const reg = document.getElementById('doc-sample-reg')?.value || 'N/A';
    const hosp = document.getElementById('doc-sample-hosp')?.value || 'N/A';
    const city = document.getElementById('doc-sample-city')?.value || 'N/A';
    const prod = document.getElementById('doc-sample-product')?.value || 'Formulation';

    this.dispatchEnquiryToEmail({
      type: "Physician Academic Sample Requisition",
      name: name,
      contact: name,
      registrationNo: reg,
      firm: hosp,
      territory: city,
      product: prod,
      email: "bynexpharma@gmail.com",
      phone: "Requested through Doctor Portal",
      message: `Physician sample pack request for ${prod}. Practitioner: ${name}, Registration: ${reg}, Institution: ${hosp}, City: ${city}.`
    });
    e.target.reset();
  },

  dispatchEnquiryToEmail(data) {
    const inquiryId = 'BYN-' + Date.now().toString(36).toUpperCase();
    data.id = inquiryId;
    data.status = 'New';
    data.date = 'Just now';

    // Store locally for Admin view
    this.store.addEnquiry(data);

    // Send to server API endpoint (formats corporate email & relays)
    try {
      fetch('/api/send-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }).catch(() => {});
    } catch(err) {}

    // Show Confirmation & Corporate Email Preview Modal
    this.showEnquirySentModal(data, inquiryId);
    this.showToast(`Enquiry ${inquiryId} dispatched to bynexpharma@gmail.com!`);
  },

  showEnquirySentModal(data, inquiryId) {
    const modal = document.getElementById('enquiry-sent-modal');
    if (!modal) return;

    const idElem = document.getElementById('preview-inquiry-id');
    if (idElem) idElem.textContent = inquiryId;

    const detailsElem = document.getElementById('preview-inquiry-details');
    if (detailsElem) {
      detailsElem.innerHTML = `
        <div class="space-y-1.5 pb-2.5 border-b border-slate-100">
          <div class="flex justify-between"><span class="text-slate-400 font-semibold">Enquiry Type:</span><span class="font-bold text-[#2E3192]">${data.type || 'Corporate Enquiry'}</span></div>
          <div class="flex justify-between"><span class="text-slate-400 font-semibold">Inquirer Name:</span><span class="font-bold text-slate-800">${data.name || data.contact || 'N/A'}</span></div>
          <div class="flex justify-between"><span class="text-slate-400 font-semibold">Email:</span><span class="text-slate-700">${data.email || 'N/A'}</span></div>
          <div class="flex justify-between"><span class="text-slate-400 font-semibold">Phone:</span><span class="text-slate-700">${data.phone || 'N/A'}</span></div>
          ${data.firm ? `<div class="flex justify-between"><span class="text-slate-400 font-semibold">Organization:</span><span class="font-bold text-slate-800">${data.firm}</span></div>` : ''}
          ${data.drugLicense ? `<div class="flex justify-between"><span class="text-slate-400 font-semibold">Drug License (DL):</span><span class="font-mono text-slate-700 font-bold">${data.drugLicense}</span></div>` : ''}
          ${data.territory ? `<div class="flex justify-between"><span class="text-slate-400 font-semibold">Territory:</span><span class="text-slate-700">${data.territory}</span></div>` : ''}
          ${data.product ? `<div class="flex justify-between"><span class="text-slate-400 font-semibold">Subject Product:</span><span class="font-bold text-[#ED1C24]">${data.product}</span></div>` : ''}
        </div>
        ${(data.message || data.notes || data.question) ? `
          <div class="pt-2 text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-200/80 text-[11px] leading-relaxed">
            <strong class="text-slate-800 block mb-0.5">Message / Specification:</strong>
            ${data.message || data.notes || data.question}
          </div>
        ` : ''}
      `;
    }

    const mailSubject = encodeURIComponent(`[BYNEX PHARMA] ${data.type || 'Enquiry'} - Ref: ${inquiryId}`);
    const mailBody = encodeURIComponent(
      `BYNEX PHARMA Corporate Enquiry (Ref: ${inquiryId})\n` +
      `-----------------------------------------\n` +
      `Category: ${data.type || 'General'}\n` +
      `Name: ${data.name || data.contact || 'N/A'}\n` +
      `Email: ${data.email || 'N/A'}\n` +
      `Phone: ${data.phone || 'N/A'}\n` +
      (data.firm ? `Organization: ${data.firm}\n` : '') +
      (data.drugLicense ? `Drug License: ${data.drugLicense}\n` : '') +
      (data.territory ? `Territory: ${data.territory}\n` : '') +
      (data.product ? `Product: ${data.product}\n` : '') +
      `\nDetails:\n${data.message || data.notes || data.question || ''}\n\n` +
      `Submitted via BYNEX PHARMA Platform\nFounder: Muthuraj`
    );

    const gmailLink = document.getElementById('enquiry-gmail-link');
    if (gmailLink) {
      gmailLink.href = `mailto:bynexpharma@gmail.com?subject=${mailSubject}&body=${mailBody}`;
    }

    modal.classList.remove('hidden');
  },

  renderResources() {
    const page = document.getElementById('page-resources');
    if (!page) return;
    page.classList.remove('hidden');

    const container = document.getElementById('resources-list-container');
    if (!container) return;

    container.innerHTML = this.store.resources.map(res => `
      <div class="card-hover-effect bg-white rounded-2xl p-6 border border-slate-200/90 flex flex-col justify-between">
        <div>
          <span class="badge-category px-3 py-1 rounded-full text-xs font-semibold">${res.category}</span>
          <h3 class="text-base font-bold text-slate-900 mt-3 mb-2">${res.title}</h3>
          <p class="text-xs text-slate-500">${res.type} • ${res.date}</p>
        </div>
        <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span class="text-xs text-slate-400 font-medium">${res.size}</span>
          <button onclick="BynexApp.showToast('Downloading: ${res.title}')" class="px-3.5 py-1.5 rounded-lg bg-[#2E3192] hover:bg-[#222575] text-white text-xs font-bold transition">
            Download PDF
          </button>
        </div>
      </div>
    `).join('');
  },

  renderPartner() {
    const page = document.getElementById('page-partner');
    if (!page) return;
    page.classList.remove('hidden');
  },

  handlePartnerFormSubmit(e) {
    e.preventDefault();
    const firm = document.getElementById('partner-firm')?.value;
    const contact = document.getElementById('partner-contact')?.value;
    const email = document.getElementById('partner-email')?.value;
    const phone = document.getElementById('partner-phone')?.value;
    const type = document.getElementById('partner-type')?.value;
    const territory = document.getElementById('partner-territory')?.value;
    const dl = document.getElementById('partner-dl')?.value;
    const notes = document.getElementById('partner-notes')?.value;

    this.dispatchEnquiryToEmail({
      type: `Commercial Partnership (${type})`,
      firm: firm,
      contact: contact,
      name: contact,
      email: email,
      phone: phone,
      territory: territory,
      drugLicense: dl,
      notes: notes
    });
    e.target.reset();
  },

  renderContact() {
    const page = document.getElementById('page-contact');
    if (!page) return;
    page.classList.remove('hidden');
  },

  handleContactFormSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('contact-name')?.value;
    const email = document.getElementById('contact-email')?.value;
    const phone = document.getElementById('contact-phone')?.value;
    const route = document.getElementById('contact-route')?.value;
    const message = document.getElementById('contact-message')?.value;

    this.dispatchEnquiryToEmail({
      type: route || "Corporate Contact Inquiry",
      name: name,
      contact: name,
      email: email,
      phone: phone,
      message: message
    });
    e.target.reset();
  },

  renderAdmin(tab = 'overview') {
    const page = document.getElementById('page-admin');
    if (!page) return;
    page.classList.remove('hidden');

    this.activeAdminTab = tab;
    const container = document.getElementById('admin-tab-content');
    if (!container) return;

    document.querySelectorAll('.admin-tab-btn').forEach(btn => {
      if (btn.dataset.tab === tab) {
        btn.classList.add('bg-[#2E3192]', 'text-white');
        btn.classList.remove('bg-white', 'text-slate-700');
      } else {
        btn.classList.remove('bg-[#2E3192]', 'text-white');
        btn.classList.add('bg-white', 'text-slate-700');
      }
    });

    if (tab === 'overview') {
      const pubCount = this.store.products.filter(p => p.status === 'Published').length;
      const revCount = this.store.products.filter(p => p.status === 'Medical Review').length;
      const docCount = this.store.doctors.length;
      const enqCount = this.store.enquiries.length;

      container.innerHTML = `
        <div class="space-y-6">
          <div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div class="bg-white p-5 rounded-2xl border border-slate-200">
              <span class="text-xs text-slate-500 font-semibold uppercase">Published Formulations</span>
              <div class="text-2xl font-black text-[#2E3192] mt-1">${pubCount}</div>
            </div>
            <div class="bg-white p-5 rounded-2xl border border-slate-200">
              <span class="text-xs text-slate-500 font-semibold uppercase">Pending Review</span>
              <div class="text-2xl font-black text-amber-600 mt-1">${revCount}</div>
            </div>
            <div class="bg-white p-5 rounded-2xl border border-slate-200">
              <span class="text-xs text-slate-500 font-semibold uppercase">Registered Doctors</span>
              <div class="text-2xl font-black text-slate-900 mt-1">${docCount}</div>
            </div>
            <div class="bg-white p-5 rounded-2xl border border-slate-200">
              <span class="text-xs text-slate-500 font-semibold uppercase">Commercial Leads</span>
              <div class="text-2xl font-black text-[#ED1C24] mt-1">${enqCount}</div>
            </div>
          </div>
          <div class="bg-white p-6 rounded-2xl border border-slate-200">
            <h3 class="text-base font-bold text-slate-900 mb-2">Publishing Workflow Governance</h3>
            <div class="grid grid-cols-4 gap-2 text-center text-xs font-bold pt-2">
              <div class="p-3 rounded-xl bg-slate-100 text-slate-700">1. Draft</div>
              <div class="p-3 rounded-xl bg-amber-50 text-amber-800 border border-amber-200">2. Medical Review</div>
              <div class="p-3 rounded-xl bg-blue-50 text-[#2E3192] border border-blue-200">3. Approved</div>
              <div class="p-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200">4. Published</div>
            </div>
          </div>
        </div>
      `;
    } else if (tab === 'products') {
      container.innerHTML = `
        <div class="bg-white p-6 rounded-2xl border border-slate-200">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-base font-bold text-slate-900">Formulation Portfolio Management</h3>
            <button onclick="BynexApp.openAddProductModal()" class="px-4 py-2 rounded-xl bg-[#2E3192] text-white text-xs font-bold">
              + Add Formulation
            </button>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead>
                <tr class="border-b border-slate-200 text-slate-400 font-bold uppercase text-[10px]">
                  <th class="py-3">Brand & Molecule</th>
                  <th class="py-3">Category</th>
                  <th class="py-3">Status</th>
                  <th class="py-3 text-right">Workflow Transition</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                ${this.store.products.map(p => `
                  <tr>
                    <td class="py-3.5">
                      <div class="font-bold text-slate-900 text-sm">${p.name}</div>
                      <div class="text-[11px] text-slate-500">${p.molecule}</div>
                    </td>
                    <td class="py-3.5 text-slate-600">${p.category}</td>
                    <td class="py-3.5">
                      <span class="px-2.5 py-1 rounded-full text-[11px] font-bold ${
                        p.status === 'Published' ? 'bg-emerald-100 text-emerald-800' :
                        p.status === 'Approved' ? 'bg-blue-100 text-[#2E3192]' :
                        'bg-amber-100 text-amber-800'
                      }">${p.status}</span>
                    </td>
                    <td class="py-3.5 text-right">
                      ${p.status === 'Medical Review' ? `
                        <button onclick="BynexApp.setProductWorkflow('${p.id}', 'Approved')" class="px-2.5 py-1 rounded bg-blue-600 text-white font-semibold">
                          Approve →
                        </button>
                      ` : p.status === 'Approved' ? `
                        <button onclick="BynexApp.setProductWorkflow('${p.id}', 'Published')" class="px-2.5 py-1 rounded bg-emerald-600 text-white font-semibold">
                          Publish Live →
                        </button>
                      ` : `
                        <button onclick="BynexApp.setProductWorkflow('${p.id}', 'Medical Review')" class="px-2.5 py-1 rounded bg-amber-500 text-white font-semibold">
                          Review
                        </button>
                      `}
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;
    }
  },

  setProductWorkflow(prodId, newStatus) {
    this.store.updateProductStatus(prodId, newStatus);
    this.showToast(`Product status updated to: ${newStatus}`);
    this.renderAdmin('products');
  },

  openAddProductModal() {
    const modal = document.getElementById('add-product-modal');
    if (modal) modal.classList.remove('hidden');
  },

  closeAddProductModal() {
    const modal = document.getElementById('add-product-modal');
    if (modal) modal.classList.add('hidden');
  },

  handleAddProductSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('new-prod-name').value;
    const molecule = document.getElementById('new-prod-molecule').value;
    const composition = document.getElementById('new-prod-comp').value;
    const category = document.getElementById('new-prod-cat').value;
    const dosage = document.getElementById('new-prod-dosage').value;
    const strength = document.getElementById('new-prod-strength').value;

    const newProduct = {
      id: "BYN-" + Math.floor(100 + Math.random() * 900),
      name: name,
      molecule: molecule,
      composition: composition,
      category: category,
      dosageForm: dosage,
      strength: strength,
      packSize: "10x10 Strip",
      schedule: "Schedule H Prescription Drug",
      status: "Published",
      featured: false,
      image: "/assets/products/dydro-ova-tab.webp",
      storage: "Store below 25°C.",
      indications: "Approved therapeutic formulation.",
      contraindications: "Restricted to verified medical practitioners.",
      pharmacokinetics: "Standard pharmacopeial dissolution.",
      marketer: "BYNEX PHARMA PVT. LTD.",
      manufacturer: "WHO-GMP Certified Facility",
      documents: []
    };

    this.store.addProduct(newProduct);
    this.showToast(`Formulation "${name}" added!`);
    this.closeAddProductModal();
    this.renderAdmin('products');
  },

  openMedicalEnquiryModal(productName = '') {
    const modal = document.getElementById('medical-enquiry-modal');
    const input = document.getElementById('modal-enquiry-product');
    if (input) input.value = productName || '';
    if (modal) modal.classList.remove('hidden');
  },

  closeMedicalEnquiryModal() {
    const modal = document.getElementById('medical-enquiry-modal');
    if (modal) modal.classList.add('hidden');
  },

  handleMedicalEnquirySubmit(e) {
    e.preventDefault();
    const prod = document.getElementById('modal-enquiry-product')?.value;
    const name = document.getElementById('modal-enquiry-name')?.value;
    const email = document.getElementById('modal-enquiry-email')?.value;
    const phone = document.getElementById('modal-enquiry-phone')?.value;
    const question = document.getElementById('modal-enquiry-question')?.value;

    this.dispatchEnquiryToEmail({
      type: "Medical Information & Clinical Query",
      product: prod,
      name: name,
      contact: name,
      email: email,
      phone: phone,
      question: question
    });
    this.closeMedicalEnquiryModal();
    e.target.reset();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  window.BynexApp.init();
});
