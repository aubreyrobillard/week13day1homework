import logo1 from './github.png'
import logo2 from './facebook.png'
import logo3 from './instagram.png'


function Footer(){
    return <div className="Footer">
        <ul>
            <li className="socials"><a href='https://git.generalassemb.ly/aubreyrobillard'><img src={logo1} alt='Github'></img></a></li>
            <li className="socials"><a href='https://www.facebook.com/aubrey.robillard.7/'><img src={logo2} alt='Facebook'></img></a></li>
            <li className="socials"><a href='https://www.instagram.com/aubrey_robillard_/'><img src={logo3} alt='Instagram'></img></a></li>
        </ul>
        <p>Aubrey Robillard</p>
        <p>Software Engineer</p>
    </div>
}

export default Footer;