import { registerLocale } from "react-datepicker";
import DatePicker from "react-datepicker";
import { useMemo, useState } from 'react';
import { addHours, differenceInSeconds } from 'date-fns';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
import 'sweetalert2/dist/sweetalert2.min.css'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const CalendarModal = () => {
    registerLocale('es', es)
    const [open, setOpen] = useState(false);
    const [isFormValue, setIsFormValue] = useState(false);
    const [formValue, setFormValue] = useState({
        title: 'fernan',
        notes: 'nota nueva',
        start: new Date(),
        end: addHours(new Date(), 3)
    })

    const titleClass = useMemo(() => {
        if(!isFormValue ) return ''
        return (formValue.title.length > 0) ? '' : 'is-invalid'

    }, [formValue.title, isFormValue])
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onHandleChange = ({ target }) => {
        setFormValue({
            ...formValue,
            [target.name]: target.value
        })
    }

    const onHandleDateChange = (event, changing) => {
        setFormValue({
            ...formValue,
            [changing]: event
        })
    }

    const onSubmit = (event) => {
        setIsFormValue(true)
        event.preventDefault()
        const difference = differenceInSeconds(formValue.end, formValue.start)
        if (isNaN(difference) || difference <= 0) {
              Swal.fire('Fechas incorrectas', 'la fecha de fin no puede ser anterior a la fecha de inicio', 'error')
            return
        }

        if (formValue.title <= 0) return;
    }

    return (
        <div className="container">
            <Button sx={{color: 'white'}} onClick={handleOpen} >Agregar evento</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} >
                    <h1> Nuevo evento </h1>
                    <hr />
                    <form className="container">

                        <div className="form-group mb-2">
                            <label>Fecha y hora inicio</label>
                            <DatePicker
                                locale='es'
                                selected={formValue.start}
                                onChange={(event) => onHandleDateChange(event, 'start')}
                                showTimeSelect
                                dateFormat="Pp"
                                timeCaption="Hora"
                            />
                        </div>

                        <div className="form-group mb-2">
                            <label>Fecha y hora fin</label>
                            <DatePicker
                                locale='es'
                                minDate={formValue.start}
                                selected={formValue.end}
                                onChange={(event) => onHandleDateChange(event, 'end')}
                                showTimeSelect
                                dateFormat="Pp"
                                timeCaption="Hora"
                            />
                        </div>

                        <hr />
                        <div className="form-group mb-2">
                            <label>Titulo y notas</label>
                            <input
                                type="text"
                                className= {`form-control ${titleClass}`}
                                placeholder="Título del evento"
                                name="title"
                                autoComplete="off"
                                value={formValue.title}
                                onChange={onHandleChange}
                            />
                            <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                        </div>

                        <div className="form-group mb-2">
                            <textarea
                                type="text"
                                className="form-control"
                                placeholder="Notas"
                                rows="5"
                                name="notes"
                                value={formValue.notes}
                                onChange={onHandleChange}
                            ></textarea>
                            <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-outline-primary btn-block"
                            onClick={onSubmit}
                        >
                            <i className="far fa-save"></i>
                            <span> Guardar</span>
                        </button>

                    </form>
                </Box>
            </Modal>
        </div>
    );
}
