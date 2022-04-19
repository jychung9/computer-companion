import React, { useEffect, useState } from 'react';
import { getDatabase, get, ref, child} from 'firebase/database';
import { Button } from 'reactstrap';

export default function YourBuild() {
                    
    const selectsOption = [
        {key:'All',val:'All'},
        {key:'Cpu',val:'CPU component'},
        {key:'Graphics',val:'Hardware'},
        {key:'External',val:'Peripheral Device'},
        {key:'Other',val:'Other'},
    ].map((option) => {
        let component = <option key={option.key}>{option.val}</option>;
        return component;
    });
    const [selected,setselected] = useState('all')

    const handleChangeComponent = (event) => {
        let newValue = event.target.value;
        setselected(newValue)
    }

    const info = {
        'CPU':'CPU is the electronic circuitry that executes instructions comprising a computer program.',
        'CPU Cooler':'CPU Cooler are these cooling systems are generally referred to as air cooling and are often used in conjunction with systems that are designed to improve airflow.', 
        'Motherboard':'Motherboard is the backbone that ties the computers components together at one spot and allows them to talk to each other.',
        'RAM':'RAM is essentially short term memory where data is stored as the processor needs it.',
        'Hard Drive/Solid State Drive':'Hard drive is the component that stores all the data on your computer, from files to software.',
        'GPU':'GPU is an electronic circuit that your computer uses to speed up the process of creating and rendering computer graphics.', 
        'Case':'Case is the cabinet that contains the computers power supply, motherboard, memory, disk drives and other peripheral control units.',
        'Power Supply':'Power supply is a component that supplies power to at least one electric load.',
        'Monitor':'Monitor is an output device that displays information in pictorial or text form.', 
        'Keyboard':'Keyboard is for putting information including letters, words and numbers into your computer.', 
        'Mouse':'Mouse is a small, movable device that lets you control a range of things on a computer.', 
        'Other':'Other information'
    }

    const initialRow = (part) => {
        let url = '/yourBuild/' + info[part]
        const tableRow = (
            <tr key={part}>
                <td><a href={url}>{part}</a></td>
                <td className='lg-extra-name'>
                    No deal yet
                </td>
                <td className="lg-extra-oprice">
                    --
                </td>
                <td className="lg-extra-price">
                    --
                </td>
                <td className="lg-extra-seller">
                    --
                </td>
                <td className="lg-extra-button">
                    --
                </td>
            </tr>
        )
        return tableRow;
    };


    const [cpu, setCpu] = useState(initialRow('CPU'));
    const [cpuCooler, setCpuCooler] = useState(initialRow('CPU Cooler'));
    const [motherBoard, setMotherBoard] = useState(initialRow('Motherboard'));
    const [ram, setRam] = useState(initialRow('RAM'));
    const [drive, setDrive] = useState(initialRow('Hard Drive/Solid State Drive'));
    const [gpu, setGpu] = useState(initialRow('GPU'));
    const [cases, setCases] = useState(initialRow('Case'));
    const [power, setPower] = useState(initialRow('Power Supply'));
    const [monitor, setMonitor] = useState(initialRow('Monitor'));
    const [keyboard, setKeyboard] = useState(initialRow('Keyboard'));  
    const [mouse, setMouse] = useState(initialRow('Mouse'));
    const [other, setOther] = useState(initialRow('Other'));


    const showTable = () => {
        let type = {
            'All':[cpu,cpuCooler,motherBoard,ram,drive,gpu,cases,power,monitor,keyboard,mouse,other],
            'CPU component':[cpu,cpuCooler],
            'Hardware':[motherBoard,ram,drive,gpu],
            'Peripheral Device':[cases,power,monitor,keyboard,mouse],
            'Other':[other]
        }
        if(type[selected]){
            return type[selected].map( o => o)
        }
        return type['All'].map( o => o)
    }


    // Get realtime database data
    useEffect(() => {
        const dbRef = ref(getDatabase());
            get(child(dbRef, `deals`)).then((snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                for (let i in data) { 
                    if (data[i]['component'] == 'CPU') {
                        let url = '/yourBuild/' + info['CPU']
                        setCpu(
                            <tr>
                                <td><a href={url}>{data[i]['component']}</a></td>
                                <td className='lg-extra-name'>
                                    {data[i]['name']}
                                </td>
                                <td className="lg-extra-oprice">
                                    ${data[i]['originalPrice']}
                                </td>
                                <td className="lg-extra-price">
                                    ${data[i]['salePrice']}
                                </td>
                                <td className="lg-extra-seller">
                                    {data[i]['seller']}
                                </td>
                                <td className="lg-extra-button">
                                     <a href={data[i]['link'] } target="_blank" ><Button color="success" >Buy</Button></a>
                                </td>
                            </tr>
                        )
                    }
                    if (data[i]['component'] == 'CPU Cooler') {
                        let url = '/yourBuild/' + info['CPU Cooler']
                        setCpuCooler(
                            <tr>
                                <td><a href={url}>CPU Cooler</a></td>
                                <td className='lg-extra-name'>
                                    {data[i]['name']}
                                </td>
                                <td className="lg-extra-oprice">
                                    ${data[i]['originalPrice']}
                                </td>
                                <td className="lg-extra-price">
                                    ${data[i]['salePrice']}
                                </td>
                                <td className="lg-extra-seller">
                                    {data[i]['seller']}
                                </td>
                                <td className="lg-extra-button">
                                    <a href={data[i]['link']} target="_blank"><Button color="success" >Buy</Button></a>
                                </td>
                            </tr>
                        )
                    }
                    if (data[i]['component'] == 'Motherboard') {
                        let url = '/yourBuild/' + info['Motherboard']
                        setMotherBoard(
                            <tr>
                                <td><a href={url}>Motherboard</a></td>
                                <td className='lg-extra-name'>
                                    {data[i]['name']}
                                </td>
                                <td className="lg-extra-oprice">
                                    ${data[i]['originalPrice']}
                                </td>
                                <td className="lg-extra-price">
                                    ${data[i]['salePrice']}
                                </td>
                                <td className="lg-extra-seller">
                                    {data[i]['seller']}
                                </td>
                                <td className="lg-extra-button">
                                    <a href={data[i]['link']} target="_blank"><Button color="success" >Buy</Button></a>
                                </td>
                            </tr>
                        )
                    }
                    if (data[i]['component'] == 'RAM') {
                        let url = '/yourBuild/' + info['RAM']
                        setRam(
                            <tr>
                                <td><a href={url}>RAM</a></td>
                                <td className='lg-extra-name'>
                                    {data[i]['name']}
                                </td>
                                <td className="lg-extra-oprice">
                                    ${data[i]['originalPrice']}
                                </td>
                                <td className="lg-extra-price">
                                    ${data[i]['salePrice']}
                                </td>
                                <td className="lg-extra-seller">
                                    {data[i]['seller']}
                                </td>
                                <td className="lg-extra-button">
                                    <a href={data[i]['link']} target="_blank"><Button color="success" >Buy</Button></a>
                                </td>
                            </tr>
                        )
                    }
                    if (data[i]['component'] == 'Hard Drive/Solid State Drive') {
                        let url = '/yourBuild/' + info['Hard Drive/Solid State Drive']
                        setDrive(
                            <tr>
                                <td><a href={url}>Hard Drive/Solid State Drive</a></td>
                                <td className='lg-extra-name'>
                                    {data[i]['name']}
                                </td>
                                <td className="lg-extra-oprice">
                                    ${data[i]['originalPrice']}
                                </td>
                                <td className="lg-extra-price">
                                    ${data[i]['salePrice']}
                                </td>
                                <td className="lg-extra-seller">
                                    {data[i]['seller']}
                                </td>
                                <td className="lg-extra-button">
                                    <a href={data[i]['link']} target="_blank"><Button color="success" >Buy</Button></a>
                                </td>
                            </tr>
                        )
                    }
                    if (data[i]['component'] == 'GPU') {
                        let url = '/yourBuild/' + info['GPU']
                        setGpu(
                            <tr>
                                <td><a href={url}>GPU</a></td>
                                <td className='lg-extra-name'>
                                    {data[i]['name']}
                                </td>
                                <td className="lg-extra-oprice">
                                    ${data[i]['originalPrice']}
                                </td>
                                <td className="lg-extra-price">
                                    ${data[i]['salePrice']}
                                </td>
                                <td className="lg-extra-seller">
                                    {data[i]['seller']}
                                </td>
                                <td className="lg-extra-button">
                                    <a href={data[i]['link']} target="_blank"><Button color="success" >Buy</Button></a>
                                </td>
                            </tr>
                        )
                    }
                    if (data[i]['component'] == 'Case') {
                        let url = '/yourBuild/' + info['Case']
                        setCases(
                            <tr>
                                <td><a href={url}>Case</a></td>
                                <td className='lg-extra-name'>
                                    {data[i]['name']}
                                </td>
                                <td className="lg-extra-oprice">
                                    ${data[i]['originalPrice']}
                                </td>
                                <td className="lg-extra-price">
                                    ${data[i]['salePrice']}
                                </td>
                                <td className="lg-extra-seller">
                                    {data[i]['seller']}
                                </td>
                                <td className="lg-extra-button">
                                    <a href={data[i]['link']} target="_blank"><Button color="success" >Buy</Button></a>
                                </td>
                            </tr>
                        )
                    }
                    if (data[i]['component'] == 'Power Supply') {
                        let url = '/yourBuild/' + info['Power Supply']
                        setPower(
                            <tr>
                                <td><a href={url}>Power Supply</a></td>
                                <td className='lg-extra-name'>
                                    {data[i]['name']}
                                </td>
                                <td className="lg-extra-oprice">
                                    ${data[i]['originalPrice']}
                                </td>
                                <td className="lg-extra-price">
                                    ${data[i]['salePrice']}
                                </td>
                                <td className="lg-extra-seller">
                                    {data[i]['seller']}
                                </td>
                                <td className="lg-extra-button">
                                    <a href={data[i]['link']} target="_blank"><Button color="success" >Buy</Button></a>
                                </td>
                            </tr>
                        )
                    }
                    if (data[i]['component'] == 'Monitor') {
                        let url = '/yourBuild/' + info['Monitor']
                        setMonitor(
                            <tr>
                                <td><a href={url}>Monitor</a></td>
                                <td className='lg-extra-name'>
                                    {data[i]['name']}
                                </td>
                                <td className="lg-extra-oprice">
                                    ${data[i]['originalPrice']}
                                </td>
                                <td className="lg-extra-price">
                                    ${data[i]['salePrice']}
                                </td>
                                <td className="lg-extra-seller">
                                    {data[i]['seller']}
                                </td>
                                <td className="lg-extra-button">
                                    <a href={data[i]['link']} target="_blank"><Button color="success" >Buy</Button></a>
                                </td>
                            </tr>
                        )
                    }
                    if (data[i]['component'] == 'Keyboard') {
                        let url = '/yourBuild/' + info['Keyboard']
                        setKeyboard(
                            <tr>
                                <td><a href={url}>Keyboard</a></td>
                                <td className='lg-extra-name'>
                                    {data[i]['name']}
                                </td>
                                <td className="lg-extra-oprice">
                                    ${data[i]['originalPrice']}
                                </td>
                                <td className="lg-extra-price">
                                    ${data[i]['salePrice']}
                                </td>
                                <td className="lg-extra-seller">
                                    {data[i]['seller']}
                                </td>
                                <td className="lg-extra-button">
                                    <a href={data[i]['link']} target="_blank"><Button color="success" >Buy</Button></a>
                                </td>
                            </tr>
                        )
                    }
                    if (data[i]['component'] == 'Mouse') {
                        let url = '/yourBuild/' + info['Mouse']
                        setMouse(
                            <tr>
                                <td><a href={url}>Mouse</a></td>
                                <td className='lg-extra-name'>
                                    {data[i]['name']}
                                </td>
                                <td className="lg-extra-oprice">
                                    ${data[i]['originalPrice']}
                                </td>
                                <td className="lg-extra-price">
                                    ${data[i]['salePrice']}
                                </td>
                                <td className="lg-extra-seller">
                                    {data[i]['seller']}
                                </td>
                                <td className="lg-extra-button">
                                    <a href={data[i]['link']} target="_blank"><Button color="success" >Buy</Button></a>
                                </td>
                            </tr>
                        )
                    }
                    if (data[i]['component'] == 'Other') {
                        let url = '/yourBuild/' + info['Other']
                        setOther(
                            <tr>
                                <td><a href={url}>Other</a></td>
                                <td className='lg-extra-name'>
                                    {data[i]['name']}
                                </td>
                                <td className="lg-extra-oprice">
                                    ${data[i]['originalPrice']}
                                </td>
                                <td className="lg-extra-price">
                                    ${data[i]['salePrice']}
                                </td>
                                <td className="lg-extra-seller">
                                    {data[i]['seller']}
                                </td>
                                <td className="lg-extra-button">
                                    <a href={data[i]['link']} target="_blank"><Button color="success">Buy</Button></a>
                                </td>
                            </tr>
                        )
                    }      
                }
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
            alert(error);
        });
    }, [])

    
    
    return (
        <div>
            <header className="deals-header">
                <div className="text-center">
                    <h1 className="section-heading text-uppercase">Your Build</h1>
                    <h2 className="section-subheading text-muted">Keep track of your current parts and deals and purchase when you're ready.</h2>
                </div>
            </header>
            <main>
                <div className="select">
                    <div>Filter by components:</div>
                    <select className="form-control" onChange={handleChangeComponent} value={selected}>
                        {selectsOption}
                    </select>
                </div>
                <div className="container-fluid">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" className="th-cell">Component</th>
                                <th scope="col" className="th-cell-name">Deal Name</th>
                                <th scope="col" className="th-cell lg-extra-oprice">Original Price</th>
                                <th scope="col" className="th-cell lg-extra-price">Sale Price</th>
                                <th scope="col" className="th-cell lg-extra-seller">Seller</th>
                                <th scope="col" className="th-cell lg-extra-button">Buy</th>
                            </tr>
                        </thead>
                        <tbody>
                            {showTable()}
                            {/* {cpu}
                            {cpuCooler}
                            {motherBoard}
                            {ram}
                            {drive}
                            {gpu}
                            {cases}
                            {power}
                            {monitor}
                            {keyboard}
                            {mouse}
                            {other} */}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    )
}