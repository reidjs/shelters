import React, { Component } from 'react';
import ShelterSearch from './ShelterSearch';
import SelectedShelters from './SelectedShelters';

class App extends Component {
  state = {
    selectedShelters: [],
  }

  removeShelterItem = (itemIndex) => {
    const filteredShelters = this.state.selectedShelters.filter(
      (item, idx) => itemIndex !== idx,
    );
    this.setState({ selectedShelters: filteredShelters });
  }

  addShelter = (shelter) => {
    const newShelters = this.state.selectedShelters.concat(shelter);
    this.setState({ selectedShelters: newShelters });
  }

  render() {
    const { selectedShelters } = this.state;

    return (
      <div className='App'>
        <div className='ui text container'>
          <SelectedShelters
            shelters={selectedShelters}
            onShelterClick={this.removeShelterItem}
          />
          <ShelterSearch
            onShelterClick={this.addShelter}
          />
        </div>
      </div>
    );
  }
}

export default App;
