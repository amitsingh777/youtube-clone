import React from 'react';

class SearchBar extends React.Component{
    state={term:""};

    onFormSubmit=(e)=>{
        e.preventDefault();
        this.props.onFormSubmit(this.state.term);
    
    }

    onInputChange=(e)=>{
        this.setState({term:e.target.value});
    }


    render(){
        return(
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>
                            Enter Something
                        </label>
                        <input    //controlled element, not getting value from real Dom but from state
                        type="text" 
                        placeholder="Search"  
                        value={this.state.term}
                        onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;