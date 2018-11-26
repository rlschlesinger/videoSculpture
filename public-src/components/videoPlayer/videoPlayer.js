import React, { Component } from 'react';

export default class videoPlayer extends Component {
	let videoSource = new Array();
	videoSource[0] = 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4';
	videoSource[1] = 'http://html5doctor.com/demos/video-canvas-magic/video.mp4';
	let i = 0; // define i
	let videoCount = videoSource.length;

	function videoPlay(videoNum) {
		document.getElementById("myVideo").setAttribute("src", videoSource[videoNum]);
		document.getElementById("myVideo").load();
		document.getElementById("myVideo").play();
	}
	document.getElementById('myVideo').addEventListener('ended', myHandler, false);
	videoPlay(0); // play the video

	function myHandler() {
		i++;
		if (i === (videoCount - 1)) {
			i = 0;
			videoPlay(i);
		}
		
		else {
			videoPlay(i);
		}
	}
	
	render() {
		return (
		<video controls id="myVideo" >
		</video>
		);
	}
}
