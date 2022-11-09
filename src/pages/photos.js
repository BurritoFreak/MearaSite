import React from 'react';
import PhotoAlbum from "react-photo-album"

const Photos = () => {

	var tempPhotos = [{
		src: "https://i.imgur.com/H6AQA7N.jpeg",
		width: 100,
		height: 100
	}, {
		src: "https://i.imgur.com/9Sgm4RB.jpeg",
		width: 100,
		height: 200
	}, {
		src: "https://i.imgur.com/pWl9Wm6.jpeg",
		width: 100,
		height: 100
	},{
		src: "https://i.imgur.com/H6AQA7N.jpeg",
		width: 100,
		height: 100
	}, {
		src: "https://i.imgur.com/9Sgm4RB.jpeg",
		width: 100,
		height: 200
	}, {
		src: "https://i.imgur.com/pWl9Wm6.jpeg",
		width: 100,
		height: 100
	},{
		src: "https://i.imgur.com/H6AQA7N.jpeg",
		width: 100,
		height: 100
	}, {
		src: "https://i.imgur.com/9Sgm4RB.jpeg",
		width: 100,
		height: 200
	}, {
		src: "https://i.imgur.com/pWl9Wm6.jpeg",
		width: 100,
		height: 100
	},{
		src: "https://i.imgur.com/H6AQA7N.jpeg",
		width: 100,
		height: 100
	}, {
		src: "https://i.imgur.com/9Sgm4RB.jpeg",
		width: 100,
		height: 200
	}, {
		src: "https://i.imgur.com/pWl9Wm6.jpeg",
		width: 100,
		height: 100
	},{
		src: "https://i.imgur.com/H6AQA7N.jpeg",
		width: 100,
		height: 100
	}, {
		src: "https://i.imgur.com/9Sgm4RB.jpeg",
		width: 100,
		height: 200
	}, {
		src: "https://i.imgur.com/pWl9Wm6.jpeg",
		width: 100,
		height: 100
	}];
	return ( 
		<div>
		<PhotoAlbum photos = {tempPhotos} layout="masonry"/>
		</div>
	);
};

export default Photos;