import {
  IconCpu2,
  IconDeviceFloppy,
  IconMicrowave,
  IconMarkdown,
  IconDeviceDesktop,
} from "@tabler/icons-react";

let products = {
  Laptop: {
    headline: "Upgrade Your Tech Game with our Powerful Laptops!",
    description:
      "From sleek and lightweight to high-performance gaming laptops, we've got you covered with the best selection and prices.",
    products: [
      {
        id: 34525611,
        model: "Asus ZenBook Pro Duo 15",
        imgUrl:
          "https://images.unsplash.com/photo-1630794180018-433d915c34ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
        specifications: [
          { label: "i7 1260p", icon: IconCpu2 },
          { label: "16GB Ram", icon: IconMarkdown },
          { label: "512GB SSD", icon: IconDeviceFloppy },
          { label: "RTX 3060", icon: IconMicrowave },
          { label: "144 Hz", icon: IconDeviceDesktop },
        ],
        price: 57999,
        category: "Laptop",
      },
      {
        id: 564743142,
        model: "Asus Vivobook PRO 15 OLED",
        imgUrl:
          "https://images.unsplash.com/photo-1654267288787-a571aecf0505?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80",
        specifications: [
          { label: "Ryzen 7 5800H", icon: IconCpu2 },
          { label: "12GB Ram", icon: IconMarkdown },
          { label: "512GB SSD", icon: IconDeviceFloppy },
          { label: "RTX 3060Ti", icon: IconMicrowave },
        ],
        price: 63999,
        category: "Laptop",
      },
      {
        id: 3,
        category: "Laptop",
        model: "Dell Latitude 5401",
        imgUrl:
          "https://images.unsplash.com/photo-1520375300877-3500f50d069e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        specifications: [
          { label: "i7 9850H", icon: IconCpu2 },
          { label: "16GB Ram", icon: IconMarkdown },
          { label: "256GB SSD", icon: IconDeviceFloppy },
          { label: "Intel Iris XE", icon: IconMicrowave },
        ],
        price: 25999,
      },
      {
        id: 98761346,
        category: "Laptop",
        model: "Acer Aspire 5",
        imgUrl:
          "https://images.unsplash.com/photo-1525971977907-20d22da82d6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
        specifications: [
          { label: "i3 1135G7", icon: IconCpu2 },
          { label: "8GB Ram", icon: IconMarkdown },
          { label: "256 SSD", icon: IconDeviceFloppy },
        ],
        price: 19000,
      },
      {
        id: 5,
        model: "Asus ROG Zephyrus 5",
        category: "Laptop",
        imgUrl:
          "https://images.unsplash.com/photo-1636211993589-6daf32038bd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        specifications: [
          { label: "i7 10875H", icon: IconCpu2 },
          { label: "32GB Ram", icon: IconMarkdown },
          { label: "1TB SSD", icon: IconDeviceFloppy },
          { label: "RTX 2070", icon: IconMicrowave },
          { label: "300 Hz", icon: IconDeviceDesktop },
        ],
        price: 62599,
      },
      {
        id: 56,
        category: "Laptop",
        model: "Lenovo Thinkpad X1 Yoga",
        imgUrl:
          "https://images.unsplash.com/photo-1637249820580-a877474a889d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        specifications: [
          { label: "i7 8650U", icon: IconCpu2 },
          { label: "16GB Ram", icon: IconMarkdown },
          { label: "512GB SSD", icon: IconDeviceFloppy },
        ],
        price: 26999,
      },
      {
        id: 1565433456,
        category: "Laptop",
        model: "Dell Precision 2570 Workstation",
        imgUrl:
          "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        specifications: [
          { label: "i5 1250p", icon: IconCpu2 },
          { label: "16GB Ram DDR5", icon: IconMarkdown },
          { label: "512GB SSD", icon: IconDeviceFloppy },
        ],
        price: 49999,
      },
      {
        id: 987654331,
        model: "Asus TUF Gaming Dash F14",
        imgUrl:
          "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        specifications: [
          { label: "i5 11400H", icon: IconCpu2 },
          { label: "12GB Ram", icon: IconMarkdown },
          { label: "512GB SSD", icon: IconDeviceFloppy },
          { label: "GTX 1650 super", icon: IconMicrowave },
          { label: "144 Hz", icon: IconDeviceDesktop },
        ],
        price: 37999,
        category: "Laptop",
      },
      {
        id: 418765433,
        category: "Laptop",
        model: "Asus Expertbook 14",
        imgUrl:
          "https://images.unsplash.com/photo-1636211990414-8edec17ba047?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        specifications: [
          { label: "i5 1135G7", icon: IconCpu2 },
          { label: "16GB Ram", icon: IconMarkdown },
          { label: "256 SSD", icon: IconDeviceFloppy },
          { label: "Nvidia MX110", icon: IconMicrowave },
        ],
        price: 23500,
      },
    ],
  },
  Keyboard: {
    headline:
      "Find Your Perfect Keyboard Match - Shop Our Wide Selection Today!",
    description:
      "From wireless and backlit keyboards to those with customizable keys, find the perfect one to fit your needs and style.",
    products: [
      {
        id: 765444,
        model: "GMMK Pro X",
        category: "Keyboard",
        imgUrl:
          "https://images.unsplash.com/photo-1632079003110-d694908500da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=929&q=80",
        price: 5000,
        desc: "The GMMK Pro X is a wireless modular mechanical keyboard that allows you to customize every aspect of your typing experience. With hot-swappable switches, programmable macros, and a sturdy aluminum frame, it offers exceptional versatility and performance for discerning keyboard enthusiasts.",
      },
      {
        id: 3,
        model: "FL CMMK MK870",
        imgUrl:
          "https://images.unsplash.com/photo-1635987391914-cb84b567e68f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
        price: 3500,
        desc: "The FL CMMK MK870 is a wireless mechanical keyboard with a compact and ergonomic design. It features customizable RGB backlighting, hot-swappable switches, and programmable macros, making it a perfect choice for gamers and enthusiasts seeking a personalized typing experience.",
      },
      {
        id: 15,
        category: "Keyboard",
        imgUrl:
          "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=865&q=80",
        model: "Wireless Apple Keyboard",
        price: 6399,
        desc: "The Wireless Apple Keyboard offers a sleek and minimalist design, wireless connectivity, and a comfortable typing experience. It seamlessly integrates with Apple devices and provides a reliable and convenient keyboard solution for Mac users.",
      },
      {
        id: 8765102,
        category: "Keyboard",
        model: "Keychron Keyboard X42069D",
        imgUrl:
          "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
        price: 4269,
        desc: "The Keychron Keyboard is a versatile wireless mechanical keyboard designed for both Mac and Windows users. With its customizable backlighting, multiple connectivity options, and hot-swappable keys, it offers a delightful typing experience for both work and play.",
      },
    ],
  },
  Mouse: {
    headline: "Shop the Best Mice for Comfort, Precision, and Durability!",
    description:
      "Our high-performance mice offer advanced features such as customizable buttons, adjustable DPI, and ergonomic designs to help you work and play with ease.",
    products: [
      {
        id: 5212,
        category: "Keyboard",
        imgUrl:
          "https://images.unsplash.com/photo-1563297007-0686b7003af7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=917&q=80",
        model: "Logitech G502",
        price: 3000,
        desc: "The Logitech G502 is a highly acclaimed gaming mouse that delivers precision and comfort for gamers. With customizable weights, 11 programmable buttons, and a high-precision sensor, it offers an immersive and responsive gaming experience.",
      },
      {
        id: 26955212,
        category: "Keyboard",
        imgUrl:
          "https://images.unsplash.com/photo-1613141411244-0e4ac259d217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=917&q=80",
        model: "Glorious Model O Wireless Gaming Mouse",
        price: 4530,
        desc: "The Glorious Model O Wireless Gaming Mouse combines exceptional performance with the freedom of wireless connectivity. With its lightweight design, responsive buttons, and high-precision sensor, it offers precise tracking and smooth gameplay for competitive gamers.",
      },
      {
        id: 8351526,
        model: "Logitech MX Master 2S",
        category: "Keyboard",
        imgUrl:
          "https://images.unsplash.com/photo-1625750319971-ee4b61e68df8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=929&q=80",
        price: 6399,
        desc: "The Logitech MX Master 2S is a premium wireless mouse designed for productivity and versatility. With its ergonomic design, customizable buttons and scroll wheel, and cross-computer control, it provides a seamless workflow experience for professionals and power users.",
      },
      {
        id: 3245673,
        category: "Keyboard",

        imgUrl:
          "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=917&q=80",
        model: "Logitech G304",
        price: 2540,
        desc: "The Logitech G304 is a reliable and affordable gaming mouse that doesn't compromise on performance. With its advanced HERO sensor, six programmable buttons, and comfortable design, it delivers precise and responsive gameplay at an accessible price point.",
      },
    ],
  },
  "Processors/CPU": {
    headline:
      "Unlock Your PC's Potential with Our High-Performance Processors!",
    description:
      "Our high-performance CPUs offer lightning-fast processing speed, seamless multitasking, and unbeatable performance to handle any task with ease.",
    products: [
      {
        id: 156788,
        category: "Processors/CPU",
        imgUrl:
          "https://images.unsplash.com/photo-1611275484845-52a71f2b0a6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cnl6ZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        model: "AMD Ryzen 7 3700X",
        price: 17200,
        desc: "Experience powerful multitasking and smooth gaming performance with the AMD Ryzen 7 3700X processor. It features 8 cores and 16 threads, with a base clock speed of 3.6GHz and a boost clock speed of 4.4GHz. Perfect for gamers and content creators.",
      },
      {
        id: 462,
        category: "Processors/CPU",

        imgUrl:
          "https://images.unsplash.com/photo-1616401014465-0e9f6e4695e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        model: "Intel Core i5 9600k",
        price: 12000,
        desc: "The Intel Core i5 9600k processor offers a balance of affordability and performance. With 6 cores and 6 threads, a base clock speed of 3.7GHz, and a boost clock speed of 4.6GHz, it delivers solid performance for gaming and everyday tasks.",
      },
      {
        id: 14563,
        category: "Processors/CPU",

        imgUrl:
          "https://images.unsplash.com/photo-1629725413175-396025477a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&h=570&q=80",
        model: "AMD Ryzen 9 5900X",
        price: 32000,
        desc: "Elevate your computing experience with the AMD Ryzen 9 5900X processor. This powerhouse features 12 cores and 24 threads, with a base clock speed of 3.7GHz and a boost clock speed of 4.8GHz. Enjoy exceptional performance for gaming, content creation, and more.",
      },
      {
        id: 236144,
        category: "Processors/CPU",

        imgUrl:
          "https://images.unsplash.com/photo-1555616635-640b71bdb185?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        model: "Intel Core i9 9900k",
        price: 28040,
        desc: "Unleash the power of the Intel Core i9 9900k processor. With 8 cores and 16 threads, a base clock speed of 3.6GHz, and a boost clock speed of 5.0GHz, it offers incredible performance for gaming, intensive multitasking, and demanding applications.",
      },
      {
        id: 2582325,
        category: "Processors/CPU",

        imgUrl:
          "https://images.unsplash.com/photo-1600348759986-dc35c2ec7743?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        model: "AMD Ryzen 5 3600",
        price: 10500,
        desc: "The AMD Ryzen 5 3600 processor offers exceptional value and performance for gaming and productivity tasks. With 6 cores and 12 threads, a base clock speed of 3.6GHz, and a boost clock speed of 4.2GHz, it delivers smooth and efficient performance.",
      },
    ],
  },
  Storage: {
    headline:
      "Maximize Your Device's Storage and Performance with Our Top-Notch Selection!",
    description:
      "Upgrade your device's storage capacity with our range of hard drives, solid-state drives, and external storage options from top brands.",
    products: [
      {
        id: 111611,
        category: "Storage",
        imgUrl:
          "https://images.unsplash.com/photo-1659535880591-78ed91b35158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        model: "Samsung 980 Pro 1TB",
        price: 8500,
        desc: "The Samsung 980 Pro 1TB is a high-performance NVMe SSD that delivers lightning-fast speeds for your storage needs. With its PCIe 4.0 interface and advanced V-NAND technology, it offers exceptional read and write speeds, making it perfect for gaming, content creation, and heavy workloads.",
      },
      {
        id: 2721,
        category: "Storage",
        imgUrl:
          "https://images.unsplash.com/photo-1601737487795-dab272f52420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        model: "Seagate 10TB HDD",
        price: 5980,
        desc: "The Seagate 10TB HDD provides massive storage capacity for your files, documents, and media. With its reliable performance and large storage space, it's an ideal choice for storing large amounts of data, backups, and multimedia content.",
      },
    ],
  },
  "Graphics Card/GPU": {
    headline:
      "Experience Stunning Visuals and Smooth Gaming Performance with Our Graphics Cards!",
    description:
      "Our high-performance graphics cards offer stunning visuals, fast frame rates, and smooth gaming performance to take your gaming experience to the next level.",
    products: [
      {
        id: 3678818,
        category: "Graphics Card",

        imgUrl:
          "https://images.unsplash.com/photo-1634672350437-f9632adc9c3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        model: "MSI Nvidia Geforce GTX 780 Twin Frozr",
        price: "PHP 12,000",
        desc: "Experience stunning visuals and smooth gameplay with the MSI Nvidia Geforce GTX 780 Twin Frozr graphics card. With its advanced cooling system and powerful performance, it's a reliable choice for gaming enthusiasts.",
      },
      {
        id: 41893,
        category: "Graphics Card",

        imgUrl:
          "https://images.unsplash.com/photo-1591489237701-57358ac6d20d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",

        model: "Asus Dual GeForce RTX 2060 EVO",
        price: "PHP 20,000",
        desc: "The Asus Dual GeForce RTX 2060 EVO graphics card delivers excellent performance for gaming and content creation. With its dual-fan cooling system and 6GB GDDR6 memory, it offers a reliable and efficient solution for high-quality visuals.",
      },
      {
        id: 680021,
        category: "Graphics Card",

        imgUrl:
          "https://images.unsplash.com/photo-1616877562286-7b0e823ddf0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80",
        model: "EVGA GeForce RTX 3090",
        price: "PHP 135,000",
        desc: "Unleash the ultimate gaming and creative power with the EVGA GeForce RTX 3090. With its groundbreaking performance and massive 24GB GDDR6X memory, it sets a new benchmark for high-end graphics cards.",
      },
      {
        id: 403103,
        category: "Graphics Card",

        imgUrl:
          "https://images.unsplash.com/photo-1625633979481-bcbaa10165f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",

        model: "Radeon 6700XT",
        price: "PHP 25,000",
        desc: "Experience exceptional gaming performance with the Radeon 6700XT graphics card. With its advanced RDNA 2 architecture and 12GB GDDR6 memory, it delivers stunning visuals and smooth gameplay for demanding titles.",
      },
      {
        id: 418,
        category: "Graphics Card",
        imgUrl:
          "https://images.unsplash.com/photo-1622957040873-8ea24e293885?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
        model: "Gigabyte RTX 2060",
        price: "PHP 18,000",
        desc: "The Gigabyte RTX 2060 graphics card offers an excellent balance of performance and value. With its 6GB GDDR6 memory and Ray Tracing support, it delivers immersive gaming experiences and smooth graphics rendering.",
      },
    ],
  },
};

export default products;
