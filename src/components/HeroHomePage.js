import { createStyles, Overlay, Container, Title, Button, Text, rem } from '@mantine/core';

export function HeroHomePage({bgUrl, title, desc}) {
  const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage:
      `url(${bgUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  container: {
    height: rem(400),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: `calc(${theme.spacing.xl} * 6)`,
    zIndex: 1,
    position: 'relative',
    [theme.fn.smallerThan('sm')]: {
      height: rem(200),
    },
  },

  title: {
    color: theme.white,
    fontSize: rem(50),
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(30),
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(24),
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
}));

  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Title className={classes.title}>{title}</Title>
        <Text className={classes.description} size="xl" mt="xl">
         {desc}
        </Text>
      </Container>
    </div>
  );
}