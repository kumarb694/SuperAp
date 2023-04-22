import React, { useRef } from 'react'
import personphoto from '../../../Assessts/Images/Homepageimages/personphoto.svg'
import '../Home/Homecss.css'
function Homejs() {
  let info = localStorage.getItem('p0');
  let persondata=[];
  let temp="";
  for(let i=0; i<info.length; i++)
  {
    if(info[i]===',')
    {
      persondata.push(temp);
      temp="";
    }
    else
    {
      temp=temp+info[i];
    }
  }
  if(temp.length!==0)
    {
      persondata.push(temp);
    }
    let selectedcategories = localStorage.getItem('selectcategories');
    let categoriesdata=[];
    temp="";
    for(let i=0; i<selectedcategories.length; i++)
    {
      if(selectedcategories[i]===',')
      {
        categoriesdata.push(temp);
        temp="";
      }
      else
      {
        temp=temp+selectedcategories[i];
      }
    }
    if(temp.length!==0)
      {
        categoriesdata.push(temp);
      }
      // console.log(categoriesdata);  
  return (
    <>
      <div className="homepagegp">
          <div className="homepagep">
            <div className="homepageleftpart">
                <div className="personinfo">
                  <div className="personphoto">
                        <img src={personphoto} alt="personpic" className="personimage" />
                  </div>
                  <div className="persondetails">
                        <div className="formdetails">
                          <div className="formdetailsinside">
                              <div className="storedname" >{persondata[0]}</div>
                              <div className="storedmail" >{persondata[2]}</div>
                              <div className="storedusername">{persondata[1]}</div>
                          </div>
                        </div>
                        <div className="categorydetails">
                          {
                            categoriesdata.map((d)=>(<div className="storedcategory">{d}</div>))
                          }
                        </div>
                  </div>
                </div>
                <div className="weather">

                </div>
            </div>
            <div className="homepagerightpart">

            </div>
          </div>
      </div>
    </>
  )
}

export default Homejs