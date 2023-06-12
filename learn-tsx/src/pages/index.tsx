import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { ChangeEventHandler, useRef } from 'react';
import Button from '@mui/material/Button'
import Login from './login';
import { ValueListenableBuilder, ValueNotifier } from '../hook';
import { TableCell, TableHead, TableRow, Table, TableBody, TextField, Box, Modal } from '@mui/material';
import { BorderRight } from '@mui/icons-material';
function Home() {
  const users = [{
    id: "01", name: "John", lastname: "Doe"
  }, {
    id: "02", name: "Jason", lastname: "Hamburgur"
  }];
  const notifiers: Array<ValueNotifier> = useRef(users.map((item, index) => new ValueNotifier(item))).current;
  const modalNotifier = useRef(new ValueNotifier(users[0])).current;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return <Box>
    <Modal disableAutoFocus={true} open={open} onClose={handleClose} sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: "8px",
        p: "50px"
      }}>
        <ValueListenableBuilder valueListenable={modalNotifier} builder={(value: {
          id: string;
          name: string;
          lastname: string;
        }) => {
          const targetNotifier: ValueNotifier | undefined = notifiers.find((item) => item.get().id == value.id);
          return <>
            <TextField
              defaultValue={value.id}
              label="id"
              sx={{
                m: "10px",
              }}
              inputProps={{
                readOnly: true,
              }}
            />
            <TextField
              label="name"
              defaultValue={value.name}
              sx={{
                m: "10px"
              }}
              onChange={(event) => {
                modalNotifier.set({ ...value, name: event.target.value })
              }}
            />
            <TextField
              label="lastname"
              defaultValue={value.lastname}
              sx={{
                m: "10px"
              }}
              onChange={(event) => {
                modalNotifier.set({ ...value, lastname: event.target.value })
              }}
            />
            <Button variant="contained" color="primary" onClick={() => {
              targetNotifier?.set(value);
              handleClose();
            }} sx={{
              textTransform: "capitalize"
            }}>
              Submit
            </Button>
          </>
        }} />
      </Box>
    </Modal>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>LastName</TableCell>
          <TableCell>Edit</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          users.map((item, index) => (
            <ValueListenableBuilder key={index} valueListenable={notifiers[index]} builder={(value: {
              id: string;
              name: string;
              lastname: string;
            }) => {
              return <TableRow >
                <TableCell>{value.id}</TableCell>
                <TableCell>
                  {value.name}
                </TableCell>
                <TableCell>{value.lastname}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => {
                    modalNotifier.set(value);
                    handleOpen();
                  }}>
                    Edit
                  </Button>
                </TableCell>
              </TableRow>;
            }} />
          ))
        }
      </TableBody>
    </Table>
  </Box>
}
export default Home;