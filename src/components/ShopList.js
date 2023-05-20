import { createStyles, Title, Text, Container, rem, Grid } from "@mantine/core";
import { ProductCard } from "./ProductCard";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import products from "../products";
const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(34),
    fontWeight: 900,
    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(24),
    },
    marginTop: "30px",
  },
  description: {
    maxWidth: 600,
    margin: "auto",
  },
}));

const ShopList = ({ prodDisplay, setProdDisplay, setCart, cart }) => {
  const { classes } = useStyles();
  const location = useLocation();
  useEffect(() => {
    const formatNameForAccess = (pathname) => {
      if (pathname === "laptops") return "Laptop";
      if (pathname === "keyboards") return "Keyboard";
      if (pathname === "mouse") return "Mouse";
      if (pathname === "processors") return "Processors/CPU";
      if (pathname === "storage") return "Storage";
      if (pathname === "graphics") return "Graphics Card/GPU";
      return;
    };
    const productPath = location.pathname.split("/")[2];
    setProdDisplay(products[formatNameForAccess(productPath)]);
  }, []);
  return (
    <Container size="lg">
      <Title order={2} className={classes.title} ta="center">
        {prodDisplay?.headline}
      </Title>
      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        {prodDisplay?.description}
      </Text>
      <Grid mt="40px">
        {
          prodDisplay?.products.map((prod,i) => <Grid.Col key={i} span={4}><ProductCard prod={prod} setCart={setCart} cart={cart}/></Grid.Col>)
        }
        <Grid.Col span={4}><ProductCard/></Grid.Col>
      </Grid>
    </Container>
  );
};

export default ShopList;
