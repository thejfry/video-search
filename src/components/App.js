import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube.js'

const KEY = 'AIzaSyCfbOqs-QwSWCYwIZ6Q5BX_0412XpuVzsc';


class App extends React.Component{
    state = { videos: [] };

    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                part: 'snippet',
                type: 'video',
                maxResults: 5,
                key: KEY,
                q: term
            }
        });

        this.setState({ videos: response.data.items });
    };

    render(){
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit} />
                Found {this.state.videos.length} videos
            </div>
        );
    }
}

export default App;