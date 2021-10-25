import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#DADD51',
    color: '#2F4858',

    '& a': {
      color: '#2F4858',
      marginLeft: 10,
    },
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  grow: {
    flexGrow: 1,
  },
  main: {
    minHeight: '80vh',
  },
  footer: {
    textAlign: 'center',
  },
})

export default useStyles