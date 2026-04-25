import {BrowserRouter,Routes,Route,Link } from "react-router-dom";
export function SpaIndex(){
    return(
        <div className="container-fluid">
            <h2 className="text-center bg-dark text-white p-2">Web Tutorial</h2>
            <BrowserRouter>
            <section className="row">
            <nav className="col-3">
                <ul className="list-unstyled">
                    <li className="mb-2"><Link to="home">Home</Link></li>
                    <li  className="mb-2"><Link to="html">HTML</Link></li>
                    <li  className="mb-2"><Link to="css">CSS</Link></li>
                    <li  className="mb-2"><Link to="javascript">Javascript</Link></li>
                </ul>
                
            </nav>
            <main className="col-9">
                <Routes>
                    <Route path="/home" element={
                        <div>
                            <h2>Tutorial- Home</h2>
                            <ul className="list-unstyled">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                            </ul>
                        </div>
                    } />

                    <Route path="/html" element={
                        <div>
                            <h2>HTML</h2>
                            <p>HTML is a Hyper Text MArkup Language used to create webpages</p>
                           
                        </div>
                    } />
                    <Route path="/css" element={
                        <div>
                            <h2>CSS</h2>
                            <p>Css is used to apply styles to webpages</p>
                           
                        </div>
                    } />
                    <Route path="/javascript" element={
                        <div>
                            <h2>Javascript</h2>
                            <p>Javascript is used to create dynamic webpages</p>
                           
                        </div>
                    } />
                    <Route path="/" element= {
                        <h2>Select a Topic</h2>
                    }/>
                    <Route path="*" element={
                        <code>Not Found:Page you requested Not Found</code>
                    } />
                </Routes>
            </main>
            </section>
            </BrowserRouter>
        </div>

    )
}