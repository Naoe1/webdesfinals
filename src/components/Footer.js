import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
  rem,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import CybixLogo from "../assets/CybixLogo.png";


const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
  },

  logo: {
    maxWidth: rem(200),

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  description: {
    marginTop: rem(5),

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  wrapper: {
    width: rem(160),
  },

  link: {
    display: "block",
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(3),
    paddingBottom: rem(3),
    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },
  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

export function FooterLinks() {
  const { classes } = useStyles();
  const data = [
    {
      title: "Project",
      links: [
        {
          label: "Contribute",
          link: "#",
        },
        {
          label: "React",
          link: "https://react.dev/",
        },
        {
          label: "Mantine",
          link: "https://mantine.dev/",
        },
      ],
    },
    {
      title: "Community",
      links: [
        {
          label: "Join Discord",
          link: "https://discord.com/invite/7gyNrGx",
        },
        {
          label: "Follow on Twitter",
          link: "https://twitter.com/cybiixxxx",
        },
        {
          label: "GitHub discussions",
          link: "https://docs.github.com/en/discussions",
        },
      ],
    },
  ];
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text key={index} component="a" className={classes.link} href={link.link}>
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
        <img src={CybixLogo} alt="Logo" style={{width: "114px"}}/>
          <Text size="xs" color="dimmed" className={classes.description}>
            Efficient Platform connecting buyers and sellers for seamless transactions.
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Group spacing={0} className={classes.social} position="right" noWrap>
          <a href="https://twitter.com/cybiixxxx">
            <ActionIcon size="lg">
                <IconBrandTwitter size="1.05rem" stroke={1.5} />
            </ActionIcon>
          </a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <ActionIcon size="lg">
              <IconBrandYoutube size="1.05rem" stroke={1.5} />
            </ActionIcon>
          </a>
        </Group>
      </Container>
    </footer>
  );
}
