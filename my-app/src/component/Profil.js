// resimleri ve css dosyasini import ettim.
import logo1 from './logo.jpg';
import instagram from './instagram.png';
import orta from './ORTA.png';
import son from './SON.png';
import cami from './camii.jpg';
import '../style.css';

// Sayfayi 3 e bolup logo,icerik ve footer kisimlarini fonksyona aktardim.
function Logo(){
    return(
        <div id="logo"><img src={logo1} width="1000" height="80" /></div>
    )
}
function Renkicin(){
    return(
        <div id="renkicin">
          <div id="menu">
            <ul class='dd_menu'>
              <li><a href='#'>Anasayfa</a> </li>
              <li><a href='#'>Hobilerim</a> </li>
              <li><a href='#'>Sosyal Medya</a>
                <ul>
                  <li><a href=''>Twitter</a></li>
                  <li><a href=''>Facebook</a></li>
                </ul>
              </li>
              <li><a href='#'>İletişim</a> </li>
            </ul>
            </div>
        </div>
    )
};

function Icerik(){
    return(
        <div class="icerik">
        <div id="sagilk">
          <div id="ilk"><img src={instagram} width="170" height="100" border="0" usemap="#Map" />
            <map name="Map" id="Map">
              <area shape="poly" coords="146,96,149,95" href="#" />
              <area shape="rect" coords="26,4,153,96" href="#" />
            </map>
          </div>
        <div id="orta"><a href="#/"><img src={son} width="170" height="100" border="0" usemap="#Map2" /></a>
          <map name="Map2" id="Map2">
            <area shape="rect" coords="66,16,141,71" href="#/" target="_blank" />
            <area shape="rect" coords="1,9,151,98" href="#" />
          </map>
        </div>
        <div id="alt"><img src={orta} width="170" height="100" border="0" usemap="#Map3" />
          <map name="Map3" id="Map3">
            <area shape="rect" coords="55,28,150,78" href="ANASAYFA.html" target="_blank" />
          </map>
        </div>
    </div>
        <div class="solsidebar">Buraya reklam verebilirsiniz</div>
        <div id="icerikrenk">
          <div id="resimalan">
          <p><img src={cami} width="460" height="360" /></p>
          <p>&nbsp;</p>
        </div>
    </div>
      </div>
    )
};

function Footer(){
    return(
        <div id="footer"><a href="#">ANASAYFA | BLOG | İLETİŞİM</a>
        <div id="footrenk"></div>
      </div>
    )
};

function Profil(){
    return(
        <div id="sayfa">
            <Logo/>
            <Renkicin/>
            <Icerik/>
            <Footer/>
        </div>
    );
}
export default Profil;
