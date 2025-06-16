import React, { Component } from "react";

class Filter extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { filter, onFilter } = this.props

        return(
            <input 
          type="text"
          name="filter"
          value={filter}
          onChange={onFilter}
          placeholder="Search..."/>
        )
    }
}

export default Filter