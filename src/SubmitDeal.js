import React, { useState ,useEffect} from 'react';
import { getDatabase, ref, child, set as firebaseSet } from 'firebase/database';
import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';



export default function SubmitDeal(props) {
    const { isCreate, list } = props

    // Get input values
    const [componentInput, setComponentInput] = useState('CPU');
    const [nameInput, setNameInput] = useState('');
    const [ogPriceInput, setOgPriceInput] = useState('');
    const [salePriceInput, setSalePriceInput] = useState('');
    const [sellerInput, setSellerInput] = useState('');
    const [linkInput, setLinkInput] = useState('');
    const [detailsInput, setDetailsInput] = useState('');
    const [disabled, setdisabled] = useState(true)
    const [checkOver,setcheckOver] = useState({
        'name':false,
        'original-price':false,
        'sale-price':false,
        'seller':false,
        'link':false,
        'additional-details':false
    })
    
    const handleChangeComponent = (event) => {
        let newValue = event.target.value;
        setComponentInput(newValue);
    }
    const handleChangeName = (event) => {
        let newValue = event.target.value;
        setNameInput(newValue);
    }
    const handleChangeOgPrice = (event) => {
        let newValue = event.target.value;
        setOgPriceInput(newValue);
    }
    const handleChangeSalePrice = (event) => {
        let newValue = event.target.value;
        setSalePriceInput(newValue);
    }
    const handleChangeSeller = (event) => {
        let newValue = event.target.value;
        setSellerInput(newValue);
    }
    const handleChangeLink = (event) => {
        let newValue = event.target.value;
        setLinkInput(newValue);
    }
    const handleChangeDetails = (event) => {
        let newValue = event.target.value;
        setDetailsInput(newValue);
    }
    const parts = ['CPU', 'CPU Cooler', 'Motherboard', 'RAM', 'Hard Drive/Solid State Drive', 'GPU', 
                    'Case', 'Power Supply', 'Monitor', 'Keyboard', 'Mouse', 'Other'];
    const partsOption = parts.map((option) => {
        let component = <option key={option}>{option}</option>;
        return component;
    });

    const navigate = useNavigate();

    // Update variables on change
    let part = componentInput;
    let dealName = nameInput;
    let ogPrice = ogPriceInput;
    let salePrice = salePriceInput;
    let seller = sellerInput;
    let productLink = linkInput;
    let additionalInfo = detailsInput;

    const handleSubmit = (event) => {
        const { handleCreate } = props
        event.preventDefault();
        if(disabled){
            alert("Please fill out the form to proceed");
            return
        }
        alert("Your deal has been submitted. Click 'OK' to go back to your deals.");
        navigate("/deals")

        handleCreate(false)
        const tableList = list
        tableList.push({
            part,
            dealName,
            ogPrice,
            salePrice,
            seller,
            productLink,
            additionalInfo
        })
    }

    // Into realtime database
    const db = getDatabase();
    const parentDeals = ref(db, "deals");

    const insertInto = (part, dealName, ogPrice, salePrice, seller, productLink, additionalInfo) => {
        const dealFormRef = child(parentDeals, dealName);
        firebaseSet(dealFormRef, {
            "component" : part,
            "name" : dealName,
            "originalPrice" : ogPrice,
            "salePrice" : salePrice,
            "seller" : seller,
            "link" : productLink,
            "additional-details" : additionalInfo            
        });
    }

    const formSubmit = () => {
            insertInto(part, dealName, ogPrice, salePrice, seller, productLink, additionalInfo);
        }

    const validateRegexp = (elemName, type, mes) => {
        let elem = document.getElementById(elemName);
        let msg = document.getElementById(elemName + 'Msg')
        let checkDetail = checkOver
        let regexp = /\S/
        if(type === 'link'){
            regexp = IsURL() // /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/
        }else if(type === 'seller'){
            regexp = /^[^\~\d]/
        }
        if (regexp.test(elem.value)) {
            msg.innerHTML = '';
            checkDetail[elemName] = true
            setcheckOver(checkDetail)
            if(Object.values(checkDetail).every(o => o)){
                setdisabled(false)
            }
            return true;
        } else {
            msg.innerHTML = mes;
            msg.style.color = 'red';
            checkDetail[elemName] = false
            setcheckOver(checkDetail)
            if(Object.values(checkDetail).every(o => o)){
                setdisabled(false)
            }
            return false;
        }
    }

    const IsURL = () => {
        let strRegex = "^((https|http|ftp|rtsp|mms)?://)"
        + "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" //ftp的user@ 
         + "(([0-9]{1,3}\.){3}[0-9]{1,3}" // IP format (url)- 199.194.52.184 
         + "|" // allowed IP and domain）
         + "([0-9a-z_!~*'()-]+\.)*" // - www. 
         + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\." // second domain
         + "[a-z]{2,6})" // first level domain- .com or .museum 
         + "(:[0-9]{1,4})?" // port- :80 
         + "((/?)|" // a slash isn't required if there is no file name 
         + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$"; 
         let re=new RegExp(strRegex); 
         return re
    }
       

    return (
        <div className='container-fluid'>
            {
                isCreate ? 
                <header className="deals-header">
                <div className="text-center">
                    <h1 className="section-heading text-uppercase">Submit Deal</h1>
                    <h2 className="section-subheading text-muted">Log a new deal to keep track of.</h2>
                </div>
            </header>:''
            }
            <main>
            <form onSubmit={handleSubmit} className='container'>
                <div className="form-group">
                    <label>Component</label>
                    <select id="component" className="form-control" onChange={handleChangeComponent} value={componentInput}>
                        {partsOption}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="Deal-Product-Name">Deal Name</label>
                    <input onBlur={() => validateRegexp('name','','Please enter the deal name of selected component')} id='name' className="form-control" type="text" name="product" placeholder="e.g. Ryzen 5 3600" onChange={handleChangeName} value={nameInput}
                    />
                    <span id="nameMsg"></span>
                </div>  
                <div className="form-group">
                    <label htmlFor="Deal-Original-Price">Original Price ($)</label>
                    <input onBlur={() => validateRegexp('original-price','','Please enter the original price')} id='original-price' className="form-control" type="number" name="price" step="0.01" placeholder="0.00" onChange={handleChangeOgPrice} value={ogPriceInput}
                    />
                    <span id="original-priceMsg"></span>
                </div>
                <div className="form-group">
                    <label htmlFor="Deal-Sale-Price">Current Sale Price ($)</label>
                    <input onBlur={() => validateRegexp('sale-price','','please enter the current sale price')} id='sale-price' className="form-control" type="number" name="sale" step="0.01" placeholder="0.00" onChange={handleChangeSalePrice} value={salePriceInput}
                    />
                    <span id="sale-priceMsg"></span>
                </div>
                <div className="form-group" >
                    <label htmlFor="Deal-Seller">Seller(s)</label>
                    <input onBlur={() => validateRegexp('seller','seller','Seller could not be a number')} id='seller' className="form-control" type="text" name="seller" placeholder="e.g. Amazon, Walmart, etc." onChange={handleChangeSeller} value={sellerInput}
                    />
                    <span id="sellerMsg"></span>
                </div>
                <div className="form-group">
                    <label htmlFor="Deal-Link">Link</label>
                    <input onBlur={() => validateRegexp('link','link','Please enter the correct link')} id='link' className="form-control" type="text" name="link" placeholder="Enter specific product link https://www.bestbuy.com/" onChange={handleChangeLink} value={linkInput}
                    />
                    <span id="linkMsg"></span>
                </div>
                <div className="form-group">
                    <label htmlFor="Deal-Add-Details">Additional Details</label>
                    <input onBlur={() => validateRegexp('additional-details','','Please enter any additional detail, if no detail provided, just fill in no')} id='additional-details' className="form-control" type="text" name="detail" maxLength="300" onChange={handleChangeDetails} value={detailsInput}
                        placeholder="Max: 300 Characters"   />
                        <small>Be sure to include promo codes if required for the deal, and whether the deal is in-person
                            only
                            or not
                        </small>
                        <div><span id="additional-detailsMsg"></span></div>
                </div>
                {
                    isCreate ? 
                    <div className="dealButton"> 
                     <Button type="submit" color="primary" onClick={formSubmit}>Submit</Button>
                    </div>:''
                }
            </form>
            </main>
        </div>
    )
}