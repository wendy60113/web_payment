function Input(props) {
    return (
        <div className="form-floating cardInput">
            <input className="form-control" id="floatingInput" value={props.content} name={props.name} placeholder="Title" onChange={props.changeEvent}/>
            <label htmlFor="floatingInput">{props.title}</label>
        </div>
    );
  }
  export default Input;
  