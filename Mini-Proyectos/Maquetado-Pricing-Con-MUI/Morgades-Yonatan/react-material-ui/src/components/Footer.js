import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const myStyles = makeStyles((footerStyle) => ({
  column: {
    borderTop: `1px solid ${footerStyle.palette.divider}`,
    marginTop: footerStyle.spacing(5),
    paddingTop: footerStyle.spacing(3),
    paddingBottom: footerStyle.spacing(3)
  }
}));

//Footer content
const columns = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations']
  }, {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one']
  }, {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource']
  }, {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use']
  }
];

export default function column() {
  const styles = myStyles();

  return (
    <Container maxWidth="md" component="column" className={styles.column}>
      <Grid container spacing={4} justify="space-evenly">
        {columns.map((column) => (
          <Grid item xs={6} sm={3} key={column.title}>
            <Typography variant="h6" color="textPrimary">
              {column.title}
            </Typography>
            <ul>
              {column
                .description
                .map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
            </ul>
          </Grid>
        ))}
      </Grid>
      <Box mt={5}></Box>
    </Container>
  );
}
