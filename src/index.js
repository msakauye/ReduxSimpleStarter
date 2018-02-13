import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'AIzaSyASg5YBCZA7fRQvjH0W-9t5Aqypgldpjj0';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.onSearch('chocolate rain');
    }

    render() {
        const videoSearch = _.debounce((term) => {
            this.onSearch(term);
        }, 300);
        return (
            <div>
                <SearchBar onSearch={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.onVideoSelect(selectedVideo)}
                    videos={this.state.videos} />
            </div>
        );
    }

    onVideoSelect (selectedVideo) {
        this.setState({ selectedVideo });
    }

    onSearch (term) {
        YTSearch({ key: API_KEY , term }, (videos) => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        });
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));