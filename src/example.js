// <img src={logo} className="App-logo" alt="logo" />

const quotes = [
  {author: "Boss Dog, Bob Ross",
  content: "There are no mistakes, only happy accidents."},
  {author: "Bob \"Bob Ross\" Ross",
  content: "Talent is a pursued interest. Anything that you're willing to practice, you can do."},
  {author: "Bob N. Ross",
  content: "Alright, let's get crazy."},
  {author: "Bob Ross",
  content: "Lets build a happy little cloud."},
  {author: "Robert Norman Ross",
  content: "Lets build some happy little trees."},
  {author: "Bob Ross",
  content: "And right there you got an almighty cloud."},
  {author: "Bob Ross the Devil Defeater",
  content: "Just beat the devil out of it."},
  {author: "Bob Ross",
  content: "Let's make a happy little mountain now."},
  {author: "Bob Ross",
  content: "There’s nothing wrong with having a tree as a friend."},
  {author: "Bob Ross",
  content: "Alizarin Crimson"},
  {author: "Bob Ross",
  content: "Cadmium Yellow"},
  {author: "Bob Ross",
  content: "Phthalo Blue"},
  {author: "Bob Ross",
  content: "Van Dyke Brown"},
  {author: "Bob Ross",
  content: "Yellow Ochre"}
];


class Quoter extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
      content: '',
      author: ''
    }

    this.newQuote = this.newQuote.bind(this);

  }

  newQuote() {
    let number = (Math.floor(Math.random() * 14));

    let quote = quotes[number].content;

    this.setState({content: quote})

    let author = quotes[number].author;
    this.setState({author: author})


    $(".quote-text").addClass('button-anim');
    $(".author-text").addClass('button-anim');
    setTimeout(function() {
      $(".quote-text").removeClass('button-anim');
      $(".author-text").removeClass('button-anim');
    }, 1500);

  }

  componentDidMount(){
    this.newQuote();
  }

  render() {
    return (
      <div id="quote-box" className="center-div">
        <Text quote={this.state.content} author={this.state.author} />
        <Buttons handleNewQuote={this.newQuote} quote={this.state.content} author={this.state.author} />
      </div>
    )
  }
}

class Text extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <h1 id="text" class="quote-text button-anim">"{this.props.quote}"</h1>
      <h2 id="author" class="author-text button-anim">- {this.props.author}</h2>
        </div>
    )
  }
}

class Buttons extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="buttons">
        <button type="button" id="new-quote" className="btn btn-success" onClick={this.props.handleNewQuote}>New Quote</button> <a id="tweet-quote" target="_blank" href={`https://twitter.com/intent/tweet/?text=${this.props.quote} - ${this.props.author}`}><button className="btn btn-info" >Tweet Quote</button></a>

      </div>
    )
  }
}

ReactDOM.render(
  <Quoter />,
  document.getElementById('content')
)

