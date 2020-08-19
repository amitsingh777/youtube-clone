import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component{

    state={videos:[],selectedVideo:null};

    componentDidMount(){
        this.onTermSubmit('children stories');
    }
    onTermSubmit=async(term)=>{
        const response=await youtube.get('/search',{
            params:{
                q:term,
                part:'snippet',
                key:'AIzaSyBFr4ktwpJY002onP9We0VT3xioSud-RTE'
            }
        });
        this.setState({
            videos:response.data.items,
            selectedVideo:response.data.items[1]
        });
        // console.log(this.state.videos);
    }

    onVideoSelect=(video)=>{
        this.setState({selectedVideo:video});
    }

    render(){
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row doubling two column">
                    
                        <div className="eleven wide column ">
                        <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column ">
                        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default App;