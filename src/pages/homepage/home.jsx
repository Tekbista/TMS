
import HomeBanner from "../../components/banner/banner";
import NavigationBar from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"

function HomePage(){
    return(
        <div>
            <NavigationBar/>
            <HomeBanner />
            <Footer /> 
        </div>
    )
}

export default HomePage;