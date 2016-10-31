class List extends React.Component { 
  render() {
    return (
      <ul>
        <li>
      <ListElement title={} description={} path={}/>
        </li>
     </ul> 
    );
  }
}

class ListElem extends React.Component {
   constructor(){
    super();
    this.state={
    };
  };
  
  render() {
    return (
      <div>
        <img src={this.props.path}>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
      </div>
    );
  }
}
 
class Details extends React.Component {
   constructor(){
    super();
    this.state={
    };
  };
  
  render() {
    return (
      <div>
        <img src={this.props.path}>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <p>{this.props.created_at}</p>  
        <p>{this.props.subscribers_count}</p> 
        <p>{this.props.money_amount}</p> 
      </div>
    );
  }
}        
                      

