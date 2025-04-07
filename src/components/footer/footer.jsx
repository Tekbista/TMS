
import './footer.css'


const Footer = () => {
    const currentYear = new Date().getFullYear();
    return(
        <div className="footer text-center">
            <p>© {currentYear} Tek Bista</p>
        </div>
    )
}

export default Footer;