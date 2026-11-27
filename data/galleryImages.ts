export interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  category: 'all' | 'health' | 'skilling' | 'environment' | 'community' | 'campus';
  categoryLabel: string;
  location: string;
  date: string;
  description: string;
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'photo-yoga',
    src: '/images/pillars/pillar-health.jpg',
    title: 'Community Yoga, Meditation & Holistic Health Program',
    category: 'health',
    categoryLabel: 'Public Health',
    location: 'Bhubaneswar Campus & Field Centers',
    date: 'Wellness Initiative',
    description: 'Promoting holistic health, stress management, and daily physical well-being through guided yoga and mindfulness sessions.'
  },
  {
    id: 'photo-solar',
    src: '/images/pillars/pillar-environment.jpg',
    title: 'Rooftop Solar Renewable Energy Clean Power Array',
    category: 'environment',
    categoryLabel: 'Environment',
    location: 'Academic Campus & Green Hub',
    date: 'Clean Energy Track',
    description: 'Harnessing rooftop solar power for sustainable campus operations and imparting green solar skills to youth.'
  },
  {
    id: 'photo-library',
    src: '/images/pillars/pillar-skill.jpg',
    title: 'Higher Technical Education & Academic Library Hub',
    category: 'skilling',
    categoryLabel: 'Skill Development',
    location: 'Bhubaneswar Academic Wing',
    date: 'Educational Wing',
    description: 'Comprehensive research and engineering library infrastructure supporting technical students with world-class books and journals.'
  },
  {
    id: 'photo-1',
    src: '/images/drive/photo_38_IMG_20250712_125403.jpg',
    title: 'Women SHG Tailoring & Handicraft Workshop',
    category: 'skilling',
    categoryLabel: 'Skill Development',
    location: 'Bhadrak Training Centre',
    date: 'July 2025',
    description: 'Empowering rural women through certified stitching, embroidery, and micro-enterprise bookkeeping.'
  },
  {
    id: 'photo-2',
    src: '/images/drive/photo_15_472067853_122132348918513320_7317603235333479596_n.jpg',
    title: 'Mobile Diagnostic Clinic & Preventive Health Camp',
    category: 'health',
    categoryLabel: 'Public Health',
    location: 'Puri Coastal Hamlets',
    date: 'Field Initiative',
    description: 'Doctor consultations, blood glucose screening, and free essential medicines for coastal families.'
  },
  {
    id: 'photo-3',
    src: '/images/drive/photo_43_IMG_20250712_134816.jpg',
    title: 'Practical Hands-on Vocational Training Lab',
    category: 'skilling',
    categoryLabel: 'Skill Development',
    location: 'Vocational Hub, Bhubaneswar',
    date: 'SkillEM Workshop',
    description: 'Technical equipment handling, electrical assembly, and modern trade skilling for youth.'
  },
  {
    id: 'photo-4',
    src: '/images/drive/photo_6_385022059_819309399981698_5885252841370628177_n.jpg',
    title: 'Grassroots Community Awareness & Health Outreach',
    category: 'health',
    categoryLabel: 'Public Health',
    location: 'Ganjam District',
    date: 'Community Outreach',
    description: 'Maternal health counseling, clean drinking water awareness, and seasonal fever prevention.'
  },
  {
    id: 'photo-5',
    src: '/images/drive/photo_47_IMG_20251219_155359.jpg',
    title: 'Panchayat Youth Mobilization & Environmental Drive',
    category: 'environment',
    categoryLabel: 'Environment',
    location: 'Kendrapara Mangrove Belt',
    date: 'Eco Restoration',
    description: 'Youth-led native tree plantation, coastal cyclone barrier planting, and clean pond sanitation.'
  },
  {
    id: 'photo-6',
    src: '/images/drive/photo_45_IMG_20251219_155051.jpg',
    title: 'Village Gram Sabha Engagement & SHG Microfinance',
    category: 'community',
    categoryLabel: 'Community Welfare',
    location: 'Balasore Rural District',
    date: 'Field Council',
    description: 'Facilitating village micro-enterprises, livelihood seed grants, and women-led cooperative networks.'
  },
  {
    id: 'photo-7',
    src: '/images/drive/photo_1__MG_2324.JPG',
    title: 'Certified Trainees Graduation & Certification Convocation',
    category: 'skilling',
    categoryLabel: 'Skill Development',
    location: 'Main Training Campus',
    date: 'Annual Convocation',
    description: 'Graduating batch receiving government-recognized vocational trade certificates with placement linkages.'
  },
  {
    id: 'photo-8',
    src: '/images/drive/photo_7_385022926_819309253315046_273852854398458510_n.jpg',
    title: 'Outdoor Interactive Health & Hygiene Workshop',
    category: 'health',
    categoryLabel: 'Public Health',
    location: 'Nuapada Western Odisha',
    date: 'Safe Water Yatra',
    description: 'Demonstrating chlorine water purification, ORS preparation, and personal sanitation habits.'
  },
  {
    id: 'photo-9',
    src: '/images/drive/photo_35_Facilities12.JPG',
    title: 'Foundation IT & Technical Educational Infrastructure',
    category: 'campus',
    categoryLabel: 'Campus & Facilities',
    location: 'Bhubaneswar Academic Wing',
    date: 'Educational Wing',
    description: 'Modern computer lab and classroom facilities serving first-generation rural college students.'
  },
  {
    id: 'photo-10',
    src: '/images/drive/photo_40_IMG_20250712_130414.jpg',
    title: 'Specialized Garment Technology & Apparel Skill Lab',
    category: 'skilling',
    categoryLabel: 'Skill Development',
    location: 'Bhadrak Center',
    date: 'SkillEM Workshop',
    description: 'Professional industrial stitching machine practice designed for immediate export garment factory hiring.'
  },
  {
    id: 'photo-11',
    src: '/images/drive/photo_18_475788975_122138965892513320_4797780344660842673_n.jpg',
    title: 'Community Sapling Distribution & Organic Farming Session',
    category: 'environment',
    categoryLabel: 'Environment',
    location: 'Mayurbhanj District',
    date: 'Green Odisha Drive',
    description: 'Distributing fruit-bearing indigenous saplings and teaching vermicomposting to smallholder farmers.'
  },
  {
    id: 'photo-12',
    src: '/images/drive/photo_10_385363863_819309229981715_364656010134523861_n.jpg',
    title: 'Maternal Nutrition & Early Child Care Consultation',
    category: 'health',
    categoryLabel: 'Public Health',
    location: 'Koraput Tribal Block',
    date: 'Nutrition Program',
    description: 'Doorstep nutritional assessment, iron folic acid distribution, and dietary guidance for new mothers.'
  },
  {
    id: 'photo-13',
    src: '/images/drive/photo_44_IMG_20251219_154821.jpg',
    title: 'Safe Drinking Water Audit & Sanitation Drive',
    category: 'environment',
    categoryLabel: 'Environment',
    location: 'Jagatsinghpur Coastal Belt',
    date: 'Jal Shakti Initiative',
    description: 'Testing arsenic and salinity levels in village borewells and chlorinating community water tanks.'
  },
  {
    id: 'photo-14',
    src: '/images/drive/photo_24_649725186_17900227023241395_1965993920680395895_n.jpg',
    title: 'Rural Youth Leadership & Self-Help Group Council',
    category: 'community',
    categoryLabel: 'Community Welfare',
    location: 'Khordha Field Unit',
    date: 'Gram Swaraj Meet',
    description: 'Facilitating village dispute resolution, self-reliance committees, and educational scholarship access.'
  },
  {
    id: 'photo-15',
    src: '/images/drive/photo_37_IMG_20240229_114035.jpg',
    title: 'Vocational Training Centre Entrance & Orientation Wing',
    category: 'campus',
    categoryLabel: 'Campus & Facilities',
    location: 'Bhadrak Campus',
    date: 'Skill Infrastructure',
    description: 'The foundation vocational training complex welcoming hundreds of rural aspirants every season.'
  },
  {
    id: 'photo-16',
    src: '/images/drive/photo_49_IMG_20251219_155507.jpg',
    title: 'Field Workers & Beneficiary Community Assembly',
    category: 'community',
    categoryLabel: 'Community Welfare',
    location: 'Coastal Village Center',
    date: 'Annual Gathering',
    description: 'Celebrating multi-generational transformations with grassroots village elders and student alumni.'
  }
];
