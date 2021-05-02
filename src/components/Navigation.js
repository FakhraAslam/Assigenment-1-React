export const Navigation=(props)=>{
    return(
     <div className="U-Nav">
           <button  className="NavUI" onClick={props.btn_function} >{props.btn_name}</button>
        <br/><hr />
     </div>
      
      
    );

}