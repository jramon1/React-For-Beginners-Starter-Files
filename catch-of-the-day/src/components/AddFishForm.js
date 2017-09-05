import React from 'react';



class AddFishForm extends React.Component {

	createFish(event) {
		event.preventDefault();
		console.log("Gonna make some fish!")

	}



  render() {
    return (
    <form className="fish-edit" onSubmit={(e) => this.createFish(e)}>
    	<input type="text" placeholder="Fish Name" />
    	<input type="text" placeholder="Fish Price" />
    	<select>	
    		<option value="available" > Fresh!</option>
    		<option value="unavailable"> Sold Out !</option>

    	</select>
    	
    	<textarea placeholder="Fish Desc"> </textarea>
    	<input type="text" placeholder="Fish Image" />
    	<button type="submit"> Add item</button>
    </form>
    )
  }
}


export default AddFishForm;