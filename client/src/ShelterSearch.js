
import React from 'react';
import Client from './Client';

const MATCHING_ITEM_LIMIT = 25;

class ShelterSearch extends React.Component {
  state = {
    shelters: [],
    showRemoveIcon: false,
    searchValue: '',
  };

  handleSearchChange = (e) => {
    const value = e.target.value;

    this.setState({
      searchValue: value,
    });

    if (value === '') {
      this.setState({
        shelters: [],
        showRemoveIcon: false,
      });
    } else {
      this.setState({
        showRemoveIcon: true,
      });

      Client.search(value, (shelters) => {
        this.setState({
          shelters: shelters.slice(0, MATCHING_ITEM_LIMIT),
        });
      });
    }
  };

  handleSearchCancel = () => {
    this.setState({
      shelters: [],
      showRemoveIcon: false,
      searchValue: '',
    });
  };

  render() {
    const { showRemoveIcon, shelters } = this.state;
    const removeIconStyle = showRemoveIcon ? {} : { visibility: 'hidden' };

    const shelterRows = shelters.map((shelter, idx) => (
      <tr
        key={idx}
        onClick={() => this.props.onShelterClick(shelter)}
      >
        <td>{shelter.name}</td>
        <td>{shelter.description}</td>
        <td>{shelter.beds}</td>
      </tr>
    ));

    return (
      <div id='food-search'>
        <table className='ui selectable structured large table'>
          <thead>
            <tr>
              <th colSpan='5'>
                <div className='ui fluid search'>
                  <div className='ui icon input'>
                    <input
                      className='prompt'
                      type='text'
                      placeholder='Search shelters...'
                      value={this.state.searchValue}
                      onChange={this.handleSearchChange}
                    />
                    <i className='search icon' />
                  </div>
                  <i
                    className='remove icon'
                    onClick={this.handleSearchCancel}
                    style={removeIconStyle}
                  />
                  <div className="ui checkbox">
                    <input type="checkbox" name="example"/>
                    <label>Has beds available</label>
                  </div>
                </div>
              </th>
            </tr>
            <tr>
              <th className='eight wide'>Name</th>
              <th className='eight wide'>Description</th>
              <th className='eight wide'>Beds</th>
            </tr>
          </thead>
          <tbody>
            {shelterRows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ShelterSearch;
