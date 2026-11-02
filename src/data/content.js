export const couple = {
  groom: {
    name: 'Gaurav',
    parents: 'S/O Mr. Rajesh & Mrs. Hema Jogani',
  },
  bride: {
    name: 'Ragini',
    parents: 'D/O Mr. Alok & Mrs. Neeru Mehta',
  },
  monogram: 'G & R',
  families: 'Jogani & Mehta',
};

export const blessing = {
  shloka: 'वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥',
  copy: 'With the blessings of the Almighty & our respected elders, we joyfully invite your gracious presence on the wedding celebration of',
};

export const weddingDate = new Date('2026-12-17T11:00:00+05:30');

export const saveTheDate = [
  { id: 'day', reveal: '17' },
  { id: 'month', reveal: 'DEC' },
  { id: 'year', reveal: '2026' },
];

export const events = [
  {
    date: '17 Dec',
    time: '11:00 AM',
    title: 'Carnival',
    description: 'A morning of colors & joy',
    icon: 'carnival',
  },
  {
    date: '17 Dec',
    time: '7:00 PM',
    title: 'Sangeet & Engagement',
    description: 'Followed by dinner',
    icon: 'sangeet',
  },
  {
    date: '18 Dec',
    time: '4:00 PM',
    title: 'Baraat',
    description: 'The celebration begins',
    icon: 'baraat',
  },
  {
    date: '18 Dec',
    time: '6:00 PM',
    title: 'Varmala & Phere',
    description: 'Two hearts, one forever',
    icon: 'phere',
  },
  {
    date: '18 Dec',
    time: '9:00 PM',
    title: 'Reception',
    description: 'Followed by dinner',
    icon: 'reception',
  },
];

export const venue = {
  name: 'Shri Ram International',
  city: 'Jodhpur, Rajasthan',
  mapUrl: 'https://maps.app.goo.gl/1jYyQx13Nqxh2ZbG8',
};

export const wardrobe = [
  {
    occasion: 'Haldi',
    style: 'Pastel shades / Indian Traditional',
    palette: ['#fbe9b0', '#f7d488', '#eab676', '#fef6e4'],
  },
  {
    occasion: 'Sangeet',
    style: 'Glitz & Glam / Indo-Western',
    palette: ['#9B3D4E', '#D4AF37', '#B85D65', '#4A3E3D'],
  },
  {
    occasion: 'Wedding',
    style: 'Royal Traditional',
    palette: ['#6B2A35', '#873644', '#D4AF37', '#ECE8E1'],
  },
];

/** Placeholder-friendly gallery slots — drop real photos at the paths below (see public/images/gallery/README.txt). */
export const gallery = [
  { id: 1, src: '/images/gallery/1.jpg', alt: `${couple.groom.name} & ${couple.bride.name}` },
  { id: 2, src: '/images/gallery/2.jpg', alt: `${couple.groom.name} & ${couple.bride.name}` },
  { id: 3, src: '/images/gallery/3.jpg', alt: `${couple.groom.name} & ${couple.bride.name}` },
  { id: 4, src: '/images/gallery/4.jpg', alt: `${couple.groom.name} & ${couple.bride.name}` },
];

export const emotionalPoll = {
  question: 'Who is getting emotional first?',
  options: [couple.groom.name, couple.bride.name, 'Both'],
};

export const moodPoll = {
  question: "I'm coming for...",
  options: ['The Food 🍲', 'Dance Floor 💃', 'The Love ❤️', 'All of It ✨'],
};
