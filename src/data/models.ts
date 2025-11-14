// M'LiteEv Electric Scooter Models - Complete Specifications

export interface ModelSpec {
  id: string
  name: string
  category: string
  controller: string
  motorPower: string
  maxSpeed: string
  brakeSystem: string
  tyre: string
  colors: string[]
  range: string
  featured?: boolean
  premium?: boolean
}

export const COMPANY_INFO = {
  name: "M'LiteEv",
  tagline: "Premium Electric Mobility",
  fullName: "M'LiteEv Electric Scooters",
  description: "Deals in: All Kind of Electrical Scooty & Its Spare Parts",
  address: {
    street: "Near Atal Park, Sector-2",
    city: "Faridabad",
    state: "Haryana",
    pincode: "121004",
    full: "Near Atal Park, Sector-2, Faridabad, Haryana-121004",
    mapLink: "https://maps.app.goo.gl/rxqPzSrszbZhmuDx7"
  },
  contact: {
    phone: "9818649138",
    email: "mukulgarg65@gmail.com",
    phoneFormatted: "+91 98186 49138"
  },
  social: {
    whatsapp: "919818649138"
  }
}

export const ALL_MODELS: ModelSpec[] = [
  {
    id: "sl-pro",
    name: "S.L Pro",
    category: "Standard Line",
    controller: "48V/60V/72V",
    motorPower: "1000W",
    maxSpeed: "40-45 Km/H",
    brakeSystem: "Front Disc / Rear Drum",
    tyre: "90-100-10",
    colors: ["Red", "White", "Black"],
    range: "50+ KM",
    featured: true
  },
  {
    id: "dl-pro",
    name: "D.L Pro",
    category: "Deluxe Line",
    controller: "48V/60V/72V",
    motorPower: "1000W",
    maxSpeed: "40-45 Km/H",
    brakeSystem: "Front Disc / Rear Drum",
    tyre: "90-100-10",
    colors: ["Red", "White", "Black"],
    range: "50+ KM",
    featured: true
  },
  {
    id: "cs-pro",
    name: "CS Pro",
    category: "City Sport",
    controller: "60V/72V",
    motorPower: "1200W",
    maxSpeed: "50-55 Km/H",
    brakeSystem: "Front Disc / Rear Disc",
    tyre: "90-90-12",
    colors: ["Red", "White", "Black"],
    range: "60+ KM",
    premium: true,
    featured: true
  },
  {
    id: "cs-pro-plus",
    name: "CS Pro +",
    category: "City Sport Plus",
    controller: "60V/72V",
    motorPower: "1200W",
    maxSpeed: "50-55 Km/H",
    brakeSystem: "Front Disc / Rear Disc",
    tyre: "90-90-12",
    colors: ["Red", "White", "Black"],
    range: "60+ KM",
    premium: true,
    featured: true
  },
  {
    id: "vespa-pro",
    name: "Vespa Pro",
    category: "Premium Classic",
    controller: "60V/72V",
    motorPower: "1200W",
    maxSpeed: "50-55 Km/H",
    brakeSystem: "Front Disc / Rear Disc",
    tyre: "90-90-12",
    colors: ["Red", "White", "Black"],
    range: "60+ KM",
    premium: true,
    featured: true
  },
  {
    id: "vespa-pro-plus",
    name: "Vespa Pro +",
    category: "Premium Classic Plus",
    controller: "60V/72V",
    motorPower: "1200W",
    maxSpeed: "50-55 Km/H",
    brakeSystem: "Front Disc / Rear Disc",
    tyre: "90-90-12",
    colors: ["Red", "White", "Black"],
    range: "60+ KM",
    premium: true,
    featured: true
  },
  {
    id: "cs-3",
    name: "CS 3",
    category: "City Sport 3",
    controller: "60V/72V",
    motorPower: "1200W",
    maxSpeed: "50-55 Km/H",
    brakeSystem: "Front Disc / Rear Disc",
    tyre: "90-90-12",
    colors: ["Red", "White", "Black"],
    range: "60+ KM",
    premium: true,
    featured: true
  }
]

export const MODEL_CATEGORIES = {
  standard: ALL_MODELS.filter(m => m.id.startsWith('sl') || m.id.startsWith('dl')),
  citySport: ALL_MODELS.filter(m => m.id.startsWith('cs')),
  vespa: ALL_MODELS.filter(m => m.id.startsWith('vespa'))
}

export const FEATURED_MODELS = ALL_MODELS.filter(m => m.featured)
export const PREMIUM_MODELS = ALL_MODELS.filter(m => m.premium)
