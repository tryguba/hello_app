import { makeStyles } from '@material-ui/styles';

export const useStylesApp = makeStyles({
  app: {
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  scale: {
    backgroundColor: 'grey',
  },
  mainWrap: {
    width: '100%',
    height: '100%',
  },
  main: {
    width: '100%',
    height: '70%',
    padding: '0 0.4em',
    boxSizing: 'border-box',
  },

  buttons: {
    display: 'flex',
    flexDirection: 'column',
  },
});
