import React, { useState, useRef, useEffect } from 'react';


const Punjab = (prop) => {
  let [state, setState] = useState(""); //state for comment
  // let [namestate,namestateSet]=useState("");
  const prevCount = usePrevious(state) //function to save previous state

  function usePrevious(value) {
    const ref = useRef();
    // useEffect(() => {
    ref.current = value;

    // });
    return ref.current;
  }
  const handelclick = () => {

    let comment = document.getElementById('cmnt').value;
    let name = document.getElementById('nm').value;
    if (comment == "" || name == "") {
      let Addcomments = "dummy name" + ":" + "dummycomment" + "\n" + prevCount;
      setState(state = Addcomments);
      document.getElementById('publicComment').value = state;
    }
    else {
      let Addcomments = name + ":" + comment + "\n" + prevCount;
      setState(state = Addcomments);
      document.getElementById('publicComment').value = state;
    }
  }



  return (<div >

    <h1>Punjab Pakistan</h1>

    <div className="imgDsgn">
      <img className="imgDsgn" src={prop.img2} alt="Punjab view" width="50%" height="50%" />
    </div>

    <pre> this is punjab .<br />
        Pakistan's most populated and developed province
        its capital is lahore .<br />
        sialkot is well known city of punjab sells sport goods.<br />
        faislabad is good for textile goods .<br />
    </pre>

    <form>
      <label style={{ color: "brown", fontSize: "24px" }}>Add comment  </label>
      <br />
      <input id='cmnt' name="comment" size="40" type="Text" placeholder="Add comments" required />
      <br />
      <br />
      <input id='nm' name="comment" size="40" type="Text" placeholder="Add your name" required />
      <br />

      <input className="btn-add-cmnt" type="button" name="Add about Punjab" value="Add comment" onClick={handelclick} />
      <br />
      <label style={{ color: "brown" }} >Previous comments</label>
      <br />
      <textarea maxLength="50" size="40" id="publicComment" type="text" rows="4" cols="42" />
    </form>
  </div>);

}
export default Punjab;