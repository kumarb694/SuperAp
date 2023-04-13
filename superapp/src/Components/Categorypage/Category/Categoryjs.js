import React from 'react'
import './Categorycss.css'
import c1img from '../../../Assessts/Cards/c1img.svg'
import c2img from '../../../Assessts/Cards/c2img.svg'
import c3img from '../../../Assessts/Cards/c3img.svg'
import c4img from '../../../Assessts/Cards/c4img.svg'
import c5img from '../../../Assessts/Cards/c5img.svg'
import c6img from '../../../Assessts/Cards/c6img.svg'
import c7img from '../../../Assessts/Cards/c7img.svg'
import c8img from '../../../Assessts/Cards/c8img.svg'
import c9img from '../../../Assessts/Cards/c9img.svg'
import { useRef } from 'react';
let yourselection=[];

function Categoryjs() {
  let erroref=useRef(null)

  let c1ref=useRef(null)
  let c2ref=useRef(null)
  let c3ref=useRef(null)
  let c4ref=useRef(null)
  let c5ref=useRef(null)
  let c6ref=useRef(null)
  let c7ref=useRef(null)
  let c8ref=useRef(null)
  let c9ref=useRef(null)
  
  let sc1ref=useRef(null)
  let sc2ref=useRef(null)
  let sc3ref=useRef(null)
  let sc4ref=useRef(null)
  let sc5ref=useRef(null)
  let sc6ref=useRef(null)
  let sc7ref=useRef(null)
  let sc8ref=useRef(null)
  let sc9ref=useRef(null)

  function clickhandlernextpage()
  {
    if(yourselection.length<=2)
    {
      erroref.current.style.display='block';
    }
    else
    {
      localStorage.setItem("selectcategories", yourselection);
      erroref.current.style.display='none';
      window.open('http://localhost:3000/', '_self');
    }
  } 
 
function clickhandlerc1()
{
  c1ref.current.style.border='6px solid #11B800';
  sc1ref.current.style.display='flex';
  yourselection.push("Action");
  
}
function clickhandlerc2()
{
  c2ref.current.style.border='6px solid #11B800';
  sc2ref.current.style.display='flex';
  yourselection.push("Drama");
  
}
function clickhandlerc3()
{
  c3ref.current.style.border='6px solid #11B800';
  sc3ref.current.style.display='flex';
  yourselection.push("Romance");
  
}
function clickhandlerc4()
{
  c4ref.current.style.border='6px solid #11B800';
  sc4ref.current.style.display='flex';
  yourselection.push("Thriller");
  
}
function clickhandlerc5()
{
  c5ref.current.style.border='6px solid #11B800';
  sc5ref.current.style.display='flex';
  yourselection.push("Western");
  
}
function clickhandlerc6()
{
  c6ref.current.style.border='6px solid #11B800';
  sc6ref.current.style.display='flex';
  yourselection.push("Horror");
  
}
function clickhandlerc7()
{
  c7ref.current.style.border='6px solid #11B800';
  sc7ref.current.style.display='flex';
  yourselection.push("Fantasy");
  
}
function clickhandlerc8()
{
  c8ref.current.style.border='6px solid #11B800';
  sc8ref.current.style.display='flex';
  yourselection.push("Music");
  
}
function clickhandlerc9()
{
  c9ref.current.style.border='6px solid #11B800';
  sc9ref.current.style.display='flex';
  yourselection.push("Fiction");
  
}
function clickhandlersc1()
{
 c1ref.current.style.border='none';
 sc1ref.current.style.display='none';
 let deletecategoryindex=yourselection.indexOf("Action");
 yourselection.splice(deletecategoryindex, 1);
 
}
function clickhandlersc2()
{
 c2ref.current.style.border='none';
 sc2ref.current.style.display='none';
 let deletecategoryindex=yourselection.indexOf("Drama");
 yourselection.splice(deletecategoryindex, 1);
 
}
function clickhandlersc3()
{
 c3ref.current.style.border='none';
 sc3ref.current.style.display='none';
 let deletecategoryindex=yourselection.indexOf("Romance");
 yourselection.splice(deletecategoryindex, 1);
 
}
function clickhandlersc4()
{
 c4ref.current.style.border='none';
 sc4ref.current.style.display='none';
 let deletecategoryindex=yourselection.indexOf("Thriller");
 yourselection.splice(deletecategoryindex, 1);
 
}
function clickhandlersc5()
{
 c5ref.current.style.border='none';
 sc5ref.current.style.display='none';
 let deletecategoryindex=yourselection.indexOf("Western");
 yourselection.splice(deletecategoryindex, 1);
 
}
function clickhandlersc6()
{
 c6ref.current.style.border='none';
 sc6ref.current.style.display='none';
 let deletecategoryindex=yourselection.indexOf("Horror");
 yourselection.splice(deletecategoryindex, 1);
 
}
function clickhandlersc7()
{
 c7ref.current.style.border='none';
 sc7ref.current.style.display='none';
 let deletecategoryindex=yourselection.indexOf("Fantasy");
 yourselection.splice(deletecategoryindex, 1);
 
}
function clickhandlersc8()
{
 c8ref.current.style.border='none';
 sc8ref.current.style.display='none';
 let deletecategoryindex=yourselection.indexOf("Music");
 yourselection.splice(deletecategoryindex, 1);

}
function clickhandlersc9()
{
 c9ref.current.style.border='none';
 sc9ref.current.style.display='none';
 let deletecategoryindex=yourselection.indexOf("Fiction");
 yourselection.splice(deletecategoryindex, 1);
 
}

  return (
    <>
        <div className="categorypage">
            <div className="cph1">Super app</div>
            <div className="cph2"  >Choose your entertainment category</div>
            <div className="allcategories">
              <div className="c c1" ref={c1ref} onClick={clickhandlerc1} >
              <div className="c1h1">
                Action
              </div>
                <img src={c1img} alt="pic" className="c1img" />
              </div>

              <div  className="c c2" ref={c2ref} onClick={clickhandlerc2} >
              <div className="c2h1">
                Drama
              </div>
                <img src={c2img} alt="pic" className="c2img" />
              </div>
              <div className="c c3" ref={c3ref} onClick={clickhandlerc3} >
              <div className="c3h1"    >
                Romance
              </div>
                <img src={c3img} alt="pic" className="c3img" />
              </div>
              <div className="c c4" ref={c4ref} onClick={clickhandlerc4}>
              <div className="c4h1"    >
                Thriller
              </div>
                <img src={c4img} alt="pic" className="c4img" />
              </div>
              <div className="c c5"  ref={c5ref} onClick={clickhandlerc5}  >
              <div className="c5h1">
                Western
              </div>
                <img src={c5img} alt="pic" className="c5img" />
              </div>
              <div className="c c6" ref={c6ref} onClick={clickhandlerc6}  >
              <div className="c6h1">
                Horror
              </div>
                <img src={c6img} alt="pic" className="c6img" />
              </div>
              <div className="c c7"  ref={c7ref} onClick={clickhandlerc7}  >
              <div className="c7h1">
                Fantasy
              </div>
                <img src={c7img} alt="pic" className="c7img" />
              </div>
              <div className="c c8"  ref={c8ref} onClick={clickhandlerc8}  >
              <div className="c8h1">
                Music
              </div>
                <img src={c8img} alt="pic" className="c8img" />
              </div>
              <div className="c c9"  ref={c9ref} onClick={clickhandlerc9}  >
              <div className="c9h1">
                Fiction
              </div>
                <img src={c9img} alt="pic" className="c9img" />
              </div>
            </div>
            <button className="nextpbtn" onClick={clickhandlernextpage}>
              Next Page
            </button>
            <div className="selectedcategories">
              <div className="sc1" ref={sc1ref} >
                <div className="sc1h">
                  Action
                </div>
                <div className="sc1x" onClick={clickhandlersc1}>
                  X
                </div>
              </div>
              <div className="sc2" ref={sc2ref}>
                <div className="sc2h">
                  Drama
                </div>
                <div className="sc2x" onClick={clickhandlersc2} >
                  X
                </div>
              </div>
              <div className="sc3" ref={sc3ref}>
                <div className="sc3h">
                  Romance
                </div>
                <div className="sc3x" onClick={clickhandlersc3}>
                  X
                </div>
              </div>
              <div className="sc4" ref={sc4ref} >
                <div className="sc4h">
                  Thriller
                </div>
                <div className="sc4x" onClick={clickhandlersc4} >
                  X
                </div>
              </div>
              <div className="sc5" ref={sc5ref} >
                <div className="sc5h">
                  Western
                </div>
                <div className="sc5x" onClick={clickhandlersc5} >
                  X
                </div>
              </div>
              <div className="sc6" ref={sc6ref} >
                <div className="sc6h">
                  Horror
                </div>
                <div className="sc6x" onClick={clickhandlersc6} >
                  X
                </div>
              </div>
              <div className="sc7" ref={sc7ref} >
                <div className="sc7h">
                  Fantasy
                </div>
                <div className="sc7x" onClick={clickhandlersc7} >
                  X
                </div>
              </div>
              <div className="sc8" ref={sc8ref} >
                <div className="sc8h">
                  Music
                </div>
                <div className="sc8x" onClick={clickhandlersc8} >
                  X
                </div>
              </div>
              <div className="sc9" ref={sc9ref} >
                <div className="sc9h">
                  Fiction
                </div>
                <div className="sc9x" onClick={clickhandlersc9} >
                  X
                </div>
              </div>
            </div>
            <div className="errormessage" ref={erroref} >
              Please select atleast 3 categories.
            </div>
        </div>
    </>
  )
}

export default Categoryjs