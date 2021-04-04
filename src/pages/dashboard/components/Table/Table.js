import React from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@material-ui/core";

//import useStyles from "../../styles";

// Fechas
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale';

/*const states = {
  sent: "success",
  pending: "warning",
  declined: "secondary",
};*/

export default function TableComponent({ data }) {
  //const classes = useStyles();

  const keys = ["Nombre", "Correo", "Cédula", "Celular", "Creado"];

  //keys.shift(); // delete "id" key

  return (
    <Table className="mb-0">
      <TableHead>
        <TableRow>
          {keys.map(key => (
            <TableCell key={key}>{key}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(({ id, nombre, email, cedula, celular, creado }) => (
          <TableRow key={id}>
            <TableCell className="pl-3 fw-normal">{nombre}</TableCell>
            <TableCell>{email}</TableCell>
            <TableCell>{cedula}</TableCell>
            <TableCell>{celular}</TableCell>
            <TableCell>{formatDistanceToNow(new Date(creado), {locale: es})}</TableCell>
          </TableRow>
        ))}
      </TableBody>

    </Table>
  );
}
