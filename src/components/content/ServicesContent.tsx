// Desktop images
const Computer256 = "/img/256xComputer.webp"
const Install256 = "/img/256xInstall.webp"
const Research256 = "/img/256xResearch.webp"
const Support256 = "/img/256xSupport.webp"
const Upgrades256 = "/img/256xUpgrades.webp"

// Mobile images
const ComputerMob = "/img/mob1440x689Computer.webp"
const InstallMob = "/img/mob1440x689Install.webp"
const ResearchMob = "/img/mob1440x689Research.webp"
const SupportMob = "/img/mob1440x689Support.webp"
const UpgradesMob = "/img/mob1440x689Upgrades.webp"

const ServicesContent = () => {
  return (
    <section id="main" className="wrapper">
      <div className="inner">
        <div className="content borders no-select" id="computeropmaat">
          <>
            <table className="no-mobile pb-2">
              <tbody id="dienst-table">
                <tr>
                  <td id="com-computer">
                    <img src={Computer256} alt="Computer op maat" loading="eager" />
                  </td>
                  <td colSpan={2} className="content-dienst">
                    <h3>Computer op maat</h3>
                    Heeft u behoefte aan een nieuwere, snellere of krachtigere computer? Dan komt
                    dit goed uit! Heeft u deze computer nodig voor werk, studie of toch wat gaming
                    of creatief werk zoals 3D/CAD werk? Alles is mogelijk. Geef aan mij aan wat uw
                    werkzaamheden/activiteiten op de computer zullen zijn en dan stel ik de optimale
                    computer voor u samen. Ik blijf ook uiteraard uiterst up-to-date met betrekking
                    tot de nieuwste onderdelen en de prijs/prestatie verhouding ervan om u zo goed
                    mogelijk van dienst te kunnen zijn.
                  </td>
                </tr>
                <tr>
                  <td id="com-installatie">
                    <img src={Install256} alt="Installatie apparatuur" loading="eager" />
                  </td>
                  <td colSpan={2} className="content-dienst">
                    <h3>Installatie apparatuur</h3>
                    Bent u onderhand toe aan een nieuwe monitor voor uw computer, of toch eens een
                    nieuwe televisie of printer?. Ik kan u helpen met de optimale match voor u
                    vinden. Evengoed kan ik u uiteraard met meer apparatuur installaties helpen dan
                    alleen computers, tv&apos;s en monitoren. Heeft u bijvoorbeeld een
                    speaker-installatie die u op het oog heeft, maar geen idee of het waar voor uw
                    geld en gebruik is. Ik kan u uiteraard hiermee helpen. Advies van aankoop buiten
                    de &quot;Computer op maat&quot; dienst vallen overigens onder de &quot;Aankoop
                    advies&quot; dienst die ik aanbied.
                  </td>
                </tr>
                <tr>
                  <td id="com-advies">
                    <img src={Research256} alt="aankoopadvies" loading="eager" />
                  </td>
                  <td colSpan={2} className="content-dienst">
                    <h3>Aankoop advies</h3>
                    Zit u onderhand te denken aan het aanschaffen van een nieuwe computer, laptop,
                    tablet of een ander zogenoemde Smart-device maar weet u niet waar u op moet
                    letten? Dan help ik u hier graag mee. In het geval van een laptop is het
                    uiteraard vooral belangrijk dat u let op uw gebruik van het apparaat. Gaat u de
                    laptop bijvoorbeeld gebruiken voor huis, tuin en keukengebruik dan heeft u een
                    minder krachtige laptop nodig dan als u hem wilt gaan gebruiken voor gamen of
                    professioneel werk als 3D modelering en en animatie.
                  </td>
                </tr>
                <tr>
                  <td id="com-ondersteuning">
                    <img src={Support256} alt="Technische ondersteuning" loading="eager" />
                  </td>
                  <td colSpan={2} className="content-dienst">
                    <h3>Technische ondersteuning</h3>
                    Heeft u vaak last van computer storingen of functioneert uw computer niet naar
                    behoren? Komt u er maar niet uit wat dit veroorzaakt? Dat is vervelend om te
                    horen, want of u uw computer nou zakelijk of privé gebruikt,
                    &quot;onverklaarbaar&quot; gedrag van uw computer is in al deze gevallen
                    vervelend. Laat mij u helpen om deze storingen te verhelpen. Dan kunt u hopelijk
                    zo spoedig mogelijk uw computer weer naar behoren gebruiken.
                  </td>
                </tr>
                <tr>
                  <td id="com-upgrades">
                    <img src={Upgrades256} alt="Hardware upgrades" loading="eager" />
                  </td>
                  <td colSpan={2} className="content-dienst">
                    <h3>Hardware upgrades</h3>
                    Heeft u momenteel steeds last van een tekort aan opslag in uw laptop of desktop?
                    Of lijkt juist uw huidige computer of laptop traag waardoor uw gebruik van dit
                    apparaat alles behalve wenselijk is. Dit is gelukkig vrij simpel op te lossen
                    door deze onderdelen uit te breiden of te vervangen voor een betere, snellere of
                    grotere vervanging. Heeft uw gaming laptop of desktop betere onderdelen nodig om
                    de laatste videogames te kunnen spelen? Hier kan ik u gelukkig ook uiteraard mee
                    helpen.
                  </td>
                </tr>
              </tbody>
            </table>
          </>
          <>
            <table id="com-mobile" className="pb-2">
              <tbody id="dienst-table-mob">
                <tr id="mob-computer">
                  <td>
                    <img src={ComputerMob} alt="Computer op maat" loading="eager" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>Computer op maat</h3>
                    Heeft u behoefte aan een nieuwere, snellere of krachtigere computer? Dan komt
                    dit goed uit! Heeft u deze computer nodig voor werk, studie of toch wat gaming
                    of creatief werk zoals 3D/CAD werk? Alles is mogelijk. Geef aan mij aan wat uw
                    werkzaamheden/activiteiten op de computer zullen zijn en dan stel ik de optimale
                    computer voor u samen. Ik blijf ook uiteraard uiterst up-to-date met betrekking
                    tot de nieuwste onderdelen en de prijs/prestatie verhouding ervan om u zo goed
                    mogelijk van dienst te kunnen zijn.
                  </td>
                </tr>
                <tr id="mob-installatie">
                  <td>
                    <img src={InstallMob} alt="Installatie apparatuur" loading="eager" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>Installatie apparatuur</h3>
                    Bent u onderhand toe aan een nieuwe monitor voor uw computer, of toch eens een
                    nieuwe televisie of printer?. Ik kan u helpen met de optimale match voor u
                    vinden. Evengoed kan ik u uiteraard met meer apparatuur installaties helpen dan
                    alleen computers, tv&apos;s en monitoren. Heeft u bijvoorbeeld een
                    speaker-installatie die u op het oog heeft, maar geen idee of het waar voor uw
                    geld en gebruik is. Ik kan u uiteraard hiermee helpen. Advies van aankoop buiten
                    de &quot;Computer op maat&quot; dienst vallen overigens onder de &quot;Aankoop
                    advies&quot; dienst die ik aanbied.
                  </td>
                </tr>
                <tr id="mob-advies">
                  <td>
                    <img
                      src={ResearchMob}
                      alt="aankoopadvies hardware en software"
                      loading="eager"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>Aankoop advies</h3>
                    Zit u onderhand te denken aan het aanschaffen van een nieuwe computer, laptop,
                    tablet of een ander zogenoemde Smart-device maar weet u niet waar u op moet
                    letten? Dan help ik u hier graag mee. In het geval van een laptop is het
                    uiteraard vooral belangrijk dat u let op uw gebruik van het apparaat. Gaat u de
                    laptop bijvoorbeeld gebruiken voor huis, tuin en keukengebruik dan heeft u een
                    minder krachtige laptop nodig dan als u hem wilt gaan gebruiken voor gamen of
                    professioneel werk als 3D modelering en en animatie.
                  </td>
                </tr>
                <tr id="mob-ondersteuning">
                  <td>
                    <img src={SupportMob} alt="Technische ondersteuning" loading="eager" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>Technische ondersteuning</h3>
                    Heeft u vaak last van computer storingen of functioneert uw computer niet naar
                    behoren? Komt u er maar niet uit wat dit veroorzaakt? Dat is vervelend om te
                    horen, want of u uw computer nou zakelijk of privé gebruikt,
                    &quot;onverklaarbaar&quot; gedrag van uw computer is in al deze gevallen
                    vervelend. Laat mij u helpen om deze storingen te verhelpen. Dan kunt u hopelijk
                    zo spoedig mogelijk uw computer weer naar behoren gebruiken.
                  </td>
                </tr>
                <tr id="mob-upgrades">
                  <td>
                    <img src={UpgradesMob} alt="Hardware upgrades" loading="eager" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>Hardware upgrades</h3>
                    Heeft u momenteel steeds last van een tekort aan opslag in uw laptop of desktop?
                    Of lijkt juist uw huidige computer of laptop traag waardoor uw gebruik van dit
                    apparaat alles behalve wenselijk is. Dit is gelukkig vrij simpel op te lossen
                    door deze onderdelen uit te breiden of te vervangen voor een betere, snellere of
                    grotere vervanging. Heeft uw gaming laptop of desktop betere onderdelen nodig om
                    de laatste videogames te kunnen spelen? Hier kan ik u gelukkig ook uiteraard mee
                    helpen.
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        </div>
      </div>
    </section>
  )
}
export default ServicesContent
