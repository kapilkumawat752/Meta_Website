class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="footer">
            <div class="footer-column">
                <div class="p-5">
                    <h2 class="footer-column-heading">Metadologie</h2>
                    <p class="footer-content footer-font-size">
                    Behind every business lies a unique narrative waiting to be unveiled. Even in the
                    case of a startup, where the story may not be filled with decades of changes and 
                    growth, there's a compelling tale of how you arrived at your current venture.
                    </p>

                    <div class="social-icons">
                        
                        <a href="https://www.linkedin.com/company/metadologie/" class="fa fa-linkedin"></a>
                        <a href="https://instagram.com/metadologie" class="fa fa-instagram"></a>
                    </div>
                </div>
            </div>

        <div class="footer-column">
            <div class="p-5">

                <h2 class="footer-column-heading">Contact</h2>
                <table class="address-table footer-font-size">
                    <tr>
                        <td><i class="fa fa-map-marker"></i></td>
                        <td>
                            <h3 class="footer-column-sub-heading">INDIA</h3>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td> <a href="https://goo.gl/maps/P9W7sJ3uaXRdhDSU6">94/5, 1st & 2nd floor, Vijay Path, Madhyam Marg,
                         Sector 9, Mansarover, Jaipur, Rajasthan 302020</a></td>
                    </tr>
                    <tr>
                        <td><i class="fa fa-phone"></i></td>
                        <td><a href="tel:+919529329921">+91 9529329921</a></td>
                    </tr>
                    
                    <tr>
                        <td><i class="fa fa-envelope"></i></td>
                        <td><a href="mailto:info@metadologie.com">&nbsp;  info@metadologie.com</a></td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="footer-column">
        <div class="p-5">

            <h2 class="footer-column-heading small-screen-hide" style="color: midnightblue;">.</h2>

            <table class="address-table footer-font-size">
                <tr>
                    <td><i class="fa fa-map-marker"></i></td>
                    <td>
                        <h3 class="footer-column-sub-heading">USA</h3>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td><a href="#">18103 NE 68 ST,C200 Redmond, WA 98052, USA</a></td>
                </tr>
                <tr>
                    <td><i class="fa fa-phone"></i></td>
                    <td><a href="tel:+12067078600">+1 206-707-8600</a></td>
                </tr>
               
                <tr>
                    <td><i class="fa fa-envelope"></i></td>
                    <td><a href="mailto:sales@metadologie.com">&nbsp; sales@metadologie.com</a></td>
                </tr>
            </table>

        </div>
    </div>
            <div class="footer-column">
                <div class="p-5 small-size-flex">
                    <div>
                        <h2 class="footer-column-heading">Explore</h2>
                        <ul class="footer-font-size">
                            <li><a href="https://www.metadologie.com/">Dive In</a></li>
                            <li><a href="https://metadologie.com/Pages/aboutus.html">About Us</a></li>
                            <li><a href="https://metadologie.com/Pages/ourServices.html">Services</a></li>
                            <li><a href="https://metadologie.com/Pages/Industries.html">Industries</a></li>
                            <li><a href="https://metadologie.com/Pages/careers.html">Careers</a></li>
                            <li><a href="https://metadologie.com/Pages/contact-us.html">Contact Us</a></li>
                        </ul>
                    </div>
                    
                </div>
            </div>

            <div class="footer-column mobileFriendly">
                <div class="p-5 small-size-flex">
                    <div>
                        <h2 class="footer-column-heading discover">Discover</h2>
                        <ul class="footer-font-size">
                            <li><a href="https://metadologie.com/Pages/Industries.html">Expertise</a></li>
                            <li><a href="https://metadologie.com/Pages/aboutus.html">Insights</a></li>
                            <li><a href="https://metadologie.com/Pages/Industries.html">Industries</a></li>  
                        </ul>
                    </div>
                    <div>

                        <h2 class="footer-column-heading about">About</h2>
                        <ul class="footer-font-size">
                            <li><a href="https://metadologie.com/Pages/aboutus.html">About Metadologie</a></li>
                            <li><a href="https://metadologie.com/Pages/careers.html">Careers</a></li>
                            <li><a href="https://metadologie.com/Pages/aboutus.html">Life @ Metadologie</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
           
        </div>
                <div class='lower-footer'>
                <p>© Copyrights Metadologie
                2023. Salesforce,
                AppExchange, Sales Cloud, Service Cloud, and others are trademarks of <a rel="noopener" style="color: rgb(107,107,107) !important;" target="_blank" href="https://salesforce.com">salesforce.com</a>, inc.. All other
                trademarks
                are property of their respective owners.</p>
                </div>
        `;
  }
}

customElements.define("common-footer", Footer);
