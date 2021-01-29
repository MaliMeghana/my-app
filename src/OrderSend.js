import {useEffect, useState} from 'react';


function OrderSend()
{
    return(
        <div className="container-fluid">
           <OrderSend1/>
        </div>
    );
}
function OrderSend1()
{
        // Update the document title using the browser API
        const localproduct=localStorage.getItem("product");
        const localproductobj=JSON.parse(localproduct);
        const localuser=localStorage.getItem("user");
         const localuserobj=JSON.parse(localuser);
     
 return(
     <div className="container-fluid">
        <div className="container">
            <table className="table">
                <tr>
                    <td><h3>Order Information</h3></td>
                </tr>
                <tr>
                    <td>Product :</td><td>{localproductobj.productname}</td>
                </tr>
                <tr>
                    <td>Name :</td><td>{localuserobj.name}</td>
                </tr>
                <tr>
                    <td>Address :</td><td>{localuserobj.add}</td>
                </tr>
                <tr>
                    <td>Mobile No :</td><td>{localuserobj.mobile}</td>
                </tr>
                <tr>
                    <td>Product Quantity :</td><td>1</td>
                </tr>
                <tr>
                    <td>Payment Mode :</td><td>COD</td>
                </tr>
                <tr>
                    <td>Total Amount :</td><td>{localproductobj.price}</td>
                </tr>               
                <tr>
                    <td style={{color:"green"}}><h3>Order Placed Succesfully</h3></td>
                </tr>
            </table>
        </div>
     </div>
 );   
}

export default OrderSend;