import React, { useState } from 'react';


export default function BuildYourPC(props) {
    return (
        <>
  
        <header class="bg-light p-5 rounded-lg m-3">  
                    <h2 class="display-4">Build Your PC</h2>
                    <p class="lead">Keep track of your current parts and search for new ones here.</p>
                    <img src="imgs/computer_cross-section.jpg" alt="open computer with parts labeled"/> 
        </header>
            
            <main>
            <div class="container-fluid">
            <div class="row">
                    <div class="d-flex p-2 col-12 col-sm-6 col-lg-4">
                        <div class="card mb-4">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm">
                                        <h2 class="card-title">What is your budget?</h2>
                                    </div>
                                    <div class="col-sm">
                                        <div class="slider">
                                            <label for="customRange3" class="form-label">Budget</label>
                                            <input type="range" class="form-range" min="0" max="5" step="0.1"
                                                id="customRange3"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex p-2 col-12 col-sm-6 col-lg-4">
                        <div class="card mb-4">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm">
                                        <h2 class="card-title">What you'll need.</h2>
                                        <p class="check-off">Check off the parts that you already have.</p>
                                    </div>
                                    <div class="col-sm">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value=""
                                                id="flexCheckDefault"/>
                                            <label class="form-check-label" for="flexCheckDefault">
                                                CPU
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value=""
                                                id="flexCheckDefault"/>
                                            <label class="form-check-label" for="flexCheckDefault">
                                                CPU Cooler
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value=""
                                                id="flexCheckDefault"/>
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Motherboard
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value=""
                                                id="flexCheckDefault"/>
                                            <label class="form-check-label" for="flexCheckDefault">
                                                RAM
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value=""
                                                id="flexCheckDefault"/>
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Hard Drive/SSD
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value=""
                                                id="flexCheckDefault"/>
                                            <label class="form-check-label" for="flexCheckDefault">
                                                GPU
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value=""
                                                id="flexCheckDefault"/>
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Case
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value=""
                                                id="flexCheckDefault"/>
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Power Supply
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value=""
                                                id="flexCheckDefault"/>
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Monitor
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value=""
                                                id="flexCheckDefault"/>
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Keyboard
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value=""
                                                id="flexCheckDefault"/>
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Mouse
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value=""
                                                id="flexCheckDefault"/>
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Other
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value=""
                                                id="flexCheckDefault"/>
                                            <label class="form-check-label" for="flexCheckDefault">
                                                I don't any parts yet
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex p-2 col-12 col-sm-6 col-lg-4">
                        <div class="card mb-4">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm">
                                        <h2 class="card-title">What programs or games would you like to run on your PC?
                                        </h2>
                                    </div>
                                    <div class="col-sm">
                                        <form class="form-inline">
                                            <input class="form-control mr-sm-2" type="search" placeholder="Search"
                                                aria-label="Search"/>
                                            <button class="btn btn-outline-success my-2 my-sm-0"
                                                type="submit">Search</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    </main>
            </>
    )
}