export const rooms = [
  {
    name: "Courtyard Classic",
    label: "01 / A quiet favourite",
    description:
      "A welcoming room for solo travellers and couples, with soft natural textures and the essentials for an easy stay.",
    image: "/images/placeholders/photo-1611892440504-42a792e24d32.jpg",
    imageAlt: "A calm guest room with a comfortable bed",
    guests: "Up to 2 guests",
    bed: "Queen bed",
    size: "260 sq ft",
    amenities: ["queen bed", "ensuite", "wifi", "air conditioning", "tea"],
    highlights: ["Ensuite bathroom", "Work desk", "Courtyard-facing"],
  },
  {
    name: "Garden Suite",
    label: "02 / A little more room",
    description:
      "Settle into a generous suite with a separate sitting nook, made for slower mornings and longer stays.",
    image: "/images/placeholders/photo-1600210492486-724fe5c67fb0.jpg",
    imageAlt: "A warm, light-filled suite with a comfortable sitting area",
    guests: "Up to 3 guests",
    bed: "King bed + daybed",
    size: "380 sq ft",
    amenities: ["king bed", "ensuite", "wifi", "air conditioning", "lounge", "tea"],
    highlights: ["Sitting nook", "Garden outlook", "Extra daybed"],
  },
  {
    name: "Family Room",
    label: "03 / Space for everyone",
    description:
      "A relaxed, flexible room for families and friends travelling together, with space to unpack and unwind.",
    image: "/images/placeholders/photo-1449247709967-d4461a6a6103.jpg",
    imageAlt: "A quiet, welcoming space with natural light",
    guests: "Up to 4 guests",
    bed: "King bed + twin beds",
    size: "460 sq ft",
    amenities: ["king bed", "ensuite", "wifi", "air conditioning", "lounge", "tea"],
    highlights: ["Separate sleeping area", "Extra luggage space", "Family friendly"],
  },
];

export const roomAmenities = {
  "queen bed": { label: "Queen bed", icon: "bed" },
  "king bed": { label: "King bed", icon: "bed" },
  ensuite: { label: "Ensuite bathroom", icon: "bath" },
  wifi: { label: "Complimentary Wi-Fi", icon: "wifi" },
  "air conditioning": { label: "Air conditioning", icon: "climate" },
  tea: { label: "Tea & coffee", icon: "cup" },
  lounge: { label: "Sitting area", icon: "sofa" },
};
