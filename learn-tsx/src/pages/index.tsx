import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react';
import Button from '@mui/material/Button'
import Login from './login';
class Home extends React.Component {
  constructor(props: any) {
    super(props);
  }
  render(): React.ReactNode {
    return <Login></Login>
  }
}
export default Home;