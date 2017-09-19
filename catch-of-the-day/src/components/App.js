import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
	constructor() {
		super();

		this.addFish = this.addFish.bind(this);
		this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
		this.state = {
			fishes: {},
			order: {}
		};
	}
	addFish(fish) {
		//update our state
		const fishes = {...this.state.fishes};
		// add in our fishes
		const timestamp = Date.now();
		fishes[`fish-${timestamp}`] = fish;
		//set state
		this.setState({fishes})
	}

	loadSamples() {
    console.log('[loadSamples]', sampleFishes, this)
		this.setState({
			fishes: sampleFishes
		});
	}

  addToOrder(key) {
    //take copy of our state
    const order = {...this.state.order};
    //update or add new number fo fish
    order[key] = order[key] + 1 || 1;
    // update our state
    this.setState({ order })


  }

	render() {
	  return (
	    <div className="catch-of-the-day">
	      <div className="menu">
	      <Header tagline="Fresh Seafood Market"/>
        <ul className="list-of-fishes" >
          {
            Object
              .keys(this.state.fishes)
              .map(key => <Fish key={key} index={key} addToOrder={this.addToOrder} details={this.state.fishes[key]} />)
          }

        </ul>
	      </div>
	      <Order fishes={this.state.fishes} order={this.state.order}/>
	      <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />


	    </div>
	    )
	 }
	}



export default App;
