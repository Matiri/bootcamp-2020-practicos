import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles({
  footer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '80%',
    borderTop: '1px rgba(255, 255, 255, 0.12) solid',
    marginTop: 64,
    paddingTop: 48,
    paddingBottom: 48,
  },
  footer_Card: {
    padding: 16,
    display: 'inline-block',
    backgroundColor: '#121212',
    color: '#ffffff',
    verticalAlign: 'top',
    width: '21%',
  },
  
  footer_CardHeader: {
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: '0.35em',
    fontSize: '1.25rem',
    fontWeight: 500,
    lineHeight: 1.6,
    letterSpacing: '0.0075em',
  },

  footer_List: {
    listStyle: 'none',
    paddingLeft: 16,
    lineHeight: 1.75,
  },

  footer_List_Link: {
    color: 'rgba(255, 255, 255, 0.7)',
  },

  footer_Copyright: {
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    fontSize: '0.875rem',
  }
})
export default function Footer(){
  const classes = useStyles();

  return(
    <footer className = {classes.footer}>
      
        <Card elevation = {0} className = {classes.footer_Card}>
          <CardHeader
            className = {classes.footer_CardHeader}
            title = 'Company' 
            />
            <Typography>
              <ul className = {classes.footer_List}>
                <li><Link className = {classes.footer_List_Link} href = '#'>Team</Link></li>
                <li><Link className = {classes.footer_List_Link} href = '#'>History</Link></li>
                <li><Link className = {classes.footer_List_Link} href = '#'>Contact us</Link></li>
                <li><Link className = {classes.footer_List_Link} href = '#'>Locations</Link></li>
              </ul>
            </Typography>
        </Card>


        <Card elevation = {0} className = {classes.footer_Card}>
          <CardHeader
            className = {classes.footer_CardHeader}
            title = 'Features' 
            />
            <Typography>
              <ul className = {classes.footer_List}>
                <li><Link className = {classes.footer_List_Link} href = '#'>Cool stuff</Link></li>
                <li><Link className = {classes.footer_List_Link} href = '#'>Random feature</Link></li>
                <li><Link className = {classes.footer_List_Link} href = '#'>Team feature</Link></li>
                <li><Link className = {classes.footer_List_Link} href = '#'>Developer stuff</Link></li>
                <li><Link className = {classes.footer_List_Link} href = '#'>Another one</Link></li>
              </ul>
            </Typography>
        </Card>


        <Card elevation = {0} className = {classes.footer_Card}>
          <CardHeader
            className = {classes.footer_CardHeader}
            title = 'Resources' 
            />
            <Typography>
              <ul className = {classes.footer_List}>
                <li><Link className = {classes.footer_List_Link} href = '#'>Resource</Link></li>
                <li><Link className = {classes.footer_List_Link} href = '#'>Resource name</Link></li>
                <li><Link className = {classes.footer_List_Link} href = '#'>Another resource</Link></li>
                <li><Link className = {classes.footer_List_Link} href = '#'>Final resource</Link></li>
              </ul>
            </Typography>
        </Card>

        <Card elevation = {0} className = {classes.footer_Card}>
          <CardHeader
            className = {classes.footer_CardHeader}
            title = 'Legal' 
            />
            <Typography>
              <ul className = {classes.footer_List}>
                <li><Link className = {classes.footer_List_Link} href = '#'>Privacy Policy</Link></li>
                <li><Link className = {classes.footer_List_Link} href = '#'>Terms of use</Link></li>
              </ul>
            </Typography>
        </Card>
        <Typography className = {classes.footer_Copyright}>
          Copyright @ <Link className = {classes.footer_List_Link} href = 'https://github.com/Matiri'>Your Website</Link> 2020.
        </Typography>
    </footer>
  )
} 