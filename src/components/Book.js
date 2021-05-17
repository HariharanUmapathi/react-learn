function Book(view)
{
switch(view){
    case "full":
        return(<div className='FullView'></div>);
    case "compact":
        return(<div className='CompactView'></div>);
    case "detail":
        return(<div className='DetailView'></div>);
    default:
        return(<div className="CompactView"></div>);    
}
}