//document.write("It works.");
//require("!style!css!./style.css");
window.jQuery = require('jquery');
require("bootstrap-webpack");
require("./style.css");

var React = require('react');
var ReactDOM = require('react-dom');

class MyComponent extends React.Component {
  render() {
    const list = [1,2,3,4,5,6,7,"a"].map(n =>{
      return (
        < li className = "list-group-item" key={n}>
          <span className="badge">{n}</span>
          {new Date().toString()}
        </li>
      );
    });
    return (
      < ul className = "list-group" >
        {list}
      < /ul > );
  }
}

//ReactDOM.render(<MyComponent />, node);  node指MyComponent渲染在哪里
ReactDOM.render( < MyComponent / > , document.body);

/*
document.write(require("./content.js"));
document.write(`
  <h1>我来也！</h1>
  <button class="btn btn-primary"><i class="glyphicon glyphicon-flash"></i> 闪电</button>
  <!-- Split button -->
<div class="btn-group">
  <button type="button" class="btn btn-primary">Action</button>
  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="caret"></span>
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
    <li role="separator" class="divider"></li>
    <li><a href="#">Separated link</a></li>
  </ul>
</div>
`);
*/
