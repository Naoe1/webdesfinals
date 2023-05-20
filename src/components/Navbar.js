import products from "../products"
import {
  createStyles,
  Navbar,
  getStylesRef,
  useMantineTheme,
} from "@mantine/core";
import {Link} from "react-router-dom";
import {
  IconDeviceLaptop,
  IconMicrowave,
  IconKeyboard,
  IconMouse,
  IconCpu2,
  IconDeviceFloppy,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    fontSize: "13px",
    color: theme.colors.gray[7],
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,
    "&:hover": {
      backgroundColor: theme.colors.gray[0],
      color: theme.black,
      [`& .${getStylesRef("icon")}`]: {
        color: theme.black,
      },
    },
  },
  linkIcon: {
    ref: getStylesRef("icon"),
    color: theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },
}));

const data = [
  { link: "/shop/laptops", label: "Laptop", icon: IconDeviceLaptop, },
  { link: "/shop/processors", label: "Processors/CPU", icon: IconCpu2 },
  { link: "/shop/graphics", label: "Graphics Card/GPU", icon: IconMicrowave },
  { link: "/shop/keyboards", label: "Keyboard", icon: IconKeyboard },
  { link: "/shop/mouse", label: "Mouse", icon: IconMouse },
  { link: "/shop/storages", label: "Storage", icon: IconDeviceFloppy },
];

export default function NavbarSimple({setProdDisplay}) {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const links = data.map((item) => (
    <Link
      className={classes.link}
      href={item.link}
      key={item.label}
      to={item.link}
      onClick={() => setProdDisplay(products[item.label])}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <Navbar
      hiddenBreakpoint="sm"
      hidden={true}
      width={{ sm: 200, lg: 250 }}
      height={700}
      p="md"
    >
      <Navbar.Section grow>{links}</Navbar.Section>
    </Navbar>
  );
}
