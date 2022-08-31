import "../../styles/components/layout/Footer.css"
<script src="https://kit.fontawesome.com/b09ad3d7ce.js"></script>


const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>company</h4>
                        <ul>
                            <li><a href="coaches">About Us</a></li>
                            <li><a href="gallery">Galery</a></li>
                            <li>©2022 Metropolitan GYM</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>social-Media</h4>
                        <ul>
                            <li><a href="https://www.instagram.com/metropolitangym/" target="_blank">INSTAGRAM</a></li>
                            <li><a href="https://www.facebook.com/clubmetropolitan" target="_blank">FACEBOOK</a></li>
                            <li><a href="https://www.youtube.com/user/clubmetropolitan" target="_blank">YOUTUBE</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Info</h4>
                        <ul>
                            <li>Number: +1 305-520-7029 </li>
                            <li>Email: info@metropolitangym.cop</li>
                            <li>Direction: 1830 N Bayshore Dr, Miami</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;