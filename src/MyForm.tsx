import * as Yup from 'yup';
import {Formik, Form, Field} from 'formik'
import { CenterFormValues } from './models/center';
import CustomSelect from './common/CustomSelect';
import MyTextInput from './common/MyTextInput';
import { Button } from 'react-bootstrap';


export default function MyForm() {

const specializations = [
    {
        label: 'One',
        value: 1
    },
    {
        label: 'Two',
        value: 2
    },

    {
        label: 'Three',
        value: 3
    }

];

const workScopes =  [
    {
        label: 'Construction',
        value: 1
    },
    {
        label: 'Grocery',
        value: 2
    },

    {
        label: 'WholeSale',
        value: 3
    },

    {
        label: 'Building',
        value: 3
    }


];



const validationSchema = Yup.object({     
    specializations: Yup.array().min(1, "Field required").required('Field required'),   
})

function handleFormSubmit(center: CenterFormValues) {
       
        console.log(center); 
}


function handleChange(value: any){
    console.log();
}

    return (
        <div>
               <Formik 
                enableReinitialize={true}
                initialValues={{
                    id: 0,                  
                    specializations: [0],
                   
                }} 
                onSubmit={ fromValues =>  handleFormSubmit(fromValues)}
                validationSchema={validationSchema}
            >
                {({ handleSubmit, isValid, isSubmitting, dirty}) => (
                   
                    <Form onSubmit={handleSubmit} >
                        <div className='card'>
                            <div className='card-header'>
                                <h4>Center Form </h4>
                            </div>

                            <div className="card-body">



                            <div className='row'>
                                <Field
                                        label="Special"
                                        className=""
                                        name="specilizationIdId"
                                        options={specializations}
                                        component={CustomSelect}
                                        placeholder="select"
                                        isMulti={false}

                                        onChange={() => {
                                            handleChange('ookkkk');
                                           
                                          }}
                                    />
                            </div>

                            <div className="row">
                              <MyTextInput name='name' label='Center Name' placeholder='Center Name' />
                            </div>                           
                           
                            <div className='row'>
                          


                            <div className="row">
                              <MyTextInput name='establishmentDate' type='date' label='Date' placeholder='Date' />
                            </div>



                            <div className='row'>
                                <Field
                                        label="Scope"
                                        className=""
                                        name="workScopes"
                                        options={workScopes}
                                        component={CustomSelect}
                                        placeholder=""
                                        isMulti={true}
                                    />
                            </div>



                                <div className="row">
                                    <div className="form-group">

                                        <Button
                                            disabled={ !dirty || !isValid}
                                            type='submit' className="btn btn-primary" >
                                         Submit
                                       

                                        </Button>
                                    </div>
                                </div>


                            </div>
                        </div>
                        </div>
                    </Form>
                )}
            </Formik>   
        </div>
    )
}
