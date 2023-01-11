import { getItems } from './servicios/firebase.service'
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './test.css'
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
export default function MostrarDatos() {
    const [datos, setDatos] = useState(null);

    const obtenerDatos = async () => {
        getItems().then(
            items => { setDatos(items) }

        )
    }
    useEffect(() => {
        obtenerDatos();
    }, []);

    if (!datos) {
        return <p>Cargando datos...</p>;
    }

    if (datos && datos.length > 0) {
        return <div className='listado'>
            <GetTable rows={datos}></GetTable>
            <Button variant="contained" color="primary" key={Math.random()} >
                <Link to="/" className='btn-volver'>Volver</Link>

            </Button>
        </div>




    }



}





const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});



export function GetTable(properties) {
    const classes = useStyles();

    return (
        <div className='table-padding'>



            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" >
                    <TableHead>
                        <TableRow  >
                            <TableCell>Nombre completo</TableCell>
                            <TableCell align="right">Correo electrónico</TableCell>
                            <TableCell align="right">Fecha de nacimiento</TableCell>
                            <TableCell align="right">País</TableCell>
                            <TableCell align="right">Terminos y condiciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {properties.rows.map((row) => (
                            <TableRow key={Math.random()} >
                                <TableCell component="th" scope="row">
                                    {row.full_name}
                                </TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.birth_date}</TableCell>
                                <TableCell align="right">{row.country_of_origin}</TableCell>
                                {/* <TableCell align="right">{row.terms_and_conditions}</TableCell> */}

                                <TableCell padding="checkbox">
                                    <Checkbox checked={row.terms_and_conditions} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}