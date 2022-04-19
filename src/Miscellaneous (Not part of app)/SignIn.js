import React, { useState } from 'react';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';



const firebaseUIConfig = {
    signInOptions: [ //array of sign in options supported
      //array can include just "Provider IDs", or objects with the IDs and options
      GoogleAuthProvider.PROVIDER_ID,
      { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },
    ],
    signInFlow: 'popup', //don't redirect to authenticate
    credentialHelper: 'none', //don't show the email account chooser
    callbacks: { //"lifecycle" callbacks
      signInSuccessWithAuthResult: () => {
        return false; //don't redirect after authentication
      }
    }
  }


export default function SignIn() {
    const auth = getAuth();
    
    return (
        
        <main>
        <div className="container-fluid no-padding flexDisplay">
          <div className="col log-in">
            <h2 className="text-center">Sign in</h2>
            <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
            {/* <div className="align-items-center text-center justify-content-center">
                <form className="log-in-form">
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Example@example.com"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control"/>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Sign In</button>
                    </div>
                    <div className="form-check" style={{'display':'flex','justifyContent':'center'}}>
                        <input className="form-check-input" type="checkbox" id="remember"/>
                        <label className="form-check-label" htmlFor="remember">Remember me</label>
                    </div>
                    <div>
                        <small>Don't have an account?</small>
                        <button type="submit" className="btn">Register Now</button>
                    </div>
                </form>
            </div> */}
            </div>
             <div className="col trending">
             <h2 className="text-center">Trending Deals</h2>
             <div className="container">
                 <div className="row">
                     <div className="card card-title card-text">
                         <div className="card-body">
                             <div className="row">
                                 <div className="col-auto">
                                     <img src="imgs/ryzen55600x.jpg" alt="Ryzen 5 5600X CPU" className="pb-4"/>
                                 </div>
                                 <div className="col">
                                     <h2>[CPU] AMD Ryzen 5 5600X</h2>
                                     <p className="card-text">$200, down from $249.99 (20%), from Amazon</p>
                                     <a href="https://www.amd.com/en/products/cpu/amd-ryzen-5-5600x"
                                         className="btn btn-primary">Go</a>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div className="row">
                     <div className="card card-title card-text">
                         <div className="card-body">
                             <div className="row">
                                 <div className="col-auto">
                                     <img src="imgs/obsidian500d.png" alt="Corsair Obsidian Series 500D Computer Case"
                                         className="pb-4"/>
                                 </div>
                                 <div className="col">
                                     <h2>[Case] Corsair Obsidian 500D</h2>
                                     <p className="card-text">$175, down from $274.99 (30%), from Amazon</p>
                                     <a href="https://www.corsair.com/us/en/Categories/Products/Cases/Software-Control-and-Monitoring-Cases/Obsidian-Series-500D-RGB-SE-Premium-Mid-Tower-Case/p/CC-9011139-WW"
                                         className="btn btn-primary">Go</a>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div className="row">
                     <div className="card card-title card-text">
                         <div className="card-body">
                             <div className="row">
                                 <div className="col-auto">
                                     <img src="imgs/rtx2060super.png" alt="Ryzen 5 5600X CPU" className="pb-4"/>
                                 </div>
                                 <div className="col">
                                     <h2>[GPU] RTX 2060 SUPER</h2>
                                     <p className="card-text">$320, down from $399.99 (20%), from Amazon</p>
                                     <a href="https://www.nvidia.com/en-me/geforce/graphics-cards/rtx-2060-super/" className="btn btn-primary">Go</a>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
             </div>   
             </div>
             </main>
                   
    )
}
