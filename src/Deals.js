import React, { useState} from 'react';
import SubmitDeal from './SubmitDeal'
import { Button } from 'reactstrap';

export default function Deals(props) {
    const [ isCreate, setisCreate ] = useState(false)
    const [ list, setList ] = useState([])

    
    const handleCreate = (val) => {
        setisCreate(val)
    }

    const saveForm = (val) => {
        setList(val)
    }

    const handleDelete = (dealId) => {
        const newList = [...list];
        const index = list.findIndex((deal) => deal.id === dealId);
        newList.splice(index, 1);
        setList(newList);
    }

    const renderTable = () => {
        return list.map((item,index) => {
            return (
                <tr key={index}>
                <td className="partDeal">{item.part}</td>
                <td className="nameDeal">{item.dealName}</td>
                <td className="opriceDeal">${item.ogPrice}</td>
                <td className="priceDeal">${item.salePrice}</td>
                <td className="sellerDeal">{item.seller}</td>
                <td> <a href={item.productLink} target="_blank"><Button color="success" outline="true" >Buy</Button></a></td>
                <td className="detailDeal">{item.additionalInfo}</td>
                <td><Button color="danger" outline="true" onClick={handleDelete}>Delete</Button></td>
            </tr>
            )
        })
    }


    return (       
            <div>
            <div className='deals-header-img' aria-label="background image computer header"></div>
                {
                    !isCreate ? 
                    <header className="deals-header">
                    <div className="text-center">
                        <h1 className="section-heading text-uppercase">Deals</h1>
                        <h2 className="section-subheading text-muted">Keep track of and log new deals here.</h2>
                    </div>
                </header> : ''
                }
                {
                    list.length !== 0  && !isCreate?
                    <div className="container-fluid">
                        <table className="table" border="1">
                        <thead>
                            <tr>
                            <th>Component</th>
                            <th>Deal Name</th>
                            <th className="opriceDeal">Original Price ($)</th>
                            <th>Current Sale Price ($)</th>
                            <th className="sellerDeal">Seller(s)</th>
                            <th>Link</th>
                            <th className="detailDeal">Additional Details</th>
                            </tr>
                        </thead>
                        <tbody>
                        {renderTable()}
                        </tbody>
                    </table>
                </div>: ''
                }
                {
                    isCreate ? <SubmitDeal  
                    handleCreate={handleCreate}
                    saveForm={saveForm}
                    isCreate={isCreate}
                    list={list}
                    /> : ''
                }
                {
                    !isCreate ? 
                    <section>
                    <div className="container">
                        <div className="d-grid gao-2">
                            <Button color="primary" onClick={() => {handleCreate(true)}}>Create a new deal</Button>
                        </div>
                    </div>
                </section>:''
                }
            </div>
    )
}