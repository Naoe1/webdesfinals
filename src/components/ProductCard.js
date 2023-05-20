import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  createStyles,
  Center,
  Button,
  rem,
} from "@mantine/core";
import {
  IconGasStation,
  IconGauge,
  IconManualGearbox,
  IconUsers,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  imageSection: {
    padding: theme.spacing.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: rem(-0.25),
    textTransform: "uppercase",
  },

  section: {
    padding: theme.spacing.md,
  },
}));

const mockdata = [
  { label: "4 passengers", icon: IconUsers },
  { label: "100 km/h in 4 seconds", icon: IconGauge },
  { label: "Automatic gearbox", icon: IconManualGearbox },
  { label: "Electric", icon: IconGasStation },
];

export function ProductCard({ prod, setCart, cart }) {
  const { classes } = useStyles();
  return (
    prod && (
      <Card withBorder radius="md" className={classes.card}>
        <Card.Section className={classes.imageSection}>
          <Image src={prod.imgUrl} alt={prod.model} radius="md" />
        </Card.Section>

        <Group position="apart" mt="md" noWrap>
          <div>
            <Text fw={500}>{prod.model}</Text>
            <Text fz="xs" c="dimmed">
              Free Delivery in NCR
            </Text>
          </div>
          {/* <Badge variant="outline">{percentOff}% off</Badge> */}
        </Group>

        {prod.specifications ? (
          <Card.Section className={classes.section} mt="md">
            <Text fz="sm" c="dimmed" className={classes.label}>
              Specifications
            </Text>
            <Group spacing={8} mb={-8}>
              {prod.specifications.map((feature) => (
                <Center key={feature.label}>
                  <feature.icon
                    size="1.05rem"
                    className={classes.icon}
                    stroke={1.5}
                  />
                  <Text size="xs">{feature.label}</Text>
                </Center>
              ))}
            </Group>
          </Card.Section>
        ) : (
          <Card.Section className={classes.section}>
            <Text fz="sm" className={classes.label}>
              Description
            </Text>
            <Text fz="xs" c="dimmed">
              {prod.desc}
            </Text>
          </Card.Section>
        )}

        <Card.Section className={classes.section}>
          <Group spacing={30}>
            <div>
              <Text fz="xl" fw={700} sx={{ lineHeight: 1 }}>
                PHP {prod.price}
              </Text>
            </div>

            <Button
              radius="xl"
              style={{ flex: 1 }}
              color={cart.some((item) => item.id === prod.id) ? "red" : "blue"}
              onClick={() => {
                if (cart.some((item) => item.id === prod.id)) {
                  setCart((prev) => prev.filter((item) => item.id !== prod.id));
                } else {
                  setCart((prev) => [...prev, prod]);
                }
              }}
            >
              {cart.some((item) => item.id === prod.id)
                ? "Remove from Cart"
                : "Add to Cart"}
            </Button>
          </Group>
        </Card.Section>
      </Card>
    )
  );
}
