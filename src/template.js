


import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import "./test.css";
import { createItem } from './servicios/firebase.service'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';


import { useNavigate } from 'react-router-dom';


export default function Templatetest() {
    const [datos, setDatos] = useState(null);

    const [formulario, setFormulario] = useState({});

    const navigate = useNavigate();

    const obtenerDatos = async () => {
        await fetch('/db.json')
            .then(data => data.json())
            .then(json => setDatos(json))

    }
    const handleChange = (value, name) => {

        formulario[name] = value;
        setFormulario(formulario)
        console.log(formulario)
     
    }

    useEffect(() => {
        obtenerDatos();
    }, []);

    if (!datos) {
        return <p>Cargando datos...</p>;
    }
    let controls = [];
    if (datos && datos.items.length > 0) {
        datos.items.forEach(control => {


            switch (control.type) {
                case "text":
                    controls.push(<TextField key={Math.random()} 
                    value={formulario[control.name]}
                    label={control.label} onChange={(event) => handleChange(event.target.value, control.name)}
                        variant="filled" />)
                    break;
                case "email":
                    controls.push(<TextField key={Math.random()}
                    value={formulario[control.name]}
                    label={control.label} type="email" variant="filled" onChange={(event) => handleChange(event.target.value, control.name)} />)
                    break;
                case "date":
                    controls.push(<TextField
                        variant="filled"
                        type="date"

                        defaultValue={new Date().toString()}
                        key={Math.random()} label={control.label}
                        onChange={(event) => handleChange(event.target.value, control.name)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />)
                    break;
                case "select":
                 
                    controls.push(
                    <FormControl key={Math.random()} className="select-country">
                        <InputLabel>{control.label}</InputLabel>
                        <Select
                       variant="filled"
                          value={formulario[control.name]}
                          onChange={(event) => handleChange(event.target.value, control.name)}
                        >

                            {
                                control.options.map(option => {
                                    return <MenuItem key={Math.random()} value={option.value}>{option.label}</MenuItem>
                                })
                            }
                         
                        </Select>
                      </FormControl>)
                    break;
                case "checkbox":
                    controls.push(
                        <FormControlLabel key={Math.random()}
                            control={
                                <Checkbox
                                variant="filled"
                                    onChange={(event) => handleChange(event.target.checked, control.name)}
                                    name={control.name}
                                    color="primary"
                                />
                            }
                            label={control.label}
                        />
                    )
                    break;
                case "submit":
                    controls.push(<Button variant="contained" color="primary" type="submit" key={Math.random()} >{control.label}</Button>)
                    break;
                default:
                    break;
            }
        })



    }
  
    const manejarSubmit = e => {
        e.preventDefault();
        console.log(formulario)
        console.log("enviar info");
        createItem(formulario)
            .then(resultado => {
                navigate("/Listado")
            })
            .catch(error => {

            })
    };


    return (
        <div className='contenedor'>
            <form className="templatecss" noValidate autoComplete="off" onSubmit={manejarSubmit}>
                {controls}
            </form>
      
        </div>

    );
}







