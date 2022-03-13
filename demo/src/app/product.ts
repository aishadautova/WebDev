export interface Product {
  category: string; //Dresses Toys Home Electronics
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  image: string;
  link: string;
  like: number;
}

export const products = [
  {
    category: 'Home',
    id: 11,
    name: 'Teapot',
    price: 18.99,
    description: 'For use as a stovetop kettle and tea steeper – heat water then steep tea all with one vessel.',
    rating: 4.5,
    image: "https://m.media-amazon.com/images/I/71uOJRTG91L._AC_SX679_.jpg",
    link: "https://www.amazon.com/dp/B09GKRCYG7/ref=sspa_dk_detail_4?psc=1&pd_rd_i=B09GKRCYG7&pd_rd_w=SaWD1&pf_rd_p=b9951ce4-3bd8-4b04-9123-0fda35d6155e&pd_rd_wg=ginaB&pf_rd_r=QJ6X31X05C39774ZN94E&pd_rd_r=f4b7a698-4f14-430f-9761-0bd480dfd1b4&s=kitchen&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExNExTVlpHWVJCWjVJJmVuY3J5cHRlZElkPUEwNzE5ODc2N1RYNVdONzQyTldWJmVuY3J5cHRlZEFkSWQ9QTA1ODM4MDIyWk9CSE02UlZKUjEmd2lkZ2V0TmFtZT1zcF9kZXRhaWwmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl",
    like: 0,
  },
  {
    category: 'Home',
    id: 12,
    name: "Lifeel Moonlit Garden Tapestry",
    price: 14.99,
    description: "Like vines twisting into a moonlit sky, this features lunar phases surrounded by floral motifs.",
    rating: 4.8,
    image: "https://m.media-amazon.com/images/I/81kkutZXGtL._AC_SX679_.jpg",
    link: "https://www.amazon.com/Lifeel-Moonlit-Tapestry-Surrounded-Flowers/dp/B08238MMRT/ref=sr_1_23?keywords=cottage%2Bcore&qid=1647091507&sprefix=cotta%2Caps%2C265&sr=8-23&th=1",
    like: 0,
  },
  {
    category: 'Home',
    id: 13,
    name: "Plant Terrarium",
    price: 18.99,
    description: " Perfect combination of natural wood and clear glass- Frame is made of nature wood, mottled surface.",
    rating: 4.5,
    image: "https://m.media-amazon.com/images/I/71GrAWYYDyL._AC_SX679_.jpg",
    link: "https://www.amazon.com/Terrarium-Planter-Tabletop-Hydroponics-Decoration/dp/B07D29P5Z1/ref=sr_1_14?keywords=cottage+core&qid=1647091507&sprefix=cotta%2Caps%2C265&sr=8-14",
    like: 0,
  },
  {
    category: 'Home',
    id: 14,
    name: "Bedding Quilt Cover Set",
    price: 72.99,
    description: "Whether you are purchasing a duvet cover set for your bedroom, guest room, vacation home or anywhere else!",
    rating: 4.6,
    image: "https://m.media-amazon.com/images/I/819iKVCWyJL._AC_SX679_.jpg",
    link: "https://www.amazon.com/mixinni-Vintage-Closure-Pattern-Bedding/dp/B07JK7HHKG/ref=sr_1_38?keywords=cottage+core&qid=1647091507&sprefix=cotta%2Caps%2C265&sr=8-38",
    like: 0,
  },
  {
    category: 'Home',
    id: 16,
    name: "Designer Plates, Napkins, and Cups",
    price: 32.99,
    description: "12 Count plates feature 3 designs full of delicate fairies, butterflies and flowers. ",
    rating: 4.5,
    image: "https://m.media-amazon.com/images/I/91HfMiVYygL._AC_SX679_.jpg",
    link: "https://www.amazon.com/Talking-Tables-Bundle-Designer-Napkins/dp/B0753TN5ZT/ref=sr_1_47?keywords=cottage+core&qid=1647091507&sprefix=cotta%2Caps%2C265&sr=8-47",
    like: 0,
  },

  {
    category: 'Dresses',
    id: 21,
    name: "Summer Chiffon Dress",
    price: 30.99,
    description: "elastic ruffle collar, turtle neck, high elastic waistline, elastic cuffs, midi length.",
    rating: 4.6,
    image: "https://m.media-amazon.com/images/I/610W3jj9GDL._AC_UX569_.jpg",
    link: "https://www.amazon.com/Lolita-Ruffled-Princess-Sleeve-Embroidered/dp/B07P5MDXTM/ref=sr_1_23?keywords=cottagecore&qid=1647091344&s=apparel&sr=1-23",
    like: 0,
  },
  {
    category: 'Dresses',
    id: 22,
    name: "Vintage Dresses",
    price: 32.99,
    description: "This square neck ruffled midi dress is perfect for dates, weddings, birthdays, parties, dinners, travel, beaches, holidays and everyday wear.",
    rating: 4.3,
    image: "https://m.media-amazon.com/images/I/71ZC1pnBfsL._AC_UY550_.jpg",
    link: "https://www.amazon.com/R-YIposha-Vintage-Elastic-Ruffled-Backless/dp/B07YRD1P32/ref=sr_1_18?keywords=cottagecore&qid=1647091344&s=apparel&sr=1-18",
    like: 0,
  },
  {
    category:'Dresses',
    id: 23,
    name: 'Cottagecore Dress',
    price: 20.99,
    description: 'Square neckline floral print ruffle vintage cotton boho A-Line dress, sweet puff short sleeve design, make you attractive.',
    rating: 3.8,
    image: "https://m.media-amazon.com/images/I/71Vze-sXcyL._AC_UX385_.jpg",
    link: 'https://www.amazon.com/Cottagecore-Spring-Summer-Floral-Vintage/dp/B0922XC5NG/ref=sr_1_4?keywords=cottagecore&qid=1647151004&s=apparel&sr=1-4',
    like: 0,
  },
  {
    category:'Dresses',
    id: 24,
    name: 'Ruffles Midi Dress',
    price: 32.99,
    description: 'Square Neckline Floral Print Ruffle Vintage Cotton Boho A-Line Dress',
    rating: 4.0,
    image: 'https://m.media-amazon.com/images/I/61Qst67v5BL._AC_UY445_.jpg',
    link: 'https://www.amazon.com/R-Vivimos-Womens-Sleeves-Vintage-Ruffles/dp/B08C5528QF/ref=sr_1_6?crid=2BOHR0ILY527K&keywords=cottagecore+dress&qid=1647151328&sprefix=cottagecore+dress%2Caps%2C280&sr=8-6',
    like: 0,
  },
  {
    category:'Dresses',
    id: 25,
    name: 'Beach Flowy Maxi Dresses',
    price: 39.99,
    description: 'This square neck ruffled midi dress is perfect for dates, weddings, birthdays, parties, dinners, travel, beaches, holidays and everyday wear.',
    rating: 4.3,
    image: 'https://m.media-amazon.com/images/I/81lrUEuIPSL._AC_SY445._SX._UX._SY._UY_.jpg',
    link: 'https://www.amazon.com/R-YIposha-Vintage-Elastic-Backless-Mushroom/dp/B09FZHWFR7/ref=pd_sbs_1/147-9883287-3960706?pd_rd_w=PwkYZ&pf_rd_p=3676f086-9496-4fd7-8490-77cf7f43f846&pf_rd_r=ZPJ4WPTJJN52ZR9YC36Y&pd_rd_r=0385fe9f-e373-4c98-a75a-32452c08de03&pd_rd_wg=9tLlO&pd_rd_i=B098VXVY9T&th=1&psc=1',
    like: 0,
  },

  {
    category: 'Toys',
    id: 31,
    name: 'Genshin Impact Figure',
    price: 45.00,
    description: 'Exquisite gifts for your friends and children. A must-have collection for all anime fans.',
    rating: 3.7,
    image: "https://m.media-amazon.com/images/I/61IHo60StsL._AC_SX679_.jpg",
    link: "https://www.amazon.com/KOOLIYA-Genshin-Impact-Official-Distribution/dp/B09NTVP7QG/ref=sr_1_1_sspa?crid=21CC60JMZXPFX&keywords=diluc&qid=1647091439&sprefix=diluc%2Caps%2C400&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExNEdEVTdEM0RRMDlIJmVuY3J5cHRlZElkPUEwMDIxMTcwM0hXVlZTWEpIUjBVWiZlbmNyeXB0ZWRBZElkPUEwNDY3OTA3TEdWN0JXRkpSMDRWJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
    like: 0,
  },
  {
    category: 'Toys',
    id: 32,
    name: 'Slime Plush Set',
    price: 24.99,
    description: 'High-grade soft plush polyester fiber, environmentally friendly and green',
    rating: 4.2,
    image: "https://m.media-amazon.com/images/I/71+7mRe4JeL._AC_SX679_.jpg",
    link: "https://www.amazon.com/Genshin-Impact-Slime-Plush-7Pcs/dp/B09BTGB7YV/ref=sr_1_5?keywords=genshin+impact&qid=1647091399&sprefix=genshin%2Caps%2C302&sr=8-5",
    like: 0,
  },
  {
    category: 'Toys',
    id: 33,
    name: 'Plushie Zhong Li Dragon',
    price: 35.99,
    description: 'This plush is inspired by the popular game Genshin Impact. Make play time more fun with zhongli dragon.',
    rating: 4.8,
    image: 'https://m.media-amazon.com/images/I/61kq60UiZAL._AC_SX522_.jpg',
    link: 'https://www.amazon.com/dp/B09JKRFSP9/ref=sspa_dk_detail_2?psc=1&pd_rd_i=B09JKRFSP9&pd_rd_w=VGQWx&pf_rd_p=b9951ce4-3bd8-4b04-9123-0fda35d6155e&pd_rd_wg=ZIChN&pf_rd_r=Y0221QKE6NR57JE5RAAF&pd_rd_r=9b0d5405-be57-4d1c-9104-44589548884c&s=toys-and-games&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExNUZPUzIyQzZETlQ4JmVuY3J5cHRlZElkPUExMDEzMTcxMjVEVlA0SFM5MzNaJmVuY3J5cHRlZEFkSWQ9QTA0NzQ2MTIzMFJUSldKNVdWWjZUJndpZGdldE5hbWU9c3BfZGV0YWlsJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==',
    like: 0,
  },
  {
    category: 'Toys',
    id: 34,
    name: 'Kitten Pillow Long',
    price: 13.99,
    description: 'he sleeping cat pillow is made of high safety environmental soft plush fabric',
    rating: 4.2,
    image: 'https://m.media-amazon.com/images/I/51+FwuJOtTL._AC_SX522_.jpg',
    link: 'https://www.amazon.com/shangman-Cartoon-Sleeping-Girlfriend-Multiple/dp/B08Z7TJXMC/ref=sr_1_6?keywords=plushies&qid=1647151967&sprefix=plush%2Caps%2C298&sr=8-6&th=1',
    like: 0,
  },
  {
    category: 'Toys',
    id: 35,
    name: 'Plush Toy Anime Corgi',
    price: 17.99,
    description: 'Presents super soft, cute, & adorable stuffed animals that unfold into fuzzy pillows for sleep.',
    rating: 4.8,
    image:'https://m.media-amazon.com/images/I/51Tahu98IiL._AC_SX569_.jpg',
    link: 'amazon.com/Auspicious-Beginning-Stuffed-Animal-Kawaii/dp/B07RQ1HNFQ/ref=sr_1_4?keywords=plushies&qid=1647152048&sprefix=plush%2Caps%2C298&sr=8-4&th=1',
    like: 0,
  },

  {
    category: 'Electronics',
    id: 41,
    name: 'Overhead Headphones with Mic for Phone-Call',
    price: 244.49,
    description: 'Touch Sensor controls to pause play skip tracks, control volume, activate your voice assistant, and answer phone calls',
    rating: 4.7,
    image: 'https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SY355_.jpg',
    link: 'https://www.amazon.com/Sony-WH-1000XM4-Canceling-Headphones-phone-call/dp/B0863TXGM3/ref=sr_1_5?qid=1647152267&s=electronics&sr=1-5&th=1',
    like: 0,
  },
  {
    category: 'Electronics',
    id: 42,
    name: 'GeForce RTX 3060',
    price: 699,
    description: 'NVIDIA Ampere architecture, 2nd Gen Ray Tracing Cores, 3rd Gen Tensor Cores',
    rating: 4.5,
    image: 'https://m.media-amazon.com/images/I/7156DLyUsYL._AC_SX522_.jpg',
    link: 'https://www.amazon.com/ZOTAC-GeForce-Graphics-IceStorm-ZT-A30600H-10M/dp/B08W8DGK3X/ref=sr_1_21?qid=1647152390&s=computers-intl-ship&sr=1-21&th=1',
    like: 0,
  },
  {
    category: 'Electronics',
    id: 43,
    name: 'Apple iMac ',
    price: 999.99,
    description: 'Apple M1 chip delivers powerful performance with 8-core CPU and 8-core GPU',
    rating: 4.7,
    image: 'https://m.media-amazon.com/images/I/61LNnZPoKPS._AC_SX342_.jpg',
    link: 'https://www.amazon.com/2021-Apple-24-inch-8%E2%80%91core-256GB/dp/B09326G4R1/ref=sr_1_1?keywords=imac&qid=1647152505&s=pc&sr=1-1',
    like: 0,
  },
  {
    category: 'Electronics',
    id: 44,
    name: 'Fujifilm Instax Mini 11 Instant Camera',
    price: 139.95,
    description: 'MiniMate flamingo accessory kit includes: Fujifilm instax mini 11 instant film camera (Purple) Fujinon 60mm f/12.7 Lens - Optical Viewfinder.',
    rating: 4.5,
    image: 'https://m.media-amazon.com/images/I/81bE1f9QtoL._AC_SY355_.jpg',
    link: 'https://www.amazon.com/Fujifilm-MiniMate-Accessory-Compatible-Packaging/dp/B08WC14334/ref=sr_1_13_sspa?qid=1647152633&s=electronics&sr=1-13-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFYVzVZUkdCMjZGN1MmZW5jcnlwdGVkSWQ9QTA1NDQ1MDYxNUNaSVhHUzJCUjEyJmVuY3J5cHRlZEFkSWQ9QTA4Njc2NTMyMjZBOVExRjZUWE1WJndpZGdldE5hbWU9c3BfbXRmX2Jyb3dzZSZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&th=1',
    like: 0,
  },
  {
    category: 'Electronics',
    id: 45,
    name: 'Wireless Headset',
    price: 99.00,
    description: 'Featuring USB Type-C charging and dual noise-cancelling microphones, you can keep the party chat flowing with crystal-clear voice capture',
    rating: 4.7,
    image: 'https://m.media-amazon.com/images/I/51Iw5jCQY7L._AC_SY355_.jpg',
    link: 'https://www.amazon.com/PlayStation-Pulse-3D-Wireless-Headset/dp/B08H99878P/ref=sr_1_1?keywords=playstation+5&qid=1647152789&sprefix=playsta%2Caps%2C290&sr=8-1',
    like: 0,
  },
];

/*
{
  category:
  id:
  name:
  price:
  description:
  rating:
  image:
  link:
}
*/