import '../App.css'

const Pakistan=(prop)=>{
    return(<div>
       
        <div className="row ">
        <h1 className="headertop">Pakistan Insights</h1>
        <div className="imgDsgn">
          <img src={prop.img } alt="Flag" width="100%" height="100%" />
        </div>
      </div>
     
        </div>);
    
}
export default Pakistan;