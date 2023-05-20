import { HeroHomePage } from "./HeroHomePage";
import { Carousel } from "@mantine/carousel";

const Home = () => {
  const carouselInfo = [{
    url: "https://images.unsplash.com/photo-1623181748498-f29149fd4214?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    title: "Unleash the Potential of Your Rig!",
    description: "Explore our premium selection of high-quality CPUs and cutting-edge graphics cards",
  },
  {
    url: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=842&q=80",
    title: "Level Up Your Gaming Experience!",
    description: "Unleash your gaming prowess with our extensive collection of top-notch gaming gear",
  },
  {
    url: "https://images.unsplash.com/photo-1600348759986-dc35c2ec7743?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    title: "Epicenter of technological revolution",
    description: "Explore our curated collection of futuristic gadgets, advanced electronics, and game-changing tech accessories, and ignite the spark of innovation within you!",
  },
  {
    url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    title: "Forging Path with Quality Hardware!",
    description: "Discover our meticulously crafted selection of top-tier components, robust peripherals, and reliable accessories",
  },
]
  const slides = carouselInfo.map(info => (
    <Carousel.Slide>
        <HeroHomePage bgUrl={info.url} title={info.title} desc={info.description}/>
    </Carousel.Slide>
  ))
  return (
    <div>
      <Carousel mx="auto" withIndicators height={"100%"} width={"100%"} loop>
        {slides}
      </Carousel>
    </div>
  );
};

export default Home;
