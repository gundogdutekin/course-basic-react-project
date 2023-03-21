function Course({id,title, content,price,currency,removeOnedelete}) {
    return ( <div className="course">
        <h2 className="title">{title}</h2>
        <div className="price"><div>{price}<span className="currency">{currency}</span></div></div>
        <div className="content">{content}</div>
        <div className="buttonContainer">
        <button className="button" onClick={()=>{return removeOnedelete(id)}}>Sil</button>
        
        </div>
    </div> );
}

export default Course;