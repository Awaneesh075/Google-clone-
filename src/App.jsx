import './App.css'
function App() {
    return (
        <div className="app">
            {/* {<header className="app__header">
                <NavLink to="/todo" className="nav-link">Todo</NavLink>
                <button type="button" id="home">Home</button>
            </header>} */}



            <nav className="app__nav">
                <a href="https://about.google/">About</a>
                <a href="https://store.google.com/in/">
                    <button id="store">Store</button>
                </a>
                <a href="https://support.google.com/mail/answer/8494">
                    <button id="Gmail">Gmail</button>
                </a>
                <a href="https://www.google.com/imghp">
                    <button id="img">Images</button>
                </a>
                <a href="https://accounts.google.com/Login">
                    <button id="sign">Sign In</button>
                </a>
            </nav>

            <main className="app__main">
                <div className="logo">
                    <img
                        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                        alt="Google Logo"
                    />
                </div>

                <div className="search-bar">
                    <input type="text" id="search-input" placeholder="Search Google or type a URL" />
                    <div className="search-buttons">
                        <button id="search-btn">Google Search</button>
                        <button id="lucky-btn">I'm Feeling Lucky</button>
                    </div>
                </div>
            </main>

            <section className="location"><strong>India</strong></section>

            <footer className="app__footer">
                <a href="https://business.google.com/in/google-ads/">
                    <button id="Adv">Advertising</button>
                </a>
                <a href="https://business.google.com/in/business-profile/">
                    <button id="Business">Business</button>
                </a>
                <a href="https://www.google.com/search/howsearchworks/">
                    <button id="How">How Search Works</button>
                </a>
                <a href="https://policies.google.com/privacy">
                    <button id="Privacy">Privacy</button>
                </a>
                <a href="https://policies.google.com/terms">
                    <button id="Terms">Terms</button>
                </a>
                <button id="Setting">Settings</button>
            </footer>
        </div>
    );
}

export default App;
// function App() {
//     return (
//         <div className="app">
//             {/* {<header className="app__header">
//                 <NavLink to="/todo" className="nav-link">Todo</NavLink>
//                 <button type="button" id="home">Home</button>
//             </header>} */}



//             <nav className="app__nav">
//                 <a href="https://about.google/">About</a>
//                 <a href="https://store.google.com/in/">
//                     <button id="store">Store</button>
//                 </a>
//                 <a href="https://support.google.com/mail/answer/8494">
//                     <button id="Gmail">Gmail</button>
//                 </a>
//                 <a href="https://www.google.com/imghp">
//                     <button id="img">Images</button>
//                 </a>
//                 <a href="https://accounts.google.com/Login">
//                     <button id="sign">Sign In</button>
//                 </a>
//             </nav>

//             <main className="app__main">
//                 <div className="logo">
//                     <img
//                         src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
//                         alt="Google Logo"
//                     />
//                 </div>

//                 <div className="search-bar">
//                     <input type="text" id="search-input" placeholder="Search Google or type a URL" />
//                     <div className="search-buttons">
//                         <button id="search-btn">Google Search</button>
//                         <button id="lucky-btn">I'm Feeling Lucky</button>
//                     </div>
//                 </div>
//             </main>

//             <section className="location"><strong>India</strong></section>

//             <footer className="app__footer">
//                 <a href="https://business.google.com/in/google-ads/">
//                     <button id="Adv">Advertising</button>
//                 </a>
//                 <a href="https://business.google.com/in/business-profile/">
//                     <button id="Business">Business</button>
//                 </a>
//                 <a href="https://www.google.com/search/howsearchworks/">
//                     <button id="How">How Search Works</button>
//                 </a>
//                 <a href="https://policies.google.com/privacy">
//                     <button id="Privacy">Privacy</button>
//                 </a>
//                 <a href="https://policies.google.com/terms">
//                     <button id="Terms">Terms</button>
//                 </a>
//                 <button id="Setting">Settings</button>
//             </footer>
//         </div>
//     );
// }

// export default App;

